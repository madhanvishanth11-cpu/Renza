import React from 'react';
import { clsx } from 'clsx';

interface BadgeProps {
  variant?: 'yellow' | 'dark' | 'outline' | 'success' | 'info';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'yellow',
  size = 'md',
  children,
  className,
  icon,
}) => {
  const variants = {
    yellow: 'bg-renza-yellow-100 text-yellow-900 dark:bg-renza-yellow-400/20 dark:text-renza-yellow-300 border border-renza-yellow-300/50',
    dark: 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900',
    outline: 'border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 bg-white/50 dark:bg-zinc-800/50',
    success: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
    info: 'bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300 border border-sky-200 dark:border-sky-800',
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5 font-medium tracking-wide uppercase',
    md: 'text-xs px-2.5 py-1 font-semibold',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 rounded-full backdrop-blur-sm shadow-sm select-none',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
