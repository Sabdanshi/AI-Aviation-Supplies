import { useReveal } from '@/lib/useReveal'
import { SectionPhotoBackdrop } from '@/components/SectionPhotoBackdrop'
import { SectionHeading } from '@/components/SectionHeading'
import {
  Building2,
  Globe,
  PackageSearch,
  Plane,
  Rocket,
  ShieldCheck,
  Timer,
  UserCheck,
} from 'lucide-react'

const PLATFORM_GROUPS = [
  {
    icon: Plane,
    title: 'Commercial aviation',
    platforms: 'A320 Family | A350 | A380 | B737 | B777 | B787 | ATR',
  },
  {
    icon: Building2,
    title: 'Business aviation',
    platforms: 'Gulfstream | Dassault Falcon | Bombardier | Embraer | Others',
  },
  {
    icon: Rocket,
    title: 'Helicopters',
    platforms: 'Airbus Helicopters | Bell | Leonardo | Sikorsky | Others',
  },
  {
    icon: ShieldCheck,
    title: 'Defence & military aviation',
    platforms: 'Fighters | Transport | Trainers | Helicopters | UAV Support',
  },
]

const INDUSTRIES_SERVED = [
  'Airlines',
  'MROs & Maintenance Facilities',
  'Helicopter Operators',
  'Defence & Air Force',
  'OEMs & Suppliers',
]

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
    <section id="services" className="relative overflow-hidden bg-[#f5f7fa] py-24 lg:py-32">
      <SectionPhotoBackdrop image="/images/misc/mro-technician.jpg" fadeTo="#f5f7fa" priority />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal mx-auto max-w-2xl text-center ${visible ? 'is-visible' : ''}`}
        >
          <SectionHeading
            eyebrow="MRO & Technical Solutions"
            title="Parts, Tools & Technical Support"
            description="We provide reliable sourcing and supply solutions for aircraft and helicopter maintenance, repair and overhaul requirements — delivering quality parts, tools and equipment to keep operations safe, efficient and compliant."
          />
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

        <div className="mt-20 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h3 className="font-display text-xl font-semibold text-[#081b30]">
              Aircraft &amp; Helicopter Platforms We Support
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {PLATFORM_GROUPS.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex items-center gap-2.5">
                    <group.icon className="h-4 w-4 text-[#c9a24b]" />
                    <p className="text-sm font-semibold text-[#081b30]">
                      {group.title}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {group.platforms}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-xl font-semibold text-[#081b30]">
              Industries &amp; Customers We Serve
            </h3>
            <ul className="mt-6 space-y-3">
              {INDUSTRIES_SERVED.map((industry) => (
                <li
                  key={industry}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a24b]" />
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
