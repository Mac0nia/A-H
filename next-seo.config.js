const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ahelectrical.co.uk';

module.exports = {
  titleTemplate: '%s | A&H Electrical - Trusted Electricians in London',
  defaultTitle: 'A&H Electrical | 24/7 Emergency Electricians in London',
  description: '✅ Fast, reliable electrical services in London. ⚡ 24/7 emergency electricians. ✅ NICEIC certified. ⚡ Free quotes. ✅ Same-day service. Call now!',
  canonical: SITE_URL,
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'format-detection', content: 'telephone=yes' },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { name: 'google-site-verification', content: 'lTbu7FbCU-D2e90RgTAd2Dw1VH-jC_m_BEx-szbqTJE' },
    { name: 'author', content: 'A&H Electrical' },
    { name: 'geo.region', content: 'GB-LND' },
    { name: 'geo.placename', content: 'London' },
    { name: 'theme-color', content: '#1a1a1a' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: 'A&H Electrical - Electricians in London',
    title: 'A&H Electrical | 24/7 Emergency Electricians in London',
    description: '✅ Fast, reliable electrical services in London. ⚡ 24/7 emergency electricians. ✅ NICEIC certified. ⚡ Free quotes. ✅ Same-day service. Call now!',
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'A&H Electrical - 24/7 Emergency Electricians in London',
      },
    ],
  },
  twitter: {
    handle: '@ahelectrical',
    site: '@ahelectrical',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'canonical', href: SITE_URL },
    { rel: 'alternate', type: 'application/rss+xml', href: '/blog/rss.xml' },
  ],
  additionalRobotsProps: {
    nosnippet: false,
    notranslate: true,
    noimageindex: false,
    noarchive: false,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};
