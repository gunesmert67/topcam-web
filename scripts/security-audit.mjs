
import { escapeHtml, sanitizeHeaderValue, isValidEmail, sanitizeFilename } from '../lib/security.ts'
import { checkRateLimit } from '../lib/rate-limit.ts'
import fs from 'fs'
import path from 'path'

let passed = 0
let failed = 0

function assert(condition, testName) {
  if (condition) {
    console.log(`  \x1b[32m✔\x1b[0m [PASS] ${testName}`)
    passed++
  } else {
    console.error(`  \x1b[31m✖\x1b[0m [FAIL] ${testName}`)
    failed++
  }
}

console.log('\n==================================================')
console.log('🛡️  TOPÇAM GÜVENLİK SİSTEMLERİ - GÜVENLİK TESTİ  🛡️')
console.log('==================================================\n')

console.log('1. XSS ve HTML Enjeksiyonu Koruması:')
assert(
  escapeHtml('<script>alert("xss")</script>') === '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;',
  'Script etiketleri ve çift tırnaklar başarıyla encode edildi'
)
assert(
  escapeHtml("onload='evil()' & > <") === 'onload=&#39;evil()&#39; &amp; &gt; &lt;',
  'Tek tırnak, büyüktür, küçüktür ve ampersand başarıyla encode edildi'
)
assert(escapeHtml('') === '', 'Boş string güvenle işlendi')

console.log('\n2. E-posta Başlık ve HTTP Yanıt Bölme (CRLF) Koruması:')
assert(
  sanitizeHeaderValue('Subject\r\nBcc: hacker@saldiri.com') === 'Subject Bcc: hacker@saldiri.com',
  'CRLF satır sonu karakterleri boşluğa dönüştürüldü'
)
assert(
  sanitizeHeaderValue('Kadir Topçam\n\rInject') === 'Kadir Topçam Inject',
  'Çoklu yeni satır karakterleri arındırıldı'
)

console.log('\n3. Katı E-posta Format Denetimi (RFC 5321 / RFC 5322):')
assert(isValidEmail('kadirtopcam34@gmail.com'), 'Geçerli e-posta onaylandı')
assert(isValidEmail('info@topcamguvenlik.com'), 'Kurumsal e-posta onaylandı')
assert(!isValidEmail('invalid-email'), 'Formatı bozuk e-posta reddedildi')
assert(!isValidEmail('evil@domain.com\r\nBcc: hacker@evil.com'), 'CRLF içeren e-posta katı şekilde reddedildi')
assert(!isValidEmail(''), 'Boş e-posta reddedildi')
assert(!isValidEmail('a'.repeat(300) + '@gmail.com'), 'RFC limitini aşan (254 char) e-posta reddedildi')

console.log('\n4. Path Traversal ve Dosya Adı Güvenliği:')
assert(
  sanitizeFilename('../../etc/passwd') === '_.._etc_passwd',
  'Dizin geçişi (../) karakterleri temizlendi'
)
assert(
  sanitizeFilename('dosya:adı*test?.png') === 'dosya_adı_test_.png',
  'Zararlı özel karakterler arındırıldı'
)

console.log('\n5. DoS ve Brute Force Hız Sınırlayıcı (Rate Limiter):')
const testIp = '192.168.1.999'
const limit = 5
const windowMs = 60000

let allAllowed = true
for (let i = 0; i < limit; i++) {
  const res = checkRateLimit(testIp, limit, windowMs)
  if (!res.success) allAllowed = false
}
assert(allAllowed, 'İlk 5 istek başarıyla onaylandı (izin verilen limit)')

const blockedRes = checkRateLimit(testIp, limit, windowMs)
assert(!blockedRes.success && blockedRes.remaining === 0, '6. istek hız sınırı aşıldığı için engellendi (HTTP 429)')
assert(blockedRes.resetInSeconds > 0, 'Kalan bekleme süresi (resetInSeconds) doğru hesaplandı')

console.log('\n6. HTTP Güvenlik Başlıkları Yapılandırması (next.config.ts):')
const nextConfigContent = fs.readFileSync(path.resolve('next.config.ts'), 'utf8')

assert(nextConfigContent.includes('Strict-Transport-Security'), 'HSTS (Strict-Transport-Security) tanımlı')
assert(nextConfigContent.includes('X-Content-Type-Options') && nextConfigContent.includes('nosniff'), 'nosniff tanımlı')
assert(nextConfigContent.includes('X-Frame-Options') && nextConfigContent.includes('DENY'), 'X-Frame-Options: DENY (Clickjacking koruması) tanımlı')
assert(nextConfigContent.includes('Content-Security-Policy'), 'CSP (Content-Security-Policy) tanımlı')
assert(nextConfigContent.includes('Permissions-Policy'), 'Permissions-Policy (Kamera/Mikrofon/Konum kısıtlamaları) tanımlı')
assert(nextConfigContent.includes('poweredByHeader: false'), 'X-Powered-By gizleme aktif')

console.log('\n7. WebP Görsellerin ve Varlıkların Varlık/Bütünlük Testi:')
const requiredImages = [
  'public/images/topcam-logo.webp',
  'public/images/guvenlik-kamera-sistemi.webp',
  'public/images/tir-arac-kamera.webp',
  'public/images/is-makinesi-kamera.webp',
  'public/images/on-arka-arac-kamera.webp',
  'public/images/alarm-sistemleri.webp',
  'public/images/kamera-server.webp',
  'public/favicon.ico',
  'public/favicon-32x32.png',
  'public/favicon-16x16.png',
  'public/apple-touch-icon.png',
  'public/android-chrome-192x192.png',
  'public/android-chrome-512x512.png',
  'public/images/og-image.jpg',
  'public/images/og-image.png',
  'app/icon.png',
  'app/apple-icon.png'
]

let allFilesExist = true
for (const img of requiredImages) {
  if (!fs.existsSync(path.resolve(img))) {
    allFilesExist = false
    console.error(`  Eksik dosya: ${img}`)
  }
}
assert(allFilesExist, 'Tüm WebP ürün görselleri ve favicon/app iconları diskte eksiksiz mevcut')

console.log('\n==================================================')
console.log(`TEST SONUCU: ${passed} Başarılı | ${failed} Başarısız`)
console.log('==================================================\n')

if (failed > 0) {
  process.exit(1)
}
