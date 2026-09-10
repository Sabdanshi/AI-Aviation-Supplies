import { Link } from '@tanstack/react-router'
import { COMPANY } from '@/data/company'

export function Footer() {
  return (
    <footer className="relative bg-[#050f1e] text-white/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} AI Aviation Supplies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <p>
              {COMPANY.cityState} · {COMPANY.domain}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
