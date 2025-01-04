"use client";

import Link from 'next/link';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="fixed w-full bg-[#1a1a1a]/80 backdrop-blur-sm text-white p-4 flex justify-between items-center z-50">
      <div className="text-lg font-bold">
        <Link href="/" className="text-[#DAA520] hover:text-[#DAA520]/80 transition-colors">
          A&H
        </Link>
      </div>
      <div className="flex space-x-6">
        <button onClick={() => scrollToSection('services')} className="hover:text-[#DAA520] transition-colors">
          Services
        </button>
        <button onClick={() => scrollToSection('about')} className="hover:text-[#DAA520] transition-colors">
          About Us
        </button>
        <button onClick={() => scrollToSection('contact')} className="hover:text-[#DAA520] transition-colors">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
