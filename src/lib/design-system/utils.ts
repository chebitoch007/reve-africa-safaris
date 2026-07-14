/**
 * RÊVE AFRICA SAFARIS — Design System Utility Helpers
 *
 * Pure, typed utility functions used across the design system.
 * No UI logic here — only token manipulation and class-building helpers.
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ThemeSurface } from '@/lib/design-system/theme';
import type { TypeRole, TypeStyle } from '@/lib/design-system/typography';
import { TYPE_STYLES } from '@/lib/design-system/typography';

// ─────────────────────────────────────────────
// cn — class name merge utility
// Combines clsx conditionals with tailwind-merge deduplication
// ─────────────────────────────────────────────

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// ─────────────────────────────────────────────
// getTypeStyle — retrieve a TypeStyle by role
// ─────────────────────────────────────────────

export function getTypeStyle(role: TypeRole): TypeStyle {
  return TYPE_STYLES[role];
}

/**
 * Converts a TypeStyle to an inline React `style` object.
 * Useful for components that cannot use Tailwind for typography.
 */
export function typeStyleToCSS(role: TypeRole): React.CSSProperties {
  const style = TYPE_STYLES[role];
  return {
    fontFamily:    style.fontFamily,
    fontSize:      style.fontSize,
    lineHeight:    style.lineHeight,
    letterSpacing: style.letterSpacing,
    fontWeight:    style.fontWeight,
    ...(style.textTransform && { textTransform: style.textTransform }),
    ...(style.fontStyle     && { fontStyle:     style.fontStyle }),
  };
}

// ─────────────────────────────────────────────
// getSurfaceClass — Tailwind class string for a surface
// ─────────────────────────────────────────────

/**
 * Returns the Tailwind background + text class pair for a given theme surface.
 * Surfaces are configured as CSS custom properties in globals.css.
 */
export function getSurfaceClass(surface: ThemeSurface): string {
  const map: Record<ThemeSurface, string> = {
    light:  'bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]',
    dark:   'bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]',
    dune:   'bg-[var(--color-bg-dune)] text-[var(--color-text-primary)]',
    acacia: 'bg-[var(--color-bg-acacia)] text-[var(--color-text-primary)]',
  };
  return map[surface];
}

// ─────────────────────────────────────────────
// clampPx — CSS clamp helper
// ─────────────────────────────────────────────

/**
 * Generates a CSS clamp() string for fluid typography or spacing.
 *
 * @param minPx  — minimum size in px
 * @param maxPx  — maximum size in px
 * @param minVw  — viewport width where min applies (default 375)
 * @param maxVw  — viewport width where max applies (default 1440)
 */
export function clampPx(
  minPx: number,
  maxPx: number,
  minVw = 375,
  maxVw = 1440,
): string {
  const slope     = (maxPx - minPx) / (maxVw - minVw);
  const intercept = minPx - slope * minVw;
  const preferred = `${(slope * 100).toFixed(4)}vw + ${intercept.toFixed(4)}px`;
  return `clamp(${minPx}px, ${preferred}, ${maxPx}px)`;
}

// ─────────────────────────────────────────────
// formatCurrency — consistent price display
// ─────────────────────────────────────────────

/**
 * Formats a numeric amount as a luxury price string.
 * e.g. 12500 → "USD 12,500" or "€12,500"
 */
export function formatCurrency(
  amount: number,
  currency = 'USD',
  locale   = 'en-US',
): string {
  return new Intl.NumberFormat(locale, {
    style:    'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

// ─────────────────────────────────────────────
// focusRingClass — accessible focus ring
// ─────────────────────────────────────────────

/**
 * Returns Tailwind classes for consistent, branded focus rings.
 * Always include on interactive elements for keyboard accessibility.
 */
export function focusRingClass(onDark = false): string {
  if (onDark) {
    return 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#131510]';
  }
  return 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F5]';
}
