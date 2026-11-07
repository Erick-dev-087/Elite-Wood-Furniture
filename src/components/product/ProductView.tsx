'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import type { Product } from '@/lib/types';
import { formatPrice } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { openProductEnquiry } from '@/lib/whatsapp';
import ProductCard from '@/components/ui/ProductCard';

interface Props {
  product: Product;
  relatedProducts: Product[];
}

const POPULAR_COLORS = [
  { name: 'Navy Blue', hex: '#1e3a8a' },
  { name: 'Warm Rust / Terracotta', hex: '#c2410c' },
  { name: 'Charcoal Grey', hex: '#374151' },
  { name: 'Cream / Warm Ivory', hex: '#f5f5f4' },
  { name: 'Forest Green', hex: '#166534' },
  { name: 'Decide Later via WhatsApp', hex: '#e2e8f0' },
];

export default function ProductView({ product, relatedProducts }: Props) {
  const { addItem, openCart } = useCart();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Cushion Customisation state
  const [cushionType, setCushionType] = useState<'hd' | 'spring'>(
    product.cushionOptions ? 'hd' : 'hd'
  );
  const [cushionColor, setCushionColor] = useState('Navy Blue');
  const [additionalRequests, setAdditionalRequests] = useState('');
  const [showAddedToast, setShowAddedToast] = useState(false);

  // Dynamic price calculation based on cushion type
  const calculatedPrice = useMemo(() => {
    let price = product.price;
    if (product.cushionOptions && cushionType === 'spring') {
      if (product.id === 'sofa-5-seater') {
        price = 65000;
      } else if (product.id === 'sofa-semi-recliner') {
        price = 115000;
      }
    }
    return price;
  }, [product, cushionType]);

  const images = product.images.length > 0 ? product.images : ['/images/Elite_Wood_Furniture.jpg'];

  function handleAddToBag() {
    addItem({
      product: {
        ...product,
        price: calculatedPrice,
      },
      quantity,
      cushionType: product.cushionOptions ? cushionType : undefined,
      cushionColor: product.cushionOptions ? cushionColor : undefined,
      additionalRequests: additionalRequests.trim() || undefined,
    });

    // Toast feedback
    setShowAddedToast(true);
    setTimeout(() => setShowAddedToast(false), 3000);
  }

  function handleDirectWhatsApp() {
    openProductEnquiry(
      {
        ...product,
        price: calculatedPrice,
      },
      quantity,
      product.cushionOptions ? cushionType : undefined,
      product.cushionOptions ? cushionColor : undefined,
      additionalRequests.trim() || undefined
    );
  }

  return (
    <div className="bg-[#F7F3ED] min-h-screen py-8 sm:py-14">
      {/* Toast Notification */}
      <AnimatePresence>
        {showAddedToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-4 sm:right-8 z-50 rounded-2xl bg-[#181818] p-4 text-white shadow-2xl flex items-center gap-4 border border-white/10"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-sm">
              ✓
            </div>
            <div>
              <p className="text-xs font-semibold text-emerald-400">Added to your bag</p>
              <p className="text-sm font-medium text-white">{product.name} ({quantity}x)</p>
            </div>
            <button
              onClick={() => {
                setShowAddedToast(false);
                openCart();
              }}
              className="ml-2 rounded-lg bg-[#E51B24] px-3 py-1.5 text-xs font-semibold hover:bg-[#c81620]"
            >
              View Bag
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E51B24]">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#E51B24]">Shop</Link>
          <span>/</span>
          <Link href={`/shop/${product.category}`} className="hover:text-[#E51B24] capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#181818] truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* Main Grid: Gallery on left, Configurator on right */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Gallery - 7 cols */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Image */}
            <div
              onClick={() => setLightboxOpen(true)}
              className="group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-3xl bg-white shadow-sm border border-stone-200/50"
            >
              <Image
                src={images[activeImageIndex]}
                alt={`${product.name} – preview ${activeImageIndex + 1}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-xs flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
                <span>Click to expand</span>
              </div>
            </div>

            {/* Thumbnails if multiple images */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative h-20 w-24 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#E51B24] ring-2 ring-[#E51B24]/20'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="" fill sizes="100px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Workshop & Quality Assurance Badge */}
            <div className="rounded-2xl bg-white p-5 shadow-sm border border-stone-200/50 flex items-center justify-between text-xs sm:text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 font-bold">
                  ✓
                </span>
                <div>
                  <p className="font-bold text-[#181818]">Pay On Delivery Accepted</p>
                  <p className="text-gray-500 text-xs">Inspect item at your door before completing payment</p>
                </div>
              </div>
              <span className="hidden sm:inline-block text-xs font-semibold text-[#F26522] uppercase tracking-wider">
                Countrywide Delivery
              </span>
            </div>
          </div>

          {/* Configurator & Order Panel - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-stone-200/50">
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F26522]">
                  {product.category}
                </span>
                {product.seating && (
                  <span className="rounded-full bg-stone-100 px-3 py-0.5 text-xs font-semibold text-gray-700">
                    {product.seating}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#181818]">
                {product.name}
              </h1>

              {/* Price */}
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-sans text-2xl sm:text-3xl font-bold text-[#E51B24]">
                  {formatPrice(calculatedPrice)}
                </span>
                {product.priceNote && (
                  <span className="text-xs text-gray-500 font-normal">
                    ({product.priceNote})
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-gray-600 leading-relaxed border-b border-gray-100 pb-5">
                {product.description}
              </p>

              {/* Conditional Cushion Options (Section 7.4) */}
              {product.cushionOptions && (
                <div className="mt-6 space-y-5 border-b border-gray-100 pb-6">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#181818] mb-2">
                      <span>1. Select Cushion Feel:</span>
                      <span className="text-gray-400 font-normal">Included in quote</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setCushionType('hd')}
                        className={`rounded-xl p-3 text-left border-2 transition-all ${
                          cushionType === 'hd'
                            ? 'border-[#E51B24] bg-red-50/50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <p className="font-bold text-xs text-[#181818]">HD Foam Cushions</p>
                        <p className="text-[11px] text-gray-500 mt-0.5">Firm, resilient &amp; durable</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setCushionType('spring')}
                        className={`rounded-xl p-3 text-left border-2 transition-all ${
                          cushionType === 'spring'
                            ? 'border-[#E51B24] bg-red-50/50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <p className="font-bold text-xs text-[#181818]">Spring Cushions</p>
                        <p className="text-[11px] text-gray-500 mt-0.5">Plush, bouncy luxury feel</p>
                      </button>
                    </div>
                  </div>

                  {/* Cushion Color */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#181818] mb-2">
                      <span>2. Preferred Shade:</span>
                      <span className="text-gray-500 font-medium">{cushionColor}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {POPULAR_COLORS.map((col) => (
                        <button
                          key={col.name}
                          type="button"
                          onClick={() => setCushionColor(col.name)}
                          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium border transition-all ${
                            cushionColor === col.name
                              ? 'border-[#E51B24] bg-[#E51B24] text-white shadow-xs'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-black/10 flex-shrink-0"
                            style={{ backgroundColor: col.hex }}
                          />
                          <span>{col.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Free-text Additional Requests */}
              <div className="mt-5 border-b border-gray-100 pb-5">
                <label
                  htmlFor="customNotes"
                  className="block text-xs font-bold text-[#181818] mb-1.5"
                >
                  Custom Requests / Dimensions Notes:
                </label>
                <textarea
                  id="customNotes"
                  rows={2}
                  value={additionalRequests}
                  onChange={(e) => setAdditionalRequests(e.target.value)}
                  placeholder="e.g. Prefer left-facing orientation, specific fabric tone, or urgent delivery date..."
                  className="w-full rounded-xl border border-gray-200 bg-[#F7F3ED]/40 p-3 text-xs text-[#181818] placeholder-gray-400 focus:border-[#E51B24] focus:bg-white focus:outline-none"
                />
              </div>

              {/* Quantity Selector */}
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-bold text-[#181818]">Quantity:</span>
                <div className="flex items-center rounded-xl border border-gray-200 bg-[#F7F3ED]/50 p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#181818] shadow-xs hover:bg-gray-100 font-bold"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-[#181818]">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#181818] shadow-xs hover:bg-gray-100 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                {/* Primary WhatsApp Order / Enquiry Button */}
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-700 active:scale-[0.98]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Order / Enquire via WhatsApp</span>
                </button>

                {/* Add to Bag Button */}
                <button
                  type="button"
                  onClick={handleAddToBag}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#181818] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#E51B24] active:scale-[0.98]"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <span>Add to Shopping Bag</span>
                </button>
              </div>

              {/* Showroom Visit note */}
              <p className="mt-4 text-center text-xs text-gray-500">
                Prefer to view before ordering? Showroom open in Ruiru Kihunguro along Thika Road.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t border-stone-200/60 pt-12">
            <h2 className="font-serif text-2xl font-bold text-[#181818] mb-6">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-white text-2xl font-bold p-2 hover:text-[#E51B24]"
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <div
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeImageIndex]}
                alt={product.name}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
