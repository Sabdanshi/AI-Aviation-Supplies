import { useReveal } from '@/lib/useReveal'
import { Globe, PackageSearch, ShieldCheck, Timer, UserCheck } from 'lucide-react'

const CAPABILITIES = [
  {
    icon: Globe,
    title: 'Global Sourcing',
    description:
      'Access to an extensive network of OEMs, distributors and certified suppliers worldwide.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description:
      'All products are fully traceable, certified and compliant with industry standards.',
  },
  {
    icon: PackageSearch,
    title: 'Technical Expertise',
    description:
      'A skilled team with in-depth knowledge of aviation platforms and MRO requirements.',
  },
  {
    icon: Timer,
    title: 'Timely Delivery',
    description:
      'Reliable logistics and supply chain solutions to meet your critical needs.',
  },
  {
    icon: UserCheck,
    title: 'Customer Focus',
    description:
      'Flexible, responsive solutions tailored to your operational requirements.',
  },
]

export function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="services" className="relative bg-[#f5f7fa] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal mx-auto max-w-2xl text-center ${visible ? 'is-visible' : ''}`}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a24b]">
            MRO &amp; Technical Solutions
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-[#081b30] sm:text-4xl">
            Parts, Tools &amp; Technical Support
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            We provide reliable sourcing and supply solutions for aircraft
            and helicopter maintenance, repair and overhaul requirements —
            delivering quality parts, tools and equipment to keep operations
            safe, efficient and compliant.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {CAPABILITIES.map((item, index) => (
            <div
              key={item.title}
              className={`reveal group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${
                visible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${0.08 * index}s` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#0c2a4a] to-[#123a63] text-[#d9b968] transition-transform duration-300 group-hover:rotate-6">
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
    </section>
  )
}
