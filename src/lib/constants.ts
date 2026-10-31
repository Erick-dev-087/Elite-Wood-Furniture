export const WHATSAPP_NUMBER = '+254725781911';
export const PHONE_NUMBER = '0725 781 911';
export const LOCATION =
  'Ruiru Kihunguro, along Thika Road, next to The Mark Hotel';
export const OPENING_HOURS = 'Monday – Saturday, 6:30 AM – 8:00 PM';
export const COMPANY_NAME = 'Elite Wood & Furniture';
export const TAGLINE = 'Quality You Can See, Comfort You Can Feel';
export const SITE_DESCRIPTION =
  'Premium handcrafted furniture made in Kenya. Sofas, beds, TV stands, and dining sets delivered countrywide.';

/**
 * Build a WhatsApp click-to-chat link with a pre-filled message.
 */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encoded}`;
}
