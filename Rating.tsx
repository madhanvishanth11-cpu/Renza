import React from 'react';
import { Star } from 'lucide-react';
import { clsx } from 'clsx';

interface RatingProps {
  value: number;
  max?: number;
  showText?: boolean;
  reviewsCount?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  showText = true,
  reviewsCount,
  size = 'md',
  className,
}) => {
  const sizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className={clsx('flex items-center gap-1 font-semibold', className)}>
      <Star className={clsx(sizes[size], 'fill-renza-yellow-400 text-renza-yellow-400')} />
      {showText && (
        <span className="text-xs text-zinc-900 dark:text-white">
          {value.toFixed(2)}
        </span>
      )}
      {reviewsCount !== undefined && (
        <span className="text-xs text-zinc-400 font-normal">
          ({reviewsCount})
        </span>
      )}
    </div>
  );
};
