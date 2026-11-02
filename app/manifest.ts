import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Topçam Güvenlik Sistemleri | Mobil Güvenlik, Kamera ve Alarm',
    short_name: 'Topçam Güvenlik',
    description: 'Mobil güvenlik, IP/AHD kamera, araç kamerası montajı ve alarm sistemleri.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B132B',
    theme_color: '#0B132B',
    icons: [
      {
        src: '/images/topcam-logo.webp',
        sizes: '500x500',
        type: 'image/jpeg',
      },
    ],
  }
}
