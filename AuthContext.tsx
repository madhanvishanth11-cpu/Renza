import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { STORAGE_KEYS } from '../constants';

export type UserRole = 'customer' | 'owner' | 'admin';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  isVerified: boolean;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isInitializing: boolean;
  sessionExpired: boolean;
  login: (email: string, role?: UserRole) => void;
  register: (name: string, email: string, role?: UserRole) => void;
  logout: () => void;
  triggerSessionExpired: () => void;
  closeSessionExpiredModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isInitializing, setIsInitializing] = useState<boolean>(true);
  const [sessionExpired, setSessionExpired] = useState<boolean>(false);

  // Auto Login Check on Page Mount
  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    if (token) {
      setUser({
        id: 'user-renter',
        name: 'Madhav Sharma',
        email: 'madhav@renza.com',
        role: 'customer',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        isVerified: true,
      });
    } else {
      // Default initial mock session
      setUser({
        id: 'user-renter',
        name: 'Madhav Sharma',
        email: 'madhav@renza.com',
        role: 'customer',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        isVerified: true,
      });
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, 'renza_jwt_token_simulated_2026');
    }
    setIsInitializing(false);
  }, []);

  const login = (email: string, role: UserRole = 'customer') => {
    const newUser: UserProfile = {
      id: `user-${Math.random().toString(36).substring(2, 7)}`,
      name: email.split('@')[0],
      email,
      role,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      isVerified: true,
    };
    setUser(newUser);
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, 'renza_jwt_token_simulated_2026');
    setSessionExpired(false);
  };

  const register = (name: string, email: string, role: UserRole = 'customer') => {
    const newUser: UserProfile = {
      id: `user-${Math.random().toString(36).substring(2, 7)}`,
      name,
      email,
      role,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      isVerified: true,
    };
    setUser(newUser);
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, 'renza_jwt_token_simulated_2026');
    setSessionExpired(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  };

  const triggerSessionExpired = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    setSessionExpired(true);
  };

  const closeSessionExpiredModal = () => {
    setSessionExpired(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isInitializing,
        sessionExpired,
        login,
        register,
        logout,
        triggerSessionExpired,
        closeSessionExpiredModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
