import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`space-y-3 ${centered ? 'text-center max-w-2xl mx-auto' : ''}`}>
      {badge && (
        <span className="inline-block px-3 py-1 rounded-full bg-renza-yellow-100 dark:bg-renza-yellow-950/40 text-renza-yellow-700 dark:text-renza-yellow-400 font-extrabold text-xs tracking-wider uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-zinc-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
