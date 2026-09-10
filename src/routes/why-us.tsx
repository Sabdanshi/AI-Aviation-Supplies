import { createFileRoute } from '@tanstack/react-router'
import { Certifications } from '@/components/Certifications'
import { Customers } from '@/components/Customers'
import { PageLayout } from '@/components/PageLayout'
import { Showcase } from '@/components/Showcase'
import { WhyUs } from '@/components/WhyUs'
import { COMPANY } from '@/data/company'

export const Route = createFileRoute('/why-us')({
  head: () => ({
    links: [{ rel: 'canonical', href: `${COMPANY.siteUrl}/why-us` }],
    meta: [
      { title: 'Why Choose Us | AI Aviation Supplies' },
      {
        name: 'description',
        content:
          'ISO 9001, 14001 & 45001 certified. See why airlines, MROs and operators trust AI Aviation Supplies for certified, compliant aviation supply chain solutions.',
      },
    ],
  }),
  component: WhyUsPage,
})

function WhyUsPage() {
  return (
    <PageLayout>
      <WhyUs />
      <Certifications />
      <Customers />
      <Showcase />
    </PageLayout>
  )
}
