'use client'

import * as React from 'react'
import { faqData } from '@/data/faq'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-20 bg-background select-none">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Aklınıza Takılanlar
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mt-4 mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-base text-muted-foreground">
            Kamera montajı, araç garantisi, çalışma prensipleri ve keşif süreçleri hakkında merak edilenler.
          </p>
        </div>

        <div className="flex flex-col gap-3.5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={cn(
                  'rounded-2xl border transition-all duration-200 overflow-hidden',
                  isOpen
                    ? 'border-blue-500/50 bg-blue-50/20 shadow-sm'
                    : 'border-border bg-card hover:border-slate-300'
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                >
                  <span className="text-base font-bold text-foreground pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200',
                      isOpen && 'rotate-180 text-blue-600'
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-muted-foreground leading-relaxed animate-in fade-in duration-200 border-t border-border/50 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
