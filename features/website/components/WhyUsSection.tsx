import { Wrench, Shield, Smartphone, Truck, Headphones, Award } from 'lucide-react'

const features = [
  {
    icon: Wrench,
    title: 'Kusursuz Gizli İşçilik',
    desc: 'Kablo kirliliği olmadan; araç döşemesi ve mekan dekorasyonuna zarar vermeyen estetik montaj.'
  },
  {
    icon: Shield,
    title: 'Garantiyi Bozmayan Montaj',
    desc: 'Orijinal kabloları kesmeden sigorta baypası (fuse-tap) ile aracınızın fabrika garantisini koruyoruz.'
  },
  {
    icon: Smartphone,
    title: 'Telefondan 7/24 Canlı İzleme',
    desc: 'iOS ve Android uygulamasıyla dünyanın her yerinden anlık canlı görüntü ve kayıt tarama.'
  },
  {
    icon: Truck,
    title: 'Ağır Vasıta & Şantiye Uzmanlığı',
    desc: 'Tır, kamyon, vinç ve iş makinelerinde sarsıntıya ve zorlu yol şartlarına dayanıklı kurulum.'
  },
  {
    icon: Award,
    title: '1. Sınıf Dayanıklı Ekipman',
    desc: 'Sony gece görüş sensörleri, geniş açılı lensler ve IP68 metal zırhlı dış ortam kameraları.'
  },
  {
    icon: Headphones,
    title: 'Hızlı Servis & Doğrudan İletişim',
    desc: 'Kadir Topçam ile doğrudan iletişim; aynı gün keşif, net fiyat ve satış sonrası teknik destek.'
  }
]

export function WhyUsSection() {
  return (
    <section className="py-16 sm:py-20 bg-background select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            Neden Topçam Güvenlik?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Bütçenize uygun ekipmanı seçiyor, kablo kirliliği yaratmadan profesyonelce kuruyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex flex-col p-5 sm:p-7 rounded-3xl border border-border bg-card shadow-apple transition-all duration-300 hover:shadow-apple-lg hover:border-blue-200 group"
              >
                <div className="w-11 h-11 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
