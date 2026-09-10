import { useReveal } from '@/lib/useReveal'
import { SectionPhotoBackdrop } from '@/components/SectionPhotoBackdrop'
import { LogoGrid } from '@/components/LogoGrid'
import { SectionHeading } from '@/components/SectionHeading'

interface Supplier {
  name: string
  logo?: string
}

const SUPPLIERS: Supplier[] = [
  { name: '3M', logo: '/images/suppliers/3m.png' },
  { name: 'PPG', logo: '/images/suppliers/ppg.png' },
  { name: 'Socomore', logo: '/images/suppliers/socomore.png' },
  { name: 'Momentive', logo: '/images/suppliers/momentive.png' },
  { name: 'WD-40', logo: '/images/suppliers/wd-40.png' },
  { name: 'AkzoNobel', logo: '/images/suppliers/akzonobel.png' },
  { name: 'ExxonMobil', logo: '/images/suppliers/exxonmobil.png' },
  { name: 'NYCO', logo: '/images/suppliers/nyco.png' },
  // No logo: Huntsman's brand guidelines restrict use to editorial
  // purposes, not promotion, without written permission.
  { name: 'Huntsman' },
  { name: 'Henkel', logo: '/images/suppliers/henkel.png' },
  // "Arrow" matches multiple unrelated companies (electronics distributor,
  // fastener maker, etc.) — confirmed with the client this is Arrow
  // Aviation Services before sourcing/publishing the logo.
  { name: 'Arrow', logo: '/images/suppliers/arrow.png' },
  { name: 'Dow', logo: '/images/suppliers/dow.png' },
  { name: 'Chemetall', logo: '/images/suppliers/chemetall.png' },
  { name: 'Veboschmidt', logo: '/images/suppliers/veboschmidt.png' },
  { name: 'Perrone Aerospace', logo: '/images/suppliers/perrone-aerospace.png' },
  { name: 'Semperguard', logo: '/images/suppliers/semperguard.png' },
  { name: 'Airbus', logo: '/images/suppliers/airbus.png' },
  { name: 'Boeing', logo: '/images/suppliers/boeing.png' },
  // "IPS" is a generic acronym matching multiple unrelated companies —
  // confirmed with the client this is IPS-Group A/S before sourcing/
  // publishing the logo.
  { name: 'IPS', logo: '/images/suppliers/ips.png' },
]

export function SupplyNetwork() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <SectionPhotoBackdrop image="/images/misc/hero-wing.jpg" height="380px" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal mx-auto max-w-2xl text-center ${visible ? 'is-visible' : ''}`}
        >
          <SectionHeading eyebrow="OEMs & Distributors" title="Our Global Supply Network" />
        </div>

        <LogoGrid items={SUPPLIERS} visible={visible} theme="light" />
      </div>
    </section>
  )
}
