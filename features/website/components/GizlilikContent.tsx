import { siteConfig } from '@/config/site'

export function GizlilikContent() {
  return (
    <div className="pt-24 pb-12 sm:pt-32 sm:pb-20 select-none">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4 sm:mb-6">
          Gizlilik Politikası
        </h1>

        <div className="text-sm leading-relaxed text-muted-foreground flex flex-col gap-6">
          <p>
            {siteConfig.name} olarak gizliliğinize büyük önem veriyoruz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde toplanan bilgilerin nasıl kullanıldığını ve korunduğunu açıklamaktadır.
          </p>

          <h2 className="text-lg font-bold text-foreground">Bilgi Toplama ve Kullanımı</h2>
          <p>
            Web sitemiz üzerinden paylaştığınız iletişim bilgileri yalnızca size talep ettiğiniz hizmet ve fiyatlandırma hakkında geri dönüş sağlamak amacıyla kullanılır. İzniniz olmaksızın pazarlama listelerine eklenmez ve üçüncü şahıslara satılmaz.
          </p>

          <h2 className="text-lg font-bold text-foreground">Veri Güvenliği</h2>
          <p>
            Web sitemiz en güncel SSL/TLS şifreleme protokolleri ve güvenlik başlıkları (HSTS, CSP, X-Frame-Options) ile korunmaktadır. Gönderdiğiniz veriler yetkisiz erişimlere karşı güvenli sunucularda saklanır.
          </p>

          <h2 className="text-lg font-bold text-foreground">İletişim</h2>
          <p>
            Gizlilik politikamız ile ilgili her türlü soru ve talebiniz için <strong>{siteConfig.contact.email}</strong> adresinden veya <strong>{siteConfig.contact.phoneFormatted}</strong> numaralı telefondan bize ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  )
}
