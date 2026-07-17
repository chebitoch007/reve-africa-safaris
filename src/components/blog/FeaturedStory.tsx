'use client';

/**
 * FeaturedStory
 *
 * Flagship article showcase. Client Component — scroll-reveal animations.
 * Surface: bg-secondary (chalk-100).
 *
 * Large editorial layout: image placeholder left (60%), editorial content
 * right at lg+. Stacks vertically on mobile with image on top.
 *
 * Replace the gradient placeholder with <Image fill> when photography
 * is available. The image should be a dramatic, wide-format editorial shot
 * relevant to the featured article's subject.
 */

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { FEATURED_STORY } from '@/lib/constants/blog';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y:       0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

export function FeaturedStory() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="featured-story-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-secondary)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* Section eyebrow */}
        <motion.div
          custom={0}
          variants={reduced ? {} : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="flex items-center gap-4 mb-12"
        >
          <span
            className="block h-px w-10 bg-[var(--color-accent-primary)]"
            aria-hidden="true"
          />
          <span
            className={cn(
              'font-[var(--font-inter)] font-medium uppercase',
              'text-[10px] tracking-[0.28em] leading-none',
              'text-[var(--color-text-muted)]',
            )}
          >
            Featured Story
          </span>
        </motion.div>

        {/* Editorial layout */}
        <article aria-label={`Featured: ${FEATURED_STORY.headline}`}>
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-0 border border-[var(--color-border-light)]">

            {/* Image panel */}
            <motion.div
              custom={0.06}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="relative overflow-hidden"
              style={{ minHeight: 'clamp(300px, 45vw, 580px)' }}
            >
              {/* ── Image placeholder ──────────────────────────────────────
                  Replace with <Image fill> when photography is available.
                  Should be a wide editorial photo matching the article topic.
              ────────────────────────────────────────────────────────────── */}
              <div
                className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                style={{
                  background: `linear-gradient(160deg, ${FEATURED_STORY.placeholderFrom} 0%, ${FEATURED_STORY.placeholderTo} 100%)`,
                }}
                role="img"
                aria-label={FEATURED_STORY.imageAlt}
              />
              {/* Noise */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
                aria-hidden="true"
              />
              {/* Category badge */}
              <div className="absolute top-6 left-6">
                <span
                  className={cn(
                    'inline-block px-3 py-1.5',
                    'bg-[var(--color-bg-deep)] bg-opacity-80',
                    'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[9px]',
                    'text-[var(--color-accent-light)]',
                  )}
                >
                  {FEATURED_STORY.categoryLabel}
                </span>
              </div>
            </motion.div>

            {/* Content panel */}
            <div className="flex flex-col justify-center p-8 lg:p-12 bg-[var(--color-bg-primary)]">

              {/* Meta */}
              <motion.div
                custom={0.1}
                variants={reduced ? {} : fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                className="flex items-center gap-5 mb-6"
              >
                <span className="flex items-center gap-1.5 text-[var(--color-text-muted)]">
                  <Clock size={11} strokeWidth={1.5} aria-hidden="true" />
                  <span className="font-[var(--font-inter)] text-[11px] tracking-[0.1em]">
                    {FEATURED_STORY.readingTime}
                  </span>
                </span>
                <span className="block h-3 w-px bg-[var(--color-border-light)]" aria-hidden="true" />
                <span className="flex items-center gap-1.5 text-[var(--color-text-muted)]">
                  <Calendar size={11} strokeWidth={1.5} aria-hidden="true" />
                  <time className="font-[var(--font-inter)] text-[11px] tracking-[0.1em]">
                    {FEATURED_STORY.publishedAt}
                  </time>
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                id="featured-story-heading"
                custom={0.16}
                variants={reduced ? {} : fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                className={cn(
                  'font-[var(--font-cormorant)] font-light italic',
                  'text-[clamp(1.65rem,2.5vw+0.4rem,2.5rem)]',
                  'leading-[1.12] tracking-[-0.015em]',
                  'text-[var(--color-text-primary)] mb-6',
                )}
              >
                {FEATURED_STORY.headline}
              </motion.h2>

              {/* Excerpt */}
              <motion.p
                custom={0.22}
                variants={reduced ? {} : fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                className={cn(
                  'font-[var(--font-inter)] font-light',
                  'text-[0.9375rem] leading-[1.8]',
                  'text-[var(--color-text-secondary)]',
                  'mb-10',
                )}
              >
                {FEATURED_STORY.excerpt}
              </motion.p>

              {/* CTA */}
              <motion.div
                custom={0.28}
                variants={reduced ? {} : fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
              >
                <Link
                  href={FEATURED_STORY.cta.href}
                  className={cn(
                    'inline-flex items-center gap-2',
                    'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[10px]',
                    'text-[var(--color-text-secondary)]',
                    'border-b border-[var(--color-border-default)] pb-0.5',
                    'transition-all duration-[250ms]',
                    'hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] hover:gap-3',
                    'focus-visible:outline-none focus-visible:ring-2',
                    'focus-visible:ring-[var(--color-accent-primary)]',
                    'focus-visible:ring-offset-2 rounded-[2px]',
                  )}
                >
                  {FEATURED_STORY.cta.label}
                  <ArrowRight size={12} strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </motion.div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
