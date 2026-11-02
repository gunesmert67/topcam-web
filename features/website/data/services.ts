export interface ServiceItem {
  id: string
  slug: string
  title: string
  shortTitle: string
  summary: string
  description: string
  image: string
  badge: string
  features: string[]
  applicationAreas: string[]
  specs: { label: string; value: string }[]
}

export const servicesData: ServiceItem[] = [
  {
    id: 'kamera-sistemleri',
    slug: 'guvenlik-kamera-sistemleri',
    title: 'IP, AHD ve Analog Güvenlik Kamera Sistemleri',
    shortTitle: 'Güvenlik Kamera Sistemleri',
    badge: 'En Çok Tercih Edilen',
    summary: 'İş yeri, ev ve binalar için gece renkli görüşlü, telefondan 7/24 canlı izlemeli kamera montajı.',
    description: '2MP ile 4K arası IP ve AHD güvenlik kameraları kuruyoruz. Telefondan anlık canlı izleme, geriye dönük sesli/görüntülü kayıt ve temiz kablolama ile mekanınızı koruma altına alın.',
    image: '/images/guvenlik-kamera-sistemi.webp',
    features: [
      'Telefondan 7/24 Canlı İzleme & Bildirim',
      'Gece Renkli Görüş (ColorVu / Smart IR)',
      '4K Ultra HD & Full HD Net Görüntü',
      'H.265+ ile Aylarca Geriye Dönük Kayıt',
      'Kanal İçi Gizli Kablolama & Temiz İşçilik'
    ],
    applicationAreas: [
      'Fabrika & Atölyeler',
      'Depo & Antrepolar',
      'Dükkan, Mağaza & Ofisler',
      'Apartman & Siteler',
      'Otopark & Açık Alanlar'
    ],
    specs: [
      { label: 'Çözünürlük', value: '1080p FHD, 4MP, 8MP (4K)' },
      { label: 'Gece Görüş', value: 'Smart IR LED & Renkli 30-80m' },
      { label: 'Kayıt', value: 'NVR / DVR Sabit Disk Depolama' },
      { label: 'Erişim', value: 'iOS, Android, Bilgisayar' },
    ]
  },
  {
    id: 'tir-arac-kamera',
    slug: 'tir-ve-agır-vasita-kamera-sistemleri',
    title: 'Tır, Kamyon ve Ağır Vasıta Mobil Kamera Sistemleri',
    shortTitle: 'Tır & Ağır Vasıta Kameraları',
    badge: 'Kör Nokta Önleme',
    summary: 'Lojistik tırları ve kamyonlar için kör nokta önleyici kabin monitörü ve sarsıntıya dayanıklı mobil DVR kayıt.',
    description: 'Ağır vasıtalarda kazaların çoğu kör noktalardan kaynaklanır. Kabin içi HD monitör, sağ-sol sinyal tetiklemeli yan kameralar ve su geçirmez dorse kameraları ile tam hakimiyet sağlayın.',
    image: '/images/tir-arac-kamera.webp',
    features: [
      'Kabin İçi 7" / 9" Çoklu Bölünmüş HD Monitör',
      'Sağ-Sol Sinyale ve Geri Vitese Duyarlı Otomatik Görüntü',
      'Sarsıntıya Karşı Kilitli Mobil DVR Kayıt Cihazı',
      'Dorse İçin Ağır Hizmet Tipi Yaylı Spiral Soket',
      '12V / 24V / 36V Endüstriyel Voltaj Koruması'
    ],
    applicationAreas: [
      'Uluslararası & Yurtiçi Lojistik Tırları',
      'Hafriyat & Damperli Kamyonlar',
      'Beton Mikserleri',
      'Belediye & Çöp Araçları',
      'Otobüs & Personel Servisleri'
    ],
    specs: [
      { label: 'Voltaj', value: '12V - 24V - 36V Uyumlu' },
      { label: 'Koruma', value: 'IP68 / IP69K Basınçlı Suya Dayanıklı' },
      { label: 'Kayıt', value: 'SD Kart & SSD Mobil DVR' },
      { label: 'Paket', value: '2, 4 veya 8 Kameralı Setler' },
    ]
  },
  {
    id: 'is-makinesi-kamera',
    slug: 'is-makinesi-kamera-sistemleri',
    title: 'İş Makineleri Kör Nokta ve Geri Görüş Sistemleri',
    shortTitle: 'İş Makinesi Kamera Montajı',
    badge: 'İSG & Şantiye Uyumlu',
    summary: 'Ekskavatör, vinç, forklift ve loderler için darbelere dayanıklı 360° kör nokta ve operatör ekranı.',
    description: 'Şantiye ve maden sahalarında kaza riskini sıfıra indirin. Darbeye, basınca ve toza dayanıklı metal zırhlı kameralar ve kabin içi parlamayan monitör montajı yapıyoruz.',
    image: '/images/is-makinesi-kamera.webp',
    features: [
      'Metal Zırhlı Şok ve Toz Korumalı Gövde',
      'Güneşte Parlamayan Endüstriyel Operatör Monitörü',
      'Forklift Çatal Ucu & Vinç Bom Kamerası Seçenekleri',
      'Geri Manevra ve Kör Nokta Sesli İkaz Entegrasyonu',
      'Yerinde Şantiyede Mobil Montaj Hizmeti'
    ],
    applicationAreas: [
      'Paletli & Lastikli Ekskavatörler',
      'Forklift & Depo Reach Truck Araçları',
      'Loder & Beko Loderler',
      'Kule Vinç & Mobil Vinçler',
      'Maden Kamyonları & Dozerler'
    ],
    specs: [
      { label: 'Gövde', value: 'Döküm Alüminyum & Zırhlı Çelik' },
      { label: 'Titreşim', value: '10G Şok ve Titreşim Direnci' },
      { label: 'Görüş', value: 'Gece IR LED + Geniş Açı' },
      { label: 'Montaj', value: 'Şantiye Alanında Yerinde Montaj' },
    ]
  },
  {
    id: 'binek-arac-kamera',
    slug: 'binek-arac-on-arka-kamera-montaji',
    title: 'Binek ve Ticari Araç Ön & Arka Yol Kayıt Kamerası',
    shortTitle: 'Binek Araç Yol Kayıt Kameraları',
    badge: 'Garantiyi Bozmaz',
    summary: 'Otomobil ve hafif ticariler için gizli kablolu ön-arka yol kayıt kamerası montajı ve 24 saat park nöbeti.',
    description: 'Olası kaza ve anlaşmazlıklarda en sağlam deliliniz araç kamerasıdır. Orijinal kablo demetlerini kesmeden, sigorta baypası ile garantiyi koruyarak gizli kablolama yapıyoruz.',
    image: '/images/on-arka-arac-kamera.webp',
    features: [
      'Ön & Arka Eşzamanlı 2K / 4K Ultra Net Kayıt',
      'Fitil Altından Tamamen Gizli Kablolama (Sıfır Kablo Kirliliği)',
      'Orijinal Garantiyi Bozmayan Sigorta Baypası (Fuse-Tap)',
      'Akü Koruma Devreli 24 Saat Kesintisiz Park Kaydı',
      'Wi-Fi ile Telefondan Anında Video İndirme ve İzleme'
    ],
    applicationAreas: [
      'Binek Araçlar (Sedan, Hatchback, SUV)',
      'Hafif Ticari Araçlar (Doblo, Caddy, Transporter vb.)',
      'Taksi & VIP Transfer Araçları',
      'Filo & Şirket Araçları'
    ],
    specs: [
      { label: 'Görüş Açısı', value: '160° Ön / 140° Arka Açı' },
      { label: 'Sensör', value: 'Sony STARVIS Gece Sensörü' },
      { label: 'Bağlantı', value: 'Sigorta Kutusu Park Kiti' },
      { label: 'Hafıza', value: '64GB - 256GB MicroSD Desteği' },
    ]
  },
  {
    id: 'alarm-sistemleri',
    slug: 'hirsiz-ve-yangin-alarm-sistemleri',
    title: 'Hırsız ve Yangın Alarm Sistemleri',
    shortTitle: 'Alarm Sistemleri',
    badge: 'Kablosuz & Akıllı',
    summary: 'Ev ve iş yerleri için kapı/pencere manyetik kontakları, hareket sensörleri ve telefona anında arama.',
    description: 'Yetkisiz giriş ve hırsızlığa karşı saniyeler içinde devreye giren akıllı alarm setleri. Kırma dökme yapmadan kablosuz montaj, elektrik kesintisinde çalışan dahili akü ve anında telefon bildirimi.',
    image: '/images/alarm-sistemleri.webp',
    features: [
      'Kablosuz Kolay Kurulum (Kırma Dökme Yok)',
      'Evcil Hayvan Algılamayan Akıllı PIR Dedektörler',
      'Elektrik Kesilse Bile Akü ile Kesintisiz Koruma',
      'Telefona Anında Çağrı & SMS Bildirimi',
      '120dB Yüksek Sesli Caydırıcı Dış Ortam Sireni'
    ],
    applicationAreas: [
      'Ev, Villa & Yazlıklar',
      'Dükkan, Mağaza & Kuyumcular',
      'Ofis & Şirket Merkezleri',
      'Depo & Şantiyeler'
    ],
    specs: [
      { label: 'Bağlantı', value: 'GSM / 4G + Wi-Fi Çift Hat' },
      { label: 'Yedek Güç', value: '24-48 Saat Akü Koruması' },
      { label: 'Menzil', value: 'Kablosuz 1.200m Açık Alan' },
      { label: 'Yönetim', value: 'Mobil Uygulama + Kumanda + Tuş Takımı' },
    ]
  },
  {
    id: 'santral-server-sistemleri',
    slug: 'santral-ve-server-sistemleri',
    title: 'Santral, Rack Kabinet ve Kamera Server Sistemleri',
    shortTitle: 'Santral & Server Altyapısı',
    badge: 'Düzenli Altyapı',
    summary: 'İşletmeler için IP telefon santrali, düzenli rack kabinet montajı ve yüksek kapasiteli NVR video sunucusu.',
    description: 'Kablo karmaşasına son veriyoruz. Etiketli patch panel sonlandırmaları, kurumsal IP santraller ve RAID destekli yüksek kapasiteli kayıt sunucuları kuruyoruz.',
    image: '/images/kamera-server.webp',
    features: [
      'IP & Hibrit Telefon Santrali Kurulumu',
      'Rack Kabinet & Etiketli Düzenli Patch Panel',
      'Yüksek Kapasiteli NVR Video Sunucusu',
      'PoE Switch & Yapısal Network Kablolama',
      'UPS Kesintisiz Güç Kaynağı Entegrasyonu'
    ],
    applicationAreas: [
      'Kamera Kontrol & Güvenlik Odaları',
      'Kurumsal Ofisler & Plazalar',
      'Hastaneler, Oteller & Tesisler',
      'Sanayi Tesisleri & Fabrikalar'
    ],
    specs: [
      { label: 'Kablo', value: 'Cat6, Cat6A ve Fiber Optik' },
      { label: 'Kabinet', value: '6U-12U Duvar / 22U-42U Dikili' },
      { label: 'Santral', value: '4 Hattan 200+ Aboneye Kadar' },
      { label: 'Kayıt', value: '16-128 Kanal Kurumsal NVR' },
    ]
  }
]
