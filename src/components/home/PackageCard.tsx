/**
 * PackageCard
 *
 * Safari package preview card. Server Component — CSS-only hover.
 * Reusable on the /journeys listing page.
 */

import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/design-system';
import type { PackageData } from '@/lib/constants/homepage';

interface PackageCardProps {
  pkg: PackageData;
}

export function PackageCard({ pkg }: PackageCardProps) {
  const {
    name, duration, destination, region,
    description, highlights, startingFrom,
    href, imageSrc, imageAlt, badge,
  } = pkg;

  return (
    <article className="group flex flex-col overflow-hidden bg-[var(--color-bg-primary)] border border-[var(--color-border-light)] transition-shadow duration-[400ms] hover:shadow-[0_8px_28px_-4px_rgba(12,13,11,0.12)]">

      <div className="relative h-52 overflow-hidden shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        {badge && (
          <div className="absolute top-4 left-4 z-[1]">
            <span className={cn('inline-block px-3 py-1.5 font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[9px] bg-[var(--color-accent-primary)] text-[var(--color-bg-inverse)]')}>{badge}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className={cn(
            'inline-flex items-center gap-1.5',
            'font-[var(--font-inter)] text-xs text-[var(--color-text-muted)]',
          )}>
            <Clock size={12} strokeWidth={1.5} aria-hidden="true" />
            {duration}
          </span>
          <span className={cn(
            'inline-flex items-center gap-1.5',
            'font-[var(--font-inter)] text-xs text-[var(--color-text-muted)]',
          )}>
            <MapPin size={12} strokeWidth={1.5} aria-hidden="true" />
            {destination} — {region}
          </span>
        </div>

        {/* Name */}
        <h3 className={cn(
          'font-[var(--font-cormorant)] font-light italic',
          'text-[1.5rem] leading-[1.2] tracking-[-0.01em]',
          'text-[var(--color-text-primary)] mb-3',
        )}>
          {name}
        </h3>

        {/* Description */}
        <p className={cn(
          'font-[var(--font-inter)] font-light text-sm leading-relaxed',
          'text-[var(--color-text-secondary)] mb-5',
        )}>
          {description}
        </p>

        {/* Highlights */}
        <ul className="flex flex-col gap-2 mb-6" aria-label="Package highlights">
          {highlights.map((h) => (
            <li key={h} className="inline-flex items-start gap-2">
              <Check
                size={12}
                strokeWidth={2}
                className="mt-0.5 shrink-0 text-[var(--color-accent-primary)]"
                aria-hidden="true"
              />
              <span className="font-[var(--font-inter)] text-xs text-[var(--color-text-secondary)]">
                {h}
              </span>
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-5 border-t border-[var(--color-border-light)]">
          <p className={cn(
            'font-[var(--font-inter)] text-xs',
            'text-[var(--color-accent-dark)] font-medium',
          )}>
            {startingFrom}
          </p>
          <Link
            href={href}
            className={cn(
              'inline-flex items-center gap-2',
              'px-5 py-2.5',
              'bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]',
              'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[10px]',
              'transition-all duration-[250ms]',
              'hover:bg-[var(--color-basalt-800)]',
              'focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-[var(--color-accent-primary)]',
              'focus-visible:ring-offset-2 rounded-[2px]',
            )}
            aria-label={`View ${name} itinerary`}
          >
            View Journey
            <ArrowRight size={12} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
