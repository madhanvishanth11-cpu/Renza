import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';
import { SectionHeader } from '../common/SectionHeader';
import { ProductCard } from '../listing/ProductCard';
import { QuickViewModal } from '../listing/QuickViewModal';
import { useMarketplace } from '../../context/MarketplaceContext';
import type { Listing } from '../../types';

export const FeaturedRentalsSection: React.FC = () => {
  const { listings } = useMarketplace();
  const [quickViewListing, setQuickViewListing] = useState<Listing | null>(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const featured = listings.filter((l) => l.isTrending).slice(0, 6);

  const handleQuickView = (listing: Listing) => {
    setQuickViewListing(listing);
    setQuickViewOpen(true);
  };

  return (
    <SectionWrapper paddingY="md" background="zinc">
      <Container size="full">
        <SectionHeader
          badge="Trending Equipment"
          title="Top Rated Gear Available Today"
          subtitle="Explore high-demand cameras, vehicles, Vision Pro headsets, and drones verified for instant booking."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {featured.map((listing) => (
            <ProductCard key={listing.id} listing={listing} onQuickView={handleQuickView} />
          ))}
        </div>
      </Container>

      <QuickViewModal
        listing={quickViewListing}
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </SectionWrapper>
  );
};
