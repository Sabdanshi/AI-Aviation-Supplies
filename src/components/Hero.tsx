import { useEffect, useRef } from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export function Hero() {
  const imgRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = imgRef.current
    if (!node) return

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const offset = window.scrollY * 0.35
        node.style.transform = `translate3d(0, ${offset}px, 0) scale(1.12)`
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#050f1e]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={imgRef}
          className="absolute inset-0 scale-[1.12] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2400&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050f1e]/80 via-[#050f1e]/75 to-[#050f1e]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050f1e] via-[#050f1e]/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-20 lg:px-10">
        <div className="max-w-3xl">
          <div className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-[#c9a24b]/40 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#d9b968] backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5" />
            ISO 9001 · 14001 · 45001 Certified
          </div>

          <h1 className="reveal is-visible mt-6 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Your Complete{' '}
            <span className="bg-gradient-to-r from-[#c9a24b] to-[#f1dca0] bg-clip-text text-transparent">
              Aviation Supply Chain
            </span>{' '}
            Partner
          </h1>

          <p className="reveal is-visible reveal-delay-1 mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            From certified aviation chemicals and consumables to rotable
            components and ground support equipment — Airlink delivers
            certified, compliant supply-chain solutions to airlines, MROs,
            and operators across the UAE, India and beyond.
          </p>

          <div className="reveal is-visible reveal-delay-2 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#c9a24b] to-[#d9b968] px-7 py-3.5 text-sm font-semibold text-[#081b30] shadow-lg shadow-[#c9a24b]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#c9a24b]/30"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>

          <div className="reveal is-visible reveal-delay-3 mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
                4
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-white/50">
                Global regions
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
                11+
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-white/50">
                Aircraft platforms
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
                18+
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-white/50">
                Global OEM partners
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-9 w-px animate-pulse bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  )
}
