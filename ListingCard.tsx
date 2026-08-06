import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Heart } from 'lucide-react';
import type { Listing } from '../../types';
import { useMarketplace } from '../../context/MarketplaceContext';
import { Badge } from '../common/Badge';

export const ListingCard: React.FC<{ listing: Listing }> = ({ listing }) => {
  const { toggleWishlist, isWishlisted } = useMarketplace();
  const wishlisted = isWishlisted(listing.id);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-soft overflow-hidden flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(listing);
          }}
          className="absolute top-3 right-3 p-2.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-md text-zinc-700 dark:text-zinc-200"
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>
      </div>

      <div className="p-5 flex flex-col justify-between flex-grow space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-semibold">
            <span>{listing.category}</span>
            <span className="flex items-center gap-1 text-zinc-900 dark:text-white font-bold">
              <Star className="w-3.5 h-3.5 fill-renza-yellow-400 text-renza-yellow-400" />
              {listing.rating.toFixed(2)}
            </span>
          </div>

          <Link to={`/listing/${listing.id}`}>
            <h3 className="font-bold text-base text-zinc-900 dark:text-white line-clamp-1 group-hover:text-renza-yellow-500 transition-colors">
              {listing.title}
            </h3>
          </Link>

          <p className="text-xs text-zinc-400 line-clamp-2">{listing.description}</p>
        </div>

        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <span className="text-lg font-extrabold text-zinc-900 dark:text-white font-heading">
            ${listing.pricePerDay}
            <span className="text-xs text-zinc-400 font-normal">/day</span>
          </span>
          <Link to={`/booking/${listing.id}`}>
            <Badge variant="yellow">Book Now</Badge>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
