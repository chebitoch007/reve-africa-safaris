'use client';

/**
 * TestimonialsSection
 *
 * Premium testimonial display. Client Component for scroll animations.
 * Static grid layout — no carousel, no JS slider dependency.
 * Testimonials are clearly labelled as placeholders.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { TESTIMONIALS, TESTIMONIALS_SECTION } from '@/lib/constants/homepage';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay: i * 0.1 },
  }),
};

export function TestimonialsSection() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-primary)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            custom={0}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
            <span className={cn(
              'font-[var(--font-inter)] font-medium uppercase',
              'text-[10px] tracking-[0.28em] leading-none',
              'text-[var(--color-text-muted)]',
            )}>
              {TESTIMONIALS_SECTION.eyebrow}
            </span>
            <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
          </motion.div>

          <motion.h2
            id="testimonials-heading"
            custom={0.08}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className={cn(
              'font-[var(--font-cormorant)] font-light italic',
              'text-[clamp(2rem,3.5vw+0.5rem,3rem)]',
              'leading-[1.1] tracking-[-0.02em]',
              'text-[var(--color-text-primary)] whitespace-pre-line',
            )}
          >
            {TESTIMONIALS_SECTION.headline}
          </motion.h2>
        </div>

        {/* Testimonial cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
          aria-label="Guest testimonials"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.id}
              custom={i}
              variants={reduced ? {} : cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              role="listitem"
              className={cn(
                'flex flex-col p-8',
                'bg-[var(--color-bg-secondary)]',
                'border border-[var(--color-border-light)]',
              )}
            >
              {/* Stars */}
              <div
                className="flex items-center gap-1 mb-6"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star
                    key={si}
                    size={12}
                    strokeWidth={0}
                    fill="currentColor"
                    className="text-[var(--color-accent-primary)]"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote mark */}
              <Quote
                size={24}
                strokeWidth={1}
                className="text-[var(--color-accent-light)] mb-4 shrink-0"
                aria-hidden="true"
              />

              {/* Quote text */}
              <p className={cn(
                'font-[var(--font-inter)] font-light text-sm leading-[1.8]',
                'text-[var(--color-text-secondary)] flex-1 mb-8',
              )}>
                {t.quote}
              </p>

              {/* Attribution */}
              <footer className="border-t border-[var(--color-border-light)] pt-5">
                <cite className="not-italic">
                  <p className={cn(
                    'font-[var(--font-inter)] font-medium text-sm',
                    'text-[var(--color-text-primary)] mb-1',
                  )}>
                    {t.author}
                  </p>
                  <p className="font-[var(--font-inter)] text-xs text-[var(--color-text-muted)] mb-1">
                    {t.location}
                  </p>
                  <p className={cn(
                    'font-[var(--font-inter)] text-xs font-medium uppercase tracking-[0.14em]',
                    'text-[var(--color-accent-dark)]',
                  )}>
                    {t.journey}
                  </p>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* Placeholder notice */}
        <motion.p
          custom={0.3}
          variants={reduced ? {} : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className={cn(
            'mt-8 text-center',
            'font-[var(--font-inter)] text-xs italic',
            'text-[var(--color-text-muted)]',
          )}
        >
          {TESTIMONIALS_SECTION.note}
        </motion.p>
      </div>
    </section>
  );
}
