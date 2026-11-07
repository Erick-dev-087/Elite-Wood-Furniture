import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductsByCategory } from '@/lib/products';
import { categories } from '@/lib/categories';
import ProductCard from '@/components/ui/ProductCard';
import SectionReveal from '@/components/ui/SectionReveal';
import type { ProductCategory } from '@/lib/types';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const current = categories.find((c) => c.slug === category);
  if (!current) return { title: 'Category Not Found' };

  return {
    title: `${current.name} Collection`,
    description: current.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const currentCategory = categories.find((c) => c.slug === category);

  if (!currentCategory) {
    notFound();
  }

  const products = getProductsByCategory(category as ProductCategory);

  return (
    <div className="bg-[#F7F3ED] min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E51B24]">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#E51B24]">Shop</Link>
          <span>/</span>
          <span className="font-semibold text-[#181818] capitalize">{currentCategory.name}</span>
        </nav>

        {/* Heading */}
        <SectionReveal>
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-stone-200/60 pb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F26522] mb-1.5 block">
                Confirmed Collection
              </span>
              <h1 className="font-serif text-3xl font-bold text-[#181818] sm:text-4xl">
                {currentCategory.name}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl">
                {currentCategory.description}
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#E51B24] hover:underline"
            >
              <span>← View all categories</span>
            </Link>
          </div>
        </SectionReveal>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#181818]">
              No pieces in this category yet
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Check back soon or enquire with us on WhatsApp for bespoke orders.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
