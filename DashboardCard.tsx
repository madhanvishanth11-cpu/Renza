import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon?: React.ReactNode;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  change,
  isPositive = true,
  icon,
}) => {
  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-soft flex items-center justify-between">
      <div>
        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">{title}</span>
        <p className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-1">{value}</p>
        {change && (
          <span className={`text-[11px] font-bold ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
            {change}
          </span>
        )}
      </div>
      {icon && (
        <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-renza-yellow-500 flex items-center justify-center shrink-0">
          {icon}
        </div>
      )}
    </div>
  );
};
