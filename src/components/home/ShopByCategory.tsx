'use client';

import { categories } from '@/lib/categories';
import CategoryCard from '@/components/ui/CategoryCard';
import SectionReveal from '@/components/ui/SectionReveal';

export default function ShopByCategory() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#F26522]">
              Browse
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#181818] sm:text-4xl">
              Shop by Category
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-gray-500">
              From living room comfort to bedroom essentials, find furniture
              crafted for every room in your home.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <SectionReveal key={cat.slug} delay={i * 0.1}>
              <CategoryCard category={cat} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
