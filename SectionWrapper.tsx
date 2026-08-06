import React from 'react';
import { clsx } from 'clsx';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'muted' | 'dark';
  paddingY?: 'sm' | 'md' | 'lg' | 'none';
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  id,
  background = 'white',
  paddingY = 'md',
}) => {
  const backgrounds = {
    white: 'bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100',
    muted: 'bg-renza-surface-light dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100',
    dark: 'bg-zinc-950 text-white',
  };

  const paddings = {
    none: 'py-0',
    sm: 'py-6 md:py-10',
    md: 'py-10 md:py-16 lg:py-20',
    lg: 'py-14 md:py-20 lg:py-28',
  };

  return (
    <section
      id={id}
      className={clsx(
        'w-full transition-colors duration-200 overflow-hidden',
        backgrounds[background],
        paddings[paddingY],
        className
      )}
    >
      {children}
    </section>
  );
};
