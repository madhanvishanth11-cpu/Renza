import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, id, className, ...props }) => {
  return (
    <label className="inline-flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-zinc-800 dark:text-zinc-200 select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 rounded text-renza-yellow-400 focus:ring-renza-yellow-400 border-zinc-300 cursor-pointer"
        {...props}
      />
      <span>{label}</span>
    </label>
  );
};
