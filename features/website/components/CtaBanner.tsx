import { Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { ContactForm } from './ContactForm'

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#070D1E] py-20 text-white select-none border-t border-white/10">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sol: Bilgi & Hızlı İletişim */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Güvenliğinizi Ertelemeyin,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Bugün Önlem Alın.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Mekanınız veya aracınız için en uygun kamera sistemini belirleyelim. Yerinde mobil montaj ve net fiyat için bize hemen ulaşın.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/40 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp’tan Anında Yazın</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{siteConfig.contact.phoneFormatted}</span>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2 text-xs text-slate-400">
              <p>📍 {siteConfig.contact.address}</p>
              <p>⏱️ {siteConfig.contact.workHours}</p>
            </div>
          </div>

          {/* Sağ: İletişim Formu */}
          <div className="lg:col-span-6 text-foreground">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}
