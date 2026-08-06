import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productsApi, bookingsApi, userApi } from '../api/endpoints';
import { Listing, Booking, User } from '../types';

// Custom TanStack Query Hook for Products
export const useProductsQuery = (category?: string, search?: string) => {
  return useQuery({
    queryKey: ['products', category, search],
    queryFn: () => productsApi.getProducts({ category, search }),
  });
};

// Custom TanStack Query Hook for Product Detail
export const useProductDetailQuery = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => productsApi.getProductById(id),
    enabled: !!id,
  });
};

// Custom TanStack Query Hook for User Bookings
export const useBookingsQuery = () => {
  return useQuery({
    queryKey: ['bookings'],
    queryFn: () => bookingsApi.getUserBookings(),
  });
};

// Custom TanStack Mutation Hook for Booking Creation
export const useCreateBookingMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (booking: Partial<Booking>) => bookingsApi.createBooking(booking),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
  });
};
