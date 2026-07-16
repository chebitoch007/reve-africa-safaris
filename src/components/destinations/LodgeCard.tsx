/**
 * LodgeCard
 *
 * Server Component — featured lodge preview card.
 * Consistent with PackageCard visual language:
 * - Landscape gradient placeholder (ready for <Image fill>)
 * - Country badge
 * - Location meta
 * - Description
 * - Attribute tags
 *
 * Replace the gradient <div> with <Image fill> when photography is available.
 */

import { MapPin } from 'lucide-react';
import { cn } from '@/lib/design-system';
import type { FeaturedLodge } from '@/lib/constants/destinations';

interface LodgeCardProps {
  lodge: FeaturedLodge;
}

export function LodgeCard({ lodge }: LodgeCardProps) {
  const {
    name, location, country, description,
    attributes, placeholderFrom, placeholderTo,
  } = lodge;

  return (
    <article className="group flex flex-col overflow-hidden bg-[var(--color-bg-primary)] border border-[var(--color-border-light)] transition-shadow duration-[400ms] hover:shadow-[0_8px_28px_-4px_rgba(12,13,11,0.12)]">

      {/* ── Image placeholder ────────────────────────────────────
          Replace with <Image fill> when photography is available.
          Landscape ratio: 16:9 equivalent here.
      ─────────────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden shrink-0"
        style={{ aspectRatio: '16/9' }}
      >
        {/* Placeholder gradient */}
        <div
          className="absolute inset-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          style={{
            background: `linear-gradient(155deg, ${placeholderFrom} 0%, ${placeholderTo} 100%)`,
          }}
          aria-hidden="true"
        >
          {/* Noise texture */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Country badge */}
        <div className="absolute top-4 left-4 z-[1]">
          <span className={cn(
            'inline-block px-2.5 py-1.5',
            'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[8.5px]',
            'text-[var(--color-text-inverse)]',
            'border border-[rgba(255,255,255,0.25)]',
          )}>
            {country}
          </span>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-6 lg:p-7">

        {/* Location meta */}
        <div className="flex items-center gap-1.5 mb-3">
          <MapPin
            size={11}
            strokeWidth={1.5}
            className="text-[var(--color-accent-primary)] shrink-0"
            aria-hidden="true"
          />
          <span className={cn(
            'font-[var(--font-inter)] font-medium uppercase',
            'text-[9px] tracking-[0.2em] leading-none',
            'text-[var(--color-text-muted)]',
          )}>
            {location}
          </span>
        </div>

        {/* Lodge name */}
        <h3 className={cn(
          'font-[var(--font-cormorant)] font-light italic',
          'text-[1.375rem] leading-[1.2] tracking-[-0.01em]',
          'text-[var(--color-text-primary)] mb-4',
        )}>
          {name}
        </h3>

        {/* Description */}
        <p className={cn(
          'font-[var(--font-inter)] font-light text-sm leading-[1.78]',
          'text-[var(--color-text-secondary)] flex-1 mb-5',
        )}>
          {description}
        </p>

        {/* Attribute tags */}
        <ul
          className="flex flex-wrap gap-1.5"
          aria-label={`${name} features`}
        >
          {attributes.map((attr) => (
            <li
              key={attr}
              className={cn(
                'font-[var(--font-inter)] font-medium',
                'text-[9px] uppercase tracking-[0.16em] leading-none',
                'text-[var(--color-text-secondary)]',
                'border border-[var(--color-border-light)]',
                'px-2.5 py-1.5',
              )}
            >
              {attr}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
