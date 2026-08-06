import React from 'react';
import { clsx } from 'clsx';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, error, className, ...props }) => {
  return (
    <div className="w-full space-y-1">
      {label && (
        <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
          {label}
        </label>
      )}
      <textarea
        rows={4}
        className={clsx(
          'w-full px-4 py-3 rounded-2xl border transition-all text-sm font-semibold text-zinc-900 dark:text-white bg-zinc-50 dark:bg-zinc-800/60 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-renza-yellow-400',
          error ? 'border-rose-500' : 'border-zinc-200 dark:border-zinc-800',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-rose-500">{error}</p>}
    </div>
  );
};
