'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative h-[100dvh] h-screen-ios">
      <motion.div 
        className="w-full max-w-6xl mx-auto text-center relative px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="mb-4 sm:mb-6 md:mb-8"
          variants={itemVariants}
        >
          <Image 
            src="/logo.svg" 
            alt="A&H Electric Logo" 
            className="h-40 w-40 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80 mx-auto"
            width={320}
            height={320}
            priority
          />
        </motion.div>
        
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-white leading-tight"
          variants={itemVariants}
        >
          We are <span className="text-[#DAA520]">A&H Electrical</span>
        </motion.h1>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-gray-300 px-2 leading-relaxed"
          variants={itemVariants}
        >
          Professional Electrical Services in London for Your Home and Business
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="px-4 sm:px-0"
        >
          <motion.button 
            className="bg-[#DAA520] text-[#121212] py-3 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-[#B8860B] transition-colors w-full sm:w-auto"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(218, 165, 32, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get a Free Quote
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;