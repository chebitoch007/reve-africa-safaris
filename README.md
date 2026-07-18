# Rêve Africa Safaris

A production-ready luxury safari website for **Rêve Africa Safaris** — a Nairobi-based tour operator offering bespoke expeditions across East and Southern Africa.

---

## Overview

The website is the primary commercial presence for Rêve Africa Safaris, designed to convert high-intent visitors into safari enquiries. It communicates elegance, trust, and adventure through editorial-quality layouts, a refined dark-and-gold design system, and consistent brand storytelling across seven primary routes.

All pages are statically generated at build time, delivering fast first-paint performance and full SEO crawlability.

---

## Technology Stack

| Technology | Version | Role |
|------------|---------|------|
| [Next.js](https://nextjs.org) | 16.2.10 | App Router, static generation |
| [React](https://react.dev) | 19.2.4 | UI rendering |
| [TypeScript](https://www.typescriptlang.org) | ^5 | Strict-mode typing throughout |
| [Tailwind CSS](https://tailwindcss.com) | ^4 | CSS-first utility styling (`@theme {}` config) |
| [Framer Motion](https://www.framer.com/motion/) | ^12 | Scroll-reveal and entry animations |
| [Lucide React](https://lucide.dev) | ^1.24.0 | UI icons |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | latest | Class composition via `cn()` |

**Fonts:** Cormorant Garamond (display) and Inter (body) are self-hosted as `.woff2` files in `public/fonts/` — no external font CDN requests.

---

## Prerequisites

- **Node.js** 20 or later
- **npm** 10 or later (or your preferred package manager)

---

## Installation

```bash
git clone https://github.com/chebitoch007/reve-africa-safaris.git
cd reve-africa-safaris
npm install
```

---

## Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000). Uses Turbopack for fast HMR.

---

## Build

```bash
npm run build
npm run start   # Preview the production build locally
```

All pages compile to static HTML. The build output confirms each route as `○ (Static)`.

### TypeScript validation

```bash
npx tsc --noEmit
```

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          ← Tailwind v4 @theme tokens + global resets
│   ├── layout.tsx           ← Root layout: fonts, skip link, Header, Footer, JSON-LD
│   ├── not-found.tsx        ← Custom 404 page
│   ├── sitemap.ts           ← Dynamic /sitemap.xml generator
│   ├── page.tsx             ← Homepage (11 sections)
│   ├── about/page.tsx
│   ├── destinations/page.tsx
│   ├── packages/page.tsx
│   ├── gallery/page.tsx
│   ├── blog/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── about/               ← About page section components
│   ├── blog/                ← Blog page section components
│   ├── contact/             ← Contact page section components
│   ├── destinations/        ← Destinations page section components
│   ├── footer/              ← Footer (Server Component)
│   ├── gallery/             ← Gallery page section components
│   ├── home/                ← Homepage section components
│   ├── layout/              ← Container and Section primitives
│   ├── navigation/          ← Header, MobileMenu, NavLink
│   ├── packages/            ← Packages page section components
│   ├── seo/                 ← JSON-LD structured data components
│   └── ui/                  ← Shared UI primitives (Logo, AccordionFAQ)
│
├── lib/
│   ├── constants/           ← All content data (one file per page)
│   ├── design-system/       ← Design tokens, motion config, cn() utility
│   ├── fonts.ts             ← next/font/local configuration
│   └── metadata.ts          ← BASE_METADATA, VIEWPORT, buildPageMetadata()
│
├── types/
│   └── index.ts             ← Shared TypeScript interfaces
│
public/
├── fonts/                   ← Self-hosted Cormorant Garamond + Inter woff2
├── og/                      ← Open Graph images (requires production assets)
├── robots.txt
└── site.webmanifest
```

---

## Architecture

### Rendering Strategy

Every page is statically generated (`○ Static`) at build time. There are no API routes, server actions, or ISR boundaries in the current implementation. The site is deployment-ready to any static host or edge CDN.

### Server / Client Component Split

Components default to **Server Components**. The `'use client'` directive is added only where genuinely required:

- **Server Components:** Cards, columns, static layouts, footer, individual tiles
- **Client Components:** Header (scroll detection, mobile menu), any component using Framer Motion hooks (`useReducedMotion`), accordions (state), forms (state + validation)

The pattern is: Server card inside a Client animation wrapper. This keeps JS bundles small — cards with CSS-only hover states send zero JS to the browser.

### Design System

All design tokens are declared in `src/app/globals.css` inside Tailwind v4's `@theme {}` block. There is no `tailwind.config.ts`. Tokens cover:

- **Colour palette:** Basalt (dark), Chalk (light), Dune (warm neutral), Acacia (sage), Amber (accent), Stone (mid-greys)
- **Typography:** Two fonts only — Cormorant Garamond (display, italic) and Inter (body, UI)
- **Motion:** `DURATION`, `EASE`, and `VIEWPORT_ONCE` constants from `@/lib/design-system` used consistently across all animated components
- **Spacing:** `py-24 md:py-36` standard section padding; `max-w-[90rem]` container

### Content Architecture

All copy, labels, and business data live in `src/lib/constants/` — never hardcoded in JSX. This makes content updates straightforward and keeps components pure presentation logic.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — 11 sections including hero, destinations preview, packages, FAQ |
| `/about` | Brand story, philosophy, team, conservation commitment |
| `/destinations` | Six safari destinations with wildlife highlights, seasons, lodges |
| `/packages` | Six curated itineraries, journey categories, signature showcase |
| `/gallery` | 18-item photography grid, guide vignettes, category browser |
| `/blog` | Editorial journal — featured story, article grid, newsletter |
| `/contact` | Enquiry form, contact methods, office location |

---

## SEO

- **Metadata:** Every page exports `metadata` using `buildPageMetadata()` with unique title, description, canonical URL, and Open Graph + Twitter card images
- **Structured data:** `Organization` + `TourOperator` + `WebSite` schemas site-wide; `FAQPage` schema on all 7 pages with FAQ accordions
- **Sitemap:** `/sitemap.xml` generated at build time via `src/app/sitemap.ts`
- **Robots:** `public/robots.txt` with sitemap reference
- **Language:** `lang="en-GB"` on `<html>` matching `en_GB` locale

---

## Accessibility

- **Skip link:** "Skip to main content" is the first focusable element — keyboard users bypass navigation with one keypress
- **Landmarks:** `<header>`, `<nav aria-label>`, `<main>`, `<footer>` semantic structure throughout
- **Headings:** Single `<h1>` per page; logical `h2` → `h3` hierarchy within sections
- **ARIA:** `aria-labelledby` on every section; `aria-expanded` + `aria-controls` on accordion triggers and mobile menu; `aria-current="page"` on active nav link
- **Forms:** `<label>` association, `aria-invalid`, `aria-describedby` on error messages, `role="alert"` for validation, `role="status"` for success
- **Focus:** Branded amber focus ring on all interactive elements; mouse users see no ring
- **Motion:** All animations check `useReducedMotion()` and collapse to instant transitions; CSS `prefers-reduced-motion` also collapses all durations globally

---

## Performance

- Fonts are self-hosted with `display: swap` — no layout shift from font loading
- No external CDN dependencies (no Google Fonts, no third-party scripts)
- Image placeholders are CSS gradients — all `<Image>` components are drop-in replacements when photography is available
- `'use client'` boundaries are minimal — static cards are always Server Components
- All pages are fully static — zero server response time when served from a CDN

---

## Security Headers

The following HTTP response headers are set globally via `next.config.ts`:

| Header | Value |
|--------|-------|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(self)` |

**Content Security Policy (CSP)** is deferred. A nonce-based CSP requires dynamic rendering (per Next.js docs), which conflicts with the static generation strategy. CSP is planned for after analytics and booking integrations are confirmed.

---

## Deployment

The project deploys as a standard Next.js static build. Recommended platforms:

- **Vercel** — zero configuration, automatic CI/CD from `main`
- **Netlify** — build command `npm run build`, publish directory `.next`
- **Any CDN** — run `npm run build` and serve the `.next` output

### Environment Variables

No environment variables are required for the current static implementation. When enquiry form, newsletter, maps, and analytics integrations are added, document their keys in a `.env.example` file.

---

## Pre-Launch Checklist

- [ ] Replace gradient image placeholders with real photography (`<Image fill>` comments mark every location)
- [ ] Replace placeholder testimonials with verified guest reviews (`src/lib/constants/homepage.ts`)
- [ ] Create OG images (`/og/default.jpg` + page-specific variants, 1200×630px)
- [ ] Produce full favicon set from final logo (`/icon.svg`, `/apple-touch-icon.png`, `/favicon-16x16.png`)
- [ ] Connect enquiry form to CRM or email handler (stub in `EnquiryForm.tsx`)
- [ ] Connect newsletter form to mailing list provider (stub in `NewsletterSection.tsx`)
- [ ] Add maps integration to `MapPlaceholder.tsx` and `OfficeLocation.tsx`
- [ ] Implement Content Security Policy once all third-party origins are known
- [ ] Add analytics (Google Analytics 4, Plausible, or similar)
- [ ] Verify DNS, SSL certificate, and canonical domain configuration

---

## License

Proprietary. All rights reserved — Rêve Africa Safaris.
