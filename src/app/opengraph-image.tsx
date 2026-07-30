/**
 * RÊVE AFRICA SAFARIS — Open Graph Image
 *
 * Auto-generated at /og/default.jpg (served via Next.js ImageResponse).
 * Dimensions: 1200 × 630px — standard OG image size.
 *
 * Design: Dark basalt background, gold accent line, Cormorant-style serif
 * headline (uses system serif fallback — ImageResponse does not load custom
 * fonts unless explicitly configured), brand tagline, and a subtle gold
 * gradient wash across the lower third.
 *
 * This file serves as the site-wide fallback OG image. Individual pages
 * can define their own opengraph-image.tsx in their route folder to
 * override it.
 */

import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt   = 'Rêve Africa Safaris — Extraordinary Safari Journeys Across Africa';
export const size  = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           '100%',
          height:          '100%',
          display:         'flex',
          flexDirection:   'column',
          justifyContent:  'flex-end',
          background:      '#0C0D0B',
          position:        'relative',
          fontFamily:      'Georgia, "Times New Roman", serif',
        }}
      >
        {/* Gold gradient wash — lower third */}
        <div
          style={{
            position:   'absolute',
            bottom:     0,
            left:       0,
            right:      0,
            height:     '55%',
            background: 'linear-gradient(to top, rgba(212,160,23,0.14) 0%, transparent 100%)',
          }}
        />

        {/* Horizontal gold rule */}
        <div
          style={{
            position:   'absolute',
            top:        '50%',
            left:       72,
            right:      72,
            height:     1,
            background: 'rgba(212,160,23,0.25)',
          }}
        />

        {/* Content block */}
        <div
          style={{
            display:       'flex',
            flexDirection: 'column',
            padding:       '0 72px 72px',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display:       'flex',
              alignItems:    'center',
              gap:           16,
              marginBottom:  28,
            }}
          >
            {/* Short gold rule */}
            <div style={{ width: 40, height: 1, background: '#D4A017' }} />
            <span
              style={{
                fontFamily:    '"Arial", sans-serif',
                fontSize:      13,
                fontWeight:    500,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color:         '#F2D07A',
              }}
            >
              East Africa &amp; Beyond
            </span>
          </div>

          {/* Main headline */}
          <div
            style={{
              fontFamily:    'Georgia, "Times New Roman", serif',
              fontSize:      80,
              fontWeight:    300,
              fontStyle:     'italic',
              color:         '#FAF9F5',
              lineHeight:    1.05,
              letterSpacing: '-0.02em',
              marginBottom:  24,
            }}
          >
            Rêve Africa Safaris
          </div>

          {/* Tagline */}
          <div
            style={{
              fontFamily: '"Arial", sans-serif',
              fontSize:   20,
              fontWeight: 300,
              color:      '#CAC2A8',
              lineHeight: 1.5,
              maxWidth:   640,
            }}
          >
            Bespoke luxury safari journeys crafted for those who seek the extraordinary.
          </div>
        </div>

        {/* Top-right: domain */}
        <div
          style={{
            position:      'absolute',
            top:           52,
            right:         72,
            fontFamily:    '"Arial", sans-serif',
            fontSize:      14,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color:         '#6E6860',
          }}
        >
          reveafricasafaris.com
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
