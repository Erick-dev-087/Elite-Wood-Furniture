'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionReveal from '@/components/ui/SectionReveal';

const pillars = [
  {
    title: 'Seasoned Hardwoods & Frames',
    description:
      'Sturdy, precision-joined wooden frames designed to withstand years of active family living without sagging or creaking.',
    badge: 'Structure',
  },
  {
    title: 'Dual Cushion Engineering',
    description:
      'Choose between High-Density (HD) foam for supportive, long-lasting resilience or Spring Cushioning for plush, luxurious sink-in comfort.',
    badge: 'Comfort',
  },
  {
    title: 'Tailored Upholstery & Stitching',
    description:
      'Durable textured fabrics and quilted detailing crafted with reinforced seams that retain their shape through everyday wear.',
    badge: 'Finishing',
  },
  {
    title: 'Ruiru Showroom & Workshop',
    description:
      'Visit our workshop along Thika Road to see our craft firsthand, feel the materials, and discuss custom preferences.',
    badge: 'Local Craft',
  },
];

export default function Craftsmanship() {
  return (
    <section className="bg-[#181818] text-[#F7F3ED] py-24 sm:py-32 relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F26522]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual Showcase */}
          <SectionReveal direction="left">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/Luxury_Sofas.jpg"
                  alt="Elite handcrafted luxury sofa with hardwood trims"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/Dinner_set_1.jpg"
                    alt="Precision finished dining table set"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/images/Double_Decker_1.jpg"
                    alt="Sturdy handcrafted double decker bed"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Editorial Content */}
          <SectionReveal direction="right" delay={0.2}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F26522] mb-3">
                Our Approach to Furniture Making
              </p>
              <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                Built to Last, Designed to be Lived In
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#F7F3ED]/80">
                True quality isn’t superficial shine — it is how comfortably a sofa sits after five
                years, how sturdy a double decker bed holds through childhood, and how warm real wood
                feels in your living room.
              </p>

              {/* Pillars Grid */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs transition-colors hover:border-[#F26522]/40"
                  >
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#F26522] mb-1">
                      {pillar.badge}
                    </span>
                    <h3 className="font-sans text-sm font-bold text-white mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#F7F3ED]/70">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/our-story"
                  className="rounded-lg bg-[#E51B24] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c81620]"
                >
                  Read Our Full Story
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  Visit Showroom
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
