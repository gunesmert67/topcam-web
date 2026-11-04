import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Shield } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/icons'
import { siteConfig } from '@/config/site'
import { ROUTES } from '@/config/routes'

export function PublicFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#070D1E] border-t border-white/10 text-slate-300 pt-16 pb-8 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-12 border-b border-white/10">
          <div className="flex flex-col gap-4">
            <Link href={ROUTES.home} className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-black ring-1 ring-white/20">
                <Image
                  src="/images/topcam-logo.webp"
                  alt="Topçam Güvenlik Logo"
                  width={44}
                  height={44}
                  className="h-full w-full object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white">TOPÇAM</span>
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">
                  Güvenlik Sistemleri
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              İş yeri, ev, tır, iş makinesi ve binek araçlar için kamera ve alarm sistemleri yerinde montaj hizmeti.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram sayfamız"
                className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-pink-400 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp iletişim hattı"
                className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-emerald-400 transition-colors"
              >
                <Shield className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-bold uppercase tracking-wider text-white">Kurumsal</p>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href={ROUTES.home} className="hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href={ROUTES.about} className="hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href={ROUTES.services} className="hover:text-white transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href={ROUTES.products} className="hover:text-white transition-colors">
                  Ürün & Çözümler
                </Link>
              </li>
              <li>
                <Link href={ROUTES.blog} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Blog & Güvenlik Rehberi</span>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded-full font-medium">Yakında</span>
                </Link>
              </li>
              <li>
                <Link href={ROUTES.contact} className="hover:text-white transition-colors">
                  İletişim & Fiyatlandırma
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-bold uppercase tracking-wider text-white">Çözümlerimiz</p>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href={ROUTES.serviceCameras} className="hover:text-white transition-colors">
                  IP & AHD Kamera Sistemleri
                </Link>
              </li>
              <li>
                <Link href={ROUTES.serviceTrucks} className="hover:text-white transition-colors">
                  Tır & Kamyon Mobil Kameraları
                </Link>
              </li>
              <li>
                <Link href={ROUTES.serviceMachinery} className="hover:text-white transition-colors">
                  İş Makinesi Kör Nokta Kameraları
                </Link>
              </li>
              <li>
                <Link href={ROUTES.servicePassengerCars} className="hover:text-white transition-colors">
                  Binek Araç Ön & Arka Kamera
                </Link>
              </li>
              <li>
                <Link href={ROUTES.serviceAlarms} className="hover:text-white transition-colors">
                  Kablosuz & Akıllı Alarm Setleri
                </Link>
              </li>
              <li>
                <Link href={ROUTES.serviceServers} className="hover:text-white transition-colors">
                  Santral & Network Server Sistemleri
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-bold uppercase tracking-wider text-white">İletişim</p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-start gap-2.5 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">{siteConfig.contact.phoneFormatted}</span>
                  <span className="text-xs text-slate-400">Hemen Ara / WhatsApp</span>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-2.5 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white break-all">{siteConfig.contact.email}</span>
                  <span className="text-xs text-slate-400">Detaylı Bilgi & Teklif Talebi</span>
                </div>
              </a>

              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors group"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">{siteConfig.contact.instagramHandle}</span>
                  <span className="text-xs text-slate-400">Montaj ve Uygulama Videoları</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span className="text-xs">{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© {currentYear} {siteConfig.name}. Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4">
            <Link href={ROUTES.kvkk} className="hover:text-slate-200 transition-colors">
              KVKK Aydınlatma
            </Link>
            <span className="text-white/20">•</span>
            <Link href={ROUTES.privacy} className="hover:text-slate-200 transition-colors">
              Gizlilik Politikası
            </Link>
            <span className="text-white/20">•</span>
            <Link href={ROUTES.cookie} className="hover:text-slate-200 transition-colors">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
