# Owner-fill checklist

Rêve Africa Safaris is a new company. Some details do not exist yet, so the site
is built to show them **only once they hold a real value**. Each one lives in a
single place as a string. While it is empty (`""`), nothing renders anywhere: no
empty icon, no empty heading, and no `tel:`, `wa.me` or `mailto:` link with
nothing behind it.

To switch a detail on, paste the real value into the file and line below, then
rebuild the site. Fill in only real, confirmed values.

## Fields to fill

| Field | File:line | What to paste | Where it then appears |
|---|---|---|---|
| `CONTACT_PHONE` | `src/lib/constants/contact.ts:62` | Your real phone number in international format, as you want it displayed | Contact page "Telephone" card; "Call Us Now" button on the contact page; footer phone link; JSON-LD `contactPoint.telephone` |
| `CONTACT_WHATSAPP` | `src/lib/constants/contact.ts:65` | Your real WhatsApp number in international format | Contact page "WhatsApp" card (the `wa.me` link is built from the digits) |
| `CONTACT_HOURS` | `src/lib/constants/contact.ts:68` | Your real opening hours, as text | Contact page "Office Hours" card |
| Instagram | `src/lib/constants/navigation.ts:93` (`SOCIAL_LINKS`, `href`) | Full profile URL | Footer Instagram icon; JSON-LD `sameAs` |
| Facebook | `src/lib/constants/navigation.ts:95` (`SOCIAL_LINKS`, `href`) | Full page URL | Footer Facebook icon; JSON-LD `sameAs` |
| YouTube | `src/lib/constants/navigation.ts:97` (`SOCIAL_LINKS`, `href`) | Full channel URL | Footer YouTube icon; JSON-LD `sameAs` |
| `twitterHandle` | `src/lib/metadata.ts:24` | Your real handle including the `@` | `twitter:site` and `twitter:creator` meta tags on every page |
| `NEWSLETTER_ENABLED` | `src/lib/constants/blog.ts:111` | Change `false` to `true` only once a newsletter provider is connected and the form really collects sign-ups | The newsletter section on `/blog`. The form itself still collects nothing until a provider is wired in (see the TODO in `src/components/blog/NewsletterSection.tsx`) |

Each footer social icon appears only if its own URL is set. The whole social
block, including its divider, appears only if at least one URL is set.
`sameAs` in the JSON-LD is built from the URLs that are set and is left out
entirely when none are.

## Email (already set)

`CONTACT_EMAIL` at `src/lib/constants/contact.ts:59` is `enquiries@reveafricasafaris.com`. It is the
single source of truth for the contact page, the footer, the JSON-LD and the
enquiry form's fallback message. No other email address is used in `src/`.

## Statements to confirm

These are statements the Owner must confirm are true before launch. Each is
marked `[OWNER-CONFIRM]` in the code.

| File:line | Statement |
|---|---|
| `src/lib/constants/contact.ts:41` | 24-hour response promise |
| `src/lib/constants/contact.ts:190` | never shared with third parties claim |
| `src/lib/constants/contact.ts:192` | 24-hour response promise |
| `src/lib/constants/contact.ts:210` | 24-hour response promise |
| `src/lib/constants/homepage.ts:493` | 24-hour response promise |
| `src/lib/constants/destinations.ts:444` | 24-hour response promise |
| `src/lib/constants/packages.ts:426` | 24-hour response promise |

If the response-time promise is not what you will actually deliver, change the
wording at every line listed above, not just one.
