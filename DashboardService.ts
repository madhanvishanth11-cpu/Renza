export interface CustomerStats {
  activeRentalsCount: number;
  walletBalance: number;
  rewardPoints: number;
  totalSpent: number;
}

export interface OwnerAnalytics {
  totalProducts: number;
  activeRentals: number;
  monthlyRevenue: number;
  totalBookings: number;
  customerRating: number;
}

export const DashboardService = {
  async getCustomerStats(): Promise<CustomerStats> {
    return {
      activeRentalsCount: 2,
      walletBalance: 240.0,
      rewardPoints: 1450,
      totalSpent: 1280.0,
    };
  },

  async getOwnerAnalytics(): Promise<OwnerAnalytics> {
    return {
      totalProducts: 12,
      activeRentals: 8,
      monthlyRevenue: 4280.0,
      totalBookings: 34,
      customerRating: 4.98,
    };
  },

  async getRevenueGraphData(): Promise<{ month: string; revenue: number }[]> {
    return [
      { month: 'Jan', revenue: 1200 },
      { month: 'Feb', revenue: 1900 },
      { month: 'Mar', revenue: 2400 },
      { month: 'Apr', revenue: 3100 },
      { month: 'May', revenue: 3800 },
      { month: 'Jun', revenue: 4280 },
    ];
  },
};
