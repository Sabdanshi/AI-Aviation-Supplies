import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#081b30]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(5,15,30,0.35)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9a24b]/60 text-[#c9a24b] transition-transform duration-300 group-hover:rotate-12">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path
                d="M12 2L13.5 8.5L21 10L13.5 11.5L12 21L10.5 11.5L3 10L10.5 8.5L12 2Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="font-display leading-tight">
            <span className="block text-lg font-semibold tracking-wide text-white">Airlink</span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#c9a24b]">
              Aviation Spares
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-[#d9b968]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#c9a24b] to-[#d9b968] px-6 py-2.5 text-sm font-semibold text-[#081b30] shadow-lg shadow-[#c9a24b]/20 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#c9a24b]/30 active:translate-y-0"
        >
          <Phone className="h-4 w-4" />
          Enquire Now
        </a>

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
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-[#d9b968]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c9a24b] to-[#d9b968] px-6 py-2.5 text-sm font-semibold text-[#081b30]"
          >
            <Phone className="h-4 w-4" />
            Enquire Now
          </a>
        </nav>
      </div>
    </header>
  )
}
