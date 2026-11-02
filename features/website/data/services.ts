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
    summary: 'İş yerleri, fabrikalar, depolar, apartmanlar ve konutlar için gece görüşlü, yapay zeka analizli IP ve AHD kamera kurulumu.',
    description: 'Topçam Güvenlik Sistemleri olarak; yüksek çözünürlüklü (2MP, 4MP, 8MP 4K Ultra HD) IP kameralar, ekonomik ve dayanıklı AHD sistemler ve analog altyapılar ile mekanlarınızı 7/24 kesintisiz koruma altına alıyoruz. Telefon, tablet ve bilgisayardan anlık canlı izleme, geriye dönük sesli ve görüntülü kayıt tarama, hareket algılama ve akıllı bildirim özellikleri ile kontrol her an elinizin altında.',
    image: '/images/guvenlik-kamera-sistemi.webp',
    features: [
      '4K Ultra HD ve Full HD Gece Görüş Teknolojisi',
      'H.265+ Akıllı Video Sıkıştırma ile Uzun Süreli Kayıt',
      'Mobil Uygulama Üzerinden Kesintisiz 7/24 Canlı İzleme',
      'Hareket, Yüz ve Çevre Güvenlik Çit İhlali Bildirimleri',
      'Hava Koşullarına ve Dış Ortama Dayanıklı IP67 Muhafaza',
      'Profesyonel Kanal ve Kablolama ile Temiz İşçilik'
    ],
    applicationAreas: [
      'Fabrika, Atölye ve İmalathaneler',
      'Depolar, Lojistik Merkezleri ve Antrepolar',
      'Mağazalar, Ofisler ve Plaza Katları',
      'Apartman, Site ve Müstakil Villalar',
      'Otoparklar, Benzin İstasyonları ve Açık Alanlar'
    ],
    specs: [
      { label: 'Çözünürlük Seçenekleri', value: '1080p FHD, 4MP, 5MP, 8MP (4K)' },
      { label: 'Gece Görüşü', value: 'Smart IR LED, ColorVu / Full Color 30-80m' },
      { label: 'Kayıt Desteği', value: 'NVR / DVR / Cloud Yedekleme' },
      { label: 'Uzaktan Erişim', value: 'iOS, Android, Windows, macOS' },
    ]
  },
  {
    id: 'tir-arac-kamera',
    slug: 'tir-ve-agır-vasita-kamera-sistemleri',
    title: 'Tır, Kamyon ve Ağır Vasıta Mobil Kamera Sistemleri',
    shortTitle: 'Tır & Ağır Vasıta Kameraları',
    badge: 'Mobil Güvenlik Uzmanlığı',
    summary: 'Lojistik tırları, kamyonlar, mikserler ve otobüsler için kör nokta önleme, mobil DVR kayıt ve filo güvenlik sistemleri.',
    description: 'Ağır vasıtalarda meydana gelen kazaların %70’ten fazlası kör nokta kaynaklıdır. Topçam Güvenlik Sistemleri olarak; tır çekicileri, dorseler, hafriyat kamyonları ve otobüslere özel sarsıntıya, yüksek voltaj dalgalanmalarına ve zorlu yol şartlarına dayanıklı Mobil DVR ve kör nokta kamera sistemleri uyguluyoruz. Sürücü kabinindeki yüksek çözünürlüklü monitör sayesinde kör noktalar sıfıra iner, kaza riski minimuma iner.',
    image: '/images/tir-arac-kamera.webp',
    features: [
      'AHD Gece Görüşlü Geniş Açılı (140°-170°) Ağır Vasıta Kameraları',
      'Sarsıntıya ve Titreşime Karşı Kilitli Mobil DVR Kayıt Cihazları',
      'Şoför Kabini İçin 7” veya 9” Bölünmüş Ekranlı HD Monitör',
      'Geri Vitese Takıldığında Otomatik Tetiklenen Arka Kamera Görüntüsü',
      'Sağ-Sol Sinyal Entegreli Kör Nokta Otomatik Yan Görünüm',
      'Dorse Bağlantısı İçin Özel Ağır Hizmet Tipi Spiral Kablo Soketleri'
    ],
    applicationAreas: [
      'Uluslararası ve Şehirlerarası Lojistik Tırları',
      'Hafriyat ve Damperli Kamyonlar',
      'Beton Mikserleri ve Pompa Araçları',
      'Belediye Çöp Kamyonları ve Yol Süpürme Araçları',
      'Şehirlerarası Otobüsler ve Personel Servisleri'
    ],
    specs: [
      { label: 'Voltaj Uyumluluğu', value: '12V - 24V - 36V Endüstriyel Güç Koruması' },
      { label: 'Su ve Toz Koruması', value: 'IP68 / IP69K Yüksek Basınçlı Suya Dayanıklı' },
      { label: 'Kayıt Kapasitesi', value: 'SD Kart ve SSD/HDD Mobil DVR Desteği' },
      { label: 'Kamera Sayısı', value: '2 Kameralı, 4 Kameralı ve 8 Kameralı Paketler' },
    ]
  },
  {
    id: 'is-makinesi-kamera',
    slug: 'is-makinesi-kamera-sistemleri',
    title: 'İş Makineleri Kör Nokta ve Geri Görüş Sistemleri',
    shortTitle: 'İş Makinesi Kamera Montajı',
    badge: 'İş Güvenliği & İSG Uyumlu',
    summary: 'Ekskavatör, vinç, forklift, loder ve kazıcı-yükleyiciler için şantiye şartlarına uygun 360° kör nokta kameraları.',
    description: 'Şantiyelerde, maden ocaklarında ve endüstriyel tesislerde iş makinelerinin çevresindeki personeli ve engelleri fark edebilmesi hayati önem taşır. Topçam Güvenlik; forkliftlerden devasa kule vinçlere ve paletli ekskavatörlere kadar her makine tipine özel, darbelere ve basınca dayanıklı kamera ve monitör montajı gerçekleştirir. İSG standartlarına tam uyumlu çözümlerimiz iş kazalarının önüne geçer.',
    image: '/images/is-makinesi-kamera.webp',
    features: [
      'Şok, Darbe ve Yoğun Toza Karşı Metal Zırhlı Gövde',
      'Yüksek Işıkta Yansıma Yapmayan Endüstriyel IPS Monitör',
      'Forklift Çatal Ucu ve Yükseklik Kamerası Opsiyonu',
      'Kule Vinç Halat ve Bom Ucu Zoom Kameraları',
      'Yaya ve Engel Algılayıcı Yakınlık Sensör & Sesli İkaz Entegrasyonu',
      'Yerinde Şantiye Alanında Profesyonel Mobil Montaj Hizmeti'
    ],
    applicationAreas: [
      'Paletli & Lastikli Ekskavatörler',
      'Forkliftler ve Reach Truck Depo Araçları',
      'Loder (Yükleyici) ve Beko Loderler',
      'Mobil Vinçler ve Kule Vinçler',
      'Maden Kamyonları, Dozerler ve Silindirler'
    ],
    specs: [
      { label: 'Kasa Tipi', value: 'Döküm Alüminyum & Ağır Hizmet Zırhlı' },
      { label: 'Titreşim Mukavemeti', value: '10G Titreşim ve Darbe Direnci' },
      { label: 'Gece Aydınlatması', value: 'IR LED + Otomatik Işık Dengeleme (WDR)' },
      { label: 'Montaj Şekli', value: 'Güçlü Mıknatıslı veya Civatalı Şantiye Montajı' },
    ]
  },
  {
    id: 'binek-arac-kamera',
    slug: 'binek-arac-on-arka-kamera-montaji',
    title: 'Binek ve Ticari Araç Ön & Arka Yol Kayıt Kamerası Montajı',
    shortTitle: 'Binek Araç Yol Kayıt Kameraları',
    badge: 'Kusursuz Gizli Kablolama',
    summary: 'Otomobil ve hafif ticari araçlar için sonradan ön ve arka yol kayıt kamerası montajı, park modu ve sigorta beslemesi.',
    description: 'Trafikte karşılaştığınız olası anlaşmazlıklarda, kaza tutanaklarında ve park halinde aracınıza verilen hasarlarda en güçlü kanıtınız yol kayıt kameranızdır. Topçam Güvenlik Sistemleri olarak; kabloları aracın döşeme ve fitil altından tamamen gizleyerek, orijinal sigorta kutusundan güvenli bypass (fuse tap) ile 24 saat park nöbeti kaydı yapabilen sistemleri kusursuz işçilikle kuruyoruz.',
    image: '/images/on-arka-arac-kamera.webp',
    features: [
      'Ön ve Arka Eşzamanlı 2K / 4K Çift Yönlü Kayıt',
      'Görünmeyen Gizli Kablolama İşçiliği (Orijinalliği Bozmaz)',
      'Akü Koruma Devreli 24 Saat Kesintisiz Park Nöbeti Modu',
      'G-Sensör (Darbe Algılayıcı) ile Otomatik Acil Durum Kilitli Kaydı',
      'Dahili Wi-Fi ile Cep Telefonundan Hızlı Video İndirme ve İzleme',
      'GPS Modülü ile Hız, Konum ve Rota Kaydı'
    ],
    applicationAreas: [
      'Binek Otomobiller (Sedan, Hatchback, SUV)',
      'Hafif Ticari Araçlar (Doblo, Caddy, Transporter vb.)',
      'Taksi, VIP Transfer ve Filo Kiralama Araçları',
      'Sürücü Kursu Eğitim Araçları'
    ],
    specs: [
      { label: 'Lens Açısı', value: '160° Ultra Geniş Ön / 140° Arka Açı' },
      { label: 'Görüntü Sensörü', value: 'Sony STARVIS Gece Sensörü' },
      { label: 'Besleme Bağlantısı', value: 'Sigorta Kutusu Park Kablosu (Hardwire Kit)' },
      { label: 'Depolama', value: 'Yüksek Hızlı MicroSD (64GB - 256GB - 512GB)' },
    ]
  },
  {
    id: 'alarm-sistemleri',
    slug: 'hirsiz-ve-yangin-alarm-sistemleri',
    title: 'Hırsız ve Yangın Alarm Sistemleri',
    shortTitle: 'Alarm Sistemleri',
    badge: 'Tam Kapsamlı Koruma',
    summary: 'Kablosuz akıllı ev & iş yeri alarm setleri, kapı/pencere manyetik kontakları, hareket sensörleri ve telefon aramalı paneller.',
    description: 'Yetkisiz girişlere, hırsızlık teşebbüslerine ve yangın/gaz kaçaklarına karşı mekanınızı saniyeler içinde koruma altına alan akıllı alarm sistemleri kuruyoruz. Sabotaj korumalı harici sirenler, kablosuz şık sensörler ve telefonunuza anında gelen siren ve arama bildirimleri ile mekanınız güvende kalır.',
    image: '/images/alarm-sistemleri.webp',
    features: [
      'Kablosuz Kolay Kurulum ve Kırma/Dökme Yapmadan Montaj',
      'Evcil Hayvan Algılamayan (Pet-Immune) Akıllı PIR Dedektörler',
      'Elektrik Kesintisine Karşı Dahili Akü ile Kesintisiz Çalışma',
      'GSM ve Wi-Fi Çift Hatlı Kesintisiz İletişim',
      'Harici 120dB Caydırıcı Işıklı ve Sabotaj Korumalı Siren',
      'Duman, Gaz Kaçağı ve Su Baskını Dedektör Entegrasyonu'
    ],
    applicationAreas: [
      'Evler, Villalar ve Yazlık Konutlar',
      'Kuyumcular, Eczaneler ve Değerli Eşya Mağazaları',
      'Ofisler, Şirket Merkezleri ve Depolar',
      'Fabrika İdari Binaları ve Şantiyeler'
    ],
    specs: [
      { label: 'Haberleşme', value: 'GSM / 4G LTE + Wi-Fi + Sabit Hat' },
      { label: 'Yedek Güç', value: '12V Bakımsız Kuru Akü (24-48 Saat Çalışma)' },
      { label: 'Mesafe', value: 'Kablosuz Sensörlerde 1.200 Metreye Kadar Açık Alan' },
      { label: 'Yönetim', value: 'Mobil Uygulama + Şifre Paneli + Uzaktan Kumanda' },
    ]
  },
  {
    id: 'santral-server-sistemleri',
    slug: 'santral-ve-server-sistemleri',
    title: 'Santral, Rack Kabinet ve Kamera Server Sistemleri',
    shortTitle: 'Santral & Server Altyapısı',
    badge: 'Kurumsal Altyapı',
    summary: 'IP/Analog telefon santralleri, rack kabinet düzenleme, NVR server ve yapısal data kablolama çözümleri.',
    description: 'Güvenlik kamera ve iletişim sistemlerinin kalbi olan network ve server altyapısını profesyonel standartlarda inşa ediyoruz. Düzensiz kablo karmaşasına son veren patch panel ve rack kabinet sonlandırmaları, kurumsal IP telefon santralleri ve yüksek kapasiteli NVR video kayıt sunucuları ile işletmenizin teknolojik omurgasını güçlendiriyoruz.',
    image: '/images/kamera-server.webp',
    features: [
      'IP ve Hibrit Telefon Santrali Kurulumu ve Dahili Hat Programlama',
      'Rack Kabinet Montajı, Patch Panel ve Etiketli Kablo Düzenleme',
      'Yüksek Kapasiteli NVR / Server Depolama Üniteleri Kurulumu',
      'PoE Switch ve Fiber Optik Ağ Altyapısı Sonlandırması',
      'Uzaktan Erişim İçin Güvenli Port ve Statik IP / VPN Yapılandırması',
      'Kesintisiz Güç Kaynağı (UPS) Entegrasyonu ile Veri Kaybını Önleme'
    ],
    applicationAreas: [
      'Kamera Kontrol Odaları ve Güvenlik Merkezleri',
      'Plazalar, Kurumsal Ofisler ve Çağrı Merkezleri',
      'Hastaneler, Oteller ve Eğitim Kurumları',
      'Lojistik Tesisler ve Organize Sanayi Bölgeleri'
    ],
    specs: [
      { label: 'Kablo Standardı', value: 'Cat6, Cat6A, Cat7 ve Fiber Optik' },
      { label: 'Kabinet Boyutları', value: '6U, 9U, 12U Duvar Tipi / 19” 22U-42U Dikili Tip' },
      { label: 'Santral Kapasitesi', value: '4 Hattan 500+ Dahili Aboneye Kadar Ölçeklenebilir' },
      { label: 'Kayıt Sunucusu', value: 'RAID Destekli 16-128 Kanal Kurumsal NVR Sistemleri' },
    ]
  }
]
