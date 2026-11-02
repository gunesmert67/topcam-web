import { siteConfig } from '@/config/site'

export function CerezContent() {
  return (
    <div className="pt-28 pb-16 sm:pt-32 sm:pb-20 select-none">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-foreground mb-6">
          Çerez (Cookie) Politikası
        </h1>

        <div className="text-sm leading-relaxed text-muted-foreground flex flex-col gap-6">
          <p>
            {siteConfig.name} web sitesi olarak, sitemizin teknik olarak düzgün çalışmasını sağlamak, kullanıcı deneyimini iyileştirmek ve anonim performans verilerini ölçmek amacıyla çerezlerden faydalanmaktayız.
          </p>

          <h2 className="text-lg font-bold text-foreground">Çerez Nedir?</h2>
          <p>
            Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar sitemizi bir sonraki ziyaretinizde tercihlerinizi hatırlamamıza yardımcı olur.
          </p>

          <h2 className="text-lg font-bold text-foreground">Kullandığımız Çerez Türleri</h2>
          <ul className="list-disc pl-5 flex flex-col gap-1.5">
            <li><strong>Zorunlu Çerezler:</strong> Sitenin temel işlevlerinin (gezinme, güvenlik doğrulamaları) çalışması için gereklidir.</li>
            <li><strong>Performans ve Analiz Çerezleri:</strong> Sitemizin hızını ve ziyaretçi yoğunluğunu anonim olarak ölçümlememizi sağlar.</li>
          </ul>

          <h2 className="text-lg font-bold text-foreground">Çerezleri Nasıl Yönetebilirsiniz?</h2>
          <p>
            Dilediğiniz zaman internet tarayıcınızın ayarlarından çerezleri silebilir veya çerez kullanımını engelleyebilirsiniz. Ancak zorunlu çerezlerin kapatılması durumunda sitenin bazı özellikleri işlevini yitirebilir.
          </p>
        </div>
      </div>
    </div>
  )
}
