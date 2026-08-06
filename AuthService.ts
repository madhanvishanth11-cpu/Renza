import { apiClient } from '../client';
import { API_ENDPOINTS, STORAGE_KEYS } from '../../constants';
import type { User } from '../../types';
import mockData from '../../data/mockData.json';

export interface LoginCredentials {
  email: string;
  password?: string;
  role?: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password?: string;
  role?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export const AuthService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const user = (mockData.users[1] as unknown) as User;
      const token = 'renza_jwt_token_simulated_2026';
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
      return { token, user };
    } catch (error) {
      console.error('AuthService.login error:', error);
      throw error;
    }
  },

  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      const newUser: User = {
        id: `user-${Date.now()}`,
        name: data.name,
        email: data.email,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        isVerified: true,
      };
      const token = 'renza_jwt_token_simulated_2026';
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
      return { token, user: newUser };
    } catch (error) {
      console.error('AuthService.register error:', error);
      throw error;
    }
  },

  async logout(): Promise<void> {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  async verifyOtp(otp: string): Promise<{ success: boolean }> {
    return { success: otp === '123456' || otp.length === 6 };
  },

  async forgotPassword(email: string): Promise<{ success: boolean }> {
    return { success: true };
  },
};
