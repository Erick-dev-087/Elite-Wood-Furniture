'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { buildCartEnquiry, getWhatsAppUrl } from '@/lib/whatsapp';
import { formatPrice } from '@/lib/products';

export default function CartPage() {
  const { items, itemCount, subtotal, removeItem, updateQuantity, clearCart } = useCart();

  function handleWhatsAppCheckout() {
    const message = buildCartEnquiry(items);
    if (message) {
      const url = getWhatsAppUrl(message);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <div className="bg-[#F7F3ED] min-h-screen py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-stone-200/60 pb-6">
          <div>
            <h1 className="font-serif text-3xl font-bold text-[#181818] sm:text-4xl">
              Your Shopping Bag
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              {itemCount > 0
                ? `You have selected ${itemCount} piece${itemCount !== 1 ? 's' : ''} for enquiry.`
                : 'Your shopping bag is currently empty.'}
            </p>
          </div>
          {itemCount > 0 && (
            <button
              onClick={clearCart}
              className="text-xs font-semibold text-gray-400 hover:text-[#E51B24] transition-colors"
            >
              Clear all items
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-sm border border-stone-200/50">
            <svg
              className="mx-auto h-20 w-20 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <h2 className="mt-4 font-serif text-2xl font-bold text-[#181818]">
              Your bag is empty
            </h2>
            <p className="mt-2 text-sm text-gray-500 max-w-sm mx-auto">
              Explore our handmade sofas, beds, TV stands, and dining collections.
            </p>
            <div className="mt-6">
              <Link
                href="/shop"
                className="inline-flex rounded-xl bg-[#E51B24] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#c81620] transition-colors"
              >
                Browse Furniture Collection
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Items List: 8 cols */}
            <div className="lg:col-span-8 space-y-4">
              {items.map((item) => {
                const { product, quantity, cushionType, cushionColor, additionalRequests } = item;
                const hasPrice = product.price > 0;
                const lineTotal = hasPrice ? product.price * quantity : 0;

                return (
                  <div
                    key={`${product.id}-${cushionType || 'none'}`}
                    className="flex flex-col sm:flex-row gap-5 rounded-2xl bg-white p-5 shadow-sm border border-stone-200/50"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] sm:h-28 sm:w-36 flex-shrink-0 overflow-hidden rounded-xl bg-[#F7F3ED]">
                      {product.images.length > 0 ? (
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      ) : null}
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#F26522]">
                              {product.category}
                            </span>
                            <h3 className="font-serif text-lg font-bold text-[#181818]">
                              <Link href={`/product/${product.slug}`} className="hover:text-[#E51B24]">
                                {product.name}
                              </Link>
                            </h3>
                          </div>
                          <button
                            onClick={() => removeItem(product.id, cushionType)}
                            className="text-gray-400 hover:text-[#E51B24] transition-colors p-1"
                            title="Remove"
                          >
                            ✕
                          </button>
                        </div>

                        {/* Options */}
                        <div className="mt-2 space-y-0.5 text-xs text-gray-500">
                          {cushionType && (
                            <p>
                              Cushion Feel:{' '}
                              <strong className="text-gray-800">
                                {cushionType === 'hd' ? 'HD Foam' : 'Spring Cushions'}
                              </strong>
                            </p>
                          )}
                          {cushionColor && (
                            <p>
                              Shade: <strong className="text-gray-800">{cushionColor}</strong>
                            </p>
                          )}
                          {additionalRequests && (
                            <p className="italic text-gray-500 truncate max-w-md">
                              Notes: &ldquo;{additionalRequests}&rdquo;
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Quantity & Price */}
                      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                        <div className="flex items-center rounded-lg border border-gray-200 p-0.5">
                          <button
                            onClick={() => updateQuantity(product.id, quantity - 1, cushionType)}
                            className="flex h-7 w-7 items-center justify-center rounded text-gray-600 hover:bg-gray-100 font-bold"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-[#181818]">
                            {quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(product.id, quantity + 1, cushionType)}
                            className="flex h-7 w-7 items-center justify-center rounded text-gray-600 hover:bg-gray-100 font-bold"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-sm font-bold text-[#E51B24]">
                            {hasPrice ? formatPrice(lineTotal) : 'Contact for pricing'}
                          </p>
                          {quantity > 1 && hasPrice && (
                            <p className="text-[11px] text-gray-400">
                              {formatPrice(product.price)} each
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary: 4 cols */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl bg-white p-6 shadow-sm border border-stone-200/50 sticky top-24">
                <h2 className="font-serif text-lg font-bold text-[#181818] mb-4">
                  Enquiry Summary
                </h2>

                <div className="space-y-3 text-xs sm:text-sm text-gray-600 border-b border-gray-100 pb-4">
                  <div className="flex justify-between">
                    <span>Total Pieces</span>
                    <strong className="text-[#181818]">{itemCount}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <strong className="text-[#181818]">
                      {subtotal > 0 ? formatPrice(subtotal) : 'Pending Confirmation'}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className="text-emerald-600 font-semibold">Calculated on WhatsApp</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Terms</span>
                    <span className="text-[#181818] font-semibold">Pay On Delivery</span>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-baseline">
                  <span className="font-serif text-base font-bold text-[#181818]">Estimated Total:</span>
                  <span className="font-sans text-xl font-bold text-[#E51B24]">
                    {subtotal > 0 ? formatPrice(subtotal) : 'Quote on WhatsApp'}
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#E51B24] px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-red-500/20 hover:bg-[#c81620] transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>Send WhatsApp Enquiry</span>
                  </button>

                  <Link
                    href="/shop"
                    className="w-full block text-center rounded-xl border border-gray-200 py-3 text-xs font-semibold text-gray-700 hover:bg-stone-100 transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
