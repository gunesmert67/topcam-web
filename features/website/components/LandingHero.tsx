import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Phone, ArrowRight, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { ROUTES } from '@/config/routes'

export function LandingHero() {
  return (
    <section className="relative overflow-hidden hero-pattern pt-8 pb-20 lg:pt-14 lg:pb-28 border-b border-white/10 select-none">
      {/* Arka plan ışık efektleri */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sol Kolon: Metin & CTA */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            
            {/* Rozet */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold self-center lg:self-start">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Topçam Güvenlik Sistemleri | Yerinde Mobil Montaj Hizmeti</span>
            </div>

            {/* Ana Başlık */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Mekanınız ve Araçlarınız İçin{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Kesintisiz Güvenlik
              </span>
            </h1>

            {/* Açıklama */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              İş yerinize ve evinize yüksek çözünürlüklü IP/AHD güvenlik kamerası ve alarm; tır, kamyon, iş makinesi ve binek aracınıza kör nokta önleyici ön-arka kamera ve santral altyapısı kuruyoruz.
            </p>

            {/* Hızlı Avantaj Maddeleri */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-sm text-slate-200 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Gece Renkli Görüş</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Kusursuz Gizli Kablo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Telefondan 7/24 İzleme</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Tır & Ağır Vasıta Seti</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>İş Makinesi Kör Nokta</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Hızlı Teknik Destek</span>
              </div>
            </div>

            {/* Eylem Butonları */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-900/40 transition-all hover:scale-[1.02]"
              >
                <span>Hemen Fiyat & Teklif Al</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{siteConfig.contact.phoneFormatted}</span>
              </a>
            </div>

            {/* İletişim e-posta & Instagram mini info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-400">
              <span>📧 {siteConfig.contact.email}</span>
              <span>•</span>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                📸 {siteConfig.contact.instagramHandle}
              </a>
            </div>

          </div>

          {/* Sağ Kolon: Görsel Vitrin Kartları */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Ana Görsel Kartı */}
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900/90 shadow-2xl p-2.5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/guvenlik-kamera-sistemi.webp"
                    alt="Topçam Güvenlik Kamera Sistemleri"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[11px] font-bold mb-1">
                      İş Yeri & Konut Çözümleri
                    </span>
                    <h3 className="text-white text-base font-bold leading-snug">
                      IP & AHD Gece Görüşlü Kamera Sistemleri
                    </h3>
                    <p className="text-slate-300 text-xs">
                      Telefon ve bilgisayarınızdan canlı izleme, geriye dönük sesli kayıt
                    </p>
                  </div>
                </div>
              </div>

              {/* Alt Floating Kartlar */}
              <div className="mt-4 grid grid-cols-2 gap-3.5">
                <Link
                  href={ROUTES.serviceTrucks}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-colors"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/20">
                    <Image
                      src="/images/tir-arac-kamera.webp"
                      alt="Tır Kamera Sistemi"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-white">Tır & Kamyon</h4>
                    <p className="text-[10px] text-slate-300">Kör nokta & Mobil DVR</p>
                  </div>
                </Link>

                <Link
                  href={ROUTES.servicePassengerCars}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-colors"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/20">
                    <Image
                      src="/images/on-arka-arac-kamera.webp"
                      alt="Binek Araç Yol Kayıt Kamerası"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-white">Binek Araç</h4>
                    <p className="text-[10px] text-slate-300">Ön & Arka Yol Kayıt</p>
                  </div>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
