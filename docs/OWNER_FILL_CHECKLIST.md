# Owner-fill checklist

Rêve Africa Safaris is a new company. Some details do not exist yet, so the site
is built to show them **only once they hold a real value**. Each one lives in a
single place. While it is empty, nothing renders anywhere: no empty icon, no
empty heading, and no `tel:`, `wa.me` or `mailto:` link with nothing behind it.

To switch a detail on, paste the real value into the file and line below, then
rebuild the site. Fill in only real, confirmed values.

## Fields to fill

| Field | File:line | What to paste | Where it then appears |
|---|---|---|---|
| `CONTACT_PHONE` | `src/lib/constants/contact.ts:62` | Your real phone number in international format, as you want it displayed | Contact page "Telephone" card (with the line "Call us directly"); "Call Us Now" button on the contact page; footer phone link; JSON-LD `contactPoint.telephone` |
| `CONTACT_WHATSAPP` | `src/lib/constants/contact.ts:65` | Your real WhatsApp number in international format | Contact page "WhatsApp" card (the `wa.me` link is built from the digits) |
| `CONTACT_HOURS` | `src/lib/constants/contact.ts:68` | Your real opening hours, as text | Contact page "Office Hours" card |
| Instagram | `src/lib/constants/navigation.ts:93` (`SOCIAL_LINKS`, `href`) | Full profile URL | Footer Instagram icon; JSON-LD `sameAs` |
| Facebook | `src/lib/constants/navigation.ts:95` (`SOCIAL_LINKS`, `href`) | Full page URL | Footer Facebook icon; JSON-LD `sameAs` |
| YouTube | `src/lib/constants/navigation.ts:97` (`SOCIAL_LINKS`, `href`) | Full channel URL | Footer YouTube icon; JSON-LD `sameAs` |
| `twitterHandle` | `src/lib/metadata.ts:24` | Your real handle including the `@` | `twitter:site` and `twitter:creator` meta tags |
| `NEWSLETTER_ENABLED` | `src/lib/constants/blog.ts:111` | Change `false` to `true` only once a newsletter provider is connected and the form really collects sign-ups | The newsletter section on `/blog`. The form itself still collects nothing until a provider is wired in (see the TODO in `src/components/blog/NewsletterSection.tsx`) |
| `LEGAL_PAGES_REVIEWED` | `src/lib/constants/legal.ts:20` | Change `false` to `true` only after you or a lawyer have approved the text of all three legal pages | `/privacy`, `/terms` and `/cookies` become indexable and are listed in `sitemap.xml`. While `false` they carry `noindex,nofollow` and are not in the sitemap |
| Privacy: how long details are kept | `src/lib/constants/legal.ts:94` (`paragraphs`) | Your retention period, in your or your lawyer's words | A "How long we keep your details" section on `/privacy`. Hidden while empty |
| Privacy: your rights | `src/lib/constants/legal.ts:99` (`paragraphs`) | Approved user-rights wording | A "Your rights" section on `/privacy`. Hidden while empty |
| Terms and Conditions text | `src/lib/constants/legal.ts:119` (`sections`) | Approved sections as `{ heading, paragraphs: [...] }` | `/terms`. Until then the page says the terms are being finalised and shows the contact email |

Each footer social icon appears only if its own URL is set. The whole social
block, including its divider, appears only if at least one URL is set.
`sameAs` in the JSON-LD is built from the URLs that are set and is left out
entirely when none are. A legal-page section appears only if it has a heading
and at least one non-empty paragraph.

## Email (already set)

`CONTACT_EMAIL` at `src/lib/constants/contact.ts:59` is `enquiries@reveafricasafaris.com`. It is the
single source of truth for the contact page, the footer, the JSON-LD, the
enquiry form's fallback message and the legal pages. No other email address
is used in `src/`.

## Legal pages (live, but not yet indexed)

The footer links to `/privacy`, `/terms` and `/cookies`. The Privacy and Cookie
pages state only facts verified against the code: the exact enquiry form fields,
Formspree as the form provider, and that the site sets no cookies and loads no
analytics. They make no legal claims and cite no statutes. Review them, fill in
the empty sections above, then switch `LEGAL_PAGES_REVIEWED` on.

## Statements to confirm

These are statements the Owner must confirm are true before launch. Each is
marked `[OWNER-CONFIRM]` in the code.

| File:line | Statement |
|---|---|
| `src/lib/constants/contact.ts:41` | 24-hour response promise |
| `src/lib/constants/contact.ts:192` | enquiry form note: "sent through our form provider" (Formspree) and used only to reply |
| `src/lib/constants/contact.ts:194` | 24-hour response promise |
| `src/lib/constants/contact.ts:212` | 24-hour response promise |
| `src/lib/constants/homepage.ts:493` | 24-hour response promise |
| `src/lib/constants/destinations.ts:444` | 24-hour response promise |
| `src/lib/constants/packages.ts:426` | 24-hour response promise |
| `src/lib/constants/legal.ts:64` | the legal entity / data controller name and any registration (for example with the Kenya ODPC) are not stated on the Privacy page |
| `src/lib/constants/legal.ts:79` | what the Privacy page may say about how Formspree stores submissions and for how long |
| `src/lib/constants/legal.ts:88` | the "no analytics or marketing cookies" statement on the Privacy page; re-check after hosting, analytics, maps or a newsletter provider is added |
| `src/lib/constants/legal.ts:138` | the "does not set cookies" statement on the Cookie page; re-check when anything that sets cookies is added |

If the response-time promise is not what you will actually deliver, change the
wording at every line listed for it above, not just one.
