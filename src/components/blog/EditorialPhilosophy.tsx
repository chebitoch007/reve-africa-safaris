'use client';

/**
 * EditorialPhilosophy
 *
 * Storytelling approach section. Client Component — scroll-reveal.
 * Surface: bg-inverse (basalt-900).
 *
 * Dark surface section with three editorial pillars. Intro text left,
 * pillar grid right at lg+. Each pillar has a numbered marker and
 * body copy — no icons, lean typographic treatment consistent with
 * the BespokeProcess and OurApproach patterns.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { PHILOSOPHY_PILLARS, EDITORIAL_PHILOSOPHY_SECTION } from '@/lib/constants/blog';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y:       0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

export function EditorialPhilosophy() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="editorial-philosophy-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-inverse)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

          {/* Left — sticky intro column */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.div
              custom={0}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="flex items-center gap-4 mb-5"
            >
              <span
                className="block h-px w-10 bg-[var(--color-accent-primary)]"
                aria-hidden="true"
              />
              <span
                className={cn(
                  'font-[var(--font-inter)] font-medium uppercase',
                  'text-[10px] tracking-[0.28em] leading-none',
                  'text-[var(--color-accent-light)]',
                )}
              >
                {EDITORIAL_PHILOSOPHY_SECTION.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="editorial-philosophy-heading"
              custom={0.08}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(2rem,3vw+0.5rem,2.75rem)]',
                'leading-[1.1] tracking-[-0.02em]',
                'text-[var(--color-text-inverse)] mb-6 whitespace-pre-line',
              )}
            >
              {EDITORIAL_PHILOSOPHY_SECTION.headline}
            </motion.h2>

            <motion.p
              custom={0.14}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="font-[var(--font-inter)] font-light text-sm leading-[1.85] text-[var(--color-text-inverse-muted)]"
            >
              {EDITORIAL_PHILOSOPHY_SECTION.intro}
            </motion.p>
          </div>

          {/* Right — pillars */}
          <div className="space-y-0 divide-y divide-[var(--color-border-inverse)]">
            {PHILOSOPHY_PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.id}
                custom={0.08 + i * 0.1}
                variants={reduced ? {} : fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                className="grid grid-cols-[3rem_1fr] gap-6 py-10 first:pt-0 last:pb-0"
              >
                {/* Number */}
                <div aria-hidden="true">
                  <span
                    className={cn(
                      'font-[var(--font-cormorant)] font-light italic',
                      'text-[2.5rem] leading-none tracking-[-0.02em]',
                      'text-[var(--color-accent-primary)] opacity-60',
                    )}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className={cn(
                      'font-[var(--font-inter)] font-medium text-[0.9375rem]',
                      'text-[var(--color-text-inverse)] mb-4',
                    )}
                  >
                    {pillar.label}
                  </h3>
                  <p
                    className={cn(
                      'font-[var(--font-inter)] font-light text-sm leading-[1.85]',
                      'text-[var(--color-text-inverse-muted)]',
                    )}
                  >
                    {pillar.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
