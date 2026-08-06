import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { Container } from '../layout/Container';

export const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'Indie Film Director',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'Rented the Sony FX3 package for a 3-day music video shoot in SF. The equipment was in pristine condition, fully charged with Pelican cases. Saved our production budget $4,000!',
      rentedItem: 'Sony FX3 Cinema Camera Package',
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'iOS Lead Developer',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'Rented the Apple Vision Pro to test our spatial app before launch. The owner dropped it off at my office within 2 hours. Renza Passport made the zero-deposit verification effortless.',
      rentedItem: 'Apple Vision Pro (512GB)',
    },
    {
      id: 3,
      name: 'Alex Rivera',
      role: 'Gear Host & Photographer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'I list my Leica M11 and Cybertruck on Renza when I am not using them. I made $3,800 last month alone! The $50k host insurance gives total confidence.',
      rentedItem: 'Host of Leica M11 & Cybertruck',
    },
  ];

  return (
    <div className="py-16 bg-zinc-50 dark:bg-zinc-900/40 border-y border-zinc-200/60 dark:border-zinc-800/60">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-renza-yellow-600 dark:text-renza-yellow-400 uppercase tracking-wider">
            Verified Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white mt-1">
            Loved by Creators, Developers & Hosts
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2">
            Over 50,000 successful rentals with a 4.95-star community rating.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <motion.div
              key={rev.id}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-renza-yellow-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-renza-yellow-400" />
                  ))}
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-11 h-11 rounded-2xl object-cover ring-2 ring-renza-yellow-400"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-1">
                      {rev.name}
                      <ShieldCheck className="w-3.5 h-3.5 text-renza-yellow-500" />
                    </h4>
                    <span className="text-[11px] text-zinc-400">{rev.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};
