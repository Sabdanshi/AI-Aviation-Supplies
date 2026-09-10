export interface Product {
  id: number
  name: string
  category: string
  image: string
  description: string
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Aircraft & Helicopter Spare Parts',
    category: 'Spare Parts & Rotables',
    image: '/images/products/aircraft-spare-parts.jpg',
    description:
      'Certified spare parts sourced across A320 Family, A350, A380, B737, B777, B787, ATR and helicopter platforms.',
  },
  {
    id: 2,
    name: 'Rotatable & Repairable Components',
    category: 'Spare Parts & Rotables',
    image: '/images/products/rotatable-repairable.jpg',
    description:
      'Fully traceable rotables and repairables backed by a counterfeit parts prevention program.',
  },
  {
    id: 3,
    name: 'Bearings & Precision Components',
    category: 'Spare Parts & Rotables',
    image: '/images/products/bearings-precision.jpg',
    description:
      'Precision bearings and components manufactured to strict aviation tolerances.',
  },
  {
    id: 4,
    name: 'Aircraft Ground Support Equipment (GSE)',
    category: 'Ground Support & Tooling',
    image: '/images/products/ground-support-equipment.jpg',
    description:
      'Aircraft ground support equipment engineered for daily line and hangar operations.',
  },
  {
    id: 5,
    name: 'Special Tools & Test Equipment',
    category: 'Ground Support & Tooling',
    image: '/images/products/special-tools.jpg',
    description:
      'Specialised tooling and test equipment for MRO, line maintenance and defence platforms.',
  },
  {
    id: 6,
    name: 'Engine Stands & Transportation Equipment',
    category: 'Ground Support & Tooling',
    image: '/images/products/engine-stands-transport.jpg',
    description:
      'Engine stands and transportation equipment rated for heavy MRO use, keeping large components moving safely.',
  },
  {
    id: 7,
    name: 'Jacks, Lifting & Maintenance Equipment',
    category: 'Ground Support & Tooling',
    image: '/images/products/jacks-lifting.jpg',
    description:
      'Jacks, lifting equipment and maintenance stands built for safe, heavy-duty hangar work.',
  },
  {
    id: 8,
    name: 'Hydraulic & Pneumatic Components',
    category: 'Ground Support & Tooling',
    image: '/images/products/hydraulic-pneumatic.jpg',
    description:
      'Hydraulic and pneumatic system components engineered to keep critical aircraft systems airworthy.',
  },
  {
    id: 9,
    name: 'Electrical & Avionics Components',
    category: 'Spare Parts & Rotables',
    image: '/images/products/avionics-electrical.jpg',
    description:
      'Avionics and electrical components sourced from an extensive OEM and distributor network.',
  },
  {
    id: 10,
    name: 'Fasteners & Hardware',
    category: 'Spare Parts & Rotables',
    image: '/images/products/fasteners-hardware.jpg',
    description:
      'Fasteners and hardware sourced to keep every build and turnaround on schedule.',
  },
  {
    id: 11,
    name: 'Seals, O-Rings & Gaskets',
    category: 'Spare Parts & Rotables',
    image: '/images/products/seals-orings-gaskets.jpg',
    description:
      'Seals, O-rings and gaskets sourced to exact specification for critical sealing applications.',
  },
  {
    id: 12,
    name: 'Lubricants, Greases & Aviation Chemicals',
    category: 'Chemicals, Oils & Sealants',
    image: '/images/products/aviation-lubricants.jpg',
    description:
      'OEM-approved aviation lubricants, greases and corrosion preventive compounds.',
  },
  {
    id: 13,
    name: 'Consumables & Expendables',
    category: 'Safety & PPE',
    image: '/images/products/consumables-expendables.jpg',
    description:
      'Everyday consumables and expendables that keep hangar and line operations moving.',
  },
  {
    id: 14,
    name: 'Safety Equipment & PPE',
    category: 'Safety & PPE',
    image: '/images/products/safety-ppe.jpg',
    description:
      'Gloves, coveralls, high-visibility clothing and bio-hazard kits for hangar-floor safety.',
  },
  {
    id: 15,
    name: 'Paint Shop & Surface Treatment Products',
    category: 'Chemicals, Oils & Sealants',
    image: '/images/products/paint-shop.jpg',
    description:
      'AkzoNobel, PPG, Mankiewicz and NYCOTE-approved coatings for the aircraft paint shop.',
  },
  {
    id: 16,
    name: 'Workshop & MRO Supplies',
    category: 'Ground Support & Tooling',
    image: '/images/products/workshop-mro-supplies.jpg',
    description:
      'General workshop and MRO supplies that keep maintenance teams equipped and on schedule.',
  },
  {
    id: 17,
    name: 'Documentation & Technical Publications',
    category: 'Ground Support & Tooling',
    image: '/images/products/documentation-publications.jpg',
    description:
      'Technical publications and documentation support for certified, traceable maintenance records.',
  },
  {
    id: 18,
    name: 'Packaging & Preservation Materials',
    category: 'Ground Support & Tooling',
    image: '/images/products/packaging-preservation.jpg',
    description:
      'Packaging and preservation materials that protect parts and components in transit and storage.',
  },
]

export default products
