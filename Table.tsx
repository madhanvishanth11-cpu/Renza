import React from 'react';

export interface Column<T> {
  header: string;
  accessor: (item: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (item: T) => string;
}

export function Table<T>({ columns, data, keyExtractor }: TableProps<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-soft">
      <table className="w-full text-left text-xs">
        <thead>
          <tr className="border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/40 text-zinc-400 font-bold uppercase tracking-wider">
            {columns.map((col, idx) => (
              <th key={idx} className="p-4">{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 font-medium text-zinc-800 dark:text-zinc-200">
          {data.map((item) => (
            <tr key={keyExtractor(item)} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/50 transition-colors">
              {columns.map((col, idx) => (
                <td key={idx} className="p-4">{col.accessor(item)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
