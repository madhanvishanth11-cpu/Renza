import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Listing, Booking, ToastMessage } from '../types';
import { MOCK_LISTINGS } from '../data/mockData';

interface MarketplaceContextType {
  listings: Listing[];
  wishlist: Listing[];
  selectedCategory: string;
  searchQuery: string;
  toasts: ToastMessage[];
  setSelectedCategory: (cat: string) => void;
  setSearchQuery: (query: string) => void;
  toggleWishlist: (listing: Listing) => void;
  isWishlisted: (id: string) => boolean;
  addToast: (message: string, type?: ToastMessage['type']) => void;
  removeToast: (id: string) => void;
}

const MarketplaceContext = createContext<MarketplaceContextType | undefined>(undefined);

export const MarketplaceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [listings] = useState<Listing[]>(MOCK_LISTINGS);
  const [wishlist, setWishlist] = useState<Listing[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const toggleWishlist = (listing: Listing) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === listing.id);
      if (exists) {
        addToast(`Removed ${listing.title} from Wishlist`, 'info');
        return prev.filter((item) => item.id !== listing.id);
      } else {
        addToast(`Saved ${listing.title} to Wishlist`, 'success');
        return [...prev, listing];
      }
    });
  };

  const isWishlisted = (id: string) => wishlist.some((item) => item.id === id);

  const addToast = (message: string, type: ToastMessage['type'] = 'info') => {
    const id = `toast-${Date.now()}`;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <MarketplaceContext.Provider
      value={{
        listings,
        wishlist,
        selectedCategory,
        searchQuery,
        toasts,
        setSelectedCategory,
        setSearchQuery,
        toggleWishlist,
        isWishlisted,
        addToast,
        removeToast,
      }}
    >
      {children}
    </MarketplaceContext.Provider>
  );
};

export const useMarketplace = () => {
  const context = useContext(MarketplaceContext);
  if (!context) {
    throw new Error('useMarketplace must be used within a MarketplaceProvider');
  }
  return context;
};
