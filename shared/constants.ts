import type { Product, MeasurementStep } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'SIGNATURE ONE-PIECE',
    price: 200,
    type: 'FULL TORSO SCULPT',
    category: 'One-Piece',
    description:
      'The definitive Isolea silhouette. Engineered with internal compression architecture and anatomical paneling to sculpt the torso. A high-contrast masterpiece designed for pure performance and bold aesthetics.',
    specs: [
      '78% ECONYL® Regenerated Nylon',
      '22% Elastane',
      'Double Lined',
      'Internal Sculpting Arch',
    ],
  },
  {
    id: 2,
    name: 'ATELIER TOP / HIGH SUPPORT',
    price: 120,
    type: 'MAXIMUM ARCHITECTURE',
    category: 'Bikini Top',
    description:
      'Architectural support for high-impact movement. Features a reinforced underband and wide straps designed to maintain form across all anatomical variations.',
    specs: [
      'Reinforced Underband',
      'Adjustable Fit Protocol',
      'ECONYL® Technical Fabric',
    ],
  },
  {
    id: 3,
    name: 'ATELIER TOP / LIGHT SUPPORT',
    price: 120,
    type: 'MINIMALIST SCULPT',
    category: 'Bikini Top',
    description:
      'A minimalist approach to support. Pure lines and seamless construction allow the anatomical profile to dictate the final form. Effortless, technical, essential.',
    specs: ['Seamless Edge Tech', 'Light Compression', 'Breathable Matrix'],
  },
  {
    id: 4,
    name: 'CLASSIC ATELIER BOTTOM',
    price: 100,
    type: 'SIGNATURE CUT',
    category: 'Bikini Bottom',
    description:
      'The foundational piece. Mid-rise cut with signature Isolea leg arching. Designed to integrate perfectly with the Atelier Top series for a complete anatomical uniform.',
    specs: ['Mid-Rise Arch', 'Full Coverage Protocol', 'Salt-Water Resistant'],
  },
];

export const MEASUREMENT_STEPS: MeasurementStep[] = [
  {
    id: 1,
    title: 'TORSO LENGTH',
    description:
      'THE CRITICAL DIMENSION. MEASURE STANDING, FROM SHOULDER DOWN FRONT, UNDER STRIDE, AND BACK TO START.',
    field: 'torso',
    placeholder: '000',
    unit: 'CM',
    landmark: 'SHOULDER TO SHOULDER / VERTICAL',
  },
  {
    id: 2,
    title: 'FULL BUST',
    description:
      'MAXIMUM CIRCUMFERENCE AT THE HIGHEST POINT. MEASURE WITHOUT BRA FOR PURE ANATOMICAL DATA.',
    field: 'bust',
    placeholder: '000',
    unit: 'CM',
    landmark: 'APEX CIRCUMFERENCE',
  },
  {
    id: 3,
    title: 'UNDERBREAST',
    description:
      'THE ARCHITECTURAL BASE. TIGHT MEASUREMENT DIRECTLY BELOW THE BREAST TISSUE.',
    field: 'underbust',
    placeholder: '000',
    unit: 'CM',
    landmark: 'RIB CAGE ANCHOR',
  },
  {
    id: 4,
    title: 'LOWER HIPS',
    description:
      'THE WIDEST ANATOMICAL POINT. ENSURES NON-SLIP SCULPTING ACROSS THE PELVIC ARCH.',
    field: 'hips',
    placeholder: '000',
    unit: 'CM',
    landmark: 'PELVIC MAXIMUM',
  },
];

export const SHOP_STATS = [
  { label: 'Available Patterns', value: '2,400+' },
  { label: 'Launch Styles', value: '04' },
  { label: 'Production Time', value: '3-5 DAYS' },
  { label: 'Crafted in', value: 'EU ATELIER' },
];
