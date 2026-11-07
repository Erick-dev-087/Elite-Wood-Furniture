'use client';

import { createContext, useCallback, useContext, useEffect, useRef, ViewTransition } from 'react';
import { MotionConfig } from 'motion/react';
import type { ReactNode } from 'react';

const MAJOR_ROUTES = new Set(['/', '/shop', '/our-story', '/delivery', '/contact']);
const COOLDOWN_MS = 12_000;
const DURATION_MS = 580;

type NavigationType = 'cushion' | 'page-fade' | null;

const TransitionContext = createContext<{
  navigationType: (href: string) => NavigationType;
  playCushion: () => void;
}>({
  navigationType: () => null,
  playCushion: () => {},
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const lastCushion = useRef(0);
  const cushion = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const stop = () => {
      animation.current?.cancel();
      cushion.current?.hidePopover?.();
    };
    preference.addEventListener('change', stop);
    return () => {
      preference.removeEventListener('change', stop);
      stop();
    };
  }, []);

  const navigationType = useCallback((href: string): NavigationType => {
    const destination = new URL(href, window.location.href);
    const current = new URL(window.location.href);
    animation.current?.cancel();
    cushion.current?.hidePopover?.();

    // Product, bag, filter, hash and same-page links retain normal navigation.
    if (
      destination.origin !== current.origin ||
      destination.pathname === current.pathname ||
      destination.search || destination.hash ||
      !MAJOR_ROUTES.has(current.pathname) ||
      !MAJOR_ROUTES.has(destination.pathname) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('startViewTransition' in document)
    ) return null;

    if (
      !CSS.supports('view-transition-class', 'cushion-page') ||
      typeof cushion.current?.showPopover !== 'function'
    ) return 'page-fade';

    const now = Date.now();
    if (now - lastCushion.current < COOLDOWN_MS) return 'page-fade';
    lastCushion.current = now;
    return 'cushion';
  }, []);

  const playCushion = useCallback(() => {
    if (!cushion.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    animation.current?.cancel();
    // Popovers occupy the top layer, above the browser's page snapshots.
    // This is decorative, with no focus change or input interception.
    cushion.current.showPopover();
    // Start with the committed page transition: no wait before navigation.
    const activeAnimation = cushion.current.animate([
      { transform: 'translate3d(-100%, -50%, 0) rotate(-8deg)', opacity: 1 },
      { transform: 'translate3d(100vw, -50%, 0) rotate(8deg)', opacity: 1 },
    ], { duration: DURATION_MS, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' });
    animation.current = activeAnimation;
    const hide = () => {
      if (animation.current === activeAnimation) cushion.current?.hidePopover?.();
    };
    activeAnimation.onfinish = hide;
    activeAnimation.oncancel = hide;
  }, []);

  return (
    <TransitionContext.Provider value={{ navigationType, playCushion }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
      <div className="cushion-transition" ref={cushion} popover="manual" aria-hidden="true">
        {/* Decorative SVG, separate from the supplied brand artwork. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/transition-cushion.svg" alt="" width="180" height="180" />
      </div>
    </TransitionContext.Provider>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  const { playCushion } = usePageTransition();

  return (
    <ViewTransition
      name="storefront-page"
      default="none"
      update={{ cushion: 'cushion-page', 'page-fade': 'page-fade', default: 'none' }}
      onUpdate={(_instance, types) => {
        if (types.includes('cushion')) playCushion();
      }}
    >
      <main className="flex-1">{children}</main>
    </ViewTransition>
  );
}
