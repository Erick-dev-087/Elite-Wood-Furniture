export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  priceNote?: string;
  description: string;
  images: string[];
  status: 'available' | 'made-to-order';
  seating?: string;
  cushionOptions?: boolean;
  featured?: boolean;
}

export interface CushionOption {
  type: 'hd' | 'spring';
  label: string;
  priceAdjustment?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  cushionType?: 'hd' | 'spring';
  cushionColor?: string;
  additionalRequests?: string;
}

export type ProductCategory = 'sofas' | 'beds' | 'tv-stands' | 'dining';

export interface CategoryInfo {
  slug: ProductCategory;
  name: string;
  description: string;
  image: string;
}
