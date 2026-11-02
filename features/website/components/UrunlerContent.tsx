'use client'

import * as React from 'react'
import Image from 'next/image'
import { productsData, productCategories } from '../data/products'
import { ArrowRight, CheckCircle2, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

export function UrunlerContent() {
  const [selectedCategory, setSelectedCategory] = React.useState('all')
  const [searchQuery, setSearchQuery] = React.useState('')

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.categorySlug === selectedCategory
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.summary.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-24 pb-14 sm:pt-32 sm:pb-20 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-3">
            Ürünlerimiz
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Araç ve mekan güvenliğinde kullandığımız garantili kamera ve donanım ürünleri.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full md:w-auto -mx-4 px-4 sm:mx-0 sm:px-0 flex-nowrap sm:flex-wrap">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  'shrink-0 min-h-[38px] px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95',
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'bg-secondary text-foreground hover:bg-slate-200 border border-border'
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Ürün ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 sm:h-10 pl-9 pr-4 rounded-xl border border-input bg-card text-base sm:text-sm outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20"
            />
          </div>

        </div>
        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-border p-12 text-center bg-card">
            <p className="text-muted-foreground text-sm">Aradığınız kriterlere uygun ürün bulunamadı.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col rounded-3xl border border-border bg-card overflow-hidden shadow-apple transition-all duration-300 hover:shadow-apple-lg hover:-translate-y-1 group"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white border-b border-border p-6 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow-sm">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1.5">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {product.description}
                  </p>
                  <div className="flex flex-col gap-1.5 mb-5 mt-auto">
                    {product.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-foreground/80 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl bg-secondary p-3.5 border border-border text-xs mb-6 flex flex-col gap-1.5">
                    {product.specs.map((sp, idx) => (
                      <div key={idx} className="flex justify-between border-b border-border/50 pb-1 text-muted-foreground">
                        <span className="font-semibold text-foreground">{sp.label}:</span>
                        <span className="text-right">{sp.value}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/905425710078?text=Merhaba,%20${encodeURIComponent(product.title)}%20hakk%C4%B1nda%20montaj%20ve%20fiyat%20bilgisi%20almak%20istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
                  >
                    <span>Fiyat & Montaj Bilgisi Al</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
