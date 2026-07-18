# RÊVE AFRICA SAFARIS — Production Image Asset Plan

> **Document Version:** 1.0  
> **Status:** Phase 1 Planning — Pre-Implementation  
> **Scope:** All visual assets required for production launch  
> **Do not modify codebase. Do not commit. Do not push.**

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Editorial Direction](#2-editorial-direction)
3. [Current Asset Status Audit](#3-current-asset-status-audit)
4. [Recommended Folder Structure](#4-recommended-folder-structure)
5. [Filename Convention](#5-filename-convention)
6. [Asset Catalogue — Page by Page](#6-asset-catalogue--page-by-page)
   - 6.1 [Homepage (`/`)](#61-homepage-)
   - 6.2 [About (`/about`)](#62-about-about)
   - 6.3 [Destinations (`/destinations`)](#63-destinations-destinations)
   - 6.4 [Safari Packages (`/packages`)](#64-safari-packages-packages)
   - 6.5 [Gallery (`/gallery`)](#65-gallery-gallery)
   - 6.6 [Blog (`/blog`)](#66-blog-blog)
   - 6.7 [Contact (`/contact`)](#67-contact-contact)
   - 6.8 [Open Graph & Social Images](#68-open-graph--social-images)
7. [Priority Matrix](#7-priority-matrix)
8. [Technical Specifications Summary](#8-technical-specifications-summary)
9. [Implementation Notes for the Developer](#9-implementation-notes-for-the-developer)

---

## 1. Executive Summary

The Rêve Africa Safaris website is in Release Candidate (RC) state with all seven primary routes fully implemented. Every image slot across the site currently renders a CSS linear-gradient placeholder. There are **zero production-ready photography assets** in the repository.

This document catalogues every image required to bring the site to production readiness, providing sufficient detail for a sourcing and integration task to proceed without a further planning pass.

**Total image slots requiring photography:**

| Page | Image Slots |
|------|------------|
| Homepage (`/`) | 14 |
| About (`/about`) | 7 |
| Destinations (`/destinations`) | 15 |
| Packages (`/packages`) | 12 |
| Gallery (`/gallery`) | 32 |
| Blog (`/blog`) | 9 |
| Contact (`/contact`) | 1 |
| Open Graph / SEO | 8 |
| **Total** | **98** |

In addition to the above, the homepage `DestinationCard` component has a `destination.imageSrc` prop already wired up in code (unique among all components — it uses `<Image src>` rather than a gradient placeholder). This means it expects a real image path at `destination.imageSrc` which is not yet populated in the data constants.

---

## 2. Editorial Direction

### 2.1 Brand Character

Every image selected for Rêve Africa Safaris must communicate the following values simultaneously:

- **Luxury** — not through objects or interiors, but through light, stillness, space, and exclusivity
- **Authenticity** — real moments, real places, real wildlife; no artifice or fabrication
- **Trust** — professional composition, sharp technical quality; images that reassure a high-spending client
- **Conservation** — reverence for nature; wildlife photographed with ethical distance; habitat presented as sacred
- **Adventure** — movement, scale, anticipation; the feeling of being somewhere extraordinary
- **African Wilderness** — unmistakably East or Southern African landscapes, light, and wildlife

### 2.2 Visual Language

The site's design system is built on warm earth tones: basalt near-black (`#0C0D0B`), chalk warm white (`#FAF9F5`), dune gold (`#F0E8D5`), acacia sage (`#E8EDE0`), and amber accent (`#D4A017`). Photography must integrate with this palette rather than clash.

**Preferred palette affinities:**
- Golden hour and dawn light (amber, ochre, terracotta tones)
- Dry-season landscapes (honey grass, dusty earth, pale blue sky)
- Dense green forest interiors (gorilla and chimp territories)
- Deep blue pre-dawn and dusk (Serengeti silhouettes, tent candlelight)

**Avoid:**
- Oversaturated "Instagram filter" processing
- Overly dark or heavily HDR-processed images
- Images with dominant cool blue casts (doesn't integrate with the warm palette)
- Sterile or corporate-looking hospitality photography
- Any imagery that appears staged, posed, or lacking emotional truth

### 2.3 Photography Style Reference

The visual language should evoke the editorial standard of premium safari brands — intimate, earned, patient photography. Think of:

- Long lenses capturing animals at rest rather than in artificial peak-action
- Wide establishing shots that give scale and silence to the landscape
- Environmental portraits of people (guides, Maasai community) that convey dignity and relationship, not performance
- Architecture and interior shots of camps that reveal character through atmosphere, not inventory
- Aerial perspectives that convey the extraordinary scale and isolation of the wilderness

All imagery must be **legally licensable** — either from reputable stock libraries (Unsplash, Pexels, Adobe Stock) under their respective licences, or from a commissioned photography session. No images from competitor safari brand portfolios.

### 2.4 Technical Quality Standard

All photography must meet these minimum standards before integration:

- **Resolution:** Minimum 3000px on the longest edge for all full-bleed and hero images
- **Format:** Source in JPEG (high quality) or RAW; the developer will convert to WebP + AVIF via `next/image`
- **Colour space:** sRGB for web delivery
- **Sharpness:** No motion blur, subject must be crisp (especially eyes on wildlife and people)
- **Noise:** Acceptable grain from high-ISO night shots is acceptable; unacceptable digital noise is not

---

## 3. Current Asset Status Audit

### 3.1 Assets in Repository

| Path | Type | Status |
|------|------|--------|
| `public/fonts/` | Typography | ✅ Production-ready (self-hosted woff2) |
| `public/og/.gitkeep` | OG Image placeholder | ❌ Missing — stub file only |
| `public/robots.txt` | SEO | ✅ Production-ready |
| `public/site.webmanifest` | PWA manifest | ✅ Production-ready |
| `public/favicon.ico` | Favicon | ⚠️ Scaffold default — must be replaced |
| `public/file.svg` | Next.js scaffold | ❌ Remove before launch |
| `public/globe.svg` | Next.js scaffold | ❌ Remove before launch |
| `public/next.svg` | Next.js scaffold | ❌ Remove before launch |
| `public/vercel.svg` | Next.js scaffold | ❌ Remove before launch |
| `public/window.svg` | Next.js scaffold | ❌ Remove before launch |

**No production photography exists anywhere in the repository.**

### 3.2 Placeholder Pattern Summary

All image slots use this CSS gradient placeholder pattern:

```tsx
<div
  className="absolute inset-0 transition-transform duration-[700ms] group-hover:scale-105"
  style={{ background: `linear-gradient(160deg, ${placeholderFrom} 0%, ${placeholderTo} 100%)` }}
>
  {/* Noise texture overlay */}
</div>
```

Each placeholder includes a comment:

```tsx
{/* Replace this <div> with <Image fill priority> when photography available */}
```

One exception: `DestinationCard.tsx` already uses `<Image src={destination.imageSrc} alt={destination.country} fill>` — but `imageSrc` is not yet defined in the `DestinationData` interface in `homepage.ts`. This field must be added and populated.

### 3.3 OG Image Status

The `/og/` directory contains only a `.gitkeep` file. All seven pages reference `/og/default.jpg` as a fallback. No page-specific OG images have been defined in `buildPageMetadata()` calls. All OG images are missing.

### 3.4 Favicon Status

Only the scaffold `favicon.ico` exists. The metadata references `/icon.svg`, `/apple-touch-icon.png`, and `/favicon-16x16.png` — none of these exist. These depend on the final logo SVG and are outside the scope of this photography plan, but are noted as blocking pre-launch items.

---

## 4. Recommended Folder Structure

```
public/
└── images/
    ├── homepage/
    │   ├── hero/
    │   ├── destinations-preview/
    │   ├── experiences/
    │   ├── packages/
    │   └── gallery-preview/
    ├── about/
    │   ├── hero/
    │   ├── story/
    │   ├── team/
    │   └── conservation/
    ├── destinations/
    │   ├── hero/
    │   ├── countries/
    │   ├── experiences/
    │   └── lodges/
    ├── packages/
    │   ├── hero/
    │   ├── packages/
    │   ├── signature/
    │   └── accommodation/
    ├── gallery/
    │   ├── hero/
    │   ├── grid/
    │   ├── guides/
    │   └── categories/
    ├── blog/
    │   ├── hero/
    │   ├── featured/
    │   └── articles/
    ├── contact/
    │   └── hero/
    └── og/
        (Move public/og/ contents here, or keep at public/og/ per Next.js convention)
```

> **Note on OG images:** Next.js `next/image` and Open Graph tags reference paths from `public/`. Keep OG images at `public/og/` as currently configured in `metadata.ts`. All other photography lives under `public/images/`.

---

## 5. Filename Convention

### 5.1 Pattern

```
{page}-{section}-{subject}-{variant}.jpg
```

**Examples:**
```
homepage-hero-maasai-mara-dawn.jpg
about-team-amara-nkosi-portrait.jpg
destinations-kenya-hero-landscape.jpg
gallery-grid-elephant-amboseli-01.jpg
blog-featured-wildebeest-crossing.jpg
packages-signature-serengeti-balloon.jpg
og-default.jpg
og-about.jpg
```

### 5.2 Rules

- All lowercase, hyphens only (no underscores, no spaces)
- Page prefix always first
- Section identifier second
- Descriptive subject third
- Numeric suffix for sets (`-01`, `-02`, etc.)
- No year or date in filename (content dates in the constants, not the filename)
- No dimensions in filename (handled by `next/image` optimisation)

---

## 6. Asset Catalogue — Page by Page

---

### 6.1 Homepage (`/`)

#### IMAGE-HP-001 — Homepage Hero Background

| Field | Value |
|-------|-------|
| **Page** | Homepage (`/`) |
| **Component** | `src/components/home/Hero.tsx` |
| **Section** | Hero (full-viewport, LCP element) |
| **Current Status** | ❌ Placeholder — CSS radial gradient (dark basalt tones with amber horizon) |
| **Purpose** | Primary emotional hook; communicates the essence of the brand in a single image |
| **Recommended Subject** | Maasai Mara savanna at dawn or dusk — classic safari landscape with acacia silhouettes, a vast sky, and implied wildlife presence (dust cloud from a distant herd, or a single elephant silhouetted on the horizon) |
| **Editorial Style** | Cinematic, unhurried, epic in scale. No vehicles or people required. Landscape should feel ancient and undisturbed. |
| **Composition** | Wide landscape orientation. Clear sky occupies upper 40–50% of frame. Golden light from low left (dawn/dusk). Horizon sits at lower-third rule. Space for overlaid text on the left side (text is placed left-aligned). |
| **Orientation** | Landscape |
| **Ideal Aspect Ratio** | 16:9 to 21:9 (full viewport; image fills container) |
| **Minimum Resolution** | 3840 × 2160px |
| **Suggested Filename** | `homepage-hero-maasai-mara-dawn.jpg` |
| **Suggested Alt Text** | `Dawn light over the Maasai Mara savanna, Kenya` |
| **Loading Priority** | ✅ **PRIORITY — LCP** — use `priority` prop, `eager` loading |
| **Unsplash Keywords** | `maasai mara dawn landscape`, `african savanna sunrise`, `kenya safari landscape golden hour` |
| **Pexels Keywords** | `African savanna golden hour`, `Kenya safari sunrise acacia` |
| **Adobe Stock Keywords** | `Maasai Mara dawn landscape panoramic`, `East Africa savanna sunrise editorial` |

---

#### IMAGE-HP-002 — Homepage Destination Card: Kenya

| Field | Value |
|-------|-------|
| **Page** | Homepage (`/`) |
| **Component** | `src/components/home/DestinationCard.tsx` |
| **Section** | Destinations Preview |
| **Current Status** | ⚠️ Special case — component uses `<Image src={destination.imageSrc}>` but `imageSrc` field is not yet defined in `DestinationData` interface in `homepage.ts`. Field and value must be added. |
| **Purpose** | Country card hero image — portrait orientation, fills card |
| **Recommended Subject** | Maasai Mara game drive scene — vehicle positioned in open savanna with wildebeest or elephants visible, golden light |
| **Editorial Style** | Atmospheric and real; guests inside vehicle looking out is ideal; conveys the experience of being there |
| **Composition** | Portrait. Subject anchored centre-lower. Sky above. Full-bleed overlay will darken image; ensure subject is readable against a card overlay. |
| **Orientation** | Portrait |
| **Ideal Aspect Ratio** | 3:4 |
| **Minimum Resolution** | 1200 × 1600px |
| **Suggested Filename** | `homepage-destinations-kenya-mara.jpg` |
| **Suggested Alt Text** | `Safari vehicle in the Maasai Mara, Kenya` |
| **Loading Priority** | Lazy |
| **Unsplash Keywords** | `maasai mara safari vehicle`, `kenya game drive`, `maasai mara wildebeest landscape` |
| **Pexels Keywords** | `Kenya safari game drive`, `Maasai Mara wildlife` |
| **Adobe Stock Keywords** | `Maasai Mara safari vehicle aerial editorial`, `Kenya game reserve landscape portrait` |

---

#### IMAGE-HP-003 — Homepage Destination Card: Tanzania

| Field | Value |
|-------|-------|
| **Page** | Homepage (`/`) |
| **Component** | `src/components/home/DestinationCard.tsx` |
| **Section** | Destinations Preview |
| **Current Status** | ❌ Placeholder + missing `imageSrc` field |
| **Purpose** | Country card hero — Tanzania |
| **Recommended Subject** | Serengeti plains — expansive horizon, migration dust cloud or lone acacia against an enormous sky. Ngorongoro Crater aerial is an excellent alternative. |
| **Editorial Style** | Epic and spatial. Tanzania is about scale and unbroken horizons. |
| **Composition** | Portrait. Low horizon, dominant sky. Warm afternoon light. |
| **Orientation** | Portrait |
| **Ideal Aspect Ratio** | 3:4 |
| **Minimum Resolution** | 1200 × 1600px |
| **Suggested Filename** | `homepage-destinations-tanzania-serengeti.jpg` |
| **Suggested Alt Text** | `The endless Serengeti plains, Tanzania` |
| **Loading Priority** | Lazy |
| **Unsplash Keywords** | `serengeti plains landscape`, `tanzania safari plains`, `ngorongoro crater aerial` |
| **Pexels Keywords** | `Serengeti Tanzania savanna`, `Tanzania wildlife landscape` |
| **Adobe Stock Keywords** | `Serengeti plains editorial landscape portrait`, `Tanzania safari horizon panoramic` |

---

#### IMAGE-HP-004 — Homepage Destination Card: Uganda

| Field | Value |
|-------|-------|
| **Page** | Homepage (`/`) |
| **Component** | `src/components/home/DestinationCard.tsx` |
| **Section** | Destinations Preview |
| **Current Status** | ❌ Placeholder + missing `imageSrc` field |
| **Purpose** | Country card hero — Uganda |
| **Recommended Subject** | Bwindi Impenetrable Forest canopy — lush rainforest from above or below; misty tree line; or a guide leading trekkers into the forest. Avoid showing actual gorillas here (save for gallery and destinations page). |
| **Editorial Style** | Lush, mysterious, intimate. Greens are vivid — rare in safari photography. |
| **Composition** | Portrait. Dense vegetation. Dappled light. Human scale (guide or trekker) optional to provide reference. |
| **Orientation** | Portrait |
| **Ideal Aspect Ratio** | 3:4 |
| **Minimum Resolution** | 1200 × 1600px |
| **Suggested Filename** | `homepage-destinations-uganda-bwindi.jpg` |
| **Suggested Alt Text** | `The ancient Bwindi Impenetrable Forest, Uganda` |
| **Loading Priority** | Lazy |
| **Unsplash Keywords** | `bwindi forest rainforest uganda`, `african rainforest mist`, `gorilla trekking forest trail` |
| **Pexels Keywords** | `Uganda rainforest canopy`, `Bwindi forest trail` |
| **Adobe Stock Keywords** | `Bwindi Impenetrable Forest Uganda aerial editorial`, `Uganda rainforest trekking editorial` |

---

#### IMAGE-HP-005 — Homepage Destination Card: Rwanda

| Field | Value |
|-------|-------|
| **Page** | Homepage (`/`) |
| **Component** | `src/components/home/DestinationCard.tsx` |
| **Section** | Destinations Preview |
| **Current Status** | ❌ Placeholder + missing `imageSrc` field |
| **Purpose** | Country card hero — Rwanda |
| **Recommended Subject** | Volcanoes National Park — rolling green volcanoes in mist, or Rwanda's famous terraced hills with morning cloud. The "land of a thousand hills" character is the visual hook. |
| **Editorial Style** | Ethereal and verdant. Rwanda's emerald green hills under mist create a palette unlike any other African destination. |
| **Composition** | Portrait. Layered hills receding into mist. Cool-warm contrast. |
| **Orientation** | Portrait |
| **Ideal Aspect Ratio** | 3:4 |
| **Minimum Resolution** | 1200 × 1600px |
| **Suggested Filename** | `homepage-destinations-rwanda-volcanoes.jpg` |
| **Suggested Alt Text** | `Mist-wrapped volcanoes, Volcanoes National Park, Rwanda` |
| **Loading Priority** | Lazy |
| **Unsplash Keywords** | `rwanda volcanoes national park`, `rwanda green hills mist`, `volcanoes rwanda landscape aerial` |
| **Pexels Keywords** | `Rwanda hills landscape mist`, `Volcanoes National Park Rwanda` |
| **Adobe Stock Keywords** | `Rwanda Volcanoes National Park editorial landscape`, `Rwanda thousand hills mist aerial` |

---

#### IMAGE-HP-006 through IMAGE-HP-011 — Homepage Experience Cards (6 images)

These six cards in `ExperiencesSection` each carry a portrait-oriented image. They are rendered by `ExperienceCard.tsx` (Server Component), which uses the `placeholderFrom`/`placeholderTo` gradient pattern.

---

##### IMAGE-HP-006 — Experience: Luxury Safaris

| Field | Value |
|-------|-------|
| **Component** | `src/components/home/ExperienceCard.tsx` |
| **Section** | Experiences Section — "Ways to Travel" |
| **Current Status** | ❌ Placeholder |
| **Recommended Subject** | Interior of a luxury tented camp at golden hour — canvas walls glowing warm, a handmade wooden table set for dinner, candles, the bush visible through an open flap. Alternatively: a private game-drive vehicle at dusk, guests with binoculars silhouetted against the horizon. |
| **Composition** | Portrait. Warm interior light. Cinematic depth of field. No visible branding. |
| **Orientation** | Portrait |
| **Ideal Aspect Ratio** | 3:4 |
| **Minimum Resolution** | 1000 × 1333px |
| **Suggested Filename** | `homepage-experiences-luxury-safari-camp.jpg` |
| **Suggested Alt Text** | `Candlelit luxury tented camp interior at dusk` |
| **Loading Priority** | Lazy |
| **Unsplash Keywords** | `luxury safari camp interior`, `tented camp candlelight`, `african safari lodge interior` |
| **Adobe Stock Keywords** | `luxury tented camp interior editorial Africa`, `safari lodge candlelight dinner editorial` |

---

##### IMAGE-HP-007 — Experience: Photography Expeditions

| Field | Value |
|-------|-------|
| **Component** | `src/components/home/ExperienceCard.tsx` |
| **Section** | Experiences Section |
| **Current Status** | ❌ Placeholder |
| **Recommended Subject** | A photographer (with camera and long telephoto lens) positioned in a vehicle, pointing toward unseen wildlife. The focus is on the act of looking and waiting — patience, craft, golden light on the photographer. |
| **Composition** | Portrait. Photographer at lower third. Wide sky above. Backlit silhouette or rim-lit profile. |
| **Orientation** | Portrait |
| **Ideal Aspect Ratio** | 3:4 |
| **Minimum Resolution** | 1000 × 1333px |
| **Suggested Filename** | `homepage-experiences-photography-expedition.jpg` |
| **Suggested Alt Text** | `Photographer with telephoto lens on safari in East Africa` |
| **Loading Priority** | Lazy |
| **Unsplash Keywords** | `wildlife photographer safari vehicle`, `photography safari telephoto lens`, `wildlife photography africa vehicle` |
| **Adobe Stock Keywords** | `wildlife photographer safari vehicle editorial`, `Africa photography expedition sunset` |

---

##### IMAGE-HP-008 — Experience: Family Adventures

| Field | Value |
|-------|-------|
| **Component** | `src/components/home/ExperienceCard.tsx` |
| **Section** | Experiences Section |
| **Current Status** | ❌ Placeholder |
| **Recommended Subject** | A child and adult looking out from a safari vehicle together — binoculars, expressions of wonder. No faces required (back-of-head compositions are ideal, avoiding model release complexities). Alternatively: a family at a bush breakfast table with a savanna backdrop. |
| **Composition** | Portrait. Human scale central. Landscape visible behind. |
| **Orientation** | Portrait |
| **Ideal Aspect Ratio** | 3:4 |
| **Minimum Resolution** | 1000 × 1333px |
| **Suggested Filename** | `homepage-experiences-family-safari.jpg` |
| **Suggested Alt Text** | `Family watching wildlife from a safari vehicle` |
| **Loading Priority** | Lazy |
| **Unsplash Keywords** | `family safari vehicle africa`, `children safari binoculars`, `family wildlife watching africa` |
| **Adobe Stock Keywords** | `family safari vehicle East Africa editorial`, `child binoculars safari Africa` |

---

##### IMAGE-HP-009 — Experience: Honeymoon Escapes

| Field | Value |
|-------|-------|
| **Component** | `src/components/home/ExperienceCard.tsx` |
| **Section** | Experiences Section |
| **Current Status** | ❌ Placeholder |
| **Recommended Subject** | A private plunge pool or outdoor bath at a luxury camp, overlooking a savanna or waterhole. Two chairs at a sundowner position. Or: a bush dinner table set for two under the Milky Way (back-lit candles, stars above). Avoid clichéd couple silhouettes. |
| **Composition** | Portrait. Intimate scale. Warm candlelight or golden hour. Empty chairs suggest presence without requiring people. |
| **Orientation** | Portrait |
| **Ideal Aspect Ratio** | 3:4 |
| **Minimum Resolution** | 1000 × 1333px |
| **Suggested Filename** | `homepage-experiences-honeymoon-camp.jpg` |
| **Suggested Alt Text** | `Private outdoor bath overlooking the African wilderness` |
| **Loading Priority** | Lazy |
| **Unsplash Keywords** | `luxury safari outdoor bath`, `safari camp sundowner view`, `private camp africa romantic` |
| **Adobe Stock Keywords** | `luxury safari camp plunge pool editorial Africa`, `Africa honeymoon camp sunset editorial` |

---

##### IMAGE-HP-010 — Experience: Cultural Journeys

| Field | Value |
|-------|-------|
| **Component** | `src/components/home/ExperienceCard.tsx` |
| **Section** | Experiences Section |
| **Current Status** | ❌ Placeholder |
| **Recommended Subject** | A Maasai elder or community member in traditional attire (red shuka, beaded jewellery), photographed with dignity — not posed for tourism, but engaged in daily life or conversation. Alternatively: a Swahili coastal doorway in Lamu or Zanzibar Stone Town — carved wood, warm evening light. |
| **Composition** | Portrait. Subject fills frame with confidence. Cultural context visible in background. |
| **Orientation** | Portrait |
| **Ideal Aspect Ratio** | 3:4 |
| **Minimum Resolution** | 1000 × 1333px |
| **Suggested Filename** | `homepage-experiences-cultural-maasai.jpg` |
| **Suggested Alt Text** | `Maasai community member in traditional attire, Kenya` |
| **Loading Priority** | Lazy |
| **Unsplash Keywords** | `maasai elder portrait kenya`, `maasai community red shuka`, `swahili coast zanzibar doorway` |
| **Adobe Stock Keywords** | `Maasai cultural portrait editorial Kenya`, `Swahili coast heritage Zanzibar editorial` |

---

##### IMAGE-HP-011 — Experience: Beach Holidays

| Field | Value |
|-------|-------|
| **Component** | `src/components/home/ExperienceCard.tsx` |
| **Section** | Experiences Section |
| **Current Status** | ❌ Placeholder |
| **Recommended Subject** | Zanzibar — turquoise Indian Ocean, white sand, a traditional dhow on the horizon. Or Lamu's narrow Swahili streets. Alternatively: aerial view of Diani Beach, Kenya at low tide. |
| **Composition** | Portrait. Water colour vivid but natural (no oversaturation). Horizon visible. Pristine and uncrowded. |
| **Orientation** | Portrait |
| **Ideal Aspect Ratio** | 3:4 |
| **Minimum Resolution** | 1000 × 1333px |
| **Suggested Filename** | `homepage-experiences-beach-zanzibar.jpg` |
| **Suggested Alt Text** | `Turquoise Indian Ocean waters, Zanzibar` |
| **Loading Priority** | Lazy |
| **Unsplash Keywords** | `zanzibar beach indian ocean turquoise`, `kenya coast beach dhow`, `lamu beach kenya aerial` |
| **Adobe Stock Keywords** | `Zanzibar beach aerial editorial`, `Indian Ocean East Africa coast pristine editorial` |

---

#### IMAGE-HP-012 through IMAGE-HP-014 — Homepage Package Cards (3 images)

Rendered by `PackageCard.tsx` (Server Component, reused on `/packages`). Portrait orientation.

---

##### IMAGE-HP-012 — Package: Mara Migration Safari

| Field | Value |
|-------|-------|
| **Component** | `src/components/home/PackageCard.tsx` |
| **Section** | Featured Packages — "Carefully crafted itineraries" |
| **Current Status** | ❌ Placeholder |
| **Recommended Subject** | Wildebeest Mara River crossing — thousands of animals mid-stream, spray and dust, crocodiles visible. This is the definitive Mara image. Alternatively: game-drive vehicle positioned at a crossing viewpoint, guests watching. |
| **Composition** | Landscape. Chaos and movement in the mid-ground. Riverbanks framing. |
| **Orientation** | Landscape |
| **Ideal Aspect Ratio** | 16:9 |
| **Minimum Resolution** | 1600 × 900px |
| **Suggested Filename** | `homepage-packages-mara-migration.jpg` |
| **Suggested Alt Text** | `Wildebeest crossing the Mara River during the Great Migration, Kenya` |
| **Loading Priority** | Lazy |
| **Unsplash Keywords** | `wildebeest mara river crossing`, `great migration kenya river`, `maasai mara river crossing herd` |
| **Adobe Stock Keywords** | `Great Migration Mara River crossing editorial`, `wildebeest river crossing Serengeti Kenya` |

---

##### IMAGE-HP-013 — Package: Serengeti Secrets

| Field | Value |
|-------|-------|
| **Component** | `src/components/home/PackageCard.tsx` |
| **Section** | Featured Packages |
| **Current Status** | ❌ Placeholder |
| **Recommended Subject** | Hot air balloon over the Serengeti at dawn — balloon in silhouette against a golden sky, the endless plains below visible. This is the defining experience of this package. |
| **Composition** | Landscape. Balloon upper-left or upper-centre. Serengeti floor below. Pre-sunrise or sunrise colour in sky. |
| **Orientation** | Landscape |
| **Ideal Aspect Ratio** | 16:9 |
| **Minimum Resolution** | 1600 × 900px |
| **Suggested Filename** | `homepage-packages-serengeti-balloon.jpg` |
| **Suggested Alt Text** | `Hot air balloon over the Serengeti at dawn, Tanzania` |
| **Loading Priority** | Lazy |
| **Unsplash Keywords** | `serengeti balloon dawn`, `hot air balloon africa sunrise`, `balloon safari serengeti plains` |
| **Adobe Stock Keywords** | `Serengeti balloon safari dawn editorial Tanzania`, `hot air balloon Africa savanna sunrise` |

---

##### IMAGE-HP-014 — Package: Gorilla Highlands

| Field | Value |
|-------|-------|
| **Component** | `src/components/home/PackageCard.tsx` |
| **Section** | Featured Packages |
| **Current Status** | ❌ Placeholder |
| **Recommended Subject** | Mountain gorilla — a single gorilla (ideally a silverback or a mother with infant) photographed at close-medium range in natural forest light, with foliage framing. Ethical, respectful composition — no flash, natural dappled light. |
| **Composition** | Landscape. Gorilla fills centre-left. Forest background. Shallow depth of field. |
| **Orientation** | Landscape |
| **Ideal Aspect Ratio** | 16:9 |
| **Minimum Resolution** | 1600 × 900px |
| **Suggested Filename** | `homepage-packages-gorilla-highlands.jpg` |
| **Suggested Alt Text** | `Mountain gorilla in Volcanoes National Park, Rwanda` |
| **Loading Priority** | Lazy |
| **Unsplash Keywords** | `mountain gorilla rwanda forest`, `gorilla trekking bwindi`, `silverback gorilla natural light` |
| **Adobe Stock Keywords** | `mountain gorilla Rwanda editorial natural light`, `Bwindi gorilla forest Uganda editorial` |

---

#### IMAGE-HP-015 through IMAGE-HP-020 — Homepage Gallery Preview (6 images)

Rendered by `GalleryPreview.tsx` (Server Component). These are the same 6 items as `GALLERY_ITEMS` in `homepage.ts`, sharing subjects with the full gallery but as preview thumbnails.

These 6 images are a subset of the full gallery grid (see Section 6.5). Source the same files:

| Image | Maps to Gallery Grid Item | Filename |
|-------|--------------------------|----------|
| Maasai Mara at Dawn (wide) | `fg-01` | `gallery-grid-maasai-mara-dawn-01.jpg` |
| Mountain Gorilla, Rwanda (tall) | `fg-02` | `gallery-grid-gorilla-rwanda-01.jpg` |
| Serengeti Sunset (normal) | `fg-03` | `gallery-grid-serengeti-sunset-01.jpg` |
| Elephant, Amboseli (normal) | `fg-04` | `gallery-grid-elephant-amboseli-01.jpg` |
| Ngorongoro Crater (normal) | `fg-05` | `gallery-grid-ngorongoro-crater-01.jpg` |
| Zanzibar, Indian Ocean (normal) | `fg-06` | `gallery-grid-zanzibar-ocean-01.jpg` |

All gallery images are catalogued in full in Section 6.5. The homepage preview reuses the same files.

---

### 6.2 About (`/about`)

#### IMAGE-AB-001 — About Hero Background

| Field | Value |
|-------|-------|
| **Page** | About (`/about`) |
| **Component** | `src/components/about/AboutHero.tsx` |
| **Section** | Hero — "Born from a passion for wild Africa" |
| **Current Status** | ❌ Placeholder |
| **Purpose** | Sets the brand story tone — personal, authentic, rooted in the land |
| **Recommended Subject** | A guide or ranger walking through the bush — long shot, the person small in an enormous landscape. Alternatively: the view from inside a tent at dawn, looking out across a waterhole with animals gathered. The focus is on the human relationship with the wild, not wildlife itself. |
| **Editorial Style** | Quiet, contemplative, personal. Less dramatic than the homepage hero — this is the "why" image. |
| **Composition** | Landscape or slightly wider. Subject (person or perspective point) in lower third. Sky dominant. Warm early morning light. |
| **Orientation** | Landscape |
| **Ideal Aspect Ratio** | 16:9 to 21:9 |
| **Minimum Resolution** | 3000 × 1688px |
| **Suggested Filename** | `about-hero-guide-savanna-dawn.jpg` |
| **Suggested Alt Text** | `A safari guide walking through the East African savanna at dawn` |
| **Loading Priority** | ✅ **PRIORITY — LCP** — use `priority` prop |
| **Unsplash Keywords** | `safari guide walking savanna`, `african wilderness walking guide`, `ranger bushveld dawn` |
| **Adobe Stock Keywords** | `safari guide East Africa walking editorial`, `ranger wilderness dawn landscape editorial` |

---

#### IMAGE-AB-002 — About: Our Story Section (Optional Contextual Image)

| Field | Value |
|-------|-------|
| **Page** | About (`/about`) |
| **Component** | `src/components/about/OurStory.tsx` |
| **Section** | Our Story — "Fifteen years of listening to the land" |
| **Current Status** | No image placeholder in current code — this section is text + pull quote only. **No image required unless the design evolves.** |
| **Notes** | This section currently renders without any image. If a contextual image is desired to break up the text column on desktop, a half-width landscape image could be introduced. Defer until design review. |

---

#### IMAGE-AB-003 through IMAGE-AB-006 — Team Portrait Photos (4 images)

Rendered by `TeamCard.tsx` (Server Component). Portrait orientation, fills card header.

---

##### IMAGE-AB-003 — Team: Amara Nkosi

| Field | Value |
|-------|-------|
| **Component** | `src/components/about/TeamCard.tsx` |
| **Section** | Meet the Team |
| **Current Status** | ❌ Placeholder |
| **Purpose** | Professional portrait of Co-Founder & Head of Expeditions |
| **Recommended Subject** | A professional portrait of a female guide or conservation professional — in the field (not a studio), natural light, with the bush or a vehicle in the background. Subject should convey authority, warmth, and deep comfort in the environment. |
| **Composition** | Portrait. Head and shoulders to waist. Natural background (savanna, bush, or vehicle). |
| **Orientation** | Portrait |
| **Ideal Aspect Ratio** | 3:4 |
| **Minimum Resolution** | 900 × 1200px |
| **Suggested Filename** | `about-team-amara-nkosi-portrait.jpg` |
| **Suggested Alt Text** | `Amara Nkosi, Co-Founder and Head of Expeditions at Rêve Africa Safaris` |
| **Loading Priority** | Lazy |
| **Notes** | If actual portraits of named team members are available from the client, use those. If sourcing from stock, use a plausible, dignified professional portrait that conveys the character described in the bio. Ensure ethnic representation consistent with "Born in Naivasha, Kenya." |
| **Unsplash Keywords** | `african woman safari guide portrait`, `kenyan woman naturalist portrait`, `female guide wildlife professional` |
| **Adobe Stock Keywords** | `African female guide conservation professional editorial portrait`, `Kenyan woman safari professional field` |

---

##### IMAGE-AB-004 — Team: David Mwangi

| Field | Value |
|-------|-------|
| **Component** | `src/components/about/TeamCard.tsx` |
| **Section** | Meet the Team |
| **Current Status** | ❌ Placeholder |
| **Recommended Subject** | A professional portrait of a male guide or wildlife ranger — mid-40s to 50s, authoritative, field-worn in a good way. Background should suggest Northern Kenya or conservation context (rangeland, scrubland, or with wildlife in soft background). |
| **Composition** | Portrait. Natural field light. Confident stance. |
| **Orientation** | Portrait |
| **Ideal Aspect Ratio** | 3:4 |
| **Minimum Resolution** | 900 × 1200px |
| **Suggested Filename** | `about-team-david-mwangi-portrait.jpg` |
| **Suggested Alt Text** | `David Mwangi, Co-Founder and Conservation Director at Rêve Africa Safaris` |
| **Loading Priority** | Lazy |
| **Unsplash Keywords** | `african male ranger wildlife portrait`, `kenyan male conservation guide`, `wildlife ranger professional portrait africa` |
| **Adobe Stock Keywords** | `African male conservation ranger editorial portrait`, `Kenya wildlife ranger field portrait` |

---

##### IMAGE-AB-005 — Team: Fatima Al-Rashid

| Field | Value |
|-------|-------|
| **Component** | `src/components/about/TeamCard.tsx` |
| **Section** | Meet the Team |
| **Current Status** | ❌ Placeholder |
| **Recommended Subject** | A professional portrait of a female safari consultant of Tanzanian/Arab heritage — professional, warm, field or office context both acceptable. Serengeti or Arusha setting ideal. |
| **Composition** | Portrait. Warm light. Professional but not stiff. |
| **Orientation** | Portrait |
| **Ideal Aspect Ratio** | 3:4 |
| **Minimum Resolution** | 900 × 1200px |
| **Suggested Filename** | `about-team-fatima-alrashid-portrait.jpg` |
| **Suggested Alt Text** | `Fatima Al-Rashid, Senior Safari Consultant at Rêve Africa Safaris` |
| **Loading Priority** | Lazy |
| **Unsplash Keywords** | `female safari consultant portrait professional`, `african woman professional portrait tanzania`, `safari consultant professional headshot field` |
| **Adobe Stock Keywords** | `female Africa safari consultant professional portrait editorial`, `Tanzania safari specialist professional field` |

---

##### IMAGE-AB-006 — Team: Sipho Dlamini

| Field | Value |
|-------|-------|
| **Component** | `src/components/about/TeamCard.tsx` |
| **Section** | Meet the Team |
| **Current Status** | ❌ Placeholder |
| **Recommended Subject** | A professional portrait of a male Southern Africa specialist — Okavango Delta or Botswana scrubland setting. Tracker or guide archetype. |
| **Composition** | Portrait. Strong natural light. Outdoor background (delta vegetation, or open sky). |
| **Orientation** | Portrait |
| **Ideal Aspect Ratio** | 3:4 |
| **Minimum Resolution** | 900 × 1200px |
| **Suggested Filename** | `about-team-sipho-dlamini-portrait.jpg` |
| **Suggested Alt Text** | `Sipho Dlamini, Southern Africa Specialist at Rêve Africa Safaris` |
| **Loading Priority** | Lazy |
| **Unsplash Keywords** | `botswana male tracker guide portrait`, `southern africa male guide professional`, `okavango guide portrait field` |
| **Adobe Stock Keywords** | `Botswana male tracker editorial portrait`, `Southern Africa wildlife guide professional field` |

---

#### IMAGE-AB-007 — About: Conservation Section Background or Context

| Field | Value |
|-------|-------|
| **Page** | About (`/about`) |
| **Component** | `src/components/about/ConservationCommitment.tsx` |
| **Section** | Conservation Commitment — "Travel that gives more than it takes" |
| **Current Status** | No image in current code — dark surface section with stat cards and text only. **Optional contextual image.** |
| **Notes** | The current implementation uses no images in this section; it relies on a dark basalt surface with text and statistics. If a background image is introduced (dark overlay treatment), it should show a conservation field worker or anti-poaching team member — not the tourist perspective. Defer until design review confirms an image is desired. |

---

### 6.3 Destinations (`/destinations`)

#### IMAGE-DS-001 — Destinations Hero Background

| Field | Value |
|-------|-------|
| **Page** | Destinations (`/destinations`) |
| **Component** | `src/components/destinations/DestinationsHero.tsx` |
| **Section** | Hero — "The world's greatest wilderness" |
| **Current Status** | ❌ Placeholder |
| **Purpose** | Sets the continental scope of the page |
| **Recommended Subject** | An aerial or wide-angle image that conveys the vastness of the African wilderness — the Serengeti ecosystem from above, or a wide shot of the Okavango Delta's waterways from a light aircraft. The image should feel like looking down on an entire world. |
| **Editorial Style** | Grand, aerial, aspirational. Scale is the subject. |
| **Composition** | Landscape/wide. Horizon. Texture of landscape below. No single dominant animal. |
| **Orientation** | Landscape |
| **Ideal Aspect Ratio** | 16:9 to 21:9 |
| **Minimum Resolution** | 3000 × 1688px |
| **Suggested Filename** | `destinations-hero-africa-aerial-wilderness.jpg` |
| **Suggested Alt Text** | `Aerial view of East Africa's vast wilderness landscape` |
| **Loading Priority** | ✅ **PRIORITY — LCP** |
| **Unsplash Keywords** | `africa aerial wilderness landscape`, `serengeti aerial view`, `okavango delta aerial` |
| **Adobe Stock Keywords** | `East Africa aerial wilderness editorial panoramic`, `African savanna aerial vista editorial` |

---

#### IMAGE-DS-002 through IMAGE-DS-007 — Country Cards (6 images)

Rendered by `CountryCard.tsx` (Server Component). Portrait orientation, full card bleed.

##### IMAGE-DS-002 — Country: Kenya

| Field | Value |
|-------|-------|
| **Recommended Subject** | Maasai Mara landscape — iconic acacia trees, golden grass plains, distant herd. Classic Kenya panorama. |
| **Suggested Filename** | `destinations-countries-kenya-mara-landscape.jpg` |
| **Suggested Alt Text** | `Acacia trees and golden plains of the Maasai Mara, Kenya` |
| **Orientation** | Portrait | **Aspect Ratio** | 3:4 | **Min Resolution** | 1200 × 1600px |
| **Unsplash Keywords** | `maasai mara landscape acacia kenya`, `kenya safari savanna portrait` |
| **Adobe Stock Keywords** | `Maasai Mara landscape portrait editorial Kenya` |

##### IMAGE-DS-003 — Country: Tanzania

| Field | Value |
|-------|-------|
| **Recommended Subject** | Serengeti endless plains at first light — wildebeest silhouettes, or the Ngorongoro crater rim at sunrise. |
| **Suggested Filename** | `destinations-countries-tanzania-serengeti-plains.jpg` |
| **Suggested Alt Text** | `The endless Serengeti plains at dawn, Tanzania` |
| **Orientation** | Portrait | **Aspect Ratio** | 3:4 | **Min Resolution** | 1200 × 1600px |
| **Unsplash Keywords** | `serengeti plains dawn silhouette`, `tanzania safari landscape portrait` |
| **Adobe Stock Keywords** | `Serengeti Tanzania plains editorial portrait` |

##### IMAGE-DS-004 — Country: Rwanda

| Field | Value |
|-------|-------|
| **Recommended Subject** | Volcanoes National Park — misty volcano peaks rising above rainforest canopy, or Rwanda's terraced hillsides from above. |
| **Suggested Filename** | `destinations-countries-rwanda-volcanoes-mist.jpg` |
| **Suggested Alt Text** | `Mist rising over Volcanoes National Park, Rwanda` |
| **Orientation** | Portrait | **Aspect Ratio** | 3:4 | **Min Resolution** | 1200 × 1600px |
| **Unsplash Keywords** | `volcanoes national park rwanda mist`, `rwanda green hills canopy` |
| **Adobe Stock Keywords** | `Rwanda Volcanoes National Park mist portrait editorial` |

##### IMAGE-DS-005 — Country: Uganda

| Field | Value |
|-------|-------|
| **Recommended Subject** | Bwindi forest interior — shafts of morning light through ancient trees, lush undergrowth, trail through the forest. |
| **Suggested Filename** | `destinations-countries-uganda-bwindi-forest.jpg` |
| **Suggested Alt Text** | `Morning light filtering through Bwindi Impenetrable Forest, Uganda` |
| **Orientation** | Portrait | **Aspect Ratio** | 3:4 | **Min Resolution** | 1200 × 1600px |
| **Unsplash Keywords** | `bwindi forest morning light uganda`, `rainforest interior africa shafts light` |
| **Adobe Stock Keywords** | `Bwindi Impenetrable Forest interior Uganda editorial` |

##### IMAGE-DS-006 — Country: Botswana

| Field | Value |
|-------|-------|
| **Recommended Subject** | Okavango Delta from above — waterways threading through papyrus, islands, elephant herds at the water's edge. The aerial perspective is Botswana's defining visual. |
| **Suggested Filename** | `destinations-countries-botswana-okavango-aerial.jpg` |
| **Suggested Alt Text** | `Aerial view of the Okavango Delta waterways, Botswana` |
| **Orientation** | Portrait | **Aspect Ratio** | 3:4 | **Min Resolution** | 1200 × 1600px |
| **Unsplash Keywords** | `okavango delta aerial botswana`, `botswana delta waterways aerial` |
| **Adobe Stock Keywords** | `Okavango Delta aerial Botswana editorial portrait` |

##### IMAGE-DS-007 — Country: Namibia

| Field | Value |
|-------|-------|
| **Recommended Subject** | Sossusvlei red dunes — towering sand dunes against a deep blue sky, the dead Vlei trees below, or a lone oryx at the dune crest. |
| **Suggested Filename** | `destinations-countries-namibia-sossusvlei-dunes.jpg` |
| **Suggested Alt Text** | `The iconic red dunes of Sossusvlei, Namibia` |
| **Orientation** | Portrait | **Aspect Ratio** | 3:4 | **Min Resolution** | 1200 × 1600px |
| **Unsplash Keywords** | `sossusvlei dunes namibia red`, `namibia desert dunes blue sky portrait` |
| **Adobe Stock Keywords** | `Sossusvlei Namibia dunes portrait editorial` |

---

#### IMAGE-DS-008 through IMAGE-DS-011 — Signature Experience Cards (4 images)

Rendered by `SignatureExperienceCard.tsx` (Server Component). Landscape orientation.

##### IMAGE-DS-008 — Experience: Hot Air Balloon Safari

| Field | Value |
|-------|-------|
| **Recommended Subject** | Balloon at launch or in flight over the Mara or Serengeti at dawn — first light, the balloon glowing from the burner flame, the landscape stretching to the horizon. |
| **Suggested Filename** | `destinations-experiences-balloon-safari-dawn.jpg` |
| **Suggested Alt Text** | `Hot air balloon at dawn over the Maasai Mara, Kenya` |
| **Orientation** | Landscape | **Aspect Ratio** | 16:9 | **Min Resolution** | 1600 × 900px |
| **Unsplash Keywords** | `hot air balloon africa dawn serengeti`, `balloon safari mara sunrise` |
| **Adobe Stock Keywords** | `hot air balloon safari Serengeti dawn editorial` |

##### IMAGE-DS-009 — Experience: Guided Walking Safari

| Field | Value |
|-------|-------|
| **Recommended Subject** | A file of walkers (guide leading, 2–3 guests) moving through the African bush — the guide at front with a rifle or walking stick, the bush close on either side. The vulnerability and intimacy of walking is the subject. |
| **Suggested Filename** | `destinations-experiences-walking-safari-guide.jpg` |
| **Suggested Alt Text** | `A guide leading guests on a walking safari through the African bush` |
| **Orientation** | Landscape | **Aspect Ratio** | 16:9 | **Min Resolution** | 1600 × 900px |
| **Unsplash Keywords** | `walking safari guide africa`, `bush walk guide guests`, `africa walking safari editorial` |
| **Adobe Stock Keywords** | `walking safari guide Africa editorial landscape` |

##### IMAGE-DS-010 — Experience: Fly-in Safari Circuit

| Field | Value |
|-------|-------|
| **Recommended Subject** | A small bush plane (Cessna Caravan type) on a grass airstrip, with the African wilderness visible to the horizon. Or: an aerial view from inside the plane looking down at a wilderness landscape. |
| **Suggested Filename** | `destinations-experiences-fly-in-safari-airstrip.jpg` |
| **Suggested Alt Text** | `A light aircraft on a bush airstrip in the African wilderness` |
| **Orientation** | Landscape | **Aspect Ratio** | 16:9 | **Min Resolution** | 1600 × 900px |
| **Unsplash Keywords** | `bush plane africa airstrip`, `fly-in safari light aircraft africa`, `cessna bush africa airstrip wilderness` |
| **Adobe Stock Keywords** | `bush plane Africa airstrip editorial landscape`, `fly-in safari Kenya Tanzania editorial` |

##### IMAGE-DS-011 — Experience: Gorilla Habituation

| Field | Value |
|-------|-------|
| **Recommended Subject** | A mountain gorilla in the forest — silverback or gorilla family, photographed with ethical distance and natural light. The quality of proximity and intimacy, not just the animal, is the story. Alternatively: a trekker sitting very still while a gorilla moves through the background. |
| **Suggested Filename** | `destinations-experiences-gorilla-habituation.jpg` |
| **Suggested Alt Text** | `Mountain gorilla family in Bwindi Impenetrable Forest, Uganda` |
| **Orientation** | Landscape | **Aspect Ratio** | 16:9 | **Min Resolution** | 1600 × 900px |
| **Unsplash Keywords** | `mountain gorilla forest uganda`, `gorilla habituation bwindi`, `silverback gorilla forest natural light` |
| **Adobe Stock Keywords** | `mountain gorilla Uganda Bwindi editorial landscape`, `silverback gorilla forest Rwanda editorial` |

---

#### IMAGE-DS-012 through IMAGE-DS-015 — Featured Lodge Cards (4 images)

Rendered by `LodgeCard.tsx` (Server Component). Landscape 16:9.

##### IMAGE-DS-012 — Lodge: Mara Intimate Camp

| Field | Value |
|-------|-------|
| **Recommended Subject** | A luxury tented camp at dusk — canvas tents glowing amber in evening light, the Mara plains visible beyond, acacia trees silhouetted. No pool required; simplicity and location are the story. |
| **Suggested Filename** | `destinations-lodges-mara-intimate-camp.jpg` |
| **Suggested Alt Text** | `Luxury tented camp at dusk in the Maasai Mara conservancy, Kenya` |
| **Orientation** | Landscape | **Aspect Ratio** | 16:9 | **Min Resolution** | 1600 × 900px |
| **Unsplash Keywords** | `luxury tented camp kenya dusk`, `maasai mara camp sunset`, `safari tented camp africa evening` |
| **Adobe Stock Keywords** | `luxury tented camp Maasai Mara dusk editorial` |

##### IMAGE-DS-013 — Lodge: Serengeti Migration Retreat

| Field | Value |
|-------|-------|
| **Recommended Subject** | A mobile tented camp on the Serengeti plains — lightweight canvas, simple wooden deck, the endless grassland extending to the horizon. No permanent structures. |
| **Suggested Filename** | `destinations-lodges-serengeti-migration-camp.jpg` |
| **Suggested Alt Text** | `Mobile tented camp on the Serengeti plains, Tanzania` |
| **Orientation** | Landscape | **Aspect Ratio** | 16:9 | **Min Resolution** | 1600 × 900px |
| **Unsplash Keywords** | `mobile camp serengeti tanzania`, `tent camp serengeti plains`, `migration camp tanzania editorial` |
| **Adobe Stock Keywords** | `Serengeti mobile camp Tanzania editorial landscape` |

##### IMAGE-DS-014 — Lodge: Bwindi Forest Lodge

| Field | Value |
|-------|-------|
| **Recommended Subject** | Forest lodge structure — a cottage or suite nestled among ancient rainforest trees. Dark wood, forest surroundings, warm interior glow visible through the window. |
| **Suggested Filename** | `destinations-lodges-bwindi-forest-lodge.jpg` |
| **Suggested Alt Text** | `Forest lodge nestled in the rainforest at Bwindi, Uganda` |
| **Orientation** | Landscape | **Aspect Ratio** | 16:9 | **Min Resolution** | 1600 × 900px |
| **Unsplash Keywords** | `forest lodge rainforest africa`, `bwindi lodge cottage`, `uganda lodge forest` |
| **Adobe Stock Keywords** | `rainforest lodge Uganda Bwindi editorial` |

##### IMAGE-DS-015 — Lodge: Okavango Island Camp

| Field | Value |
|-------|-------|
| **Recommended Subject** | A mokoro (dugout canoe) gliding through the Okavango waterways — papyrus reeds on either side, still water, the poler standing at the back. Alternatively: the camp viewed from the water. |
| **Suggested Filename** | `destinations-lodges-okavango-island-camp.jpg` |
| **Suggested Alt Text** | `Mokoro canoe on the waterways of the Okavango Delta, Botswana` |
| **Orientation** | Landscape | **Aspect Ratio** | 16:9 | **Min Resolution** | 1600 × 900px |
| **Unsplash Keywords** | `mokoro canoe okavango delta botswana`, `okavango waterway canoe`, `delta camp botswana water` |
| **Adobe Stock Keywords** | `Okavango Delta mokoro canoe Botswana editorial` |

---

### 6.4 Safari Packages (`/packages`)

#### IMAGE-PK-001 — Packages Hero Background

| Field | Value |
|-------|-------|
| **Page** | Packages (`/packages`) |
| **Component** | `src/components/packages/PackagesHero.tsx` |
| **Section** | Hero — "Itineraries built around wonder, not convenience" |
| **Current Status** | ❌ Placeholder |
| **Recommended Subject** | An elevated view from inside a game-drive vehicle — driver's point of view, looking ahead across the bush at dawn, the dashboard rail in the lower foreground. Conveys the anticipation of a game drive about to begin. Or: a wide shot of multiple safari vehicles spread across the Mara at distance, dust rising. |
| **Editorial Style** | Experiential, first-person. The viewer should feel as if they are beginning a drive. |
| **Composition** | Landscape. Wide. Warm dawn light. Open plain ahead. |
| **Orientation** | Landscape |
| **Ideal Aspect Ratio** | 16:9 to 21:9 |
| **Minimum Resolution** | 3000 × 1688px |
| **Suggested Filename** | `packages-hero-game-drive-dawn-view.jpg` |
| **Suggested Alt Text** | `Dawn game drive view across the African savanna from inside a safari vehicle` |
| **Loading Priority** | ✅ **PRIORITY — LCP** |
| **Unsplash Keywords** | `game drive dawn view safari vehicle`, `safari vehicle point of view africa`, `game drive morning africa plains` |
| **Adobe Stock Keywords** | `game drive dawn point of view Africa editorial`, `safari vehicle interior view savanna editorial` |

---

#### IMAGE-PK-002 through IMAGE-PK-007 — All Package Cards (6 images)

These are the same card component (`PackageCard.tsx`) used on the homepage, but now displaying all 6 packages. Three overlap with the homepage (Images HP-012–014 above). Three additional:

##### IMAGE-PK-005 — Package: Botswana Immersion

| Field | Value |
|-------|-------|
| **Recommended Subject** | Chobe riverfront elephant herd — a large family group at the water's edge, or an aerial view of Botswana's elephant concentrations. Botswana is defined by elephants; this is the package's visual identity. |
| **Suggested Filename** | `packages-botswana-immersion-elephants.jpg` |
| **Suggested Alt Text** | `Elephant herd on the Chobe River, Botswana` |
| **Orientation** | Landscape | **Aspect Ratio** | 16:9 | **Min Resolution** | 1600 × 900px |
| **Unsplash Keywords** | `chobe river elephants botswana`, `botswana elephant herd water`, `okavango elephant aerial` |
| **Adobe Stock Keywords** | `Chobe River elephants Botswana editorial landscape` |

##### IMAGE-PK-006 — Package: East Africa Grand Tour

| Field | Value |
|-------|-------|
| **Recommended Subject** | A composite-character image that evokes the breadth of Kenya + Tanzania — a wide Amboseli elephant herd with Kilimanjaro behind (the definitive East Africa image), or a Serengeti balloon + migration view. Kilimanjaro-elephants is a strong choice as it's recognisable globally. |
| **Suggested Filename** | `packages-east-africa-grand-tour-amboseli.jpg` |
| **Suggested Alt Text** | `Elephant herd with Mount Kilimanjaro in the background, Amboseli, Kenya` |
| **Orientation** | Landscape | **Aspect Ratio** | 16:9 | **Min Resolution** | 1600 × 900px |
| **Unsplash Keywords** | `amboseli elephant kilimanjaro`, `kilimanjaro elephant africa`, `east africa grand tour landscape` |
| **Adobe Stock Keywords** | `Amboseli elephant Kilimanjaro editorial landscape Kenya` |

##### IMAGE-PK-007 — Package: Desert & Dunes of Namibia

| Field | Value |
|-------|-------|
| **Recommended Subject** | Sossusvlei — two trekkers climbing the ridge of a massive red sand dune at dawn, tiny against the dune face, the dead Vlei visible far below. Or: the skeleton of a dead tree in Deadvlei against a deep blue sky and red dunes. |
| **Suggested Filename** | `packages-namibia-desert-dunes-sossusvlei.jpg` |
| **Suggested Alt Text** | `Trekkers climbing the dunes of Sossusvlei at dawn, Namibia` |
| **Orientation** | Landscape | **Aspect Ratio** | 16:9 | **Min Resolution** | 1600 × 900px |
| **Unsplash Keywords** | `sossusvlei dunes people climbing namibia`, `deadvlei tree dunes namibia`, `namib desert dunes dawn people` |
| **Adobe Stock Keywords** | `Sossusvlei dunes Namibia dawn editorial landscape`, `Deadvlei Namibia red dunes editorial` |

---

#### IMAGE-PK-008 — Signature Itinerary Feature Image

| Field | Value |
|-------|-------|
| **Page** | Packages (`/packages`) |
| **Component** | `src/components/packages/SignatureItinerary.tsx` |
| **Section** | Signature Journey — "East Africa Grand Tour" |
| **Current Status** | ❌ Placeholder |
| **Purpose** | Hero image for the flagship itinerary editorial — the aspirational centrepiece of the packages page |
| **Recommended Subject** | The Mara River crossing — wildebeest mid-stream, banks lined with animals, crocodiles visible, spray and movement. This is the single most powerful image in the East African safari canon and appropriate for the "definitive East African journey." |
| **Editorial Style** | Epic and chaotic — the wild edge of nature. Should feel earned and real, not composed. |
| **Composition** | Portrait (the component uses a tall left panel for this image). River fills the frame. Chaos of movement in centre. |
| **Orientation** | Portrait |
| **Ideal Aspect Ratio** | 3:4 |
| **Minimum Resolution** | 1400 × 1867px |
| **Suggested Filename** | `packages-signature-mara-river-crossing.jpg` |
| **Suggested Alt Text** | `Wildebeest crossing the Mara River during the Great Migration` |
| **Loading Priority** | Lazy |
| **Unsplash Keywords** | `mara river crossing wildebeest chaos`, `great migration river crossing`, `mara river crossing aerial` |
| **Adobe Stock Keywords** | `Mara River crossing wildebeest Great Migration editorial portrait` |

---

#### IMAGE-PK-009 through IMAGE-PK-011 — Accommodation Standard Cards (3 images)

Rendered by `AccommodationStandards.tsx`. Landscape 16:9.

##### IMAGE-PK-009 — Accommodation: Classic Luxury

| Field | Value |
|-------|-------|
| **Recommended Subject** | A permanent luxury tented camp suite — canvas and hardwood, four-poster bed with mosquito net, open-sided for views, afternoon light. High-end but not sterile. |
| **Suggested Filename** | `packages-accommodation-classic-luxury-tent.jpg` |
| **Suggested Alt Text** | `Interior of a luxury safari tent with a four-poster bed and savanna views` |
| **Orientation** | Landscape | **Aspect Ratio** | 16:9 | **Min Resolution** | 1600 × 900px |
| **Unsplash Keywords** | `luxury safari tent interior four poster`, `africa safari tent suite`, `classic luxury camp bedroom` |
| **Adobe Stock Keywords** | `luxury safari tent interior editorial Africa` |

##### IMAGE-PK-010 — Accommodation: Private & Exclusive

| Field | Value |
|-------|-------|
| **Recommended Subject** | A private villa or exclusive camp — outdoor deck with plunge pool and panoramic wilderness view, or a dining table set under a canvas fly with the bush stretching beyond. No other guests visible; total privacy is the story. |
| **Suggested Filename** | `packages-accommodation-private-exclusive-villa.jpg` |
| **Suggested Alt Text** | `Private safari villa with plunge pool overlooking the African wilderness` |
| **Orientation** | Landscape | **Aspect Ratio** | 16:9 | **Min Resolution** | 1600 × 900px |
| **Unsplash Keywords** | `private safari villa plunge pool africa`, `exclusive camp africa deck view`, `private lodge safari africa deck` |
| **Adobe Stock Keywords** | `private safari villa plunge pool Africa editorial landscape` |

##### IMAGE-PK-011 — Accommodation: Mobile & Expedition

| Field | Value |
|-------|-------|
| **Recommended Subject** | A mobile tented camp pitched in the open Serengeti — simple canvas, no permanent structure, the migration visible in the distance. Should feel like being in the field, not in a hotel. |
| **Suggested Filename** | `packages-accommodation-mobile-expedition-camp.jpg` |
| **Suggested Alt Text** | `Mobile expedition camp on the Serengeti plains during the migration` |
| **Orientation** | Landscape | **Aspect Ratio** | 16:9 | **Min Resolution** | 1600 × 900px |
| **Unsplash Keywords** | `mobile camp serengeti plains expedition`, `expedition tent africa wilderness`, `fly camp africa plains` |
| **Adobe Stock Keywords** | `mobile expedition camp Africa Serengeti editorial landscape` |

---

### 6.5 Gallery (`/gallery`)

The gallery is the most image-intensive page. It contains:
- 1 hero image
- 18 full-resolution grid images
- 2 guide portrait vignettes (BehindTheLens)
- 6 category thumbnail images

#### IMAGE-GL-001 — Gallery Hero Background

| Field | Value |
|-------|-------|
| **Page** | Gallery (`/gallery`) |
| **Component** | `src/components/gallery/GalleryHero.tsx` |
| **Section** | Hero — "Africa through our lens" |
| **Current Status** | ❌ Placeholder |
| **Recommended Subject** | A photography-of-photography moment — a guide's hands holding a camera, the wildlife blurred in the background beyond. Or: the inside of a vehicle at golden hour, camera resting on a beanbag, framing the landscape through the window. This is the meta-layer image: the act of looking and capturing. |
| **Editorial Style** | Intimate, craft-focused. The act of photography, not the result. |
| **Composition** | Landscape. Selective focus. Warm ambient light. |
| **Orientation** | Landscape |
| **Ideal Aspect Ratio** | 16:9 to 21:9 |
| **Minimum Resolution** | 3000 × 1688px |
| **Suggested Filename** | `gallery-hero-camera-golden-hour-field.jpg` |
| **Suggested Alt Text** | `Camera and long lens resting on a safari vehicle beanbag at golden hour` |
| **Loading Priority** | ✅ **PRIORITY — LCP** |
| **Unsplash Keywords** | `wildlife camera lens golden hour vehicle`, `photography safari beanbag camera`, `africa photography guide camera field` |
| **Adobe Stock Keywords** | `safari photography camera beanbag golden hour editorial`, `wildlife photography vehicle lens Africa editorial` |

---

#### IMAGE-GL-002 through IMAGE-GL-019 — Full Gallery Grid (18 images)

Rendered by `GalleryTile.tsx`. Mix of normal (1×1), wide (2×1), and tall (1×2) grid cells.

| ID | Label | Location | Category | Span | Alt Text |
|----|-------|----------|----------|------|----------|
| fg-01 | Maasai Mara at Dawn | Kenya | Landscapes | Wide | `Dawn mist rising over the Maasai Mara, Kenya` |
| fg-02 | Mountain Gorilla, Volcanoes | Rwanda | Wildlife | Tall | `Mountain gorilla in Volcanoes National Park, Rwanda` |
| fg-03 | Serengeti Sunset | Tanzania | Landscapes | Normal | `The Serengeti at sunset, Tanzania` |
| fg-04 | Elephant, Amboseli | Kenya | Wildlife | Normal | `African elephant family in Amboseli, Kenya` |
| fg-05 | Ngorongoro Crater | Tanzania | Landscapes | Normal | `Wildlife on the floor of the Ngorongoro Crater, Tanzania` |
| fg-06 | Zanzibar, Indian Ocean | Tanzania | Landscapes | Wide | `Turquoise Indian Ocean waters, Zanzibar` |
| fg-07 | Leopard at Rest, Samburu | Kenya | Wildlife | Normal | `Leopard resting in an acacia tree, Samburu, Kenya` |
| fg-08 | Okavango Delta, Aerial | Botswana | Aerial | Tall | `Aerial view of the Okavango Delta waterways, Botswana` |
| fg-09 | Maasai Elder | Kenya | Culture | Normal | `Maasai elder in traditional attire, Kenya` |
| fg-10 | Cheetah, Ol Pejeta | Kenya | Conservation | Normal | `Cheetah in the Ol Pejeta Conservancy, Kenya` |
| fg-11 | Lion Pride at Dusk | Tanzania | Wildlife | Wide | `Lion pride resting at dusk, Tanzania` |
| fg-12 | Wildebeest Migration | Kenya | Wildlife | Normal | `Wildebeest crossing the Mara River, Kenya` |
| fg-13 | Rhino, Etosha | Namibia | Conservation | Normal | `Black rhinoceros at a waterhole, Etosha, Namibia` |
| fg-14 | Victoria Falls | Zimbabwe | Landscapes | Normal | `Victoria Falls thundering in full flow, Zimbabwe` |
| fg-15 | Balloon Safari, Serengeti | Tanzania | Aerial | Wide | `Hot air balloon over the Serengeti at sunrise, Tanzania` |
| fg-16 | Hippo Pool at Sunset | Kenya | Intimate | Normal | `Hippos in a sunset pool, Kenya` |
| fg-17 | Gorilla Mother & Infant | Rwanda | Intimate | Tall | `Mountain gorilla mother and infant in Volcanoes National Park, Rwanda` |
| fg-18 | Deception Valley, Dunes | Botswana | Landscapes | Normal | `Ancient dunes in the Kalahari, Botswana` |

**Technical specification for all gallery grid images:**

| Field | Value |
|-------|-------|
| **Orientation** | Varies by span type |
| **Wide span (2×1)** | Landscape, minimum 2400 × 900px, 16:5 approx. |
| **Tall span (1×2)** | Portrait, minimum 800 × 1600px, 1:2 approx. |
| **Normal span (1×1)** | Square to slight portrait, minimum 800 × 800px |
| **Loading Priority** | Lazy (except fg-01 which may be near-LCP) |

**Filename convention for gallery grid:**

```
gallery-grid-{subject}-{location}-{counter:02}.jpg
```

Examples:
- `gallery-grid-maasai-mara-dawn-kenya-01.jpg`
- `gallery-grid-gorilla-volcanoes-rwanda-01.jpg`
- `gallery-grid-serengeti-sunset-tanzania-01.jpg`
- `gallery-grid-elephant-amboseli-kenya-01.jpg`
- `gallery-grid-ngorongoro-crater-tanzania-01.jpg`
- `gallery-grid-zanzibar-ocean-tanzania-01.jpg`
- `gallery-grid-leopard-samburu-kenya-01.jpg`
- `gallery-grid-okavango-aerial-botswana-01.jpg`
- `gallery-grid-maasai-elder-kenya-01.jpg`
- `gallery-grid-cheetah-ol-pejeta-kenya-01.jpg`
- `gallery-grid-lion-pride-tanzania-01.jpg`
- `gallery-grid-wildebeest-migration-kenya-01.jpg`
- `gallery-grid-rhino-etosha-namibia-01.jpg`
- `gallery-grid-victoria-falls-zimbabwe-01.jpg`
- `gallery-grid-balloon-serengeti-tanzania-01.jpg`
- `gallery-grid-hippo-pool-kenya-01.jpg`
- `gallery-grid-gorilla-mother-infant-rwanda-01.jpg`
- `gallery-grid-kalahari-dunes-botswana-01.jpg`

**Search keywords for gallery grid sourcing:**

| Grid Item | Unsplash | Adobe Stock |
|-----------|----------|-------------|
| Maasai Mara dawn | `maasai mara dawn mist landscape` | `Maasai Mara dawn mist editorial landscape Kenya` |
| Mountain gorilla Rwanda | `mountain gorilla volcanoes rwanda` | `mountain gorilla Rwanda editorial wildlife` |
| Serengeti sunset | `serengeti sunset acacia silhouette` | `Serengeti Tanzania sunset editorial landscape` |
| Elephant Amboseli | `amboseli elephant kilimanjaro` | `Amboseli elephant family Kenya editorial` |
| Ngorongoro Crater | `ngorongoro crater wildlife floor` | `Ngorongoro Crater Tanzania wildlife editorial` |
| Zanzibar ocean | `zanzibar beach indian ocean clear` | `Zanzibar Indian Ocean beach editorial Tanzania` |
| Leopard Samburu | `leopard acacia tree samburu kenya` | `Samburu leopard Kenya tree editorial wildlife` |
| Okavango aerial | `okavango delta aerial botswana` | `Okavango Delta aerial Botswana editorial` |
| Maasai elder | `maasai elder portrait kenya` | `Maasai elder Kenya editorial portrait culture` |
| Cheetah Ol Pejeta | `cheetah kenya conservancy` | `cheetah Ol Pejeta Kenya editorial conservation` |
| Lion pride dusk | `lion pride serengeti dusk` | `lion pride Tanzania dusk editorial wildlife` |
| Wildebeest migration | `wildebeest mara river crossing` | `wildebeest Great Migration Kenya river editorial` |
| Rhino Etosha | `rhino etosha waterhole` | `black rhino Etosha Namibia editorial conservation` |
| Victoria Falls | `victoria falls zimbabwe waterfall` | `Victoria Falls Zimbabwe editorial landscape` |
| Balloon Serengeti | `balloon serengeti sunrise aerial` | `balloon Serengeti Tanzania dawn aerial editorial` |
| Hippo pool sunset | `hippo pool sunset africa` | `hippo pool sunset Kenya editorial intimate` |
| Gorilla mother infant | `mountain gorilla mother baby` | `gorilla mother infant Rwanda editorial intimate` |
| Kalahari dunes | `kalahari dunes botswana landscape` | `Kalahari dunes Botswana editorial landscape` |

---

#### IMAGE-GL-020 and IMAGE-GL-021 — Behind the Lens Guide Vignettes (2 images)

Rendered by `BehindTheLens.tsx`. Portrait orientation, guide portraits.

##### IMAGE-GL-020 — Guide Vignette: James Mwangi

| Field | Value |
|-------|-------|
| **Recommended Subject** | A male guide in the field — camera raised, or scanning the horizon. Rwanda/forest context (gorilla guide). Patient, focused, at home in the wild. |
| **Suggested Filename** | `gallery-guides-james-mwangi-portrait.jpg` |
| **Suggested Alt Text** | `James Mwangi, Head Guide in Rwanda, photographing in the field` |
| **Orientation** | Portrait | **Aspect Ratio** | 1:1 to 3:4 | **Min Resolution** | 600 × 600px |
| **Unsplash Keywords** | `african male guide photographer forest rwanda`, `wildlife guide camera field rwanda` |
| **Adobe Stock Keywords** | `African male guide photography field Rwanda editorial portrait` |

##### IMAGE-GL-021 — Guide Vignette: Amina Ochieng

| Field | Value |
|-------|-------|
| **Recommended Subject** | A female guide in the Kenyan bush — watching the dawn light, or with binoculars. Kenya/Mara context. |
| **Suggested Filename** | `gallery-guides-amina-ochieng-portrait.jpg` |
| **Suggested Alt Text** | `Amina Ochieng, Senior Guide in Kenya, on the Maasai Mara at dawn` |
| **Orientation** | Portrait | **Aspect Ratio** | 1:1 to 3:4 | **Min Resolution** | 600 × 600px |
| **Unsplash Keywords** | `african female guide kenya mara dawn`, `female safari guide portrait field` |
| **Adobe Stock Keywords** | `Kenyan female guide Maasai Mara editorial portrait` |

---

#### IMAGE-GL-022 through IMAGE-GL-027 — Gallery Category Thumbnails (6 images)

Rendered by `GalleryCategoryCard.tsx`. Square aspect ratio.

| ID | Category | Suggested Subject | Filename |
|----|----------|-------------------|----------|
| cat-1 | Wildlife | Dramatic wildlife close-up — lion face, or leopard eye | `gallery-category-wildlife-lion.jpg` |
| cat-2 | Landscapes | Expansive African landscape — Serengeti horizon or dunes | `gallery-category-landscapes-serengeti.jpg` |
| cat-3 | Culture | Maasai beadwork detail, or cultural ceremony | `gallery-category-culture-maasai-detail.jpg` |
| cat-4 | Conservation | Conservation worker with animal — rhino or elephant | `gallery-category-conservation-ranger.jpg` |
| cat-5 | Aerial | Aerial view pattern — delta waterways or dune shadows | `gallery-category-aerial-okavango.jpg` |
| cat-6 | Intimate | Close quiet moment — gorilla eye, or bird at rest | `gallery-category-intimate-gorilla-eye.jpg` |

**All category thumbnails:** Square crop, 600 × 600px minimum, lazy loaded.

---

### 6.6 Blog (`/blog`)

#### IMAGE-BL-001 — Blog Hero Background

| Field | Value |
|-------|-------|
| **Page** | Blog (`/blog`) |
| **Component** | `src/components/blog/BlogHero.tsx` |
| **Section** | Hero — "Stories from wild Africa" |
| **Current Status** | ❌ Placeholder |
| **Recommended Subject** | A field notes aesthetic — a notebook on a wooden camp table with binoculars or a compass beside it, the bush visible softly out of focus behind. Or: a typewriter on a camp desk. The editorial/journalistic tone of the page in a single image. Alternatively: a wide shot of a guide writing notes in the field at dawn. |
| **Editorial Style** | Quiet, intellectual, editorial. The image should feel like a dispatch from the field. |
| **Composition** | Landscape. Warm ambient light. Shallow depth of field on object in foreground. |
| **Orientation** | Landscape |
| **Ideal Aspect Ratio** | 16:9 |
| **Minimum Resolution** | 3000 × 1688px |
| **Suggested Filename** | `blog-hero-field-notes-camp-desk.jpg` |
| **Suggested Alt Text** | `Field notes and binoculars on a camp table in the African bush` |
| **Loading Priority** | ✅ **PRIORITY — LCP** |
| **Unsplash Keywords** | `field notes notebook bush camp`, `safari camp desk binoculars`, `africa field notes writing` |
| **Adobe Stock Keywords** | `field notes notebook Africa camp editorial`, `safari camp desk writing tools editorial` |

---

#### IMAGE-BL-002 — Blog Featured Story: The Crossing

| Field | Value |
|-------|-------|
| **Page** | Blog (`/blog`) |
| **Component** | `src/components/blog/FeaturedStory.tsx` |
| **Section** | Featured Story — "The Crossing: Following the Great Migration" |
| **Current Status** | ❌ Placeholder (imageAlt already defined in constants as `Wildebeest crossing the Mara River at dawn during the Great Migration`) |
| **Purpose** | Flagship article hero image — large format, editorial quality |
| **Recommended Subject** | Mara River crossing — wildebeest mid-stream at dawn, first light touching the water, crocodiles visible. This is the definitive image for the article subject. |
| **Editorial Style** | Documentary, immediate, powerful. |
| **Composition** | Landscape, large left panel. Must work at 3:2 or wider. River fills the mid-ground, animals active. |
| **Orientation** | Landscape |
| **Ideal Aspect Ratio** | 3:2 |
| **Minimum Resolution** | 2400 × 1600px |
| **Suggested Filename** | `blog-featured-wildebeest-crossing-dawn.jpg` |
| **Suggested Alt Text** | `Wildebeest crossing the Mara River at dawn during the Great Migration` |
| **Loading Priority** | Lazy (below hero fold) |
| **Unsplash Keywords** | `wildebeest crossing mara river dawn`, `great migration crossing crocodile`, `mara river wildebeest chaos` |
| **Adobe Stock Keywords** | `wildebeest Mara River Great Migration editorial dawn` |

---

#### IMAGE-BL-003 through IMAGE-BL-008 — Article Card Images (6 images)

Rendered by `BlogCard.tsx`. Landscape, 16:10 ratio.

| ID | Article | Recommended Subject | Filename |
|----|---------|---------------------|----------|
| a-01 | Ol Pejeta Rhino | Black rhinoceros at a waterhole in Ol Pejeta | `blog-article-rhino-ol-pejeta.jpg` |
| a-02 | Okavango Photography | Aerial of Okavango at golden hour | `blog-article-okavango-golden-hour-aerial.jpg` |
| a-03 | Rwanda Beyond Gorillas | Rwanda rolling hills at dawn, tea plantations | `blog-article-rwanda-hills-dawn.jpg` |
| a-04 | When to Go Africa | Acacia silhouette against East Africa sunset | `blog-article-acacia-sunset-silhouette.jpg` |
| a-05 | Maasai & the Mara | Maasai elder in red shuka, Mara background | `blog-article-maasai-elder-mara.jpg` |
| a-06 | Leopard of Samburu | Leopard in acacia tree, Samburu | `blog-article-leopard-samburu.jpg` |

**Alt texts are already defined in `blog.ts`** — use those exactly.

**All article cards:** Landscape, 16:10 crop, 1200 × 750px minimum, lazy loaded.

**Search keywords:**

| Article | Unsplash | Adobe Stock |
|---------|----------|-------------|
| Rhino Ol Pejeta | `black rhinoceros kenya conservancy` | `black rhino Ol Pejeta Kenya editorial` |
| Okavango aerial | `okavango delta golden hour aerial` | `Okavango Delta aerial golden hour Botswana editorial` |
| Rwanda hills | `rwanda green hills dawn tea plantation` | `Rwanda hills dawn landscape editorial` |
| Acacia sunset | `acacia tree silhouette africa sunset` | `acacia silhouette East Africa sunset editorial` |
| Maasai elder | `maasai elder red shuka kenya portrait` | `Maasai elder red shuka Kenya editorial portrait` |
| Leopard Samburu | `leopard acacia tree samburu` | `Samburu leopard acacia Kenya wildlife editorial` |

---

### 6.7 Contact (`/contact`)

#### IMAGE-CO-001 — Contact Hero Background

| Field | Value |
|-------|-------|
| **Page** | Contact (`/contact`) |
| **Component** | `src/components/contact/ContactHero.tsx` |
| **Section** | Hero — "Begin your journey" |
| **Current Status** | ❌ Placeholder |
| **Recommended Subject** | A concierge or specialist at work — a desk with a handwritten map, binoculars, a coffee cup, a telephone. The image should convey the personal, attentive, human quality of the consultation service. Alternatively: a specialist sitting at a camp table with a client, looking at a map together (backs to camera). |
| **Editorial Style** | Warm, professional, human. This is the "we're here" image. |
| **Composition** | Landscape. Warm interior or camp light. Suggests intimacy and attention. |
| **Orientation** | Landscape |
| **Ideal Aspect Ratio** | 16:9 |
| **Minimum Resolution** | 2400 × 1350px |
| **Suggested Filename** | `contact-hero-safari-specialist-desk.jpg` |
| **Suggested Alt Text** | `Safari specialist at a desk with maps and planning materials` |
| **Loading Priority** | ✅ **PRIORITY — LCP** |
| **Unsplash Keywords** | `safari planning desk maps binoculars`, `camp table planning consultant africa`, `safari specialist consultation` |
| **Adobe Stock Keywords** | `safari specialist planning desk editorial Africa`, `camp table map planning editorial` |

---

### 6.8 Open Graph & Social Images

Open Graph images are referenced in `src/lib/metadata.ts` and `buildPageMetadata()`. The base fallback is `/og/default.jpg`. Page-specific OG images can be added to `buildPageMetadata()` calls via the `image` option.

**All OG images:** 1200 × 630px (exactly), JPEG, sRGB. These are not `next/image` optimised — they are served directly as static files.

#### IMAGE-OG-001 — Default OG Image (Site-wide Fallback)

| Field | Value |
|-------|-------|
| **Path** | `public/og/default.jpg` |
| **Current Status** | ❌ Missing (`public/og/.gitkeep` only) |
| **Purpose** | Fallback social card for all pages that don't override the OG image |
| **Recommended Subject** | Brand lockup on the homepage hero image — the Maasai Mara dawn landscape with the Rêve Africa Safaris wordmark overlaid in Cormorant Garamond italic, or a simple brand template using the amber-on-dark palette. The image must be designed (it is not a raw photograph alone). |
| **Composition** | 1200 × 630px canvas. Photograph fills background. Logo and tagline centred or lower-left. Dark overlay for text legibility. |
| **Dimensions** | 1200 × 630px (OG specification) |
| **Suggested Filename** | `public/og/default.jpg` |

#### IMAGE-OG-002 through IMAGE-OG-008 — Page-Specific OG Images

These require design work (photography + brand overlay) in addition to the source photograph. Page-specific OG images improve click-through rates on social sharing.

| Image | Page | Path | Source Photography |
|-------|------|------|--------------------|
| OG-002 | Homepage | `/og/homepage.jpg` | Homepage hero image (IMAGE-HP-001) |
| OG-003 | About | `/og/about.jpg` | About hero image (IMAGE-AB-001) |
| OG-004 | Destinations | `/og/destinations.jpg` | Destinations hero (IMAGE-DS-001) |
| OG-005 | Packages | `/og/packages.jpg` | Packages hero (IMAGE-PK-001) |
| OG-006 | Gallery | `/og/gallery.jpg` | Any gallery grid hero wildlife image |
| OG-007 | Blog | `/og/blog.jpg` | Blog hero or featured story image |
| OG-008 | Contact | `/og/contact.jpg` | Contact hero image (IMAGE-CO-001) |

To activate page-specific OG images, update each `buildPageMetadata()` call in the page files to include the `image` option:

```ts
// Example — src/app/about/page.tsx
export const metadata: Metadata = buildPageMetadata({
  title:       'About Us — Our Story, Team & Commitment',
  description: '...',
  path:        '/about',
  image:       '/og/about.jpg',   // ← add this
});
```

---

## 7. Priority Matrix

Images are categorised by implementation priority:

### P0 — Launch Blockers (LCP / Above the Fold)

These images are the Largest Contentful Paint (LCP) element on their page. They must be sourced and integrated first, as they directly impact Core Web Vitals and first impressions.

| ID | Image | Page | Component | Note |
|----|-------|------|-----------|------|
| IMAGE-HP-001 | Homepage Hero | `/` | `Hero.tsx` | LCP element; full-viewport |
| IMAGE-AB-001 | About Hero | `/about` | `AboutHero.tsx` | LCP element |
| IMAGE-DS-001 | Destinations Hero | `/destinations` | `DestinationsHero.tsx` | LCP element |
| IMAGE-PK-001 | Packages Hero | `/packages` | `PackagesHero.tsx` | LCP element |
| IMAGE-GL-001 | Gallery Hero | `/gallery` | `GalleryHero.tsx` | LCP element |
| IMAGE-BL-001 | Blog Hero | `/blog` | `BlogHero.tsx` | LCP element |
| IMAGE-CO-001 | Contact Hero | `/contact` | `ContactHero.tsx` | LCP element |
| IMAGE-OG-001 | Default OG | All pages | `metadata.ts` | Required for social sharing |

### P1 — High Priority (Visible Without Scrolling)

These images are rendered in the first viewport or very close to it.

| ID | Image | Page |
|----|-------|------|
| IMAGE-HP-002–005 | Destination cards (4) | Homepage |
| IMAGE-HP-012–014 | Package cards (3) | Homepage |
| IMAGE-DS-002–007 | Country cards (6) | Destinations |
| IMAGE-PK-008 | Signature itinerary | Packages |
| IMAGE-BL-002 | Featured story | Blog |

### P2 — Standard Priority (Below the Fold)

All remaining page imagery that renders after scrolling.

| Group | Count |
|-------|-------|
| Homepage experience cards | 6 |
| Homepage gallery preview | 6 |
| About team portraits | 4 |
| Destinations experience cards | 4 |
| Destinations lodge cards | 4 |
| Packages accommodation cards | 3 |
| Packages package cards (additional 3) | 3 |
| Gallery grid images | 18 |
| Gallery guide vignettes | 2 |
| Gallery category thumbnails | 6 |
| Blog article cards | 6 |

### P3 — Pre-Launch Required (Not Visible in Site)

| ID | Image | Purpose |
|----|-------|---------|
| IMAGE-OG-002–008 | Page-specific OG images | Social sharing; require design work |

---

## 8. Technical Specifications Summary

### Image Dimensions Reference

| Context | Aspect Ratio | Minimum Resolution | Loading |
|---------|-------------|-------------------|---------|
| Hero (full viewport) | 16:9 to 21:9 | 3840 × 2160px | `priority` (LCP) |
| Hero (page level) | 16:9 | 3000 × 1688px | `priority` (LCP) |
| Country / destination card | 3:4 (portrait) | 1200 × 1600px | Lazy |
| Experience card | 3:4 (portrait) | 1000 × 1333px | Lazy |
| Package card | 16:9 (landscape) | 1600 × 900px | Lazy |
| Lodge card | 16:9 (landscape) | 1600 × 900px | Lazy |
| Experience card (landscape) | 16:9 | 1600 × 900px | Lazy |
| Accommodation card | 16:9 | 1600 × 900px | Lazy |
| Team portrait | 3:4 (portrait) | 900 × 1200px | Lazy |
| Guide vignette | 3:4 or 1:1 | 600 × 600px | Lazy |
| Gallery normal (1×1) | ~1:1 | 800 × 800px | Lazy |
| Gallery wide (2×1) | ~16:5 | 2400 × 900px | Lazy |
| Gallery tall (1×2) | ~1:2 | 800 × 1600px | Lazy |
| Gallery category | 1:1 | 600 × 600px | Lazy |
| Blog featured story | 3:2 | 2400 × 1600px | Lazy |
| Blog article card | 16:10 | 1200 × 750px | Lazy |
| Open Graph | 1200:630 exactly | 1200 × 630px | Static file |

### Format Pipeline

All source files should be delivered as:
- **Format:** JPEG (highest quality available; source files, not compressed web exports)
- **Colour space:** sRGB
- **Bit depth:** 8-bit

`next/image` will handle all format conversion (WebP/AVIF) and responsive sizing automatically via the `sizes` prop.

### `next/image` Configuration

The `next.config.ts` will need to be updated to allow the `remotePatterns` or `domains` for any images not served locally. If all images are local (in `public/images/`), no changes to `next.config.ts` are required.

For local images, the recommended implementation pattern:

```tsx
import Image from 'next/image';

// Replace gradient placeholder div with:
<Image
  src="/images/homepage/hero/homepage-hero-maasai-mara-dawn.jpg"
  alt="Dawn light over the Maasai Mara savanna, Kenya"
  fill
  priority          // ← LCP elements only
  sizes="100vw"     // ← adjust per component
  className="object-cover transition-transform duration-700 group-hover:scale-105"
/>
```

For non-LCP images (lazy loading is the default in `next/image`):

```tsx
<Image
  src="/images/gallery/grid/gallery-grid-elephant-amboseli-kenya-01.jpg"
  alt="African elephant family in Amboseli, Kenya"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
/>
```

---

## 9. Implementation Notes for the Developer

### 9.1 DestinationCard Special Case

`src/components/home/DestinationCard.tsx` already uses `<Image src={destination.imageSrc}>`, but the `imageSrc` field is **not yet defined** in the `DestinationData` interface in `src/lib/constants/homepage.ts`.

Before adding images to this component, two code changes are required:

1. Add `imageSrc: string` to the `DestinationData` interface in `homepage.ts`
2. Add the `imageSrc` value to each of the four `FEATURED_DESTINATIONS` entries

Example:
```ts
export interface DestinationData {
  id:          string;
  country:     string;
  region:      string;
  tagline:     string;
  description: string;
  href:        string;
  imageSrc:    string;   // ← add this
  placeholderFrom: string;
  placeholderTo:   string;
  highlights:  readonly string[];
}

// Then in FEATURED_DESTINATIONS:
{
  id: 'kenya',
  // ...existing fields...
  imageSrc: '/images/homepage/destinations-preview/homepage-destinations-kenya-mara.jpg',
  // ...
}
```

### 9.2 Placeholder Replacement Pattern

Every other image in the site uses the gradient placeholder pattern. The replacement is always:

```tsx
// BEFORE (placeholder):
<div
  className="absolute inset-0 transition-transform duration-[700ms] group-hover:scale-105"
  style={{ background: `linear-gradient(160deg, ${item.placeholderFrom} 0%, ${item.placeholderTo} 100%)` }}
>
  <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,...")` }} />
</div>

// AFTER (production):
<Image
  src={item.imageSrc}
  alt={item.imageAlt}
  fill
  sizes="..."
  className="object-cover transition-transform duration-[700ms] group-hover:scale-105"
/>
```

The `imageSrc` and `imageAlt` fields will need to be added to the relevant TypeScript interfaces in the constants files alongside each component replacement.

### 9.3 Removing Next.js Scaffold SVGs

Before launch, remove the following unused scaffold files from `public/`:
- `file.svg`
- `globe.svg`
- `next.svg`
- `vercel.svg`
- `window.svg`

These are not referenced by any component in the production codebase and should not remain in the `public/` directory.

### 9.4 OG Image Integration

Once OG images are designed and placed in `public/og/`, update each page's `buildPageMetadata()` call:

```ts
// Current (uses fallback):
export const metadata = buildPageMetadata({
  title: '...',
  path:  '/about',
});

// After OG image added:
export const metadata = buildPageMetadata({
  title: '...',
  path:  '/about',
  image: '/og/about.jpg',   // ← add this
});
```

### 9.5 Image Sizing Guidance by Component

| Component | Recommended `sizes` Prop |
|-----------|--------------------------|
| Hero (full viewport) | `100vw` |
| DestinationCard (homepage) | `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw` |
| ExperienceCard | `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw` |
| PackageCard | `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw` |
| CountryCard | `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw` |
| LodgeCard | `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw` |
| TeamCard | `(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw` |
| SignatureExperienceCard | `(max-width: 640px) 100vw, 50vw` |
| GalleryTile (normal) | `(max-width: 1024px) 50vw, 25vw` |
| GalleryTile (wide) | `(max-width: 1024px) 100vw, 50vw` |
| GalleryTile (tall) | `(max-width: 1024px) 50vw, 25vw` |
| BlogCard | `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw` |
| FeaturedStory | `(max-width: 1024px) 100vw, 60vw` |

---

*End of IMAGE_ASSET_PLAN.md*

*Document produced by: Production Asset Planning audit*  
*Project: Rêve Africa Safaris — Release Candidate (RC)*  
*Repository: https://github.com/chebitoch007/reve-africa-safaris.git*
