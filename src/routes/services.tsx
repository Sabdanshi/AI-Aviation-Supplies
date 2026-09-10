import { createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'
import { Services } from '@/components/Services'
import { SupplyNetwork } from '@/components/SupplyNetwork'
import { COMPANY } from '@/data/company'

export const Route = createFileRoute('/services')({
  head: () => ({
    links: [{ rel: 'canonical', href: `${COMPANY.siteUrl}/services` }],
    meta: [
      { title: 'MRO & Technical Services | AI Aviation Supplies' },
      {
        name: 'description',
        content:
          'Reliable sourcing and supply solutions for aircraft and helicopter MRO — parts, tools, technical support and a global OEM supply network from AI Aviation Supplies.',
      },
    ],
  }),
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <PageLayout>
      <Services />
      <SupplyNetwork />
    </PageLayout>
  )
}
