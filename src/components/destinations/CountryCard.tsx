/**
 * CountryCard
 *
 * Server Component — static destination country card.
 * Renders the full-overlay card: gradient placeholder ready for <Image fill>,
 * country badge, region, tagline, description (hover-reveal), highlight tags,
 * best-months badge, and an "Explore" link.
 *
 * CSS-only hover (no Framer Motion) keeps this a Server Component.
 * The Client animation wrapper (CountryShowcase) handles scroll reveals.
 *
 * Replace the gradient <div> with:
 *   <Image src={country.imageSrc} alt={country.name} fill
 *          className="object-cover transition-transform duration-[800ms]
 *                     ease-[cubic-bezier(0.22,1,0.36,1)]
 *                     group-hover:scale-105" />
 * when photography is available.
 */

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { cn } from '@/lib/design-system';
import type { DestinationCountry } from '@/lib/constants/destinations';

interface CountryCardProps {
  country: DestinationCountry;
}

export function CountryCard({ country }: CountryCardProps) {
  const {
    name, region, tagline, description,
    href, highlights, bestMonths,
    imageSrc, imageAlt,
  } = country;

  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden',
        'bg-[var(--color-bg-inverse)]',
        'aspect-[3/4]',
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to top, rgba(12,13,11,0.94) 0%, rgba(12,13,11,0.35) 50%, rgba(12,13,11,0.08) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Top badges row */}
      <div className="relative z-[2] p-5 flex items-start justify-between">
        <span className={cn(
          'inline-block px-2.5 py-1.5',
          'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[8.5px]',
          'text-[var(--color-text-inverse)]',
          'border border-[rgba(255,255,255,0.22)]',
        )}>
          {region}
        </span>

        {/* Best months badge */}
        <span className={cn(
          'inline-flex items-center gap-1.5 px-2.5 py-1.5',
          'font-[var(--font-inter)] font-medium text-[8px] uppercase tracking-[0.16em]',
          'text-[var(--color-accent-light)]',
          'border border-[rgba(212,160,23,0.35)]',
        )}>
          <Calendar size={9} strokeWidth={1.5} aria-hidden="true" />
          {bestMonths}
        </span>
      </div>

      {/* Main content — pinned to bottom */}
      <div className="relative z-[2] mt-auto p-5 pt-0">
        {/* Tagline */}
        <h3 className={cn(
          'font-[var(--font-cormorant)] font-light italic',
          'text-[clamp(1.5rem,2.5vw,2rem)]',
          'leading-[1.15] tracking-[-0.01em]',
          'text-[var(--color-text-inverse)] mb-1',
        )}>
          {name}
        </h3>

        <p className={cn(
          'font-[var(--font-inter)] font-light italic',
          'text-[11px] leading-none',
          'text-[var(--color-accent-light)] mb-4',
        )}>
          {tagline}
        </p>

        {/* Description — hover reveal */}
        <p className={cn(
          'font-[var(--font-inter)] font-light text-sm leading-relaxed',
          'text-[var(--color-chalk-300)] mb-4',
          'max-h-0 overflow-hidden opacity-0',
          'transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
          'group-hover:max-h-32 group-hover:opacity-100',
        )}>
          {description}
        </p>

        {/* Highlights */}
        <ul
          className="flex flex-wrap gap-1.5 mb-4"
          aria-label={`${name} highlights`}
        >
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className={cn(
                'font-[var(--font-inter)] text-[8.5px] font-medium uppercase tracking-[0.16em]',
                'text-[var(--color-stone-brand-300)] px-2 py-1',
                'border border-[rgba(255,255,255,0.1)]',
              )}
            >
              {highlight}
            </li>
          ))}
        </ul>

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
          aria-label={`Explore ${name} safaris`}
        >
          Explore
          <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
