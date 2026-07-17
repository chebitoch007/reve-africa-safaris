import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Security headers — applied to all routes.
   *
   * These improve security posture and are required by many enterprise
   * clients and travel booking aggregators that audit partner sites.
   *
   * Note: Content-Security-Policy (CSP) is intentionally omitted here;
   * a proper CSP requires an audit of all third-party scripts and should
   * be implemented when the CMS, booking system, and analytics are known.
   */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent MIME-type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Prevent clickjacking
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Enforce HTTPS for 1 year, include subdomains
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          // Control referrer information
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Restrict browser features
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
