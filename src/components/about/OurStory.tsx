'use client';

/**
 * OurStory
 *
 * Brand founding narrative. Client Component — scroll-triggered reveals.
 * Light chalk-50 surface (bg-primary). Asymmetric editorial layout:
 * headline anchored left with numbered chapter text to the right,
 * a large pull quote spanning the full width below.
 *
 * ┌────────────────────────────────────────────────┐
 * │  [Eyebrow]                                     │
 * │  [Headline]          [Chapter paragraphs]      │
 * │                                                │
 * │  ──────────────────────────────────────────── │
 * │  [Large pull quote — Cormorant italic]         │
 * │                          — [Credit]            │
 * └────────────────────────────────────────────────┘
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { OUR_STORY } from '@/lib/constants/about';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

export function OurStory() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="our-story-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-primary)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* ── Upper grid: headline + chapters ───────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 mb-20 lg:mb-28">

          {/* Left — eyebrow + headline */}
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
                {OUR_STORY.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="our-story-heading"
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
              {OUR_STORY.headline}
            </motion.h2>
          </div>

          {/* Right — chapter paragraphs */}
          <div className="flex flex-col gap-6 justify-center">
            {OUR_STORY.chapters.map((chapter, i) => (
              <motion.p
                key={chapter.id}
                custom={0.14 + i * 0.1}
                variants={reduced ? {} : fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                className={cn(
                  'font-[var(--font-inter)] font-light',
                  'text-base lg:text-[1.0625rem] leading-[1.82]',
                  'text-[var(--color-text-secondary)]',
                )}
              >
                {chapter.body}
              </motion.p>
            ))}
          </div>
        </div>

        {/* ── Divider ────────────────────────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: DURATION.cinematic, ease: EASE.cinematic }}
          className="h-px bg-[var(--color-border-light)] mb-20 lg:mb-28"
          aria-hidden="true"
        />

        {/* ── Pull quote ─────────────────────────────────────────── */}
        <motion.blockquote
          custom={0.1}
          variants={reduced ? {} : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="relative"
          cite="#about-founders"
        >
          {/* Decorative opening mark */}
          <span
            className={cn(
              'absolute -top-4 -left-2 lg:-left-4',
              'font-[var(--font-cormorant)] font-light',
              'text-[6rem] lg:text-[8rem] leading-none',
              'text-[var(--color-accent-primary)] opacity-20',
              'select-none pointer-events-none',
            )}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <p className={cn(
            'relative font-[var(--font-cormorant)] font-light italic',
            'text-[clamp(1.75rem,3.5vw+0.5rem,3rem)]',
            'leading-[1.25] tracking-[-0.01em]',
            'text-[var(--color-text-primary)]',
            'max-w-4xl mb-8',
            'pl-6 lg:pl-10',
          )}>
            {OUR_STORY.pullQuote.text}
          </p>

          <footer className="pl-6 lg:pl-10 flex items-center gap-4">
            <span className="block h-px w-8 bg-[var(--color-accent-primary)]" aria-hidden="true" />
            <cite className={cn(
              'font-[var(--font-inter)] not-italic font-medium',
              'text-xs tracking-[0.2em] uppercase',
              'text-[var(--color-text-muted)]',
            )}>
              {OUR_STORY.pullQuote.credit}
            </cite>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
