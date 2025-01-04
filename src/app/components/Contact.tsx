import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">Have questions? We’d love to hear from you!</p>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="p-2 mb-4 w-full rounded" required />
          <input type="email" placeholder="Your Email" className="p-2 mb-4 w-full rounded" required />
          <textarea placeholder="Your Message" className="p-2 mb-4 w-full rounded" required></textarea>
          <button type="submit" className="bg-[#DAA520] text-black p-2 rounded">Send Message</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="bg-[#333] p-4 rounded">
            <h3 className="font-bold text-xl">Get in Touch</h3>
            <p className="text-gray-300">Reach out to us for any inquiries or assistance.</p>
          </div>
          <div className="bg-[#333] p-4 rounded">
            <h3 className="font-bold text-xl">Follow Us</h3>
            <p className="text-gray-300">Stay updated with our latest news and offers.</p>
          </div>
          <div className="bg-[#333] p-4 rounded">
            <h3 className="font-bold text-xl">Feedback</h3>
            <p className="text-gray-300">We value your feedback to improve our services.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;