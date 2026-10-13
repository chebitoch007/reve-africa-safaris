# Truth audit (13 Oct 2026)

Rêve Africa Safaris is a new company run by two people, Eliphaz Chebitoch and Purity Langat. No trips have been operated yet. This audit records every claim removed or reworded on branch `fix/truth-pass` so the site makes no statement about history, staff, credentials, results or operations that is not true for that company.

Line numbers refer to the base commit `673a013` where known; otherwise the constant or section name is given. "Listed" means the replacement text was given verbatim by the Architect; "Builder" means the replacement was written by the Builder and needs review.

## Claims removed or reworded

| File | Location | Old claim (summary) | Replacement | Source |
|---|---|---|---|---|
| components/packages/PackagesHero.tsx | l.157-167 | "Est. 2009" badge | Removed | Listed |
| components/about/AboutHero.tsx | l.164 | "Est. 2009" badge | Removed (divider kept) | Listed |
| lib/constants/homepage.ts | INTRO_CONTENT l.28 | Founded on a single conviction; extraordinary attention to detail | New, founder-led company paragraph | Listed |
| lib/constants/homepage.ts | INTRO_CONTENT.stats l.32-35 | 15+ years, 4.9 guest satisfaction, 100% bespoke | Removed (stats row deleted from Introduction) | Listed |
| lib/constants/homepage.ts | PACKAGES_SECTION l.323 | "built from years of experience" | "a framework that we then tailor entirely to you" | Builder |
| lib/constants/homepage.ts | TRUST_PILLARS (experience) | "over fifteen years operating across East Africa" | Item removed | Listed |
| lib/constants/homepage.ts | STATISTICS l.393-406 | 15+ years, 28+ destinations, 3,200+ journeys, 96+ lodges | Block and StatisticsSection deleted | Listed |
| lib/constants/homepage.ts | TESTIMONIALS | Three invented guest testimonials | Block and TestimonialsSection deleted | Listed |
| lib/constants/homepage.ts | TRUST_PILLARS | Guides "among the finest", 24/7 support, handpicked/exacting standards, sustainable tourism commitments | Three true items (designed around you; direct access to the founders; careful partner selection) | Listed |
| lib/constants/homepage.ts | WHY_US_SECTION.body | "We are safari specialists" | "We are not a booking platform." | Builder |
| lib/constants/homepage.ts | FAQ faq-3/4/5/6 | "deep knowledge of each destination"; "work exclusively with handpicked lodges... portfolio"; "reputable lodges and guide operations... 24/7 support"; "experienced family guides... partner properties offer family programmes" | Claims removed; faq-4 uses the selection criteria wording | Builder |
| lib/constants/homepage.ts | l.148, l.157, FAQ_SECTION, FINAL_CTA | "Specialist photography safaris with expert guidance"; "specialist guides"; "Our team"; "A dedicated safari specialist will be in touch within 24 hours" | Neutral wording; "One of us will be in touch within 24 hours" | Builder |
| lib/constants/homepage.ts | FEATURED_PACKAGES | "From USD ..." prices; badges "Most Popular", "Best Seller" | "Price on request"; badges removed | Listed |
| lib/constants/packages.ts | PACKAGES_HERO.subheadline l.22 | "walked, driven, and lived... years of guiding guests" | "Sample itineraries across East and Southern Africa, each one tailored around you." | Builder |
| lib/constants/packages.ts | JOURNEY_INTRO l.37-39 | 15+ years, 800+ journeys designed, countries "we know deeply" | Stats removed (and from JourneyIntro) | Listed |
| lib/constants/packages.ts | ALL_PACKAGES startingFrom, badges | "From USD 6,500..13,500"; "Most Popular", "Exclusive" | "Price on request"; badges removed | Listed |
| lib/constants/packages.ts | ALL_PACKAGES_SECTION | "proven journey, tested, refined, and loved" | Sample-journey wording | Builder |
| lib/constants/packages.ts | JOURNEY_CATEGORIES, signature, bespoke | "specialist guide included"; "specialist photographic guides"; designed journeys for families of twenty, researchers, etc.; "Within 48 hours, a dedicated specialist"; "two to three rounds"; "private aircraft" | Reworded or removed | Builder |
| lib/constants/packages.ts | INCLUSIONS l.283 | "Every property is personally vetted by our team"; "Expert Guiding... specialist naturalists" | Selection criteria wording; "Guiding: a safari guide throughout" | Listed / Builder |
| lib/constants/packages.ts | INCLUSIONS_SECTION l.333 | "genuinely all-inclusive" | Heading "What a journey like this typically includes"; "Your written quote confirms exact inclusions." | Listed |
| lib/constants/packages.ts | PACKAGES_FAQ pfaq-2 | Prices include everything within Africa | Per-person double-occupancy answer | Listed [OWNER-CONFIRM] |
| lib/constants/packages.ts | PACKAGES_FAQ pfaq-3/4/5, section | "Our specialists"; "We regularly design journeys"; "Most properties we work with accommodate children from five" | Reworded; property claim removed | Builder |
| lib/constants/packages.ts | PACKAGES_CTA.detail | "A specialist responds within 24 hours" | "One of us responds within 24 hours" | Builder [OWNER-CONFIRM] |
| lib/constants/packages.ts | ACCOMMODATION_SECTION l.486, ACCOMMODATION_STANDARDS | "personally assessed by our team"; "gold standard"; "all exceptional"; named camps (Angama Mara, Singita Grumeti, Mombo, Mahali Mzuri, etc.) | Selection criteria wording; example camp names removed (field now optional) | Listed / Builder |
| app/packages/page.tsx | metadata | "Curated Luxury Journeys"; "six curated safari journeys" | "Sample Safari Journeys..." | Builder |
| lib/constants/about.ts | ABOUT_HERO.subheadline | "We are guides, conservationists, and storytellers" | "A new, founder-led safari company, built with care." | Builder |
| lib/constants/about.ts | OUR_STORY l.24-36 | "Fifteen years", founded 2009 by Amara Nkosi and David Mwangi, a decade leading expeditions, "operate across six countries", hand-selected guides | New headline and founding/today chapters; philosophy reduced to the meaning of the name | Listed [OWNER-CONFIRM] |
| lib/constants/about.ts | OUR_STORY.pullQuote | Quote credited to "Amara Nkosi, Co-Founder" | Removed, with its rendering in OurStory.tsx | Listed |
| lib/constants/about.ts | OUR_APPROACH | "convictions that have guided us since we began"; limit journeys each year; "Every dollar... contributes directly" | Reworded to intentions | Builder |
| lib/constants/about.ts | TEAM_MEMBERS | Four invented staff, credentials (KPSGA Fellow, ex-KWS ranger, Master Tracker, 800 expeditions), portraits | Eliphaz Chebitoch and Purity Langat only | Listed [OWNER-CONFIRM] |
| components/about/MeetTheTeam.tsx | heading/body | "Guides who live what they lead"; "Our team is small by design. Every guide..." | "Two founders, one company"; "We are a team of two..." | Builder |
| lib/constants/about.ts | CONSERVATION | 15% of fees, 120% carbon offset (Gold Standard), Rêve Conservation Fund since 2014, 11yr | Section and ConservationCommitment component deleted | Listed |
| app/about/page.tsx | metadata | "Founded in 2009 by two East African guides" | "Meet the two founders of Rêve Africa Safaris, a new, founder-led safari company." | Listed |
| lib/constants/destinations.ts | l.27, l.142 | "We operate across six...", "Each destination we operate in" | "We are building journeys across six...", "...we are building journeys for" | Listed |
| lib/constants/destinations.ts | FEATURED_LODGES | Four invented lodges (Mara Intimate Camp, Serengeti Migration Retreat, Bwindi Forest Lodge, Okavango Island Camp) | Section, data and LodgeCard deleted | Listed |
| lib/constants/destinations.ts | l.365, l.430-431, l.444 | "Our specialists"; "Contact a Specialist"; "A dedicated specialist will respond within 24 hours" | "We"; "Get in Touch"; "One of us will respond within 24 hours" | Builder [OWNER-CONFIRM] |
| lib/constants/gallery.ts | GALLERY_INTRO l.42 | "captured by our guides... real expeditions... not stock" | Illustrative-imagery paragraph (Unsplash/Pexels/AI) | Listed |
| lib/constants/gallery.ts | GALLERY_INTRO l.43, hero | "Our guides know when to hold still"; "Photography from the field"; "Africa through our lens"; "Life in the Field" | Removed or neutral wording ("A first look at Africa") | Builder |
| lib/constants/gallery.ts | LENS_VIGNETTES l.302-323 | Quotes from "James Mwangi, Head Guide" and "Amina Ochieng, Senior Guide" | Section and BehindTheLens component deleted | Listed |
| lib/constants/gallery.ts | CONSERVATION_NOTE | "Every photograph taken in our company follows a strict code of conduct" | Section and ConservationNote deleted | Listed |
| lib/constants/gallery.ts | GALLERY_CATEGORY_ITEMS count | 47/38/24/19/15/22 "photographs" per category | Counts removed from data and card | Builder |
| lib/constants/gallery.ts | gfaq-1/2/3/4/5 | Fine-art prints via a Nairobi printing studio; specialist photography guide; "equipment guidance to all guests"; images "property of Rêve... and our guide-photographers"; every image captioned | Prints FAQ removed; guide and guidance claims removed; property FAQ uses the Listed wording; caption FAQ reworded | Listed / Builder |
| app/gallery/page.tsx | metadata | "our field photography collection... captured by our guides" | Illustrative-imagery description | Builder |
| lib/constants/blog.ts | FEATURED_STORY, LATEST_STORIES | Seven articles dated Apr-Jul 2025 with first-hand claims ("three weeks in the field") | Sections, data and article components deleted | Builder |
| lib/constants/blog.ts | BLOG_CATEGORY_ITEMS | Article counts (24, 18, 31, 16, 22, 14) | Counts removed | Builder |
| lib/constants/blog.ts | PHILOSOPHY_PILLARS | "Written from the field... our guides, specialists"; editorial independence | Section deleted; hero uses "Notes and ideas from the two of us as we build Rêve Africa Safaris." | Listed |
| lib/constants/blog.ts | BLOG_FAQ bfaq-1..5 | Guides write the articles; 2-4 posts a month; guest and scientist contributions; "drawn from real experience" | bfaq-1 and bfaq-3 reworded; bfaq-2, 4, 5 removed | Builder |
| app/blog/page.tsx | metadata | "written by the guides and specialists" | Listed founders sentence | Listed |
| lib/constants/contact.ts | CONCIERGE_INTRO l.34-43 | "speak directly with a specialist... core team who has travelled to the destinations"; "twenty minutes"; "Dedicated specialist assigned" | "one of the two founders"; reduced body; "Your enquiry is handled by one of us" | Listed |
| lib/constants/contact.ts | l.162, l.215, l.227 and the trade FAQ | "call us directly"; "telephone line is staffed 08:00-18:00"; group planning support, private aircraft; trade FAQ ("on a trade basis") | Sentences removed; trade FAQ removed | Listed / Builder |
| lib/constants/contact.ts | cfaq-5 | "multiple revisions with every client... no additional charge" | Plain iterative-planning statement | Builder |
| lib/constants/contact.ts | OFFICE_LOCATION | Office in Karen Road, Nairobi, open by appointment, airport distances | Section and OfficeLocation component deleted | Builder |
| components/contact/ContactHero.tsx | l.57 | Image alt "Safari specialist at a desk" | "Maps and planning materials on a desk" | Builder |
| app/contact/page.tsx | metadata | "Speak directly with a specialist... Based in Nairobi, Kenya" | "Speak directly with one of the two founders..." | Builder |
| components/seo/JsonLd.tsx | Organization | Street address (Karen Road, Nairobi), telephone, knowsAbout list | Removed | Builder |
| lib/metadata.ts, app/page.tsx | SITE.description, home metadata | "crafts intimate, transformative expeditions... discerning traveller" | New, founder-led company description | Builder |

## [OWNER-CONFIRM] items

1. Founding chapter wording: "started in 2026 by siblings Eliphaz Chebitoch and Purity Langat" and the roles described.
2. Team names, roles and bios for both founders (Purity's bio is to be extended with real facts she supplies).
3. The response promise "within 24 hours on business days". It appears in `contact.ts` (commitment c1, success message, cfaq-1), `homepage.ts` (final CTA), `destinations.ts` (final CTA) and `packages.ts` (final CTA).
4. The per-person, double-occupancy FAQ answer.
5. The Nairobi location: the office section and JSON-LD address were removed because no office is confirmed.

## Not changed, needs a decision

- **Placeholder phone/WhatsApp** `+254 700 000 000`, "Mon-Fri 08:00-18:00" hours and the WhatsApp link remain on /contact and in the footer data.
- **Newsletter** (`NewsletterSection`) collects nothing but promises a dispatch "soon" and "never more than twice a month". The blog newsletter copy and "Read our privacy policy" (no such page exists) are unchanged.
- **Social profile URLs** in JSON-LD `sameAs` (Instagram, Facebook, YouTube) are unverified.
- **Zimbabwe** is still listed in JSON-LD `areaServed`, gallery copy and a retired bio; it has no destination page.
- `app/opengraph-image.tsx` still reads "Bespoke luxury safari journeys crafted for those who seek the extraordinary."
- Image provenance: see `ATTRIBUTION_LOG.md` and `IMAGE_INVENTORY.csv` (docs/image-provenance branch).

## Legitimate forbidden-term hits

The term "Amara" matches inside "Damaraland" (a region of Namibia) in `destinations.ts` (2), `homepage.ts` (2) and `packages.ts` (1). No other forbidden term remains in `src/` or in the built HTML.
