/**
 * SignatureExperienceCard
 *
 * Server Component — signature experience card.
 * Landscape-format card with gradient placeholder and bottom-anchored text.
 * Consistent with DestinationCard visual language, landscape orientation.
 *
 * Replace gradient <div> with <Image fill> when photography is available.
 */

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';
import { cn } from '@/lib/design-system';
import type { SignatureExperience } from '@/lib/constants/destinations';

interface SignatureExperienceCardProps {
  experience: SignatureExperience;
}

export function SignatureExperienceCard({ experience }: SignatureExperienceCardProps) {
  const {
    title, description, detail, href,
    imageSrc, imageAlt,
  } = experience;

  return (
    <article className={cn(
      'group relative flex flex-col overflow-hidden',
      'bg-[var(--color-bg-inverse)]',
      'aspect-[4/3]',
    )}>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to top, rgba(12,13,11,0.92) 0%, rgba(12,13,11,0.2) 60%, rgba(12,13,11,0.0) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-[2] mt-auto p-6">
        {/* Location detail */}
        <div className="flex items-center gap-1.5 mb-3">
          <MapPin size={10} strokeWidth={1.5} className="text-[var(--color-accent-light)]" aria-hidden="true" />
          <span className={cn(
            'font-[var(--font-inter)] font-medium uppercase',
            'text-[8.5px] tracking-[0.2em] leading-none',
            'text-[var(--color-accent-light)]',
          )}>
            {detail}
          </span>
        </div>

        <h3 className={cn(
          'font-[var(--font-cormorant)] font-light italic',
          'text-[clamp(1.4rem,2vw+0.4rem,1.75rem)]',
          'leading-[1.15] tracking-[-0.01em]',
          'text-[var(--color-text-inverse)] mb-3',
        )}>
          {title}
        </h3>

        {/* Description — hover reveal */}
        <p className={cn(
          'font-[var(--font-inter)] font-light text-sm leading-relaxed',
          'text-[var(--color-chalk-300)] mb-4',
          'max-h-0 overflow-hidden opacity-0',
          'transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
          'group-hover:max-h-24 group-hover:opacity-100',
        )}>
          {description}
        </p>

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
          aria-label={`Enquire about ${title}`}
        >
          Enquire
          <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
