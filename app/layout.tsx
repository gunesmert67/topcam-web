import type { Metadata, Viewport } from 'next'
import './globals.css'
import { IBM_Plex_Sans } from 'next/font/google'
import { ToastProvider, ToastViewport } from '@/components/ui/toast'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { siteConfig, baseUrl } from '@/config/site'
import { PublicNavbar } from '@/components/layout/PublicNavbar'
import { PublicFooter } from '@/components/layout/PublicFooter'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0B132B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Topçam Güvenlik Sistemleri | Mobil Güvenlik, Kamera ve Alarm',
    template: '%s | Topçam Güvenlik Sistemleri',
  },
  description:
    'Topçam Güvenlik Sistemleri; IP, AHD ve Analog güvenlik kamerası, hırsız alarmı, tır/kamyon/iş makinesi mobil araç kamerası montajı, santral ve server altyapı hizmetleri.',
  keywords: [
    'Topçam Güvenlik',
    'Güvenlik Kamera Sistemleri',
    'Mobil Güvenlik',
    'IP Kamera Kurulumu',
    'AHD Kamera Montajı',
    'Analog Kamera Sistemleri',
    'Hırsız Alarmı',
    'Yangın Alarmı',
    'Araç Kamerası Montajı',
    'Tır Kamera Sistemleri',
    'Kamyon Kör Nokta Kamerası',
    'İş Makinesi Kamera Montajı',
    'Binek Araç Ön Arka Kamera',
    'Kamera Server Sistemleri',
    'NVR DVR Kayıt Cihazı',
    'Telefon Santral Kurulumu',
    'Ağ ve Kablolama Altyapısı',
    'İstanbul Güvenlik Kamerası',
  ],
  authors: [{ name: 'Topçam Güvenlik Sistemleri', url: baseUrl }],
  creator: 'Topçam Güvenlik Sistemleri',
  publisher: 'Topçam Güvenlik Sistemleri',
  category: 'Security & Telecommunications Services',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: baseUrl,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Topçam Güvenlik Sistemleri | Mobil Güvenlik, Kamera ve Alarm',
    description:
      'İş yerleri, konutlar ve araçlar için profesyonel güvenlik kamera sistemleri, alarm, mobil tır/iş makinesi kameraları ve santral kurulumu.',
    url: baseUrl,
    siteName: 'Topçam Güvenlik Sistemleri',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/images/topcam-logo.webp',
        width: 500,
        height: 500,
        alt: 'Topçam Güvenlik Sistemleri Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Topçam Güvenlik Sistemleri | Mobil Güvenlik, Kamera ve Alarm',
    description:
      'İş yeri, ev ve araç güvenlik kamera sistemleri montaj ve teknik servisi.',
    images: ['/images/topcam-logo.webp'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Topçam Güvenlik Sistemleri',
    image: `${baseUrl}/images/topcam-logo.webp`,
    '@id': `${baseUrl}/#localbusiness`,
    url: baseUrl,
    telephone: siteConfig.contact.phoneRaw,
    email: siteConfig.contact.email,
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'İstanbul',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.0082,
      longitude: 28.9784,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:30',
        closes: '19:30',
      },
    ],
    sameAs: [
      siteConfig.contact.instagram,
    ],
  }

  return (
    <html lang="tr" className={ibmPlexSans.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-blue-600 selection:text-white flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ToastProvider>
          <PublicNavbar />
          <main className="flex-1">
            {children}
          </main>
          <PublicFooter />
          <WhatsAppButton />
          <ToastViewport />
        </ToastProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
