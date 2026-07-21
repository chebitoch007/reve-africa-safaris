'use client';

/**
 * AccommodationStandards
 *
 * Three accommodation tiers: Classic Luxury, Private & Exclusive,
 * Mobile & Expedition. Client Component — scroll-reveal animations.
 * Surface: bg-dune (dune-100) — warm, tactile feel appropriate for
 * a section about physical places.
 *
 * Each tier uses a landscape image placeholder + content panel.
 * The three tiers stack vertically on mobile, grid on desktop.
 */

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { ACCOMMODATION_STANDARDS, ACCOMMODATION_SECTION } from '@/lib/constants/packages';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const cardVariant = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.slow, ease: EASE.cinematic, delay: i * 0.1 },
  }),
};

export function AccommodationStandards() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="accommodation-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-dune)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-14 lg:mb-16">
          <div>
            <motion.div
              custom={0}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="flex items-center gap-4 mb-6"
            >
              <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
              <span className={cn(
                'font-[var(--font-inter)] font-medium uppercase',
                'text-[10px] tracking-[0.28em] leading-none',
                'text-[var(--color-text-muted)]',
              )}>
                {ACCOMMODATION_SECTION.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="accommodation-heading"
              custom={0.08}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(2rem,3.5vw+0.5rem,3.25rem)]',
                'leading-[1.1] tracking-[-0.02em]',
                'text-[var(--color-text-primary)]',
                'whitespace-pre-line',
              )}
            >
              {ACCOMMODATION_SECTION.headline}
            </motion.h2>
          </div>

          <motion.p
            custom={0.14}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className={cn(
              'font-[var(--font-inter)] font-light',
              'text-base lg:text-[1.0625rem] leading-[1.82]',
              'text-[var(--color-text-secondary)]',
              'self-end',
            )}
          >
            {ACCOMMODATION_SECTION.body}
          </motion.p>
        </div>

        {/* ── Tier cards ───────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--color-border-light)]"
          role="list"
          aria-label="Accommodation tiers"
        >
          {ACCOMMODATION_STANDARDS.map((standard, i) => (
            <motion.article
              key={standard.id}
              role="listitem"
              custom={i}
              variants={reduced ? {} : cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="group bg-[var(--color-bg-dune)] flex flex-col overflow-hidden"
            >
              {/* Image placeholder ───────────────────────────────────
                  Replace with <Image fill> when photography available.
                  16:9 landscape ratio for accommodation imagery.
              ─────────────────────────────────────────────────────── */}
              <div
                className="relative overflow-hidden shrink-0"
                style={{ aspectRatio: '16/9' }}
              >
                <Image
                  src={standard.imageSrc}
                  alt={standard.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />

                {/* Tier badge */}
                <div className="absolute top-4 left-4 z-[1]">
                  <span className={cn(
                    'inline-block px-2.5 py-1.5',
                    'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[8.5px]',
                    'text-[var(--color-text-inverse)] border border-[rgba(255,255,255,0.25)]',
                  )}>
                    {standard.tier}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7 lg:p-8">
                <h3 className={cn(
                  'font-[var(--font-cormorant)] font-light italic',
                  'text-[1.375rem] leading-[1.2] tracking-[-0.01em]',
                  'text-[var(--color-text-primary)] mb-3',
                )}>
                  {standard.title}
                </h3>

                <p className={cn(
                  'font-[var(--font-inter)] font-light text-sm leading-[1.78]',
                  'text-[var(--color-text-secondary)] mb-5 flex-1',
                )}>
                  {standard.description}
                </p>

                {/* Example properties */}
                <div>
                  <p className={cn(
                    'font-[var(--font-inter)] font-medium uppercase',
                    'text-[9px] tracking-[0.22em] leading-none',
                    'text-[var(--color-text-muted)] mb-3',
                  )}>
                    Examples
                  </p>
                  <ul className="flex flex-col gap-1.5" aria-label={`${standard.tier} example properties`}>
                    {standard.examples.map((example) => (
                      <li
                        key={example}
                        className={cn(
                          'font-[var(--font-inter)] font-light text-sm italic',
                          'text-[var(--color-text-secondary)]',
                        )}
                      >
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
