import React from 'react';
import { SkeletonLoader } from '../common/SkeletonLoader';

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-soft overflow-hidden space-y-4 p-4">
      {/* Image Skeleton */}
      <SkeletonLoader className="h-48 sm:h-52 w-full rounded-2xl" />

      {/* Details Skeleton */}
      <div className="space-y-3 pt-2">
        <div className="flex justify-between items-center">
          <SkeletonLoader className="h-4 w-20 rounded-lg" />
          <SkeletonLoader className="h-4 w-16 rounded-lg" />
        </div>

        <SkeletonLoader className="h-6 w-4/5 rounded-xl" />

        <div className="flex items-center gap-2 pt-1">
          <SkeletonLoader className="w-5 h-5 rounded-full" />
          <SkeletonLoader className="h-3 w-28 rounded-lg" />
        </div>

        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
          <SkeletonLoader className="h-8 w-20 rounded-xl" />
          <SkeletonLoader className="h-9 w-24 rounded-full" />
        </div>
      </div>
    </div>
  );
};
