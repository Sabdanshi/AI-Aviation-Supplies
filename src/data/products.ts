export interface Product {
  id: number
  name: string
  category: string
  image: string
  description: string
}

export const categories = [
  'All',
  'Spare Parts & Rotables',
  'Ground Support & Tooling',
  'Chemicals, Oils & Sealants',
  'Cabin & Cleaning',
  'Safety & PPE',
] as const

const products: Array<Product> = [
  {
    id: 1,
    name: 'Aircraft & Helicopter Spare Parts',
    category: 'Spare Parts & Rotables',
    image:
      'https://images.unsplash.com/photo-1610642372651-fe6e7bc8c635?q=80&w=1200&auto=format&fit=crop',
    description:
      'Certified spare parts sourced across A320 Family, A350, A380, B737, B777, B787, ATR and helicopter platforms.',
  },
  {
    id: 2,
    name: 'Rotatable & Repairable Components',
    category: 'Spare Parts & Rotables',
    image:
      'https://images.unsplash.com/photo-1615037937471-c976a83a6b8a?q=80&w=1200&auto=format&fit=crop',
    description:
      'Fully traceable rotables and repairables backed by a counterfeit parts prevention program.',
  },
  {
    id: 3,
    name: 'Bearings & Precision Components',
    category: 'Spare Parts & Rotables',
    image:
      'https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200&auto=format&fit=crop',
    description:
      'Precision bearings and components manufactured to strict aviation tolerances.',
  },
  {
    id: 4,
    name: 'Electrical & Avionics Components',
    category: 'Spare Parts & Rotables',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    description:
      'Avionics and electrical components sourced from an extensive OEM and distributor network.',
  },
  {
    id: 5,
    name: 'Fasteners, Seals & Hardware',
    category: 'Spare Parts & Rotables',
    image:
      'https://images.unsplash.com/photo-1589792923962-537704632910?q=80&w=1200&auto=format&fit=crop',
    description:
      'Fasteners, hardware, seals, O-rings and gaskets to keep every build on schedule.',
  },
  {
    id: 6,
    name: 'Ground Support Equipment (GSE)',
    category: 'Ground Support & Tooling',
    image:
      'https://images.unsplash.com/photo-1583373834259-46cc92173cb7?q=80&w=1200&auto=format&fit=crop',
    description:
      'Aircraft ground support equipment engineered for daily line and hangar operations.',
  },
  {
    id: 7,
    name: 'Special Tools & Test Equipment',
    category: 'Ground Support & Tooling',
    image:
      'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200&auto=format&fit=crop',
    description:
      'Specialised tooling and test equipment for MRO, line maintenance and defence platforms.',
  },
  {
    id: 8,
    name: 'Engine Stands & Transportation Equipment',
    category: 'Ground Support & Tooling',
    image:
      'https://images.unsplash.com/photo-1544829885-87f5f0e0d5c2?q=80&w=1200&auto=format&fit=crop',
    description:
      'Engine stands, jacks, lifting and transportation equipment rated for heavy MRO use.',
  },
  {
    id: 9,
    name: 'Hydraulic & Pneumatic Components',
    category: 'Ground Support & Tooling',
    image:
      'https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?q=80&w=1200&auto=format&fit=crop',
    description:
      'Hydraulic fluids, pneumatic components and system parts to keep systems airworthy.',
  },
  {
    id: 10,
    name: 'Aviation Lubricants & Chemicals',
    category: 'Chemicals, Oils & Sealants',
    image:
      'https://images.unsplash.com/photo-1620825141324-b840dfa2cd6a?q=80&w=1200&auto=format&fit=crop',
    description:
      'OEM-approved aviation lubricants, greases and corrosion preventive compounds.',
  },
  {
    id: 11,
    name: 'Sealants & Adhesives',
    category: 'Chemicals, Oils & Sealants',
    image:
      'https://images.unsplash.com/photo-1581092918484-8313ade48417?q=80&w=1200&auto=format&fit=crop',
    description:
      'Fuel-tank and structural sealants and adhesives approved for airframe applications.',
  },
  {
    id: 12,
    name: 'Paint Shop & Surface Treatment Products',
    category: 'Chemicals, Oils & Sealants',
    image:
      'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=1200&auto=format&fit=crop',
    description:
      'AkzoNobel, PPG, Mankiewicz and NYCOTE-approved coatings for the aircraft paint shop.',
  },
  {
    id: 13,
    name: 'Aircraft Chemicals & Disinfectants',
    category: 'Chemicals, Oils & Sealants',
    image:
      'https://images.unsplash.com/photo-1584824388878-baa4d8f0c1ff?q=80&w=1200&auto=format&fit=crop',
    description:
      'Certified cabin, exterior and toilet-system cleaners approved by Boeing and Airbus.',
  },
  {
    id: 14,
    name: 'Cabin & Inflight Essentials',
    category: 'Cabin & Cleaning',
    image:
      'https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=1200&auto=format&fit=crop',
    description:
      'Safety cards, sickness bags, pillows, blankets and lavatory consumables — customisable by aircraft type.',
  },
  {
    id: 15,
    name: 'Cabin & Carpet Cleaning Equipment',
    category: 'Cabin & Cleaning',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
    description:
      'Carpet cleaning machines, backpack vacuums and exterior wash equipment for turnaround crews.',
  },
  {
    id: 16,
    name: 'Janitorial & Material Handling',
    category: 'Cabin & Cleaning',
    image:
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1200&auto=format&fit=crop',
    description:
      'Trolleys, carts and material handling equipment purpose-built for cabin and hangar logistics.',
  },
  {
    id: 17,
    name: 'Safety Equipment & PPE',
    category: 'Safety & PPE',
    image:
      'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=1200&auto=format&fit=crop',
    description:
      'Gloves, coveralls, high-visibility clothing and bio-hazard kits for hangar-floor safety.',
  },
  {
    id: 18,
    name: 'Consumables & Expendables',
    category: 'Safety & PPE',
    image:
      'https://images.unsplash.com/photo-1581093458791-4a2a02b24e42?q=80&w=1200&auto=format&fit=crop',
    description:
      'Everyday consumables and expendables that keep hangar and line operations moving.',
  },
]

export default products
