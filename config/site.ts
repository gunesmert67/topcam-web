export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://topcamguvenlik.com'

export const siteConfig = {
  name: 'Topçam Güvenlik Sistemleri',
  legalName: 'Topçam Güvenlik Sistemleri',
  title: 'Topçam Güvenlik Sistemleri | Mobil Güvenlik, Kamera ve Alarm Sistemleri',
  description: 'İstanbul ve Türkiye genelinde IP, AHD, Analog Kamera, Alarm, Araç (Tır, Kamyon, İş Makinesi, Binek) Ön-Arka Kamera Montajı, Santral ve Server Sistemleri kurulumu ve teknik servisi.',
  url: baseUrl,
  contact: {
    phone: '0542 571 0078',
    phoneFormatted: '0542 571 00 78',
    phoneRaw: '+905425710078',
    whatsappUrl: 'https://wa.me/905425710078?text=Merhaba,%20Top%C3%A7am%20G%C3%BCvenlik%20Sistemleri%20hakk%C4%B1nda%20bilgi%20ve%20fiyat%20almak%20istiyorum.',
    email: 'kadirtopcam34@gmail.com',
    instagram: 'https://www.instagram.com/topcamguvenliksistemleri/',
    instagramHandle: '@topcamguvenliksistemleri',
    address: 'İstanbul, Türkiye (Yerinde Montaj ve Türkiye Geneli Proje Desteği)',
    workHours: 'Pazartesi - Cumartesi: 08:30 - 19:30 | 7/24 Acil Teknik Destek',
  },
  services: [
    {
      id: 'kamera-sistemleri',
      title: 'Güvenlik Kamera Sistemleri (IP / AHD / Analog)',
      shortDesc: 'İş yeri ve konutlar için gece renkli görüşlü IP ve AHD kamera kurulumu.',
      slug: 'guvenlik-kamera-sistemleri',
      image: '/images/guvenlik-kamera-sistemi.webp'
    },
    {
      id: 'arac-mobil-kamera',
      title: 'Tır, Kamyon ve Ağır Vasıta Kamera Sistemleri',
      shortDesc: 'Lojistik araçları için kör nokta kameraları ve mobil DVR kayıt sistemi.',
      slug: 'tir-ve-agır-vasita-kamera-sistemleri',
      image: '/images/tir-arac-kamera.webp'
    },
    {
      id: 'is-makinesi-kamera',
      title: 'İş Makineleri Kör Nokta & Geri Görüş Sistemleri',
      shortDesc: 'Ekskavatör, forklift ve vinçler için darbeye dayanıklı kör nokta ekranı.',
      slug: 'is-makinesi-kamera-sistemleri',
      image: '/images/is-makinesi-kamera.webp'
    },
    {
      id: 'binek-arac-kamera',
      title: 'Binek Araç Ön & Arka Kamera Montajı',
      shortDesc: 'Otomobiller için gizli kablolu ön-arka yol kayıt kamerası montajı.',
      slug: 'binek-arac-on-arka-kamera-montaji',
      image: '/images/on-arka-arac-kamera.webp'
    },
    {
      id: 'alarm-sistemleri',
      title: 'Hırsız & Yangın Alarm Sistemleri',
      shortDesc: 'Kablosuz akıllı alarm setleri ve cep telefonuna anında arama/bildirim.',
      slug: 'hirsiz-ve-yangin-alarm-sistemleri',
      image: '/images/alarm-sistemleri.webp'
    },
    {
      id: 'santral-server-sistemleri',
      title: 'Santral, Ağ Altyapısı ve Server Sistemleri',
      shortDesc: 'IP telefon santrali, düzenli rack kabinet ve NVR kayıt sunucusu kurulumu.',
      slug: 'santral-ve-server-sistemleri',
      image: '/images/kamera-server.webp'
    }
  ]
}
