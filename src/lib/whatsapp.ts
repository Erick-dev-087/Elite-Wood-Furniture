import type { Product } from '@/lib/types';
import type { CartItem } from '@/lib/cart-context';

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const WHATSAPP_NUMBER = '+254725781911';

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatPrice(price: number): string {
  return price.toLocaleString('en-KE');
}

function cushionLabel(type: 'hd' | 'spring'): string {
  return type === 'hd' ? 'HD (High Density Foam)' : 'Spring Cushion';
}

function productUrl(product: Product): string {
  const slug = product.slug ?? product.id;
  return `https://elitewoodfurniture.co.ke/products/${slug}`;
}

/* ------------------------------------------------------------------ */
/*  Single-product enquiry                                             */
/* ------------------------------------------------------------------ */

export function buildProductEnquiry(
  product: Product,
  quantity: number = 1,
  cushionType?: 'hd' | 'spring',
  cushionColor?: string,
  additionalRequests?: string,
): string {
  const lines: string[] = [
    `Hi Elite Wood & Furniture! 👋`,
    ``,
    `I'm interested in the following product:`,
    ``,
    `📦 *${product.name}*`,
    `🔗 ${productUrl(product)}`,
  ];

  if (product.price && product.price > 0) {
    lines.push(`💰 Displayed Price: KSH ${formatPrice(product.price)}`);
  } else {
    lines.push(`💰 Displayed Price: _Contact for pricing_`);
  }

  lines.push(`📊 Quantity: ${quantity}`);

  if (cushionType) {
    lines.push(`🛋️ Cushion Type: ${cushionLabel(cushionType)}`);
  }

  if (cushionColor) {
    lines.push(`🎨 Cushion Color: ${cushionColor}`);
  }

  if (additionalRequests && additionalRequests.trim()) {
    lines.push(`📝 Additional Requests: ${additionalRequests.trim()}`);
  }

  lines.push(
    ``,
    `Could you please confirm availability, final pricing, and delivery details?`,
    ``,
    `Thank you!`,
  );

  return lines.join('\n');
}

/* ------------------------------------------------------------------ */
/*  Cart enquiry                                                       */
/* ------------------------------------------------------------------ */

export function buildCartEnquiry(items: CartItem[]): string {
  if (items.length === 0) return '';

  const lines: string[] = [
    `Hi Elite Wood & Furniture! 👋`,
    ``,
    `I'd like to enquire about the following items:`,
  ];

  items.forEach((item, idx) => {
    const { product, quantity, cushionType, cushionColor, additionalRequests } =
      item;

    lines.push(``);
    lines.push(`*${idx + 1}. ${product.name}*`);
    lines.push(`🔗 ${productUrl(product)}`);

    if (product.price && product.price > 0) {
      lines.push(`💰 Price: KSH ${formatPrice(product.price)}`);
    } else {
      lines.push(`💰 Price: _Contact for pricing_`);
    }

    lines.push(`📊 Quantity: ${quantity}`);

    if (cushionType) {
      lines.push(`🛋️ Cushion Type: ${cushionLabel(cushionType)}`);
    }

    if (cushionColor) {
      lines.push(`🎨 Cushion Color: ${cushionColor}`);
    }

    if (additionalRequests && additionalRequests.trim()) {
      lines.push(`📝 Notes: ${additionalRequests.trim()}`);
    }
  });

  // Calculate subtotal from items that have a price > 0
  const calculableItems = items.filter(
    (i) => i.product.price && i.product.price > 0,
  );

  if (calculableItems.length > 0) {
    const subtotal = calculableItems.reduce(
      (sum, i) => sum + (i.product.price ?? 0) * i.quantity,
      0,
    );

    lines.push(``);
    lines.push(`───────────────────`);
    lines.push(`📋 *Subtotal: KSH ${formatPrice(subtotal)}*`);

    if (calculableItems.length < items.length) {
      lines.push(
        `_(${items.length - calculableItems.length} item(s) require pricing confirmation)_`,
      );
    }
  }

  lines.push(
    ``,
    `Could you please confirm availability, final pricing, and delivery details for these items?`,
    ``,
    `Thank you!`,
  );

  return lines.join('\n');
}

/* ------------------------------------------------------------------ */
/*  WhatsApp URL builder                                               */
/* ------------------------------------------------------------------ */

export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encoded}`;
}

export function openWhatsApp(message: string): void {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* ------------------------------------------------------------------ */
/*  Quick convenience – open product enquiry directly                  */
/* ------------------------------------------------------------------ */

export function openProductEnquiry(
  product: Product,
  quantity?: number,
  cushionType?: 'hd' | 'spring',
  cushionColor?: string,
  additionalRequests?: string,
): void {
  const message = buildProductEnquiry(
    product,
    quantity,
    cushionType,
    cushionColor,
    additionalRequests,
  );
  openWhatsApp(message);
}

export function openCartEnquiry(items: CartItem[]): void {
  const message = buildCartEnquiry(items);
  if (message) {
    openWhatsApp(message);
  }
}
