/** @type {import('next').NextConfig} */

// Corporate proxy compatibility: allow self-signed certs in dev so
// next/font/google can download and cache fonts. NEVER set in production.
if (process.env.NODE_ENV !== "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
