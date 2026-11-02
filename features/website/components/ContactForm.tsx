'use client'

import * as React from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Güvenlik Kamera Sistemi Kurulumu',
    message: '',
    website_hp: '',
  })

  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = React.useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Mesaj iletilemedi. Lütfen tekrar deneyin.')
      }

      setStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: 'Güvenlik Kamera Sistemi Kurulumu',
        message: '',
        website_hp: '',
      })
    } catch (err: unknown) {
      setStatus('error')
      if (err instanceof Error) {
        setErrorMessage(err.message)
      } else {
        setErrorMessage('Beklenmedik bir hata oluştu. Lütfen WhatsApp veya telefon ile ulaşın.')
      }
    }
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-apple-lg">
      <h3 className="text-xl font-bold text-foreground mb-2">Ücretsiz Keşif & Fiyat Teklifi İsteyin</h3>
      <p className="text-sm text-muted-foreground mb-6">
        İhtiyacınız olan güvenlik veya kamera sistemini belirtin, size en uygun çözümü ve fiyatı hazırlayalım.
      </p>

      {status === 'success' ? (
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center animate-in fade-in">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
          <h4 className="text-base font-bold text-emerald-900 mb-1">Talebiniz Alındı!</h4>
          <p className="text-sm text-emerald-700 mb-4 leading-relaxed">
            Bilgileriniz Kadir Topçam ve ekibine ulaştı. En kısa sürede telefon veya e-posta yoluyla sizinle iletişime geçeceğiz.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatus('idle')}
            className="rounded-xl border-emerald-300 text-emerald-800 hover:bg-emerald-100"
          >
            Yeni Mesaj Gönder
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="website_hp"
            value={formData.website_hp}
            onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-name">Adınız Soyadınız *</Label>
              <Input
                id="contact-name"
                required
                placeholder="Örn: Mert Güneş"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-phone">Telefon Numaranız *</Label>
              <Input
                id="contact-phone"
                required
                type="tel"
                placeholder="0542 000 0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-email">E-posta Adresiniz (Opsiyonel)</Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="ornek@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-service">İlgilendiğiniz Hizmet</Label>
              <select
                id="contact-service"
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="h-10 w-full rounded-xl border border-input bg-card px-3.5 py-2 text-sm text-foreground transition-all outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20"
              >
                <option value="Güvenlik Kamera Sistemi (IP/AHD/Analog)">İş Yeri / Ev Güvenlik Kamera Sistemi</option>
                <option value="Tır & Ağır Vasıta Kamera Montajı">Tır / Kamyon Kör Nokta & Mobil DVR</option>
                <option value="İş Makinesi Kamera Montajı">İş Makinesi (Forklift, Vinç, Ekskavatör)</option>
                <option value="Binek Araç Ön & Arka Kamera Montajı">Binek Araç Ön ve Arka Yol Kayıt Kamerası</option>
                <option value="Alarm ve Yangın Sistemi">Hırsız & Yangın Alarm Sistemleri</option>
                <option value="Santral & Server Ağ Altyapısı">Santral & Server / Rack Kabinet</option>
                <option value="Bakım & Teknik Servis">Mevcut Sistem Bakımı & Teknik Servis</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="contact-message">Mesajınız / Talep Detayları *</Label>
            <Textarea
              id="contact-message"
              required
              placeholder="Kaç adet kamera düşündüğünüzü, mekanınızın durumunu veya montaj yapılacak araç bilgilerini belirtebilirsiniz..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="min-h-24"
            />
          </div>

          {errorMessage && (
            <div className="flex items-center gap-2 rounded-xl bg-destructive/10 p-3 text-xs font-semibold text-destructive">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={status === 'loading'}
            size="lg"
            className="w-full mt-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md shadow-blue-900/20"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                <span>Gönderiliyor...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                <span>Fiyat Teklifi ve Bilgi Talebini İlet</span>
              </>
            )}
          </Button>

          <p className="text-[11px] text-muted-foreground text-center mt-2">
            Verileriniz KVKK kapsamında gizli tutulur. Acil durumlarda doğrudan{' '}
            <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-primary font-semibold hover:underline">
              {siteConfig.contact.phoneFormatted}
            </a>{' '}
            hattını arayabilirsiniz.
          </p>
        </form>
      )}
    </div>
  )
}
