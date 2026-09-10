import { useReveal } from '@/lib/useReveal'
import { LogoGrid } from '@/components/LogoGrid'
import { SectionHeading } from '@/components/SectionHeading'

interface Customer {
  name: string
  logo: string
}

const CUSTOMERS: Customer[] = [
  { name: 'Emirates Engineering', logo: '/images/customers/emirates-engineering.png' },
  { name: 'Etihad Airways', logo: '/images/customers/etihad-airways.png' },
  { name: 'Etihad Engineering', logo: '/images/customers/etihad-engineering.png' },
  { name: 'Air Arabia', logo: '/images/customers/air-arabia.png' },
  { name: 'Falcon Aviation Services', logo: '/images/customers/falcon.png' },
  { name: 'Saudi Aramco', logo: '/images/customers/saudi-aramco.png' },
]

export function Customers() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="relative overflow-hidden bg-[#081b30] py-24 lg:py-32">
      <div className="texture-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal mx-auto max-w-2xl text-center ${visible ? 'is-visible' : ''}`}
        >
          <SectionHeading eyebrow="Client Relationships" title="Our Customers" />
        </div>

        <LogoGrid
          items={CUSTOMERS}
          visible={visible}
          theme="dark"
          columns="grid-cols-1 sm:grid-cols-3"
          gap="gap-5"
          cardHeight="h-24"
          rounded="rounded-2xl"
          imageMaxHeight="max-h-12"
          delayStep={0.07}
          hoverLift={false}
        />

        <p className="mt-10 text-center text-sm text-white/50">
          Aircraft platforms supported: A320 · A350 · A380 · B737 · B777 · B787 · ATR ·
          Gulfstream · Dassault Falcon
        </p>
      </div>
    </section>
  )
}
