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

import Image from 'next/image';
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
      <Image
        src={item.imageSrc}
        alt={item.imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
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
