import React from 'react';
import { SearchInput } from '../common/SearchInput';
import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';
import { useMarketplace } from '../../context/MarketplaceContext';

export const SearchSection: React.FC = () => {
  const { searchQuery, setSearchQuery } = useMarketplace();

  return (
    <SectionWrapper paddingY="sm">
      <Container size="md">
        <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-soft flex flex-col sm:flex-row items-center gap-4">
          <SearchInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClear={() => setSearchQuery('')}
            placeholder="Search high-end cinema cameras, EVs, Vision Pro, drones, tools..."
          />
        </div>
      </Container>
    </SectionWrapper>
  );
};
