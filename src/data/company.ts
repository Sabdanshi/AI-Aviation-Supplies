const STREET_LINE = 'Shop no 02 A1 Wing Ground Floor, MM Valley near Meezan Chowk'
const LOCALITY = 'Kausa'
const CITY = 'Thane'
const POSTAL_CODE = '400612'
const REGION = 'Maharashtra'
const COUNTRY_CODE = 'IN'
const COUNTRY_NAME = 'India'

export const COMPANY = {
  legalName: 'AI Aviation Supplies Pvt. Ltd.',
  domain: 'ai-aviation.in',
  siteUrl: 'https://ai-aviation.in',
  cityState: `${CITY}, ${REGION}`,
  // Everything below is derived from these five fields so the address only
  // has one place to update — never hand-edit addressLines/addressFull.
  street: `${STREET_LINE}, ${LOCALITY}`,
  city: CITY,
  postalCode: POSTAL_CODE,
  region: REGION,
  country: COUNTRY_CODE,
  addressLines: [`${STREET_LINE},`, `${LOCALITY}, ${CITY}-${POSTAL_CODE}, ${REGION}`],
  addressFull: `${STREET_LINE}, ${LOCALITY}, ${CITY}-${POSTAL_CODE}, ${REGION}, ${COUNTRY_NAME}`,
} as const

export interface ContactLink {
  label: string
  href: string
  display: string
}

export const PHONES: ContactLink[] = [
  { label: 'Mobile', href: 'tel:+919760669767', display: '+91 97606 69767' },
  { label: 'Landline', href: 'tel:+9126274994', display: '+91 262 74994' },
  { label: 'UAE', href: 'tel:+971561536417', display: '+971 56 153 6417' },
  { label: 'UAE', href: 'tel:+971529250423', display: '+971 52 925 0423' },
]

export const GENERAL_EMAIL: ContactLink = {
  label: 'General',
  href: 'mailto:contact@ai-aviation.in',
  display: 'contact@ai-aviation.in',
}

export const EMAILS: ContactLink[] = [
  { label: 'Sales', href: 'mailto:sales@ai-aviation.in', display: 'sales@ai-aviation.in' },
  GENERAL_EMAIL,
  { label: 'RFQ', href: 'mailto:RFQ@ai-aviation.in', display: 'RFQ@ai-aviation.in' },
  { label: 'AOG', href: 'mailto:AOG@ai-aviation.in', display: 'AOG@ai-aviation.in' },
  { label: 'Direct', href: 'mailto:Ichoudhry@ai-aviation.in', display: 'Ichoudhry@ai-aviation.in' },
]
