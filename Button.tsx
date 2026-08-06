import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Loader } from './Loader';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost' | 'glass' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  ariaLabel,
  className,
  disabled,
  onClick,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-heading font-bold rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-renza-yellow-400 focus:ring-offset-2 dark:focus:ring-offset-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed select-none min-h-[44px]';

  const variants = {
    primary:
      'bg-renza-yellow-400 text-black hover:bg-renza-yellow-300 active:bg-renza-yellow-500 shadow-yellow-glow hover:shadow-yellow-glow-lg border border-renza-yellow-500/30',
    secondary:
      'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 border border-zinc-200/80 dark:border-zinc-700',
    dark:
      'bg-zinc-950 text-white hover:bg-zinc-900 active:bg-black shadow-md border border-zinc-800',
    outline:
      'bg-transparent text-zinc-900 dark:text-white border-2 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800/60',
    ghost:
      'bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60',
    glass:
      'glass-card text-zinc-900 dark:text-white hover:bg-white/80 dark:hover:bg-zinc-800/80 border border-white/30 dark:border-white/10 shadow-soft',
    danger:
      'bg-rose-500 text-white hover:bg-rose-600 active:bg-rose-700 shadow-md border border-rose-600/30',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 min-h-[38px]',
    md: 'text-sm px-5 py-2.5 gap-2 min-h-[44px]',
    lg: 'text-base px-6 py-3.5 gap-2.5 min-h-[50px]',
    xl: 'text-lg px-8 py-4 gap-3 rounded-3xl min-h-[56px]',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.97 }}
      aria-label={ariaLabel}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...(props as any)}
    >
      {isLoading ? (
        <Loader size="sm" color={variant === 'primary' ? 'dark' : 'white'} />
      ) : (
        <>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children && <span>{children}</span>}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </>
      )}
    </motion.button>
  );
};
