import React from 'react';
import { clsx } from 'clsx';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  variant?: 'pills' | 'underline';
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  variant = 'pills',
  className,
}) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-2 overflow-x-auto no-scrollbar',
        variant === 'underline' && 'border-b border-zinc-200 dark:border-zinc-800',
        className
      )}
    >
      {tabs.map((tab) => {
        const isSelected = activeTab === tab.id;
        if (variant === 'underline') {
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={clsx(
                'flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-colors whitespace-nowrap',
                isSelected
                  ? 'border-renza-yellow-400 text-zinc-900 dark:text-white'
                  : 'border-transparent text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'
              )}
            >
              {tab.icon}
              {tab.label}
              {tab.badge && (
                <span className="px-1.5 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-[10px] font-extrabold">
                  {tab.badge}
                </span>
              )}
            </button>
          );
        }

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={clsx(
              'flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap',
              isSelected
                ? 'bg-renza-yellow-400 text-black shadow-yellow-glow'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
            )}
          >
            {tab.icon}
            {tab.label}
            {tab.badge && (
              <span className="px-1.5 py-0.5 rounded-full bg-black/10 text-[10px] font-extrabold">
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
