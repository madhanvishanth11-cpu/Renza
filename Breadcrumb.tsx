import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { clsx } from 'clsx';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav aria-label="Breadcrumb" className={clsx('flex items-center space-x-2 text-sm text-zinc-500 dark:text-zinc-400', className)}>
      <Link
        to="/"
        className="flex items-center hover:text-zinc-900 dark:hover:text-white transition-colors"
      >
        <Home className="w-4 h-4" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            {item.href && !isLast ? (
              <Link
                to={item.href}
                className="hover:text-zinc-900 dark:hover:text-white transition-colors truncate max-w-[160px] sm:max-w-none"
              >
                {item.label}
              </Link>
            ) : (
              <span className={clsx('font-medium truncate max-w-[200px] sm:max-w-none', isLast ? 'text-zinc-900 dark:text-white font-semibold' : '')}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
