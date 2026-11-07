'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getAllProducts } from '@/lib/products';
import { categories } from '@/lib/categories';
import ProductCard from '@/components/ui/ProductCard';
import SectionReveal from '@/components/ui/SectionReveal';
import type { ProductCategory } from '@/lib/types';

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeCategory = (searchParams.get('category') as ProductCategory | null) || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const allProducts = useMemo(() => getAllProducts(), []);

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => (a.price || 999999) - (b.price || 999999));
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else {
      // featured first
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [allProducts, activeCategory, searchQuery, sortBy]);

  function handleCategoryChange(cat: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === 'all') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    router.push(`/shop?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="bg-[#F7F3ED] min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F26522] mb-1.5">
              Online Storefront
            </p>
            <h1 className="font-serif text-3xl font-bold text-[#181818] sm:text-4xl">
              Furniture Catalogue
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl">
              Handcrafted sofas, sturdy beds, and bespoke entertainment units made in Kenya.
              Custom cushion preferences and direct WhatsApp enquiries available on every piece.
            </p>
          </div>
        </SectionReveal>

        {/* Filter Controls Bar */}
        <div className="mb-8 rounded-2xl bg-white p-4 shadow-sm sm:p-5 border border-stone-200/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === 'all'
                    ? 'bg-[#E51B24] text-white shadow-sm'
                    : 'bg-[#F7F3ED] text-[#181818] hover:bg-stone-200/70'
                }`}
              >
                All Pieces ({allProducts.length})
              </button>
              {categories.map((cat) => {
                const count = allProducts.filter((p) => p.category === cat.slug).length;
                const isActive = activeCategory === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => handleCategoryChange(cat.slug)}
                    className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-[#E51B24] text-white shadow-sm'
                        : 'bg-[#F7F3ED] text-[#181818] hover:bg-stone-200/70'
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>

            {/* Search and Sort controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Search bar */}
              <div className="relative flex-1 sm:w-64">
                <input
                  type="text"
                  placeholder="Search furniture..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-[#F7F3ED]/50 px-3.5 py-2 pl-9 text-xs sm:text-sm text-[#181818] placeholder-gray-400 focus:border-[#E51B24] focus:bg-white focus:outline-none"
                />
                <svg
                  className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Sort dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                aria-label="Sort products by"
                className="rounded-xl border border-gray-200 bg-[#F7F3ED]/50 px-3 py-2 text-xs sm:text-sm text-[#181818] focus:border-[#E51B24] focus:bg-white focus:outline-none"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results summary */}
        <div className="mb-6 flex items-center justify-between text-xs text-gray-500">
          <span>
            Showing <strong className="text-[#181818]">{filteredProducts.length}</strong> items
            {activeCategory !== 'all' && ` in ${activeCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          {(activeCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                handleCategoryChange('all');
                setSearchQuery('');
              }}
              className="font-semibold text-[#E51B24] hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-3xl bg-white p-12 text-center shadow-sm border border-stone-200/50">
            <svg
              className="mx-auto h-16 w-16 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <h3 className="mt-4 font-serif text-xl font-bold text-[#181818]">
              No furniture found
            </h3>
            <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">
              We couldn’t find any items matching your search or active filters. Try searching for a different
              category or reset your filters.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => {
                  handleCategoryChange('all');
                  setSearchQuery('');
                }}
                className="rounded-lg bg-[#E51B24] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#c81620]"
              >
                Clear all filters
              </button>
              <a
                href="https://wa.me/254725781911?text=Hi%20Elite%20Wood%20%26%20Furniture!%20I'm%20looking%20for%20a%20specific%20custom%20piece%20of%20furniture."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#181818] transition-colors hover:bg-gray-50"
              >
                Ask via WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F7F3ED] py-20 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#E51B24] border-r-transparent" />
          <p className="mt-4 text-sm text-gray-500">Loading catalogue...</p>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
