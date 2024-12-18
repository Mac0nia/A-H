import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AnimatedBackground from './components/AnimatedBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
      </div>
    </main>
  );
}