import { useReveal } from '@/lib/useReveal'
import { Globe2, Layers, ShieldCheck, Users } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: Layers,
    title: 'Consumables to Rotables',
    description:
      'A catalogue spanning aviation chemicals through to rotable components.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified & Compliant',
    description:
      'Every product traceable and delivered under a certified quality framework.',
  },
  {
    icon: Globe2,
    title: 'UAE & India Reach',
    description:
      'Headquartered in Abu Dhabi with representation extending into India.',
  },
  {
    icon: Users,
    title: 'Trusted Airline Partners',
    description:
      'Relied upon by airlines, MROs, ground handlers and industrial operators.',
  },
]

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a24b]">
              Who We Are
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[#081b30] sm:text-4xl">
              About Airlink
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Airlink Airplanes Spare Parts Trading L.L.C. is a UAE-based
              aviation supply company delivering complete supply-chain
              solutions to airlines, MROs, ground handling teams and
              industrial operators worldwide.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Our catalogue spans certified aviation chemicals, oils,
              sealants, inflight products, cabin and exterior cleaning
              consumables, paint shop products, safety equipment and
              janitorial solutions — alongside our expansion into aircraft
              parts and rotables — all delivered with certified, eco-friendly
              and globally compliant materials, with representation
              extending into India.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f5f7fa] p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Platforms we support
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                A320 Family · A350 · A380 · B737 · B777 · B787 · ATR ·
                Gulfstream · Dassault Falcon · AgustaWestland · Bell
              </p>
            </div>
          </div>

          <div className={`reveal reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
            <div className="grid grid-cols-2 gap-5">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c9a24b]/40 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0c2a4a] text-[#d9b968] transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-[#081b30]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
