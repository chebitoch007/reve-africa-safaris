'use client';

/**
 * GalleryCategories
 *
 * Gallery category browse section. Client Component — animation wrapper
 * around GalleryCategoryCard (Server Component).
 * Surface: bg-muted (chalk-200).
 *
 * Six categories in a 2-col (mobile) → 3-col (md+) → 6-col (lg) grid.
 * Each card is a square aspect-ratio tile.
 *
 * Includes a closing CTA nudge toward the contact page.
 */

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { GALLERY_CATEGORY_ITEMS, GALLERY_CATEGORIES_SECTION } from '@/lib/constants/gallery';
import { GalleryCategoryCard } from '@/components/gallery/GalleryCategoryCard';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const cardVariant = {
  hidden:  { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: {
      duration: DURATION.slow,
      ease:     EASE.cinematic,
      delay:    i * 0.06,
    },
  }),
};

export function GalleryCategories() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="gallery-categories-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-muted)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
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
                {GALLERY_CATEGORIES_SECTION.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="gallery-categories-heading"
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
              {GALLERY_CATEGORIES_SECTION.headline}
            </motion.h2>
          </div>

          <motion.p
            custom={0.14}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="font-[var(--font-inter)] font-light text-sm leading-relaxed text-[var(--color-text-secondary)] max-w-sm md:text-right"
          >
            {GALLERY_CATEGORIES_SECTION.body}
          </motion.p>
        </div>

        {/* Category grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
          role="list"
          aria-label="Gallery categories"
        >
          {GALLERY_CATEGORY_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              role="listitem"
              custom={i}
              variants={reduced ? {} : cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
            >
              <GalleryCategoryCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          custom={0.4}
          variants={reduced ? {} : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mt-12 flex justify-center"
        >
          <Link
            href={GALLERY_CATEGORIES_SECTION.cta.href}
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
            {GALLERY_CATEGORIES_SECTION.cta.label}
            <ArrowRight size={12} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
