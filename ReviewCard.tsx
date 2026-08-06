import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  rentedItem?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  role,
  avatar,
  rating,
  comment,
  rentedItem,
}) => {
  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-soft flex flex-col justify-between space-y-4">
      <div>
        <div className="flex items-center gap-1 text-renza-yellow-400 mb-2">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-renza-yellow-400 text-renza-yellow-400" />
          ))}
        </div>
        <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed italic">
          "{comment}"
        </p>
      </div>

      <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={avatar} alt={name} className="w-9 h-9 rounded-full object-cover ring-2 ring-renza-yellow-400" />
          <div>
            <h4 className="font-bold text-xs text-zinc-900 dark:text-white flex items-center gap-1">
              {name} <ShieldCheck className="w-3.5 h-3.5 text-renza-yellow-500" />
            </h4>
            <span className="text-[10px] text-zinc-400">{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
