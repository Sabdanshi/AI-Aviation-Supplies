import { useReveal } from '@/lib/useReveal'
import { SectionPhotoBackdrop } from '@/components/SectionPhotoBackdrop'
import { SectionHeading } from '@/components/SectionHeading'
import {
  BadgeCheck,
  FileCheck2,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react'

const ISO_CERTS = [
  {
    code: 'ISO 9001:2015',
    title: 'Quality Management System',
  },
  {
    code: 'ISO 14001:2015',
    title: 'Environmental Management System',
  },
  {
    code: 'ISO 45001:2018',
    title: 'Occupational Health & Safety Management',
  },
]

const QUALITY_POINTS = [
  {
    icon: BadgeCheck,
    text: 'AS9120B / ISO 9001:2015 compliant processes',
  },
  {
    icon: ShieldCheck,
    text: 'FAA AC 00-56B / EASA',
  },
  {
    icon: FileCheck2,
    text: '100% traceability & certified materials',
  },
  {
    icon: ShieldAlert,
    text: 'Counterfeit parts prevention program',
  },
  {
    icon: ScanSearch,
    text: 'Strict quality inspection & testing standards',
  },
]

export function Certifications() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <SectionPhotoBackdrop image="/images/misc/cockpit.jpg" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal mx-auto max-w-2xl text-center ${visible ? 'is-visible' : ''}`}
        >
          <SectionHeading
            eyebrow="Quality & Compliance"
            title="Certifications & Accreditations"
            description="AI Aviation Supplies operates under a certified quality, environmental and safety management framework, and holds membership with the Aviation Suppliers Association (ASA)."
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {ISO_CERTS.map((cert, index) => (
            <div
              key={cert.code}
              className={`reveal rounded-2xl border border-slate-200 bg-[#f5f7fa] p-6 ${
                visible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${0.08 * index}s` }}
            >
              <p className="text-lg font-semibold text-[#081b30]">{cert.code}</p>
              <p className="mt-1 text-sm text-slate-500">{cert.title}</p>
            </div>
          ))}
        </div>

        <div
          className={`reveal reveal-delay-2 mt-10 grid gap-4 rounded-2xl border border-slate-200 bg-[#081b30] p-8 sm:grid-cols-2 lg:grid-cols-5 ${
            visible ? 'is-visible' : ''
          }`}
        >
          {QUALITY_POINTS.map((point) => (
            <div key={point.text} className="flex items-start gap-3">
              <point.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#d9b968]" />
              <p className="text-sm leading-relaxed text-white/70">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
