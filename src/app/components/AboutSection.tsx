'use client';

import { motion } from 'framer-motion';
import './ServicesSection.css';

const AboutSection = () => {
  const MissionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
    </svg>
  );

  const VisionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const ValuesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );

  const aboutPoints = [
    {
      title: "Our Mission",
      description: "To deliver exceptional electrical services with the highest standards of quality, safety, and customer satisfaction.",
      icon: <MissionIcon />,
      delay: 0.1
    },
    {
      title: "Our Vision",
      description: "To be the most trusted name in electrical services, known for innovation, reliability, and excellence in every project.",
      icon: <VisionIcon />,
      delay: 0.2
    },
    {
      title: "Our Values",
      description: "Integrity, professionalism, and customer focus are at the heart of everything we do. We believe in building lasting relationships through trust and quality workmanship.",
      icon: <ValuesIcon />,
      delay: 0.3
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">About Us</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Two brothers, based in Hackney, who decided to put our skills together and do things properly.
          </p>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            No call centres, no hidden extras, no fuss.
          </p>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Just honest electrical work, done right the first time.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {aboutPoints.map((point, index) => (
            <div
              key={index}
              className="service-card bg-[rgb(49_49_49_/_50%)] p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-[rgb(49_49_49_/_60%)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 transform-gpu"
            >
              <div className="text-[#DAA520] mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold mb-2">{point.title}</h3>
              <p className="text-gray-300">{point.description}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-12 text-center"
        >
          <div className="bg-[rgb(49_49_49_/_50%)] hover:bg-[rgb(49_49_49_/_60%)] transition-colors duration-300 p-6 rounded-lg max-w-4xl mx-auto shadow-lg hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-300 mb-4">Why Choose Us?</h3>
            <p className="text-gray-300 mb-4">
              Our team of certified electricians brings expertise, attention to detail, and a commitment to excellence to every project. 
              We take pride in our work and stand behind it with comprehensive warranties and exceptional customer service.
            </p>
            <p className="text-gray-300">
              Whether you need a simple repair or a complete electrical system installation, we have the skills and experience to get the job done right.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
