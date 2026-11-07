'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionReveal from '@/components/ui/SectionReveal';
import { deliverySteps } from '@/lib/delivery';
import styles from './DeliveryProcess.module.css';

function DeliveryCard({ step, index }: { step: (typeof deliverySteps)[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const titleId = `delivery-step-${step.id}`;
  const detailsId = `${titleId}-details`;

  return (
    <article
      className={styles.card}
      data-expanded={expanded}
      aria-labelledby={titleId}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setExpanded(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse') setExpanded(false);
      }}
    >
      <div className={styles.photo} aria-hidden="true">
        <Image
          src={step.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 232px, (min-width: 640px) 50vw, 100vw"
          className={styles.image}
          style={{ objectPosition: step.imagePosition }}
        />
      </div>
      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.detailsShade} aria-hidden="true" />

      <span className={styles.number} aria-hidden="true">{index + 1}</span>
      <div className={styles.content}>
        <h3 className="m-0 font-sans text-base font-bold text-white">
          <button
            type="button"
            className={styles.toggle}
            aria-labelledby={titleId}
            aria-expanded={expanded}
            aria-controls={detailsId}
            onClick={() => setExpanded((value) => !value)}
            onFocus={(event) => {
              if (event.currentTarget.matches(':focus-visible')) setExpanded(true);
            }}
            onBlur={() => setExpanded(false)}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setExpanded(false);
            }}
          >
            <span id={titleId}>{step.title}</span>
            <span className={styles.hint} aria-hidden="true">
              {expanded ? 'Hide details' : 'View details'}
              <svg viewBox="0 0 20 20" fill="none" className={styles.chevron}>
                <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </h3>

        <div id={detailsId} className={styles.details} aria-hidden={!expanded}>
          <div className={styles.detailsInner}>
            <p className="m-0 text-sm leading-relaxed text-white/90">{step.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function DeliveryProcess() {
  return (
    <ol aria-label="Delivery process" className="mb-20 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
      {deliverySteps.map((step, index) => (
        <li key={step.id} className="min-w-0">
          <SectionReveal delay={(index + 1) * 0.1} className="h-full">
            <DeliveryCard step={step} index={index} />
          </SectionReveal>
        </li>
      ))}
    </ol>
  );
}
