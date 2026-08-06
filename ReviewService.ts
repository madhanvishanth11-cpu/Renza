import type { Review } from '../../types';
import mockData from '../../data/mockData.json';

export const ReviewService = {
  async getProductReviews(productId: string): Promise<Review[]> {
    return (mockData.reviews as Review[]) || [];
  },

  async createReview(productId: string, review: { rating: number; comment: string }): Promise<Review> {
    const newReview: Review = {
      id: `rev-${Date.now()}`,
      userName: 'Madhav Sharma',
      userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      rating: review.rating,
      date: 'Just now',
      comment: review.comment,
    };
    return newReview;
  },
};
