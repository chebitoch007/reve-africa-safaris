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

import Image from 'next/image';
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
      <Image
        src={item.imageSrc}
        alt={item.imageAlt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
        className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
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
