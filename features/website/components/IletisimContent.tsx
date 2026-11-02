import { siteConfig } from '@/config/site'
import { ContactForm } from './ContactForm'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/icons'

export function IletisimContent() {
  return (
    <div className="pt-24 pb-14 sm:pt-32 sm:pb-20 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Üst Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-3">
            İletişim & Teklif Talebi
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Araç veya mekanınız için kamera ve alarm fiyatı almak için telefon, WhatsApp veya form üzerinden doğrudan ulaşabilirsiniz.
          </p>
        </div>

        {/* Ana İçerik Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sol Kolon: İletişim Bilgileri */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Telefon Kartı */}
            <div className="rounded-3xl border border-border bg-card p-4 sm:p-6 shadow-apple flex items-start gap-3.5 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">Telefon & Arama</span>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="text-base sm:text-lg font-bold text-foreground hover:text-blue-600 transition-colors mt-0.5"
                >
                  {siteConfig.contact.phoneFormatted}
                </a>
                <span className="text-xs text-muted-foreground mt-0.5">Haftanın 7 günü doğrudan arayabilirsiniz</span>
              </div>
            </div>

            {/* WhatsApp Kartı */}
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/40 p-4 sm:p-6 shadow-apple flex items-start gap-3.5 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-xs font-semibold text-emerald-800 uppercase tracking-wider">WhatsApp Hızlı Destek</span>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-bold text-emerald-950 hover:underline mt-0.5 truncate"
                >
                  Anında Mesaj Gönderin
                </a>
                <span className="text-xs text-emerald-700 mt-0.5">Fotoğraf veya video ileterek hızlı fiyat alın</span>
              </div>
            </div>

            {/* E-posta Kartı */}
            <div className="rounded-3xl border border-border bg-card p-4 sm:p-6 shadow-apple flex items-start gap-3.5 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">E-Posta Adresi</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm sm:text-base font-bold text-foreground hover:text-blue-600 transition-colors mt-0.5 break-all"
                >
                  {siteConfig.contact.email}
                </a>
                <span className="text-xs text-muted-foreground mt-0.5">Resmi teklif ve kurumsal projeler için</span>
              </div>
            </div>

            {/* Instagram Kartı */}
            <div className="rounded-3xl border border-border bg-card p-4 sm:p-6 shadow-apple flex items-start gap-3.5 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-pink-500/10 text-pink-600 flex items-center justify-center shrink-0">
                <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">Instagram Takip</span>
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-bold text-foreground hover:text-pink-600 transition-colors mt-0.5 break-all"
                >
                  {siteConfig.contact.instagramHandle}
                </a>
                <span className="text-xs text-muted-foreground mt-0.5">Uygulama videoları, montaj örnekleri ve hikayeler</span>
              </div>
            </div>

            {/* Konum & Saatler */}
            <div className="rounded-3xl border border-border bg-secondary/60 p-6 flex flex-col gap-3 text-xs text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground block">Hizmet Bölgesi:</strong>
                  <span>İstanbul geneli mobil yerinde montaj & Türkiye çapında kurumsal proje desteği.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-border">
                <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground block">Çalışma Saatleri:</strong>
                  <span>{siteConfig.contact.workHours}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Sağ Kolon: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  )
}
