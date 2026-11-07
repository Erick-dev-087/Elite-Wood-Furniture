'use client';

import Link from 'next/link';
import { getFeaturedProducts } from '@/lib/products';
import ProductCard from '@/components/ui/ProductCard';
import SectionReveal from '@/components/ui/SectionReveal';

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="bg-[#F7F3ED] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F26522] mb-2">
                Handcrafted Picks
              </p>
              <h2 className="font-serif text-3xl font-bold text-[#181818] sm:text-4xl">
                Featured Furniture
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl">
                Everyday favourites tested for lasting comfort, sturdiness, and timeless design.
              </p>
            </div>
            <Link
              href="/shop"
              className="group inline-flex items-center text-sm font-semibold text-[#181818] hover:text-[#E51B24] transition-colors"
            >
              <span>View all pieces</span>
              <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {featured.slice(0, 8).map((product, i) => (
            <SectionReveal key={product.id} delay={i * 0.05}>
              <ProductCard product={product} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
