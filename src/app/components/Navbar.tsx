'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

const smoothScrollTo = (element: HTMLElement, duration: number = 1000) => {
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 100; // 100px offset from top
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const easeInOutQuad = (t: number): number => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(Math.min(timeElapsed / duration, 1));
    
    window.scrollTo(0, startPosition + distance * run);
    
    if (timeElapsed < duration) {
      window.requestAnimationFrame(animation);
    }
  };

  window.requestAnimationFrame(animation);
};

const Navbar = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      
      // Only handle anchor links on the same page
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId) as HTMLElement;
        if (targetElement) {
          smoothScrollTo(targetElement);
          
          // Update URL without causing a page reload
          window.history.pushState(null, '', targetId);
        }
      }
    };

    // Handle back/forward navigation
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash) as HTMLElement;
        if (targetElement) {
          smoothScrollTo(targetElement, 500);
        }
      }
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [pathname]);

  // Handle initial page load with hash
  useEffect(() => {
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash) as HTMLElement;
      if (targetElement) {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          smoothScrollTo(targetElement, 800);
        }, 100);
      }
    }
  }, []);

  return (
    <nav className="fixed w-full bg-[#1a1a1a]/80 backdrop-blur-sm text-white p-4 flex justify-between items-center z-50">
      <div className="text-lg font-bold">
        <Link 
          href="/" 
          className="text-[#DAA520] hover:text-[#DAA520]/80 transition-colors"
          onClick={(e) => {
            if (window.location.pathname === '/' && window.location.hash) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState(null, '', '/');
            }
          }}
        >
          <Image src="/logo.svg" alt="A&H Electric Logo" width={40} height={40} />
        </Link>
      </div>
      <div className="flex space-x-6">
        <Link 
          href="#services" 
          className="hover:text-[#DAA520] transition-colors"
        >
          Services
        </Link>
        <Link 
          href="#about" 
          className="hover:text-[#DAA520] transition-colors"
        >
          About Us
        </Link>
        <Link 
          href="#contact" 
          className="hover:text-[#DAA520] transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
