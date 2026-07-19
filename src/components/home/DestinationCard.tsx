/**
 * DestinationCard
 *
 * Reusable destination preview card. Server Component.
 *
 * Designed to expand for future use on the /destinations listing page.
 * Accepts a DestinationData object and renders a rich card with:
 *   - Placeholder background (gradient, ready for next/image)
 *   - Country & region label
 *   - Tagline headline
 *   - Short description
 *   - Highlight tags
 *   - "Explore" link
 *
 * The card uses CSS hover transitions only (no Framer Motion) so it
 * remains a Server Component and renders without JS.
 */

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/design-system';
import type { DestinationData } from '@/lib/constants/homepage';

interface DestinationCardProps {
  destination: DestinationData;
  /** Controls the aspect ratio. Homepage uses 'portrait'; listing may use 'landscape'. */
  aspect?: 'portrait' | 'landscape';
  /** Lazy-loads the card with a stagger index — CSS animation-delay */
  index?: number;
}

export function DestinationCard({
  destination,
  aspect = 'portrait',
  index  = 0,
}: DestinationCardProps) {
  const { country, region, tagline, description, href, highlights, imageSrc, imageAlt } = destination;

  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden',
        'bg-[var(--color-bg-inverse)]',
        // Aspect ratio
        aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]',
      )}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* ── Background: placeholder gradient ─────────────────
          Replace the inner <div> with:
            <Image src={destination.imageSrc} alt={destination.country} fill
                   className="object-cover transition-transform duration-[800ms]
                              ease-[cubic-bezier(0.22,1,0.36,1)]
                              group-hover:scale-105" />
          when photography is available.
      ──────────────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={cn(
            'object-cover transition-transform duration-[800ms]',
            'ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105',
          )}
        />
      </div>

      {/* ── Gradient overlay — bottom-up for text legibility ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to top, rgba(12,13,11,0.92) 0%, rgba(12,13,11,0.4) 50%, rgba(12,13,11,0.1) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Country badge — top left ──────────────────────── */}
      <div className="relative z-[2] p-6 flex-shrink-0">
        <span
          className={cn(
            'inline-block px-3 py-1.5',
            'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[9px]',
            'text-[var(--color-text-inverse)]',
            'border border-[rgba(255,255,255,0.25)]',
          )}
        >
          {country}
        </span>
      </div>

      {/* ── Main card content — pinned to bottom ─────────── */}
      <div className="relative z-[2] mt-auto p-6 pt-0">
        {/* Region */}
        <p
          className={cn(
            'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[9px]',
            'text-[var(--color-accent-light)] mb-3',
          )}
        >
          {region}
        </p>

        {/* Tagline */}
        <h3
          className={cn(
            'font-[var(--font-cormorant)] font-light italic',
            'text-[clamp(1.5rem,2.5vw,2rem)]',
            'leading-[1.15] tracking-[-0.01em]',
            'text-[var(--color-text-inverse)] mb-3',
          )}
        >
          {tagline}
        </h3>

        {/* Description — visible on hover (CSS transition) */}
        <p
          className={cn(
            'font-[var(--font-inter)] font-light text-sm leading-relaxed',
            'text-[var(--color-chalk-300)] mb-5',
            'max-h-0 overflow-hidden opacity-0',
            'transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
            'group-hover:max-h-24 group-hover:opacity-100',
          )}
        >
          {description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-5">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className={cn(
                'font-[var(--font-inter)] text-[9px] font-medium uppercase tracking-[0.16em]',
                'text-[var(--color-stone-brand-300)] px-2 py-1',
                'border border-[rgba(255,255,255,0.1)]',
              )}
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Explore link */}
        <Link
          href={href}
          className={cn(
            'inline-flex items-center gap-2',
            'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[10px]',
            'text-[var(--color-text-inverse)]',
            'transition-all duration-[250ms]',
            'hover:text-[var(--color-accent-light)] hover:gap-3',
            'focus-visible:outline-none focus-visible:ring-2',
            'focus-visible:ring-[var(--color-accent-primary)]',
            'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-inverse)]',
            'rounded-[2px]',
          )}
          aria-label={`Explore ${country}`}
        >
          Explore
          <ArrowRight
            size={13}
            strokeWidth={1.5}
            className="transition-transform duration-[250ms] group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
