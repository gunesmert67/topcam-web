/**
 * Merkezi site yapılandırması
 */
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
      shortDesc: 'İş yeri, fabrika, depo, bina ve müstakil konutlar için gece görüşlü, yüksek çözünürlüklü IP, AHD ve Analog kamera kurulumu.',
      slug: 'guvenlik-kamera-sistemleri',
      image: '/images/guvenlik-kamera-sistemi.webp'
    },
    {
      id: 'arac-mobil-kamera',
      title: 'Tır, Kamyon ve Ağır Vasıta Kamera Sistemleri',
      shortDesc: 'Tır, kamyon, otobüs ve lojistik filoları için kör nokta kameraları, mobil DVR kayıt cihazı ve ön-arka profesyonel kamera montajı.',
      slug: 'tir-ve-agır-vasita-kamera-sistemleri',
      image: '/images/tir-arac-kamera.webp'
    },
    {
      id: 'is-makinesi-kamera',
      title: 'İş Makineleri Kör Nokta & Geri Görüş Sistemleri',
      shortDesc: 'Ekskavatör, vinç, forklift, loder ve şantiye iş makinelerine özel titreşime ve toza dayanıklı 360° kör nokta ve arka görüş sistemleri.',
      slug: 'is-makinesi-kamera-sistemleri',
      image: '/images/is-makinesi-kamera.webp'
    },
    {
      id: 'binek-arac-kamera',
      title: 'Binek Araç Ön & Arka Kamera Montajı',
      shortDesc: 'Otomobil ve hafif ticari araçlar için sonradan gizli kablo hatlı profesyonel ön ve arka yol kayıt kamerası montajı.',
      slug: 'binek-arac-on-arka-kamera-montaji',
      image: '/images/on-arka-arac-kamera.webp'
    },
    {
      id: 'alarm-sistemleri',
      title: 'Hırsız & Yangın Alarm Sistemleri',
      shortDesc: 'Kablosuz ve kablolu akıllı alarm setleri, hareket dedektörleri, sirenler ve cep telefonu bildirimli uzaktan yönetim çözümleri.',
      slug: 'hirsiz-ve-yangin-alarm-sistemleri',
      image: '/images/alarm-sistemleri.webp'
    },
    {
      id: 'santral-server-sistemleri',
      title: 'Santral, Ağ Altyapısı ve Server Sistemleri',
      shortDesc: 'IP ve analog telefon santralleri, rack kabinet, sunucu ve NVR kayıt server kurulumu, yapısal kablolama ve network altyapısı.',
      slug: 'santral-ve-server-sistemleri',
      image: '/images/kamera-server.webp'
    }
  ]
}
