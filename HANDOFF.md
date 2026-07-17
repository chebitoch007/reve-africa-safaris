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
| 4 — About Page | ✅ Complete | `4afa685` |
| 5 — Destinations Page | ✅ Complete | `a837098` |
| 6 — Safari Packages Page | ✅ Complete | `e8347fb` |
| 7 — Gallery Page | ✅ Complete | `69edd04` |
| 8 — Blog Page | ✅ Complete | `6f88518` |
| 9 — Contact Page | ✅ Complete | `008ecab` |
| **10 — SEO & Performance** | ✅ Complete | pushed this session |

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
│   ├── about/page.tsx           ← ✅ About page (Milestone 4)
│   ├── destinations/page.tsx    ← ✅ Destinations page (Milestone 5)
│   ├── packages/page.tsx        ← ✅ Safari Packages page (Milestone 6)
│   ├── gallery/page.tsx         ← ✅ Gallery page (Milestone 7)
│   ├── blog/page.tsx            ← ✅ Blog page (Milestone 8)
│   └── contact/page.tsx         ← ✅ Contact page (Milestone 9)
│
├── components/
│   ├── about/                   ← Milestone 4 — About page components
│   │   ├── AboutHero.tsx        ← Client (entry animations)
│   │   ├── OurStory.tsx         ← Client (scroll reveals + pull quote)
│   │   ├── OurApproach.tsx      ← Client (three philosophy pillars)
│   │   ├── TeamCard.tsx         ← Server Component (portrait card)
│   │   ├── MeetTheTeam.tsx      ← Client (animation wrapper around TeamCard)
│   │   ├── ConservationCommitment.tsx ← Client (dark surface, stat cards)
│   │   └── AboutCTA.tsx         ← Client (closing CTA)
│   ├── packages/                ← Milestone 6 — Safari Packages page components
│   │   ├── PackagesHero.tsx          ← Client (entry animations)
│   │   ├── JourneyIntro.tsx          ← Client (philosophy + stat row)
│   │   ├── AllPackages.tsx           ← Client (animation wrapper — reuses PackageCard)
│   │   ├── JourneyCategoryCard.tsx   ← Server Component (icon + title + link card)
│   │   ├── JourneyCategories.tsx     ← Client (animation wrapper, 4-col grid)
│   │   ├── SignatureItinerary.tsx    ← Client (editorial showcase + day timeline)
│   │   ├── WhatsIncluded.tsx         ← Client (included/excluded two-column dl)
│   │   ├── AccommodationStandards.tsx← Client (three accommodation tiers)
│   │   ├── BespokeProcess.tsx        ← Client (four-step custom planning)
│   │   ├── PackagesFAQ.tsx           ← Client (accordion, packages-specific data)
│   │   └── PackagesCTA.tsx           ← Client (closing CTA)
│   ├── destinations/            ← Milestone 5 — Destinations page components
│   │   ├── DestinationsHero.tsx      ← Client (entry animations)
│   │   ├── DestinationsOverview.tsx  ← Client (two-column intro + stat)
│   │   ├── CountryCard.tsx           ← Server Component (portrait country card)
│   │   ├── CountryShowcase.tsx       ← Client (animation wrapper around CountryCard)
│   │   ├── WildlifeHighlights.tsx    ← Client (six wildlife encounter tiles)
│   │   ├── SignatureExperienceCard.tsx ← Server Component (landscape experience card)
│   │   ├── SignatureExperiences.tsx   ← Client (animation wrapper)
│   │   ├── BestTimeToVisit.tsx        ← Client (regional season panels)
│   │   ├── LodgeCard.tsx              ← Server Component (lodge preview card)
│   │   ├── FeaturedLodges.tsx         ← Client (animation wrapper around LodgeCard)
│   │   ├── MapPlaceholder.tsx         ← Client (architecture-only map placeholder)
│   │   ├── DestinationsFAQ.tsx        ← Client (accordion, destinations-specific data)
│   │   └── DestinationsCTA.tsx        ← Client (closing CTA)
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
│   ├── contact/                 ← Milestone 9 — Contact page components
│   │   ├── ContactHero.tsx           ← Client (entry animations; dark two-column hero)
│   │   ├── ConciergeIntro.tsx        ← Client (personal service intro + commitment list)
│   │   ├── ContactMethods.tsx        ← Client (phone/email/WhatsApp/hours cards)
│   │   ├── EnquiryForm.tsx           ← Client (full accessible enquiry form; stub submit)
│   │   ├── OfficeLocation.tsx        ← Client (address, travel dl, map placeholder)
│   │   ├── ContactFAQ.tsx            ← Client (thin wrapper around AccordionFAQ)
│   │   └── ContactCTA.tsx            ← Client (final CTA; bg-inverse surface)
│   ├── blog/                    ← Milestone 8 — Blog page components
│   │   ├── BlogHero.tsx              ← Client (entry animations; dark two-column hero)
│   │   ├── FeaturedStory.tsx         ← Client (flagship article; editorial image+copy layout)
│   │   ├── BlogCard.tsx              ← Server Component (article card; CSS hover)
│   │   ├── LatestStories.tsx         ← Client (animation wrapper; 3-col article grid)
│   │   ├── BlogCategories.tsx        ← Client (6 category cards; static icon map)
│   │   ├── EditorialPhilosophy.tsx   ← Client (dark surface; 3 numbered pillars)
│   │   ├── NewsletterSection.tsx     ← Client (form interaction; stub submit handler)
│   │   ├── BlogFAQ.tsx               ← Client (thin wrapper around AccordionFAQ)
│   │   └── BlogCTA.tsx               ← Client (closing CTA; matches established pattern)
│   ├── gallery/                 ← Milestone 7 — Gallery page components
│   │   ├── GalleryHero.tsx           ← Client (entry animations; dark centred hero)
│   │   ├── GalleryIntro.tsx          ← Client (editorial intro + stat callout)
│   │   ├── GalleryTile.tsx           ← Server Component (individual grid tile; CSS hover)
│   │   ├── GalleryGrid.tsx           ← Client (animation wrapper; 18-item masonry grid)
│   │   ├── BehindTheLens.tsx         ← Client (guide vignettes with pull quotes)
│   │   ├── ConservationNote.tsx      ← Client (photography ethics + principles dl)
│   │   ├── GalleryCategoryCard.tsx   ← Server Component (category tile; CSS hover)
│   │   ├── GalleryCategories.tsx     ← Client (animation wrapper; 6-col category grid)
│   │   ├── GalleryFAQ.tsx            ← Client (thin wrapper around AccordionFAQ)
│   │   └── GalleryCTA.tsx            ← Client (closing CTA; matches established pattern)
│   └── ui/
│       ├── Logo.tsx             ← Server Component, wordmark
│       └── AccordionFAQ.tsx     ← Client Component, shared FAQ accordion primitive (M7)
│
├── lib/
│   ├── constants/
│   │   ├── homepage.ts          ← All homepage content data
│   │   ├── navigation.ts        ← Nav links, footer columns, social links
│   │   ├── about.ts             ← All About page content data (Milestone 4)
│   │   ├── destinations.ts      ← All Destinations page content data (Milestone 5)
│   │   ├── packages.ts          ← All Safari Packages page content data (Milestone 6)
│   │   ├── gallery.ts           ← All Gallery page content data (Milestone 7)
│   │   ├── blog.ts              ← All Blog page content data (Milestone 8)
│   │   └── contact.ts           ← All Contact page content data (Milestone 9)
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

4. **No OG images.** The `/og/` directory exists but contains only a `.gitkeep`.
   Production-quality OG images (`/og/default.jpg` and page-specific variants)
   should be created before launch. Dimensions: 1200×630px.

5. **No favicon set.** Only `favicon.ico` (auto-generated by Next.js scaffold)
   exists. Full favicon set (`/icon.svg`, `/apple-touch-icon.png`,
   `/favicon-16x16.png`) should be produced from the final logo before launch.

6. **No Content Security Policy (CSP).** Security headers are implemented in
   `next.config.ts` but CSP is omitted — it requires an audit of all third-party
   scripts once analytics, booking system, and CMS are confirmed.

7. **Navigation route fix (`/journeys` → `/packages`).** All top-level internal
   hrefs that pointed to `/journeys` have been corrected to `/packages` in M10.
   Deep sub-routes (e.g. `/journeys/mara-migration`) in homepage package cards
   remain as-is — they are future unimplemented pages.

8. **All primary page routes are complete.** `/about` (M4), `/destinations`
   (M5), `/packages` (M6), `/gallery` (M7), `/blog` (M8), and `/contact` (M9)
   are all implemented. No stub pages remain.

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

## 13. Milestone 5 — Destinations Page Architectural Decisions

**Commit:** pushed in M5 session (see git log for hash)

### New files

| File | Type | Notes |
|------|------|-------|
| `src/lib/constants/destinations.ts` | Data | All destinations page content — countries, wildlife, experiences, seasons, lodges, FAQ, CTAs |
| `src/app/destinations/page.tsx` | Page | 10-section composition with SEO metadata |
| `src/components/destinations/DestinationsHero.tsx` | Client | Entry animations; dark hero |
| `src/components/destinations/DestinationsOverview.tsx` | Client | Two-column intro + stat callout |
| `src/components/destinations/CountryCard.tsx` | **Server** | Portrait card with CSS-only hover |
| `src/components/destinations/CountryShowcase.tsx` | Client | Animation wrapper around CountryCard |
| `src/components/destinations/WildlifeHighlights.tsx` | Client | Six wildlife tiles with static icon map |
| `src/components/destinations/SignatureExperienceCard.tsx` | **Server** | Landscape experience card; CSS-only hover |
| `src/components/destinations/SignatureExperiences.tsx` | Client | Animation wrapper; 2×2 grid |
| `src/components/destinations/BestTimeToVisit.tsx` | Client | Three regional panels; season accordion-style |
| `src/components/destinations/LodgeCard.tsx` | **Server** | Lodge preview; 16:9 placeholder |
| `src/components/destinations/FeaturedLodges.tsx` | Client | Animation wrapper around LodgeCard |
| `src/components/destinations/MapPlaceholder.tsx` | Client | Architecture-only; see integration note in file |
| `src/components/destinations/DestinationsFAQ.tsx` | Client | Accordion; destinations-specific data |
| `src/components/destinations/DestinationsCTA.tsx` | Client | Closing CTA; matches About/FinalCTA pattern |

### Key decisions

**FAQ approach:** `DestinationsFAQ` follows the same accordion pattern as the
homepage `FAQSection` but consumes `DESTINATIONS_FAQ_ITEMS` from its own
constants file. No shared abstraction was created — both components differ in
their CTA links and data sources. Extract a shared `<AccordionFAQ>` primitive
if a third page requires this pattern.

**Map placeholder isolation:** `MapPlaceholder` is a self-contained Client
Component with a `MapCanvas` inner component. The integration guide for adding
a real map library (Mapbox GL JS / Google Maps / Leaflet) is documented inside
`MapPlaceholder.tsx`. The page composition (`destinations/page.tsx`) requires
no changes when the map is introduced.

**Server/Client split:** Three cards (`CountryCard`, `SignatureExperienceCard`,
`LodgeCard`) are Server Components with CSS-only hover effects. Their parent
section components are Client Components that handle only scroll-reveal
animation — the minimal `'use client'` boundary pattern established in M3/M4.

**Surface alternation (10 sections):**
```
DestinationsHero       → bg-deep
DestinationsOverview   → bg-primary
CountryShowcase        → bg-secondary
WildlifeHighlights     → bg-dune
SignatureExperiences   → bg-primary
BestTimeToVisit        → bg-inverse
FeaturedLodges         → bg-secondary
MapPlaceholder         → bg-muted
DestinationsFAQ        → bg-primary
DestinationsCTA        → bg-deep
```

---

## 14. Milestone 6 — Safari Packages Page Architectural Decisions

**Commit:** pushed in M6 session (see git log for hash)

### New files

| File | Type | Notes |
|------|------|-------|
| `src/lib/constants/packages.ts` | Data | All packages page content. Re-exports `PackageData` type from `homepage.ts` rather than duplicating it. |
| `src/app/packages/page.tsx` | Page | 10-section composition with SEO metadata |
| `src/components/packages/PackagesHero.tsx` | Client | Two-column: headline left, subheadline + CTA right |
| `src/components/packages/JourneyIntro.tsx` | Client | Philosophy copy + three-stat `<dl>` row |
| `src/components/packages/AllPackages.tsx` | Client | Animation wrapper — **reuses existing `PackageCard` Server Component** |
| `src/components/packages/JourneyCategoryCard.tsx` | **Server** | Icon card; static icon map pattern |
| `src/components/packages/JourneyCategories.tsx` | Client | Animation wrapper; 4-col grid |
| `src/components/packages/SignatureItinerary.tsx` | Client | Editorial flagship; `<ol>` timeline |
| `src/components/packages/WhatsIncluded.tsx` | Client | Two-column `<dl>` included/excluded |
| `src/components/packages/AccommodationStandards.tsx` | Client | Three accommodation tier cards |
| `src/components/packages/BespokeProcess.tsx` | Client | Sticky-left intro + `<ol>` four steps |
| `src/components/packages/PackagesFAQ.tsx` | Client | Accordion; packages-specific data |
| `src/components/packages/PackagesCTA.tsx` | Client | Closing CTA; matches established pattern |

### Key decisions

**PackageCard reuse:** `AllPackages` imports the existing `PackageCard` Server
Component from `src/components/home/PackageCard.tsx`. No duplication — the
card was designed for reuse on this page (documented in its own header).
`packages.ts` imports the `PackageData` interface from `homepage.ts` so the
type is defined once.

**Extended catalogue vs homepage preview:** `homepage.ts` holds three
`FEATURED_PACKAGES` for the homepage preview. `packages.ts` holds all six
`ALL_PACKAGES` including those three. The three overlap in data but are not
technically duplicated — the homepage preview is intentionally a subset curated
for the homepage context.

**FAQ pattern note:** This is the third accordion FAQ implementation
(homepage, destinations, packages). The M5 decision to hold on extracting a
shared primitive still stands — each has a different data shape (`FAQItem`,
`DestinationsFAQItem`, `PackagesFAQItem`). A shared `<AccordionFAQ items={[]}
section={} prefix="" />` should be extracted before a fourth instance.

**Surface alternation (10 sections):**
```
PackagesHero           → bg-deep
JourneyIntro           → bg-primary
AllPackages            → bg-secondary
JourneyCategories      → bg-dune
SignatureItinerary     → bg-inverse
WhatsIncluded          → bg-primary
AccommodationStandards → bg-dune
BespokeProcess         → bg-secondary
PackagesFAQ            → bg-primary
PackagesCTA            → bg-deep
```

---

## 15. Milestone 7 — Gallery Page Architectural Decisions

**Commit:** pushed in M7 session (see git log for hash)

### New files

| File | Type | Notes |
|------|------|-------|
| `src/lib/constants/gallery.ts` | Data | All gallery page content — hero, intro, 18-item grid, vignettes, conservation note, 6 categories, FAQ, CTA |
| `src/app/gallery/page.tsx` | Page | 8-section composition with SEO metadata — replaces former stub |
| `src/components/ui/AccordionFAQ.tsx` | **Shared Client** | Extracted shared FAQ accordion primitive — see below |
| `src/components/gallery/GalleryHero.tsx` | Client | Dark centred hero; full-viewport; scroll indicator |
| `src/components/gallery/GalleryIntro.tsx` | Client | Two-column: body copy left, stat callout right |
| `src/components/gallery/GalleryTile.tsx` | **Server** | Individual grid tile; fills parent `position:absolute`; CSS-only hover |
| `src/components/gallery/GalleryGrid.tsx` | Client | Animation wrapper; 18-tile CSS grid; `motion.div` is the grid cell (carries span classes) |
| `src/components/gallery/BehindTheLens.tsx` | Client | Two guide vignettes; `<blockquote>` + `<cite>` semantics; dark inverse surface |
| `src/components/gallery/ConservationNote.tsx` | Client | Photography ethics; `<dl>` principles list; dune surface |
| `src/components/gallery/GalleryCategoryCard.tsx` | **Server** | Square aspect-ratio category tile; CSS-only hover |
| `src/components/gallery/GalleryCategories.tsx` | Client | Animation wrapper; 2→3→6 col responsive grid |
| `src/components/gallery/GalleryFAQ.tsx` | Client | Thin wrapper delegating entirely to `AccordionFAQ` |
| `src/components/gallery/GalleryCTA.tsx` | Client | Closing CTA; dual button row; matches M4/M5/M6 pattern |

### Migrated files

| File | Change |
|------|--------|
| `src/components/home/FAQSection.tsx` | Migrated to `AccordionFAQ`; now a 5-line wrapper |
| `src/components/destinations/DestinationsFAQ.tsx` | Migrated to `AccordionFAQ`; now a 5-line wrapper |
| `src/components/packages/PackagesFAQ.tsx` | Migrated to `AccordionFAQ`; now a 5-line wrapper |

### Key decisions

**AccordionFAQ extraction:** The M6 handoff note predicted that a shared
`<AccordionFAQ>` should be extracted before a fourth FAQ instance. That
threshold was reached in M7. The primitive lives in `src/components/ui/`
(alongside `Logo.tsx`) and accepts four props:

```ts
interface AccordionFAQProps {
  items:     AccordionFAQItem[];   // { id, question, answer }
  section:   AccordionFAQSection;  // { eyebrow, headline, body, cta: { label, href } }
  headingId: string;               // unique <h2> id for aria-labelledby
  prefix:    string;               // namespaces panel/trigger IDs (e.g. 'faq', 'gfaq')
}
```

TypeScript structural typing means the existing page-specific interfaces
(`FAQItem`, `DestinationsFAQItem`, `PackagesFAQItem`, `GalleryFAQItem`) are
all assignable to `AccordionFAQItem` without any change to the constants files
— they all share the `{ id, question, answer }` shape.

**GalleryGrid cell pattern:** The animation wrapper `GalleryGrid` makes each
`motion.div` the actual CSS grid cell, placing span classes (`lg:col-span-2`,
`lg:row-span-2`) directly on the motion wrapper. `GalleryTile` renders with
`position:absolute inset-0` inside it. This avoids the `display:contents`
problem (which would have stripped the element from the grid flow while
preserving children, losing the span context).

**GalleryTile is a Server Component:** Individual tiles have no interactivity
— hover effects are pure CSS (`group-hover:scale-105`, `opacity-0` →
`opacity-100`). The `motion.div` wrapper in `GalleryGrid` (Client) handles
scroll-reveal animation without forcing the tile itself to be a Client
Component. Pattern consistent with M5/M6 Server card approach.

**18-image grid with span variety:** The grid uses `auto-rows-[240px]` with
three span variants — `normal` (1×1), `wide` (2×1, `lg:col-span-2`), `tall`
(1×2, `lg:row-span-2`). Span variants are confined to `lg:` breakpoint; mobile
and tablet render all tiles as equal single-cell items. This is documented in
Known Issues item 3.

**Surface alternation (8 sections):**
```
GalleryHero          → bg-deep     (basalt-950)
GalleryIntro         → bg-primary  (chalk-50)
GalleryGrid          → bg-secondary(chalk-100)
BehindTheLens        → bg-inverse  (basalt-900)
ConservationNote     → bg-dune     (dune-100)
GalleryCategories    → bg-muted    (chalk-200)
GalleryFAQ           → bg-primary  (chalk-50)
GalleryCTA           → bg-deep     (basalt-950)
```
No two adjacent sections share a surface — the alternation rule is maintained.

---

## 16. Milestone 8 — Blog Page Architectural Decisions

**Commit:** pushed in M8 session (see git log for hash)

### New files

| File | Type | Notes |
|------|------|-------|
| `src/lib/constants/blog.ts` | Data | All blog page content — hero, featured story, 6 articles, 6 categories, 3 editorial pillars, newsletter copy, 5 FAQ items, CTA |
| `src/app/blog/page.tsx` | Page | 8-section composition with SEO metadata — replaces former stub |
| `src/components/blog/BlogHero.tsx` | Client | Two-column dark hero: headline left, subheadline+rule right |
| `src/components/blog/FeaturedStory.tsx` | Client | Flagship article; image panel (60%) left, content panel right at lg+ |
| `src/components/blog/BlogCard.tsx` | **Server** | Reusable article card; 16:10 image placeholder; CSS-only hover |
| `src/components/blog/LatestStories.tsx` | Client | Animation wrapper; 1→2→3 col responsive grid; stagger animation |
| `src/components/blog/BlogCategories.tsx` | Client | Six category cards; static icon map pattern; dune surface |
| `src/components/blog/EditorialPhilosophy.tsx` | Client | Dark inverse surface; sticky-left intro; numbered pillars |
| `src/components/blog/NewsletterSection.tsx` | Client | Form interaction; stub submit; full accessible form markup |
| `src/components/blog/BlogFAQ.tsx` | Client | Thin wrapper delegating to `AccordionFAQ` |
| `src/components/blog/BlogCTA.tsx` | Client | Closing CTA; matches M4–M7 established pattern |

### Key decisions

**BlogCard is a Server Component.** The card itself has no interactivity — all
hover effects are CSS (`group-hover:scale-105`, `group-hover:text-[...]`). The
`LatestStories` parent is the minimal Client Component that provides scroll-reveal
animation. This is the same Server card / Client animation-wrapper pattern used
for `CountryCard`, `GalleryTile`, `GalleryCategoryCard`, `BlogCard`, etc.

**AccordionFAQ reuse.** `BlogFAQ` is the fifth consumer of the shared
`AccordionFAQ` primitive. The extraction in M7 continues to pay off — no new
accordion logic was written.

**Newsletter form — architecture only.** `NewsletterSection` provides complete
accessible form markup (associated `<label>`, `aria-invalid`, `aria-describedby`,
`role="alert"` on errors, `role="status"` + `aria-live="polite"` on success)
ready for backend integration. The `handleSubmit` stub is clearly documented
with a TODO comment. No backend call is made.

**Static icon map.** `BlogCategories` uses the established `ICON_MAP` pattern
(Record of component types keyed by string) rather than dynamic imports or
conditional JSX. Consistent with `WildlifeHighlights` and `JourneyCategoryCard`.

**Surface alternation (8 sections):**
```
BlogHero              → bg-deep     (basalt-950)
FeaturedStory         → bg-secondary(chalk-100)
LatestStories         → bg-primary  (chalk-50)
BlogCategories        → bg-dune     (dune-100)
EditorialPhilosophy   → bg-inverse  (basalt-900)
NewsletterSection     → bg-muted    (chalk-200)
BlogFAQ               → bg-primary  (chalk-50)
BlogCTA               → bg-deep     (basalt-950)
```
No two adjacent sections share a surface — alternation rule maintained.

**Documentation fix (M7 inconsistency).** The M7 handoff left section 12
("Suggested First Message") out of numerical order (after section 15) and
referenced "Milestone 8 — Experiences Page" incorrectly. Both corrected here.
The Experiences page was not planned as a milestone in the original roadmap;
M8 is the Blog page per the original prompt.

---

## 17. Milestone 9 — Contact Page Architectural Decisions

**Commit:** pushed in M9 session (see git log for hash)

### New files

| File | Type | Notes |
|------|------|-------|
| `src/lib/constants/contact.ts` | Data | All contact page content — hero, concierge intro, 4 contact methods, form field config, 4 select option lists, 6 FAQ items, office details, CTA |
| `src/app/contact/page.tsx` | Page | 7-section composition with SEO metadata — replaces former stub |
| `src/components/contact/ContactHero.tsx` | Client | Two-column dark hero; subheadline with left-rule |
| `src/components/contact/ConciergeIntro.tsx` | Client | Body copy left; commitment checklist right |
| `src/components/contact/ContactMethods.tsx` | Client | 4-col card grid; cards with `href` render as `<Link>`, without as `<div>` |
| `src/components/contact/EnquiryForm.tsx` | Client | Full accessible enquiry form; stub submit; see accessibility notes below |
| `src/components/contact/OfficeLocation.tsx` | Client | Address + detail `<dl>` left; map placeholder right |
| `src/components/contact/ContactFAQ.tsx` | Client | Thin wrapper; sixth `AccordionFAQ` consumer |
| `src/components/contact/ContactCTA.tsx` | Client | Final CTA; `bg-inverse` (not `bg-deep`) — see surface note below |

### Key decisions

**`useId()` for form field IDs.** `EnquiryForm` uses React 18's `useId()` hook
to generate stable, unique IDs for all `<label htmlFor>` / `<input id>` pairs.
This is safe in concurrent rendering and avoids ID collisions if the form is
ever rendered more than once on a page.

**Error focus management.** On submit with validation errors, the component
calls `document.getElementById(id(firstErrorField))?.focus()` to move focus
to the first invalid field. This provides a clear keyboard/screen-reader
experience without needing a summary error region.

**`<fieldset>`/`<legend>` for grouped selects.** The three travel-preference
selects (month, group size, budget) are wrapped in a `<fieldset>` with an
`sr-only` `<legend>` ("Travel preferences"). This correctly groups them
semantically without imposing visual structure.

**`ContactCTA` uses `bg-inverse` not `bg-deep`.** The hero is `bg-deep`
(basalt-950). Using `bg-deep` for the CTA too would create a deep→…→deep
bookend. `bg-inverse` (basalt-900) maintains the dark closing energy while
preserving the surface alternation rule.

**Map placeholder with `role="img"`.** The map placeholder `<div>` carries
`role="img"` and `aria-label` describing the location. This ensures screen
readers can announce it meaningfully while the production maps integration
is pending. No maps API is included (out of scope for M9).

**Contact methods — conditional rendering.** `ContactMethods` renders cards
with `href` as `<Link>` elements (phone, email, WhatsApp) and the hours card
(no href) as a `<div>`. The icon map follows the established static Record
pattern from `BlogCategories`.

**Surface alternation (7 sections):**
```
ContactHero       → bg-deep      (basalt-950)
ConciergeIntro    → bg-primary   (chalk-50)
ContactMethods    → bg-secondary (chalk-100)
EnquiryForm       → bg-primary   (chalk-50)
OfficeLocation    → bg-dune      (dune-100)
ContactFAQ        → bg-primary   (chalk-50)
ContactCTA        → bg-inverse   (basalt-900)
```
No two adjacent sections share a surface — alternation rule maintained.

---

## 12. Suggested First Message for New Session

> You are continuing development of the RÊVE AFRICA SAFARIS luxury safari
> website. Read the full project handoff document below before writing
> anything.
>
> **Canonical repo:** `https://github.com/chebitoch007/reve-africa-safaris.git`
>
> **Completed milestones:** 1 (Design System), 2 (Layout & Navigation),
> 3A (Homepage Foundation), 3B (Homepage Completion), 4 (About Page),
> 5 (Destinations Page), 6 (Safari Packages Page), 7 (Gallery Page),
> 8 (Blog Page), 9 (Contact Page)
>
> **All primary pages are complete.** The next work items are site-wide
> polish, performance, or new features as directed.
>
> Start by cloning the repo, running `npm install`, verifying the build
> passes, then reading `HANDOFF.md` at the repo root before writing any code.
>
> [Paste the full contents of this handoff document here]

---

## 18. Milestone 10 — SEO & Performance Architectural Decisions

**Commit:** pushed in M10 session (see git log for hash)

### New files

| File | Type | Notes |
|------|------|-------|
| `src/app/sitemap.ts` | Next.js sitemap | Dynamic sitemap generator — outputs `/sitemap.xml` at build time. Covers all 7 primary routes with priority and changeFrequency guidance. Extend with dynamic routes when blog posts / destination sub-pages are added. |
| `src/app/not-found.tsx` | 404 page | Custom branded 404 page. Server Component. Uses the dark `bg-deep` hero aesthetic. `robots: { index: false }` prevents it from appearing in search results. |
| `src/components/seo/JsonLd.tsx` | Server Component | Site-wide JSON-LD structured data. Injects `Organization` + `TourOperator` schema and `WebSite` schema into `<head>` via `<script type="application/ld+json">`. No client JS. |
| `public/robots.txt` | Static file | Allows all crawlers; references sitemap URL. |
| `public/site.webmanifest` | Static file | Web app manifest referenced in `BASE_METADATA`. |
| `public/og/.gitkeep` | Placeholder | OG image directory stub. Replace with real `default.jpg` (1200×630px) before launch. |

### Modified files

| File | Change |
|------|--------|
| `src/app/layout.tsx` | Added skip-to-main-content link (first focusable element in document); added `<SiteJsonLd />` to `<head>`; changed `lang="en"` to `lang="en-GB"` to match `SITE.locale`. |
| `src/app/globals.css` | Added `.skip-to-content` CSS — visually hidden by default, slides in from top when focused. Respects the brand colour system (amber accent, basalt bg). |
| `src/lib/metadata.ts` | Added `site` twitter handle to `BASE_METADATA`; added alt text to OG and Twitter image objects; added `keywords` option to `PageMetadataOptions` and `buildPageMetadata()`; improved Twitter card type propagation in `buildPageMetadata()`. |
| `src/lib/constants/navigation.ts` | Fixed `Journeys` nav href from `/journeys` → `/packages` (the actual route). Fixed `FOOTER_EXPLORE` `All Journeys` href likewise. |
| `src/lib/constants/homepage.ts` | Fixed all CTA hrefs from `/journeys` → `/packages`. |
| `src/lib/constants/destinations.ts` | Fixed CTA href from `/journeys` → `/packages`. |
| `src/lib/constants/about.ts` | Fixed CTA href from `/journeys` → `/packages`. |
| `next.config.ts` | Added security headers: `X-Content-Type-Options`, `X-Frame-Options`, `Strict-Transport-Security`, `Referrer-Policy`, `Permissions-Policy`. CSP deliberately omitted pending third-party script audit. |

### Key decisions

**Skip-to-content link placement.** The link is the very first child of `<body>`, before `<Header>`. This is the correct position — keyboard users reach it before any navigation, and screen readers announce it as the first interactive element. It is visually hidden until focused using `position: fixed; top: -100%` with a `:focus` transition to `top: 0`. The amber accent color is used for visibility against the basalt offset context.

**JSON-LD as a Server Component.** `SiteJsonLd` renders two `<script type="application/ld+json">` blocks inside `<head>` via the root layout. No client JavaScript is involved. The `Organization` schema includes `TourOperator` as a co-type, `areaServed` (Africa regions), and `sameAs` social profiles. The `WebSite` schema enables Google Sitelinks eligibility.

**Navigation route correction.** The primary nav, footer, and all content CTAs previously linked to `/journeys` — a route that does not exist. The actual packages listing lives at `/packages`. This was a silent 404 bug affecting SEO and user journeys. All top-level `/journeys` hrefs are now corrected to `/packages`. The deep sub-routes (`/journeys/mara-migration` etc.) in homepage `PackageCard` hrefs are future pages and left as-is.

**Security headers in `next.config.ts`.** Five headers are applied to all routes. CSP is intentionally omitted — a valid CSP requires knowing all third-party origins (analytics, booking API, maps, CDN). Adding an overly broad CSP now could break future integrations. CSP should be implemented as a Milestone 11 or 12 task once those origins are known.

**`lang="en-GB"` on `<html>`.** The site uses British English spelling throughout the copy (capitalise, colour, labour, etc.) and `SITE.locale` is set to `en_GB`. The `lang` attribute was incorrectly set to `en` — corrected to `en-GB` for screen readers and search engines.

**Custom 404 page.** `not-found.tsx` is a Server Component that uses the existing dark hero aesthetic. It carries `robots: { index: false, follow: false }` to prevent it appearing in SERPs. It provides two navigational escape routes (home and contact) with consistent CTA button styling.

### Deferred to Milestone 11

- OG image creation (requires final photography and brand assets)
- Full favicon set (requires final SVG logo)
- Content Security Policy (requires third-party integration audit)
- Page-specific JSON-LD (e.g. `FAQPage` schema on FAQ sections, `TouristDestination` on destinations page)
- Visual polish and micro-interactions
