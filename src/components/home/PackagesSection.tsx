'use client';

/**
 * PackagesSection
 *
 * Featured safari packages preview. Client Component for animations.
 * PackageCard remains a Server Component.
 */

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { FEATURED_PACKAGES, PACKAGES_SECTION } from '@/lib/constants/homepage';
import { PackageCard } from '@/components/home/PackageCard';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const cardVariant = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay: i * 0.1 },
  }),
};

export function PackagesSection() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="packages-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-dune)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="max-w-xl">
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
                {PACKAGES_SECTION.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="packages-heading"
              custom={0.08}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(2rem,3.5vw+0.5rem,3rem)]',
                'leading-[1.1] tracking-[-0.02em]',
                'text-[var(--color-text-primary)] mb-4 whitespace-pre-line',
              )}
            >
              {PACKAGES_SECTION.headline}
            </motion.h2>

            <motion.p
              custom={0.16}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="font-[var(--font-inter)] font-light text-sm leading-relaxed text-[var(--color-text-secondary)]"
            >
              {PACKAGES_SECTION.body}
            </motion.p>
          </div>

          {/* View all — desktop */}
          <motion.div
            custom={0.1}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="hidden md:block shrink-0"
          >
            <Link
              href={PACKAGES_SECTION.viewAll.href}
              className={cn(
                'inline-flex items-center gap-2',
                'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[10px]',
                'text-[var(--color-text-secondary)]',
                'transition-all duration-[250ms]',
                'hover:text-[var(--color-text-primary)] hover:gap-3',
                'focus-visible:outline-none focus-visible:ring-2',
                'focus-visible:ring-[var(--color-accent-primary)]',
                'focus-visible:ring-offset-2 rounded-[2px]',
              )}
            >
              {PACKAGES_SECTION.viewAll.label}
              <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Featured safari packages"
        >
          {FEATURED_PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              custom={i}
              variants={reduced ? {} : cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              role="listitem"
            >
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </div>

        {/* View all — mobile */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href={PACKAGES_SECTION.viewAll.href}
            className={cn(
              'inline-flex items-center gap-2',
              'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[10px]',
              'text-[var(--color-text-secondary)]',
              'border-b border-[var(--color-border-default)] pb-0.5',
              'transition-all duration-[250ms]',
              'hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)]',
              'focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-[var(--color-accent-primary)]',
              'focus-visible:ring-offset-2 rounded-[2px]',
            )}
          >
            {PACKAGES_SECTION.viewAll.label}
            <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
