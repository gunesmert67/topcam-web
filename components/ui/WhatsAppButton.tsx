'use client'

import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function WhatsAppButton() {
  return (
    <aside aria-label="Hızlı WhatsApp İletişim" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      <a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp İle Hızlı İletişime Geçin"
        className="group flex items-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white p-3 sm:px-4 sm:py-3 shadow-xl shadow-emerald-950/40 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
          </span>
        </div>
        <span className="text-sm font-bold hidden sm:inline-block">WhatsApp Danışma</span>
      </a>
    </aside>
  )
}
