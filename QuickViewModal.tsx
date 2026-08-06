import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Star, ShieldCheck, Zap, ArrowRight, Truck, Calendar } from 'lucide-react';
import type { Listing } from '../../types';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

interface QuickViewModalProps {
  listing: Listing | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ listing, isOpen, onClose }) => {
  if (!listing) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden z-10 grid grid-cols-1 md:grid-cols-2"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white z-20"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Product Image Preview */}
            <div className="relative h-64 md:h-full bg-zinc-100 dark:bg-zinc-800">
              <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
              {listing.isInstantBook && (
                <div className="absolute top-4 left-4">
                  <Badge variant="yellow" icon={<Zap className="w-3 h-3 fill-black text-black" />}>
                    Instant Book
                  </Badge>
                </div>
              )}
            </div>

            {/* Product Quick Details */}
            <div className="p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-zinc-400">
                  <span>{listing.category}</span>
                  <span className="flex items-center gap-1 text-zinc-900 dark:text-white font-bold">
                    <Star className="w-3.5 h-3.5 fill-renza-yellow-400 text-renza-yellow-400" />
                    {listing.rating.toFixed(2)} ({listing.reviewsCount})
                  </span>
                </div>

                <h3 className="text-xl font-heading font-extrabold text-zinc-900 dark:text-white">
                  {listing.title}
                </h3>

                <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                  {listing.description}
                </p>

                <div className="pt-2 flex items-center gap-3 text-xs text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-renza-yellow-500" /> Handover Delivery
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-renza-yellow-500" /> Instant Lock
                  </div>
                </div>

                {/* Host Info */}
                <div className="pt-2 flex items-center gap-2 border-t border-zinc-100 dark:border-zinc-800 text-xs">
                  <img src={listing.host.avatar} alt={listing.host.name} className="w-6 h-6 rounded-full object-cover" />
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300">{listing.host.name}</span>
                  {listing.host.isSuperhost && (
                    <span className="flex items-center text-[10px] font-extrabold text-emerald-500 gap-0.5">
                      <ShieldCheck className="w-3 h-3" /> Superhost
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-400 block font-medium">Daily Rate</span>
                  <span className="text-2xl font-extrabold text-zinc-900 dark:text-white font-heading">
                    ${listing.pricePerDay}
                    <span className="text-xs text-zinc-400 font-normal">/day</span>
                  </span>
                </div>

                <Link to={`/booking/${listing.id}`} onClick={onClose}>
                  <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Reserve Now
                  </Button>
                </Link>
              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
