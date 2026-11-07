'use client';

import Link from 'next/link';
import TransitionLink from '@/components/ui/TransitionLink';
import {
  COMPANY_NAME,
  TAGLINE,
  WHATSAPP_NUMBER,
  PHONE_NUMBER,
  LOCATION,
  OPENING_HOURS,
  SOCIAL_LINKS,
} from '@/lib/constants';
import BrandLogo from '@/components/ui/BrandLogo';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop Catalogue' },
  { href: '/our-story', label: 'Our Story & Workshop' },
  { href: '/delivery', label: 'Delivery & FAQs' },
  { href: '/contact', label: 'Contact Us' },
] as const;

const categories = [
  { href: '/shop/sofas', label: 'Sofas & Recliners' },
  { href: '/shop/beds', label: 'Beds & Double Deckers' },
  { href: '/shop/tv-stands', label: 'Modern TV Stands' },
  { href: '/shop/dining', label: 'Dining Sets' },
] as const;

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent("Hi Elite Wood & Furniture! I'd like to get in touch.")}`;

export default function Footer() {
  const year = 2026;

  return (
    <footer
      className="bg-[#181818] text-[#F7F3ED] border-t border-white/5"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        {/* ---- Brand Logo & Value Tagline ---- */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <BrandLogo size="lg" />
            <p className="mt-2 text-sm text-[#F7F3ED]/70 font-sans max-w-md">
              {TAGLINE}. Handcrafted furniture made for everyday living in Kenya.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#F26522] font-semibold">Pay on Delivery Accepted</span>
            <span className="text-white/20">•</span>
            <span className="text-xs text-white/70">Countrywide Delivery</span>
          </div>
        </div>

        {/* ---- Grid ---- */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 – About & Socials */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#F26522]">
              About Elite
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-[#F7F3ED]/75">
              We make furniture that turns houses into homes. Visit our showroom in
              Ruiru along Thika Road to see our craft up close, or order directly with
              fast delivery across Kenya.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                title="Instagram @elite_wood_furniture"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-[#E51B24]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                title="Facebook @elitewoodfurniture"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-[#E51B24]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on TikTok"
                title="TikTok @elitefurniture1"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-[#E51B24]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.01a8.35 8.35 0 004.86 1.56V7.05a4.96 4.96 0 01-1.1-.36z" />
                </svg>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="WhatsApp 0725781911"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-emerald-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 – Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#F26522]">
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <TransitionLink
                    href={href}
                    className="text-sm text-[#F7F3ED]/75 transition-colors duration-200 hover:text-[#E51B24]"
                  >
                    {label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Categories */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#F26522]">
              Categories
            </h3>
            <ul className="space-y-2.5" role="list">
              {categories.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#F7F3ED]/75 transition-colors duration-200 hover:text-[#E51B24]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Contact Info */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#F26522]">
              Visit or Contact
            </h3>
            <ul className="space-y-3" role="list">
              {/* Phone */}
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#F26522]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                  className="text-sm text-[#F7F3ED]/80 hover:text-white transition-colors"
                >
                  {PHONE_NUMBER}
                </a>
              </li>

              {/* WhatsApp */}
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#F26522]"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#F7F3ED]/80 hover:text-white transition-colors"
                >
                  WhatsApp: 0725 781 911
                </a>
              </li>

              {/* Location */}
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#F26522]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="text-sm text-[#F7F3ED]/80 leading-snug">{LOCATION}</span>
              </li>

              {/* Hours */}
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#F26522]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm text-[#F7F3ED]/80">{OPENING_HOURS}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---- Bottom Bar ---- */}
      <div className="border-t border-white/10 bg-[#121212]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p className="text-xs text-[#F7F3ED]/60 font-sans">
            &copy; {year} {COMPANY_NAME}. All rights reserved. Handcrafted in Kenya.
          </p>
          <div className="flex items-center gap-4 text-xs text-[#F7F3ED]/50">
            <Link href="/delivery" className="hover:text-white transition-colors">Delivery Terms</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">Customer Care</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
