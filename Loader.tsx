import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'full';
  label?: string;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  size = 'md',
  label,
  className
}) => {
  const sizes = {
    sm: 'w-5 h-5 border-2',
    md: 'w-10 h-10 border-3',
    lg: 'w-16 h-16 border-4',
    full: 'w-20 h-20 border-4',
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className={clsx(
            'rounded-full border-zinc-200 dark:border-zinc-800 border-t-renza-yellow-400 dark:border-t-renza-yellow-400',
            sizes[size],
            className
          )}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-renza-yellow-400 animate-ping" />
        </div>
      </div>
      {label && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-medium text-zinc-500 dark:text-zinc-400 tracking-wide uppercase"
        >
          {label}
        </motion.p>
      )}
    </div>
  );

  if (size === 'full') {
    return (
      <div className="min-h-[60vh] w-full flex items-center justify-center">
        {spinner}
      </div>
    );
  }

  return spinner;
};
