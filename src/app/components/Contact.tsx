"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ServicesSection.css';

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75A3 3 0 015.25 3.75h1.5a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25H6.6a12.003 12.003 0 006.8 6.8v-1.15a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25v1.5a3 3 0 01-3 3h-.75C7.798 20.25 3.75 16.202 3.75 11.25v-.75a3 3 0 01-1.5-2.75z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email and message.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!form.consent) {
      setError('Please accept the privacy notice to continue.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Error sending message:', err);
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Contact Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Have questions or need a quote?</p>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Send us a message and we’ll get back to you shortly.</p>
        </motion.div>

        <div className="space-y-8">
          <div className="">
            <div className="bg-[rgb(49_49_49_/_50%)] p-6 rounded-lg shadow-lg">
              {submitted ? (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Thanks for reaching out!</h3>
                  <p className="text-gray-300">We’ve received your message and will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-500/10 text-red-300 border border-red-500/30 rounded p-3 text-sm">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-300 mb-1" htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleInputChange}
                        className="w-full rounded-md bg-[#111] border border-white/10 focus:border-[#DAA520] focus:ring-2 focus:ring-[#DAA520]/30 outline-none p-3 text-white"
                        placeholder="Mark Dean"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-1" htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleInputChange}
                        className="w-full rounded-md bg-[#111] border border-white/10 focus:border-[#DAA520] focus:ring-2 focus:ring-[#DAA520]/30 outline-none p-3 text-white"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-300 mb-1" htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-md bg-[#111] border border-white/10 focus:border-[#DAA520] focus:ring-2 focus:ring-[#DAA520]/30 outline-none p-3 text-white"
                        placeholder="+44 7123 456789"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-1" htmlFor="service">Service</label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleInputChange}
                        className="w-full rounded-md bg-[#111] border border-white/10 focus:border-[#DAA520] focus:ring-2 focus:ring-[#DAA520]/30 outline-none p-3 text-white"
                      >
                        <option value="">Select a service (optional)</option>
                        <option>Inspection & Testing</option>
                        <option>Fault Finding</option>
                        <option>Electrical Design</option>
                        <option>Rewiring</option>
                        <option>New Build</option>
                        <option>Fuseboard Upgrade</option>
                        <option>EV Charging</option>
                        <option>Renewable Energy</option>
                        <option>PAT Testing</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleInputChange}
                      className="w-full rounded-md bg-[#111] border border-white/10 focus:border-[#DAA520] focus:ring-2 focus:ring-[#DAA520]/30 outline-none p-3 text-white min-h-[140px]"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="relative flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="consent"
                          name="consent"
                          type="checkbox"
                          checked={form.consent}
                          onChange={handleCheckboxChange}
                          className="h-5 w-5"
                        />
                      </div>
                    </div>
                    <label htmlFor="consent" className="text-sm text-gray-300">
                      I agree that my data will be used to contact me about my enquiry. We respect your privacy.
                    </label>
                  </div>
                  <div>
                    <motion.button
                      whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(218, 165, 32, 0.25)' }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="bg-[#DAA520] text-[#121212] py-3 px-6 rounded-full text-base font-semibold shadow-lg hover:bg-[#B8860B] transition-colors w-full sm:w-auto"
                    >
                      Send Message
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              className="service-card bg-[rgb(49_49_49_/_50%)] p-4 rounded-lg shadow-lg hover:bg-[rgb(49_49_49_/_60%)]"
            >
              <div className="text-[#DAA520] mb-2"><PhoneIcon /></div>
              <h3 className="text-lg font-semibold mb-1 text-white">Call Us</h3>
              <p className="text-gray-300 text-sm">+44 7961 045657</p>
            </div>

            <div
              className="service-card bg-[rgb(49_49_49_/_50%)] p-4 rounded-lg shadow-lg hover:bg-[rgb(49_49_49_/_60%)]"
            >
              <div className="text-[#DAA520] mb-2"><LocationIcon /></div>
              <h3 className="text-lg font-semibold mb-1 text-white">Based in Hackney</h3>
              <p className="text-gray-300 text-sm">London, UK</p>
            </div>

            <div
              className="service-card bg-[rgb(49_49_49_/_50%)] p-4 rounded-lg shadow-lg hover:bg-[rgb(49_49_49_/_60%)]"
            >
              <div className="text-[#DAA520] mb-2"><ClockIcon /></div>
              <h3 className="text-lg font-semibold mb-1 text-white">Working Hours</h3>
              <p className="text-gray-300 text-sm">Mon–Sat, 8:00–18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;