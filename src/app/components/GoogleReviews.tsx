'use client';

import { motion } from 'framer-motion';

export default function GoogleReviews() {
  return (
    <section id="google-reviews" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Google Reviews</h2>
          <p className="mt-2 text-gray-300">See what people are saying about A&H Electrical on Google.</p>
        </div>

        <div className="mx-auto max-w-2xl rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-[#DAA520] text-2xl" aria-label="Average rating 5 out of 5">
            <span>★★★★★</span>
          </div>
          <p className="mt-2 text-sm text-gray-400">Average rating based on recent client feedback</p>

          <motion.a
            href="https://www.google.com/search?q=A%26H+Electrical+London+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-[#DAA520] text-[#121212] py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-[#B8860B] transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Read our Google reviews
          </motion.a>

          {/*
            To embed an official Google Reviews widget, replace the button above with your preferred provider's widget
            or an official Google Business Profile embed. Many 3rd-party widgets provide a simple <script> snippet.
            In Next.js App Router, consider dynamically loading scripts in a client component using next/script.
          */}
        </div>
      </div>
    </section>
  );
}
