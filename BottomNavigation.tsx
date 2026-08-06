import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Grid, Heart, User, Sparkles } from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';

export const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const { wishlist } = useMarketplace();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { label: 'Explore', path: '/products', icon: <Search className="w-5 h-5" /> },
    { label: 'Categories', path: '/categories', icon: <Grid className="w-5 h-5" /> },
    { label: 'Wishlist', path: '/dashboard?section=wishlist', icon: <Heart className="w-5 h-5" />, badge: wishlist.length },
    { label: 'Profile', path: '/profile', icon: <User className="w-5 h-5" /> },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-200 dark:border-zinc-800 px-2 py-1.5 shadow-2xl">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const selected = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-2xl transition-colors relative ${
                selected
                  ? 'text-renza-yellow-600 dark:text-renza-yellow-400 font-extrabold'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white font-medium'
              }`}
            >
              <div className="relative">
                {item.icon}
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-rose-500 text-white font-bold text-[9px] flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
