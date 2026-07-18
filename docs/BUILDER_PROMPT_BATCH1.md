# RÊVE AFRICA SAFARIS — Builder Prompt: Batch 1
## P0 LCP Images + TypeScript Interface Fixes + Homepage Hero & Destination Cards

> **Status:** Ready for implementation
> **Architect:** Senior Frontend Technical Architect
> **Scope:** This prompt is complete and self-contained. Do not begin Batch 2 until Batch 1 acceptance criteria are confirmed by the Architect.
> **Repository:** https://github.com/chebitoch007/reve-africa-safaris

---

## Context

The site is at Release Candidate status with all routes implemented using CSS gradient placeholders. This batch introduces real photography. It is the first and most critical batch — it covers all P0 LCP images (the Largest Contentful Paint element on every page) and the homepage destination cards.

Work in this batch must be completed and verified before any other image integration proceeds.

---

## Overview of Changes

This batch covers:

1. **Folder structure** — create `public/images/` directory tree
2. **TypeScript interface fix** — add `imageSrc` to `DestinationData` and `GalleryItem`
3. **Image sourcing** — download 8 photographs from Unsplash/Pexels
4. **Homepage Hero** (`Hero.tsx`) — replace gradient placeholder with `<Image>`
5. **Homepage Destination Cards** (`DestinationCard.tsx` + `homepage.ts`) — wire `imageSrc` and replace placeholder
6. **About Hero** (`AboutHero.tsx`) — replace gradient placeholder
7. **Destinations Hero** (`DestinationsHero.tsx`) — replace gradient placeholder
8. **Packages Hero** (`PackagesHero.tsx`) — replace gradient placeholder
9. **Gallery Hero** (`GalleryHero.tsx`) — replace gradient placeholder
10. **Blog Hero** (`BlogHero.tsx`) — replace gradient placeholder
11. **Contact Hero** (`ContactHero.tsx`) — replace gradient placeholder

---

## Step 1 — Create Folder Structure

Create the following directories. They must exist before any images are placed:

```
public/images/homepage/hero/
public/images/homepage/destinations-preview/
public/images/about/hero/
public/images/destinations/hero/
public/images/packages/hero/
public/images/gallery/hero/
public/images/blog/hero/
public/images/contact/hero/
public/og/
```

Place a `.gitkeep` in each empty directory so they are committed to the repository.

---

## Step 2 — Source and Download Images

Download the following 8 images. For each one, use the search queries provided, select the highest-resolution available option that meets the brief, and save it with the exact production filename specified.

Place all files in their target paths immediately after download — do not batch them.

**Before downloading each image, verify:**
- Resolution meets or exceeds the minimum specified
- No competitor lodge branding or vehicle company names visible
- No identifiable faces requiring model release (back-of-head / silhouette compositions preferred for people images)

---

### IMAGE A — Homepage + Destination Cards Hero
**Asset ID:** IMG-001
**Production filename:** `img-001-maasai-mara-dawn-landscape.jpg`
**Target path:** `public/images/homepage/hero/img-001-maasai-mara-dawn-landscape.jpg`
**Minimum resolution:** 5000 × 2250px — this image serves 4 slots at different crops; width is critical
**Platform:** Unsplash first, Pexels if needed
**Search queries (try in order):**
1. `maasai mara dawn savanna`
2. `kenya safari sunrise golden hour landscape`
3. `african savanna acacia sunrise wide`
4. `east africa landscape golden hour`

**Brief:** Wide Maasai Mara savanna at dawn or dusk. Sky occupies 40–50% of frame, warm amber horizon. No vehicles. Acacia silhouette or distant elephant optional. Must be ultra-wide and work as both a 21:9 hero AND a 3:4 portrait crop for the destination cards without quality loss.

**This image serves:**
- Homepage hero (full-bleed, LCP)
- Kenya destination card, Homepage (3:4 portrait crop)
- Kenya country card, Destinations page (3:4 portrait crop)
- Default OG image (1200×630 crop — design step, not this batch)

---

### IMAGE B — About Hero
**Asset ID:** IMG-025
**Production filename:** `img-025-safari-guide-field.jpg`
**Target path:** `public/images/about/hero/img-025-safari-guide-field.jpg`
**Minimum resolution:** 3500 × 2400px
**Platform:** Unsplash first
**Search queries:**
1. `safari guide binoculars africa bush`
2. `wildlife ranger africa field walking`
3. `african guide savanna dawn walking`

**Brief:** Male African safari guide in the field — scanning with binoculars, checking tracks, or walking through bush. Must look like a professional who belongs in that landscape, not a tourist. Natural light. Bush or savanna background. Profile or three-quarter view preferred; back-of-head acceptable. Full frontal face acceptable only if photographer notes model release.

**⚠️ DECISION POINT — record the answer in your completion report:**
Does the sourced image show the guide holding or actively using a camera / photographing something?
- If YES → this image also serves the Gallery hero
- If NO → IMG-027 will serve the Gallery hero (sourced in Batch 2)

---

### IMAGE C — Destinations Hero
**Asset ID:** IMG-013
**Production filename:** `img-013-east-africa-aerial-wilderness.jpg`
**Target path:** `public/images/destinations/hero/img-013-east-africa-aerial-wilderness.jpg`
**Minimum resolution:** 4000 × 1800px
**Platform:** Unsplash first
**Search queries:**
1. `east africa aerial wilderness landscape`
2. `serengeti aerial view from plane`
3. `africa savanna aerial panoramic`
4. `kenya aerial wilderness vast landscape`

**Brief:** Aerial view of East African wilderness from a light aircraft. The landscape texture (grass, acacia canopy, seasonal watercourse) is the subject — not a single animal. No identifiable lodge infrastructure. Should feel like looking down on an entire untouched world.

---

### IMAGE D — Packages Hero
**Asset ID:** IMG-035
**Production filename:** `img-035-game-drive-pov-dawn.jpg`
**Target path:** `public/images/packages/hero/img-035-game-drive-pov-dawn.jpg`
**Minimum resolution:** 3000 × 1688px
**Platform:** Unsplash first
**Search queries:**
1. `game drive point of view africa dawn`
2. `safari vehicle inside africa morning`
3. `inside safari vehicle africa plains`
4. `game drive africa vehicle windshield view`

**Brief:** First-person perspective from inside or directly behind a safari vehicle at dawn. Vehicle bonnet or dashboard rail visible in foreground. Open savanna or bush stretching ahead. No driver or passengers needed — empty vehicle looking out is ideal. Conveys the anticipation of a game drive beginning.

**⚠️ This subject is underrepresented in stock.** If no first-person vehicle shot is found after 3 search attempts, acceptable substitute: close-up of safari vehicle dashboard/steering wheel with savanna visible through windscreen, or a vehicle parked facing open plains at dawn.

---

### IMAGE E — Gallery Hero
**Asset ID:** IMG-027 (or IMG-025 — see decision point in Image B)
**Production filename:** `img-027-safari-photographer-golden-hour.jpg`
**Target path:** `public/images/gallery/hero/img-027-safari-photographer-golden-hour.jpg`
**Minimum resolution:** 3000 × 2000px
**Platform:** Unsplash first
**Search queries:**
1. `wildlife photographer safari vehicle beanbag`
2. `photography safari telephoto lens golden hour`
3. `wildlife photography camera lens africa vehicle`
4. `safari photography long lens africa sunset`

**Brief:** A person (guide or guest) with a long telephoto lens mounted on a vehicle beanbag, pointing toward unseen wildlife. Golden hour light. Profile or back view — full face not required. The camera and the act of looking is the subject, not the wildlife.

**Note:** Only source and place this image if Image B (IMG-025) does NOT show the guide holding a camera. If IMG-025 does include a camera, skip sourcing this image and use IMG-025 for the gallery hero path instead. Report which path was taken.

**⚠️ Verify:** No prominently visible Canon, Nikon, or Sony branding.

---

### IMAGE F — Blog + Contact Heroes
**Asset ID:** IMG-036
**Production filename:** `img-036-safari-planning-desk.jpg`
**Target path:** `public/images/blog/hero/img-036-safari-planning-desk.jpg`
**Also copy to:** `public/images/contact/hero/img-036-safari-planning-desk.jpg`

*(Same file serves both heroes — copy, do not symlink)*

**Minimum resolution:** 2400 × 1350px
**Platform:** Unsplash first
**Search queries:**
1. `safari planning desk binoculars map camp`
2. `camp table planning materials africa`
3. `field notes notebook binoculars safari`
4. `safari specialist desk journal binoculars`

**Brief:** A camp table with safari planning materials — handwritten map, binoculars, compass, coffee. Warm ambient light. Bush context visible beyond. Should feel personal and expert, not corporate.

---

### IMAGE G — Tanzania Destination Card
**Asset ID:** IMG-002
**Production filename:** `img-002-serengeti-plains-landscape.jpg`
**Target path:** `public/images/homepage/destinations-preview/img-002-serengeti-plains-landscape.jpg`
**Minimum resolution:** 4000 × 2500px (must support both 3:4 portrait and 16:9 landscape crop)
**Platform:** Unsplash first
**Search queries:**
1. `serengeti plains landscape golden`
2. `tanzania serengeti grassland horizon`
3. `african savanna endless plains`
4. `serengeti dry season landscape aerial`

**Brief:** Flat or gently rolling Serengeti grassland extending to the horizon. Golden dry-season grass in afternoon light. Enormous sky. A lone wildebeest or distant herd optional. No vehicles. Scale and emptiness is the subject.

---

### IMAGE H — Uganda + Rwanda Destination Cards
**Asset ID:** IMG-004 (Uganda) and IMG-005 (Rwanda) — source both

**Image H1 — Uganda:**
**Asset ID:** IMG-004
**Production filename:** `img-004-bwindi-rainforest-interior.jpg`
**Target path:** `public/images/homepage/destinations-preview/img-004-bwindi-rainforest-interior.jpg`
**Minimum resolution:** 3200 × 2400px
**Search queries:** `bwindi forest interior morning light`, `rainforest canopy africa light dappled`, `tropical forest trail uganda light`, `ancient rainforest interior green`
**Brief:** Dense tropical rainforest interior. Shafts of light through the canopy. A trail or path through the forest adds depth. No people required. Should feel ancient, lush, enclosed.

**Image H2 — Rwanda:**
**Asset ID:** IMG-005
**Production filename:** `img-005-rwanda-volcanoes-mist.jpg`
**Target path:** `public/images/homepage/destinations-preview/img-005-rwanda-volcanoes-mist.jpg`
**Minimum resolution:** 3000 × 2000px
**Search queries:** `rwanda volcanoes national park mist`, `rwanda hills landscape mist morning`, `volcanoes rwanda misty green hills`, `rwanda thousand hills aerial mist`
**Brief:** Rwanda's Volcanoes National Park or the thousand hills. Layered green hills or volcanic peaks in morning mist. Should feel cool-to-warm, ethereal, distinctly lush compared to the savanna images.

---

## Step 3 — TypeScript Interface Fixes

These two changes must be made before the image integration in Steps 4 and 5. They are code changes, not image changes.

### Fix 1 — `DestinationData` interface (`src/lib/constants/homepage.ts`)

Add `imageSrc: string` to the `DestinationData` interface and populate it for all four `FEATURED_DESTINATIONS` entries.

**Current interface (lines ~52–64):**
```typescript
export interface DestinationData {
  id:          string;
  country:     string;
  region:      string;
  tagline:     string;
  description: string;
  href:        string;
  /** Placeholder gradient stop colours used until real photography is added */
  placeholderFrom: string;
  placeholderTo:   string;
  highlights:  readonly string[];
}
```

**Updated interface — add `imageSrc` after `href`:**
```typescript
export interface DestinationData {
  id:          string;
  country:     string;
  region:      string;
  tagline:     string;
  description: string;
  href:        string;
  /** Production photography path — relative to /public */
  imageSrc:    string;
  /** Alt text for the destination image */
  imageAlt:    string;
  /** Placeholder gradient stop colours — retained as fallback */
  placeholderFrom: string;
  placeholderTo:   string;
  highlights:  readonly string[];
}
```

**Updated `FEATURED_DESTINATIONS` — add `imageSrc` and `imageAlt` to each entry:**

```typescript
export const FEATURED_DESTINATIONS: DestinationData[] = [
  {
    id:          'kenya',
    country:     'Kenya',
    region:      'Maasai Mara & Beyond',
    tagline:     'The Great Migration',
    description: 'Witness one of nature\'s greatest spectacles across the rolling savanna of the Maasai Mara. Kenya is safari at its most iconic.',
    href:        '/destinations/kenya',
    imageSrc:    '/images/homepage/destinations-preview/img-001-maasai-mara-dawn-landscape.jpg',
    imageAlt:    'Dawn light over the Maasai Mara savanna, Kenya',
    placeholderFrom: '#9E8B4D',
    placeholderTo:   '#363B2D',
    highlights:  ['Maasai Mara', 'Amboseli', 'Laikipia'],
  },
  {
    id:          'tanzania',
    country:     'Tanzania',
    region:      'Serengeti & Ngorongoro',
    tagline:     'The Endless Plains',
    description: 'From the infinite Serengeti to the volcanic wonder of Ngorongoro, Tanzania offers an unrivalled canvas for wildlife encounters.',
    href:        '/destinations/tanzania',
    imageSrc:    '/images/homepage/destinations-preview/img-002-serengeti-plains-landscape.jpg',
    imageAlt:    'The endless golden plains of the Serengeti, Tanzania',
    placeholderFrom: '#7D6D3A',
    placeholderTo:   '#282C22',
    highlights:  ['Serengeti', 'Ngorongoro', 'Zanzibar'],
  },
  {
    id:          'uganda',
    country:     'Uganda',
    region:      'Bwindi & Queen Elizabeth',
    tagline:     'The Pearl of Africa',
    description: 'Trek through ancient rainforest to encounter mountain gorillas in their natural habitat. Uganda is Africa\'s most intimate wilderness.',
    href:        '/destinations/uganda',
    imageSrc:    '/images/homepage/destinations-preview/img-004-bwindi-rainforest-interior.jpg',
    imageAlt:    'Morning light filtering through the ancient rainforest at Bwindi, Uganda',
    placeholderFrom: '#495C3D',
    placeholderTo:   '#1C1F18',
    highlights:  ['Bwindi', 'Queen Elizabeth', 'Murchison Falls'],
  },
  {
    id:          'rwanda',
    country:     'Rwanda',
    region:      'Volcanoes & Nyungwe',
    tagline:     'Land of a Thousand Hills',
    description: 'Among mist-wrapped volcanoes, come face to face with endangered mountain gorillas and golden monkeys in the heart of Central Africa.',
    href:        '/destinations/rwanda',
    imageSrc:    '/images/homepage/destinations-preview/img-005-rwanda-volcanoes-mist.jpg',
    imageAlt:    'Mist-wrapped volcanic peaks of Volcanoes National Park, Rwanda',
    placeholderFrom: '#627A53',
    placeholderTo:   '#131510',
    highlights:  ['Volcanoes NP', 'Nyungwe Forest', 'Lake Kivu'],
  },
] as const;
```

**Note:** Kenya reuses the hero image (IMG-001) at a portrait crop. The file lives in `homepage/hero/` but is referenced from the destination card. This is intentional per the Image Reuse Matrix.

---

### Fix 2 — `GalleryItem` interface (`src/lib/constants/homepage.ts`)

Add `imageSrc` and `imageAlt` to `GalleryItem`. This is required for Batch 3 (gallery preview integration) but the interface fix must be made now to avoid a breaking change mid-way through the project.

**Current interface:**
```typescript
export interface GalleryItem {
  id:              string;
  label:           string;
  span:            'normal' | 'wide' | 'tall';
  placeholderFrom: string;
  placeholderTo:   string;
}
```

**Updated interface:**
```typescript
export interface GalleryItem {
  id:              string;
  label:           string;
  span:            'normal' | 'wide' | 'tall';
  /** Production photography path — relative to /public. Empty string until image is sourced. */
  imageSrc:        string;
  /** Alt text for the gallery image */
  imageAlt:        string;
  placeholderFrom: string;
  placeholderTo:   string;
}
```

**Updated `GALLERY_ITEMS` — add `imageSrc: ''` and `imageAlt` placeholders for now:**

```typescript
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id:              'g1',
    label:           'Maasai Mara at Dawn',
    span:            'wide',
    imageSrc:        '',
    imageAlt:        'Dawn mist rising over the Maasai Mara, Kenya',
    placeholderFrom: '#9E8B4D',
    placeholderTo:   '#363B2D',
  },
  {
    id:              'g2',
    label:           'Mountain Gorilla, Rwanda',
    span:            'tall',
    imageSrc:        '',
    imageAlt:        'Mountain gorilla in Volcanoes National Park, Rwanda',
    placeholderFrom: '#495C3D',
    placeholderTo:   '#131510',
  },
  {
    id:              'g3',
    label:           'Serengeti Sunset',
    span:            'normal',
    imageSrc:        '',
    imageAlt:        'The Serengeti at golden hour, Tanzania',
    placeholderFrom: '#7D6D3A',
    placeholderTo:   '#282C22',
  },
  {
    id:              'g4',
    label:           'Elephant, Amboseli',
    span:            'normal',
    imageSrc:        '',
    imageAlt:        'African elephant family in Amboseli, Kenya',
    placeholderFrom: '#4F4A44',
    placeholderTo:   '#0C0D0B',
  },
  {
    id:              'g5',
    label:           'Ngorongoro Crater',
    span:            'normal',
    imageSrc:        '',
    imageAlt:        'Wildlife on the floor of the Ngorongoro Crater, Tanzania',
    placeholderFrom: '#627A53',
    placeholderTo:   '#1C1F18',
  },
  {
    id:              'g6',
    label:           'Zanzibar, Indian Ocean',
    span:            'normal',
    imageSrc:        '',
    imageAlt:        'Turquoise Indian Ocean waters, Zanzibar',
    placeholderFrom: '#839A73',
    placeholderTo:   '#282C22',
  },
];
```

The `GalleryPreview` component does not yet use `imageSrc` — the empty string is intentional and will be populated in Batch 3. The gradient fallback remains active until then.

---

## Step 4 — Homepage Hero (`src/components/home/Hero.tsx`)

Replace the gradient placeholder `<div>` inside the `<motion.div variants={imageVariants}>` wrapper.

**Find this block (inside the motion.div with `aria-hidden="true"`):**
```tsx
<div
  className="absolute inset-0"
  style={{
    background: `
      radial-gradient(ellipse at 60% 40%, #363B2D 0%, transparent 60%),
      linear-gradient(160deg, #1C1F18 0%, #0C0D0B 45%, #282C22 100%)
    `,
  }}
/>
{/* Subtle texture overlay */}
<div
  className="absolute inset-0 opacity-[0.03]"
  style={{
    backgroundImage: `url("data:image/svg+xml,...")`,
  }}
/>
{/* Amber horizon glow */}
<div
  className="absolute bottom-0 left-0 right-0 h-64 opacity-20"
  style={{
    background: 'linear-gradient(to top, #D4A017, transparent)',
  }}
/>
```

**Replace with:**
```tsx
<Image
  src="/images/homepage/hero/img-001-maasai-mara-dawn-landscape.jpg"
  alt="Dawn light over the Maasai Mara savanna, Kenya"
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>
{/* Retain the amber horizon glow overlay — it enhances the real image */}
<div
  className="absolute bottom-0 left-0 right-0 h-64 opacity-15 z-[1]"
  style={{
    background: 'linear-gradient(to top, #D4A017, transparent)',
  }}
  aria-hidden="true"
/>
```

**Add the import at the top of `Hero.tsx`:**
```tsx
import Image from 'next/image';
```

**Notes:**
- The `<motion.div variants={imageVariants}>` wrapper stays exactly as is — the `<Image>` inherits its fade-in animation automatically
- Remove the texture overlay div and the radial gradient div — they are replaced by the photograph
- The amber horizon glow div is retained but reduced to `opacity-15` (from `opacity-20`) since real photography provides its own tonal warmth
- `priority` is required — this is the LCP element
- `fill` + parent `absolute inset-0` means the image fills the container exactly

---

## Step 5 — Destination Cards (`src/components/home/DestinationCard.tsx`)

Replace the gradient placeholder `<div>` with an `<Image>` component that reads `imageSrc` from the `DestinationData` prop.

**Add import at top of file:**
```tsx
import Image from 'next/image';
```

**Find this block (the background placeholder div with `aria-hidden="true"`):**
```tsx
<div
  className={cn(
    'absolute inset-0 transition-transform duration-[800ms]',
    'ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105',
  )}
  aria-hidden="true"
  style={{
    background: `linear-gradient(160deg, ${placeholderFrom} 0%, ${placeholderTo} 100%)`,
  }}
>
  {/* Subtle texture */}
  <div
    className="absolute inset-0 opacity-[0.06]"
    style={{
      backgroundImage: `url("data:image/svg+xml,...")`,
    }}
  />
</div>
```

**Replace with:**
```tsx
<div className="absolute inset-0 overflow-hidden">
  <Image
    src={destination.imageSrc}
    alt={destination.imageAlt}
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    className={cn(
      'object-cover transition-transform duration-[800ms]',
      'ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105',
    )}
  />
</div>
```

**Also update the destructuring line** in the component body. Find:
```tsx
const { country, region, tagline, description, href, highlights, placeholderFrom, placeholderTo } = destination;
```

**Replace with:**
```tsx
const { country, region, tagline, description, href, highlights, imageSrc, imageAlt } = destination;
```

*(`placeholderFrom` and `placeholderTo` are no longer needed in the component now that real images are used. They remain on the interface as a fallback reference but are not destructured.)*

---

## Step 6 — About Hero (`src/components/about/AboutHero.tsx`)

Fetch the current file from the repository, locate the placeholder `<div>` in the hero background area, and replace it with:

```tsx
<Image
  src="/images/about/hero/img-025-safari-guide-field.jpg"
  alt="Safari guide tracking wildlife in the East African bush at dawn"
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>
```

Add `import Image from 'next/image';` at the top of the file.

Retain any existing overlay gradient divs that sit above the image for text legibility — only replace the gradient/placeholder background element itself.

---

## Step 7 — Destinations Hero (`src/components/destinations/DestinationsHero.tsx`)

Same pattern as Step 6. Replace the hero background placeholder with:

```tsx
<Image
  src="/images/destinations/hero/img-013-east-africa-aerial-wilderness.jpg"
  alt="Aerial view of the vast East African wilderness landscape"
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>
```

Add `import Image from 'next/image';` if not already present.

---

## Step 8 — Packages Hero (`src/components/packages/PackagesHero.tsx`)

Replace the hero background placeholder with:

```tsx
<Image
  src="/images/packages/hero/img-035-game-drive-pov-dawn.jpg"
  alt="Point-of-view from inside a safari vehicle at dawn, looking out over the African plains"
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>
```

---

## Step 9 — Gallery Hero (`src/components/gallery/GalleryHero.tsx`)

**This step depends on the Image B decision point.**

**If IMG-025 (safari guide) shows a camera / photography activity:**
```tsx
<Image
  src="/images/about/hero/img-025-safari-guide-field.jpg"
  alt="Safari guide photographing wildlife in the East African bush"
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>
```

**If IMG-025 does NOT show a camera (most likely):**
```tsx
<Image
  src="/images/gallery/hero/img-027-safari-photographer-golden-hour.jpg"
  alt="Photographer with telephoto lens on safari at golden hour"
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>
```

Report which path was taken in your completion report.

---

## Step 10 — Blog Hero (`src/components/blog/BlogHero.tsx`)

```tsx
<Image
  src="/images/blog/hero/img-036-safari-planning-desk.jpg"
  alt="Field notes and binoculars on a camp table in the African bush"
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>
```

---

## Step 11 — Contact Hero (`src/components/contact/ContactHero.tsx`)

```tsx
<Image
  src="/images/contact/hero/img-036-safari-planning-desk.jpg"
  alt="Safari specialist at a desk with maps and planning materials"
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>
```

*(Same file as Blog hero — different alt text because context differs.)*

---

## Architectural Notes (Do Not Skip)

### Note 1 — `ExperienceCard` has no image area
The current `ExperienceCard.tsx` uses an icon + colour gradient bar, not a card image. This is the actual implemented design — the Phase 1 planning documents assumed images but the component was not built with them. **Do not add images to ExperienceCard in this batch.** This is an architectural decision to be reviewed separately.

### Note 2 — Hero.tsx is a Client Component
`Hero.tsx` uses `'use client'` due to Framer Motion. Adding `next/image` to a Client Component is valid — `Image` is SSR-compatible. No changes to the component type are needed.

### Note 3 — `next.config.ts` requires no changes
All images are served from `public/` (local static files). `next/image` handles local files without any `remotePatterns` configuration. Do not modify `next.config.ts` in this batch.

### Note 4 — Do not remove `placeholderFrom` / `placeholderTo` from the data
These fields remain on the `DestinationData` and `ExperienceData` interfaces. They may be needed as CSS fallbacks during image load, or for components not yet receiving images. Remove them only after all images are integrated and verified across all components.

---

## Acceptance Criteria

Report back with the following for architect review before beginning Batch 2:

**1. File placement** — list every file placed in `public/images/`, confirming filename and path:
```
public/images/homepage/hero/img-001-maasai-mara-dawn-landscape.jpg  ✅  [resolution: X × Y]
public/images/homepage/destinations-preview/img-002-...              ✅  [resolution: X × Y]
...
```

**2. Attribution log** — for each image:
```
IMG-001 | Unsplash | [Photographer name] | [URL] | Unsplash Licence | Attribution required: No
...
```

**3. TypeScript compile** — confirm `npx tsc --noEmit` passes with zero errors after the interface changes.

**4. Decision point resolution** — state clearly:
> "IMG-025 [does / does not] show the guide using a camera. Gallery hero uses [IMG-025 / IMG-027]."

**5. Visual spot-check** — confirm the following routes render real photography (not gradients) in a local dev build:
- `/` — Homepage hero and all 4 destination cards
- `/about` — About hero
- `/destinations` — Destinations hero
- `/packages` — Packages hero
- `/gallery` — Gallery hero
- `/blog` — Blog hero
- `/contact` — Contact hero

**6. No regressions** — confirm no TypeScript errors and no broken imports on any route.

---

## What This Batch Does NOT Cover

The following are intentionally deferred to later batches:

- Gallery preview tiles (Batch 3)
- Package cards — Mara Migration, Serengeti Secrets, Gorilla Highlands (Batch 2)
- Destinations country cards (Batch 2)
- Blog featured story and article cards (Batch 4)
- Gallery grid (Batch 5)
- Team portraits (Batch 6 or commissioned)
- OG images (design step — separate brief)
- Removal of Next.js scaffold SVGs (pre-launch cleanup — separate brief)

---

*End of BUILDER_PROMPT_BATCH1.md*
*Architect: Rêve Africa Safaris Technical Architect*
*Repository: https://github.com/chebitoch007/reve-africa-safaris*
