'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { ROUTES } from '@/config/routes'

const navLinks = [
  { name: 'Ana Sayfa', href: ROUTES.home },
  { name: 'Hizmetlerimiz', href: ROUTES.services },
  { name: 'Ürün & Çözümler', href: ROUTES.products },
  { name: 'Hakkımızda', href: ROUTES.about },
  { name: 'Blog', href: ROUTES.blog },
  { name: 'İletişim', href: ROUTES.contact },
]

export function PublicNavbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-3 inset-x-4 sm:inset-x-6 lg:inset-x-12 xl:inset-x-24 z-50 transition-all duration-300',
          'border border-white/15 rounded-2xl glass-header shadow-xl shadow-black/25',
          scrolled && 'border-white/20 bg-[#0B132B]/95 shadow-2xl'
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          {/* Logo & Marka */}
          <Link
            href={ROUTES.home}
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 select-none group"
          >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/topcam-logo.webp"
                alt="Topçam Güvenlik Sistemleri Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold leading-none tracking-tight text-white flex items-center gap-1.5">
                TOPÇAM
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              </span>
              <span className="text-[10px] text-blue-300 font-semibold tracking-wider uppercase mt-1">
                Güvenlik Sistemleri
              </span>
            </div>
          </Link>

          {/* Desktop Navigasyon */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Ana Navigasyon">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium px-3.5 py-2 rounded-xl transition-all duration-200 select-none',
                    isActive
                      ? 'text-white bg-blue-600/90 font-semibold shadow-sm shadow-blue-500/20'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Sağ Hızlı Butonlar */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 px-3 py-2 rounded-xl border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{siteConfig.contact.phoneFormatted}</span>
            </a>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-3.5 py-2 rounded-xl shadow-md shadow-emerald-900/30 transition-all hover:scale-[1.02]"
            >
              <span>Hızlı Fiyat Al</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobil Menü Butonu */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              aria-label="Ara"
              className="p-2 rounded-xl text-white bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5 text-blue-400" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobil Menü Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-x-4 top-24 rounded-3xl bg-[#0B132B] border border-white/15 p-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-colors',
                      isActive
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-slate-200 hover:bg-white/10 hover:text-white'
                    )}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </Link>
                )
              })}
            </nav>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-white/10 text-white font-semibold text-sm border border-white/10"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{siteConfig.contact.phoneFormatted}</span>
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/40"
              >
                <span>WhatsApp Fiyat & Bilgi</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
