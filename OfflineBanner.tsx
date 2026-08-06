import React, { useState, useEffect } from 'react';
import { WifiOff, RefreshCw } from 'lucide-react';

export const OfflineBanner: React.FC = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-rose-600 text-white px-4 py-2 text-xs font-bold flex items-center justify-between shadow-lg animate-pulse">
      <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-center">
        <WifiOff className="w-4 h-4" />
        <span>Network Connection Lost. Working in offline mode.</span>
        <button
          onClick={() => window.location.reload()}
          className="ml-4 px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center gap-1 transition-colors"
        >
          <RefreshCw className="w-3 h-3" /> Retry Connection
        </button>
      </div>
    </div>
  );
};
