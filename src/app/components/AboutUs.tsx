import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg max-w-2xl mx-auto">
          We are a dedicated team committed to providing the best services to our customers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="bg-[#333] p-4 rounded">
            <h3 className="font-bold text-xl">Our Mission</h3>
            <p className="text-gray-300">To deliver top-notch electrical services with a focus on customer satisfaction.</p>
          </div>
          <div className="bg-[#333] p-4 rounded">
            <h3 className="font-bold text-xl">Our Vision</h3>
            <p className="text-gray-300">To be the leading electrical service provider in the region.</p>
          </div>
          <div className="bg-[#333] p-4 rounded">
            <h3 className="font-bold text-xl">Our Values</h3>
            <p className="text-gray-300">Integrity, quality, and reliability are at the core of our business.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;