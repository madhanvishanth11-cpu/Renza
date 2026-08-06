import React from 'react';

interface CalendarWidgetProps {
  selectedDate?: string;
  onSelectDate?: (date: string) => void;
}

export const CalendarWidget: React.FC<CalendarWidgetProps> = ({ selectedDate, onSelectDate }) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="p-4 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-soft">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-sm text-zinc-900 dark:text-white">August 2026</h4>
        <span className="text-xs text-renza-yellow-600 dark:text-renza-yellow-400 font-bold">14 Available Days</span>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
          <span key={d} className="font-bold text-zinc-400 py-1">{d}</span>
        ))}
        {days.map((day) => {
          const isAvailable = day >= 10 && day <= 24;
          return (
            <button
              key={day}
              onClick={() => onSelectDate?.(`2026-08-${day < 10 ? '0' + day : day}`)}
              className={`py-2 rounded-xl font-bold transition-all ${
                isAvailable
                  ? 'bg-renza-yellow-100 dark:bg-renza-yellow-950/40 text-renza-yellow-900 dark:text-renza-yellow-300 hover:bg-renza-yellow-400 hover:text-black'
                  : 'text-zinc-300 dark:text-zinc-700 cursor-not-allowed'
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};
