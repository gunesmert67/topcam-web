import Image from 'next/image'
import { ShieldCheck, Target, Eye, CheckCircle2, Phone, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function HakkimizdaContent() {
  return (
    <div className="py-12 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Üst Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Kurumsal
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mt-4 mb-4">
            Güvenliğinizi Şansa Bırakmayan Uzmanlık
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Kadir Topçam ve uzman saha ekibimizle; mekanlarınızı ve araçlarınızı en ileri teknoloji güvenlik donanımlarıyla güvence altına alıyoruz.
          </p>
        </div>

        {/* Ana Hikaye & Görsel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 flex flex-col gap-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Her Montajda Kusursuz İşçilik ve Maksimum Güvenlik
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Topçam Güvenlik Sistemleri; güvenlik kameraları, alarm sistemleri ve mobil araç gözetim teknolojilerinde yıllara dayanan saha tecrübesiyle kurulmuştur. Amacımız; yalnızca bir kamera veya alarm takmak değil, müşterilerimizin can ve mal güvenliğini 7/24 kesintisiz koruyan sağlam bir teknolojik altyapı inşa etmektir.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              İş yerlerinden konutlara, uluslararası lojistik tırlarından devasa şantiye iş makinelerine ve binek otomobillere kadar her alanda; kablo kirliliği yaratmayan temiz işçilik, garantiyi bozmayan sigorta bypass montajı ve 1. sınıf ekipman prensibiyle çalışıyoruz.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-secondary border border-border">
                <span className="block text-2xl font-black text-blue-600 mb-1">%100</span>
                <span className="text-xs text-muted-foreground font-medium">Temiz ve Gizli Kablolama Garantisi</span>
              </div>
              <div className="p-4 rounded-2xl bg-secondary border border-border">
                <span className="block text-2xl font-black text-blue-600 mb-1">7/24</span>
                <span className="text-xs text-muted-foreground font-medium">Kesintisiz Canlı İzleme ve Kayıt</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-apple-lg aspect-[4/3] bg-slate-900">
              <Image
                src="/images/guvenlik-kamera-sistemi.webp"
                alt="Topçam Güvenlik Sistemleri Kurulum"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Topçam Güvenlik Standartları</h3>
                    <p className="text-xs text-slate-300">Sertifikalı IP68 donanım ve orijinal garantili bileşenler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Misyon & Vizyon Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-3xl border border-border bg-card shadow-apple flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Misyonumuz</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Müşterilerimizin güvenliğini en güncel teknoloji ve bütçelerine en uygun maliyetle sağlamak; iş yeri, fabrika, ev ve araçlarında kör nokta bırakmayan, kolay kullanılabilir ve uzun ömürlü güvenlik sistemleri teslim etmektir.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-border bg-card shadow-apple flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Vizyonumuz</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mobil araç güvenliği, iş makinesi kör nokta sistemleri ve sabit mekan güvenlik kameralarında Türkiye çapında kalitesi, güvenilir işçiliği ve hızlı satış sonrası teknik desteğiyle ilk akla gelen marka olmak.
            </p>
          </div>
        </div>

        {/* Kurumsal Değerler */}
        <div className="rounded-3xl bg-[#0B132B] text-white p-8 sm:p-12 shadow-apple-lg select-none">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Çalışma Prensiplerimiz</h2>
            <p className="text-sm text-slate-300">
              Yaptığımız her işte müşteri memnuniyetini ve can güvenliğini temel ilke kabul ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              <h4 className="text-sm font-bold text-white">Dürüst ve Şeffaf Fiyat</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Gizli maliyet veya sürpriz masraf çıkarmadan, ihtiyacınıza en uygun şeffaf teklif.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              <h4 className="text-sm font-bold text-white">Yerinde Keşif ve Montaj</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mekanınızı veya araçlarınızı yerinde inceleyerek en ideal kamera açılarını belirliyoruz.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              <h4 className="text-sm font-bold text-white">Satış Sonrası Destek</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sistem teslim edildikten sonra da telefon ve WhatsApp üzerinden anında teknik destek.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              <h4 className="text-sm font-bold text-white">Orijinal Garantili Ekipman</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tüm kameralar, lensler, kayıt cihazları ve alarm panelleri resmi distribütör garantilidir.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all"
            >
              <span>Bizimle İletişime Geçin</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>{siteConfig.contact.phoneFormatted}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
