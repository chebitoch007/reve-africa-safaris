'use client';

/**
 * GalleryIntro
 *
 * Gallery page editorial introduction. Client Component — scroll-reveal
 * animations. Surface: bg-primary (chalk-50).
 *
 * Two-column layout: body copy left, accent stat callout right.
 * Establishes the editorial voice of the gallery page.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { GALLERY_INTRO } from '@/lib/constants/gallery';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

export function GalleryIntro() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="gallery-intro-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-primary)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24 items-start">

          {/* Left — copy column */}
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
                {GALLERY_INTRO.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="gallery-intro-heading"
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
              {GALLERY_INTRO.headline}
            </motion.h2>

            <div className="space-y-5">
              {GALLERY_INTRO.body.map((paragraph, i) => (
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

          {/* Right — stat callout */}
          <motion.div
            custom={0.2}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className={cn(
              'lg:mt-16',
              'border-l-2 border-[var(--color-accent-primary)]',
              'pl-8 py-2',
            )}
          >
            <p className={cn(
              'font-[var(--font-cormorant)] font-light italic',
              'text-[clamp(3.5rem,6vw+0.5rem,5rem)]',
              'leading-none tracking-[-0.02em]',
              'text-[var(--color-text-accent)] mb-2',
            )}>
              {GALLERY_INTRO.stat.value}
            </p>
            <p className={cn(
              'font-[var(--font-inter)] font-medium uppercase',
              'text-[11px] tracking-[0.22em]',
              'text-[var(--color-text-primary)] mb-3',
            )}>
              {GALLERY_INTRO.stat.label}
            </p>
            <p className={cn(
              'font-[var(--font-inter)] font-light',
              'text-sm leading-relaxed',
              'text-[var(--color-text-muted)]',
            )}>
              {GALLERY_INTRO.stat.note}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
