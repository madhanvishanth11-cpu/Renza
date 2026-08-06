import { apiClient } from './client';
import { API_ENDPOINTS } from '../constants';
import { Listing, Category, Booking, User, Review } from '../types';
import mockData from '../data/mockData.json';

// Configurable API Helper Functions (Mock Fallback enabled)
export const authApi = {
  async login(email: string, password?: string) {
    return { token: 'mock-jwt-token-renza', user: mockData.users[1] };
  },
  async register(data: { name: string; email: string; role?: string }) {
    return { token: 'mock-jwt-token-renza', user: { ...data, id: 'user-new' } };
  },
  async verifyOtp(otp: string) {
    return { success: true, verified: true };
  },
};

export const productsApi = {
  async getProducts(params?: { category?: string; search?: string; maxPrice?: number }): Promise<Listing[]> {
    let items = (mockData.products as Listing[]) || [];
    if (params?.category && params.category !== 'All') {
      items = items.filter((item) => item.category === params.category);
    }
    if (params?.search) {
      const q = params.search.toLowerCase();
      items = items.filter((item) => item.title.toLowerCase().includes(q));
    }
    return items;
  },

  async getProductById(id: string): Promise<Listing | undefined> {
    return (mockData.products as Listing[]).find((item) => item.id === id);
  },

  async getCategories(): Promise<Category[]> {
    return (mockData.categories as Category[]) || [];
  },
};

export const bookingsApi = {
  async createBooking(booking: Partial<Booking>): Promise<Booking> {
    return {
      id: `bk-${Math.random().toString(36).substring(2, 7)}`,
      listingId: booking.listingId || 'item-1',
      title: booking.title || 'Sony FX3 Full-Frame Cinema Camera Package',
      startDate: booking.startDate || '2026-08-15',
      endDate: booking.endDate || '2026-08-18',
      totalPrice: booking.totalPrice || 478,
      status: 'Confirmed',
    };
  },

  async getUserBookings(): Promise<Booking[]> {
    return (mockData.bookings as Booking[]) || [];
  },
};

export const userApi = {
  async getProfile(): Promise<User> {
    return (mockData.users[1] as User) || {
      id: 'user-renter',
      name: 'Madhav Sharma',
      email: 'madhav@renza.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    };
  },

  async updateProfile(profileData: Partial<User>): Promise<User> {
    return { ...mockData.users[1], ...profileData } as User;
  },
};
