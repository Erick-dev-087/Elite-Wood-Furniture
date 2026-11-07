'use client';

import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/lib/products';
import type { Product } from '@/lib/types';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F3ED]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {product.images.length > 1 && (
          <Image
            src={product.images[1]}
            alt={`${product.name} – alternate view`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
        {product.status === 'made-to-order' && (
          <span className="absolute left-3 top-3 rounded-full bg-[#F26522] px-2.5 py-0.5 text-[11px] font-semibold text-white">
            Made to Order
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="truncate font-sans text-sm font-semibold text-[#181818] sm:text-base">
          {product.name}
        </h3>
        <p className="mt-1 font-sans text-sm font-medium text-[#E51B24]">
          {formatPrice(product.price)}
        </p>
        {product.priceNote && (
          <p className="mt-0.5 text-xs text-gray-400">{product.priceNote}</p>
        )}
      </div>
    </Link>
  );
}
