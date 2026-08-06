import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, SlidersHorizontal, Star, ShieldCheck, Zap, Truck, Check } from 'lucide-react';
import { Button } from '../common/Button';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({ isOpen, onClose }) => {
  const [priceRange, setPriceRange] = useState<number>(350);
  const [minRating, setMinRating] = useState<number>(4);
  const [instantBookOnly, setInstantBookOnly] = useState<boolean>(false);
  const [deliveryAvailable, setDeliveryAvailable] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Cameras & Cinema', 'Tech & Gaming', 'EVs & Vehicles', 'Outdoor & Camping', 'Luxury & Fashion', 'Tools & Gear'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Slide-in Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-full max-w-md bg-white dark:bg-zinc-900 h-full shadow-2xl z-10 flex flex-col overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between sticky top-0 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md z-20">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-renza-yellow-500" />
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Filter Marketplace
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Options Content */}
            <div className="p-6 space-y-8 flex-grow">
              
              {/* Category Pills */}
              <div>
                <label className="block text-sm font-bold text-zinc-900 dark:text-white mb-3">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-xs px-3.5 py-2 rounded-full border transition-all ${
                        selectedCategory === cat
                          ? 'bg-renza-yellow-400 text-black border-renza-yellow-500 font-bold shadow-sm'
                          : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 text-zinc-700 dark:text-zinc-300'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-zinc-900 dark:text-white">
                    Max Daily Rate
                  </label>
                  <span className="text-sm font-extrabold text-renza-yellow-600 dark:text-renza-yellow-400">
                    ${priceRange} / day
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-renza-yellow-400"
                />
                <div className="flex justify-between text-xs text-zinc-400 mt-1">
                  <span>$20</span>
                  <span>$500</span>
                  <span>$1000+</span>
                </div>
              </div>

              {/* Toggles */}
              <div className="space-y-4 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-500 flex items-center justify-center">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">Instant Booking</p>
                      <p className="text-xs text-zinc-500">Rent without host pre-approval</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={instantBookOnly}
                    onChange={(e) => setInstantBookOnly(e.target.checked)}
                    className="w-5 h-5 rounded text-renza-yellow-400 focus:ring-renza-yellow-400 border-zinc-300"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-500 flex items-center justify-center">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">Delivery Offered</p>
                      <p className="text-xs text-zinc-500">Host brings the item to your location</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={deliveryAvailable}
                    onChange={(e) => setDeliveryAvailable(e.target.checked)}
                    className="w-5 h-5 rounded text-renza-yellow-400 focus:ring-renza-yellow-400 border-zinc-300"
                  />
                </div>
              </div>

              {/* Minimum Rating */}
              <div>
                <label className="block text-sm font-bold text-zinc-900 dark:text-white mb-3">
                  Minimum Host Rating
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[4.0, 4.5, 4.8, 5.0].map((star) => (
                    <button
                      key={star}
                      onClick={() => setMinRating(star)}
                      className={`flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-semibold border ${
                        minRating === star
                          ? 'bg-zinc-900 text-white dark:bg-white dark:text-black border-zinc-900'
                          : 'border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50'
                      }`}
                    >
                      <Star className="w-3.5 h-3.5 fill-renza-yellow-400 text-renza-yellow-400" />
                      {star}+
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 flex items-center gap-3">
              <Button
                variant="outline"
                size="md"
                className="w-1/3"
                onClick={() => {
                  setPriceRange(500);
                  setMinRating(4);
                  setInstantBookOnly(false);
                  setDeliveryAvailable(false);
                  setSelectedCategory('All');
                }}
              >
                Reset
              </Button>
              <Button
                variant="primary"
                size="md"
                className="w-2/3"
                leftIcon={<Check className="w-4 h-4" />}
                onClick={onClose}
              >
                Apply Filters
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
