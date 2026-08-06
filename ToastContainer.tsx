import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useMarketplace();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="pointer-events-auto flex items-center justify-between gap-3 p-4 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-soft-lg border border-zinc-800 dark:border-zinc-200"
          >
            <div className="flex items-center gap-3">
              {toast.type === 'success' && (
                <CheckCircle2 className="w-5 h-5 text-renza-yellow-400 dark:text-renza-yellow-600 shrink-0" />
              )}
              {toast.type === 'info' && (
                <Info className="w-5 h-5 text-sky-400 shrink-0" />
              )}
              {toast.type === 'error' && (
                <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
              )}
              <p className="text-xs font-medium">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 text-zinc-400"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
