import React from 'react';
import { motion } from 'framer-motion';
import type { Category } from '../../types';
import { ArrowUpRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className="group relative cursor-pointer rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-soft aspect-[4/3] flex flex-col justify-end p-5"
    >
      {/* Background Image with Overlay */}
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-110 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-2xl">{category.icon}</span>
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-renza-yellow-400 group-hover:text-black transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
        <h3 className="text-base font-heading font-extrabold text-white group-hover:text-renza-yellow-400 transition-colors">
          {category.name}
        </h3>
        <p className="text-xs text-zinc-300 font-medium">
          {category.itemCount}+ Rentals Available
        </p>
      </div>
    </motion.div>
  );
};
