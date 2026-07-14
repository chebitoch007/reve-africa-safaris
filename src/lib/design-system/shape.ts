/**
 * RÊVE AFRICA SAFARIS — Shape: Border Radii & Shadows
 *
 * Luxury aesthetics lean toward restraint in rounding.
 * Cards are sharp-cornered or very subtly rounded.
 * Shadows are warm-tinted and soft, never the cool grey defaults.
 */

// ─────────────────────────────────────────────
// Border radii
// ─────────────────────────────────────────────

export const RADIUS = {
  none:   '0rem',
  xs:     '0.125rem',  // 2px  — subtle chip / tag
  sm:     '0.25rem',   // 4px  — input / button
  md:     '0.5rem',    // 8px  — card
  lg:     '0.75rem',   // 12px — modal, image
  xl:     '1rem',      // 16px — large card
  '2xl':  '1.5rem',    // 24px — pill variant
  full:   '9999px',    // full pill / circle
} as const;

// ─────────────────────────────────────────────
// Shadows
// Warm-tinted shadows derived from basalt palette
// ─────────────────────────────────────────────

export const SHADOW = {
  /** Barely visible lift — e.g. hovered list item */
  xs:  '0 1px 3px 0 rgba(12, 13, 11, 0.08)',
  /** Subtle card elevation */
  sm:  '0 2px 8px 0 rgba(12, 13, 11, 0.10), 0 1px 3px -1px rgba(12, 13, 11, 0.06)',
  /** Standard card hover */
  md:  '0 4px 16px -2px rgba(12, 13, 11, 0.14), 0 2px 6px -2px rgba(12, 13, 11, 0.08)',
  /** Dropdown / popover */
  lg:  '0 8px 28px -4px rgba(12, 13, 11, 0.18), 0 4px 10px -4px rgba(12, 13, 11, 0.10)',
  /** Modal / dialog */
  xl:  '0 16px 48px -8px rgba(12, 13, 11, 0.24), 0 8px 20px -8px rgba(12, 13, 11, 0.14)',
  /** Cinematic hero card */
  '2xl': '0 28px 64px -12px rgba(12, 13, 11, 0.32), 0 12px 28px -12px rgba(12, 13, 11, 0.18)',
  /** Ambient glow for accent elements (amber) */
  accent: '0 0 0 1px rgba(212, 160, 23, 0.3), 0 4px 16px -4px rgba(212, 160, 23, 0.25)',
  /** Inner shadow for recessed elements */
  inner: 'inset 0 2px 6px 0 rgba(12, 13, 11, 0.12)',
  none:  'none',
} as const;

// ─────────────────────────────────────────────
// Focus ring (accessible keyboard focus)
// ─────────────────────────────────────────────

export const FOCUS_RING = {
  /** Default focus ring — amber on light backgrounds */
  default: '0 0 0 2px #FAF9F5, 0 0 0 4px #D4A017',
  /** Focus ring on dark backgrounds */
  inverse: '0 0 0 2px #131510, 0 0 0 4px #E8BC48',
} as const;
