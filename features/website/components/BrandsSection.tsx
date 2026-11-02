import { ShieldCheck } from 'lucide-react'

const brands = [
  {
    name: 'DAHUA',
    category: 'IP & AHD Kamera',
    highlight: 'Global Lider'
  },
  {
    name: 'HIKVISION',
    category: 'Kamera & Kayıt Cihazı',
    highlight: '4K & Gece Renkli'
  },
  {
    name: 'EUROCAM',
    category: 'Mobil & Araç Kamerası',
    highlight: 'Ağır Vasıta Setleri'
  },
  {
    name: 'INOX',
    category: 'Güvenlik Donanımları',
    highlight: 'Endüstriyel Seri'
  },
  {
    name: 'HAIKON',
    category: 'Kamera & NVR Sistemleri',
    highlight: 'Kurumsal Altyapı'
  },
  {
    name: 'TIANDY',
    category: 'Starlight Gece Görüş',
    highlight: 'Süper Netlik'
  },
  {
    name: 'UNIVIEW (UNV)',
    category: 'Akıllı IP Video',
    highlight: 'Yapay Zeka Analiz'
  },
  {
    name: 'CENOVA',
    category: 'AHD & IP Kamera',
    highlight: 'Ekonomik & Dayanıklı'
  },
  {
    name: 'WD PURPLE',
    category: '7/24 Güvenlik Harddiski',
    highlight: 'Kesintisiz Kayıt'
  },
  {
    name: 'SEAGATE',
    category: 'SkyHawk Güvenlik Diski',
    highlight: 'Ağır Hizmet Depolama'
  }
]

export function BrandsSection() {
  return (
    <section className="py-12 sm:py-16 bg-card border-b border-border select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Alanı */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-2">
            Çalıştığımız & Kurulumunu Yaptığımız Markalar
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Mekan ve araçlarınızda yalnızca resmi distribütör garantili, test edilmiş orijinal donanımlar kullanıyoruz.
          </p>
        </div>

        {/* Markalar Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-secondary/50 hover:bg-card border border-border/80 hover:border-blue-500/40 hover:shadow-apple transition-all duration-200 group text-center"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="font-extrabold text-sm sm:text-base tracking-wide text-foreground group-hover:text-blue-600 transition-colors">
                  {brand.name}
                </span>
              </div>
              <span className="text-[11px] font-medium text-muted-foreground truncate w-full">
                {brand.category}
              </span>
              <span className="mt-1.5 inline-block text-[9px] font-bold text-blue-600/90 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/60">
                {brand.highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Güven ve Garanti Notu */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground text-center">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Tüm donanımlar 2 yıl resmi distribütör garantilidir. İhtiyacınıza en uygun marka/modeli birlikte belirliyoruz.</span>
        </div>

      </div>
    </section>
  )
}
