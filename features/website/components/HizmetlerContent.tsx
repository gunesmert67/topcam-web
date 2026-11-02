import Image from 'next/image'
import { servicesData } from '../data/services'
import { siteConfig } from '@/config/site'
import { CheckCircle2, ArrowRight, ShieldCheck, Phone, Wrench } from 'lucide-react'

export function HizmetlerContent() {
  return (
    <div className="pt-24 pb-14 sm:pt-32 sm:pb-20 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Bölümü */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-3">
            Hizmetlerimiz
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            İş yeri, ev, tır, iş makinesi ve binek araçlar için profesyonel kamera ve alarm montajı.
          </p>
        </div>

        {/* Hizmet Listesi - Detaylı Kartlar */}
        <div className="flex flex-col gap-16">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-28 rounded-3xl border border-border bg-card p-5 sm:p-8 lg:p-10 shadow-apple-lg transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Görsel */}
                  <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-2'}`}>
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white border border-border p-4 sm:p-6 flex items-center justify-center shadow-sm">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-contain p-2 transition-transform duration-300 hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow-sm">
                        {service.badge}
                      </span>
                    </div>

                    {/* Teknik Özet Tablosu */}
                    <div className="mt-4 rounded-xl bg-secondary p-3.5 sm:p-4 border border-border text-xs flex flex-col gap-2">
                      <span className="font-bold text-foreground">Teknik Özellikler:</span>
                      {service.specs.map((sp, i) => (
                        <div key={i} className="flex flex-col xs:flex-row xs:justify-between border-b border-border/50 pb-1 text-muted-foreground gap-0.5">
                          <span className="font-medium text-foreground">{sp.label}:</span>
                          <span className="xs:text-right text-foreground/80">{sp.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metin İçeriği */}
                  <div className={`lg:col-span-7 flex flex-col gap-4 ${isEven ? '' : 'lg:order-1'}`}>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Öne Çıkan Özellikler */}
                    <div className="pt-1 sm:pt-2">
                      <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-blue-600" />
                        <span>Sistem Avantajları:</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Uygulama Alanları */}
                    <div className="pt-1 sm:pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Uygulama Alanları:
                      </h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {service.applicationAreas.map((area, i) => (
                          <span
                            key={i}
                            className="px-2.5 sm:px-3 py-1 rounded-xl bg-secondary text-foreground text-xs font-semibold border border-border"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Butonlar */}
                    <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <a
                        href={`https://wa.me/905425710078?text=Merhaba,%20${encodeURIComponent(service.title)}%20hizmetiniz%20hakk%C4%B1nda%20fiyat%20ve%20ke%C5%9Fif%20talebinde%20bulunmak%20istiyorum.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center min-h-[44px] gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.99] hover:scale-105"
                      >
                        <span>WhatsApp’tan Fiyat & Keşif İste</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>

                      <a
                        href={`tel:${siteConfig.contact.phoneRaw}`}
                        className="inline-flex items-center justify-center min-h-[44px] gap-2 px-5 py-3 rounded-xl bg-secondary hover:bg-slate-200 text-foreground font-semibold text-xs sm:text-sm border border-border transition-colors active:scale-[0.99]"
                      >
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span>Hemen Telefonla Danış</span>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            )
          })}
        </div>

        {/* Alt Çağrı Kartı */}
        <div className="mt-20 rounded-3xl bg-[#0B132B] text-white p-8 sm:p-12 text-center flex flex-col items-center shadow-apple-lg">
          <ShieldCheck className="w-12 h-12 text-blue-400 mb-4" />
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Özel Bir Projeniz veya Filo Talebiniz mi Var?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mb-8 leading-relaxed">
            Topçam Güvenlik Sistemleri; çoklu araç filoları, fabrika sahaları ve kamu/özel sektör projelerinde yerinde keşif yaparak en uygun bütçeli anahtar teslim çözümleri hazırlar.
          </p>
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition-all hover:scale-105"
          >
            <span>Kadir Topçam ile Doğrudan İletişime Geç</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  )
}
