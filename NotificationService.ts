import mockData from '../../data/mockData.json';

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
}

export const NotificationService = {
  async getNotifications(): Promise<NotificationItem[]> {
    return (mockData.notifications as NotificationItem[]) || [];
  },

  async markAsRead(id: string): Promise<{ success: boolean }> {
    return { success: true };
  },
};
