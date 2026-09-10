import { createFileRoute } from '@tanstack/react-router'
import { Contact } from '@/components/Contact'
import { PageLayout } from '@/components/PageLayout'
import { COMPANY } from '@/data/company'

export const Route = createFileRoute('/contact')({
  head: () => ({
    links: [{ rel: 'canonical', href: `${COMPANY.siteUrl}/contact` }],
    meta: [
      { title: 'Contact Us | AI Aviation Supplies' },
      {
        name: 'description',
        content:
          'Get in touch with AI Aviation Supplies for pricing, availability or AOG support. Based in Thane, Maharashtra, India, serving customers across India, the UAE and beyond.',
      },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <PageLayout>
      <Contact />
    </PageLayout>
  )
}
