import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = 'https://ahelectrical.co.uk';
const SITE_NAME = 'A&H Electrical';
const SITE_DESCRIPTION = 'Two brothers providing reliable, honest electrical services for homes and businesses across London. No call centres, no hidden extras, just proper electrical work.';

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Trusted Electricians in London | Hackney-Based`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'electrician', 'london electrician', 'hackney electrician', 'electrical services',
    'emergency electrician', 'commercial electrician', 'domestic electrician', 'electrical repairs',
    'lighting installation', 'fuse box upgrade', 'electrical safety inspection', 'EICR',
    'PAT testing', 'smart home installation', 'EV charger installation'
  ],
  authors: [{ name: 'A&H Electrical' }],
  creator: 'A&H Electrical',
  publisher: 'A&H Electrical',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/images/og-image.jpg`],
    creator: '@ahelectrical',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="google-site-verification" content="lTbu7FbCU-D2e90RgTAd2Dw1VH-jC_m_BEx-szbqTJE" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Electrician',
              name: 'A&H Electrical',
              image: `${SITE_URL}/images/logo.png`,
              '@id': SITE_URL,
              url: SITE_URL,
              telephone: '+44 20 XXXX XXXX', // Replace with your actual phone number
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Your Street Address',
                addressLocality: 'London',
                postalCode: 'Your Postcode',
                addressCountry: 'GB',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 51.5074, // Replace with your actual coordinates
                longitude: -0.1278,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
                opens: '08:00',
                closes: '18:00',
              },
              sameAs: [
                'https://www.facebook.com/yourpage',
                'https://www.instagram.com/yourprofile',
                'https://www.linkedin.com/company/yourcompany',
              ],
              priceRange: '££',
            }),
          }}
        />
        
        {/* Google Analytics Script - Uncomment and add your GA4 Measurement ID */}
        {/* <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
