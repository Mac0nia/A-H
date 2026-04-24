const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ahelectrical.co.uk';

module.exports = {
  titleTemplate: '%s | A&H Electrical',
  defaultTitle: 'A&H Electrical | Trusted Electricians in London',
  description: 'Professional electrical services in London. Emergency electricians available 24/7. Fully certified and insured electricians for residential and commercial properties.',
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'format-detection',
      content: 'telephone=yes',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: 'A&H Electrical',
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'A&H Electrical - Professional Electricians in London',
      },
    ],
  },
  twitter: {
    handle: '@ahelectrical',
    site: '@ahelectrical',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};
