# RÊVE AFRICA SAFARIS — Attribution Log

> **Batch:** 1 (P0 LCP Images)
> **Status:** Image files pending — placeholders committed; real files to be sourced and committed separately.
> **Last updated:** Batch 1 implementation

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
