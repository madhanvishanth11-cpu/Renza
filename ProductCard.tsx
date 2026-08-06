import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Heart, Eye, ArrowRight, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import type { Listing } from '../../types';
import { useMarketplace } from '../../context/MarketplaceContext';
import { Badge } from '../common/Badge';

interface ProductCardProps {
  listing: Listing;
  onQuickView?: (listing: Listing) => void;
}

export const ProductCard: React.FC<ProductCardProps> = memo(({ listing, onQuickView }) => {
  const { toggleWishlist, isWishlisted } = useMarketplace();
  const wishlisted = isWishlisted(listing.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = listing.images && listing.images.length > 0 ? listing.images : [listing.image];

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-soft hover:shadow-soft-lg overflow-hidden flex flex-col h-full"
    >
      {/* 1. Image Carousel Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Link to={`/listing/${listing.id}`}>
          <img
            src={images[currentImageIndex]}
            alt={listing.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Carousel Prev/Next Buttons */}
        {images.length > 1 && (
          <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <button
              onClick={handlePrevImage}
              className="p-1.5 rounded-full bg-black/60 text-white hover:bg-black pointer-events-auto backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextImage}
              className="p-1.5 rounded-full bg-black/60 text-white hover:bg-black pointer-events-auto backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(listing);
          }}
          className="absolute top-3 right-3 p-2.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-white/20 text-zinc-700 dark:text-zinc-200 hover:scale-110 transition-transform shadow-md z-10"
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        {/* Instant Book Badge */}
        {listing.isInstantBook && (
          <div className="absolute top-3 left-3">
            <Badge variant="yellow" icon={<Zap className="w-3 h-3 fill-black text-black" />}>
              Instant Book
            </Badge>
          </div>
        )}

        {/* Quick View Trigger */}
        {onQuickView && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickView(listing);
            }}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/80 text-white text-xs font-bold backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all shadow-lg flex items-center gap-1.5 z-10 hover:bg-black"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>
        )}
      </div>

      {/* 2. Product Information Content */}
      <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
        <div className="space-y-2">
          
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-500">
            <span className="truncate max-w-[150px]">{listing.category}</span>
            <span className="flex items-center gap-1 font-bold text-zinc-900 dark:text-white">
              <Star className="w-3.5 h-3.5 fill-renza-yellow-400 text-renza-yellow-400" />
              {listing.rating.toFixed(2)}
              <span className="text-zinc-400 font-normal">({listing.reviewsCount})</span>
            </span>
          </div>

          <Link to={`/listing/${listing.id}`}>
            <h3 className="font-heading font-bold text-base text-zinc-900 dark:text-white line-clamp-1 group-hover:text-renza-yellow-600 dark:group-hover:text-renza-yellow-400 transition-colors">
              {listing.title}
            </h3>
          </Link>

          <p className="text-xs text-zinc-400 line-clamp-2">
            {listing.description}
          </p>

          <div className="pt-1 flex items-center gap-2 text-xs text-zinc-500">
            <img src={listing.host.avatar} alt={listing.host.name} className="w-5 h-5 rounded-full object-cover" />
            <span className="font-medium text-zinc-700 dark:text-zinc-300 truncate">{listing.host.name}</span>
            {listing.host.isSuperhost && (
              <span className="flex items-center text-[10px] font-extrabold text-emerald-500 gap-0.5">
                <ShieldCheck className="w-3 h-3" /> Superhost
              </span>
            )}
          </div>
        </div>

        {/* 3. Price & Book Now Footer */}
        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-zinc-400 block font-medium">Daily Rate</span>
            <span className="text-lg font-extrabold text-zinc-900 dark:text-white font-heading">
              ${listing.pricePerDay}
              <span className="text-xs text-zinc-400 font-normal">/day</span>
            </span>
          </div>

          <Link to={`/booking/${listing.id}`}>
            <button className="px-4 py-2 rounded-2xl bg-renza-yellow-400 hover:bg-renza-yellow-300 text-black font-bold text-xs shadow-yellow-glow transition-all flex items-center gap-1 group-hover:gap-2">
              Book Now <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
});
