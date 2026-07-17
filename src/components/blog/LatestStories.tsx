'use client';

/**
 * LatestStories
 *
 * Article card grid. Client Component — animation wrapper around
 * BlogCard (Server Component). Surface: bg-primary (chalk-50).
 *
 * Responsive grid: 1 col → 2 col (md) → 3 col (lg).
 * Stagger animation: cards fade up in sequence.
 * No pagination, filtering, or search — static display only.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { LATEST_STORIES, LATEST_STORIES_SECTION } from '@/lib/constants/blog';
import { BlogCard } from '@/components/blog/BlogCard';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y:       0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const cardVariant = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y:       0,
    transition: {
      duration: DURATION.slow,
      ease:     EASE.cinematic,
      delay:    Math.min(i * 0.07, 0.42),
    },
  }),
};

export function LatestStories() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="latest-stories-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-primary)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="mb-14">
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
                'text-[var(--color-text-muted)]',
              )}
            >
              {LATEST_STORIES_SECTION.eyebrow}
            </span>
          </motion.div>

          <motion.h2
            id="latest-stories-heading"
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
            {LATEST_STORIES_SECTION.headline}
          </motion.h2>
        </div>

        {/* Card grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Latest journal articles"
        >
          {LATEST_STORIES.map((article, i) => (
            <motion.div
              key={article.id}
              role="listitem"
              custom={i}
              variants={reduced ? {} : cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
            >
              <BlogCard article={article} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
