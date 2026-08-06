import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';

export interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'glass' | 'bordered' | 'flat';
  hoverEffect?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  hoverEffect = true,
  padding = 'md',
  children,
  className,
  ...props
}) => {
  const baseStyles = 'rounded-3xl transition-all duration-300 overflow-hidden';

  const variants = {
    default: 'bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-soft',
    glass: 'glass-card shadow-soft-lg',
    bordered: 'bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800',
    flat: 'bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/50',
  };

  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={clsx(
        baseStyles,
        variants[variant],
        paddings[padding],
        hoverEffect && 'hover:shadow-soft-lg hover:border-zinc-300 dark:hover:border-zinc-700',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
