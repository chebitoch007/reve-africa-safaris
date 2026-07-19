'use client';

/**
 * ContactHero
 *
 * Contact page editorial hero. Client Component — Framer Motion entry
 * animations. Surface: bg-deep (basalt-950).
 *
 * Two-column layout at lg+: large headline left, subheadline right
 * with a left-rule treatment. Consistent with BlogHero layout.
 *
 * Intentionally intimate compared to other page heroes — the tone is
 * conversational rather than panoramic.
 */

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE } from '@/lib/design-system';
import { CONTACT_HERO } from '@/lib/constants/contact';

const itemVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const bgVariant = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.6, ease: EASE.cinematic } },
};

export function ContactHero() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-label="Contact — begin planning your safari"
      className="relative w-full overflow-hidden bg-[var(--color-bg-deep)]"
      style={{ minHeight: 'clamp(480px, 68vh, 760px)' }}
    >
      {/* ── Background ──────────────────────────────────────────────────
          Warm amber-green gradient evoking first light over the savannah.
          Replace with <Image fill priority> when photography is available.
      ─────────────────────────────────────────────────────────────────── */}
      <motion.div
        variants={reduced ? {} : bgVariant}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
        aria-hidden="true"
      >
        <Image
          src="/images/contact/hero/img-036-safari-planning-desk.jpg"
          alt="Safari specialist at a desk with maps and planning materials"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Header spacer */}
      <div className="h-20 lg:h-24 shrink-0" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-[1] w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end py-16 lg:py-24 pb-24 lg:pb-32">

          {/* Left — headline */}
          <div>
            <motion.div
              custom={0}
              variants={reduced ? {} : itemVariant}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4 mb-8"
            >
              <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
              <span className={cn(
                'font-[var(--font-inter)] font-medium uppercase',
                'text-[10px] tracking-[0.28em] leading-none',
                'text-[var(--color-accent-light)]',
              )}>
                {CONTACT_HERO.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              custom={0.1}
              variants={reduced ? {} : itemVariant}
              initial="hidden"
              animate="visible"
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(3.25rem,6vw+0.5rem,5.75rem)]',
                'leading-[1.02] tracking-[-0.02em]',
                'text-[var(--color-text-inverse)]',
                'whitespace-pre-line',
              )}
            >
              {CONTACT_HERO.headline}
            </motion.h1>
          </div>

          {/* Right — subheadline */}
          <div className="lg:pb-3">
            <motion.div
              custom={0.18}
              variants={reduced ? {} : itemVariant}
              initial="hidden"
              animate="visible"
              className="border-l border-[var(--color-accent-primary)] pl-6"
            >
              <p className={cn(
                'font-[var(--font-inter)] font-light',
                'text-base lg:text-lg leading-[1.75]',
                'text-[var(--color-chalk-300)]',
              )}>
                {CONTACT_HERO.subheadline}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
