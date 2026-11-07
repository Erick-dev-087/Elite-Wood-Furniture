import SectionReveal from '@/components/ui/SectionReveal';
import type { Testimonial } from '@/lib/types';

interface TestimonialsProps {
  testimonials: readonly Testimonial[];
}

const columnPositions = [
  'lg:mt-0',
  'md:mt-6 lg:mt-12',
  'md:col-span-2 lg:col-span-1 lg:mt-24',
] as const;

function BorderPlus({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute flex h-4 w-4 items-center justify-center bg-warm-ivory ${className}`}
    >
      <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-charcoal/50">
        <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1" />
      </svg>
    </span>
  );
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  // This editorial composition features up to three CMS-selected records.
  const featuredTestimonials = testimonials.slice(0, 3);
  if (featuredTestimonials.length === 0) return null;

  const hasPlaceholders = featuredTestimonials.some((testimonial) => testimonial.isPlaceholder);

  return (
    <section
      aria-labelledby="testimonials-heading"
      aria-describedby={hasPlaceholders ? 'testimonials-disclaimer' : undefined}
      className="bg-warm-ivory py-20 font-sans text-charcoal sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/70">
            <span aria-hidden="true" className="h-px w-8 bg-elite-red" />
            A place to feel at home
          </p>
          <h2
            id="testimonials-heading"
            className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl"
          >
            Good furniture. Happier homes.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal/75 sm:text-lg">
            Every home has a story. We&apos;re glad to be part of the moments that make yours special.
          </p>
          {hasPlaceholders && (
            <p id="testimonials-disclaimer" className="mt-6 max-w-xl text-sm leading-relaxed text-charcoal/70">
              Sample testimonials — these are illustrative examples, not verified customer reviews.
            </p>
          )}
        </SectionReveal>

        {/* Margins reserve space for the stagger without conflicting with the
            reveal transform or overlapping the following enquiry section. */}
        <div className="mt-12 grid items-start gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-0">
          {featuredTestimonials.map((testimonial, index) => (
            <SectionReveal
              key={testimonial.id}
              delay={index * 0.1}
              className={`min-w-0 ${columnPositions[index]}`}
            >
              <figure
                className={`relative m-0 flex flex-col border border-charcoal/20 px-6 py-8 sm:px-8 sm:py-10 lg:min-h-[27rem] ${
                  index < featuredTestimonials.length - 1 ? 'lg:border-r-0' : ''
                }`}
              >
                <BorderPlus className="-left-2 -top-2" />
                {index === featuredTestimonials.length - 1 && (
                  <BorderPlus className="-bottom-2 -right-2" />
                )}

                <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.12em] text-charcoal/70">
                  <span aria-hidden="true" className="tabular-nums text-charcoal/50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{testimonial.category}</span>
                </p>

                <span
                  aria-hidden="true"
                  className="mt-6 block h-14 select-none font-serif text-7xl leading-none text-elite-red"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-3 flex-1">
                  <p className="text-lg leading-[1.8] [overflow-wrap:anywhere]">
                    {testimonial.quote}
                  </p>
                </blockquote>

                <figcaption className="mt-8">
                  <p className="text-sm font-semibold">{testimonial.attribution}</p>
                  {testimonial.isPlaceholder && (
                    <p className="mt-1.5 text-xs leading-relaxed text-charcoal/70">Sample testimonial</p>
                  )}
                </figcaption>
              </figure>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
