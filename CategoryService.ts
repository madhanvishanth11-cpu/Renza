import type { Category } from '../../types';
import mockData from '../../data/mockData.json';

export const CategoryService = {
  async getCategories(): Promise<Category[]> {
    return (mockData.categories as Category[]) || [];
  },

  async getCategoryById(id: string): Promise<Category | undefined> {
    return (mockData.categories as Category[]).find((c) => c.id === id);
  },
};
