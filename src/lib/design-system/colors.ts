/**
 * RÊVE AFRICA SAFARIS — Color Palette
 *
 * Palette is drawn from the physical world of East African wilderness:
 *   Basalt   — the volcanic rock of the Rift Valley, near-black with blue undertone
 *   Chalk    — bleached savanna dust at midday, warm white with very slight yellow
 *   Dune     — dry-grass plains in late afternoon light, muted gold-sand
 *   Acacia   — the cool shadow cast by an acacia canopy, desaturated sage-green
 *   Amber    — golden hour light hitting the plains, pure warm gold accent
 *   Stone    — weathered granite of kopjes, mid-grey with warmth
 */

// ─────────────────────────────────────────────
// Primitive palette (raw hex values)
// ─────────────────────────────────────────────

export const PALETTE = {
  // Basalt — primary dark base
  basalt: {
    950: '#0C0D0B',
    900: '#131510',
    800: '#1C1F18',
    700: '#282C22',
    600: '#363B2D',
  },

  // Chalk — primary light base
  chalk: {
    50:  '#FAF9F5',
    100: '#F4F2EA',
    200: '#EBE7DA',
    300: '#DDD8C6',
    400: '#CAC2A8',
  },

  // Dune — warm neutral mid-tones
  dune: {
    100: '#F0E8D5',
    200: '#DDD0B1',
    300: '#C9B98D',
    400: '#B5A26A',
    500: '#9E8B4D',
    600: '#7D6D3A',
  },

  // Acacia — muted green, never dominant
  acacia: {
    100: '#E8EDE0',
    200: '#CDD8C0',
    300: '#A8BA98',
    400: '#839A73',
    500: '#627A53',
    600: '#495C3D',
    700: '#344229',
  },

  // Amber — golden accent, used sparingly
  amber: {
    300: '#F2D07A',
    400: '#E8BC48',
    500: '#D4A017',
    600: '#B38612',
  },

  // Stone — neutral greys
  stone: {
    200: '#E4E0D8',
    300: '#CDC8BC',
    400: '#AFA99A',
    500: '#8F887A',
    600: '#6E6860',
    700: '#4F4A44',
  },
} as const;

// ─────────────────────────────────────────────
// Semantic color tokens
// ─────────────────────────────────────────────

export const COLORS = {
  // Backgrounds
  background: {
    primary:   PALETTE.chalk[50],
    secondary: PALETTE.chalk[100],
    muted:     PALETTE.chalk[200],
    inverse:   PALETTE.basalt[900],
    dark:      PALETTE.basalt[800],
    deep:      PALETTE.basalt[950],
  },

  // Foregrounds / text
  text: {
    primary:   PALETTE.basalt[900],
    secondary: PALETTE.stone[600],
    muted:     PALETTE.stone[500],
    inverse:   PALETTE.chalk[50],
    inverseMuted: PALETTE.chalk[300],
    accent:    PALETTE.amber[500],
  },

  // Brand accent
  accent: {
    primary:   PALETTE.amber[500],
    light:     PALETTE.amber[300],
    dark:      PALETTE.amber[600],
  },

  // Borders & dividers
  border: {
    light:   PALETTE.chalk[300],
    default: PALETTE.stone[200],
    strong:  PALETTE.stone[400],
    inverse: PALETTE.basalt[700],
    accent:  PALETTE.amber[500],
  },

  // UI States
  state: {
    hover:   PALETTE.dune[100],
    active:  PALETTE.dune[200],
    focus:   PALETTE.amber[400],
    overlay: 'rgba(12, 13, 11, 0.55)',
    overlayDeep: 'rgba(12, 13, 11, 0.80)',
  },
} as const;

// ─────────────────────────────────────────────
// CSS custom property names (for global CSS)
// ─────────────────────────────────────────────

export const CSS_VARS = {
  background: {
    primary:   '--color-bg-primary',
    secondary: '--color-bg-secondary',
    muted:     '--color-bg-muted',
    inverse:   '--color-bg-inverse',
    dark:      '--color-bg-dark',
    deep:      '--color-bg-deep',
  },
  text: {
    primary:      '--color-text-primary',
    secondary:    '--color-text-secondary',
    muted:        '--color-text-muted',
    inverse:      '--color-text-inverse',
    inverseMuted: '--color-text-inverse-muted',
    accent:       '--color-text-accent',
  },
  accent: {
    primary: '--color-accent-primary',
    light:   '--color-accent-light',
    dark:    '--color-accent-dark',
  },
  border: {
    light:   '--color-border-light',
    default: '--color-border-default',
    strong:  '--color-border-strong',
    inverse: '--color-border-inverse',
    accent:  '--color-border-accent',
  },
} as const;
