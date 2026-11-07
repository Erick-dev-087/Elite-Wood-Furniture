import Image from 'next/image';
import Link from 'next/link';
import SectionReveal from '@/components/ui/SectionReveal';
import type { Metadata } from 'next';
import { LOCATION } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Story & Workshop Craftsmanship',
  description:
    'Learn about Elite Wood & Furniture, our local woodworking craft in Ruiru, and our passion for comfortable everyday living.',
};

export default function OurStoryPage() {
  return (
    <div className="bg-[#F7F3ED] min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-[#181818] text-[#F7F3ED] py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/Elite_Wood_Furniture.jpg"
            alt="Elite Wood and Furniture showroom"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F26522] mb-3">
              Handcrafted in Kenya
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Furniture That Makes a House Feel Like Home
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed">
              Founded on a commitment to dependable comfort, enduring hardwoods, and approachable elegance.
              Welcome to Elite Wood &amp; Furniture.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Narrative Section 1 */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionReveal direction="left">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#F26522] mb-2 block">
                  Where It All Begins
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#181818] sm:text-4xl">
                  Rooted in Ruiru, Reaching Homes Across Kenya
                </h2>
                <p className="mt-5 text-base text-gray-600 leading-relaxed">
                  Located at Kihunguro in Ruiru along Thika Road, our workshop and showroom serve
                  as the creative heart of everything we build. We don’t just import or resell flat-pack
                  furniture — we build with real wood frames, dense foam, pocket springs, and rich textiles.
                </p>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  Every living space is unique. Whether you need a generous 7-seater semi-recliner set for family gatherings,
                  a modern L-seat that maximises your corner space, or a space-saving double decker bed for growing children,
                  our furniture is tailored for real everyday life.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg border border-stone-200/50">
                <Image
                  src="/images/Luxury_Sofas_2.jpg"
                  alt="Crafted luxury sofas with tailored wood armrests"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* The 3 Craft Commitments */}
      <section className="bg-white py-20 sm:py-28 border-y border-stone-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F26522] mb-2">
                Our Standard
              </p>
              <h2 className="font-serif text-3xl font-bold text-[#181818] sm:text-4xl">
                The Principles Behind Our Work
              </h2>
            </div>
          </SectionReveal>

          <div className="grid gap-8 md:grid-cols-3">
            <SectionReveal delay={0.1}>
              <div className="rounded-2xl bg-[#F7F3ED] p-8 border border-stone-200/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E51B24] text-white font-serif font-bold text-lg mb-6">
                  01
                </div>
                <h3 className="font-serif text-xl font-bold text-[#181818] mb-3">
                  Solid Frames &amp; Joints
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We use seasoned, strong timber structures engineered to take everyday family use.
                  No creaking, no wobble, and reinforced corners built to last.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="rounded-2xl bg-[#F7F3ED] p-8 border border-stone-200/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F26522] text-white font-serif font-bold text-lg mb-6">
                  02
                </div>
                <h3 className="font-serif text-xl font-bold text-[#181818] mb-3">
                  Comfort-First Cushions
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We offer High-Density foam for enduring firmness or pocket-spring cushioning for luxurious
                  give and recovery. You choose the feel that suits your relaxation style.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="rounded-2xl bg-[#F7F3ED] p-8 border border-stone-200/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#181818] text-white font-serif font-bold text-lg mb-6">
                  03
                </div>
                <h3 className="font-serif text-xl font-bold text-[#181818] mb-3">
                  Honest Customer Care
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pay on delivery accepted. We believe in our craft so strongly that you inspect your furniture
                  in your own home before settling your bill.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Workshop Gallery */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#F26522] mb-1.5">
                  Showroom &amp; Floor Pieces
                </p>
                <h2 className="font-serif text-3xl font-bold text-[#181818] sm:text-4xl">
                  Recent Workshop Work
                </h2>
              </div>
              <Link
                href="/shop"
                className="text-sm font-semibold text-[#E51B24] hover:underline"
              >
                Browse Full Catalogue →
              </Link>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xs">
              <Image src="/images/Sofa_1.jpg" alt="Blue textured sofa" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xs">
              <Image src="/images/Semi_Recliner_1.png" alt="Recliner armchair" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xs">
              <Image src="/images/Double_Decker_2.jpg" alt="Double decker bed with stairs" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xs">
              <Image src="/images/Dinner_set_1.jpg" alt="Dining table set" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#181818] py-16 text-[#F7F3ED]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
              Visit Us in Ruiru or Chat on WhatsApp
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300">
              {LOCATION}. Open Monday – Saturday, 6:30 AM – 8:00 PM.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/shop"
                className="rounded-xl bg-[#E51B24] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#c81620]"
              >
                Shop the Collection
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Contact &amp; Directions
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
