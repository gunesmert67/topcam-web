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
    title: '4K Gece Renkli IP Bullet Güvenlik Kamerası',
    category: 'IP & AHD Kameralar',
    categorySlug: 'kamera',
    badge: '4K Ultra HD',
    summary: 'Dış ortam için gece renkli gösteren, insan ve araç algılayıcı 4K IP kamera.',
    description: 'Bina dışı, otopark ve açık alanlar için tasarlanmış 4K kamera. Gece zifiri karanlıkta dahi renkli görüntü verir, telefonunuza anlık hareket bildirimi gönderir.',
    image: '/images/guvenlik-kamera-sistemi.webp',
    features: [
      '8 Megapiksel Gerçek 4K Çözünürlük',
      'Gece Renkli Görüş (ColorVu / Sıcak LED)',
      'IP67 Suya ve Toza Karşı Metal Kasa',
      'Dahili Mikrofon ile Ortam Ses Kaydı',
      'PoE Destekli Tek Kablo Bağlantısı'
    ],
    specs: [
      { label: 'Çözünürlük', value: '8MP 4K UHD' },
      { label: 'Lens', value: '2.8mm / 108° Geniş Açı' },
      { label: 'Gece Görüş', value: '40m Renkli LED' },
      { label: 'Kasa', value: 'IP67 Metal Gövde' }
    ]
  },
  {
    id: 'ip-dome-ic-ortam',
    title: '5MP Sesli Akıllı IP Dome Kamera',
    category: 'IP & AHD Kameralar',
    categorySlug: 'kamera',
    badge: 'İç Mekan & Ofis',
    summary: 'Ofis, mağaza ve evler için tavana monte, ses kayıtlı kompakt dome kamera.',
    description: 'Dekorasyonu bozmayan şık tasarım. Geniş açısıyla kör nokta bırakmaz; ses kaydı ve hareket algılama desteği sunar.',
    image: '/images/guvenlik-kamera-sistemi.webp',
    features: [
      '5 Megapiksel Süper Net Görüntü',
      '115° Geniş Açılı Görüş Alanı',
      'Dahili Hassas Mikrofon ile Ses Kaydı',
      'Parlama Önleyici WDR Işık Dengesi'
    ],
    specs: [
      { label: 'Çözünürlük', value: '5MP (2560 x 1920)' },
      { label: 'Ses', value: 'Dahili Mikrofon' },
      { label: 'Açı', value: '115° Geniş Lens' },
      { label: 'Besleme', value: '12V DC / PoE' }
    ]
  },
  {
    id: 'tir-kamyon-mobil-set',
    title: 'Tır ve Kamyon 4 Kameralı Mobil DVR Seti',
    category: 'Araç & Mobil Kameralar',
    categorySlug: 'arac',
    badge: 'Ağır Vasıta Seti',
    summary: 'Tır, kamyon ve mikserler için kör nokta önleyici 4 kameralı kabin monitör seti.',
    description: 'Sağ-sol kör noktaları ve dorse arkasını kabin monitöründe anlık gösterir. Sarsıntıya dayanıklı mobil DVR ile yol boyunca kesintisiz kayıt yapar.',
    image: '/images/tir-arac-kamera.webp',
    features: [
      '4 Adet Metal Su Geçirmez Gece Görüşlü Kamera',
      '7 İnç 4 Bölünmüş Yüksek Çözünürlüklü Monitör',
      'Sinyal ve Geri Viteste Otomatik Ekran Değişimi',
      'Kilitli Çelik Kasa Titreşime Dayanıklı Mobil DVR'
    ],
    specs: [
      { label: 'Voltaj', value: '9V - 36V Endüstriyel Giriş' },
      { label: 'Kamera', value: '4 Kanal AHD (Ön, Arka, 2 Yan)' },
      { label: 'Ekran', value: '7” HD IPS Monitör' },
      { label: 'Koruma', value: 'IP68 Su Geçirmez' }
    ]
  },
  {
    id: 'is-makinesi-kor-nokta-seti',
    title: 'İş Makineleri Şantiye & Kör Nokta Kamera Kiti',
    category: 'Araç & Mobil Kameralar',
    categorySlug: 'arac',
    badge: 'Şantiye Dayanımlı',
    summary: 'Ekskavatör, forklift ve vinçler için darbeye dayanıklı operatör ekranlı kör nokta seti.',
    description: 'Aşırı toz, çamur ve titreşime tam dayanıklı. Operatörün kör noktasındaki yayaları ve engelleri net görmesini sağlar, iş kazalarını önler.',
    image: '/images/is-makinesi-kamera.webp',
    features: [
      'Darbe ve Şoka Dayanıklı Zırhlı Kamera Gövdesi',
      'Güneşte Yansıma Yapmayan Endüstriyel Monitör',
      'Geri Vites ve Yakınlık Sesli İkaz Desteği',
      'Şantiye Sahasında Yerinde Montaj'
    ],
    specs: [
      { label: 'Titreşim', value: '10G Şok Dayanımı' },
      { label: 'Ekran', value: '7” Parlama Önleyici IPS' },
      { label: 'Su Koruması', value: 'IP69K Basınçlı Yıkama Uyumlu' },
      { label: 'Kablo', value: 'Zırhlı Ağır Hizmet Soketli Hat' }
    ]
  },
  {
    id: 'binek-on-arka-yol-kayit',
    title: '4K Ön & 1080p Arka Yol Kayıt Araç Kamerası',
    category: 'Araç & Mobil Kameralar',
    categorySlug: 'arac',
    badge: 'Gizli Montaj',
    summary: 'Binek ve hafif ticariler için gizli kablolu ön-arka yol kayıt kamerası ve park modu.',
    description: 'Kabloları araç döşemesi altına gizleyerek takıyoruz. Orijinal sigorta kutusundan güvenli bağlantı yapılır, garantiyi bozmaz, 24 saat park nöbeti tutar.',
    image: '/images/on-arka-arac-kamera.webp',
    features: [
      'Ön 4K Ultra HD + Arka 1080p Çift Kamera',
      'Görünmeyen Gizli Kablolama İşçiliği',
      'Garantiyi Bozmayan Sigorta Baypası (Fuse-Tap)',
      'Akü Koruma Devreli 24 Saat Park Modu',
      'Telefona Wi-Fi ile Anında Video İndirme'
    ],
    specs: [
      { label: 'Açı', value: '160° Ön / 140° Arka Lens' },
      { label: 'Gece Sensörü', value: 'Sony STARVIS' },
      { label: 'Park Modu', value: 'Hardwire Akü Korumalı Kit' },
      { label: 'Kayıt', value: 'Döngüsel Kilitli Kaza Kaydı' }
    ]
  },
  {
    id: 'kablosuz-akilli-alarm-seti',
    title: 'Kablosuz Akıllı Ev & İş Yeri Alarm Seti',
    category: 'Alarm Sistemleri',
    categorySlug: 'alarm',
    badge: 'Kablosuz Set',
    summary: 'Kırma dökme yapmadan kurulan, telefona anında arama yapan kablosuz alarm seti.',
    description: 'Kapı/pencere açıldığında veya hareket olduğunda 120dB harici sireni çalar, telefonunuza anında arama ve bildirim gönderir. Elektrik kesintisinde aküsüyle çalışmaya devam eder.',
    image: '/images/alarm-sistemleri.webp',
    features: [
      'Kırma Dökme Olmadan Kablosuz Montaj',
      'Evcil Hayvan Yanılgısını Önleyen PIR Sensör',
      '120dB Caydırıcı Işıklı Harici Siren',
      'Elektrik Kesintisinde Çalışan Akü Sistemi',
      'Telefondan Açma, Kapama ve Durum Takibi'
    ],
    specs: [
      { label: 'Hat', value: 'GSM / 4G + Wi-Fi' },
      { label: 'Pil Ömrü', value: 'Sensörlerde 2-3 Yıl Pil Ömrü' },
      { label: 'Mesafe', value: '1.200 Metre Açık Alan Menzili' },
      { label: 'Kontrol', value: 'Mobil Uygulama + 2 Adet Kumanda' }
    ]
  }
]
