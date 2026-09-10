import products from '@/data/products'
import { useReveal } from '@/lib/useReveal'
import { SectionPhotoBackdrop } from '@/components/SectionPhotoBackdrop'
import { SectionHeading } from '@/components/SectionHeading'

export function Products() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="products" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <SectionPhotoBackdrop image="/images/misc/jet-engine.jpg" priority />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal mx-auto max-w-2xl text-center ${visible ? 'is-visible' : ''}`}
        >
          <SectionHeading
            eyebrow="Our Catalogue"
            title="Products & Solutions"
            description="Quality you can trust · Reliability you can count on · Supporting safe skies every day."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
