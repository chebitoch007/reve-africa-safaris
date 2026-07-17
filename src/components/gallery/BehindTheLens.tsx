'use client';

/**
 * BehindTheLens
 *
 * Editorial vignettes from our guides — photographer notes alongside
 * placeholder imagery. Client Component — scroll-reveal animations.
 * Surface: bg-inverse (basalt-900, dark).
 *
 * Two side-by-side editorial cards with quotes from guides.
 * Uses blockquote + cite semantics.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { LENS_VIGNETTES, BEHIND_LENS_SECTION } from '@/lib/constants/gallery';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

export function BehindTheLens() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="behind-lens-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-inverse)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="mb-16">
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
              'text-[var(--color-accent-light)]',
            )}>
              {BEHIND_LENS_SECTION.eyebrow}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-end">
            <motion.h2
              id="behind-lens-heading"
              custom={0.08}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(2.25rem,3.5vw+0.5rem,3.25rem)]',
                'leading-[1.08] tracking-[-0.02em]',
                'text-[var(--color-text-inverse)] whitespace-pre-line',
              )}
            >
              {BEHIND_LENS_SECTION.headline}
            </motion.h2>

            <motion.p
              custom={0.14}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="font-[var(--font-inter)] font-light text-sm leading-relaxed text-[var(--color-text-inverse-muted)]"
            >
              {BEHIND_LENS_SECTION.body}
            </motion.p>
          </div>
        </div>

        {/* Vignette cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {LENS_VIGNETTES.map((vignette, i) => (
            <motion.div
              key={vignette.id}
              custom={0.1 + i * 0.1}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
            >
              <article className="relative overflow-hidden border border-[var(--color-border-inverse)]">
                {/* ── Image placeholder ──────────────────────────────────
                    Replace with <Image fill> when photography is available.
                    Should be a close-up portrait or telephoto wildlife shot.
                ────────────────────────────────────────────────────────── */}
                <div
                  className="relative h-64 overflow-hidden"
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(160deg, ${vignette.placeholderFrom} 0%, ${vignette.placeholderTo} 100%)`,
                    }}
                  />
                  {/* Noise */}
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    }}
                  />
                </div>

                {/* Quote */}
                <div className="p-8 lg:p-10">
                  <blockquote>
                    <p className={cn(
                      'font-[var(--font-cormorant)] font-light italic',
                      'text-[clamp(1.2rem,1.8vw+0.4rem,1.55rem)]',
                      'leading-[1.5] tracking-[-0.01em]',
                      'text-[var(--color-text-inverse)] mb-6',
                    )}>
                      &ldquo;{vignette.quote}&rdquo;
                    </p>
                    <footer className="flex items-center gap-3">
                      <span className="block h-px w-6 bg-[var(--color-accent-primary)]" aria-hidden="true" />
                      <cite className="not-italic">
                        <p className="font-[var(--font-inter)] font-medium text-[0.8125rem] text-[var(--color-text-inverse)]">
                          {vignette.credit}
                        </p>
                        <p className="font-[var(--font-inter)] font-light text-xs text-[var(--color-text-inverse-muted)] mt-0.5">
                          {vignette.role}
                        </p>
                      </cite>
                    </footer>
                  </blockquote>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
