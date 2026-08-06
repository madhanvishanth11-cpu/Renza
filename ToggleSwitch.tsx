import React from 'react';
import { motion } from 'framer-motion';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange, label }) => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer select-none">
      <div
        onClick={() => onChange(!checked)}
        className={`w-12 h-6 rounded-full p-1 transition-colors ${
          checked ? 'bg-renza-yellow-400' : 'bg-zinc-300 dark:bg-zinc-700'
        }`}
      >
        <motion.div
          animate={{ x: checked ? 24 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="w-4 h-4 rounded-full bg-black shadow-sm"
        />
      </div>
      {label && <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{label}</span>}
    </label>
  );
};
