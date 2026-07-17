/**
 * GalleryCategoryCard
 *
 * Individual gallery category card. Server Component — CSS-only hover.
 * Used by GalleryCategories (Client animation wrapper).
 *
 * Visual: square tile with placeholder gradient background, category label,
 * and image count. CSS hover scales the background and reveals count.
 *
 * Replace the placeholder <div> with <Image fill> when photography available.
 */

import { cn } from '@/lib/design-system';
import type { GalleryCategoryItem } from '@/lib/constants/gallery';

interface GalleryCategoryCardProps {
  item: GalleryCategoryItem;
}

export function GalleryCategoryCard({ item }: GalleryCategoryCardProps) {
  return (
    <article
      className="group relative overflow-hidden aspect-square"
      aria-label={`${item.label} — ${item.count} photographs`}
    >
      {/* ── Placeholder background ─────────────────────────────────────
          Replace with <Image fill> when photography is available.
      ────────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        style={{
          background: `linear-gradient(160deg, ${item.placeholderFrom} 0%, ${item.placeholderTo} 100%)`,
        }}
        aria-hidden="true"
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Persistent gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[rgba(12,13,11,0.72)] via-[rgba(12,13,11,0.1)] to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
        <p className={cn(
          'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[11px]',
          'text-[var(--color-text-inverse)] mb-1.5',
          'transition-transform duration-[300ms]',
          'group-hover:-translate-y-1',
        )}>
          {item.label}
        </p>
        <p className={cn(
          'font-[var(--font-inter)] font-light text-xs tracking-[0.1em]',
          'text-[rgba(255,255,255,0.5)]',
          'opacity-0 translate-y-2 transition-all duration-[300ms]',
          'group-hover:opacity-100 group-hover:translate-y-0',
        )}>
          {item.count} photographs
        </p>
      </div>
    </article>
  );
}
