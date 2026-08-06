import React from 'react';
import { clsx } from 'clsx';

interface SkeletonProps {
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        'animate-pulse rounded-2xl bg-zinc-200 dark:bg-zinc-800',
        className
      )}
    />
  );
};
