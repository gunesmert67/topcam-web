'use client'

import * as React from 'react'
import Image from 'next/image'
import { productsData, productCategories } from '@/data/products'
import { siteConfig } from '@/config/site'
import { ArrowRight, CheckCircle2, ShieldCheck, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function UrunlerPage() {
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
    <div className="py-12 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Üst Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Donanım & Ekipmanlar
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mt-4 mb-4">
            Güvenlik Donanım ve Ürün Kataloğu
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Mekanlarınız ve araçlarınız için test edilmiş, dayanıklı ve yüksek performanslı güvenlik donanımlarımız.
          </p>
        </div>

        {/* Arama ve Kategori Filtreleme Çubuğu */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Kategori Butonları */}
          <div className="flex flex-wrap items-center gap-2">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200',
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'bg-secondary text-foreground hover:bg-slate-200 border border-border'
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Arama Inputu */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Ürün ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-9 pr-4 rounded-xl border border-input bg-card text-xs sm:text-sm outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20"
            />
          </div>

        </div>

        {/* Ürünler Grid */}
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
                {/* Görsel */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* İçerik */}
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

                  {/* Özellikler */}
                  <div className="flex flex-col gap-1.5 mb-5 mt-auto">
                    {product.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-foreground/80 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Teknik Tablo */}
                  <div className="rounded-xl bg-secondary p-3.5 border border-border text-xs mb-6 flex flex-col gap-1.5">
                    {product.specs.map((sp, idx) => (
                      <div key={idx} className="flex justify-between border-b border-border/50 pb-1 text-muted-foreground">
                        <span className="font-semibold text-foreground">{sp.label}:</span>
                        <span className="text-right">{sp.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buton */}
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
