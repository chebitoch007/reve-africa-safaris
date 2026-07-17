/**
 * GalleryTile
 *
 * Individual gallery tile. Server Component — CSS-only hover, no JS.
 *
 * Used by GalleryGrid (Client animation wrapper). The parent motion.div
 * handles span classes (wide/tall) and relative positioning. This component
 * renders as an absolutely positioned fill inside that wrapper.
 *
 * Replace the gradient placeholder <div> with <Image fill> when
 * photography is available.
 */

import { cn } from '@/lib/design-system';
import type { FullGalleryItem } from '@/lib/constants/gallery';

interface GalleryTileProps {
  item: FullGalleryItem;
}

export function GalleryTile({ item }: GalleryTileProps) {
  return (
    <article
      className="group absolute inset-0"
      aria-label={`${item.label}, ${item.location}`}
    >
      {/* ── Placeholder background ─────────────────────────────────────
          Replace this <div> with <Image fill> when photography is available.
          Each tile carries its own palette gradient for visual variety.
      ────────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        style={{
          background: `linear-gradient(160deg, ${item.placeholderFrom} 0%, ${item.placeholderTo} 100%)`,
        }}
        aria-hidden="true"
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Hover overlay — gradient + caption */}
      <div
        className={cn(
          'absolute inset-0 flex flex-col justify-end p-5 sm:p-6',
          'bg-gradient-to-t from-[rgba(12,13,11,0.82)] via-[rgba(12,13,11,0.18)] to-transparent',
          'opacity-0 transition-opacity duration-[350ms]',
          'group-hover:opacity-100',
        )}
      >
        <p className="font-[var(--font-inter)] text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text-inverse)] mb-1">
          {item.label}
        </p>
        <p className="font-[var(--font-inter)] text-[10px] font-light tracking-[0.12em] text-[rgba(255,255,255,0.55)]">
          {item.location}
        </p>
      </div>
    </article>
  );
}
