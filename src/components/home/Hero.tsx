'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from '@/components/ui/TransitionLink';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

const slides = [
  {
    image: '/images/hero-showroom.webp',
    alt: 'A continuous view of the Elite Wood & Furniture showroom with sofa sets on display',
    position: '50% 55%',
    title: 'Comfort Made for Everyday Living',
    subtitle: 'Discover furniture that brings the warmth of wood, comfort, and elegance into your home.',
    category: 'Our Showroom',
  },
  {
    image: '/images/hero-sofas.webp',
    alt: 'Grey upholstered sofas arranged around a round wooden coffee table in the showroom',
    position: '60% 60%',
    title: 'A Living Room That Feels Like You',
    subtitle: 'Find a sofa set that complements your space and makes everyday moments more comfortable.',
    category: 'Living Room Collection',
  },
  {
    image: '/images/hero-dining.webp',
    alt: 'A round dining table surrounded by upholstered chairs with warm wooden frames',
    position: '60% 50%',
    title: 'Make Room for Shared Moments',
    subtitle: 'Bring everyone together with dining furniture that adds warmth and character to your home.',
    category: 'Dining Collection',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const reducedMotion = useReducedMotion();
  const rotationPaused = paused || interacting || focused || hidden || !!reducedMotion;

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (rotationPaused) return;
    const timer = setTimeout(next, 7000);
    return () => clearTimeout(timer);
  }, [current, next, rotationPaused]);

  return (
    <section
      aria-label="Furniture for your home"
      aria-roledescription="carousel"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
      className="relative h-[85svh] min-h-[550px] max-h-[820px] overflow-hidden bg-[#181818]"
    >
      {/* Background Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 1.1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Subtle slow cinematic zoom (100% to 106% as per design.md) */}
          <div
            className="relative h-full w-full"
            style={{
              animation: reducedMotion ? 'none' : 'hero-image-zoom 7s linear forwards',
              animationPlayState: rotationPaused ? 'paused' : 'running',
            }}
          >
            <Image
              src={slides[current].image}
              alt={slides[current].alt}
              fill
              preload={current === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: slides[current].position }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Warm the exact Next.js image request for the following slide. */}
      <div className="hidden" aria-hidden="true">
        <Image src={slides[(current + 1) % slides.length].image} alt="" width={1342} height={760} sizes="100vw" loading="eager" />
      </div>

      {/* Cinematic Vignette & Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Hero Content */}
      <div aria-live={rotationPaused ? 'polite' : 'off'} aria-atomic="true" className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          {/* Badge */}
          <motion.div
            key={`badge-${current}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#F26522] backdrop-blur-xs border border-white/10"
          >
            <span className="h-2 w-2 rounded-full bg-[#E51B24]" />
            <span>{slides[current].category}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            key={`title-${current}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-serif text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {slides[current].title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            key={`sub-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.55 }}
            className="mt-4 text-sm sm:text-lg leading-relaxed text-white/85"
          >
            {slides[current].subtitle}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/shop"
              className="group inline-flex items-center rounded-xl bg-[#E51B24] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:bg-[#c81620] active:scale-[0.98]"
            >
              <span>Explore Collection</span>
              <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/our-story"
              className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xs transition-all duration-300 hover:border-white hover:bg-white/20 active:scale-[0.98]"
            >
              Our Story &amp; Craft
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-6 right-4 sm:right-12 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={reducedMotion ? 'Slideshow paused for reduced motion' : paused ? 'Start slideshow' : 'Pause slideshow'}
          aria-pressed={paused || !!reducedMotion}
          disabled={!!reducedMotion}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-xs transition-colors hover:bg-[#E51B24] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:opacity-50"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            {paused || reducedMotion ? <path d="m8 5 11 7-11 7V5Z" /> : <path d="M6 5h4v14H6zM14 5h4v14h-4z" />}
          </svg>
        </button>
        {/* Prev / Next buttons */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-xs border border-white/20 hover:bg-[#E51B24] hover:border-[#E51B24] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-xs border border-white/20 hover:bg-[#E51B24] hover:border-[#E51B24] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          ›
        </button>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-6 left-4 sm:left-1/2 sm:-translate-x-1/2 z-20 flex gap-1">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? 'true' : undefined}
            className="flex h-11 min-w-8 items-center justify-center rounded-full px-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-[#E51B24]' : 'w-2 bg-white/40 hover:bg-white/70'}`} />
          </button>
        ))}
      </div>
    </section>
  );
}
