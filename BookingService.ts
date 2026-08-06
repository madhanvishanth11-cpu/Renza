import { apiClient } from '../client';
import { API_ENDPOINTS } from '../../constants';
import type { Booking } from '../../types';
import mockData from '../../data/mockData.json';

export const BookingService = {
  async createBooking(bookingData: Partial<Booking>): Promise<Booking> {
    try {
      const newBooking: Booking = {
        id: `bk-${Math.random().toString(36).substring(2, 7)}`,
        listingId: bookingData.listingId || 'item-1',
        title: bookingData.title || 'Sony FX3 Cinema Camera Package',
        startDate: bookingData.startDate || '2026-08-15',
        endDate: bookingData.endDate || '2026-08-18',
        totalPrice: bookingData.totalPrice || 478,
        status: 'Confirmed',
      };
      return newBooking;
    } catch (error) {
      console.error('BookingService.createBooking error:', error);
      throw error;
    }
  },

  async getUserBookings(): Promise<Booking[]> {
    return (mockData.bookings as Booking[]) || [];
  },

  async getBookingById(id: string): Promise<Booking | undefined> {
    return (mockData.bookings as Booking[]).find((b) => b.id === id);
  },

  async cancelBooking(id: string): Promise<{ success: boolean }> {
    return { success: true };
  },
};
