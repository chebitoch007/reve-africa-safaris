'use client';

/**
 * NavLink
 *
 * A styled navigation anchor that reads the current pathname
 * and applies an active state. Client Component.
 *
 * Accepts an optional `scrolled` prop (passed from the Header) so
 * header-variant links can switch to guaranteed-visible colours when
 * the navbar transitions between its transparent and solid states.
 *
 * Accessibility: uses aria-current="page" on the active item.
 */

import Link from 'next/link';
import { cn } from '@/lib/design-system';

type NavLinkVariant = 'header' | 'footer' | 'mobile';

interface NavLinkProps {
  href:       string;
  label:      string;
  isActive?:  boolean;
  variant?:   NavLinkVariant;
  /** Passed by Header to switch text colour when the navbar background changes */
  scrolled?:  boolean;
  external?:  boolean;
  className?: string;
  onClick?:   React.MouseEventHandler<HTMLAnchorElement>;
}

const VARIANT_CLASSES: Record<NavLinkVariant, string> = {
  header: cn(
    'inline-block font-[var(--font-inter)] font-medium uppercase',
    'text-[10px] tracking-[0.22em] leading-none',
    // Base colour — always white/chalk so it reads over both the hero image
    // (transparent state) and the solid basalt background (scrolled state).
    // Transition covers colour, opacity, and outline together.
    'text-[var(--color-text-inverse)]',
    'transition-colors duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
    'hover:text-[var(--color-accent-light)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-[2px]',
  ),
  footer: cn(
    'inline-block font-[var(--font-inter)] font-regular',
    'text-sm leading-none',
    'text-[var(--color-text-inverse-muted)] transition-colors duration-[250ms]',
    'hover:text-[var(--color-text-inverse)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] focus-visible:ring-offset-2 rounded-[2px]',
  ),
  mobile: cn(
    'block w-full font-[var(--font-inter)] font-medium uppercase',
    'text-[11px] tracking-[0.22em] leading-none',
    'text-[var(--color-text-inverse-muted)] transition-colors duration-[150ms]',
    'hover:text-[var(--color-text-inverse)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] focus-visible:ring-offset-2 rounded-[2px]',
  ),
};

const ACTIVE_CLASSES: Record<NavLinkVariant, string> = {
  header: 'text-[var(--color-accent-light)] hover:text-[var(--color-accent-light)]',
  footer: 'text-[var(--color-text-inverse)]',
  mobile: 'text-[var(--color-text-inverse)]',
};

export function NavLink({
  href,
  label,
  isActive  = false,
  variant   = 'header',
  scrolled  = false,
  external  = false,
  className,
  onClick,
}: NavLinkProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  // In the header variant, guarantee full opacity/contrast in both states.
  // transparent state: white over dark hero overlay — already high contrast.
  // scrolled state:    white over basalt-900 background — equally high contrast.
  // The scrolled prop is available for future divergence (e.g. a light-bg page).
  const scrolledHeaderClass =
    variant === 'header' && scrolled
      ? 'opacity-100'   // explicit — prevents any inherited opacity bleed
      : '';

  return (
    <Link
      href={href}
      className={cn(
        VARIANT_CLASSES[variant],
        isActive && ACTIVE_CLASSES[variant],
        scrolledHeaderClass,
        className,
      )}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
      {...externalProps}
    >
      {label}
    </Link>
  );
}
