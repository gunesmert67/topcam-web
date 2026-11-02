import { siteConfig } from '@/config/site'

export function KvkkContent() {
  return (
    <div className="pt-28 pb-16 sm:pt-32 sm:pb-20 select-none">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-foreground mb-6">
          Kişisel Verilerin Korunması ve Aydınlatma Metni
        </h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed text-muted-foreground flex flex-col gap-6">
          <p>
            {siteConfig.name} (&quot;Topçam Güvenlik&quot;) olarak; 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, veri sorumlusu sıfatıyla, müşterilerimizin, potansiyel müşterilerimizin ve web sitemizi ziyaret eden kullanıcılarımızın kişisel verilerinin güvenliğine ve gizliliğine azami hassasiyeti göstermekteyiz.
          </p>

          <h2 className="text-lg font-bold text-foreground">1. İşlenen Kişisel Veriler</h2>
          <p>
            Web sitemizdeki iletişim formları, e-posta veya telefon yoluyla bizimle paylaştığınız ad, soyad, telefon numarası, e-posta adresi, talep edilen hizmet ve mesaj içeriğiniz gibi iletişim verileri işlenmektedir.
          </p>

          <h2 className="text-lg font-bold text-foreground">2. Kişisel Verilerin İşlenme Amaçları</h2>
          <ul className="list-disc pl-5 flex flex-col gap-1.5">
            <li>Talep ettiğiniz güvenlik ve kamera sistemleri için fiyat teklifi hazırlamak ve iletmek,</li>
            <li>Keşif, montaj ve teknik servis randevularını organize etmek,</li>
            <li>Satış sonrası teknik destek ve garanti süreçlerini yürütmek,</li>
            <li>Yasal yükümlülüklerimizi yerine getirmek.</li>
          </ul>

          <h2 className="text-lg font-bold text-foreground">3. Kişisel Verilerin Aktarılması</h2>
          <p>
            Topçam Güvenlik olarak kişisel verilerinizi üçüncü taraflarla ticari veya reklam amaçlı paylaşmamaktayız. Verileriniz yalnızca yasal zorunluluk halinde yetkili adli veya idari makamlar ile paylaşılabilir.
          </p>

          <h2 className="text-lg font-bold text-foreground">4. Haklarınız</h2>
          <p>
            KVKK’nın 11. maddesi kapsamında; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, düzeltilmesini veya silinmesini isteme hakkına sahipsiniz. Başvurularınızı <strong>{siteConfig.contact.email}</strong> adresimize iletebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  )
}
