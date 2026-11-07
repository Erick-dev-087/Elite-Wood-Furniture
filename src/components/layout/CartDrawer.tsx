'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '@/lib/cart-context';
import { buildCartEnquiry, getWhatsAppUrl } from '@/lib/whatsapp';

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatPrice(price: number): string {
  return `KSH ${price.toLocaleString('en-KE')}`;
}

function cushionLabel(type: 'hd' | 'spring'): string {
  return type === 'hd' ? 'HD Foam' : 'Spring';
}

/* ------------------------------------------------------------------ */
/*  Cart Drawer Component                                              */
/* ------------------------------------------------------------------ */

export default function CartDrawer() {
  const {
    items,
    isOpen,
    itemCount,
    subtotal,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart();

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* Close on Escape key */
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) closeCart();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, closeCart]);

  function handleWhatsAppEnquiry() {
    const message = buildCartEnquiry(items);
    if (message) {
      const url = getWhatsAppUrl(message);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ---- Backdrop ---- */}
          <motion.div
            key="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] bg-black/50"
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* ---- Drawer Panel ---- */}
          <motion.aside
            key="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 z-[90] flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping bag"
          >
            {/* ---- Header ---- */}
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <h2 className="font-serif text-lg font-bold text-[#181818]">
                Your Bag
                {itemCount > 0 && (
                  <span className="ml-2 text-sm font-normal text-gray-500">
                    ({itemCount} item{itemCount !== 1 ? 's' : ''})
                  </span>
                )}
              </h2>
              <button
                onClick={closeCart}
                aria-label="Close shopping bag"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#181818] transition-colors duration-200 hover:bg-[#F7F3ED]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* ---- Content ---- */}
            {items.length === 0 ? (
              /* Empty State */
              <div className="flex flex-1 flex-col items-center justify-center px-5 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="mb-4 h-16 w-16 text-gray-200"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <h3 className="mb-1 text-lg font-semibold text-[#181818]">
                  Your bag is empty
                </h3>
                <p className="mb-6 text-sm text-gray-500">
                  Browse our collection and add pieces you love.
                </p>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="inline-flex items-center rounded-full bg-[#181818] px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#E51B24]"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <>
                {/* Items list */}
                <ul
                  className="flex-1 divide-y divide-gray-100 overflow-y-auto px-5"
                  role="list"
                >
                  <AnimatePresence initial={false}>
                    {items.map((item) => {
                      const { product, quantity, cushionType, cushionColor } =
                        item;
                      const itemKey = `${product.id}-${cushionType ?? 'none'}`;
                      const hasImage =
                        product.images && product.images.length > 0;

                      return (
                        <motion.li
                          key={itemKey}
                          layout
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                          transition={{ duration: 0.25 }}
                          className="py-4"
                        >
                          <div className="flex gap-4">
                            {/* Product image */}
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-[#F7F3ED]">
                              {hasImage ? (
                                <Image
                                  src={product.images[0]}
                                  alt={product.name}
                                  width={80}
                                  height={80}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <div className="flex h-full w-full items-center justify-center text-gray-300">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1}
                                    stroke="currentColor"
                                    className="h-8 w-8"
                                    aria-hidden="true"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V4.5a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5z"
                                    />
                                  </svg>
                                </div>
                              )}
                            </div>

                            {/* Info */}
                            <div className="flex min-w-0 flex-1 flex-col">
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="truncate text-sm font-semibold text-[#181818]">
                                  {product.name}
                                </h4>
                                {/* Remove button */}
                                <button
                                  onClick={() =>
                                    removeItem(product.id, cushionType)
                                  }
                                  aria-label={`Remove ${product.name} from bag`}
                                  className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded text-gray-400 transition-colors duration-200 hover:text-[#E51B24]"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                  </svg>
                                </button>
                              </div>

                              {/* Price */}
                              <p className="mt-0.5 text-sm text-gray-600">
                                {product.price > 0
                                  ? formatPrice(product.price)
                                  : 'Contact for pricing'}
                              </p>

                              {/* Cushion options */}
                              {cushionType && (
                                <p className="mt-0.5 text-xs text-gray-400">
                                  Cushion: {cushionLabel(cushionType)}
                                  {cushionColor && ` · ${cushionColor}`}
                                </p>
                              )}

                              {/* Quantity controls */}
                              <div className="mt-2 flex items-center gap-1">
                                <button
                                  onClick={() =>
                                    updateQuantity(
                                      product.id,
                                      quantity - 1,
                                      cushionType,
                                    )
                                  }
                                  aria-label={`Decrease quantity of ${product.name}`}
                                  className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-[#181818] transition-colors duration-200 hover:border-gray-300 hover:bg-[#F7F3ED]"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-3 w-3"
                                    aria-hidden="true"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 12h-15"
                                    />
                                  </svg>
                                </button>
                                <span
                                  className="flex h-7 w-8 items-center justify-center text-sm font-medium text-[#181818]"
                                  aria-label={`Quantity: ${quantity}`}
                                >
                                  {quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(
                                      product.id,
                                      quantity + 1,
                                      cushionType,
                                    )
                                  }
                                  aria-label={`Increase quantity of ${product.name}`}
                                  className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-[#181818] transition-colors duration-200 hover:border-gray-300 hover:bg-[#F7F3ED]"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-3 w-3"
                                    aria-hidden="true"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.li>
                      );
                    })}
                  </AnimatePresence>
                </ul>

                {/* ---- Footer ---- */}
                <div className="border-t border-gray-100 px-5 py-4">
                  {/* Subtotal */}
                  {subtotal > 0 && (
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">
                        Subtotal
                      </span>
                      <span className="text-lg font-bold text-[#181818]">
                        {formatPrice(subtotal)}
                      </span>
                    </div>
                  )}

                  {/* Items without pricing note */}
                  {items.some((i) => !i.product.price || i.product.price <= 0) && (
                    <p className="mb-3 text-center text-xs text-gray-400">
                      Some items require a pricing enquiry
                    </p>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-2.5">
                    <button
                      onClick={handleWhatsAppEnquiry}
                      className="flex items-center justify-center gap-2 rounded-full bg-[#E51B24] px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#c8161f]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Enquire via WhatsApp
                    </button>
                    <button
                      onClick={closeCart}
                      className="rounded-full border border-gray-200 px-4 py-2.5 text-sm font-medium text-[#181818] transition-colors duration-200 hover:bg-[#F7F3ED]"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
