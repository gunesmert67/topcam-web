import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { escapeHtml, sanitizeHeaderValue, isValidEmail } from '@/lib/security'
import { checkRateLimit, getClientIp } from '@/lib/rate-limit'

const MAX_PAYLOAD_BYTES = 32 * 1024 // 32 KB maximum payload size
const RATE_LIMIT_COUNT = 5 // max 5 requests
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000 // per 15 minutes

const SECURITY_HEADERS = {
  'Cache-Control': 'no-store, no-cache, must-revalidate',
  'Pragma': 'no-cache',
}

export async function POST(req: NextRequest) {
  try {
    // 1. Content-Length Check (DoS Prevention)
    const contentLength = req.headers.get('content-length')
    if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { error: 'İstek boyutu çok büyük.' },
        { status: 413, headers: SECURITY_HEADERS }
      )
    }

    // 2. Content-Type Check
    const contentType = req.headers.get('content-type') || ''
    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Geçersiz içerik türü. application/json bekleniyor.' },
        { status: 415, headers: SECURITY_HEADERS }
      )
    }

    // 3. IP-based Rate Limiting
    const clientIp = getClientIp(req.headers)
    const rateLimit = checkRateLimit(clientIp, RATE_LIMIT_COUNT, RATE_LIMIT_WINDOW_MS)

    const rateLimitHeaders = {
      ...SECURITY_HEADERS,
      'X-RateLimit-Limit': String(RATE_LIMIT_COUNT),
      'X-RateLimit-Remaining': String(rateLimit.remaining),
    }

    if (!rateLimit.success) {
      return NextResponse.json(
        { error: 'Çok fazla istek gönderildi. Lütfen bir süre sonra tekrar deneyin.' },
        {
          status: 429,
          headers: {
            ...rateLimitHeaders,
            'Retry-After': String(rateLimit.resetInSeconds),
          },
        }
      )
    }

    // 4. Safe JSON Parsing
    let body: Record<string, unknown>
    try {
      body = await req.json()
    } catch {
      return NextResponse.json(
        { error: 'Geçersiz JSON verisi.' },
        { status: 400, headers: rateLimitHeaders }
      )
    }

    // 5. Bot & Spam Honeypot Check
    if (body.website_hp || body.honeypot) {
      return NextResponse.json({ success: true }, { headers: rateLimitHeaders })
    }

    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const serviceType = typeof body.serviceType === 'string' ? body.serviceType.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''

    // 6. Strict Field Validation
    if (!name || (!email && !phone) || !message) {
      return NextResponse.json(
        { error: 'Lütfen adınızı, iletişim bilginizi (telefon veya e-posta) ve mesajınızı doldurun.' },
        { status: 400, headers: rateLimitHeaders }
      )
    }

    // 7. Field Length Limits
    if (name.length > 100 || serviceType.length > 120 || phone.length > 35 || message.length > 3000) {
      return NextResponse.json(
        { error: 'Girilen alanlardan biri izin verilen maksimum uzunluğu aşıyor.' },
        { status: 400, headers: rateLimitHeaders }
      )
    }

    // 8. Strict Email Format (if provided)
    if (email && !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Geçersiz e-posta adresi.' },
        { status: 400, headers: rateLimitHeaders }
      )
    }

    // 9. Input Sanitization
    const safeName = escapeHtml(name)
    const safeServiceType = escapeHtml(serviceType || 'Genel Bilgi / Fiyat Talebi')
    const safePhone = escapeHtml(phone)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>')

    // 10. Send Email via Resend if API key exists
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      const resend = new Resend(resendApiKey)
      await resend.emails.send({
        from: 'Topçam Güvenlik İletişim <onboarding@resend.dev>',
        to: ['kadirtopcam34@gmail.com'],
        replyTo: safeEmail || undefined,
        subject: sanitizeHeaderValue(`[Web İletişim] ${safeName} - ${safeServiceType}`),
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #0b132b; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">Yeni İletişim & Fiyat Talebi</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: bold;">Ad Soyad:</td>
                <td style="padding: 8px 0; color: #0b132b;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Talep Edilen Hizmet:</td>
                <td style="padding: 8px 0; color: #0b132b;">${safeServiceType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Telefon:</td>
                <td style="padding: 8px 0; color: #0b132b;"><a href="tel:${safePhone}">${safePhone || '-'}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: bold;">E-posta:</td>
                <td style="padding: 8px 0; color: #0b132b;"><a href="mailto:${safeEmail}">${safeEmail || '-'}</a></td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-radius: 6px; border-left: 4px solid #2563eb;">
              <strong style="color: #0b132b; display: block; margin-bottom: 8px;">Mesaj / Talep Detayı:</strong>
              <p style="color: #334155; margin: 0; line-height: 1.6;">${safeMessage}</p>
            </div>
            <p style="margin-top: 25px; font-size: 11px; color: #94a3b8; text-align: center;">Bu e-posta Topçam Güvenlik Sistemleri web sitesi üzerinden gönderilmiştir.</p>
          </div>
        `,
      })
    } else {
      console.log('Topçam Web Form Submitted (DEV MODE - No RESEND_API_KEY):', {
        name: safeName,
        serviceType: safeServiceType,
        phone: safePhone,
        email: safeEmail,
        message: safeMessage,
      })
    }

    return NextResponse.json(
      { success: true, message: 'Mesajınız başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz.' },
      { headers: rateLimitHeaders }
    )
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: 'Mesaj gönderilirken bir hata oluştu. Lütfen doğrudan WhatsApp veya telefon ile ulaşın.' },
      { status: 500, headers: SECURITY_HEADERS }
    )
  }
}
