import type { User } from '../../types';
import mockData from '../../data/mockData.json';

export const UserService = {
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

  async uploadAvatar(file: File): Promise<{ url: string }> {
    return { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' };
  },
};
