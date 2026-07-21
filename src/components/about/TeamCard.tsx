/**
 * TeamCard
 *
 * Server Component — static team member card.
 * Renders a portrait placeholder, name, role, origin, bio and expertise tags.
 * Client animation wrapper (MeetTheTeam) handles motion.
 *
 * Image placeholder: replace the <div> with <Image fill> when photography
 * is available. Each member has unique placeholderFrom/placeholderTo values.
 */

import Image from 'next/image';
import { cn } from '@/lib/design-system';
import { MapPin } from 'lucide-react';
import type { TeamMember } from '@/lib/constants/about';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden bg-[var(--color-bg-dune)]">
      {/* ── Portrait placeholder ─────────────────────────────────
          Replace this <div> with <Image fill> when photography available.
          Portrait ratio: 3:4 (portrait orientation).
      ────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden shrink-0" style={{ aspectRatio: '3/4' }}>
        <Image
          src={member.imageSrc}
          alt={member.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />

        {/* Origin tag — overlaid bottom-left */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <MapPin
            size={11}
            strokeWidth={1.5}
            className="text-[var(--color-accent-light)] shrink-0"
            aria-hidden="true"
          />
          <span className={cn(
            'font-[var(--font-inter)] font-medium uppercase',
            'text-[9px] tracking-[0.22em] leading-none',
            'text-[var(--color-chalk-300)]',
          )}>
            {member.origin}
          </span>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-6 lg:p-7">
        {/* Name */}
        <h3 className={cn(
          'font-[var(--font-cormorant)] font-light italic',
          'text-[1.375rem] leading-[1.2] tracking-[-0.01em]',
          'text-[var(--color-text-primary)]',
          'mb-1',
        )}>
          {member.name}
        </h3>

        {/* Role */}
        <p className={cn(
          'font-[var(--font-inter)] font-medium',
          'text-[0.6875rem] uppercase tracking-[0.2em] leading-none',
          'text-[var(--color-text-muted)]',
          'mb-5',
        )}>
          {member.role}
        </p>

        {/* Bio */}
        <p className={cn(
          'font-[var(--font-inter)] font-light',
          'text-sm leading-[1.75]',
          'text-[var(--color-text-secondary)]',
          'mb-6 flex-1',
        )}>
          {member.bio}
        </p>

        {/* Expertise tags */}
        <ul
          className="flex flex-wrap gap-2"
          aria-label={`${member.name}'s areas of expertise`}
        >
          {member.expertise.map((tag) => (
            <li
              key={tag}
              className={cn(
                'font-[var(--font-inter)] font-medium',
                'text-[10px] uppercase tracking-[0.18em] leading-none',
                'text-[var(--color-text-secondary)]',
                'border border-[var(--color-border-light)]',
                'px-3 py-1.5',
              )}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
