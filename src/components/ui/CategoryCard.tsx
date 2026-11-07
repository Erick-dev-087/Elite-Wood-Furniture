'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { CategoryInfo } from '@/lib/types';

interface Props {
  category: CategoryInfo;
}

export default function CategoryCard({ category }: Props) {
  return (
    <Link
      href={`/shop?category=${category.slug}`}
      className="group relative block aspect-[3/4] overflow-hidden rounded-2xl sm:aspect-[4/3]"
    >
      {/* Background Image */}
      <Image
        src={category.image}
        alt={category.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-colors duration-300 group-hover:from-black/80" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <h3 className="font-serif text-xl font-bold text-white sm:text-2xl">
          {category.name}
        </h3>

        {/* Description - visible on hover (desktop) and always on touch */}
        <p className="mt-1 text-sm text-white/80 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
          {category.description}
        </p>

        {/* Arrow */}
        <span className="mt-2 inline-flex items-center text-sm font-medium text-white opacity-100 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:opacity-100">
          Explore
          <svg
            className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
