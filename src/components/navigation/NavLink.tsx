/**
 * NavLink
 *
 * A styled navigation anchor that reads the current pathname
 * and applies an active state. Server Component.
 *
 * Uses Next.js `headers()` is not needed — active state is handled
 * client-side in the Header which passes `currentPath` down, or via
 * the `usePathname` hook in a Client Component context.
 *
 * This component is intentionally kept as a pure presentational
 * Server Component. Active-state logic lives in the Header (Client).
 */

import Link from 'next/link';
import { cn } from '@/lib/design-system';

type NavLinkVariant = 'header' | 'footer' | 'mobile';

interface NavLinkProps {
  href:       string;
  label:      string;
  isActive?:  boolean;
  variant?:   NavLinkVariant;
  external?:  boolean;
  className?: string;
  onClick?:   React.MouseEventHandler<HTMLAnchorElement>;
}

const VARIANT_CLASSES: Record<NavLinkVariant, string> = {
  header: cn(
    'inline-block font-[var(--font-inter)] font-medium uppercase',
    'text-[10px] tracking-[0.22em] leading-none',
    'text-[var(--color-text-inverse)] transition-colors duration-[250ms]',
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
  header: 'text-[var(--color-accent-light)]',
  footer: 'text-[var(--color-text-inverse)]',
  mobile: 'text-[var(--color-text-inverse)]',
};

export function NavLink({
  href,
  label,
  isActive  = false,
  variant   = 'header',
  external  = false,
  className,
  onClick,
}: NavLinkProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Link
      href={href}
      className={cn(
        VARIANT_CLASSES[variant],
        isActive && ACTIVE_CLASSES[variant],
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
