'use client';

import { motion } from 'framer-motion';

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
    <div className="min-h-screen flex flex-col justify-center items-center relative">
      {/* Remove the decorative background since we now have AnimatedBackground */}
      <motion.div 
        className="text-center relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-6xl font-bold mb-6 text-white"
          variants={itemVariants}
        >
          Welcome to <span className="text-[#DAA520]">A&H Bros</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-12 max-w-2xl mx-auto text-gray-300"
          variants={itemVariants}
        >
          Professional Electrical Services for Your Home and Business
        </motion.p>

        <motion.button 
          className="bg-[#DAA520] text-[#121212] py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-[#B8860B] transition-colors"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 25px rgba(218, 165, 32, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Free Quote
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;