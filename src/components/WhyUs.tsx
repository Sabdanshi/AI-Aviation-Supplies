import { useReveal } from '@/lib/useReveal'
import {
  BadgeCheck,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Truck,
  Users,
} from 'lucide-react'

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Aviation-grade quality',
    description: 'Consistent quality across every product line we supply.',
  },
  {
    icon: BadgeCheck,
    title: 'Triple-certified operations',
    description: 'ISO 9001, 14001 & 45001 certified management systems.',
  },
  {
    icon: Leaf,
    title: 'Eco-friendly materials',
    description: 'Globally compliant materials sourced responsibly.',
  },
  {
    icon: Truck,
    title: 'Reliable supply chain',
    description: 'Fast, dependable delivery across the UAE and India.',
  },
  {
    icon: Users,
    title: 'Trusted by industry leaders',
    description: 'Relied on by MROs, airlines, hospitality & industrial sectors.',
  },
  {
    icon: PackageCheck,
    title: 'Full-spectrum support',
    description: 'From everyday consumables through to rotable components.',
  },
]

export function WhyUs() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#081b30] py-24 lg:py-32"
    >
      <div className="texture-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[#c9a24b]/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#123a63]/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal mx-auto max-w-2xl text-center ${visible ? 'is-visible' : ''}`}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9b968]">
            Why Choose Airlink
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Built On Certified Quality &amp; Trust
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, index) => (
            <div
              key={reason.title}
              className={`reveal group rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c9a24b]/40 hover:bg-white/[0.06] ${
                visible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${0.07 * index}s` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#c9a24b] to-[#d9b968] text-[#081b30] transition-transform duration-300 group-hover:scale-110">
                <reason.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
