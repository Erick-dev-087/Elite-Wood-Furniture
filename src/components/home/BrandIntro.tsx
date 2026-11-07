'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionReveal from '@/components/ui/SectionReveal';

export default function BrandIntro() {
  return (
    <section className="bg-[#F7F3ED] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <SectionReveal direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/Sofa_1.jpg"
                alt="Beautifully crafted blue sofa with decorative cushion"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </SectionReveal>

          {/* Text */}
          <SectionReveal direction="right" delay={0.2}>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#F26522]">
              Welcome to Elite
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#181818] sm:text-4xl">
              Crafting Comfort for Everyday Living
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              At Elite Wood &amp; Furniture, we believe beautiful homes start with
              thoughtfully made furniture. From plush sofas that invite you to
              unwind, to sturdy beds and elegant dining sets, every piece is
              built to bring lasting comfort and style to your space.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Based in Ruiru along Thika Road, we craft and curate furniture
              that turns houses into homes — delivered right to your door,
              anywhere in Kenya.
            </p>
            <div className="mt-8">
              <Link
                href="/our-story"
                className="group inline-flex items-center text-sm font-semibold text-[#181818] transition-colors duration-200 hover:text-[#E51B24]"
              >
                Learn more about us
                <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
