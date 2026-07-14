/**
 * RÊVE AFRICA SAFARIS — Shared TypeScript Types
 *
 * Global utility types and common interfaces used across the project.
 * Business-domain types (destinations, itineraries, etc.) live
 * in their own domain-specific files under `src/types/`.
 */

// ─────────────────────────────────────────────
// Utility types
// ─────────────────────────────────────────────

/** Make specific keys of T required */
export type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

/** Make specific keys of T optional */
export type PartialFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/** Deeply readonly — prevents accidental mutation of token objects */
export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

/** Extract non-null, non-undefined type */
export type NonNullish<T> = T extends null | undefined ? never : T;

// ─────────────────────────────────────────────
// Common UI types
// ─────────────────────────────────────────────

/** Standard HTML element ref types */
export type DivRef     = React.RefObject<HTMLDivElement>;
export type ButtonRef  = React.RefObject<HTMLButtonElement>;
export type InputRef   = React.RefObject<HTMLInputElement>;
export type AnchorRef  = React.RefObject<HTMLAnchorElement>;

/** Component children prop shorthand */
export interface WithChildren {
  children: React.ReactNode;
}

/** Optional className prop */
export interface WithClassName {
  className?: string;
}

/** Component base props — composable */
export interface BaseComponentProps extends WithChildren, WithClassName {}

// ─────────────────────────────────────────────
// Image types
// ─────────────────────────────────────────────

export interface ImageAsset {
  src:    string;
  alt:    string;
  width?: number;
  height?: number;
  /** Focal point for object-position, e.g. "center 30%" */
  focalPoint?: string;
}

// ─────────────────────────────────────────────
// Link types
// ─────────────────────────────────────────────

export interface NavLink {
  label: string;
  href:  string;
  /** Open in new tab */
  external?: boolean;
}

export interface NavGroup {
  label:    string;
  href?:    string;
  children?: NavLink[];
}

// ─────────────────────────────────────────────
// Direction / orientation
// ─────────────────────────────────────────────

export type Direction    = 'ltr' | 'rtl';
export type Orientation  = 'horizontal' | 'vertical';
export type Alignment    = 'left' | 'center' | 'right';
export type VerticalAlign= 'top' | 'middle' | 'bottom';
export type Size         = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// ─────────────────────────────────────────────
// API / data types
// ─────────────────────────────────────────────

export interface ApiResponse<T> {
  data:    T;
  status:  number;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total:    number;
  page:     number;
  pageSize: number;
  hasMore:  boolean;
}
