# RÊVE AFRICA SAFARIS — Image Asset Tracker

> **Document Version:** 1.0
> **Phase:** Production Asset Preparation (Phase 2B — Sourcing & Integration)
> **Input documents:** `IMAGE_ASSET_PLAN.md` · `MASTER_PHOTO_LIBRARY.md` · `IMAGE_REUSE_MATRIX.md` · `IMAGE_SOURCING_GUIDE.md`
> **Status:** Pre-sourcing — awaiting asset acquisition
> **Repository:** https://github.com/chebitoch007/reve-africa-safaris

---

## How to Use This Document

This is the **canonical source of truth** for all production image assets. Update it as each image moves through the pipeline. Do not source, integrate, or deploy an image that is not tracked here.

**Workflow per image:**
1. Source the image — fill in Platform, Photographer, URL, Licence, Resolution, Model Release
2. Download — mark `Downloaded` ✅
3. Rename to production filename — confirm filename matches `MASTER_PHOTO_LIBRARY.md`
4. Run reverse image search — note any reuse conflicts in Notes
5. Hand to developer — developer fills in Optimised, Variants Created, Integrated columns
6. Mark status `Complete` only when **all slots in the Reuse Map are wired**

**Status values:**
- `Not Started` — no sourcing activity yet
- `Searching` — actively looking, no suitable candidate found yet
- `Candidate Selected` — image shortlisted, not yet downloaded
- `Downloaded` — file on disk, not yet integrated
- `Integrated` — wired into the codebase for all slots listed in the Reuse Map
- `Complete` — integrated, optimised, verified in Lighthouse / production build
- `Blocked` — sourcing or licensing issue; see Notes

**Priority levels (from `IMAGE_ASSET_PLAN.md` Priority Matrix):**
- `P0` — LCP element; must be sourced and integrated first
- `P1` — High visibility, above the fold or near-LCP
- `P2` — Below the fold, standard lazy-loaded
- `P3` — Not visible in site (OG images); requires design work beyond photography

---

## Merge Candidates

Two images in the library may be collapsible once the primary image is evaluated:

| Image | May Merge With | Condition |
|-------|---------------|-----------|
| IMG-041 (Gallery: Mara Dawn Wide) | IMG-001 (Mara Dawn Landscape) | If IMG-001 is sourced at 5000px+ and the composition works at the gallery wide (2×1) span without feeling repetitive alongside the homepage hero |
| IMG-042 (Gallery: Serengeti Sunset) | IMG-012 (Acacia Sunset Silhouette) | Blog and Gallery are separate pages; the same file can serve both if the composition works at both 16:9 (gallery) and 16:10 (blog card) |

Update the `Merge Candidate` field in each relevant row after evaluating sourced images. If merged, strike through the collapsed row and note which image absorbs the slot.

---

## Gallery Hero Decision Point

Either IMG-025 (safari guide in field) **or** IMG-027 (safari photographer with camera) serves the Gallery page hero — not both. The decision depends on which sourced image is compositionally stronger at full-bleed 16:9, and whether IMG-025 includes a camera (thematically required for the "Africa through our lens" headline).

- If IMG-025 shows guide with camera → IMG-025 serves: About hero + Gallery hero + Guide vignette (James Mwangi)
- If IMG-025 shows guide without camera → IMG-027 serves Gallery hero; IMG-025 serves About hero + Guide vignette only

Record the decision in the Notes field of both rows once images are sourced.

---

## Asset Registry

### LANDSCAPE & ENVIRONMENT

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-001 |
| **Subject** | Maasai Mara savanna at dawn — golden plains, acacia silhouettes, warm amber horizon |
| **Production Filename** | `img-001-maasai-mara-dawn-landscape.jpg` |
| **Priority** | P0 |
| **Reuse Count** | 4 slots |
| **Primary Slot** | Homepage hero (`Hero.tsx`) — LCP |
| **All Slots** | Homepage hero [W] `priority` · Kenya destination card HP [P] lazy · Kenya country card Destinations [P] lazy · Default OG [OG] static |
| **Merge Candidate** | Potentially absorbs IMG-041 (evaluate after sourcing) |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 5000 × 2250px (ultra-wide; must support all crop variants) |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [W] hero · ☐ [P] destination cards · ☐ [OG] 1200×630 |
| **Integrated Into Project** | ☐ Homepage hero · ☐ HP Kenya card · ☐ DS Kenya card · ☐ OG default |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-002 |
| **Subject** | Serengeti plains — open golden grassland extending to the horizon |
| **Production Filename** | `img-002-serengeti-plains-landscape.jpg` |
| **Priority** | P1 |
| **Reuse Count** | 3 slots |
| **Primary Slot** | Tanzania destination card Homepage (`DestinationCard.tsx`) |
| **All Slots** | Tanzania destination card HP [P] lazy · Tanzania country card Destinations [P] lazy · Serengeti Migration Retreat lodge card [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 4000 × 2500px |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [P] destination cards · ☐ [L] lodge card |
| **Integrated Into Project** | ☐ HP Tanzania card · ☐ DS Tanzania card · ☐ DS Serengeti lodge card |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-003 |
| **Subject** | Hot air balloon over Serengeti or Maasai Mara at dawn |
| **Production Filename** | `img-003-balloon-serengeti-dawn.jpg` |
| **Priority** | P1 |
| **Reuse Count** | 4 slots (+ 1 OG) |
| **Primary Slot** | Package card — Serengeti Secrets, Homepage (`PackageCard.tsx`) |
| **All Slots** | HP package card Serengeti Secrets [L] lazy · PK package card Serengeti Secrets [L] lazy · DS Signature Experience Balloon Safari [L] lazy · Gallery fg-15 wide span [W] lazy · Packages OG [OG] static |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 3000 × 1688px |
| **Model Release Required** | No (verify no identifiable branded balloon livery) |
| **Model Release Status** | N/A — check balloon branding |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] package/experience cards · ☐ [W] gallery wide span · ☐ [OG] |
| **Integrated Into Project** | ☐ HP package card · ☐ PK package card · ☐ DS experience card · ☐ Gallery fg-15 · ☐ OG packages |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-004 |
| **Subject** | Bwindi / rainforest interior — dappled light through ancient canopy |
| **Production Filename** | `img-004-bwindi-rainforest-interior.jpg` |
| **Priority** | P1 |
| **Reuse Count** | 3 slots |
| **Primary Slot** | Uganda destination card Homepage (`DestinationCard.tsx`) |
| **All Slots** | Uganda destination card HP [P] lazy · Uganda country card Destinations [P] lazy · Bwindi Forest Lodge card Destinations [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 3200 × 2400px (4:3 source to support both portrait and landscape crops) |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [P] destination cards · ☐ [L] lodge card |
| **Integrated Into Project** | ☐ HP Uganda card · ☐ DS Uganda card · ☐ DS Bwindi lodge card |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-005 |
| **Subject** | Rwanda Volcanoes National Park / misty green hills |
| **Production Filename** | `img-005-rwanda-volcanoes-mist.jpg` |
| **Priority** | P1 |
| **Reuse Count** | 3 slots |
| **Primary Slot** | Rwanda destination card Homepage (`DestinationCard.tsx`) |
| **All Slots** | Rwanda destination card HP [P] lazy · Rwanda country card Destinations [P] lazy · Blog article card — Rwanda Beyond the Gorillas [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 3000 × 2000px |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [P] destination cards · ☐ [L] blog card |
| **Integrated Into Project** | ☐ HP Rwanda card · ☐ DS Rwanda card · ☐ Blog Rwanda article |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-006 |
| **Subject** | Okavango Delta aerial — waterways through papyrus and palm islands |
| **Production Filename** | `img-006-okavango-delta-aerial.jpg` |
| **Priority** | P1 |
| **Reuse Count** | 4 slots |
| **Primary Slot** | Botswana country card Destinations (`CountryCard.tsx`) |
| **All Slots** | Botswana country card Destinations [P] lazy · Gallery fg-08 tall span [T] lazy · Gallery category card Aerial [S] lazy · Blog article — Golden Hour in the Okavango [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 3500 × 2500px (must support tall 1:2 gallery crop) |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [P] country card · ☐ [T] gallery tall span · ☐ [S] category card · ☐ [L] blog card |
| **Integrated Into Project** | ☐ DS Botswana card · ☐ Gallery fg-08 · ☐ Gallery cat-5 · ☐ Blog Okavango article |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-007 |
| **Subject** | Sossusvlei red dunes, Namibia — dune faces against deep blue sky |
| **Production Filename** | `img-007-sossusvlei-dunes-namibia.jpg` |
| **Priority** | P1 |
| **Reuse Count** | 2 slots |
| **Primary Slot** | Namibia country card Destinations (`CountryCard.tsx`) |
| **All Slots** | Namibia country card Destinations [P] lazy · Package card — Desert & Dunes of Namibia [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 3000 × 4000px (portrait source preferred; must allow 16:9 landscape crop) |
| **Model Release Required** | No (if human figures are present: silhouettes acceptable without release) |
| **Model Release Status** | Verify if sourced image includes identifiable people |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [P] country card · ☐ [L] package card |
| **Integrated Into Project** | ☐ DS Namibia card · ☐ PK Namibia package card |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-008 |
| **Subject** | Zanzibar coast — turquoise Indian Ocean, white sand, dhow on horizon |
| **Production Filename** | `img-008-zanzibar-indian-ocean.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 2 slots |
| **Primary Slot** | Homepage Experience card — Beach Holidays (`ExperienceCard.tsx`) |
| **All Slots** | HP Experience card Beach Holidays [P] lazy · Gallery fg-06 wide span [W] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 3500 × 2200px (must support both portrait and wide landscape crop) |
| **Model Release Required** | No (verify no resort branding visible) |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [P] experience card · ☐ [W] gallery wide span |
| **Integrated Into Project** | ☐ HP experience card · ☐ Gallery fg-06 |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-009 |
| **Subject** | Ngorongoro Crater floor — wildlife on ancient caldera with crater rim visible |
| **Production Filename** | `img-009-ngorongoro-crater-floor.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | Gallery fg-05 normal span (`GalleryTile.tsx`) |
| **All Slots** | Gallery fg-05 [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] gallery normal span |
| **Integrated Into Project** | ☐ Gallery fg-05 |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-010 |
| **Subject** | Victoria Falls — full curtain of water, Zimbabwe side |
| **Production Filename** | `img-010-victoria-falls-zimbabwe.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | Gallery fg-14 normal span (`GalleryTile.tsx`) |
| **All Slots** | Gallery fg-14 [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] gallery normal span |
| **Integrated Into Project** | ☐ Gallery fg-14 |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-011 |
| **Subject** | Kalahari Desert dunes or Makgadikgadi salt pans, Botswana |
| **Production Filename** | `img-011-kalahari-desert-botswana.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | Gallery fg-18 normal span (`GalleryTile.tsx`) |
| **All Slots** | Gallery fg-18 [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] gallery normal span |
| **Integrated Into Project** | ☐ Gallery fg-18 |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-012 |
| **Subject** | Acacia tree silhouetted against East African sunset — amber and violet sky |
| **Production Filename** | `img-012-acacia-sunset-silhouette.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 2 slots (optionally 3 if absorbs IMG-042) |
| **Primary Slot** | Gallery fg-03 normal span (`GalleryTile.tsx`) |
| **All Slots** | Gallery fg-03 [L] lazy · Blog article card — When to Go: Africa [L] lazy |
| **Merge Candidate** | May absorb IMG-042 (gallery-only Serengeti sunset) — evaluate after sourcing |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] gallery normal · ☐ [L] blog card 16:10 |
| **Integrated Into Project** | ☐ Gallery fg-03 · ☐ Blog When to Go article |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-013 |
| **Subject** | East Africa aerial wilderness — vast savanna from light aircraft |
| **Production Filename** | `img-013-east-africa-aerial-wilderness.jpg` |
| **Priority** | P0 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | Destinations page hero (`DestinationsHero.tsx`) — LCP |
| **All Slots** | Destinations hero [W] `priority` |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 4000 × 1800px |
| **Model Release Required** | No (verify no identifiable lodge infrastructure) |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [W] hero full-bleed |
| **Integrated Into Project** | ☐ DS hero |
| **Complete** | ☐ |
| **Notes** | |

---

### WILDLIFE

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-014 |
| **Subject** | Wildebeest Mara River crossing — thousands mid-stream, spray, crocodiles |
| **Production Filename** | `img-014-wildebeest-mara-crossing.jpg` |
| **Priority** | P0 |
| **Reuse Count** | 5 slots |
| **Primary Slot** | Packages Signature Itinerary portrait panel (`SignatureItinerary.tsx`) |
| **All Slots** | PK Signature Itinerary portrait panel [P] lazy · Blog Featured Story — The Crossing [L] lazy · HP package card Mara Migration [L] lazy · PK package card Mara Migration [L] lazy · Gallery fg-12 [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 3000 × 4000px (portrait source; landscape crops derived from middle band) |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [P] signature itinerary · ☐ [L] blog featured · ☐ [L] HP package card · ☐ [L] PK package card · ☐ [L] gallery |
| **Integrated Into Project** | ☐ PK Signature Itinerary · ☐ Blog Featured Story · ☐ HP Mara Migration card · ☐ PK Mara Migration card · ☐ Gallery fg-12 |
| **Complete** | ☐ |
| **Notes** | Highest reuse count in the library — 5 slots. Do not mark complete until all 5 are wired. Ethically sourced images only; subject should not appear stressed. |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-015 |
| **Subject** | Mountain gorilla — silverback or adult male, natural forest light, eyes in focus |
| **Production Filename** | `img-015-mountain-gorilla-silverback.jpg` |
| **Priority** | P1 |
| **Reuse Count** | 5 slots (+ 1 OG) |
| **Primary Slot** | Package card — Gorilla Highlands Homepage (`PackageCard.tsx`) |
| **All Slots** | HP package card Gorilla Highlands [L] lazy · PK package card Gorilla Highlands [L] lazy · DS Signature Experience Gorilla Habituation [L] lazy · Gallery fg-02 tall span [T] lazy · Gallery category card Intimate [S] lazy · Gallery OG [OG] static |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2500 × 3500px |
| **Model Release Required** | No — wildlife |
| **Model Release Status** | N/A — verify ethical sourcing (RDB / UWA compliance) |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] package/experience cards · ☐ [T] gallery tall span · ☐ [S] category card · ☐ [OG] |
| **Integrated Into Project** | ☐ HP Gorilla Highlands card · ☐ PK Gorilla Highlands card · ☐ DS Gorilla Habituation · ☐ Gallery fg-02 · ☐ Gallery cat-6 · ☐ OG gallery |
| **Complete** | ☐ |
| **Notes** | Ethical sourcing critical. Verify image was taken at approved viewing distances under RDB (Rwanda) or UWA (Uganda) guidelines. |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-016 |
| **Subject** | Mountain gorilla mother and infant — tender, intimate, natural light |
| **Production Filename** | `img-016-gorilla-mother-infant.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | Gallery fg-17 tall span (`GalleryTile.tsx`) |
| **All Slots** | Gallery fg-17 [T] lazy |
| **Merge Candidate** | None — must remain distinct from IMG-015 |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2500 × 3500px |
| **Model Release Required** | No — wildlife |
| **Model Release Status** | N/A — same ethical sourcing requirements as IMG-015 |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [T] gallery tall span |
| **Integrated Into Project** | ☐ Gallery fg-17 |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-017 |
| **Subject** | Elephant herd in Amboseli with Mount Kilimanjaro in background |
| **Production Filename** | `img-017-elephant-amboseli-kilimanjaro.jpg` |
| **Priority** | P1 |
| **Reuse Count** | 3 slots |
| **Primary Slot** | Package card — East Africa Grand Tour Homepage (`PackageCard.tsx`) |
| **All Slots** | HP package card East Africa Grand Tour [L] lazy · PK package card East Africa Grand Tour [L] lazy · Gallery fg-04 normal span [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 3000 × 1688px |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] package cards · ☐ [L] gallery tight crop on elephants |
| **Integrated Into Project** | ☐ HP East Africa Grand Tour card · ☐ PK East Africa Grand Tour card · ☐ Gallery fg-04 |
| **Complete** | ☐ |
| **Notes** | Mountain may be partially cloud-veiled; this is acceptable and often more atmospheric. |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-018 |
| **Subject** | Chobe River elephant herd, Botswana — multiple elephants at the water |
| **Production Filename** | `img-018-chobe-elephants-river.jpg` |
| **Priority** | P1 |
| **Reuse Count** | 2 slots |
| **Primary Slot** | Package card — Botswana Immersion Homepage (`PackageCard.tsx`) |
| **All Slots** | HP package card Botswana Immersion [L] lazy · PK package card Botswana Immersion [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 3000 × 1688px |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] package cards |
| **Integrated Into Project** | ☐ HP Botswana Immersion card · ☐ PK Botswana Immersion card |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-019 |
| **Subject** | Leopard resting in acacia tree, Samburu National Reserve, Kenya |
| **Production Filename** | `img-019-leopard-acacia-samburu.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 2 slots |
| **Primary Slot** | Gallery fg-07 normal span (`GalleryTile.tsx`) |
| **All Slots** | Gallery fg-07 [L] lazy · Blog article card — The Leopard of Samburu [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] gallery · ☐ [L] blog card 16:10 |
| **Integrated Into Project** | ☐ Gallery fg-07 · ☐ Blog Leopard of Samburu article |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-020 |
| **Subject** | Lion pride resting at dusk — warm low light, Serengeti or Maasai Mara |
| **Production Filename** | `img-020-lion-pride-dusk.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 2 slots |
| **Primary Slot** | Gallery fg-11 wide span (`GalleryTile.tsx`) |
| **All Slots** | Gallery fg-11 [W] wide span lazy · Gallery category card Wildlife [S] lazy (single lion head crop) |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 3000 × 1688px (wide span demands full resolution) |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [W] gallery wide span · ☐ [S] category card |
| **Integrated Into Project** | ☐ Gallery fg-11 · ☐ Gallery cat-1 Wildlife |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-021 |
| **Subject** | Cheetah in Ol Pejeta Conservancy, Kenya |
| **Production Filename** | `img-021-cheetah-ol-pejeta.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 2 slots |
| **Primary Slot** | Gallery fg-10 normal span (`GalleryTile.tsx`) |
| **All Slots** | Gallery fg-10 [L] lazy · Gallery category card Conservation [S] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] gallery · ☐ [S] category card |
| **Integrated Into Project** | ☐ Gallery fg-10 · ☐ Gallery cat-4 Conservation |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-022 |
| **Subject** | Black rhinoceros at waterhole — Etosha National Park, Namibia or Ol Pejeta |
| **Production Filename** | `img-022-black-rhino-etosha.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 2 slots |
| **Primary Slot** | Gallery fg-13 normal span (`GalleryTile.tsx`) |
| **All Slots** | Gallery fg-13 [L] lazy · Blog article card — Inside Ol Pejeta [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] gallery · ☐ [L] blog card 16:10 |
| **Integrated Into Project** | ☐ Gallery fg-13 · ☐ Blog Ol Pejeta article |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-023 |
| **Subject** | Hippos in a pool at sunset, Maasai Mara, Kenya |
| **Production Filename** | `img-023-hippo-pool-sunset.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | Gallery fg-16 normal span (`GalleryTile.tsx`) |
| **All Slots** | Gallery fg-16 [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] gallery |
| **Integrated Into Project** | ☐ Gallery fg-16 |
| **Complete** | ☐ |
| **Notes** | |

---

### PEOPLE & CULTURE

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-024 |
| **Subject** | Maasai elder in traditional red shuka — dignified environmental portrait |
| **Production Filename** | `img-024-maasai-elder-portrait.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 4 slots |
| **Primary Slot** | Homepage Experience card — Cultural Journeys (`ExperienceCard.tsx`) |
| **All Slots** | HP Experience card Cultural Journeys [P] lazy · Gallery fg-09 [L] lazy · Blog article card — The Maasai and the Mara [L] lazy · Gallery category card Culture [S] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 3000 × 2000px |
| **Model Release Required** | ⚠️ Yes — identifiable person |
| **Model Release Status** | Unconfirmed — contact photographer or prefer non-direct-to-camera composition |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [P] experience card · ☐ [L] gallery · ☐ [L] blog card · ☐ [S] category card |
| **Integrated Into Project** | ☐ HP Cultural Journeys card · ☐ Gallery fg-09 · ☐ Blog Maasai article · ☐ Gallery cat-3 |
| **Complete** | ☐ |
| **Notes** | ⚠️ Model release risk. Prefer images where face is in context, partially turned, or at environmental distance rather than direct-to-camera headshot. Run reverse image search before use. |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-025 |
| **Subject** | Safari guide (male, African) in the field — binoculars, tracking, walking |
| **Production Filename** | `img-025-safari-guide-field.jpg` |
| **Priority** | P0 |
| **Reuse Count** | 2–3 slots (Gallery hero slot depends on image content — see decision point above) |
| **Primary Slot** | About page hero (`AboutHero.tsx`) — LCP |
| **All Slots** | About hero [W] `priority` · Gallery guide vignette James Mwangi [S] lazy · Gallery hero [W] `priority` (only if guide is photographing or holding camera) |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 3500 × 2400px |
| **Model Release Required** | ⚠️ Recommended |
| **Model Release Status** | Unconfirmed — prefer professional field context over tourist context; back-of-head or 3/4 profile reduces risk |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [W] About hero · ☐ [S] guide vignette · ☐ [W] Gallery hero (if applicable) |
| **Integrated Into Project** | ☐ About hero · ☐ Gallery guide vignette (James Mwangi) · ☐ Gallery hero (conditional) |
| **Complete** | ☐ |
| **Notes** | ⚠️ Gallery hero decision point: record here whether this image includes camera/photography activity. If yes, this image serves 3 slots. If no, IMG-027 serves Gallery hero. |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-026 |
| **Subject** | Female safari guide or naturalist (African) — field portrait, Kenya context |
| **Production Filename** | `img-026-female-guide-portrait.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | Gallery guide vignette — Amina Ochieng (`BehindTheLens.tsx`) |
| **All Slots** | Gallery guide vignette Amina Ochieng [S] or [P] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 1500 × 2000px |
| **Model Release Required** | ⚠️ Yes — identifiable person, portrait context |
| **Model Release Status** | Unconfirmed |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [S] or [P] vignette |
| **Integrated Into Project** | ☐ Gallery guide vignette Amina Ochieng |
| **Complete** | ☐ |
| **Notes** | ⚠️ Model release required. If commissioned with team portraits, this can be captured in the same session. |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-027 |
| **Subject** | Safari photographer with long telephoto lens on vehicle beanbag — golden hour |
| **Production Filename** | `img-027-safari-photographer-golden-hour.jpg` |
| **Priority** | P0 |
| **Reuse Count** | 2 slots |
| **Primary Slot** | Homepage Experience card — Photography Expeditions (`ExperienceCard.tsx`) |
| **All Slots** | HP Experience card Photography Expeditions [P] lazy · Gallery hero [W] `priority` (if IMG-025 does not include camera) |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 3000 × 2000px |
| **Model Release Required** | ⚠️ Recommended (if face visible) |
| **Model Release Status** | Unconfirmed — profile or back-of-head preferred |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [P] experience card · ☐ [W] gallery hero (if serving that slot) |
| **Integrated Into Project** | ☐ HP Photography Expeditions card · ☐ Gallery hero (conditional — see IMG-025 note) |
| **Complete** | ☐ |
| **Notes** | ⚠️ Verify no prominent branded camera equipment (Canon / Nikon logos). Gallery hero decision point: record here whether IMG-025 or IMG-027 serves that slot. |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-028 |
| **Subject** | Parent and child looking out from safari vehicle — back-of-head / silhouette preferred |
| **Production Filename** | `img-028-family-safari-vehicle.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | Homepage Experience card — Family Adventures (`ExperienceCard.tsx`) |
| **All Slots** | HP Experience card Family Adventures [P] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 1500 × 2000px |
| **Model Release Required** | ⚠️ Yes if faces visible — strongly prefer back-of-head / silhouette composition to avoid |
| **Model Release Status** | Unconfirmed |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [P] experience card |
| **Integrated Into Project** | ☐ HP Family Adventures card |
| **Complete** | ☐ |
| **Notes** | ⚠️ Back-of-head or silhouette composition eliminates model release requirement entirely. Prioritise these compositions. |

---

### CAMP & LODGE INTERIORS

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-029 |
| **Subject** | Luxury safari tent interior — four-poster bed, mosquito net, open sides, warm light |
| **Production Filename** | `img-029-luxury-tent-interior.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 2 slots |
| **Primary Slot** | Homepage Experience card — Luxury Safaris (`ExperienceCard.tsx`) |
| **All Slots** | HP Experience card Luxury Safaris [P] lazy · PK Accommodation Standard Classic Luxury [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Model Release Required** | No (verify no competitor camp branding) |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [P] experience card (left portion of landscape) · ☐ [L] accommodation card |
| **Integrated Into Project** | ☐ HP Luxury Safaris card · ☐ PK Classic Luxury accommodation |
| **Complete** | ☐ |
| **Notes** | Verify no identifiable lodge brand signage, branded linens, or competitor logos. |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-030 |
| **Subject** | Private camp outdoor deck or plunge pool — wilderness view, total privacy |
| **Production Filename** | `img-030-private-camp-deck-view.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 2 slots |
| **Primary Slot** | Homepage Experience card — Honeymoon Escapes (`ExperienceCard.tsx`) |
| **All Slots** | HP Experience card Honeymoon Escapes [P] lazy · PK Accommodation Standard Private & Exclusive [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Model Release Required** | No (verify no competitor branding) |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [P] experience card · ☐ [L] accommodation card |
| **Integrated Into Project** | ☐ HP Honeymoon Escapes card · ☐ PK Private & Exclusive accommodation |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-031 |
| **Subject** | Mobile expedition camp — lightweight canvas, open Serengeti or Mara plains visible |
| **Production Filename** | `img-031-mobile-expedition-camp.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 2 slots |
| **Primary Slot** | Packages Accommodation Standard — Mobile & Expedition (`AccommodationStandards.tsx`) |
| **All Slots** | PK Accommodation Standard Mobile & Expedition [L] lazy · DS Lodge card Mara Intimate Camp [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Note on sourcing** | Subject is underrepresented in stock libraries — allow extra time. See `IMAGE_SOURCING_GUIDE.md` Section 3.3. |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] accommodation card · ☐ [L] lodge card |
| **Integrated Into Project** | ☐ PK Mobile & Expedition accommodation · ☐ DS Mara Intimate Camp lodge |
| **Complete** | ☐ |
| **Notes** | ⚠️ Difficult sourcing subject. If no suitable mobile camp image is found, a simple canvas tent at the edge of an open plain (even a permanent camp exterior) is an acceptable substitute if the background is sufficiently wild. |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-032 |
| **Subject** | Mokoro (dugout canoe) on Okavango Delta waterways — papyrus reeds, poler standing |
| **Production Filename** | `img-032-mokoro-okavango-waterway.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | Destinations Lodge card — Okavango Island Camp (`LodgeCard.tsx`) |
| **All Slots** | DS Lodge card Okavango Island Camp [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Model Release Required** | No (poler shown from behind preferred) |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] lodge card |
| **Integrated Into Project** | ☐ DS Okavango Island Camp lodge |
| **Complete** | ☐ |
| **Notes** | |

---

### SPECIALIST / EDITORIAL

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-033 |
| **Subject** | Walking safari — guide leading guests through the African bush |
| **Production Filename** | `img-033-walking-safari-guide.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | Destinations Signature Experience — Guided Walking Safari (`SignatureExperienceCard.tsx`) |
| **All Slots** | DS Signature Experience Guided Walking Safari [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Model Release Required** | ⚠️ Recommended for any identifiable guides or guests |
| **Model Release Status** | Unconfirmed — profile / behind shots preferred |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] experience card |
| **Integrated Into Project** | ☐ DS Guided Walking Safari experience |
| **Complete** | ☐ |
| **Notes** | |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-034 |
| **Subject** | Light aircraft (Cessna Caravan type) on a grass bush airstrip — wilderness to the horizon |
| **Production Filename** | `img-034-bush-plane-airstrip.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | Destinations Signature Experience — Fly-in Safari Circuit (`SignatureExperienceCard.tsx`) |
| **All Slots** | DS Signature Experience Fly-in Safari Circuit [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Model Release Required** | No (verify no airline branding / registration complications) |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] experience card |
| **Integrated Into Project** | ☐ DS Fly-in Safari Circuit experience |
| **Complete** | ☐ |
| **Notes** | ⚠️ Difficult sourcing subject. If airstrip shot unavailable, aerial view from inside a light aircraft (wing and window visible) is an acceptable substitute and may be more distinctive. |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-035 |
| **Subject** | Game drive point-of-view at dawn — vehicle bonnet / dashboard rail in foreground, open plains ahead |
| **Production Filename** | `img-035-game-drive-pov-dawn.jpg` |
| **Priority** | P0 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | Packages page hero (`PackagesHero.tsx`) — LCP |
| **All Slots** | PK hero [W] `priority` |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 3000 × 1688px |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [W] hero full-bleed |
| **Integrated Into Project** | ☐ Packages hero |
| **Complete** | ☐ |
| **Notes** | ⚠️ POV compositions are underrepresented in stock. See `IMAGE_SOURCING_GUIDE.md` Section 3.3 for fallback options. |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-036 |
| **Subject** | Safari planning desk — handwritten map, binoculars, compass, coffee, bush context |
| **Production Filename** | `img-036-safari-planning-desk.jpg` |
| **Priority** | P0 |
| **Reuse Count** | 2 slots (two separate LCP images on different pages) |
| **Primary Slot** | Contact page hero (`ContactHero.tsx`) — LCP |
| **All Slots** | Contact hero [W] `priority` · Blog hero [W] `priority` |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [W] contact hero · ☐ [W] blog hero |
| **Integrated Into Project** | ☐ Contact hero · ☐ Blog hero |
| **Complete** | ☐ |
| **Notes** | Both slots are LCP images on different pages — both require `priority` prop. Same file, two integration points. |

---

### TEAM PORTRAITS

> ⚠️ **Commission strongly recommended for all four images.** If stock photography is used, run a reverse image search (Google Images / TinEye) before finalising to confirm the image has not been used in another professional or brand context. Model release is **mandatory** for all team portraits.

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-037 |
| **Subject** | Team portrait: Amara Nkosi — Kenyan woman, mid-30s to 40s, field or safari context |
| **Production Filename** | `img-037-team-amara-nkosi.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | About page team card — Amara Nkosi (`TeamCard.tsx`) |
| **All Slots** | About team card Amara Nkosi [P] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 900 × 1200px |
| **Model Release Required** | ✅ Yes — mandatory |
| **Model Release Status** | Not obtained |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [P] team card |
| **Integrated Into Project** | ☐ About team card Amara Nkosi |
| **Complete** | ☐ |
| **Notes** | ⚠️ Commission recommended. If stock used: run reverse image search before use. Bio context: born in Naivasha, Kenya. |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-038 |
| **Subject** | Team portrait: David Mwangi — Kenyan man, 40s–50s, conservation / ranger context |
| **Production Filename** | `img-038-team-david-mwangi.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | About page team card — David Mwangi (`TeamCard.tsx`) |
| **All Slots** | About team card David Mwangi [P] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 900 × 1200px |
| **Model Release Required** | ✅ Yes — mandatory |
| **Model Release Status** | Not obtained |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [P] team card |
| **Integrated Into Project** | ☐ About team card David Mwangi |
| **Complete** | ☐ |
| **Notes** | ⚠️ Commission recommended. If stock used: run reverse image search before use. |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-039 |
| **Subject** | Team portrait: Fatima Al-Rashid — Tanzanian woman, 30s, safari consultant context |
| **Production Filename** | `img-039-team-fatima-alrashid.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | About page team card — Fatima Al-Rashid (`TeamCard.tsx`) |
| **All Slots** | About team card Fatima Al-Rashid [P] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 900 × 1200px |
| **Model Release Required** | ✅ Yes — mandatory |
| **Model Release Status** | Not obtained |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [P] team card |
| **Integrated Into Project** | ☐ About team card Fatima Al-Rashid |
| **Complete** | ☐ |
| **Notes** | ⚠️ Commission recommended. If stock used: run reverse image search before use. |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-040 |
| **Subject** | Team portrait: Sipho Dlamini — Botswanan man, 30s–40s, tracker/wilderness specialist |
| **Production Filename** | `img-040-team-sipho-dlamini.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | About page team card — Sipho Dlamini (`TeamCard.tsx`) |
| **All Slots** | About team card Sipho Dlamini [P] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 900 × 1200px |
| **Model Release Required** | ✅ Yes — mandatory |
| **Model Release Status** | Not obtained |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [P] team card |
| **Integrated Into Project** | ☐ About team card Sipho Dlamini |
| **Complete** | ☐ |
| **Notes** | ⚠️ Commission recommended. If stock used: run reverse image search before use. |

---

### GALLERY-ONLY (no cross-page reuse)

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-041 |
| **Subject** | Maasai Mara at dawn — wide composition specifically for gallery 2×1 span |
| **Production Filename** | `img-041-gallery-mara-dawn-wide.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | Gallery fg-01 wide span (`GalleryTile.tsx`) |
| **All Slots** | Gallery fg-01 [W] wide span lazy |
| **Merge Candidate** | ⚠️ May be absorbed by IMG-001 if sourced at 5000px+ and composition works at wide gallery span without feeling repetitive alongside the homepage hero. Evaluate after IMG-001 is sourced. |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 900px (2:1 wide span minimum) |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [W] gallery wide span |
| **Integrated Into Project** | ☐ Gallery fg-01 |
| **Complete** | ☐ |
| **Notes** | Evaluate after IMG-001 sourcing. If merged: strike through this row and note "Absorbed by IMG-001" here. |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-042 |
| **Subject** | Serengeti sunset — gallery-dedicated image, distinct from IMG-012 if variety is prioritised |
| **Production Filename** | `img-042-gallery-serengeti-sunset.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | Gallery fg-03 normal span (`GalleryTile.tsx`) |
| **All Slots** | Gallery fg-03 [L] lazy |
| **Merge Candidate** | ⚠️ May be absorbed by IMG-012 (acacia sunset silhouette). Blog and Gallery are separate pages; if IMG-012 works at 16:9 gallery span, this image is unnecessary. Evaluate after IMG-012 is sourced. |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] gallery normal span |
| **Integrated Into Project** | ☐ Gallery fg-03 |
| **Complete** | ☐ |
| **Notes** | Evaluate after IMG-012 sourcing. If merged: strike through this row and note "Absorbed by IMG-012" here. |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-043 |
| **Subject** | Samburu National Reserve landscape — doum palms, dry riverbed, distinctive northern Kenya character |
| **Production Filename** | `img-043-gallery-samburu-landscape.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | Gallery grid (flexible placement) (`GalleryTile.tsx`) |
| **All Slots** | Gallery grid flexible [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] gallery |
| **Integrated Into Project** | ☐ Gallery grid |
| **Complete** | ☐ |
| **Notes** | Adds geographic range (Northern Kenya) to the gallery. |

---

| Field | Value |
|-------|-------|
| **Asset ID** | IMG-044 |
| **Subject** | Zanzibar Stone Town — carved Swahili doorway or coastal character, cultural range for gallery |
| **Production Filename** | `img-044-gallery-zanzibar-coast.jpg` |
| **Priority** | P2 |
| **Reuse Count** | 1 slot |
| **Primary Slot** | Gallery grid (flexible placement) (`GalleryTile.tsx`) |
| **All Slots** | Gallery grid flexible [L] lazy |
| **Merge Candidate** | None |
| **Status** | Not Started |
| **Source Platform** | |
| **Photographer** | |
| **Original URL** | |
| **Licence** | |
| **Attribution Required** | |
| **Original Resolution** | |
| **Min Required Resolution** | 2400 × 1350px |
| **Model Release Required** | No |
| **Model Release Status** | N/A |
| **Downloaded** | ☐ |
| **Optimised (WebP)** | ☐ |
| **AVIF Generated** | ☐ |
| **Cropped Variants Created** | ☐ [L] gallery |
| **Integrated Into Project** | ☐ Gallery grid |
| **Complete** | ☐ |
| **Notes** | Adds coastal / Swahili cultural range to the gallery. |

---

## Open Graph Status

OG images require a design step (brand overlay) in addition to photography. The base photographs are all accounted for in the registry above. Track design completion here.

| OG Image | Path | Base Photo | Design Complete | Integrated | Notes |
|----------|------|------------|-----------------|------------|-------|
| Default (site-wide) | `public/og/default.jpg` | IMG-001 | ☐ | ☐ | Dark overlay + wordmark + tagline centred |
| Homepage | `public/og/homepage.jpg` | IMG-001 | ☐ | ☐ | As default, or homepage-specific variant |
| About | `public/og/about.jpg` | IMG-001 (default) | ☐ | ☐ | Default OG acceptable for launch |
| Destinations | `public/og/destinations.jpg` | IMG-001 (default) | ☐ | ☐ | Default OG acceptable for launch |
| Packages | `public/og/packages.jpg` | IMG-003 | ☐ | ☐ | Balloon image — strongest social hook for packages |
| Gallery | `public/og/gallery.jpg` | IMG-015 | ☐ | ☐ | Gorilla silverback — highest social engagement potential |
| Blog | `public/og/blog.jpg` | IMG-001 (default) | ☐ | ☐ | Default OG acceptable for launch |
| Contact | `public/og/contact.jpg` | IMG-001 (default) | ☐ | ☐ | Default OG acceptable for launch |

**Minimum for launch:** `public/og/default.jpg` only. Page-specific OG images improve social sharing CTR but are not blocking.

---

## Pre-Launch Checklist

These items are tracked in `IMAGE_ASSET_PLAN.md` Section 3.3 and must be completed before production deployment:

| Item | Status | Notes |
|------|--------|-------|
| Remove `public/file.svg` | ☐ | Next.js scaffold — not referenced by any component |
| Remove `public/globe.svg` | ☐ | Next.js scaffold |
| Remove `public/next.svg` | ☐ | Next.js scaffold |
| Remove `public/vercel.svg` | ☐ | Next.js scaffold |
| Remove `public/window.svg` | ☐ | Next.js scaffold |
| Replace `public/favicon.ico` | ☐ | Scaffold default — requires final logo SVG |
| Add `/icon.svg` | ☐ | Referenced in metadata; depends on final logo |
| Add `/apple-touch-icon.png` | ☐ | Referenced in metadata |
| Add `/favicon-16x16.png` | ☐ | Referenced in metadata |
| `DestinationData` interface — add `imageSrc: string` | ☐ | `src/lib/constants/homepage.ts` |
| `FEATURED_DESTINATIONS` — populate `imageSrc` for all 4 entries | ☐ | `src/lib/constants/homepage.ts` |
| `GalleryItem` interface — add `imageSrc: string` | ☐ | `src/lib/constants/homepage.ts` |
| `GALLERY_ITEMS` — populate `imageSrc` for all 6 preview items | ☐ | `src/lib/constants/homepage.ts` |
| `buildPageMetadata()` calls — add `image` for Packages and Gallery OG | ☐ | After OG images are designed |
| `public/og/default.jpg` — design and place | ☐ | Blocking for social sharing on all pages |
| Lighthouse audit — all pages ≥ 90 Performance | ☐ | Post-integration |
| Lighthouse audit — all pages ≥ 90 Accessibility | ☐ | Post-integration |
| Lighthouse audit — all pages ≥ 90 Best Practices | ☐ | Post-integration |
| Lighthouse audit — all pages ≥ 90 SEO | ☐ | Post-integration |

---

## Progress Summary

*Update this section as sourcing and integration progresses.*

| Category | Total Images | Downloaded | Integrated | Complete |
|----------|-------------|------------|------------|---------|
| P0 — LCP Images | 7 | 0 | 0 | 0 |
| P1 — High Priority | 10 | 0 | 0 | 0 |
| P2 — Standard | 25 | 0 | 0 | 0 |
| P3 — OG (design work) | 8 | 0 | 0 | 0 |
| **Total** | **44 (+8 OG)** | **0** | **0** | **0** |

---

*End of IMAGE_ASSET_TRACKER.md*

*Document produced by: Technical Architect review — Phase 2B*
*Project: Rêve Africa Safaris — Release Candidate (RC)*
*Repository: https://github.com/chebitoch007/reve-africa-safaris*
