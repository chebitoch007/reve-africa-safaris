/**
 * RÊVE AFRICA SAFARIS — Theme Constants
 *
 * Two primary surface themes: 'light' (chalk base) and 'dark' (basalt base).
 * Theme objects compose the primitive tokens into context-specific presets.
 * Components reference theme keys rather than raw color values.
 */

import { COLORS, PALETTE } from '@/lib/design-system/colors';
import { RADIUS } from '@/lib/design-system/shape';
import { SHADOW } from '@/lib/design-system/shape';

// ─────────────────────────────────────────────
// Theme surface variants
// ─────────────────────────────────────────────

export type ThemeSurface = 'light' | 'dark' | 'dune' | 'acacia';

/**
 * Describes a complete surface theme — background, text, and border colours
 * sufficient to render any component correctly on that surface.
 */
export interface SurfaceTheme {
  /** CSS background color value */
  background:      string;
  /** Secondary/card background */
  backgroundMuted: string;
  /** Primary text */
  text:            string;
  /** Secondary / supporting text */
  textMuted:       string;
  /** Accent text (e.g. price, highlight) */
  textAccent:      string;
  /** Primary border */
  border:          string;
  /** Stronger border (dividers) */
  borderStrong:    string;
}

export const SURFACE_THEMES: Record<ThemeSurface, SurfaceTheme> = {
  light: {
    background:      COLORS.background.primary,
    backgroundMuted: COLORS.background.secondary,
    text:            COLORS.text.primary,
    textMuted:       COLORS.text.secondary,
    textAccent:      COLORS.text.accent,
    border:          COLORS.border.light,
    borderStrong:    COLORS.border.default,
  },
  dark: {
    background:      COLORS.background.inverse,
    backgroundMuted: COLORS.background.dark,
    text:            COLORS.text.inverse,
    textMuted:       COLORS.text.inverseMuted,
    textAccent:      COLORS.accent.primary,
    border:          COLORS.border.inverse,
    borderStrong:    PALETTE.basalt[600],
  },
  dune: {
    background:      PALETTE.dune[100],
    backgroundMuted: PALETTE.dune[200],
    text:            PALETTE.basalt[900],
    textMuted:       PALETTE.stone[600],
    textAccent:      PALETTE.amber[600],
    border:          PALETTE.dune[200],
    borderStrong:    PALETTE.dune[300],
  },
  acacia: {
    background:      PALETTE.acacia[100],
    backgroundMuted: PALETTE.acacia[200],
    text:            PALETTE.basalt[900],
    textMuted:       PALETTE.acacia[600],
    textAccent:      PALETTE.amber[600],
    border:          PALETTE.acacia[200],
    borderStrong:    PALETTE.acacia[300],
  },
} as const;

// ─────────────────────────────────────────────
// Button variants
// ─────────────────────────────────────────────

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'ghostInverse';
export type ButtonSize    = 'sm' | 'md' | 'lg';

export interface ButtonTheme {
  background:      string;
  backgroundHover: string;
  text:            string;
  border:          string;
  radius:          string;
  shadow:          string;
}

export const BUTTON_THEMES: Record<ButtonVariant, ButtonTheme> = {
  primary: {
    background:      PALETTE.basalt[900],
    backgroundHover: PALETTE.basalt[800],
    text:            PALETTE.chalk[50],
    border:          'transparent',
    radius:          RADIUS.none,
    shadow:          SHADOW.sm,
  },
  secondary: {
    background:      'transparent',
    backgroundHover: PALETTE.chalk[200],
    text:            PALETTE.basalt[900],
    border:          PALETTE.basalt[900],
    radius:          RADIUS.none,
    shadow:          SHADOW.none,
  },
  ghost: {
    background:      'transparent',
    backgroundHover: PALETTE.chalk[200],
    text:            PALETTE.basalt[900],
    border:          'transparent',
    radius:          RADIUS.none,
    shadow:          SHADOW.none,
  },
  ghostInverse: {
    background:      'transparent',
    backgroundHover: PALETTE.basalt[700],
    text:            PALETTE.chalk[50],
    border:          'transparent',
    radius:          RADIUS.none,
    shadow:          SHADOW.none,
  },
} as const;

// ─────────────────────────────────────────────
// Z-index stacking scale
// ─────────────────────────────────────────────

export const Z_INDEX = {
  below:       -1,
  base:         0,
  raised:      10,
  dropdown:    20,
  sticky:      30,
  overlay:     40,
  modal:       50,
  toast:       60,
  tooltip:     70,
} as const;

// ─────────────────────────────────────────────
// Breakpoints (px values matching Tailwind defaults)
// ─────────────────────────────────────────────

export const BREAKPOINTS = {
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

// ─────────────────────────────────────────────
// Aspect ratios (for image containers)
// ─────────────────────────────────────────────

export const ASPECT_RATIO = {
  square:    '1 / 1',
  landscape: '4 / 3',
  widescreen:'16 / 9',
  cinema:    '21 / 9',
  portrait:  '3 / 4',
  tall:      '2 / 3',
} as const;
