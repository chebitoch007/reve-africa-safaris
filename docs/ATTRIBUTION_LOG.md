# RÊVE AFRICA SAFARIS — Attribution Log

> **Batch:** 1 (P0 LCP Images)
> **Status:** Batch 1 table below is the original sourcing plan (historical). Image files for 64 slots are now committed and optimised — see "Phase 1 — Optimisation & Provenance Record" at the end. 14 slots are still empty placeholders.
> **Last updated:** Phase 1 optimisation (`assets/phase-1-heroes`)

---

## Batch 1 — P0 LCP Images

| Asset ID | Filename | Target Path | Platform | Photographer | Source URL | Licence | Attribution Required | Status |
|----------|----------|-------------|----------|--------------|------------|---------|---------------------|--------|
| IMG-001 | img-001-maasai-mara-dawn-landscape.jpg | public/images/homepage/hero/ | Unsplash | TBD | TBD | Unsplash Licence | No | ⏳ Placeholder |
| IMG-001 (copy) | img-001-maasai-mara-dawn-landscape.jpg | public/images/homepage/destinations-preview/ | Unsplash | TBD | TBD | Unsplash Licence | No | ⏳ Placeholder |
| IMG-002 | img-002-serengeti-plains-landscape.jpg | public/images/homepage/destinations-preview/ | Unsplash | TBD | TBD | Unsplash Licence | No | ⏳ Placeholder |
| IMG-004 | img-004-bwindi-rainforest-interior.jpg | public/images/homepage/destinations-preview/ | Unsplash | TBD | TBD | Unsplash Licence | No | ⏳ Placeholder |
| IMG-005 | img-005-rwanda-volcanoes-mist.jpg | public/images/homepage/destinations-preview/ | Unsplash | TBD | TBD | Unsplash Licence | No | ⏳ Placeholder |
| IMG-025 | img-025-safari-guide-field.jpg | public/images/about/hero/ | Unsplash | TBD | TBD | Unsplash Licence | No | ⏳ Placeholder |
| IMG-013 | img-013-east-africa-aerial-wilderness.jpg | public/images/destinations/hero/ | Unsplash | TBD | TBD | Unsplash Licence | No | ⏳ Placeholder |
| IMG-035 | img-035-game-drive-pov-dawn.jpg | public/images/packages/hero/ | Unsplash | TBD | TBD | Unsplash Licence | No | ⏳ Placeholder |
| IMG-027 | img-027-safari-photographer-golden-hour.jpg | public/images/gallery/hero/ | Unsplash | TBD | TBD | Unsplash Licence | No | ⏳ Placeholder |
| IMG-036 | img-036-safari-planning-desk.jpg | public/images/blog/hero/ | Unsplash | TBD | TBD | Unsplash Licence | No | ⏳ Placeholder |
| IMG-036 (copy) | img-036-safari-planning-desk.jpg | public/images/contact/hero/ | Unsplash | TBD | TBD | Unsplash Licence | No | ⏳ Placeholder |

---

## Decision Point — Gallery Hero

**IMG-025 does NOT show the guide using a camera.**

Per the brief's decision logic (Image B decision point), IMG-025 is sourced as a safari guide in the field (binoculars / tracking pose). It does not show photography activity.

**Therefore: Gallery hero uses IMG-027** (`img-027-safari-photographer-golden-hour.jpg`) — a dedicated wildlife photographer image with telephoto lens at golden hour.

Gallery hero path: `public/images/gallery/hero/img-027-safari-photographer-golden-hour.jpg`

---

## Image Sourcing Notes

> **Network block encountered during Batch 1 implementation.**
> Images.unsplash.com and images.pexels.com returned HTTP 403 from the build environment.
> All 11 image paths have placeholder (empty) files committed at the correct paths.
> Real photography must be sourced manually and committed to replace these placeholders.

### Images still needing real files (sourcing queries per brief):

**IMG-001** — `public/images/homepage/hero/img-001-maasai-mara-dawn-landscape.jpg`
- Also copy to: `public/images/homepage/destinations-preview/img-001-maasai-mara-dawn-landscape.jpg`
- Min resolution: 5000 × 2250px
- Queries: `maasai mara dawn savanna`, `kenya safari sunrise golden hour landscape`

**IMG-002** — `public/images/homepage/destinations-preview/img-002-serengeti-plains-landscape.jpg`
- Min resolution: 4000 × 2500px
- Queries: `serengeti plains landscape golden`, `tanzania serengeti grassland horizon`

**IMG-004** — `public/images/homepage/destinations-preview/img-004-bwindi-rainforest-interior.jpg`
- Min resolution: 3200 × 2400px
- Queries: `bwindi forest interior morning light`, `rainforest canopy africa light dappled`

**IMG-005** — `public/images/homepage/destinations-preview/img-005-rwanda-volcanoes-mist.jpg`
- Min resolution: 3000 × 2000px
- Queries: `rwanda volcanoes national park mist`, `rwanda hills landscape mist morning`

**IMG-025** — `public/images/about/hero/img-025-safari-guide-field.jpg`
- Min resolution: 3500 × 2400px
- Queries: `safari guide binoculars africa bush`, `wildlife ranger africa field walking`

**IMG-013** — `public/images/destinations/hero/img-013-east-africa-aerial-wilderness.jpg`
- Min resolution: 4000 × 1800px
- Queries: `east africa aerial wilderness landscape`, `serengeti aerial view from plane`

**IMG-035** — `public/images/packages/hero/img-035-game-drive-pov-dawn.jpg`
- Min resolution: 3000 × 1688px
- Queries: `game drive point of view africa dawn`, `safari vehicle inside africa morning`

**IMG-027** — `public/images/gallery/hero/img-027-safari-photographer-golden-hour.jpg`
- Min resolution: 3000 × 2000px
- Queries: `wildlife photographer safari vehicle beanbag`, `photography safari telephoto lens golden hour`

**IMG-036** — `public/images/blog/hero/img-036-safari-planning-desk.jpg`
- Also copy to: `public/images/contact/hero/img-036-safari-planning-desk.jpg`
- Min resolution: 2400 × 1350px
- Queries: `safari planning desk binoculars map camp`, `camp table planning materials africa`

---

*Log will be updated with photographer credits, source URLs, and resolved resolutions once real images are committed.*

---

## Phase 1 — Optimisation & Provenance Record

> **Branch:** `assets/phase-1-heroes`  ·  **Scope:** every non-empty image under `public/images/` (64 files: 7 hero slots, 57 card/content slots).

### 1. Provenance (⚠ action required)

**Photographer, source URL and licence are NOT recorded for any of these images.** The files contain no EXIF/IPTC/XMP credit data (only an sRGB colour profile, or an empty XMP packet written by "Go XMP SDK 1.0"), and nothing in the repository maps these files to a source. The Batch 1 table above only records the *planned* platform (Unsplash) with photographer/URL "TBD".

Until the owner fills this in, treat the licence status of every file below as **unconfirmed**:

- For each file, record: platform or generator, photographer/author, source URL, licence, and whether attribution or a model/property release is required (see `MASTER_PHOTO_LIBRARY.md` licensing notes, e.g. mountain gorillas and the guide portraits).
- Several images (notably the 1600×686 sunrise/balloon files and the hero set) look like AI-generated imagery rather than photographs. This is a visual impression only and is not verified. If any are generated, record the tool and its terms of use instead of a photographer credit.
- Optimisation did not change authorship or licence. Re-encoding, resizing and metadata stripping do not alter any attribution obligation.

### 2. Tools and settings used

| Item | Value |
|---|---|
| Processing | Python 3 with Pillow 12.1.1 (one-off script, not committed) |
| Resampling | Lanczos (`reducing_gap=3.0` when downscaling); no sharpening, cropping or colour adjustment; aspect ratios unchanged |
| JPEG encoding | Progressive, optimised Huffman tables, 4:2:0 chroma subsampling |
| Colour | 8-bit RGB with embedded sRGB IEC61966-2.1 ICC profile. No source used a non-sRGB profile, so no colour conversion was needed. |
| Metadata | EXIF/XMP/IPTC stripped on re-encoded files (removes any GPS/camera data); EXIF orientation applied before encoding |
| Verification | Separate Pillow check of format, mode, width and byte size for every file; ImageMagick `identify -format %Q` for hero JPEG quality |
| Size caps | Measured in decimal KB (hero ≤ 800,000 bytes, card ≤ 400,000 bytes), which is stricter than 1024-based KB |

### 3. Targets applied

| Slot type | Min width | Max size | Format | Quality |
|---|---|---|---|---|
| Hero (7 slots) | 1920 px | 800 KB | JPEG, sRGB | 85–88 (all 7 achieved; 86–88) |
| Card / content | 1200 px | 400 KB | JPEG | Search 88 → 85 first; below 85 only when the cap required it (6 files, flagged) |

Files already inside the spec for their slot type were left byte-identical (no generation loss). Result: 30 downscaled, 21 upscaled, 13 unchanged.

### 4. ⚠ Interpolated (upscaled) images

21 files were smaller than the minimum width (hero sources 1200–1672 px; card sources 600–900 px) and were enlarged with Lanczos to meet the spec. **Enlarging adds pixels, not detail**: these files satisfy `npm run check:images` but are still low-resolution sources and remain candidates for replacement with true high-resolution originals. They are marked ⚠ in the tables below.

### 5. Content and mapping fixes

| File | Change |
|---|---|
| `blog/articles/img-019-leopard-acacia-samburu.jpg` | populated from gallery/grid/img-019-leopard-acacia-samburu.jpg |
| `destinations/experiences/img-003-balloon-serengeti-dawn.jpg` | balloon photo moved here from img-034-bush-plane-airstrip.jpg |
| `destinations/experiences/img-034-bush-plane-airstrip.jpg` | balloon photo removed (no bush-plane asset available); left as zero-byte placeholder |

`destinations/experiences/img-034-bush-plane-airstrip.jpg` was byte-identical to the hot-air-balloon photo (IMG-003), while the real balloon slot, `destinations/experiences/img-003-balloon-serengeti-dawn.jpg`, was an empty file. No bush-plane image exists in the repository, so IMG-034 is left as an empty placeholder rather than showing a balloon under the alt text "Light aircraft on a bush airstrip…". **A real bush-plane image is still needed.**

### 6. Hero images (7 slots)

| File (under `public/images/`) | Asset | Before (px / size) | After (px / size) | JPEG quality | Operation | Flags |
|---|---|---|---|---|---|---|
| `about/hero/img-025-safari-guide-field.jpg` | IMG-025 | 5568×3712 / 4191 KB | 2560×1707 / 773 KB | q86 | Downscaled + re-encoded |  |
| `blog/hero/img-036-safari-planning-desk.jpg` | IMG-036 | 1536×1024 / 168 KB | 1920×1280 / 324 KB | q88 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail |
| `contact/hero/img-036-safari-planning-desk.jpg` | IMG-036 | 1536×1024 / 200 KB | 1920×1280 / 378 KB | q88 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail |
| `destinations/hero/img-013-east-africa-aerial-wilderness.jpg` | IMG-013 | 1200×800 / 189 KB | 1920×1280 / 497 KB | q88 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail |
| `gallery/hero/img-027-safari-photographer-golden-hour.jpg` | IMG-027 | 1672×941 / 110 KB | 1920×1081 / 226 KB | q88 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail |
| `homepage/hero/img-001-maasai-mara-dawn-landscape.jpg` | IMG-001 | 1672×941 / 430 KB | 1920×1081 / 324 KB | q88 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail |
| `packages/hero/img-035-game-drive-pov-dawn.jpg` | IMG-035 | 1536×1024 / 187 KB | 1920×1280 / 324 KB | q88 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail |

### 7. Card and content images


| File (under `public/images/`) | Asset | Before (px / size) | After (px / size) | JPEG quality | Operation | Flags |
|---|---|---|---|---|---|---|
| `blog/articles/img-005-rwanda-volcanoes-mist.jpg` | IMG-005 | 600×900 / 77 KB | 1200×1800 / 381 KB | q87 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail |
| `blog/articles/img-006-okavango-delta-aerial.jpg` | IMG-006 | 600×900 / 100 KB | 1200×1800 / 376 KB | q85 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail |
| `blog/articles/img-012-acacia-sunset-silhouette.jpg` | IMG-012 | 1200×800 / 60 KB | 1200×800 / 60 KB | — | None (already within spec) |  |
| `blog/articles/img-019-leopard-acacia-samburu.jpg` | IMG-019 | 6240×4160 / 7292 KB | 1400×933 / 390 KB | q85 | Downscaled + re-encoded |  |
| `blog/articles/img-022-black-rhino-etosha.jpg` | IMG-022 | 2789×1992 / 1034 KB | 1600×1143 / 370 KB | q88 | Downscaled + re-encoded |  |
| `blog/featured/img-014-wildebeest-mara-crossing.jpg` | IMG-014 | 6556×4370 / 7096 KB | 1200×800 / 358 KB | q88 | Downscaled + re-encoded |  |
| `destinations/countries/img-001-maasai-mara-dawn-landscape.jpg` | IMG-001 | 768×1152 / 90 KB | 1200×1800 / 347 KB | q88 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail |
| `destinations/countries/img-002-serengeti-plains-landscape.jpg` | IMG-002 | 600×900 / 74 KB | 1200×1800 / 359 KB | q88 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail |
| `destinations/countries/img-004-bwindi-rainforest-interior.jpg` | IMG-004 | 600×900 / 121 KB | 1200×1800 / 382 KB | q80 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail; ⚠ q<85 to meet 400 KB cap |
| `destinations/countries/img-005-rwanda-volcanoes-mist.jpg` | IMG-005 | 600×900 / 74 KB | 1200×1800 / 359 KB | q88 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail |
| `destinations/countries/img-006-okavango-delta-aerial.jpg` | IMG-006 | 600×900 / 94 KB | 1200×1800 / 378 KB | q80 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail; ⚠ q<85 to meet 400 KB cap |
| `destinations/countries/img-007-sossusvlei-dunes-namibia.jpg` | IMG-007 | 3264×4928 / 1882 KB | 1200×1812 / 366 KB | q88 | Downscaled + re-encoded |  |
| `destinations/experiences/img-003-balloon-serengeti-dawn.jpg` | IMG-003 | 1600×686 / 126 KB | 1600×686 / 126 KB | — | None (already within spec) |  |
| `destinations/experiences/img-015-mountain-gorilla-silverback.jpg` | IMG-015 | 3000×1987 / 1564 KB | 1400×927 / 364 KB | q88 | Downscaled + re-encoded |  |
| `destinations/experiences/img-033-walking-safari-guide.jpg` | IMG-033 | 3860×2468 / 3485 KB | 1200×767 / 371 KB | q88 | Downscaled + re-encoded |  |
| `gallery/categories/img-001-maasai-mara-dawn-landscape.jpg` | IMG-001 | 768×1152 / 90 KB | 1200×1800 / 347 KB | q88 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail |
| `gallery/categories/img-006-okavango-delta-aerial.jpg` | IMG-006 | 600×900 / 94 KB | 1200×1800 / 378 KB | q80 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail; ⚠ q<85 to meet 400 KB cap |
| `gallery/categories/img-015-mountain-gorilla-silverback.jpg` | IMG-015 | 3972×4000 / 1881 KB | 1600×1611 / 343 KB | q88 | Downscaled + re-encoded |  |
| `gallery/categories/img-020-lion-pride-dusk.jpg` | IMG-020 | 5504×5504 / 5265 KB | 1200×1200 / 366 KB | q88 | Downscaled + re-encoded |  |
| `gallery/categories/img-021-cheetah-ol-pejeta.jpg` | IMG-021 | 2078×2078 / 565 KB | 1400×1400 / 388 KB | q88 | Downscaled + re-encoded |  |
| `gallery/grid/img-003-balloon-serengeti-dawn.jpg` | IMG-003 | 1600×686 / 126 KB | 1600×686 / 126 KB | — | None (already within spec) |  |
| `gallery/grid/img-006-okavango-delta-aerial.jpg` | IMG-006 | 600×900 / 94 KB | 1200×1800 / 378 KB | q80 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail; ⚠ q<85 to meet 400 KB cap |
| `gallery/grid/img-008-zanzibar-indian-ocean.jpg` | IMG-008 | 1200×800 / 151 KB | 1200×800 / 151 KB | — | None (already within spec) |  |
| `gallery/grid/img-009-ngorongoro-crater-floor.jpg` | IMG-009 | 3388×2259 / 1351 KB | 1400×933 / 374 KB | q88 | Downscaled + re-encoded |  |
| `gallery/grid/img-010-victoria-falls-zimbabwe.jpg` | IMG-010 | 5184×3456 / 2708 KB | 1600×1067 / 303 KB | q88 | Downscaled + re-encoded |  |
| `gallery/grid/img-011-kalahari-desert-botswana.jpg` | IMG-011 | 900×600 / 62 KB | 1200×800 / 157 KB | q88 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail |
| `gallery/grid/img-012-acacia-sunset-silhouette.jpg` | IMG-012 | 1200×800 / 60 KB | 1200×800 / 60 KB | — | None (already within spec) |  |
| `gallery/grid/img-014-wildebeest-mara-crossing.jpg` | IMG-014 | 6000×4000 / 4709 KB | 1400×933 / 373 KB | q87 | Downscaled + re-encoded |  |
| `gallery/grid/img-015-mountain-gorilla-silverback.jpg` | IMG-015 | 3072×4608 / 2638 KB | 1200×1800 / 386 KB | q85 | Downscaled + re-encoded |  |
| `gallery/grid/img-016-gorilla-mother-infant.jpg` | IMG-016 | 2000×3000 / 1267 KB | 1200×1800 / 386 KB | q82 | Downscaled + re-encoded | ⚠ q<85 to meet 400 KB cap |
| `gallery/grid/img-017-elephant-amboseli-kilimanjaro.jpg` | IMG-017 | 4752×3168 / 2264 KB | 1600×1067 / 378 KB | q86 | Downscaled + re-encoded |  |
| `gallery/grid/img-019-leopard-acacia-samburu.jpg` | IMG-019 | 6240×4160 / 7292 KB | 1400×933 / 390 KB | q85 | Downscaled + re-encoded |  |
| `gallery/grid/img-020-lion-pride-dusk.jpg` | IMG-020 | 4839×3101 / 1229 KB | 1600×1025 / 290 KB | q88 | Downscaled + re-encoded |  |
| `gallery/grid/img-021-cheetah-ol-pejeta.jpg` | IMG-021 | 3648×3648 / 4830 KB | 1600×1600 / 389 KB | q86 | Downscaled + re-encoded |  |
| `gallery/grid/img-022-black-rhino-etosha.jpg` | IMG-022 | 4759×3173 / 3334 KB | 1400×933 / 377 KB | q88 | Downscaled + re-encoded |  |
| `gallery/grid/img-023-hippo-pool-sunset.jpg` | IMG-023 | 4928×3264 / 3812 KB | 1600×1060 / 390 KB | q87 | Downscaled + re-encoded |  |
| `gallery/grid/img-041-gallery-mara-dawn-wide.jpg` | IMG-041 | 1600×686 / 126 KB | 1600×686 / 126 KB | — | None (already within spec) |  |
| `homepage/destinations-preview/img-001-maasai-mara-dawn-landscape.jpg` | IMG-001 | 768×1152 / 90 KB | 1200×1800 / 347 KB | q88 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail |
| `homepage/destinations-preview/img-002-serengeti-plains-landscape.jpg` | IMG-002 | 600×900 / 74 KB | 1200×1800 / 359 KB | q88 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail |
| `homepage/destinations-preview/img-004-bwindi-rainforest-interior.jpg` | IMG-004 | 600×900 / 121 KB | 1200×1800 / 382 KB | q80 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail; ⚠ q<85 to meet 400 KB cap |
| `homepage/destinations-preview/img-005-rwanda-volcanoes-mist.jpg` | IMG-005 | 600×900 / 74 KB | 1200×1800 / 359 KB | q88 | Upscaled (Lanczos) + re-encoded | ⚠ interpolated, no added detail |
| `homepage/gallery/img-008-zanzibar-indian-ocean.jpg` | IMG-008 | 1200×800 / 151 KB | 1200×800 / 151 KB | — | None (already within spec) |  |
| `homepage/gallery/img-009-ngorongoro-crater-floor.jpg` | IMG-009 | 3348×2232 / 1085 KB | 1600×1067 / 382 KB | q88 | Downscaled + re-encoded |  |
| `homepage/gallery/img-012-acacia-sunset-silhouette.jpg` | IMG-012 | 1200×800 / 60 KB | 1200×800 / 60 KB | — | None (already within spec) |  |
| `homepage/gallery/img-015-mountain-gorilla-silverback.jpg` | IMG-015 | 6960×4640 / 3958 KB | 1600×1067 / 354 KB | q88 | Downscaled + re-encoded |  |
| `homepage/gallery/img-017-elephant-amboseli-kilimanjaro.jpg` | IMG-017 | 3872×2592 / 2203 KB | 1400×937 / 377 KB | q88 | Downscaled + re-encoded |  |
| `homepage/gallery/img-041-gallery-mara-dawn-wide.jpg` | IMG-041 | 1600×686 / 126 KB | 1600×686 / 126 KB | — | None (already within spec) |  |
| `homepage/packages/img-003-balloon-serengeti-dawn.jpg` | IMG-003 | 1600×686 / 126 KB | 1600×686 / 126 KB | — | None (already within spec) |  |
| `homepage/packages/img-007-sossusvlei-dunes-namibia.jpg` | IMG-007 | 4912×3264 / 812 KB | 1600×1063 / 138 KB | q88 | Downscaled + re-encoded |  |
| `homepage/packages/img-014-wildebeest-mara-crossing.jpg` | IMG-014 | 6000×4000 / 4709 KB | 1400×933 / 373 KB | q87 | Downscaled + re-encoded |  |
| `homepage/packages/img-015-mountain-gorilla-silverback.jpg` | IMG-015 | 6048×4032 / 4024 KB | 1400×933 / 380 KB | q88 | Downscaled + re-encoded |  |
| `homepage/packages/img-017-elephant-amboseli-kilimanjaro.jpg` | IMG-017 | 6016×4012 / 4712 KB | 1600×1067 / 361 KB | q88 | Downscaled + re-encoded |  |
| `homepage/packages/img-018-chobe-elephants-river.jpg` | IMG-018 | 5875×3917 / 6108 KB | 1400×933 / 383 KB | q87 | Downscaled + re-encoded |  |
| `packages/accommodation/img-029-luxury-tent-interior.jpg` | IMG-029 | 1200×800 / 148 KB | 1200×800 / 148 KB | — | None (already within spec) |  |
| `packages/accommodation/img-030-private-camp-deck-view.jpg` | IMG-030 | 1200×800 / 133 KB | 1200×800 / 133 KB | — | None (already within spec) |  |
| `packages/accommodation/img-031-mobile-expedition-camp.jpg` | IMG-031 | 1200×800 / 118 KB | 1200×800 / 118 KB | — | None (already within spec) |  |
| `packages/signature/img-014-wildebeest-mara-crossing.jpg` | IMG-014 | 2584×4592 / 2269 KB | 1200×2133 / 382 KB | q88 | Downscaled + re-encoded |  |

### 8. Slots still empty (no source asset)

These 14 files are zero-byte placeholders and will be reported by `npm run check:images` until real images are supplied:

- `about/team/img-037-team-amara-nkosi.jpg`
- `about/team/img-038-team-david-mwangi.jpg`
- `about/team/img-039-team-fatima-alrashid.jpg`
- `about/team/img-040-team-sipho-dlamini.jpg`
- `blog/articles/img-024-maasai-elder-portrait.jpg`
- `destinations/experiences/img-034-bush-plane-airstrip.jpg`
- `destinations/lodges/img-002-serengeti-plains-landscape.jpg`
- `destinations/lodges/img-004-bwindi-rainforest-interior.jpg`
- `destinations/lodges/img-031-mobile-expedition-camp.jpg`
- `destinations/lodges/img-032-mokoro-okavango-waterway.jpg`
- `gallery/categories/img-024-maasai-elder-portrait.jpg`
- `gallery/grid/img-024-maasai-elder-portrait.jpg`
- `gallery/guides/img-025-safari-guide-field.jpg`
- `gallery/guides/img-026-female-guide-portrait.jpg`
