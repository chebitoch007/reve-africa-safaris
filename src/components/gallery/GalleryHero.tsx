'use client';

/**
 * GalleryHero
 *
 * Gallery page editorial hero. Client Component — Framer Motion entry
 * animations. Surface: bg-deep (basalt-950).
 *
 * Full-viewport dark hero with centred typographic layout. The headline is
 * displayed in large italic Cormorant with a subtle amber glow treatment,
 * establishing the visual tone for the photography page.
 *
 * Replace the gradient placeholder with <Image fill priority> when
 * photography is available — preferably a dramatic wildlife photograph.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE } from '@/lib/design-system';
import { GALLERY_HERO } from '@/lib/constants/gallery';

const itemVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y:       0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const bgVariant = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.6, ease: EASE.cinematic } },
};

export function GalleryHero() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-label="Gallery — visual stories from the field"
      className="relative w-full overflow-hidden bg-[var(--color-bg-deep)]"
      style={{ minHeight: 'clamp(560px, 80vh, 860px)' }}
    >
      {/* ── Background placeholder ─────────────────────────────────────
          Replace with <Image fill priority> when photography is available.
          Gradient evokes golden-hour Maasai Mara light.
      ────────────────────────────────────────────────────────────── */}
      <motion.div
        variants={reduced ? {} : bgVariant}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 35% 55%, rgba(158,139,77,0.22) 0%, transparent 55%),
              radial-gradient(ellipse at 70% 30%, rgba(73,92,61,0.18) 0%, transparent 50%),
              linear-gradient(165deg, #1C1F18 0%, #0C0D0B 60%, #131510 100%)
            `,
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(12,13,11,0.65) 100%)',
          }}
        />
      </motion.div>

      {/* Header spacer */}
      <div className="h-20 lg:h-24 shrink-0" aria-hidden="true" />

      {/* Content — centred */}
      <div className="relative z-[1] w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
        <div className="flex flex-col items-center justify-center text-center pt-16 pb-20 lg:pt-24 lg:pb-28">

          {/* Eyebrow */}
          <motion.div
            custom={0}
            variants={reduced ? {} : itemVariant}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
            <span className={cn(
              'font-[var(--font-inter)] font-medium uppercase',
              'text-[10px] tracking-[0.28em] leading-none',
              'text-[var(--color-accent-light)]',
            )}>
              {GALLERY_HERO.eyebrow}
            </span>
            <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={0.1}
            variants={reduced ? {} : itemVariant}
            initial="hidden"
            animate="visible"
            className={cn(
              'font-[var(--font-cormorant)] font-light italic',
              'text-[clamp(3.25rem,7vw+0.5rem,6.5rem)]',
              'leading-[1.02] tracking-[-0.02em]',
              'text-[var(--color-text-inverse)]',
              'whitespace-pre-line mb-8',
              'max-w-4xl',
            )}
          >
            {GALLERY_HERO.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={0.2}
            variants={reduced ? {} : itemVariant}
            initial="hidden"
            animate="visible"
            className={cn(
              'font-[var(--font-inter)] font-light',
              'text-base lg:text-lg leading-relaxed',
              'text-[var(--color-chalk-300)]',
              'max-w-lg',
            )}
          >
            {GALLERY_HERO.subheadline}
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            custom={0.5}
            variants={reduced ? {} : itemVariant}
            initial="hidden"
            animate="visible"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            aria-hidden="true"
          >
            <span className={cn(
              'font-[var(--font-inter)] text-[9px] uppercase tracking-[0.22em]',
              'text-[var(--color-text-inverse-muted)]',
            )}>
              Scroll
            </span>
            <span className="block h-10 w-px bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
