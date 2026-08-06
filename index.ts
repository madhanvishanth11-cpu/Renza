// Configurable Application & API Endpoint Constants

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.renza.com/v1';

export const API_ENDPOINTS = {
  // Auth Endpoints
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    OTP_VERIFY: '/auth/verify-otp',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  // Product & Category Endpoints
  PRODUCTS: {
    LIST: '/products',
    DETAIL: (id: string) => `/products/${id}`,
    CATEGORIES: '/categories',
    SEARCH: '/products/search',
  },
  // Booking Endpoints
  BOOKINGS: {
    CREATE: '/bookings',
    USER_BOOKINGS: '/bookings/user',
    HOST_BOOKINGS: '/bookings/host',
    DETAIL: (id: string) => `/bookings/${id}`,
  },
  // User Profile & Owner Dashboard Endpoints
  USER: {
    PROFILE: '/user/profile',
    WISHLIST: '/user/wishlist',
    WALLET: '/user/wallet',
    NOTIFICATIONS: '/user/notifications',
  },
  HOST: {
    ANALYTICS: '/host/analytics',
    REVENUE: '/host/revenue',
    INVENTORY: '/host/inventory',
  },
};

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'renza_auth_token',
  THEME: 'renza_theme',
  SAVED_WISHLIST: 'renza_wishlist',
};
