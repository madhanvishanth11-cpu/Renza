import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { Container } from '../layout/Container';
import { useMarketplace } from '../../context/MarketplaceContext';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const { addToast } = useMarketplace();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      addToast('Subscribed! Check your inbox for $20 off your first rental.', 'success');
      setEmail('');
    }
  };

  return (
    <div className="py-16">
      <Container size="md">
        <div className="p-8 sm:p-12 rounded-3xl bg-renza-yellow-400 text-black shadow-yellow-glow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-md">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Get $20 Off Your First Rental
            </h3>
            <p className="text-sm font-medium text-black/80">
              Subscribe to the Renza Insider newsletter for exclusive gear drops, new categories, and promo codes.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:w-72">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white text-zinc-900 placeholder-zinc-400 text-sm font-semibold focus:outline-none shadow-md"
              />
              <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
            </div>

            <Button
              variant="dark"
              size="md"
              type="submit"
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Claim $20 Discount
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};
