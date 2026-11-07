'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionReveal from '@/components/ui/SectionReveal';
import {
  PHONE_NUMBER,
  LOCATION,
  OPENING_HOURS,
  SOCIAL_LINKS,
  buildWhatsAppLink,
} from '@/lib/constants';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Sofas');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formatted = `Hi Elite Wood & Furniture! 👋\n\nName: ${name || 'Customer'}\nPhone: ${phone || 'Not provided'}\nInterested in: ${interest}\n\nMessage: ${message || "I'd like to make an enquiry."}`;
    const url = buildWhatsAppLink(formatted);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  const directWhatsAppUrl = buildWhatsAppLink(
    "Hi Elite Wood & Furniture! I'd like to make an enquiry about your showroom pieces."
  );

  return (
    <div className="bg-[#F7F3ED] min-h-screen py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E51B24]">Home</Link>
          <span>/</span>
          <span className="font-semibold text-[#181818]">Contact Us</span>
        </nav>

        {/* Heading */}
        <SectionReveal>
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F26522] mb-2 block">
              Get in Touch
            </span>
            <h1 className="font-serif text-3xl font-bold text-[#181818] sm:text-4xl lg:text-5xl">
              Visit Our Showroom or Chat With Us
            </h1>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              We are always delighted to talk furniture, discuss custom cushion requirements, or arrange
              delivery. Reach out directly or drop by our showroom along Thika Road.
            </p>
          </div>
        </SectionReveal>

        {/* Grid: Contact Information & Interactive Form */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Info: 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            {/* Showroom & Hours Card */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-stone-200/50">
              <h2 className="font-serif text-xl font-bold text-[#181818] mb-6">
                Showroom Details
              </h2>

              <ul className="space-y-5" role="list">
                {/* Physical Location */}
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#E51B24]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Location</h3>
                    <p className="text-sm font-semibold text-[#181818] mt-0.5">{LOCATION}</p>
                    <p className="text-xs text-gray-500 mt-0.5">Along Thika Superhighway, easily accessible from Nairobi</p>
                  </div>
                </li>

                {/* Operating Hours */}
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#F26522]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Working Hours</h3>
                    <p className="text-sm font-semibold text-[#181818] mt-0.5">{OPENING_HOURS}</p>
                    <p className="text-xs text-emerald-600 font-medium mt-0.5">Open 6 days a week</p>
                  </div>
                </li>

                {/* Phone & Direct WhatsApp */}
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Direct Telephone / WhatsApp</h3>
                    <p className="text-sm font-bold text-[#181818] mt-0.5">{PHONE_NUMBER}</p>
                    <div className="mt-2 flex gap-2">
                      <a
                        href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                        className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-800 hover:bg-gray-200"
                      >
                        Call Now
                      </a>
                      <a
                        href={directWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Socials Connection Card */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-stone-200/50">
              <h3 className="font-serif text-lg font-bold text-[#181818] mb-3">
                Official Social Profiles
              </h3>
              <p className="text-xs text-gray-600 mb-4">
                Watch new piece reveals, workshop timelapses, and customer setups:
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-gray-200 p-3 text-xs font-semibold text-gray-800 hover:border-[#E51B24] hover:text-[#E51B24] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#E51B24]">📸</span> Instagram: @elite_wood_furniture
                  </span>
                  <span>↗</span>
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-gray-200 p-3 text-xs font-semibold text-gray-800 hover:border-[#E51B24] hover:text-[#E51B24] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-blue-600">👍</span> Facebook: @elitewoodfurniture
                  </span>
                  <span>↗</span>
                </a>
                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-gray-200 p-3 text-xs font-semibold text-gray-800 hover:border-[#E51B24] hover:text-[#E51B24] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-black">🎵</span> TikTok: @elitefurniture1
                  </span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form: 7 cols */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 sm:p-10 shadow-sm border border-stone-200/50">
              <h2 className="font-serif text-2xl font-bold text-[#181818]">
                Send an Enquiry
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-gray-600">
                Fill in what you’re looking for and click Send — it automatically packages your details into
                WhatsApp so you get a fast, personalised response from our team.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#181818] mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Jane Kamau"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-[#F7F3ED]/40 p-3 text-xs sm:text-sm text-[#181818] focus:border-[#E51B24] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#181818] mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. 0712 345 678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-[#F7F3ED]/40 p-3 text-xs sm:text-sm text-[#181818] focus:border-[#E51B24] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-xs font-bold text-[#181818] mb-1">
                    Furniture Category of Interest
                  </label>
                  <select
                    id="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-[#F7F3ED]/40 p-3 text-xs sm:text-sm text-[#181818] focus:border-[#E51B24] focus:bg-white focus:outline-none"
                  >
                    <option value="Sofas & Recliners">Sofas &amp; Recliners (5 seater, 7 seater, L-Seat, Bubble)</option>
                    <option value="Beds & Double Deckers">Beds &amp; Double Deckers</option>
                    <option value="TV Stands & Entertainment">Modern TV Stands &amp; Consoles</option>
                    <option value="Dining Sets">Marble Top &amp; Wood Dining Sets</option>
                    <option value="Custom Order / Other">Bespoke / Custom Order</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#181818] mb-1">
                    Your Message / Specific Question
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us what piece you like, custom dimensions, preferred cushion feel, or delivery address..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-[#F7F3ED]/40 p-3 text-xs sm:text-sm text-[#181818] focus:border-[#E51B24] focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#E51B24] px-6 py-4 text-sm font-semibold text-white shadow-md shadow-red-500/20 transition-all hover:bg-[#c81620] active:scale-[0.98]"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>Send via WhatsApp to 0725 781 911</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
