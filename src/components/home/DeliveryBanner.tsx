'use client';

import Link from 'next/link';
import SectionReveal from '@/components/ui/SectionReveal';

export default function DeliveryBanner() {
  return (
    <section className="bg-[#F7F3ED] py-16 sm:py-20 border-b border-stone-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="rounded-3xl bg-gradient-to-br from-[#181818] to-[#252525] p-8 sm:p-12 text-[#F7F3ED] shadow-xl relative overflow-hidden">
            {/* Background decorative circles */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-[#E51B24]/10 blur-2xl pointer-events-none" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-3 lg:items-center">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#F26522]/20 px-3 py-1 text-xs font-semibold text-[#F26522] mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#F26522]" />
                  Kenya Countrywide Dispatch
                </div>
                <h2 className="font-serif text-2xl font-bold sm:text-3xl text-white">
                  Pay on Delivery Accepted &bull; Delivered to Your Door
                </h2>
                <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                  Inspect your furniture in person upon delivery before completing payment. We arrange
                  direct transport from our Ruiru workshop across Nairobi and countrywide throughout Kenya.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Inspect Before Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Careful Transit Wrapping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Showroom Collection Available</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link
                  href="/delivery"
                  className="inline-flex items-center justify-center rounded-xl bg-[#E51B24] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#c81620] text-center"
                >
                  Delivery Guide &amp; FAQs
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 text-center"
                >
                  Showroom Directions
                </Link>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
