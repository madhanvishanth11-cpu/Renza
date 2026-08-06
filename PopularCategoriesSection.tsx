import React from 'react';
import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';
import { CategoryCard } from '../listing/CategoryCard';
import { MOCK_CATEGORIES } from '../../data/mockData';
import { useMarketplace } from '../../context/MarketplaceContext';
import { useNavigate } from 'react-router-dom';

export const PopularCategoriesSection: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useMarketplace();
  const navigate = useNavigate();

  return (
    <SectionWrapper paddingY="md">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-renza-yellow-600 dark:text-renza-yellow-400 uppercase tracking-wider">
              Marketplace Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-zinc-900 dark:text-white mt-1">
              Popular Categories
            </h2>
          </div>
          <span className="text-xs font-semibold text-zinc-400">7 Categories</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              isSelected={selectedCategory === cat.name}
              onClick={() => {
                setSelectedCategory(cat.name);
                navigate('/products');
              }}
            />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
