import { apiClient } from '../client';
import { API_ENDPOINTS } from '../../constants';
import type { Listing } from '../../types';
import mockData from '../../data/mockData.json';

export interface ProductFilterParams {
  category?: string;
  search?: string;
  maxPrice?: number;
  location?: string;
}

export const ProductService = {
  async getProducts(params?: ProductFilterParams): Promise<Listing[]> {
    try {
      let items = (mockData.products as Listing[]) || [];
      if (params?.category && params.category !== 'All') {
        items = items.filter((item) => item.category === params.category);
      }
      if (params?.search && params.search.trim() !== '') {
        const q = params.search.toLowerCase();
        items = items.filter(
          (item) =>
            item.title.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q) ||
            item.location.toLowerCase().includes(q)
        );
      }
      if (params?.maxPrice) {
        items = items.filter((item) => item.pricePerDay <= params.maxPrice!);
      }
      return items;
    } catch (error) {
      console.error('ProductService.getProducts error:', error);
      throw error;
    }
  },

  async getProductById(id: string): Promise<Listing | undefined> {
    try {
      return (mockData.products as Listing[]).find((item) => item.id === id);
    } catch (error) {
      console.error('ProductService.getProductById error:', error);
      throw error;
    }
  },

  async createProduct(productData: Partial<Listing>): Promise<Listing> {
    const newProduct: Listing = {
      id: `item-${Date.now()}`,
      title: productData.title || 'New Equipment Package',
      description: productData.description || 'High quality equipment package.',
      pricePerDay: productData.pricePerDay || 100,
      securityDeposit: productData.securityDeposit || 150,
      category: productData.category || 'Cameras & Cinema',
      location: productData.location || 'San Francisco, CA',
      rating: 5.0,
      reviewsCount: 1,
      image: productData.image || 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [productData.image || 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      host: {
        id: 'user-renter',
        name: 'Madhav Sharma',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        isSuperhost: true,
      },
      isInstantBook: true,
      isTrending: true,
    };
    return newProduct;
  },
};
