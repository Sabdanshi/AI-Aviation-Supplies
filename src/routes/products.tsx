import { createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'
import { Products } from '@/components/Products'
import { COMPANY } from '@/data/company'

export const Route = createFileRoute('/products')({
  head: () => ({
    links: [{ rel: 'canonical', href: `${COMPANY.siteUrl}/products` }],
    meta: [
      { title: 'Products & Solutions | AI Aviation Supplies' },
      {
        name: 'description',
        content:
          'Browse our full catalogue of aircraft & helicopter spare parts, ground support equipment, tools, chemicals and safety equipment — sourced, certified and delivered by AI Aviation Supplies.',
      },
    ],
  }),
  component: ProductsPage,
})

function ProductsPage() {
  return (
    <PageLayout>
      <Products />
    </PageLayout>
  )
}
