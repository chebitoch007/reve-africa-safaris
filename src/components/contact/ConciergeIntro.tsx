'use client';

/**
 * ConciergeIntro
 *
 * Bespoke service introduction. Client Component — scroll-reveal.
 * Surface: bg-primary (chalk-50).
 *
 * Two-column layout: body copy left, commitment checklist right.
 * Establishes the personal, unhurried tone of the contact page.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { CONCIERGE_INTRO } from '@/lib/constants/contact';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

export function ConciergeIntro() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="concierge-intro-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-primary)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24 items-start">

          {/* Left — copy */}
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
                {CONCIERGE_INTRO.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="concierge-intro-heading"
              custom={0.08}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(2.25rem,3.5vw+0.5rem,3.25rem)]',
                'leading-[1.08] tracking-[-0.02em]',
                'text-[var(--color-text-primary)] mb-10 whitespace-pre-line',
              )}
            >
              {CONCIERGE_INTRO.headline}
            </motion.h2>

            <div className="space-y-5">
              {CONCIERGE_INTRO.body.map((paragraph, i) => (
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

          {/* Right — commitment list */}
          <motion.div
            custom={0.2}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="lg:mt-16"
          >
            <div className="border border-[var(--color-border-light)] p-8">
              <p className={cn(
                'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[10px]',
                'text-[var(--color-text-muted)] mb-6',
              )}>
                {CONCIERGE_INTRO.commitment.label}
              </p>
              <ul className="space-y-4" aria-label="Our service commitments">
                {CONCIERGE_INTRO.commitment.items.map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <span
                      className={cn(
                        'flex items-center justify-center w-5 h-5 shrink-0 mt-0.5',
                        'border border-[var(--color-accent-primary)]',
                        'text-[var(--color-accent-primary)]',
                      )}
                      aria-hidden="true"
                    >
                      <Check size={11} strokeWidth={2} />
                    </span>
                    <span className="font-[var(--font-inter)] font-light text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
