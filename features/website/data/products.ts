export interface ProductItem {
  id: string
  title: string
  category: string
  categorySlug: string
  summary: string
  description: string
  image: string
  features: string[]
  specs: { label: string; value: string }[]
  badge?: string
}

export const productCategories = [
  { id: 'all', name: 'Tüm Ürünler' },
  { id: 'kamera', name: 'IP & AHD Kameralar' },
  { id: 'arac', name: 'Araç & Mobil Kameralar' },
  { id: 'alarm', name: 'Alarm Sistemleri' },
  { id: 'kayit-server', name: 'Kayıt Cihazı & Server' },
  { id: 'santral-ag', name: 'Santral & Ağ Ekipmanları' },
]

export const productsData: ProductItem[] = [
  {
    id: 'ip-bullet-4k',
    title: '4K Ultra HD Gece Görüşlü IP Bullet Kamera',
    category: 'IP & AHD Kameralar',
    categorySlug: 'kamera',
    badge: '4K Ultra HD',
    summary: 'Dış ortam şartlarına tam dayanıklı, gece renkli gösteren akıllı insan ve araç analizli IP kamera.',
    description: 'Bina dış cepheleri, otoparklar, şantiye ve fabrika çevreleri için tasarlanmış yüksek çözünürlüklü IP bullet kamera. H.265+ sıkıştırma formatı ile minimum bant genişliği tüketirken maksimum netlikte delil niteliğinde görüntü sunar.',
    image: '/images/guvenlik-kamera-sistemi.webp',
    features: [
      '8 Megapiksel (3840 x 2160) Gerçek 4K Çözünürlük',
      'Gece Renkli Gösteren ColorVu / Akıllı Sıcak LED Teknolojisi',
      'IP67 Suya, Toza ve Aşırı Sıcağa/Soğuğa Karşı Dayanıklılık',
      'Dahili Mikrofon ile Ortam Ses Kaydı Özelliği',
      'PoE (Power over Ethernet) ile Tek Kablodan Güç ve Veri'
    ],
    specs: [
      { label: 'Çözünürlük', value: '8MP 4K UHD' },
      { label: 'Lens', value: '2.8mm / 4mm Sabit Lens (108° Geniş Açı)' },
      { label: 'Gece Görüş', value: '40 Metre Akıllı IR & Renkli LED' },
      { label: 'Koruma Sınıfı', value: 'IP67 Su Geçirmez Metal Kasa' }
    ]
  },
  {
    id: 'ip-dome-ic-ortam',
    title: '5MP Sesli Akıllı IP Dome Güvenlik Kamerası',
    category: 'IP & AHD Kameralar',
    categorySlug: 'kamera',
    badge: 'İç Ortam & Ofis',
    summary: 'Ofis, mağaza, koridor ve ev iç mekanları için şık tavan montajlı, ses kayıtlı dome kamera.',
    description: 'Estetik görünümüyle iç mekan dekorasyonunu bozmayan, darbelere karşı dayanıklı cam fanusa sahip IP dome kamera. İki yönlü ses ve hareket algılama desteği ile güvenliği estetikle buluşturur.',
    image: '/images/guvenlik-kamera-sistemi.webp',
    features: [
      '5 Megapiksel Süper HD Kristal Netliğinde Görüntü',
      'Geniş Açı Lens ile Oda İçinde Sıfır Kör Nokta',
      'Akıllı Hareket ve Alan İhlali Bildirimi',
      'WDR Işık Dengeleme ile Cam Kenarlarında Parlama Önleme'
    ],
    specs: [
      { label: 'Çözünürlük', value: '5MP (2560 x 1920)' },
      { label: 'Ses', value: 'Dahili Yüksek Hassasiyetli Mikrofon' },
      { label: 'Görüş Açısı', value: '115° Geniş Açılı Görüş' },
      { label: 'Güç', value: '12V DC / PoE Destekli' }
    ]
  },
  {
    id: 'tir-kamyon-mobil-set',
    title: 'Tır ve Kamyon 4 Kameralı Mobil DVR Güvenlik Seti',
    category: 'Araç & Mobil Kameralar',
    categorySlug: 'arac',
    badge: 'Ağır Vasıta Seti',
    summary: 'Ağır vasıta, tır çekici ve dorseler için sarsıntı korumalı 4 kameralı kör nokta ve kayıt seti.',
    description: 'Lojistik sektörünün zorlu ihtiyaçlarına göre özel üretilmiş ağır vasıta mobil kayıt sistemi. Ön yol, şoför kabini, sağ kör nokta ve dorse arkası kameralarını 7 inç HD kabin ekranında anlık gösterir ve hafızaya kesintisiz kaydeder.',
    image: '/images/tir-arac-kamera.webp',
    features: [
      '4 Adet AHD Ağır Hizmet Metal Kasalı Gece Görüşlü Kamera',
      'Kabin İçi 7 İnç 4 Bölünmüş Yüksek Çözünürlüklü Monitör',
      'Sağ-Sol Sinyal ve Geri Vites Tetiklemeli Otomatik Ekran Değişimi',
      'Kilitli Çelik Kasa İçinde Titreşim Korumalı Mobil DVR',
      'Dorse Ayrılma ve Birleşmeleri İçin Endüstriyel Yaylı Soket Seti'
    ],
    specs: [
      { label: 'Çalışma Voltajı', value: '9V - 36V Geniş Voltaj Girişi' },
      { label: 'Kamera Sayısı', value: '4 Kanal AHD (Ön, Arka, Sağ Kör Nokta, Sol)' },
      { label: 'Ekran', value: '7” HD IPS 1024x600 Bölünmüş Ekran' },
      { label: 'Su Koruması', value: 'Kameralar IP68 Tam Su Geçirmez' }
    ]
  },
  {
    id: 'is-makinesi-kor-nokta-seti',
    title: 'İş Makineleri Şantiye & Kör Nokta Kamera Kiti',
    category: 'Araç & Mobil Kameralar',
    categorySlug: 'arac',
    badge: 'Şantiye Dayanımlı',
    summary: 'Forklift, ekskavatör, vinç ve yükleyiciler için darbelere dayanıklı kör nokta monitör kiti.',
    description: 'Aşırı toz, çamur, yüksek titreşim ve su jetiyle yıkamaya dayanıklı iş makinesi kamera seti. Operatörün en kritik manevralarında arkasındaki ve yanındaki yayaları, çukurları ve engelleri net bir şekilde görmesini sağlar.',
    image: '/images/is-makinesi-kamera.webp',
    features: [
      '10G Sarsıntı ve Titreşime Dayanıklı Çinko Döküm Kamera Kasası',
      'Güneşlikli Endüstriyel Parlama Yapmayan IPS Monitör',
      'Ağır Şantiye Şartlarına Uygun Havacılık Tipi Vidalı 4 Pin Soketler',
      'Gece Zifiri Karanlıkta Çalışan 18 IR LED Gece Aydınlatması'
    ],
    specs: [
      { label: 'Çalışma Sıcaklığı', value: '-30°C ile +80°C Arası' },
      { label: 'Sarsıntı Direnci', value: '10G / ISO Standardı' },
      { label: 'Su Koruması', value: 'IP69K Yüksek Basınçlı Suya Dayanıklı' },
      { label: 'Montaj', value: 'Manyetik Mıknatıslı veya Civatalı Montaj' }
    ]
  },
  {
    id: 'binek-arac-yol-kayit',
    title: 'Çift Kameralı 4K Ön & Arka Yol Kayıt Kamerası',
    category: 'Araç & Mobil Kameralar',
    categorySlug: 'arac',
    badge: 'Gizli Montaj Dahil',
    summary: 'Binek otomobiller için 24 saat park nöbetli, Wi-Fi telefon bağlantılı profesyonel araç kamerası.',
    description: 'Aracınızın estetiğini bozmadan, cam fitilleri ve döşeme altından geçirilen profesyonel gizli kablolama ile monte edilir. Sigorta kutusuna bağlanan özel akü koruma kiti sayesinde araç stop ettiğinde de park halinde darbe ve hareketleri kaydeder.',
    image: '/images/on-arka-arac-kamera.webp',
    features: [
      'Ön 4K Ultra HD + Arka 1080p FHD Eşzamanlı Çift Kayıt',
      'Dahili Wi-Fi ile Cep Telefonundan Anında Görüntü İndirme ve Paylaşma',
      '24 Saat Park Güvenlik Modu (Akü Voltajını Düşürmeyen Akıllı Röle)',
      'G-Sensor Darbe Kilidi ile Kaza Anı Videolarını Koruma Altına Alma'
    ],
    specs: [
      { label: 'Ön Çözünürlük', value: '4K (3840x2160) 30fps' },
      { label: 'Arka Çözünürlük', value: '1080p Full HD' },
      { label: 'Görüş Açısı', value: '170° Ön / 140° Arka Geniş Açı' },
      { label: 'Telefon Uyumu', value: 'iOS ve Android Uygulama Desteği' }
    ]
  },
  {
    id: 'akilli-kablosuz-alarm-seti',
    title: 'Kablosuz Akıllı Ev & İş Yeri Alarm Sistemi',
    category: 'Alarm Sistemleri',
    categorySlug: 'alarm',
    badge: 'Akıllı Telefon Bildirimli',
    summary: 'Kırma dökme olmadan monte edilen, mobil uygulama kontrollü kablosuz hırsız alarm seti.',
    description: 'Modern mekanlar için kablo çekme derdine son veren kablosuz alarm çözümü. Kapı ve pencere açılmalarında, içerideki hareketlerde veya cam kırılmalarında 120 desibel caydırıcı sirenini çalar ve anında telefonunuza alarm bildirimi gönderir.',
    image: '/images/alarm-sistemleri.webp',
    features: [
      'Ana Alarm Paneli, PIR Hareket Dedektörü, Manyetik Kapı Kontağı',
      'Dahili Batarya ile Elektrik Kesilse Dahi 24 Saatten Fazla Çalışma',
      'Çift Haberleşme: Wi-Fi ve 4G GSM Sim Kart Desteği',
      'Telefon Araması, SMS ve Anlık Push Bildirim',
      'Harici Dış Ortam Işıklı ve Sabotaj Korumalı Siren'
    ],
    specs: [
      { label: 'Haberleşme', value: 'Wi-Fi 2.4GHz + 4G LTE GSM' },
      { label: 'Sensör Mesafesi', value: 'Kablosuz Açık Alanda 1.000m' },
      { label: 'Siren Gücü', value: '120dB Caydırıcı Ses Seviyesi' },
      { label: 'Yedek Güç', value: 'Dahili Şarj Edilebilir Lityum Batarya' }
    ]
  },
  {
    id: 'nvr-kayit-cihazi-16-kanal',
    title: '16 Kanal 4K PoE Destekli NVR Video Kayıt Cihazı',
    category: 'Kayıt Cihazı & Server',
    categorySlug: 'kayit-server',
    badge: '4K PoE NVR',
    summary: '16 adet 4K IP kamerayı doğrudan besleyen ve haftalarca kayıt tutabilen kurumsal NVR ünitesi.',
    description: 'Tüm IP kameralarınızı tek merkezde toplayan, her portu PoE destekli profesyonel NVR kayıt cihazı. Çift hard disk yuvası ile 20TB’a kadar depolama kapasitesi sunar. Statik IP gerektirmeden P2P bulut üzerinden anında cep telefonunuzdan izlenebilir.',
    image: '/images/kamera-server.webp',
    features: [
      '16 Kanal 4K (8MP) Canlı İzleme ve Eşzamanlı Geriye Dönük Tarama',
      'Dahili 16 Port PoE Switch ile Ekstra Adaptör İhtiyacını Ortadan Kaldırır',
      'H.265+ Video Sıkıştırma ile %75 Disk Tasarrufu',
      'HDMI 4K ve VGA Çift Ekran Çıkışı'
    ],
    specs: [
      { label: 'Kanal Sayısı', value: '16 Kanal IP Kamera Girişi' },
      { label: 'PoE Çıkış Gücü', value: '16x PoE (IEEE 802.3af/at)' },
      { label: 'Disk Desteği', value: '2x SATA HDD (Her biri 10TB’a kadar)' },
      { label: 'Mobil Yazılım', value: 'iOS, Android ve PC CMS Desteği' }
    ]
  },
  {
    id: 'rack-kabinet-santral-unitesi',
    title: 'Kamera Server Rack Kabinet ve IP Santral Sistemi',
    category: 'Santral & Ağ Ekipmanları',
    categorySlug: 'santral-ag',
    badge: 'Kurumsal Altyapı',
    summary: 'Kamera kayıt cihazları, switchler, UPS ve telefon santrali için kilitli düzenli kabinet çözümü.',
    description: 'İşletmelerdeki güvenlik ve iletişim cihazlarını tozdan, fiziksel darbelerden ve yetkisiz müdahalelerden koruyan havalandırmalı kilitli rack kabinet ve santral kurulumu. Dağınık kabloları profesyonelce sonlandırarak arıza riskini sıfıra indirir.',
    image: '/images/kamera-server.webp',
    features: [
      'Duvar Tipi veya Tekerlekli Dikili Tip Kilitli Çelik Kabinet',
      'Termostat Kontrollü Sessiz Çift Fanlı Havalandırma Ünitesi',
      'Cat6 Gigabit Patch Panel ve Etiketli Düzenleme İşçiliği',
      'IP Telefon Santrali ve Kesintisiz Güç Kaynağı (UPS) Montajı'
    ],
    specs: [
      { label: 'Kapasite', value: '9U, 12U, 16U, 24U, 42U Seçenekleri' },
      { label: 'Malzeme', value: '1.2mm - 1.5mm DKP Çelik Saç' },
      { label: 'Ön Kapak', value: 'Füme Temperli Darbeye Dayanıklı Cam' },
      { label: 'Güvenlik', value: 'Kilitlenebilir Ön ve Yan Kapaklar' }
    ]
  }
]
