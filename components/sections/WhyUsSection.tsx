import { Wrench, Shield, Smartphone, Truck, Headphones, Award } from 'lucide-react'

const features = [
  {
    icon: Wrench,
    title: 'Kusursuz ve Gizli İşçilik',
    desc: 'Kablo kirliliği ve dağınık hatlar olmadan; dekorasyona veya araç döşemesine zarar vermeyen estetik ve gizli kanal montajı.'
  },
  {
    icon: Shield,
    title: 'Garantiyi Bozmayan Araç Montajı',
    desc: 'Orijinal elektrik tesisatını kesmeden, sigorta baypası (fuse-tap) ile aracınızın fabrika garantisini %100 koruyoruz.'
  },
  {
    icon: Smartphone,
    title: 'Mobil Uygulama ile 7/24 İzleme',
    desc: 'Dünyanın neresinde olursanız olun iOS ve Android telefonunuzdan canlı izleme, geçmiş kayıt tarama ve anlık hareket bildirimleri.'
  },
  {
    icon: Truck,
    title: 'Ağır Vasıta & Şantiye Tecrübesi',
    desc: 'Tırlar, kamyonlar, vinçler ve ekskavatörlerde yüksek voltaj, titreşim ve su geçirmezlik standartlarında profesyonel montaj.'
  },
  {
    icon: Award,
    title: '1. Sınıf Orijinal Ekipmanlar',
    desc: 'Kör nokta bırakmayan geniş açılı lensler, Sony STARVIS gece görüş sensörleri ve endüstriyel kalitede dayanıklı donanımlar.'
  },
  {
    icon: Headphones,
    title: 'Hızlı Servis ve Doğrudan İletişim',
    desc: 'Aracılar veya çağrı merkezi bekleme sıraları olmadan; Kadir Topçam ve uzman saha teknisyenlerimizle doğrudan iletişim imkanı.'
  }
]

export function WhyUsSection() {
  return (
    <section className="py-20 bg-background select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Neden Topçam Güvenlik?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mt-4 mb-4">
            Güvenliğinizi Şansa Bırakmayan Uzmanlık
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Bizim için her montaj bir referanstır. En uygun bütçeyle en doğru donanımı seçiyor, titiz işçilikle teslim ediyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex flex-col p-8 rounded-3xl border border-border bg-card shadow-apple transition-all duration-300 hover:shadow-apple-lg hover:border-blue-200 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
