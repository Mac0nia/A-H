import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AnimatedBackground from './components/AnimatedBackground';
import Contact from './components/Contact';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}