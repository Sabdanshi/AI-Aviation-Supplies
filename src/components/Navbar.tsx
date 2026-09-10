import { useEffect, useLayoutEffect, useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { Menu, Phone, X } from 'lucide-react'

// useLayoutEffect warns during SSR (no DOM to lay out); fall back to
// useEffect there since the browser-only correction below is a no-op anyway
// until hydration.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const NAV_LINKS = [
  { label: 'Home', to: '/' as const },
  { label: 'About', to: '/' as const, hash: 'about' },
  { label: 'Products', to: '/products' as const },
  { label: 'Services', to: '/services' as const },
  { label: 'Why Us', to: '/why-us' as const },
  { label: 'Contact', to: '/contact' as const },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useIsomorphicLayoutEffect(() => {
    // On non-home routes `solid` is already forced true via `!isHome` below,
    // so tracking scroll position there would only trigger wasted re-renders.
    if (!isHome) return

    // Correct synchronously before paint (not via the throttled/rAF path
    // below) so a page loaded already scrolled — e.g. scrollRestoration on
    // back/forward nav — never flashes the transparent navbar first.
    setScrolled(window.scrollY > 24)

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  const handleNavClick = () => setOpen(false)
  const solid = scrolled || !isHome

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-[#081b30]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(5,15,30,0.35)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center group">
          <img
            src="/images/logo-white.png"
            alt="AI Aviation Supplies"
            className="h-16 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-[#d9b968]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#c9a24b] to-[#d9b968] px-6 py-2.5 text-sm font-semibold text-[#081b30] shadow-lg shadow-[#c9a24b]/20 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#c9a24b]/30 active:translate-y-0"
        >
          <Phone className="h-4 w-4" />
          Enquire Now
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-6 mt-4 flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#081b30] p-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              onClick={handleNavClick}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-[#d9b968]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c9a24b] to-[#d9b968] px-6 py-2.5 text-sm font-semibold text-[#081b30]"
          >
            <Phone className="h-4 w-4" />
            Enquire Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
