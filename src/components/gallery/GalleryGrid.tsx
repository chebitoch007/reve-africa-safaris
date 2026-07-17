'use client';

/**
 * GalleryGrid
 *
 * Full gallery masonry-style grid. Client Component — scroll-reveal animations.
 * Surface: bg-secondary (chalk-100).
 *
 * Grid: 3 columns at lg+, 2 at sm, 1 on mobile.
 * Auto row height: 240px — tall tiles span 2 rows, wide span 2 columns.
 * Span variants are scoped to lg: breakpoint per HANDOFF.md known issues.
 *
 * ── Animation note ──────────────────────────────────────────────────────
 * motion.div wraps the GalleryTile and carries the span class directly.
 * This means the motion wrapper IS the grid cell — GalleryTile renders
 * as position:absolute content inside it (via `relative h-full`).
 * ────────────────────────────────────────────────────────────────────────
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { GALLERY_GRID_ITEMS, GALLERY_GRID_SECTION } from '@/lib/constants/gallery';
import { GalleryTile } from '@/components/gallery/GalleryTile';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const tileVariant = {
  hidden:  { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: {
      duration: DURATION.slow,
      ease:     EASE.cinematic,
      delay:    Math.min(i * 0.04, 0.5),
    },
  }),
};

export function GalleryGrid() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="gallery-grid-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-secondary)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* Section header */}
        <div className="mb-14">
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
              {GALLERY_GRID_SECTION.eyebrow}
            </span>
          </motion.div>

          <motion.h2
            id="gallery-grid-heading"
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
            {GALLERY_GRID_SECTION.headline}
          </motion.h2>
        </div>

        {/* Grid */}
        <div
          className={cn(
            'grid gap-3',
            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
            'auto-rows-[240px]',
          )}
          role="list"
          aria-label="Safari photography collection"
        >
          {GALLERY_GRID_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              role="listitem"
              custom={i}
              variants={reduced ? {} : tileVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'relative overflow-hidden',
                item.span === 'wide' && 'lg:col-span-2',
                item.span === 'tall' && 'lg:row-span-2',
              )}
            >
              {/* GalleryTile fills the motion wrapper absolutely */}
              <GalleryTile item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
