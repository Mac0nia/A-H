'use client';

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a]/80 backdrop-blur-sm text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-400">&copy; {currentYear} A&H Electrical. All rights reserved.</p>
          </div>
          <div className="text-center md:text-right">
            {/* Add social media icons or other links here in the future */}
            <p className="text-sm text-gray-400">Website designed by GG | v1.0.1</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
