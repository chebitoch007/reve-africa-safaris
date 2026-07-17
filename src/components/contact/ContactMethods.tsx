'use client';

/**
 * ContactMethods
 *
 * Phone, email, WhatsApp and hours. Client Component — animation.
 * Surface: bg-secondary (chalk-100).
 *
 * Four method cards in a responsive grid. Cards with href render as
 * <a> elements; the hours card (no href) renders as a <div>.
 * Static icon map consistent with BlogCategories pattern.
 */

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Phone, Mail, MessageCircle, Clock,
  type LucideProps,
} from 'lucide-react';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { CONTACT_METHODS, CONTACT_METHODS_SECTION } from '@/lib/constants/contact';

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Phone,
  Mail,
  MessageCircle,
  Clock,
};

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
      delay:    i * 0.08,
    },
  }),
};

export function ContactMethods() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="contact-methods-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-secondary)]"
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
            <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
            <span className={cn(
              'font-[var(--font-inter)] font-medium uppercase',
              'text-[10px] tracking-[0.28em] leading-none',
              'text-[var(--color-text-muted)]',
            )}>
              {CONTACT_METHODS_SECTION.eyebrow}
            </span>
          </motion.div>

          <motion.h2
            id="contact-methods-heading"
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
            {CONTACT_METHODS_SECTION.headline}
          </motion.h2>
        </div>

        {/* Method cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          role="list"
          aria-label="Contact methods"
        >
          {CONTACT_METHODS.map((method, i) => {
            const Icon    = ICON_MAP[method.icon] ?? Phone;
            const isLink  = !!method.href;

            const cardContent = (
              <>
                {/* Icon */}
                <div
                  className={cn(
                    'flex items-center justify-center w-11 h-11 mb-6',
                    'border border-[var(--color-border-default)]',
                    'text-[var(--color-accent-primary)]',
                    isLink && 'transition-colors duration-[250ms] group-hover:border-[var(--color-accent-primary)]',
                  )}
                  aria-hidden="true"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                {/* Label */}
                <p className={cn(
                  'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[10px]',
                  'text-[var(--color-text-muted)] mb-3',
                )}>
                  {method.label}
                </p>

                {/* Value */}
                <p className={cn(
                  'font-[var(--font-inter)] font-light text-[1rem] leading-snug',
                  'text-[var(--color-text-primary)] mb-3',
                  isLink && 'transition-colors duration-[250ms] group-hover:text-[var(--color-text-accent)]',
                )}>
                  {method.value}
                </p>

                {/* Detail */}
                <p className="font-[var(--font-inter)] font-light text-xs leading-relaxed text-[var(--color-text-muted)]">
                  {method.detail}
                </p>
              </>
            );

            const sharedClasses = cn(
              'flex flex-col p-8',
              'bg-[var(--color-bg-primary)]',
              'border border-[var(--color-border-light)]',
            );

            return (
              <motion.div
                key={method.id}
                role="listitem"
                custom={i}
                variants={reduced ? {} : cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
              >
                {isLink ? (
                  <Link
                    href={method.href!}
                    className={cn(
                      sharedClasses,
                      'group',
                      'transition-shadow duration-[300ms]',
                      'hover:shadow-[0_6px_24px_-4px_rgba(12,13,11,0.1)]',
                      'focus-visible:outline-none focus-visible:ring-2',
                      'focus-visible:ring-[var(--color-accent-primary)]',
                      'focus-visible:ring-offset-2',
                    )}
                    aria-label={`${method.label}: ${method.value}`}
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <div className={sharedClasses}>
                    {cardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
