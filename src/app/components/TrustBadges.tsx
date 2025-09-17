'use client';
import Image from 'next/image';

export default function TrustBadges() {
  return (
    <section aria-label="Certifications" className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="relative h-24 w-48">
            <Image 
              src="/napit.svg" 
              alt="NAPIT Certified" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
