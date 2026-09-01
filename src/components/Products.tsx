import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import products, { categories } from '@/data/products'
import { useReveal } from '@/lib/useReveal'

export function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const { ref, visible } = useReveal<HTMLDivElement>()

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return products
    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="products" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal mx-auto max-w-2xl text-center ${visible ? 'is-visible' : ''}`}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a24b]">
            Our Catalogue
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-[#081b30] sm:text-4xl">
            Products &amp; Solutions
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Quality you can trust · Reliability you can count on · Supporting
            safe skies every day.
          </p>
        </div>

        <div
          className={`reveal reveal-delay-1 mt-12 flex flex-wrap items-center justify-center gap-2.5 ${
            visible ? 'is-visible' : ''
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'border-[#0c2a4a] bg-[#0c2a4a] text-white shadow-md shadow-[#0c2a4a]/20'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-[#c9a24b]/50 hover:text-[#081b30]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => (
            <article
              key={product.id}
              className="group reveal is-visible relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/50"
              style={{ transitionDelay: `${0.05 * (index % 6)}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050f1e]/70 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#0c2a4a] backdrop-blur-sm">
                  {product.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-[#081b30]">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0c2a4a] transition-colors duration-200 group-hover:text-[#c9a24b]"
                >
                  Enquire
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
