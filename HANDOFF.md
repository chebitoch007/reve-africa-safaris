# RÊVE AFRICA SAFARIS — Project Handoff Document

> **Purpose:** This document gives a new Claude session everything needed to
> continue development without any prior context. Read it fully before writing
> a single line of code.

---

## 1. Project Overview

**Client:** Rêve Africa Safaris
**Type:** Production-ready luxury safari website
**Canonical repository:** `https://github.com/chebitoch007/reve-africa-safaris.git`
**Branch:** `main`

GitHub is the **single source of truth**. Always clone/pull from `main` at the
start of each session. Never assume local files from a previous session exist.

---

## 2. Milestone Status

| Milestone | Status | Commit |
|-----------|--------|--------|
| 1 — Design System | ✅ Complete | `5a71208` |
| 2 — Global Layout & Navigation | ✅ Complete | `5a71208` |
| 3A — Homepage Foundation | ✅ Complete | `5a71208` |
| 3B — Homepage Completion | ✅ Complete | `79eb883` |
| **4 — About Page** | ⬜ Next | — |
| 5 — Destinations Page | ⬜ Pending | — |
| 6 — Journeys / Packages Page | ⬜ Pending | — |
| 7 — Experiences Page | ⬜ Pending | — |
| 8 — Contact Page | ⬜ Pending | — |
| 9 — Gallery Page | ⬜ Pending | — |

---

## 3. Tech Stack

| Tool | Version | Notes |
|------|---------|-------|
| Next.js | 16.2.10 | App Router, no Pages Router |
| React | 19.2.4 | |
| TypeScript | ^5 | strict mode, no `any` |
| Tailwind CSS | ^4 | **CSS-first config** — no `tailwind.config.ts` |
| Framer Motion | ^12 | animations only |
| Lucide React | ^1.24.0 | icons — brand icons NOT included |
| clsx + tailwind-merge | latest | used via `cn()` utility |
| next/font/local | built-in | self-hosted woff2 fonts |

**Tailwind v4 is CSS-first.** All theme tokens are registered in
`src/app/globals.css` inside `@theme {}`. There is no `tailwind.config.ts`.
Do not create one.

---

## 4. Project Structure

```
src/
├── app/
│   ├── globals.css              ← Tailwind v4 @theme + global resets
│   ├── layout.tsx               ← Root layout: fonts, Header, Footer, <main>
│   ├── page.tsx                 ← Homepage (11 sections)
│   ├── about/page.tsx           ← Placeholder (to be built — Milestone 4)
│   ├── blog/page.tsx            ← Placeholder
│   ├── contact/page.tsx         ← Placeholder
│   ├── destinations/page.tsx    ← Placeholder
│   ├── gallery/page.tsx         ← Placeholder
│   └── packages/page.tsx        ← Placeholder
│
├── components/
│   ├── footer/
│   │   ├── Footer.tsx           ← Server Component, global footer
│   │   └── FooterColumn.tsx     ← Server Component, reusable nav column
│   ├── home/
│   │   ├── Hero.tsx             ← Client (Framer Motion entry animations)
│   │   ├── Introduction.tsx     ← Client (whileInView)
│   │   ├── DestinationCard.tsx  ← Server Component
│   │   ├── DestinationsPreview.tsx ← Client (animation wrapper)
│   │   ├── CTASection.tsx       ← Client
│   │   ├── ExperienceCard.tsx   ← Server Component
│   │   ├── ExperiencesSection.tsx ← Client
│   │   ├── PackageCard.tsx      ← Server Component (reusable on /journeys)
│   │   ├── PackagesSection.tsx  ← Client
│   │   ├── WhyUsSection.tsx     ← Client
│   │   ├── StatisticsSection.tsx ← Client
│   │   ├── TestimonialsSection.tsx ← Client
│   │   ├── GalleryPreview.tsx   ← Server Component (CSS-only hover)
│   │   ├── FAQSection.tsx       ← Client (accordion state)
│   │   └── FinalCTA.tsx         ← Client
│   ├── layout/
│   │   ├── Container.tsx        ← Server Component, max-width wrapper
│   │   └── Section.tsx          ← Server Component, semantic section + padding
│   ├── navigation/
│   │   ├── Header.tsx           ← Client (scroll detection, mobile menu)
│   │   ├── MobileMenu.tsx       ← Client (focus trap, scroll lock)
│   │   └── NavLink.tsx          ← Server Component, styled anchor
│   └── ui/
│       └── Logo.tsx             ← Server Component, wordmark
│
├── lib/
│   ├── constants/
│   │   ├── homepage.ts          ← All homepage content data
│   │   └── navigation.ts        ← Nav links, footer columns, social links
│   ├── design-system/
│   │   ├── index.ts             ← Barrel export (import from '@/lib/design-system')
│   │   ├── colors.ts            ← PALETTE + COLORS + CSS_VARS
│   │   ├── typography.ts        ← FONT_SIZE, LINE_HEIGHT, TYPE_STYLES
│   │   ├── spacing.ts           ← SPACING, SECTION_PADDING, CONTAINER
│   │   ├── shape.ts             ← RADIUS, SHADOW, FOCUS_RING
│   │   ├── motion.ts            ← DURATION, EASE, TRANSITION, Framer variants
│   │   ├── theme.ts             ← SURFACE_THEMES, BUTTON_THEMES, Z_INDEX
│   │   └── utils.ts             ← cn(), typeStyleToCSS(), clampPx(), etc.
│   ├── fonts.ts                 ← next/font/local config for Cormorant + Inter
│   └── metadata.ts              ← BASE_METADATA, VIEWPORT, buildPageMetadata()
│
├── styles/
│   └── globals.css              ← Legacy file from original scaffold (ignore)
│
└── types/
    └── index.ts                 ← Shared TS types: NavLink, NavGroup, ImageAsset, etc.
```

**Path alias:** `@/*` maps to `./src/*` (set in `tsconfig.json`).

---

## 5. Design System

### 5.1 Colour Palette

The palette is drawn from East African landscape materials. Never substitute
generic grey/blue defaults.

```
Basalt  — near-black with blue undertone (primary dark backgrounds)
  basalt-950: #0C0D0B  ← --color-bg-deep
  basalt-900: #131510  ← --color-bg-inverse, --color-text-primary
  basalt-800: #1C1F18  ← --color-bg-dark
  basalt-700: #282C22  ← --color-border-inverse
  basalt-600: #363B2D

Chalk   — warm white (primary light backgrounds)
  chalk-50:  #FAF9F5  ← --color-bg-primary, --color-text-inverse
  chalk-100: #F4F2EA  ← --color-bg-secondary
  chalk-200: #EBE7DA  ← --color-bg-muted
  chalk-300: #DDD8C6  ← --color-text-inverse-muted, --color-border-light

Dune    — dry-grass gold neutrals
  dune-100: #F0E8D5  ← --color-bg-dune
  dune-500: #9E8B4D
  dune-600: #7D6D3A

Acacia  — muted sage green
  acacia-100: #E8EDE0 ← --color-bg-acacia
  acacia-500: #627A53
  acacia-600: #495C3D

Amber   — golden hour accent (USE SPARINGLY)
  amber-300: #F2D07A  ← --color-accent-light
  amber-500: #D4A017  ← --color-accent-primary (the brand colour)
  amber-600: #B38612  ← --color-accent-dark

Stone   — warm mid-greys
  stone-500: #8F887A  ← --color-text-muted
  stone-600: #6E6860  ← --color-text-secondary
```

### 5.2 CSS Custom Properties (the ones used most)

Always use CSS vars in components, not raw hex values:

```css
/* Backgrounds */
var(--color-bg-primary)    /* chalk-50  #FAF9F5 */
var(--color-bg-secondary)  /* chalk-100 #F4F2EA */
var(--color-bg-muted)      /* chalk-200 #EBE7DA */
var(--color-bg-inverse)    /* basalt-900 #131510 */
var(--color-bg-dark)       /* basalt-800 #1C1F18 */
var(--color-bg-deep)       /* basalt-950 #0C0D0B */
var(--color-bg-dune)       /* dune-100  #F0E8D5 */
var(--color-bg-acacia)     /* acacia-100 #E8EDE0 */

/* Text */
var(--color-text-primary)       /* basalt-900 */
var(--color-text-secondary)     /* stone-600  */
var(--color-text-muted)         /* stone-500  */
var(--color-text-inverse)       /* chalk-50   */
var(--color-text-inverse-muted) /* chalk-300  */
var(--color-text-accent)        /* amber-500  */

/* Accent */
var(--color-accent-primary)  /* amber-500 #D4A017 */
var(--color-accent-light)    /* amber-300 #F2D07A */
var(--color-accent-dark)     /* amber-600 #B38612 */

/* Borders */
var(--color-border-light)    /* chalk-300 */
var(--color-border-default)  /* stone-200 */
var(--color-border-strong)   /* stone-400 */
var(--color-border-inverse)  /* basalt-700 */
var(--color-border-accent)   /* amber-500 */

/* Named palette colours (also available as Tailwind utilities) */
var(--color-chalk-50) through var(--color-chalk-400)
var(--color-basalt-950) through var(--color-basalt-600)
var(--color-stone-brand-200) through var(--color-stone-brand-700)
```

### 5.3 Typography

Two fonts only. Self-hosted woff2 files in `public/fonts/`.

```
Display: Cormorant Garamond
  CSS var: var(--font-cormorant)
  Usage:   All h1–h4 headings, large display text, pull quotes
  Style:   font-weight 300, font-style italic (primary treatment)
  Class:   font-[var(--font-cormorant)] font-light italic

Body: Inter
  CSS var: var(--font-inter)
  Usage:   All body copy, UI labels, navigation, captions, buttons
  Style:   font-weight 300–500
  Class:   font-[var(--font-inter)]
```

**Eyebrow labels** (section markers above headlines):
```
font-[var(--font-inter)] font-medium uppercase text-[10px] tracking-[0.28em]
color: var(--color-text-muted) on light, var(--color-accent-light) on dark
Always preceded by: <span class="block h-px w-10 bg-[var(--color-accent-primary)]">
```

**Display headlines:**
```
font-[var(--font-cormorant)] font-light italic
font-size: text-[clamp(2rem, 3.5vw+0.5rem, 3rem)]  ← section headlines
font-size: text-[clamp(3.25rem, 7vw+0.5rem, 6rem)]  ← hero headline
leading-[1.05] to leading-[1.15]
tracking-[-0.02em]
whitespace-pre-line (for multi-line strings with \n)
```

### 5.4 Spacing / Container

Page content uses inline max-width + padding (not the `Container` component)
because most sections need full-bleed backgrounds:

```jsx
<div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
  {/* content */}
</div>
```

The `Container` and `Section` components in `src/components/layout/` are also
available but are used less frequently than the inline pattern above.

Section vertical padding standard:
```
py-24 md:py-36   ← standard sections
py-20 md:py-28   ← compact sections (statistics)
py-28 md:py-40   ← prominent CTAs
```

### 5.5 Motion System

Import from `@/lib/design-system`:

```ts
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';

DURATION.cinematic = 1.1s  ← standard scroll reveals
DURATION.slow      = 0.65s ← faster secondary items
EASE.cinematic     = [0.22, 1, 0.36, 1]
VIEWPORT_ONCE      = { once: true, margin: '-80px 0px' }
```

**Standard scroll-reveal pattern** (used in every section):
```tsx
const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

// Usage:
<motion.div
  custom={0.08}
  variants={reduced ? {} : fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={VIEWPORT_ONCE}
>
```

**Always check `useReducedMotion()`:**
```tsx
const reduced = useReducedMotion();
variants={reduced ? {} : myVariant}
```

### 5.6 Focus / Accessibility Pattern

Every interactive element uses this focus ring pattern:
```
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-[var(--color-accent-primary)]
focus-visible:ring-offset-2
focus-visible:ring-offset-[var(--color-bg-primary)]  ← match surface bg
rounded-[2px]
```
Change `ring-offset-*` colour to match the surface the element sits on.

---

## 6. Engineering Rules (Non-Negotiable)

1. **TypeScript strict mode.** No `any`. No type assertions without justification.

2. **Server Components by default.** Only add `'use client'` when the component
   genuinely needs `useState`, `useEffect`, browser APIs, or Framer Motion hooks.
   Cards, columns, static layouts → Server Components.
   Animations, accordions, menus, scroll detection → Client Components.

3. **Smallest possible `'use client'` boundary.** If only one child needs
   interactivity, make that child the Client Component. Keep the parent as Server.

4. **All content data lives in `src/lib/constants/`.** Never hardcode copy,
   labels, or business data inside JSX. If building a new page, create
   `src/lib/constants/{pagename}.ts` first.

5. **No duplicated logic.** If a pattern appears twice, it belongs in a shared
   component or utility.

6. **No abstractions used only once.** Build it inline the first time;
   extract when genuinely reused.

7. **Absolute imports only.** Always `@/components/...`, never `../../`.

8. **`cn()` for all className composition:**
   ```ts
   import { cn } from '@/lib/design-system';
   ```

9. **No raw hex values in JSX.** Use CSS custom properties:
   `text-[var(--color-text-primary)]` not `text-[#131510]`.
   Exception: placeholder gradient backgrounds where a specific colour
   is needed per-item (see DestinationCard pattern).

10. **Icons:** Lucide React is available. Brand/social icons (Instagram,
    Facebook, YouTube) are NOT in this version — use inline SVG instead
    (see `Footer.tsx` for the established pattern).

11. **No `tailwind.config.ts`.** Tailwind v4 uses CSS-first config via
    `@theme {}` in `globals.css`. Do not create a config file.

12. **Accessibility:** Every section needs `aria-labelledby` pointing to its
    `<h2>`. Interactive elements need `aria-label`, `aria-expanded`,
    `aria-controls` as appropriate. Use semantic HTML (`<nav>`, `<article>`,
    `<dl>`, `<blockquote>`, etc.).

---

## 7. Established Component Patterns

### Section Structure
Every homepage section follows this structure:
```tsx
<section aria-labelledby="section-heading" className="py-24 md:py-36 bg-[var(--color-bg-{surface})]">
  <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
    {/* Eyebrow */}
    <div className="flex items-center gap-4 mb-5">
      <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
      <span className="font-[var(--font-inter)] font-medium uppercase text-[10px] tracking-[0.28em] leading-none text-[var(--color-text-muted)]">
        Eyebrow Label
      </span>
    </div>
    {/* Headline */}
    <h2 id="section-heading" className="font-[var(--font-cormorant)] font-light italic ...">
      Section Headline
    </h2>
  </div>
</section>
```

### Section Surface Alternation (homepage pattern)
```
Hero          → dark (transparent over image, effectively)
Introduction  → bg-primary (chalk-50)
Destinations  → bg-secondary (chalk-100)
Experiences   → bg-primary
Packages      → bg-dune
WhyUs         → bg-inverse (basalt dark)
Statistics    → bg-secondary
Testimonials  → bg-primary
Gallery       → bg-muted
FAQ           → bg-primary
FinalCTA      → bg-deep (darkest basalt)
Footer        → bg-inverse
```
Follow this alternation rhythm on new pages — avoid two identical surfaces
adjacent to each other.

### Card Pattern (Server Component)
```tsx
<article className="group relative flex flex-col overflow-hidden bg-[var(--color-bg-primary)] border border-[var(--color-border-light)] transition-shadow duration-[400ms] hover:shadow-[0_8px_28px_-4px_rgba(12,13,11,0.12)]">
  {/* Image placeholder: replace <div> with <Image fill> when photography available */}
  <div className="relative h-52 overflow-hidden shrink-0" style={{ background: `linear-gradient(...)` }}>
    {/* Always add noise texture overlay */}
    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,...")` }} />
  </div>
  <div className="flex flex-col flex-1 p-7">
    {/* content */}
  </div>
</article>
```

### Animation Wrapper Pattern (Client Component around Server cards)
```tsx
// Client parent wraps Server card children with motion.div
{items.map((item, i) => (
  <motion.div
    key={item.id}
    custom={i}
    variants={reduced ? {} : cardVariant}
    initial="hidden"
    whileInView="visible"
    viewport={VIEWPORT_ONCE}
  >
    <ServerCard item={item} />  {/* Server Component */}
  </motion.div>
))}
```

### Icon Resolution Pattern (static map, no dynamic imports)
```tsx
import { Crown, Camera, Users, type LucideProps } from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Crown, Camera, Users,
};

// In render:
const Icon = ICON_MAP[item.icon] ?? Crown;
<Icon size={18} strokeWidth={1.5} aria-hidden="true" />
```

### CTA Button Styles
Primary (dark surface):
```
bg-[var(--color-accent-primary)] text-[var(--color-bg-inverse)]
hover:bg-[var(--color-accent-light)]
px-8 py-4 font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[11px]
```

Primary (light surface):
```
bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]
hover:bg-[var(--color-basalt-800)]
```

Secondary / ghost (dark surface):
```
border border-[rgba(255,255,255,0.2)]
text-[var(--color-text-inverse)]
hover:border-[rgba(255,255,255,0.55)] hover:bg-[rgba(255,255,255,0.05)]
```

All buttons: no border-radius (sharp corners are intentional — luxury aesthetic).

### Placeholder Background Pattern
All image placeholders use this pattern. Document where to swap in real photos:
```tsx
{/* Replace this <div> with <Image fill priority> when photography available */}
<div
  className="absolute inset-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
  style={{ background: `linear-gradient(160deg, ${item.placeholderFrom} 0%, ${item.placeholderTo} 100%)` }}
>
  {/* Noise texture */}
  <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,...")` }} />
</div>
```

---

## 8. Navigation & Routing

Primary nav (from `src/lib/constants/navigation.ts`):
```
/destinations    → Kenya, Tanzania, Botswana, Rwanda, Zimbabwe, Namibia
/experiences     → Game Drives, Gorilla Trekking, Ballooning, Walking, Conservation, Fly-in
/journeys        → (packages listing)
/about           → (about page)
/contact         → (contact page)
```

**Header behaviour:**
- Fixed position, `z-[30]`
- Transparent + inverse (light) text when at top of page
- Solid `bg-[var(--color-bg-inverse)]` after scrolling 64px
- Height: 80px (top) → 64px (scrolled) on mobile; 96px → 64px on desktop
- All hero sections must account for the header height with a spacer div:
  ```jsx
  <div className="h-20 lg:h-24 shrink-0" aria-hidden="true" />
  ```

---

## 9. GitHub Workflow

After each milestone:
1. `git add` only the files for that milestone
2. Single conventional commit: `feat: {description}`
3. Request PAT from user — it will be provided as a temporary token
4. Push: `git push https://chebitoch007:{PAT}@github.com/chebitoch007/reve-africa-safaris.git main`
5. Confirm push with the commit hash range shown
6. **Never store, display, log, or reuse the PAT**
7. Do not generate ZIP archives

---

## 10. Known Issues / Technical Debt

1. **No photography.** All images are CSS gradient placeholders. Each placeholder
   has a comment documenting exactly where `<Image fill>` drops in.

2. **Testimonials are placeholder.** `TestimonialsSection` renders a visible
   note: *"These are placeholder testimonials."* Remove before launch.

3. **Gallery mobile layout.** The `wide` and `tall` grid span variants only
   apply at `lg:` breakpoint. On mobile all items render as equal tiles.

4. **No skip-link.** A "Skip to main content" link targeting `#main-content`
   (already on `<main>`) should be added to the root layout for keyboard users.

5. **No sitemap or robots.txt.** Should be added before deployment.

6. **Placeholder page routes.** `/about`, `/blog`, `/contact`, `/destinations`,
   `/gallery`, `/packages` all exist as stub pages from the original repo
   scaffold. They will be replaced milestone by milestone.

---

## 11. Session Setup Instructions

At the start of every new session:

```bash
# Clone fresh (or pull if already cloned)
git clone https://github.com/chebitoch007/reve-africa-safaris.git
cd reve-africa-safaris

# Install dependencies
npm install

# Verify build before making any changes
npm run build

# Verify TypeScript
npx tsc --noEmit
```

Only begin writing code after confirming the build is clean.

---

## 12. Suggested First Message for New Session

Paste the following into the new Claude account to begin Milestone 4:

---

> You are continuing development of the RÊVE AFRICA SAFARIS luxury safari
> website. Read the full project handoff document below before writing
> anything.
>
> **Canonical repo:** `https://github.com/chebitoch007/reve-africa-safaris.git`
>
> **Completed milestones:** 1 (Design System), 2 (Layout & Navigation),
> 3A (Homepage Foundation), 3B (Homepage Completion)
>
> **Next milestone:** Milestone 4 — About Page
>
> Start by cloning the repo, running `npm install`, verifying the build
> passes, then reading the full file tree and the key files listed in
> the handoff document before writing any code.
>
> [Paste the full contents of this handoff document here]
