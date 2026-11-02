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

  React.useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const handleLogoClick = (e: React.MouseEvent) => {
    setMobileMenuOpen(false)
    if (pathname === ROUTES.home) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-2.5 sm:top-3 inset-x-3 sm:inset-x-6 lg:inset-x-[75px] xl:inset-x-32 z-50',
          'border border-white/15 rounded-2xl bg-[#0B132B] shadow-xl shadow-black/30'
        )}
      >
        <div className="flex h-14 items-center justify-between px-3 sm:px-6">
          <Link
            href={ROUTES.home}
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 sm:gap-3 select-none group min-w-0"
          >
            <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-black ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/topcam-logo.webp"
                alt="Topçam Güvenlik Sistemleri Logo"
                width={40}
                height={40}
                className="h-full w-full object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col truncate">
              <span className="text-sm sm:text-base font-bold leading-none tracking-tight text-white flex items-center gap-1.5">
                TOPÇAM
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              </span>
              <span className="text-[8px] sm:text-[9px] text-blue-300 font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase mt-0.5 truncate">
                Güvenlik Sistemleri
              </span>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center" aria-label="Ana Navigasyon">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href || (link.href !== ROUTES.home && pathname.startsWith(link.href))
              return (
                <React.Fragment key={link.href}>
                  {index > 0 && (
                    <span className="h-3.5 w-px bg-white/15 mx-0.5 shrink-0" aria-hidden="true" />
                  )}
                  <Link
                    href={link.href}
                    className={cn(
                      'text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 select-none',
                      isActive
                        ? 'text-[#0B132B] bg-white shadow-sm shadow-black/10'
                        : 'text-slate-200 hover:text-white hover:bg-white/15'
                    )}
                  >
                    {link.name}
                  </Link>
                </React.Fragment>
              )
            })}
          </nav>
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-xl border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{siteConfig.contact.phoneFormatted}</span>
            </a>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-xl shadow-md shadow-emerald-950/30 transition-all hover:scale-[1.02]"
            >
              <span>Fiyat Al</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              aria-label="Telefonla Ara"
              className="min-h-[38px] min-w-[38px] flex items-center justify-center p-2 rounded-xl text-white bg-white/10 hover:bg-white/20 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-blue-400" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[38px] min-w-[38px] flex items-center justify-center p-2 rounded-xl text-white bg-white/10 hover:bg-white/20 active:scale-95 transition-all"
              aria-label={mobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>
      <div
        aria-hidden="true"
        onClick={() => setMobileMenuOpen(false)}
        className={cn(
          'fixed inset-0 z-[55] bg-black/40 backdrop-blur-[2px] transition-opacity duration-200 lg:hidden',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      />
      <div
        id="mobile-menu"
        inert={!mobileMenuOpen ? true : undefined}
        aria-hidden={!mobileMenuOpen}
        className={cn(
          'lg:hidden fixed inset-x-3 sm:inset-x-6 top-[calc(0.625rem+3.5rem+0.5rem)] max-h-[calc(100dvh-5rem)] bg-[#0B132B] z-[60] overflow-y-auto rounded-3xl border border-white/15 p-4 sm:p-5 shadow-2xl shadow-black/50',
          'transition-all duration-200 ease-out',
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 scale-100 visible pointer-events-auto'
            : 'opacity-0 -translate-y-2 scale-[0.98] invisible pointer-events-none'
        )}
      >
        <nav className="flex flex-col gap-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== ROUTES.home && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'flex items-center justify-between min-h-[44px] px-4 py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.99]',
                  isActive
                    ? 'bg-white text-[#0B132B]'
                    : 'text-slate-200 hover:bg-white/10 hover:text-white'
                )}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
            )
          })}
        </nav>

        <div className="pt-4 mt-3 border-t border-white/10 flex flex-col gap-2">
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="flex items-center justify-center gap-2 w-full min-h-[44px] py-3 rounded-xl bg-white/10 text-white font-semibold text-xs border border-white/10 active:scale-[0.99] transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>{siteConfig.contact.phoneFormatted}</span>
          </a>
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full min-h-[44px] py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/40 active:scale-[0.99] transition-all"
          >
            <span>WhatsApp Fiyat & Bilgi</span>
          </a>
        </div>
      </div>
    </>
  )
}
