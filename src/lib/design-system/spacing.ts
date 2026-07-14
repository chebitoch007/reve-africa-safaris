/**
 * RÊVE AFRICA SAFARIS — Spacing Scale
 *
 * Built on a base-4 scale with additional named semantic tokens
 * for section padding, container widths, and gutters.
 * Luxury layouts breathe — generous spacing is intentional.
 */

// ─────────────────────────────────────────────
// Base spacing scale (rem)
// ─────────────────────────────────────────────

export const SPACING = {
  0:    '0rem',
  px:   '0.0625rem', // 1px
  0.5:  '0.125rem',  // 2px
  1:    '0.25rem',   // 4px
  1.5:  '0.375rem',  // 6px
  2:    '0.5rem',    // 8px
  2.5:  '0.625rem',  // 10px
  3:    '0.75rem',   // 12px
  3.5:  '0.875rem',  // 14px
  4:    '1rem',      // 16px
  5:    '1.25rem',   // 20px
  6:    '1.5rem',    // 24px
  7:    '1.75rem',   // 28px
  8:    '2rem',      // 32px
  9:    '2.25rem',   // 36px
  10:   '2.5rem',    // 40px
  11:   '2.75rem',   // 44px
  12:   '3rem',      // 48px
  14:   '3.5rem',    // 56px
  16:   '4rem',      // 64px
  18:   '4.5rem',    // 72px
  20:   '5rem',      // 80px
  24:   '6rem',      // 96px
  28:   '7rem',      // 112px
  32:   '8rem',      // 128px
  36:   '9rem',      // 144px
  40:   '10rem',     // 160px
  48:   '12rem',     // 192px
  56:   '14rem',     // 224px
  64:   '16rem',     // 256px
} as const;

// ─────────────────────────────────────────────
// Semantic spacing tokens
// ─────────────────────────────────────────────

export const SECTION_PADDING = {
  /** Horizontal page padding — mobile */
  x_mobile:  SPACING[5],    // 20px
  /** Horizontal page padding — tablet */
  x_tablet:  SPACING[8],    // 32px
  /** Horizontal page padding — desktop */
  x_desktop: SPACING[16],   // 64px

  /** Section vertical padding — compact (e.g. banners) */
  y_sm:  SPACING[12],  // 48px
  /** Section vertical padding — standard */
  y_md:  SPACING[24],  // 96px
  /** Section vertical padding — generous (hero, major sections) */
  y_lg:  SPACING[36],  // 144px
  /** Section vertical padding — hero / masthead */
  y_xl:  SPACING[48],  // 192px
} as const;

// ─────────────────────────────────────────────
// Container max-widths
// ─────────────────────────────────────────────

export const CONTAINER = {
  xs:      '20rem',    // 320px
  sm:      '38rem',    // 608px  — narrow editorial
  md:      '56rem',    // 896px  — standard content
  lg:      '72rem',    // 1152px — wide content
  xl:      '80rem',    // 1280px — full layout
  '2xl':   '90rem',    // 1440px — ultra-wide / cinematic
  full:    '100%',
} as const;

// ─────────────────────────────────────────────
// Grid gutter scale
// ─────────────────────────────────────────────

export const GUTTER = {
  sm:  SPACING[4],   // 16px
  md:  SPACING[6],   // 24px
  lg:  SPACING[8],   // 32px
  xl:  SPACING[12],  // 48px
} as const;
