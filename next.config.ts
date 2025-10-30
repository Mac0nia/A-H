import type { NextConfig } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ahelectrical.co.uk';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Remove X-Powered-By header
  generateEtags: true, // Enable ETags for better caching
  compress: true, // Enable gzip compression
  productionBrowserSourceMaps: false, // Disable source maps in production for better performance
  optimizeFonts: true, // Optimize font loading
  images: {
    domains: [
      'lh3.googleusercontent.com', 
      'maps.googleapis.com',
      'ahelectrical.co.uk',
      'www.ahelectrical.co.uk'
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  async headers() {
    const securityHeaders = [
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
      },
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin',
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()',
      },
      {
        key: 'Content-Security-Policy',
        value: `
          default-src 'self';
          script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com;
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
          img-src 'self' data: https:;
          font-src 'self' https://fonts.gstatic.com;
          connect-src 'self' https://www.google-analytics.com https://maps.googleapis.com;
          frame-src https://www.google.com https://www.youtube.com;
        `.replace(/\s+/g, ' ').trim(),
      },
    ];

    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      // Cache static assets
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
  // Enable React 18 concurrent features
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
    optimizePackageImports: ['next-seo', 'react-icons'],
  },
  // Add webpack optimizations
  webpack: (config, { isServer }) => {
    // Optimize moment.js locales
    config.plugins.push(
      new (require('webpack').ContextReplacementPlugin)(
        /moment[/\\]locale$/,
        /en-gb/
      )
    );

    // Optimize lodash imports
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'lodash-es': 'lodash',
      };
    }

    return config;
  },
  // Add environment variables
  env: {
    SITE_URL,
    NEXT_PUBLIC_SITE_URL: SITE_URL,
  },
};

export default nextConfig;
