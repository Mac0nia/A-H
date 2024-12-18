'use client';

import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-[#1E1E1E]/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="text-[#DAA520] text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Electrical Repairs",
      description: "Quick and reliable repairs for all your electrical issues, from outlets to circuit breakers.",
      icon: "🔧",
      delay: 0.2
    },
    {
      title: "Installation Services",
      description: "Professional installation of lighting, appliances, and electrical systems for your home or business.",
      icon: "⚡",
      delay: 0.4
    },
    {
      title: "Safety Inspections",
      description: "Comprehensive electrical safety inspections to ensure your property meets all safety standards.",
      icon: "🔍",
      delay: 0.6
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency electrical services when you need them most.",
      icon: "🚨",
      delay: 0.8
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional electrical services tailored to your needs. We provide comprehensive solutions for both residential and commercial properties.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
