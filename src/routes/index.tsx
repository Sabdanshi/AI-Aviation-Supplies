import { createFileRoute } from '@tanstack/react-router'
import { About } from '@/components/About'
import { Hero } from '@/components/Hero'
import { PageLayout } from '@/components/PageLayout'
import { COMPANY } from '@/data/company'

export const Route = createFileRoute('/')({
  head: () => ({
    links: [{ rel: 'canonical', href: `${COMPANY.siteUrl}/` }],
  }),
  component: Home,
})

function Home() {
  return (
    <PageLayout>
      <Hero />
      <About />
    </PageLayout>
  )
}
