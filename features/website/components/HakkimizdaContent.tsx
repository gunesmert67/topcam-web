import Image from 'next/image'
import { ShieldCheck, Target, Eye, CheckCircle2, Phone, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function HakkimizdaContent() {
  return (
    <div className="pt-24 pb-14 sm:pt-32 sm:pb-20 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Üst Başlık */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-3">
            Hakkımızda
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Kadir Topçam yönetiminde mekan ve araç güvenlik sistemlerinde yerinde montaj ve temiz işçilik sunuyoruz.
          </p>
        </div>

        {/* Ana İçerik & Görsel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Doğru Kamera, Temiz Montaj
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Müşterilerimize sadece cihaz satmıyoruz; mekanın ve aracın yapısına en uygun açıyı belirleyip kabloları gizleyerek profesyonel montaj yapıyoruz.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              İş yerleri, fabrikalar, tırlar, iş makineleri ve binek araçlarda orijinal garantiyi bozmadan sigorta baypası ile güvenli elektrik bağlantısı sağlıyoruz.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-secondary border border-border">
                <span className="block text-2xl font-black text-blue-600 mb-0.5">%100</span>
                <span className="text-xs text-muted-foreground font-medium">Gizli Kablo & Temiz İşçilik</span>
              </div>
              <div className="p-4 rounded-2xl bg-secondary border border-border">
                <span className="block text-2xl font-black text-blue-600 mb-0.5">7/24</span>
                <span className="text-xs text-muted-foreground font-medium">Telefondan Canlı İzleme</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-apple-lg aspect-[4/3] bg-white p-6 flex items-center justify-center">
              <Image
                src="/images/guvenlik-kamera-sistemi.webp"
                alt="Topçam Güvenlik Sistemleri Kurulum"
                fill
                className="object-contain p-4 transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 bg-[#0B132B]/90 backdrop-blur-md p-3 rounded-2xl border border-white/15 text-white shadow-xl">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">Topçam Standartları</h3>
                    <p className="text-[11px] text-slate-300">Orijinal garantili ürünler & yerinde mobil montaj</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2'li Özet Kart */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="p-5 sm:p-7 rounded-3xl border border-border bg-card shadow-apple flex flex-col gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-1">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-foreground">Önceliğimiz</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Müşteriye gereksiz masraf çıkarmadan en doğru donanımı seçmek, kör nokta bırakmayan sağlam bir kurulum teslim etmek.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-3xl border border-border bg-card shadow-apple flex flex-col gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center mb-1">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-foreground">Hedefimiz</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Araç kamera montajı ve sabit mekan güvenliğinde temiz işçiliği ve hızlı teknik desteği ile sektörde ilk akla gelen isim olmak.
            </p>
          </div>
        </div>

        {/* Kurumsal Değerler */}
        <div className="rounded-3xl bg-[#0B132B] text-white p-5 sm:p-8 lg:p-10 shadow-apple-lg select-none">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Çalışma Standartlarımız</h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Temiz işçilik ve dürüst fiyat politikasıyla hizmet veriyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <h4 className="text-sm font-bold text-white">Net & Şeffaf Fiyat</h4>
              <p className="text-xs text-slate-400">
                Sürpriz masraf olmadan iş başında konuşulan net fiyat.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <h4 className="text-sm font-bold text-white">Yerinde Mobil Montaj</h4>
              <p className="text-xs text-slate-400">
                Adresinize gelerek mekanınızda veya aracınızda montaj.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <h4 className="text-sm font-bold text-white">Satış Sonrası Destek</h4>
              <p className="text-xs text-slate-400">
                İş bittikten sonra da telefon ve WhatsApp ile anında destek.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <h4 className="text-sm font-bold text-white">Orijinal Ekipman</h4>
              <p className="text-xs text-slate-400">
                Dahua, Hikvision, Eurocam, Inox ve Haikon garantili ürünler.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all"
            >
              <span>WhatsApp&apos;tan Teklif Al</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors"
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
