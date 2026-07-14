/**
 * RÊVE AFRICA SAFARIS — Typography System
 *
 * Display  → Cormorant Garamond (editorial, luxury editorial headlines)
 * Body     → Inter (clean, legible, modern utility)
 *
 * Cormorant Garamond is used with generous tracking and optical sizing.
 * It appears only at large sizes (headlines, pull-quotes, section labels).
 * Inter handles all body copy, captions, UI labels, and navigation.
 */

// ─────────────────────────────────────────────
// Font family references (match next/font variable names)
// ─────────────────────────────────────────────

export const FONT_FAMILY = {
  display: 'var(--font-cormorant)',
  body:    'var(--font-inter)',
} as const;

// ─────────────────────────────────────────────
// Font size scale (rem)
// ─────────────────────────────────────────────

export const FONT_SIZE = {
  '2xs': '0.625rem',  // 10px — micro labels
  xs:    '0.75rem',   // 12px — captions, tags
  sm:    '0.875rem',  // 14px — secondary body
  base:  '1rem',      // 16px — primary body
  md:    '1.125rem',  // 18px — large body
  lg:    '1.25rem',   // 20px — lead text
  xl:    '1.5rem',    // 24px — small display
  '2xl': '1.875rem',  // 30px — display
  '3xl': '2.25rem',   // 36px — display
  '4xl': '3rem',      // 48px — hero sub
  '5xl': '3.75rem',   // 60px — hero
  '6xl': '4.5rem',    // 72px — editorial hero
  '7xl': '6rem',      // 96px — masthead
} as const;

// ─────────────────────────────────────────────
// Line height scale
// ─────────────────────────────────────────────

export const LINE_HEIGHT = {
  none:    '1',
  tight:   '1.1',
  snug:    '1.2',
  display: '1.15',   // for large Cormorant Garamond display text
  heading: '1.3',
  normal:  '1.6',    // comfortable body reading
  relaxed: '1.75',
  loose:   '2',
} as const;

// ─────────────────────────────────────────────
// Letter spacing scale
// ─────────────────────────────────────────────

export const LETTER_SPACING = {
  tightest: '-0.04em',
  tight:    '-0.02em',
  normal:   '0em',
  wide:     '0.04em',
  wider:    '0.08em',
  widest:   '0.16em',  // for uppercase eyebrow labels
  display:  '0.24em',  // for all-caps section markers
} as const;

// ─────────────────────────────────────────────
// Font weight
// ─────────────────────────────────────────────

export const FONT_WEIGHT = {
  light:   '300',
  regular: '400',
  medium:  '500',
  semibold:'600',
  bold:    '700',
} as const;

// ─────────────────────────────────────────────
// Semantic type roles
// Maps a named role to its complete typographic recipe
// ─────────────────────────────────────────────

export type TypeRole =
  | 'masthead'
  | 'heroDisplay'
  | 'sectionDisplay'
  | 'cardDisplay'
  | 'eyebrow'
  | 'bodyLead'
  | 'bodyBase'
  | 'bodySmall'
  | 'caption'
  | 'uiLabel'
  | 'uiButton'
  | 'navLink';

export interface TypeStyle {
  fontFamily:    string;
  fontSize:      string;
  lineHeight:    string;
  letterSpacing: string;
  fontWeight:    string;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  fontStyle?:    'italic' | 'normal';
}

export const TYPE_STYLES: Record<TypeRole, TypeStyle> = {
  masthead: {
    fontFamily:    FONT_FAMILY.display,
    fontSize:      FONT_SIZE['7xl'],
    lineHeight:    LINE_HEIGHT.none,
    letterSpacing: LETTER_SPACING.tightest,
    fontWeight:    FONT_WEIGHT.light,
    fontStyle:     'italic',
  },
  heroDisplay: {
    fontFamily:    FONT_FAMILY.display,
    fontSize:      FONT_SIZE['6xl'],
    lineHeight:    LINE_HEIGHT.display,
    letterSpacing: LETTER_SPACING.tight,
    fontWeight:    FONT_WEIGHT.light,
    fontStyle:     'italic',
  },
  sectionDisplay: {
    fontFamily:    FONT_FAMILY.display,
    fontSize:      FONT_SIZE['4xl'],
    lineHeight:    LINE_HEIGHT.heading,
    letterSpacing: LETTER_SPACING.tight,
    fontWeight:    FONT_WEIGHT.light,
    fontStyle:     'italic',
  },
  cardDisplay: {
    fontFamily:    FONT_FAMILY.display,
    fontSize:      FONT_SIZE['2xl'],
    lineHeight:    LINE_HEIGHT.snug,
    letterSpacing: LETTER_SPACING.tight,
    fontWeight:    FONT_WEIGHT.regular,
    fontStyle:     'italic',
  },
  eyebrow: {
    fontFamily:    FONT_FAMILY.body,
    fontSize:      FONT_SIZE['2xs'],
    lineHeight:    LINE_HEIGHT.none,
    letterSpacing: LETTER_SPACING.display,
    fontWeight:    FONT_WEIGHT.medium,
    textTransform: 'uppercase',
  },
  bodyLead: {
    fontFamily:    FONT_FAMILY.body,
    fontSize:      FONT_SIZE.lg,
    lineHeight:    LINE_HEIGHT.relaxed,
    letterSpacing: LETTER_SPACING.normal,
    fontWeight:    FONT_WEIGHT.light,
  },
  bodyBase: {
    fontFamily:    FONT_FAMILY.body,
    fontSize:      FONT_SIZE.base,
    lineHeight:    LINE_HEIGHT.normal,
    letterSpacing: LETTER_SPACING.normal,
    fontWeight:    FONT_WEIGHT.regular,
  },
  bodySmall: {
    fontFamily:    FONT_FAMILY.body,
    fontSize:      FONT_SIZE.sm,
    lineHeight:    LINE_HEIGHT.normal,
    letterSpacing: LETTER_SPACING.normal,
    fontWeight:    FONT_WEIGHT.regular,
  },
  caption: {
    fontFamily:    FONT_FAMILY.body,
    fontSize:      FONT_SIZE.xs,
    lineHeight:    LINE_HEIGHT.normal,
    letterSpacing: LETTER_SPACING.wide,
    fontWeight:    FONT_WEIGHT.regular,
  },
  uiLabel: {
    fontFamily:    FONT_FAMILY.body,
    fontSize:      FONT_SIZE.xs,
    lineHeight:    LINE_HEIGHT.none,
    letterSpacing: LETTER_SPACING.wider,
    fontWeight:    FONT_WEIGHT.medium,
    textTransform: 'uppercase',
  },
  uiButton: {
    fontFamily:    FONT_FAMILY.body,
    fontSize:      FONT_SIZE.sm,
    lineHeight:    LINE_HEIGHT.none,
    letterSpacing: LETTER_SPACING.widest,
    fontWeight:    FONT_WEIGHT.medium,
    textTransform: 'uppercase',
  },
  navLink: {
    fontFamily:    FONT_FAMILY.body,
    fontSize:      FONT_SIZE.xs,
    lineHeight:    LINE_HEIGHT.none,
    letterSpacing: LETTER_SPACING.widest,
    fontWeight:    FONT_WEIGHT.medium,
    textTransform: 'uppercase',
  },
} as const;
