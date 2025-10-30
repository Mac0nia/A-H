import { NextSeo } from 'next-seo';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AnimatedBackground from './components/AnimatedBackground';
import Contact from './components/Contact';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import TrustBadges from './components/TrustBadges';
import Testimonials from './components/Testimonials';
import GoogleReviews from './components/GoogleReviews';

export default function Home() {
  return (
    <>
      <NextSeo 
        title="24/7 Emergency Electricians in London | A&H Electrical"
        description="✅ Fast, reliable electrical services in London. ⚡ 24/7 emergency electricians. ✅ NICEIC certified. ⚡ Free quotes. ✅ Same-day service. Call now!"
        openGraph={{
          title: '24/7 Emergency Electricians in London | A&H Electrical',
          description: '✅ Fast, reliable electrical services in London. ⚡ 24/7 emergency electricians. ✅ NICEIC certified. ⚡ Free quotes. ✅ Same-day service. Call now!',
          images: [
            {
              url: 'https://ahelectrical.co.uk/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'A&H Electrical - 24/7 Emergency Electricians in London',
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'emergency electrician london, 24/7 electrician, NICEIC certified electrician, electrical services london, local electrician hackney, commercial electrician, domestic electrician, electrical repairs, electrical installation, lighting installation, fuse box upgrade, electrical safety inspection',
          },
        ]}
      />
      
      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Electrician',
            name: 'A&H Electrical',
            image: 'https://ahelectrical.co.uk/images/logo.png',
            '@id': 'https://ahelectrical.co.uk',
            url: 'https://ahelectrical.co.uk',
            telephone: '+44 20 XXXX XXXX', // Replace with your actual phone number
            priceRange: '££',
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
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday'
                ],
                opens: '08:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Sunday',
                opens: '00:00',
                closes: '00:00',
                closed: true
              }
            ],
            sameAs: [
              'https://www.facebook.com/yourpage',
              'https://www.instagram.com/yourprofile',
              'https://www.linkedin.com/company/yourcompany',
            ],
          }),
        }}
      />

      <main className="relative min-h-screen">
        <AnimatedBackground />
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <TrustBadges />
          <Testimonials />
          <GoogleReviews />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}