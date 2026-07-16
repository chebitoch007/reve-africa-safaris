'use client';

/**
 * WhatsIncluded
 *
 * Clear presentation of journey inclusions and exclusions.
 * Client Component — scroll-reveal animations.
 * Surface: bg-primary (chalk-50).
 *
 * Uses a <dl> with included/excluded visual distinction.
 * Two columns on desktop — included left, excluded right.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { INCLUSIONS, INCLUSIONS_SECTION } from '@/lib/constants/packages';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const itemVariant = {
  hidden:  { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.slow, ease: EASE.cinematic, delay: i * 0.06 },
  }),
};

export function WhatsIncluded() {
  const reduced  = useReducedMotion();
  const included = INCLUSIONS.filter((i) => i.included);
  const excluded = INCLUSIONS.filter((i) => !i.included);

  return (
    <section
      aria-labelledby="inclusions-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-primary)]"
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
                {INCLUSIONS_SECTION.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="inclusions-heading"
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
              {INCLUSIONS_SECTION.headline}
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
            {INCLUSIONS_SECTION.body}
          </motion.p>
        </div>

        {/* ── Inclusions / Exclusions grid ───────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--color-border-light)]">

          {/* Included */}
          <div className="bg-[var(--color-bg-primary)] p-8 lg:p-10">
            <p className={cn(
              'font-[var(--font-inter)] font-medium uppercase',
              'text-[9px] tracking-[0.24em] leading-none',
              'text-[var(--color-accent-primary)] mb-6',
            )}>
              Included in all journeys
            </p>
            <dl className="flex flex-col divide-y divide-[var(--color-border-light)]">
              {included.map((item, i) => (
                <motion.div
                  key={item.id}
                  custom={i}
                  variants={reduced ? {} : itemVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT_ONCE}
                  className="flex items-start gap-4 py-5 first:pt-0"
                >
                  <div
                    className="flex items-center justify-center w-6 h-6 shrink-0 mt-0.5 bg-[var(--color-accent-primary)]"
                    aria-hidden="true"
                  >
                    <Check size={12} strokeWidth={2.5} className="text-[var(--color-bg-inverse)]" />
                  </div>
                  <div>
                    <dt className={cn(
                      'font-[var(--font-inter)] font-medium text-sm',
                      'text-[var(--color-text-primary)] mb-1',
                    )}>
                      {item.title}
                    </dt>
                    <dd className={cn(
                      'font-[var(--font-inter)] font-light text-sm leading-relaxed',
                      'text-[var(--color-text-secondary)]',
                    )}>
                      {item.description}
                    </dd>
                  </div>
                </motion.div>
              ))}
            </dl>
          </div>

          {/* Not included */}
          <div className="bg-[var(--color-bg-secondary)] p-8 lg:p-10">
            <p className={cn(
              'font-[var(--font-inter)] font-medium uppercase',
              'text-[9px] tracking-[0.24em] leading-none',
              'text-[var(--color-text-muted)] mb-6',
            )}>
              Not included
            </p>
            <dl className="flex flex-col divide-y divide-[var(--color-border-light)]">
              {excluded.map((item, i) => (
                <motion.div
                  key={item.id}
                  custom={i}
                  variants={reduced ? {} : itemVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT_ONCE}
                  className="flex items-start gap-4 py-5 first:pt-0"
                >
                  <div
                    className="flex items-center justify-center w-6 h-6 shrink-0 mt-0.5 border border-[var(--color-border-default)]"
                    aria-hidden="true"
                  >
                    <X size={12} strokeWidth={2} className="text-[var(--color-text-muted)]" />
                  </div>
                  <div>
                    <dt className={cn(
                      'font-[var(--font-inter)] font-medium text-sm',
                      'text-[var(--color-text-primary)] mb-1',
                    )}>
                      {item.title}
                    </dt>
                    <dd className={cn(
                      'font-[var(--font-inter)] font-light text-sm leading-relaxed',
                      'text-[var(--color-text-secondary)]',
                    )}>
                      {item.description}
                    </dd>
                  </div>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
