'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah K.',
    text: 'Professional, on time, and fairly priced. They sorted out our fuse box and explained everything clearly.',
  },
  {
    name: 'James P.',
    text: 'Quick response and tidy work. Will definitely use A&H again for future electrical jobs.',
  },
  {
    name: 'Monica L.',
    text: 'Great communication and honest pricing. Highly recommend for domestic work in East London.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">What our customers say</h2>
          <p className="mt-2 text-gray-300">Real feedback from homeowners and small businesses we&apos;ve helped.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-[#DAA520]/20 flex items-center justify-center text-[#DAA520] font-semibold">
                  {t.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                </div>
                <div>
                  <p className="text-white font-medium">{t.name}</p>
                  <div className="flex items-center text-[#DAA520]">
                    <span className="mr-1">★★★★★</span>
                    <span className="text-xs text-gray-400">Verified client</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-200 leading-relaxed">“{t.text}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
