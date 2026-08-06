import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Flame, Star, Zap, ChevronRight } from 'lucide-react';
import { ListingCard } from '../listing/ListingCard';
import { MOCK_LISTINGS } from '../../data/mockData';
import { Container } from '../layout/Container';

export const TrendingRentals: React.FC = () => {
  // Top 3 trending items
  const trendingList = MOCK_LISTINGS.slice(0, 3);

  return (
    <div className="py-12">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-500 uppercase tracking-wider">
              <Flame className="w-4 h-4 fill-rose-500 text-rose-500" />
              High Demand Right Now
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white mt-1">
              Trending Rentals in San Francisco
            </h2>
          </div>
          <span className="text-xs font-semibold text-zinc-400">
            Updated live every 15 mins
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trendingList.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </Container>
    </div>
  );
};
