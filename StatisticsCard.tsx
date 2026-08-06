import React from 'react';

interface StatisticsCardProps {
  label: string;
  metric: string;
  subtext: string;
}

export const StatisticsCard: React.FC<StatisticsCardProps> = ({ label, metric, subtext }) => {
  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-soft">
      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">{label}</span>
      <p className="text-3xl font-extrabold text-renza-yellow-600 dark:text-renza-yellow-400 mt-2">{metric}</p>
      <p className="text-xs text-zinc-500 mt-1">{subtext}</p>
    </div>
  );
};
