import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Airlink Aviation Spares | Aircraft Parts, Chemicals & MRO Supplies — UAE',
      },
      {
        name: 'description',
        content:
          'Airlink Airplanes Spare Parts Trading L.L.C. is a UAE-based aviation supply company delivering certified aircraft chemicals, oils, sealants, cabin products, safety equipment and spare parts to airlines, MROs and operators across the UAE and India.',
      },
      {
        name: 'theme-color',
        content: '#081b30',
      },
      {
        property: 'og:title',
        content: 'Airlink Aviation Spares — Your Complete Aviation Supply Chain Partner',
      },
      {
        property: 'og:description',
        content:
          'Certified aviation chemicals, consumables, safety equipment and spare parts trusted by airlines, MROs and operators across the UAE and India.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
