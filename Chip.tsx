import React from 'react';
import { X } from 'lucide-react';

interface ChipProps {
  label: string;
  onRemove?: () => void;
  icon?: React.ReactNode;
  variant?: 'yellow' | 'dark' | 'outline';
}

export const Chip: React.FC<ChipProps> = ({ label, onRemove, icon, variant = 'outline' }) => {
  const variants = {
    yellow: 'bg-renza-yellow-400 text-black font-bold',
    dark: 'bg-black text-white dark:bg-white dark:text-black font-bold',
    outline: 'border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/60 font-semibold',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all ${variants[variant]}`}>
      {icon}
      {label}
      {onRemove && (
        <button onClick={onRemove} className="p-0.5 rounded-full hover:bg-black/10">
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  );
};
