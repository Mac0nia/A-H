'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Review = {
  author_name?: string;
  profile_photo_url?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
};

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch('/api/reviews', { cache: 'no-store' });
        if (!res.ok) throw new Error(`Failed to load reviews (${res.status})`);
        const data = await res.json();
        if (!cancelled) setReviews(Array.isArray(data.reviews) ? data.reviews : []);
      } catch (e: unknown) {
        if (!cancelled) setError((e as Error).message || 'Failed to load reviews');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const renderStars = (rating = 0) => {
    const full = Math.round(rating);
    return (
      <div className="flex items-center text-[#DAA520]" aria-label={`Rating ${full} out of 5`}>
        <span className="mr-1">{'★★★★★'.slice(0, full)}</span>
        <span className="text-[#DAA520]/30">{'★★★★★'.slice(full)}</span>
      </div>
    );
  };

  return (
    <section id="testimonials" className="relative py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">What our customers say</h2>
          <p className="mt-2 text-gray-300">Real feedback from homeowners and small businesses we&apos;ve helped.</p>
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 animate-pulse">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-white/10" />
                  <div className="flex-1">
                    <div className="h-4 w-24 bg-white/10 rounded" />
                    <div className="h-3 w-32 bg-white/5 rounded mt-2" />
                  </div>
                </div>
                <div className="h-4 w-full bg-white/10 rounded mb-2" />
                <div className="h-4 w-5/6 bg-white/10 rounded" />
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="text-center text-sm text-red-300">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.length === 0 && (
              <div className="col-span-full text-center text-gray-300">No reviews available yet.</div>
            )}
            {reviews.slice(0, 6).map((r, i) => (
              <motion.div
                key={`${r.author_name}-${i}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  {r.profile_photo_url ? (
                    <img
                      src={r.profile_photo_url}
                      alt={r.author_name || 'Reviewer'}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-[#DAA520]/20 flex items-center justify-center text-[#DAA520] font-semibold">
                      {(r.author_name || '•').split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </div>
                  )}
                  <div>
                    <p className="text-white font-medium">{r.author_name || 'Anonymous'}</p>
                    <div className="flex items-center gap-2">
                      {renderStars(r.rating)}
                      {r.relative_time_description && (
                        <span className="text-xs text-gray-400">{r.relative_time_description}</span>
                      )}
                    </div>
                  </div>
                </div>
                {r.text && <p className="text-gray-200 leading-relaxed">“{r.text}”</p>}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
