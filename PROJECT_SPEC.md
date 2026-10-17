# RÊVE AFRICA SAFARIS

> **Historical planning document, superseded by the current site.** This was the original brief. The built site differs from it in the ways noted inline below. For what the site actually is and says, see `docs/TRUTH_AUDIT.md`, `docs/OWNER_FILL_CHECKLIST.md` and the code in `src/lib/constants/`.

## Project Overview

RÊVE AFRICA SAFARIS is a new, founder-led safari company designing journeys across East and Southern Africa, planned by hand around each traveller. (The original brief called it a luxury company; the site makes no claim it cannot support.)

The website should inspire visitors to explore Africa through premium wildlife adventures, cultural experiences, beach holidays, and tailor-made journeys.

The overall experience must communicate elegance, trust, and adventure. (Exclusivity was in the original brief; the site does not claim it.)

---

# Goals

Primary Goal

Convert visitors into safari inquiries.

Secondary Goals

Build trust.

Showcase destinations.

Display luxury safari packages.

Improve SEO.

Generate leads.

---

# Target Audience

International tourists

Luxury travelers

Families

Couples

Honeymoon travelers

Wildlife photographers

Adventure seekers

Corporate travel

---

# Brand Personality

Luxury

Elegant

Authentic

Warm

Professional

Premium

African-inspired

Minimal

Timeless

---

# Design Style

Luxury safari lodge

High-end travel magazine

Large photography

Minimal layouts

Lots of whitespace

Gold accents

Smooth animations

Dark elegant backgrounds

Organic shapes

Rounded cards

Glass effects where appropriate

---

# Color Palette

Primary

#0F0F0F

Gold

#D4AF37

Bronze

#B87333

Sand

#E8DCC8

White

#FFFFFF

Accent

#C86B2A

---

# Typography

Headings

Cormorant Garamond

Body

Inter

---

# Website Pages

Home

About

Safari Packages

Destinations

Gallery

Blog

Contact

Privacy Policy (`/privacy`)

Terms (`/terms`)

Cookies (`/cookies`)

(These three exist and are `noindex` and out of the sitemap until `LEGAL_PAGES_REVIEWED` is set to `true`.)

---

# Homepage Sections

Navbar

Hero

Featured Destinations

Safari Experiences

Popular Packages

Why Choose Us

Photo Gallery

Call To Action

(Testimonials and Instagram sections were removed: no guest testimonials exist and no social accounts have been created yet.)

Footer

---

# Destinations

Kenya

Tanzania

Uganda

Rwanda

Botswana

Namibia

(South Africa is not a destination; the destination set is these six.)

---

# Safari Categories

Luxury Safari

Family Safari

Migration Safari

Honeymoon Safari

Photography Safari

Bird Watching

Beach Holiday

Cultural Tours

Private Safari

---

# Core Features

Responsive Design

SEO Optimized

Fast Loading

Accessibility

WhatsApp Inquiry (optional: shown only when a number is set in `contact.ts`)

Contact Form

Newsletter (built but switched off: `NEWSLETTER_ENABLED = false`)

Google Maps (not built: `MapPlaceholder.tsx` stands in)

Social Links (optional: each shown only when its URL is set in `navigation.ts`)

Image Gallery

Blog

Animations

---

# Future Features

Online Booking

Payments

Customer Dashboard

Travel Itinerary Builder

Reviews

Chat Assistant

---

# Technical Stack

Next.js

TypeScript

Tailwind CSS

Framer Motion

Lucide Icons

Cloudinary (not used: images are served from `public/images`)

Formspree

Vercel (hosting not decided)

GitHub

---

# Coding Standards

Reusable components.

One component per file.

Strong TypeScript typing.

No inline styles.

Semantic HTML.

Accessible components.

Mobile-first.

Reusable utility functions.

No duplicated code.

---

# Component Naming

Hero.tsx

Navbar.tsx

Footer.tsx

DestinationCard.tsx

PackageCard.tsx

Gallery.tsx

FAQ.tsx

CTA.tsx

---

# Performance Goals

Lighthouse score above 95

Image optimization

Lazy loading

Static rendering where possible

Minimal JavaScript

---

# SEO

Metadata on every page.

Open Graph support.

Structured data.

XML sitemap.

robots.txt

Canonical URLs.

---

# Tone of Voice

Luxury.

Confident.

Welcoming.

Inspirational.

Knowledgeable.

Never exaggerated.

Focus on authentic African experiences.