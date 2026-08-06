import React from 'react';
import { Search, X } from 'lucide-react';
import { clsx } from 'clsx';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onClear,
  placeholder = 'Search rentals...',
  className,
  ...props
}) => {
  return (
    <div className={clsx('relative w-full', className)}>
      <Search className="w-4 h-4 text-renza-yellow-500 absolute left-4 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-11 pr-10 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 text-sm font-semibold text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-renza-yellow-400 transition-colors shadow-soft"
        {...props}
      />
      {value && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="p-1 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 absolute right-3 top-1/2 -translate-y-1/2"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
