'use client';

/**
 * ConservationNote
 *
 * Photography ethics and conservation context section.
 * Client Component — scroll-reveal. Surface: bg-dune (dune-100).
 *
 * Two-column layout: headline + body left, four principles right.
 * Uses a <dl> for the principle list (term + definition structure).
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { CONSERVATION_NOTE } from '@/lib/constants/gallery';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

export function ConservationNote() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="conservation-note-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-dune)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — headline + body */}
          <div>
            <motion.div
              custom={0}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="flex items-center gap-4 mb-5"
            >
              <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
              <span className={cn(
                'font-[var(--font-inter)] font-medium uppercase',
                'text-[10px] tracking-[0.28em] leading-none',
                'text-[var(--color-text-muted)]',
              )}>
                {CONSERVATION_NOTE.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="conservation-note-heading"
              custom={0.08}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(2.25rem,3.5vw+0.5rem,3.25rem)]',
                'leading-[1.08] tracking-[-0.02em]',
                'text-[var(--color-text-primary)] mb-8 whitespace-pre-line',
              )}
            >
              {CONSERVATION_NOTE.headline}
            </motion.h2>

            <div className="space-y-5">
              {CONSERVATION_NOTE.body.map((paragraph, i) => (
                <motion.p
                  key={i}
                  custom={0.14 + i * 0.06}
                  variants={reduced ? {} : fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT_ONCE}
                  className="font-[var(--font-inter)] font-light text-base leading-[1.85] text-[var(--color-text-secondary)]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right — principles list */}
          <motion.div
            custom={0.18}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <dl className="space-y-0 divide-y divide-[var(--color-border-light)]">
              {CONSERVATION_NOTE.principles.map((principle) => (
                <div key={principle.id} className="py-6 first:pt-0 last:pb-0">
                  <dt className={cn(
                    'font-[var(--font-inter)] font-medium text-sm',
                    'text-[var(--color-text-primary)] mb-1.5',
                    'flex items-center gap-3',
                  )}>
                    <span
                      className="block w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] shrink-0"
                      aria-hidden="true"
                    />
                    {principle.label}
                  </dt>
                  <dd className="font-[var(--font-inter)] font-light text-sm leading-relaxed text-[var(--color-text-secondary)] pl-[calc(0.375rem+0.75rem)]">
                    {principle.note}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
