import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { GA_MEASUREMENT_ID } from '@/lib/analytics'
import { COMPANY, GENERAL_EMAIL, PHONES } from '@/data/company'

const OG_IMAGE = `${COMPANY.siteUrl}/images/og-image.jpg`

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: COMPANY.legalName,
  image: `${COMPANY.siteUrl}/images/logo.png`,
  url: COMPANY.siteUrl,
  telephone: PHONES[0].display,
  email: GENERAL_EMAIL.display,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.street,
    addressLocality: COMPANY.city,
    postalCode: COMPANY.postalCode,
    addressRegion: COMPANY.region,
    addressCountry: COMPANY.country,
  },
}

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    scripts: GA_MEASUREMENT_ID
      ? [
          {
            src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
            async: true,
          },
          {
            children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`,
          },
        ]
      : [],
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        'script:ld+json': ORGANIZATION_JSON_LD,
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'AI Aviation Supplies | Aircraft Parts, Chemicals & MRO Supplies — India',
      },
      {
        name: 'description',
        content:
          'AI Aviation Supplies is an India-based aviation supply company delivering certified aircraft chemicals, oils, sealants, cabin products, safety equipment and spare parts to airlines, MROs and operators across India, the UAE and beyond.',
      },
      {
        name: 'theme-color',
        content: '#081b30',
      },
      {
        property: 'og:title',
        content: 'AI Aviation Supplies — Your Complete Aviation Supply Chain Partner',
      },
      {
        property: 'og:description',
        content:
          'Certified aviation chemicals, consumables, safety equipment and spare parts trusted by airlines, MROs and operators across India, the UAE and beyond.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: 'AI Aviation Supplies',
      },
      {
        property: 'og:image',
        content: OG_IMAGE,
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'AI Aviation Supplies — Your Complete Aviation Supply Chain Partner',
      },
      {
        name: 'twitter:description',
        content:
          'Certified aviation chemicals, consumables, safety equipment and spare parts trusted by airlines, MROs and operators across India, the UAE and beyond.',
      },
      {
        name: 'twitter:image',
        content: OG_IMAGE,
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
