/**
 * RÊVE AFRICA SAFARIS — Motion System
 *
 * Animations are cinematic and unhurried — echoing the pace of safari life.
 * Entry animations are slow and graceful. Micro-interactions are precise.
 * All Framer Motion variants and transition configs live here.
 */

import type { Transition, Variants } from 'framer-motion';

// ─────────────────────────────────────────────
// Duration constants (seconds, for Framer Motion)
// ─────────────────────────────────────────────

export const DURATION = {
  instant:  0,
  fast:     0.15,
  base:     0.25,
  moderate: 0.4,
  slow:     0.65,
  cinematic:1.1,
  sweep:    1.6,
} as const;

// ─────────────────────────────────────────────
// CSS transition durations (ms, for Tailwind / CSS)
// ─────────────────────────────────────────────

export const TRANSITION_DURATION_MS = {
  fast:     '150ms',
  base:     '250ms',
  moderate: '400ms',
  slow:     '650ms',
} as const;

// ─────────────────────────────────────────────
// Easing curves
// ─────────────────────────────────────────────

export const EASE = {
  /** Standard ease — smooth general transitions */
  standard:  [0.4, 0, 0.2, 1] as [number, number, number, number],
  /** Enter — decelerate into place */
  enter:     [0, 0, 0.2, 1]   as [number, number, number, number],
  /** Exit — accelerate out */
  exit:      [0.4, 0, 1, 1]   as [number, number, number, number],
  /** Expressive — slight overshoot, for reveals */
  expressive:[0.34, 1.56, 0.64, 1] as [number, number, number, number],
  /** Cinematic — slow editorial drift */
  cinematic: [0.22, 1, 0.36, 1] as [number, number, number, number],
  /** Linear — for continuous animations */
  linear:    [0, 0, 1, 1]      as [number, number, number, number],
} as const;

// ─────────────────────────────────────────────
// Reusable Framer Motion transition configs
// ─────────────────────────────────────────────

export const TRANSITION: Record<string, Transition> = {
  fast: {
    duration: DURATION.fast,
    ease: EASE.standard,
  },
  base: {
    duration: DURATION.base,
    ease: EASE.standard,
  },
  enter: {
    duration: DURATION.moderate,
    ease: EASE.enter,
  },
  reveal: {
    duration: DURATION.slow,
    ease: EASE.cinematic,
  },
  cinematic: {
    duration: DURATION.cinematic,
    ease: EASE.cinematic,
  },
  spring: {
    type: 'spring',
    stiffness: 260,
    damping: 28,
  },
  springGentle: {
    type: 'spring',
    stiffness: 120,
    damping: 20,
  },
} as const;

// ─────────────────────────────────────────────
// Reusable Framer Motion variant collections
// ─────────────────────────────────────────────

/** Fade in — opacity only */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: TRANSITION.reveal },
};

/** Fade up — opacity + gentle upward drift */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: TRANSITION.reveal },
};

/** Fade down — for elements dropping into place */
export const fadeDown: Variants = {
  hidden:  { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: TRANSITION.reveal },
};

/** Slide in from left */
export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: TRANSITION.cinematic },
};

/** Slide in from right */
export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: TRANSITION.cinematic },
};

/** Scale reveal — subtle grow from 95% */
export const scaleReveal: Variants = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: TRANSITION.cinematic },
};

/** Stagger container — parent that staggers its children */
export const staggerContainer: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/** Child item for stagger lists */
export const staggerItem: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: TRANSITION.reveal },
};

/** Reduced-motion safe variant — collapses all motion to opacity */
export const reducedMotionFade: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.fast } },
};

// ─────────────────────────────────────────────
// Viewport trigger defaults (for motion.div whileInView)
// ─────────────────────────────────────────────

export const VIEWPORT_ONCE = { once: true, margin: '-80px 0px' } as const;
export const VIEWPORT_REPEAT = { once: false, margin: '-60px 0px' } as const;

// ─────────────────────────────────────────────
// CSS transition strings (for Tailwind classes / inline styles)
// ─────────────────────────────────────────────

export const CSS_TRANSITION = {
  fast:     `all ${TRANSITION_DURATION_MS.fast} cubic-bezier(0.4, 0, 0.2, 1)`,
  base:     `all ${TRANSITION_DURATION_MS.base} cubic-bezier(0.4, 0, 0.2, 1)`,
  moderate: `all ${TRANSITION_DURATION_MS.moderate} cubic-bezier(0.4, 0, 0.2, 1)`,
  color:    `color ${TRANSITION_DURATION_MS.base} cubic-bezier(0.4, 0, 0.2, 1), background-color ${TRANSITION_DURATION_MS.base} cubic-bezier(0.4, 0, 0.2, 1)`,
  opacity:  `opacity ${TRANSITION_DURATION_MS.moderate} cubic-bezier(0.4, 0, 0.2, 1)`,
  transform:`transform ${TRANSITION_DURATION_MS.moderate} cubic-bezier(0.22, 1, 0.36, 1)`,
} as const;
