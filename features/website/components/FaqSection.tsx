'use client'

import * as React from 'react'
import { faqData } from '../data/faq'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-14 sm:py-20 bg-background select-none">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-2">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Araç montajı, garanti durumu ve kamera sistemleri hakkında en sık sorulanlar.
          </p>
        </div>

        <div className="flex flex-col gap-3">
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
                  className="flex w-full items-center justify-between p-4 sm:p-6 text-left min-h-[48px] active:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-foreground pr-3 sm:pr-4">
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
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-muted-foreground leading-relaxed animate-in fade-in duration-200 border-t border-border/50 pt-3">
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
