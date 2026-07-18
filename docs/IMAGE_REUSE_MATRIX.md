# RÊVE AFRICA SAFARIS — Image Reuse Matrix

> **Document Version:** 1.0  
> **Phase:** Production Asset Preparation (Phase 2A)  
> **Input documents:** `IMAGE_ASSET_PLAN.md` (Phase 1) · `MASTER_PHOTO_LIBRARY.md`  
> **Companion document:** `IMAGE_SOURCING_GUIDE.md`  
> **Do not modify codebase. Do not commit. Do not push.**

---

## How to Use This Document

This matrix maps every unique photograph (44 images, IMG-001 through IMG-044) to every page slot and component that uses it.

**For each image entry:**
- The **primary slot** is the canonical use (highest visibility, drives the image selection)
- **Secondary slots** are reuses — the same file served at a different crop, orientation, or context
- The **crop instruction** tells the developer exactly how to crop or present the image for each slot

**For the implementation task:** When integrating an image, reference this matrix to ensure the file is correctly referenced in all the places listed, and that the `sizes` prop and crop treatment match the slot requirements.

---

## Matrix Format Key

| Notation | Meaning |
|----------|---------|
| `[L]` | Landscape crop required |
| `[P]` | Portrait crop required (3:4) |
| `[S]` | Square crop required (1:1) |
| `[W]` | Wide/panoramic crop (16:9 or wider) |
| `[T]` | Tall crop (1:2, for gallery tall span) |
| `[OG]` | Open Graph crop (1200×630) |
| `priority` | LCP image — must use `priority` prop in `<Image>` |
| `lazy` | Standard lazy loading |

---

## Full Reuse Map

---

### IMG-001 — Maasai Mara Savanna at Dawn
**Filename:** `img-001-maasai-mara-dawn-landscape.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Homepage hero | `/` | `Hero.tsx` | `[W]` 21:9 or 16:9 full-bleed | `priority` | LCP element |
| Kenya destination card (Homepage) | `/` | `DestinationCard.tsx` | `[P]` 3:4 — crop centre-left to avoid losing horizon | `lazy` | Requires `imageSrc` field added to `DestinationData` interface |
| Kenya country card (Destinations) | `/destinations` | `CountryCard.tsx` | `[P]` 3:4 — same crop as above | `lazy` | |
| Homepage OG image | All pages (default) | `metadata.ts` | `[OG]` 1200×630 — crop middle band | static | Design overlay required |

**Crop guidance:** The image needs at least 5000px width. Use the left-centre 3:4 crop for portrait cards (sky + horizon + lower ground). Use the full width for hero. The OG crop should centre on the horizon with sky above and grass below.

---

### IMG-002 — Serengeti Plains — Open Horizon
**Filename:** `img-002-serengeti-plains-landscape.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Tanzania destination card (Homepage) | `/` | `DestinationCard.tsx` | `[P]` 3:4 | `lazy` | |
| Tanzania country card (Destinations) | `/destinations` | `CountryCard.tsx` | `[P]` 3:4 | `lazy` | |
| Serengeti Migration Retreat lodge card | `/destinations` | `LodgeCard.tsx` | `[L]` 16:9 | `lazy` | |

---

### IMG-003 — Hot Air Balloon over Serengeti at Dawn
**Filename:** `img-003-balloon-serengeti-dawn.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Package card — Serengeti Secrets (Homepage) | `/` | `PackageCard.tsx` | `[L]` 16:9 full card | `lazy` | |
| Package card — Serengeti Secrets (Packages page) | `/packages` | `PackageCard.tsx` | `[L]` 16:9 full card | `lazy` | Same component, same image — consistent |
| Destinations Signature Experience — Balloon Safari | `/destinations` | `SignatureExperienceCard.tsx` | `[L]` 16:9 | `lazy` | |
| Gallery grid tile fg-15 — Balloon Safari, Serengeti | `/gallery` | `GalleryTile.tsx` | `[W]` wide span (2×1 grid) | `lazy` | Use the full width of the image |
| Packages OG image | `/packages` | `metadata.ts` | `[OG]` 1200×630 | static | Design overlay required |

---

### IMG-004 — Bwindi / Rainforest Interior
**Filename:** `img-004-bwindi-rainforest-interior.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Uganda destination card (Homepage) | `/` | `DestinationCard.tsx` | `[P]` 3:4 | `lazy` | |
| Uganda country card (Destinations) | `/destinations` | `CountryCard.tsx` | `[P]` 3:4 | `lazy` | |
| Bwindi Forest Lodge card (Destinations) | `/destinations` | `LodgeCard.tsx` | `[L]` 16:9 — lower portion of forest with trail | `lazy` | |

---

### IMG-005 — Rwanda Volcanoes / Misty Hills
**Filename:** `img-005-rwanda-volcanoes-mist.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Rwanda destination card (Homepage) | `/` | `DestinationCard.tsx` | `[P]` 3:4 | `lazy` | |
| Rwanda country card (Destinations) | `/destinations` | `CountryCard.tsx` | `[P]` 3:4 | `lazy` | |
| Blog article card — Rwanda Beyond the Gorillas | `/blog` | `BlogCard.tsx` | `[L]` 16:10 | `lazy` | |

---

### IMG-006 — Okavango Delta Aerial
**Filename:** `img-006-okavango-delta-aerial.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Botswana country card (Destinations) | `/destinations` | `CountryCard.tsx` | `[P]` 3:4 — crop centre showing waterway pattern | `lazy` | |
| Gallery grid tile fg-08 — Okavango Delta Aerial | `/gallery` | `GalleryTile.tsx` | `[T]` tall span (1×2) — vertical section of delta patterns | `lazy` | Crop the upper/centre portion vertically |
| Gallery category card — Aerial | `/gallery` | `GalleryCategoryCard.tsx` | `[S]` 1:1 square | `lazy` | Centre crop |
| Blog article card — Golden Hour in the Okavango | `/blog` | `BlogCard.tsx` | `[L]` 16:10 | `lazy` | |

---

### IMG-007 — Sossusvlei Dunes, Namibia
**Filename:** `img-007-sossusvlei-dunes-namibia.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Namibia country card (Destinations) | `/destinations` | `CountryCard.tsx` | `[P]` 3:4 | `lazy` | Source image should be portrait-oriented |
| Package card — Desert & Dunes of Namibia | `/packages` | `PackageCard.tsx` | `[L]` 16:9 — lower dune section with Deadvlei | `lazy` | |

---

### IMG-008 — Zanzibar / Indian Ocean
**Filename:** `img-008-zanzibar-indian-ocean.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Homepage Experience card — Beach Holidays | `/` | `ExperienceCard.tsx` | `[P]` 3:4 — crop ocean and beach foreground | `lazy` | |
| Gallery grid tile fg-06 — Zanzibar, Indian Ocean | `/gallery` | `GalleryTile.tsx` | `[W]` wide span (2×1) — full landscape | `lazy` | |

---

### IMG-009 — Ngorongoro Crater Floor
**Filename:** `img-009-ngorongoro-crater-floor.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Gallery grid tile fg-05 — Ngorongoro Crater | `/gallery` | `GalleryTile.tsx` | `[L]` normal span | `lazy` | Standalone |

---

### IMG-010 — Victoria Falls
**Filename:** `img-010-victoria-falls-zimbabwe.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Gallery grid tile fg-14 — Victoria Falls | `/gallery` | `GalleryTile.tsx` | `[L]` normal span | `lazy` | Standalone |

---

### IMG-011 — Kalahari / Desert Dunes (Botswana)
**Filename:** `img-011-kalahari-desert-botswana.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Gallery grid tile fg-18 — Deception Valley, Dunes | `/gallery` | `GalleryTile.tsx` | `[L]` normal span | `lazy` | Standalone |

---

### IMG-012 — Serengeti / Acacia Sunset Silhouette
**Filename:** `img-012-acacia-sunset-silhouette.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Gallery grid tile fg-03 — Serengeti Sunset | `/gallery` | `GalleryTile.tsx` | `[L]` normal span | `lazy` | |
| Blog article card — When to Go: Africa | `/blog` | `BlogCard.tsx` | `[L]` 16:10 | `lazy` | |

**Optional:** If IMG-042 (gallery-only Serengeti sunset) is not sourced separately, IMG-012 serves fg-03, reducing the total unique count by 1.

---

### IMG-013 — East Africa Aerial Wilderness
**Filename:** `img-013-east-africa-aerial-wilderness.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Destinations page hero | `/destinations` | `DestinationsHero.tsx` | `[W]` 21:9 or 16:9 full-bleed | `priority` | LCP element |

---

### IMG-014 — Wildebeest Mara River Crossing
**Filename:** `img-014-wildebeest-mara-crossing.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Packages Signature Itinerary left panel | `/packages` | `SignatureItinerary.tsx` | `[P]` 3:4 portrait — the full chaos | `lazy` | Replace the gradient `<div>` with `<Image fill>` |
| Blog Featured Story — The Crossing | `/blog` | `FeaturedStory.tsx` | `[L]` 3:2 landscape — crop from the portrait source | `lazy` | |
| Package card — Mara Migration Safari (Homepage) | `/` | `PackageCard.tsx` | `[L]` 16:9 | `lazy` | |
| Package card — Mara Migration Safari (Packages) | `/packages` | `PackageCard.tsx` | `[L]` 16:9 | `lazy` | Same card component |
| Gallery grid tile fg-12 — Wildebeest Migration | `/gallery` | `GalleryTile.tsx` | `[L]` normal span | `lazy` | |

**Crop guidance:** Source the image as portrait (3:4) to maximise the Signature Itinerary slot. The landscape crops (blog, package cards, gallery) should be taken from the middle horizontal band of the portrait image.

---

### IMG-015 — Mountain Gorilla — Silverback
**Filename:** `img-015-mountain-gorilla-silverback.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Package card — Gorilla Highlands (Homepage) | `/` | `PackageCard.tsx` | `[L]` 16:9 — forest background with gorilla | `lazy` | |
| Package card — Gorilla Highlands (Packages) | `/packages` | `PackageCard.tsx` | `[L]` 16:9 | `lazy` | |
| Destinations Signature Experience — Gorilla Habituation | `/destinations` | `SignatureExperienceCard.tsx` | `[L]` 16:9 | `lazy` | |
| Gallery grid tile fg-02 — Mountain Gorilla, Volcanoes | `/gallery` | `GalleryTile.tsx` | `[T]` tall span (1×2) — portrait crop | `lazy` | Crop to tall 1:2 |
| Gallery category card — Intimate | `/gallery` | `GalleryCategoryCard.tsx` | `[S]` 1:1 — tight crop on gorilla face/eyes | `lazy` | |
| Gallery OG image | `/gallery` | `metadata.ts` | `[OG]` 1200×630 — landscape crop centred on gorilla | static | Highest-impact social image |

---

### IMG-016 — Gorilla Mother and Infant
**Filename:** `img-016-gorilla-mother-infant.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Gallery grid tile fg-17 — Gorilla Mother & Infant | `/gallery` | `GalleryTile.tsx` | `[T]` tall span (1×2) | `lazy` | Standalone |

---

### IMG-017 — Elephant Herd, Amboseli with Kilimanjaro
**Filename:** `img-017-elephant-amboseli-kilimanjaro.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Package card — East Africa Grand Tour (Homepage) | `/` | `PackageCard.tsx` | `[L]` 16:9 | `lazy` | |
| Package card — East Africa Grand Tour (Packages) | `/packages` | `PackageCard.tsx` | `[L]` 16:9 | `lazy` | |
| Gallery grid tile fg-04 — Elephant, Amboseli | `/gallery` | `GalleryTile.tsx` | `[L]` normal span — tight on elephants, mountain background | `lazy` | |

---

### IMG-018 — Chobe Elephant Herd at River
**Filename:** `img-018-chobe-elephants-river.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Package card — Botswana Immersion (Homepage) | `/` | `PackageCard.tsx` | `[L]` 16:9 | `lazy` | |
| Package card — Botswana Immersion (Packages) | `/packages` | `PackageCard.tsx` | `[L]` 16:9 | `lazy` | Same card, same image |

---

### IMG-019 — Leopard in Acacia Tree, Samburu
**Filename:** `img-019-leopard-acacia-samburu.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Gallery grid tile fg-07 — Leopard at Rest, Samburu | `/gallery` | `GalleryTile.tsx` | `[L]` normal span | `lazy` | |
| Blog article card — The Leopard of Samburu | `/blog` | `BlogCard.tsx` | `[L]` 16:10 | `lazy` | |

---

### IMG-020 — Lion Pride at Dusk
**Filename:** `img-020-lion-pride-dusk.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Gallery grid tile fg-11 — Lion Pride at Dusk | `/gallery` | `GalleryTile.tsx` | `[W]` wide span (2×1) | `lazy` | |
| Gallery category card — Wildlife | `/gallery` | `GalleryCategoryCard.tsx` | `[S]` 1:1 — single lion head crop | `lazy` | |

---

### IMG-021 — Cheetah, Ol Pejeta Conservancy
**Filename:** `img-021-cheetah-ol-pejeta.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Gallery grid tile fg-10 — Cheetah, Ol Pejeta | `/gallery` | `GalleryTile.tsx` | `[L]` normal span | `lazy` | |
| Gallery category card — Conservation | `/gallery` | `GalleryCategoryCard.tsx` | `[S]` 1:1 — tight crop on cheetah face/upper body | `lazy` | |

---

### IMG-022 — Black Rhinoceros, Etosha / Ol Pejeta
**Filename:** `img-022-black-rhino-etosha.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Gallery grid tile fg-13 — Rhino, Etosha | `/gallery` | `GalleryTile.tsx` | `[L]` normal span | `lazy` | |
| Blog article card — Inside Ol Pejeta | `/blog` | `BlogCard.tsx` | `[L]` 16:10 | `lazy` | |

---

### IMG-023 — Hippo Pool at Sunset
**Filename:** `img-023-hippo-pool-sunset.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Gallery grid tile fg-16 — Hippo Pool at Sunset | `/gallery` | `GalleryTile.tsx` | `[L]` normal span | `lazy` | Standalone |

---

### IMG-024 — Maasai Elder Portrait
**Filename:** `img-024-maasai-elder-portrait.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Homepage Experience card — Cultural Journeys | `/` | `ExperienceCard.tsx` | `[P]` 3:4 — crop on subject, landscape in background | `lazy` | |
| Gallery grid tile fg-09 — Maasai Elder | `/gallery` | `GalleryTile.tsx` | `[L]` normal span (square-ish) — subject fills frame | `lazy` | |
| Blog article card — The Maasai and the Mara | `/blog` | `BlogCard.tsx` | `[L]` 16:10 — wider crop showing figure and Mara context | `lazy` | |
| Gallery category card — Culture | `/gallery` | `GalleryCategoryCard.tsx` | `[S]` 1:1 — head and shoulders crop | `lazy` | |

---

### IMG-025 — Safari Guide in the Field
**Filename:** `img-025-safari-guide-field.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** About page hero | `/about` | `AboutHero.tsx` | `[W]` 16:9 full-bleed — guide small in landscape | `priority` | LCP element |
| Gallery guide vignette — James Mwangi | `/gallery` | `BehindTheLens.tsx` | `[S]` or `[P]` — tight crop on guide's face/upper body | `lazy` | |
| Gallery page hero | `/gallery` | `GalleryHero.tsx` | `[W]` 16:9 full-bleed — if guide has camera | `priority` | LCP element — only use if guide is photographing or holding camera |

**Note on Gallery hero:** IMG-025 can serve the Gallery hero **only** if the guide is photographing or holding a camera in the image, which thematically connects to the gallery's "Africa through our lens" headline. If the image shows a guide tracking/binoculars, use IMG-027 for the Gallery hero instead and IMG-025 serves just About hero + guide vignette.

---

### IMG-026 — Female Guide / Specialist Portrait
**Filename:** `img-026-female-guide-portrait.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Gallery guide vignette — Amina Ochieng | `/gallery` | `BehindTheLens.tsx` | `[S]` or `[P]` 3:4 | `lazy` | Standalone |

---

### IMG-027 — Safari Photographer with Camera
**Filename:** `img-027-safari-photographer-golden-hour.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Homepage Experience card — Photography Expeditions | `/` | `ExperienceCard.tsx` | `[P]` 3:4 — crop on photographer and camera | `lazy` | |
| Gallery page hero | `/gallery` | `GalleryHero.tsx` | `[W]` 16:9 full-bleed — wide landscape version | `priority` | LCP element — use if IMG-025 does not include camera |

**Decision point:** Either IMG-025 or IMG-027 serves the Gallery hero. Decide based on which image is stronger compositionally at full-bleed. See note under IMG-025.

---

### IMG-028 — Family on Safari Vehicle
**Filename:** `img-028-family-safari-vehicle.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Homepage Experience card — Family Adventures | `/` | `ExperienceCard.tsx` | `[P]` 3:4 | `lazy` | Standalone |

---

### IMG-029 — Luxury Tented Camp Interior
**Filename:** `img-029-luxury-tent-interior.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Homepage Experience card — Luxury Safaris | `/` | `ExperienceCard.tsx` | `[P]` 3:4 — left portion of landscape image | `lazy` | |
| Packages Accommodation Standard — Classic Luxury | `/packages` | `AccommodationStandards.tsx` | `[L]` 16:9 | `lazy` | |

---

### IMG-030 — Private Camp Deck with Wilderness View
**Filename:** `img-030-private-camp-deck-view.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Homepage Experience card — Honeymoon Escapes | `/` | `ExperienceCard.tsx` | `[P]` 3:4 — crop on deck and view | `lazy` | |
| Packages Accommodation Standard — Private & Exclusive | `/packages` | `AccommodationStandards.tsx` | `[L]` 16:9 | `lazy` | |

---

### IMG-031 — Mobile Expedition Camp
**Filename:** `img-031-mobile-expedition-camp.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Packages Accommodation Standard — Mobile & Expedition | `/packages` | `AccommodationStandards.tsx` | `[L]` 16:9 | `lazy` | |
| Destinations Lodge card — Mara Intimate Camp | `/destinations` | `LodgeCard.tsx` | `[L]` 16:9 | `lazy` | Small intimate camps share the expeditionary aesthetic |

---

### IMG-032 — Mokoro on Okavango Waterway
**Filename:** `img-032-mokoro-okavango-waterway.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Destinations Lodge card — Okavango Island Camp | `/destinations` | `LodgeCard.tsx` | `[L]` 16:9 | `lazy` | Standalone |

---

### IMG-033 — Walking Safari Guide
**Filename:** `img-033-walking-safari-guide.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Destinations Signature Experience — Guided Walking Safari | `/destinations` | `SignatureExperienceCard.tsx` | `[L]` 16:9 | `lazy` | Standalone |

---

### IMG-034 — Bush Plane on Airstrip
**Filename:** `img-034-bush-plane-airstrip.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Destinations Signature Experience — Fly-in Safari Circuit | `/destinations` | `SignatureExperienceCard.tsx` | `[L]` 16:9 | `lazy` | Standalone |

---

### IMG-035 — Game Drive POV at Dawn
**Filename:** `img-035-game-drive-pov-dawn.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Packages page hero | `/packages` | `PackagesHero.tsx` | `[W]` 16:9 to 21:9 full-bleed | `priority` | LCP element |

---

### IMG-036 — Safari Planning Desk
**Filename:** `img-036-safari-planning-desk.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Contact page hero | `/contact` | `ContactHero.tsx` | `[W]` 16:9 full-bleed | `priority` | LCP element |
| Blog page hero | `/blog` | `BlogHero.tsx` | `[W]` 16:9 full-bleed | `priority` | LCP element |

**Note:** These two heroes appear on entirely different pages, so the same image can be used without it ever appearing repetitive to a user browsing the site. The "field notes / planning" aesthetic is consistent with the blog's identity.

---

### IMG-037 — Team Portrait: Amara Nkosi
**Filename:** `img-037-team-amara-nkosi.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** About page team card — Amara Nkosi | `/about` | `TeamCard.tsx` | `[P]` 3:4 | `lazy` | Standalone |

---

### IMG-038 — Team Portrait: David Mwangi
**Filename:** `img-038-team-david-mwangi.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** About page team card — David Mwangi | `/about` | `TeamCard.tsx` | `[P]` 3:4 | `lazy` | Standalone |

---

### IMG-039 — Team Portrait: Fatima Al-Rashid
**Filename:** `img-039-team-fatima-alrashid.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** About page team card — Fatima Al-Rashid | `/about` | `TeamCard.tsx` | `[P]` 3:4 | `lazy` | Standalone |

---

### IMG-040 — Team Portrait: Sipho Dlamini
**Filename:** `img-040-team-sipho-dlamini.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** About page team card — Sipho Dlamini | `/about` | `TeamCard.tsx` | `[P]` 3:4 | `lazy` | Standalone |

---

### IMG-041 — Gallery: Maasai Mara at Dawn (Wide)
**Filename:** `img-041-gallery-mara-dawn-wide.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Gallery grid tile fg-01 — Maasai Mara at Dawn | `/gallery` | `GalleryTile.tsx` | `[W]` wide span (2×1) | `lazy` | Standalone — a wide-composition Mara image distinct from IMG-001 |

**Note:** If IMG-001 has sufficient resolution and compositional quality for both the hero (21:9) and this wide gallery tile, it can double here, eliminating IMG-041 entirely. Evaluate after sourcing IMG-001.

---

### IMG-042 — Gallery: Serengeti Sunset (Gallery Alternate)
**Filename:** `img-042-gallery-serengeti-sunset.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Gallery grid tile fg-03 — Serengeti Sunset | `/gallery` | `GalleryTile.tsx` | `[L]` normal span | `lazy` | Can be replaced by IMG-012 if it is not on the same page view |

**Note:** IMG-012 (acacia sunset) serves the blog article card. Since blog and gallery are separate pages, IMG-012 can optionally serve both slots. If image variety in the gallery is prioritised, source a distinct Serengeti sunset image here.

---

### IMG-043 — Gallery: Samburu Landscape
**Filename:** `img-043-gallery-samburu-landscape.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Gallery grid (flexible placement) | `/gallery` | `GalleryTile.tsx` | `[L]` normal span | `lazy` | Adds Samburu/Northern Kenya range to gallery |

---

### IMG-044 — Gallery: Zanzibar Stone Town / Coast
**Filename:** `img-044-gallery-zanzibar-coast.jpg`

| Slot | Page | Route | Component | Crop | Loading | Notes |
|------|------|-------|-----------|------|---------|-------|
| **PRIMARY** Gallery grid (flexible placement) | `/gallery` | `GalleryTile.tsx` | `[L]` normal span | `lazy` | Adds coastal/cultural range to gallery |

---

## Slot Coverage Summary

The following table maps every original `IMAGE_ASSET_PLAN.md` slot to its assigned unique image:

| Original Slot ID | Description | Assigned Image | Crop Type |
|------------------|-------------|----------------|-----------|
| IMAGE-HP-001 | Homepage hero | IMG-001 | `[W]` |
| IMAGE-HP-002 | Kenya destination card (HP) | IMG-001 | `[P]` |
| IMAGE-HP-003 | Tanzania destination card (HP) | IMG-002 | `[P]` |
| IMAGE-HP-004 | Uganda destination card (HP) | IMG-004 | `[P]` |
| IMAGE-HP-005 | Rwanda destination card (HP) | IMG-005 | `[P]` |
| IMAGE-HP-006 | Experience: Luxury Safaris | IMG-029 | `[P]` |
| IMAGE-HP-007 | Experience: Photography | IMG-027 | `[P]` |
| IMAGE-HP-008 | Experience: Family Adventures | IMG-028 | `[P]` |
| IMAGE-HP-009 | Experience: Honeymoon | IMG-030 | `[P]` |
| IMAGE-HP-010 | Experience: Cultural Journeys | IMG-024 | `[P]` |
| IMAGE-HP-011 | Experience: Beach Holidays | IMG-008 | `[P]` |
| IMAGE-HP-012 | Package card: Mara Migration | IMG-014 | `[L]` |
| IMAGE-HP-013 | Package card: Serengeti Secrets | IMG-003 | `[L]` |
| IMAGE-HP-014 | Package card: Gorilla Highlands | IMG-015 | `[L]` |
| IMAGE-HP-015–020 | Gallery preview (6 tiles) | IMG-001, -015, -012, -017, -009, -008 | Various |
| IMAGE-AB-001 | About hero | IMG-025 | `[W]` |
| IMAGE-AB-003 | Team: Amara Nkosi | IMG-037 | `[P]` |
| IMAGE-AB-004 | Team: David Mwangi | IMG-038 | `[P]` |
| IMAGE-AB-005 | Team: Fatima Al-Rashid | IMG-039 | `[P]` |
| IMAGE-AB-006 | Team: Sipho Dlamini | IMG-040 | `[P]` |
| IMAGE-DS-001 | Destinations hero | IMG-013 | `[W]` |
| IMAGE-DS-002 | Country card: Kenya | IMG-001 | `[P]` |
| IMAGE-DS-003 | Country card: Tanzania | IMG-002 | `[P]` |
| IMAGE-DS-004 | Country card: Rwanda | IMG-005 | `[P]` |
| IMAGE-DS-005 | Country card: Uganda | IMG-004 | `[P]` |
| IMAGE-DS-006 | Country card: Botswana | IMG-006 | `[P]` |
| IMAGE-DS-007 | Country card: Namibia | IMG-007 | `[P]` |
| IMAGE-DS-008 | Experience: Balloon Safari | IMG-003 | `[L]` |
| IMAGE-DS-009 | Experience: Walking Safari | IMG-033 | `[L]` |
| IMAGE-DS-010 | Experience: Fly-in Safari | IMG-034 | `[L]` |
| IMAGE-DS-011 | Experience: Gorilla Habituation | IMG-015 | `[L]` |
| IMAGE-DS-012 | Lodge: Mara Intimate Camp | IMG-031 | `[L]` |
| IMAGE-DS-013 | Lodge: Serengeti Migration Retreat | IMG-002 | `[L]` |
| IMAGE-DS-014 | Lodge: Bwindi Forest Lodge | IMG-004 | `[L]` |
| IMAGE-DS-015 | Lodge: Okavango Island Camp | IMG-032 | `[L]` |
| IMAGE-PK-001 | Packages hero | IMG-035 | `[W]` |
| IMAGE-PK-002 | Package: Mara Migration (PK page) | IMG-014 | `[L]` |
| IMAGE-PK-003 | Package: Serengeti Secrets (PK page) | IMG-003 | `[L]` |
| IMAGE-PK-004 | Package: Gorilla Highlands (PK page) | IMG-015 | `[L]` |
| IMAGE-PK-005 | Package: Botswana Immersion | IMG-018 | `[L]` |
| IMAGE-PK-006 | Package: East Africa Grand Tour | IMG-017 | `[L]` |
| IMAGE-PK-007 | Package: Desert & Dunes Namibia | IMG-007 | `[L]` |
| IMAGE-PK-008 | Signature Itinerary portrait | IMG-014 | `[P]` |
| IMAGE-PK-009 | Accommodation: Classic Luxury | IMG-029 | `[L]` |
| IMAGE-PK-010 | Accommodation: Private & Exclusive | IMG-030 | `[L]` |
| IMAGE-PK-011 | Accommodation: Mobile & Expedition | IMG-031 | `[L]` |
| IMAGE-GL-001 | Gallery hero | IMG-027 or IMG-025 | `[W]` |
| IMAGE-GL-002 (fg-01) | Gallery: Mara at Dawn (wide) | IMG-041 | `[W]` |
| IMAGE-GL-003 (fg-02) | Gallery: Mountain Gorilla (tall) | IMG-015 | `[T]` |
| IMAGE-GL-004 (fg-03) | Gallery: Serengeti Sunset | IMG-012 or IMG-042 | `[L]` |
| IMAGE-GL-005 (fg-04) | Gallery: Elephant, Amboseli | IMG-017 | `[L]` |
| IMAGE-GL-006 (fg-05) | Gallery: Ngorongoro Crater | IMG-009 | `[L]` |
| IMAGE-GL-007 (fg-06) | Gallery: Zanzibar Ocean (wide) | IMG-008 | `[W]` |
| IMAGE-GL-008 (fg-07) | Gallery: Leopard, Samburu | IMG-019 | `[L]` |
| IMAGE-GL-009 (fg-08) | Gallery: Okavango Aerial (tall) | IMG-006 | `[T]` |
| IMAGE-GL-010 (fg-09) | Gallery: Maasai Elder | IMG-024 | `[L]` |
| IMAGE-GL-011 (fg-10) | Gallery: Cheetah, Ol Pejeta | IMG-021 | `[L]` |
| IMAGE-GL-012 (fg-11) | Gallery: Lion Pride (wide) | IMG-020 | `[W]` |
| IMAGE-GL-013 (fg-12) | Gallery: Wildebeest Migration | IMG-014 | `[L]` |
| IMAGE-GL-014 (fg-13) | Gallery: Rhino, Etosha | IMG-022 | `[L]` |
| IMAGE-GL-015 (fg-14) | Gallery: Victoria Falls | IMG-010 | `[L]` |
| IMAGE-GL-016 (fg-15) | Gallery: Balloon (wide) | IMG-003 | `[W]` |
| IMAGE-GL-017 (fg-16) | Gallery: Hippo Pool | IMG-023 | `[L]` |
| IMAGE-GL-018 (fg-17) | Gallery: Gorilla Mother (tall) | IMG-016 | `[T]` |
| IMAGE-GL-019 (fg-18) | Gallery: Kalahari Dunes | IMG-011 | `[L]` |
| IMAGE-GL-020 | Guide vignette: James Mwangi | IMG-025 | `[S]` |
| IMAGE-GL-021 | Guide vignette: Amina Ochieng | IMG-026 | `[S]` |
| IMAGE-GL-022 (cat-1) | Category: Wildlife | IMG-020 | `[S]` |
| IMAGE-GL-023 (cat-2) | Category: Landscapes | IMG-001 or IMG-013 | `[S]` |
| IMAGE-GL-024 (cat-3) | Category: Culture | IMG-024 | `[S]` |
| IMAGE-GL-025 (cat-4) | Category: Conservation | IMG-021 | `[S]` |
| IMAGE-GL-026 (cat-5) | Category: Aerial | IMG-006 | `[S]` |
| IMAGE-GL-027 (cat-6) | Category: Intimate | IMG-015 | `[S]` |
| IMAGE-BL-001 | Blog hero | IMG-036 | `[W]` |
| IMAGE-BL-002 | Featured story: The Crossing | IMG-014 | `[L]` |
| IMAGE-BL-003 | Article: Ol Pejeta Rhino | IMG-022 | `[L]` |
| IMAGE-BL-004 | Article: Okavango Photography | IMG-006 | `[L]` |
| IMAGE-BL-005 | Article: Rwanda Beyond Gorillas | IMG-005 | `[L]` |
| IMAGE-BL-006 | Article: When to Go Africa | IMG-012 | `[L]` |
| IMAGE-BL-007 | Article: Maasai and the Mara | IMG-024 | `[L]` |
| IMAGE-BL-008 | Article: Leopard of Samburu | IMG-019 | `[L]` |
| IMAGE-CO-001 | Contact hero | IMG-036 | `[W]` |
| IMAGE-OG-001 | Default OG (all pages) | IMG-001 (+ design overlay) | `[OG]` |
| IMAGE-OG-002 | Homepage OG | IMG-001 (+ design overlay) | `[OG]` |
| IMAGE-OG-003 | About OG | IMG-001 (default) | `[OG]` |
| IMAGE-OG-004 | Destinations OG | IMG-001 (default) | `[OG]` |
| IMAGE-OG-005 | Packages OG | IMG-003 (+ design overlay) | `[OG]` |
| IMAGE-OG-006 | Gallery OG | IMG-015 (+ design overlay) | `[OG]` |
| IMAGE-OG-007 | Blog OG | IMG-001 (default) | `[OG]` |
| IMAGE-OG-008 | Contact OG | IMG-001 (default) | `[OG]` |

---

## Homepage Gallery Preview — Specific Mapping

The homepage gallery preview (`GalleryPreview.tsx`) renders 6 tiles using `GALLERY_ITEMS` from `homepage.ts`. These tiles link to the full gallery. The source files are the same as the corresponding gallery grid slots:

| Preview Tile ID | Label | Image File | Gallery Grid Counterpart |
|-----------------|-------|------------|--------------------------|
| g1 | Maasai Mara at Dawn | `img-041-gallery-mara-dawn-wide.jpg` | fg-01 |
| g2 | Mountain Gorilla, Rwanda | `img-015-mountain-gorilla-silverback.jpg` | fg-02 |
| g3 | Serengeti Sunset | `img-012-acacia-sunset-silhouette.jpg` | fg-03 |
| g4 | Elephant, Amboseli | `img-017-elephant-amboseli-kilimanjaro.jpg` | fg-04 |
| g5 | Ngorongoro Crater | `img-009-ngorongoro-crater-floor.jpg` | fg-05 |
| g6 | Zanzibar, Indian Ocean | `img-008-zanzibar-indian-ocean.jpg` | fg-06 |

The `GalleryItem` interface in `homepage.ts` will need `imageSrc: string` added (analogous to the `DestinationData` interface gap noted in `IMAGE_ASSET_PLAN.md`).

---

*End of IMAGE_REUSE_MATRIX.md*
