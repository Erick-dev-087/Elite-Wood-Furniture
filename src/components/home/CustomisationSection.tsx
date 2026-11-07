'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionReveal from '@/components/ui/SectionReveal';

export default function CustomisationSection() {
  return (
    <section className="bg-white py-20 sm:py-28 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Text */}
          <SectionReveal direction="left">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-[#E51B24] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E51B24]" />
                Personalised Comfort
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#181818] sm:text-4xl">
                Choose Your Cushion Feel &amp; Colour
              </h2>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Everyone sits differently. For eligible sofas, Elite Wood &amp; Furniture lets you select
                your preferred cushioning before we build or dispatch your piece:
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-4 p-4 rounded-xl bg-[#F7F3ED] border border-stone-200/60">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#E51B24] font-bold text-sm shadow-sm">
                    HD
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm text-[#181818]">
                      High-Density (HD) Foam Cushions
                    </h3>
                    <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                      Firm, highly supportive, and engineered to retain their sharp aesthetic lines and posture support year after year.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-[#F7F3ED] border border-stone-200/60">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#F26522] font-bold text-sm shadow-sm">
                    SP
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm text-[#181818]">
                      Spring Cushions
                    </h3>
                    <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                      Plush, responsive pocket-spring cushioning offering luxurious bounce, soft sink-in relaxation, and premium comfort.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-xs text-gray-500">
                *Cushion options and colour adjustments apply to eligible sofa sets and can be selected on individual product pages or discussed via WhatsApp.
              </p>

              <div className="mt-8">
                <Link
                  href="/shop/sofas"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#181818] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E51B24]"
                >
                  Explore Eligible Sofas
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </SectionReveal>

          {/* Right Image */}
          <SectionReveal direction="right" delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/L_sit.jpg"
                alt="Elite Wood and Furniture customisable bubble and L-seat sofas in various colours"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-md">
                <div className="flex items-center justify-between text-xs font-semibold text-[#181818]">
                  <span>Available in multiple shades:</span>
                  <span className="text-[#E51B24]">Request via WhatsApp</span>
                </div>
                <div className="mt-2.5 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1e293b] ring-2 ring-offset-1 ring-gray-300" title="Midnight Navy" />
                  <span className="w-5 h-5 rounded-full bg-[#78350f] ring-1 ring-gray-300" title="Warm Rust" />
                  <span className="w-5 h-5 rounded-full bg-[#d6d3d1] ring-1 ring-gray-300" title="Ivory Cream" />
                  <span className="w-5 h-5 rounded-full bg-[#374151] ring-1 ring-gray-300" title="Charcoal Grey" />
                  <span className="w-5 h-5 rounded-full bg-[#15803d] ring-1 ring-gray-300" title="Forest Green" />
                  <span className="text-[11px] text-gray-500 ml-2">or specify in notes</span>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
