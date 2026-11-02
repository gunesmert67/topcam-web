import Image from 'next/image'
import Link from 'next/link'
import { servicesData } from '../data/services'
import { ROUTES } from '@/config/routes'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function ServicesSection() {
  return (
    <section className="py-20 bg-secondary/50 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Bölüm Başlığı */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Hizmet Alanlarımız
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mt-4 mb-4">
            Mekanınız ve Araçlarınız İçin Profesyonel Çözümler
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            İş yeri güvenlik kameralarından tır ve iş makinelerine, binek araç yol kayıt kameralarından santral ve server ağlarına kadar uçtan uca profesyonel kurulum.
          </p>
        </div>

        {/* Hizmet Kartları Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden shadow-apple transition-all duration-300 hover:shadow-apple-lg hover:-translate-y-1"
            >
              {/* Görsel */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow-md">
                  {service.badge}
                </span>
              </div>

              {/* İçerik */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {service.summary}
                </p>

                {/* Öne çıkan maddeler */}
                <div className="flex flex-col gap-2 mb-6 mt-auto">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-foreground/80 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Alt Aksiyon Butonları */}
                <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                  <Link
                    href={`/hizmetler#${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-blue-600 transition-colors"
                  >
                    <span>Detayları İncele</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/905425710078?text=Merhaba,%20${encodeURIComponent(service.title)}%20hakk%C4%B1nda%20fiyat%20ve%20bilgi%20almak%20istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-colors"
                  >
                    <span>Fiyat İste</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alt Bilgi & Tümünü Gör */}
        <div className="mt-12 text-center">
          <Link
            href={ROUTES.services}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#0B132B] hover:bg-slate-800 text-white font-bold text-sm shadow-lg transition-all hover:scale-105"
          >
            <span>Tüm Hizmet Detayları ve Uygulama Alanları</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
