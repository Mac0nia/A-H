'use client';

import { motion } from 'framer-motion';
import './ServicesSection.css';

// SVG Icons
const InspectionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const FaultFindingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
  </svg>
);

const DesignIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.617L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>
);

const RewiringIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
  </svg>
);

const NewBuildIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21V5.25a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 012.25 2.25v16.5l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6h6v2.25H9z" />
  </svg>
);

const FuseboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const EvChargingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h-2.25V8.25h-2.25v2.25h-2.25v2.25h2.25v2.25h2.25v-2.25h2.25v-2.25zM3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm0 9.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25z" />
  </svg>
);

const RenewableEnergyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

const PatTestingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
  </svg>
);

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div
    className="service-card bg-[rgb(49_49_49_/_50%)] p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-[rgb(49_49_49_/_60%)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 transform-gpu"
  >
    <div className="text-[#DAA520] mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Inspection & Testing",
      description: "Comprehensive electrical inspection and testing services to ensure your property's electrical systems are safe and compliant with regulations.",
      icon: <InspectionIcon />
    },
    {
      title: "Fault Finding",
      description: "Expert diagnosis and resolution of electrical faults to keep your systems running smoothly and safely.",
      icon: <FaultFindingIcon />
    },
    {
      title: "Electrical Design",
      description: "Professional electrical system design services for new installations, renovations, and upgrades.",
      icon: <DesignIcon />
    },
    {
      title: "Rewiring Services",
      description: "Complete rewiring solutions for homes and businesses, ensuring safety and efficiency.",
      icon: <RewiringIcon />
    },
    {
      title: "New Builds",
      description: "Full electrical installation services for new construction projects of all sizes.",
      icon: <NewBuildIcon />
    },
    {
      title: "Fuseboard Upgrades",
      description: "Professional fuseboard and consumer unit upgrades to ensure your electrical system is safe and up to current standards.",
      icon: <FuseboardIcon />
    },
    {
      title: "EV Charging",
      description: "Installation and maintenance of electric vehicle charging points for homes and businesses.",
      icon: <EvChargingIcon />
    },
    {
      title: "Renewable Energy",
      description: "Expert installation and maintenance of solar panels, battery storage, and other renewable energy solutions.",
      icon: <RenewableEnergyIcon />
    },
    {
      title: "PAT Testing",
      description: "Professional Portable Appliance Testing to ensure all your electrical equipment is safe to use.",
      icon: <PatTestingIcon />
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Professional electrical services tailored to your needs.
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">We provide comprehensive solutions for both residential and commercial properties.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Need this done? Get a free quote.</h3>
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
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
