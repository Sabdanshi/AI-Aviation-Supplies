import { Mail, MapPin, Phone } from 'lucide-react'

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="relative bg-[#050f1e] pt-16 text-white/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9a24b]/60 text-[#c9a24b]">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M12 2L13.5 8.5L21 10L13.5 11.5L12 21L10.5 11.5L3 10L10.5 8.5L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="font-display leading-tight">
                <span className="block text-lg font-semibold text-white">Airlink</span>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-[#c9a24b]">
                  Aviation Spares
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Your complete aviation supply chain partner — certified
              chemicals, consumables, tooling and rotable components.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-[#d9b968]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a24b]" />
                +971 52 925 0423
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a24b]" />
                sales@airlinkspares.com
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a24b]" />
                Mussafah M-45, Store 29, Abu Dhabi, UAE
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Certifications
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-white/50">
              <li>ISO 9001:2015</li>
              <li>ISO 14001:2015</li>
              <li>ISO 45001:2018</li>
              <li>Member — Aviation Suppliers Association</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Airlink Airplanes Spare Parts Trading L.L.C. All rights reserved.</p>
          <p>Abu Dhabi, UAE · www.airlinkspares.com</p>
        </div>
      </div>
    </footer>
  )
}
