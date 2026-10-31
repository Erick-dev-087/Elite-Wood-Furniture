import { Product, ProductCategory } from './types';

const products: Product[] = [
  {
    id: 'sofa-5-seater',
    slug: '5-seater-sofa',
    name: '5 Seater Sofa',
    category: 'sofas',
    price: 55000,
    priceNote: 'HD Cushion. Spring Cushion available at KSH 65,000',
    description:
      'A beautifully crafted 5 seater sofa, perfect for family living rooms. Available with HD or Spring cushion options for your preferred comfort level.',
    images: ['/images/Sofa_1.jpg'],
    status: 'available',
    seating: '5 Seater',
    cushionOptions: true,
    featured: true,
  },
  {
    id: 'sofa-bubble-set',
    slug: 'bubble-set-sofa',
    name: 'Bubble Set Sofa',
    category: 'sofas',
    price: 65000,
    description:
      'The Bubble Set sofa features a modern tufted design with deep, comfortable cushioning. A statement piece for contemporary living spaces.',
    images: ['/images/L_sit.jpg'],
    status: 'available',
    seating: 'Set',
    cushionOptions: false,
    featured: true,
  },
  {
    id: 'sofa-semi-recliner',
    slug: '7-seater-semi-recliner',
    name: '7 Seater Semi-Recliner',
    category: 'sofas',
    price: 95000,
    priceNote: 'HD Cushion. Spring Cushion available at KSH 115,000',
    description:
      'Luxurious 7 seater semi-recliner sofa set with built-in cup holders and adjustable reclining positions. The ultimate comfort experience for your living room.',
    images: ['/images/Semi_Recliner_1.png'],
    status: 'available',
    seating: '7 Seater',
    cushionOptions: true,
    featured: true,
  },
  {
    id: 'sofa-l-seat',
    slug: '6-seater-l-seat',
    name: '6 Seater L-Shape Sofa',
    category: 'sofas',
    price: 45000,
    description:
      'A spacious 6 seater L-shaped sofa that makes the most of your living room corners. Modern design with comfortable cushioning.',
    images: ['/images/L_sit_45K.png'],
    status: 'available',
    seating: '6 Seater',
    cushionOptions: false,
    featured: true,
  },
  {
    id: 'sofa-elegant-monster',
    slug: 'elegant-monster-seat',
    name: 'Elegant Monster Seat 7 Seater',
    category: 'sofas',
    price: 140000,
    description:
      'Our premium Elegant Monster Seat — a grand 7 seater sofa set featuring rich wood accents, quilted upholstery, and reclining functionality. The crown jewel of any living room.',
    images: ['/images/Luxury_Sofas.jpg', '/images/Luxury_Sofas_2.jpg'],
    status: 'available',
    seating: '7 Seater',
    cushionOptions: true,
    featured: true,
  },
  {
    id: 'sofa-antique',
    slug: 'antique-sofa-set',
    name: 'Antique Style Sofa Set',
    category: 'sofas',
    price: 140000,
    priceNote: 'Price varies by configuration',
    description:
      'Classic antique-style sofa set with ornate wood carvings and plush cushioning. Timeless elegance meets modern comfort.',
    images: ['/images/Antique_Furniture.png'],
    status: 'available',
    seating: '7 Seater',
    cushionOptions: false,
    featured: false,
  },
  {
    id: 'bed-double-decker-classic',
    slug: 'classic-double-decker',
    name: 'Classic Double Decker Bed',
    category: 'beds',
    price: 55000,
    description:
      "Sturdy white-painted double decker bed with classic slatted design. Perfect for children's rooms or shared bedrooms. Includes ladder for easy access.",
    images: ['/images/Double_Decker_3.jpg'],
    status: 'available',
    featured: true,
  },
  {
    id: 'bed-double-decker-storage',
    slug: 'double-decker-with-storage',
    name: 'Double Decker Bed with Storage',
    category: 'beds',
    price: 65000,
    description:
      'Modern double decker bed featuring a built-in staircase with storage drawers. Maximises bedroom space with smart storage solutions.',
    images: ['/images/Double_Decker_1.jpg'],
    status: 'available',
    featured: true,
  },
  {
    id: 'bed-double-decker-premium',
    slug: 'premium-double-decker',
    name: 'Premium Double Decker Bed',
    category: 'beds',
    price: 75000,
    description:
      'Premium double decker bed with elegant two-tone design, built-in drawers, and a staircase with additional storage compartments.',
    images: ['/images/Double_Decker_2.jpg'],
    status: 'available',
    featured: false,
  },
  {
    id: 'tv-stand-chevron',
    slug: 'chevron-tv-stand',
    name: 'Chevron TV Stand',
    category: 'tv-stands',
    price: 0,
    priceNote: 'Contact us for pricing',
    description:
      'Modern TV stand featuring a chevron pattern design with cabinet storage and open shelving. Clean white finish with black legs.',
    images: ['/images/Tv_Stand_1.jpg'],
    status: 'available',
    featured: true,
  },
  {
    id: 'tv-stand-fluted',
    slug: 'fluted-tv-stand',
    name: 'Fluted TV Stand',
    category: 'tv-stands',
    price: 0,
    priceNote: 'Contact us for pricing',
    description:
      'Contemporary TV stand with fluted door panels and cross-pattern open shelving. A sleek white finish that complements any living room.',
    images: ['/images/Tv_Stand_2.jpg'],
    status: 'available',
    featured: false,
  },
  {
    id: 'tv-stand-oval-gold',
    slug: 'oval-gold-tv-stand',
    name: 'Oval Gold-Accent TV Stand',
    category: 'tv-stands',
    price: 0,
    priceNote: 'Contact us for pricing',
    description:
      'Elegant oval-shaped TV stand with gold-tone legs and hardware. Features cabinet storage and open media shelving in a pristine white finish.',
    images: ['/images/Tv_Stand_3.jpg'],
    status: 'available',
    featured: true,
  },
  {
    id: 'dining-marble-set',
    slug: 'marble-dining-set',
    name: 'Marble Top Dining Set',
    category: 'dining',
    price: 0,
    priceNote: 'Contact us for pricing',
    description:
      'Luxurious dining set featuring a stunning marble-top table paired with plush upholstered chairs. Seats 6 comfortably.',
    images: ['/images/Dinner_set_1.jpg'],
    status: 'available',
    featured: true,
  },
];

/**
 * Get all products in a specific category.
 */
export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

/**
 * Find a single product by its URL slug.
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/**
 * Get all products marked as featured.
 */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

/**
 * Get every product in the catalogue.
 */
export function getAllProducts(): Product[] {
  return [...products];
}

/**
 * Search products by name, description, or category.
 */
export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
}

/**
 * Format a numeric price as "KSH 55,000".
 * Returns "Contact for price" when price is 0.
 */
export function formatPrice(price: number): string {
  if (price === 0) return 'Contact for price';
  return `KSH ${price.toLocaleString('en-KE')}`;
}
