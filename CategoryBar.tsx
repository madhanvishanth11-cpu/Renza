import React from 'react';
import { Camera, Laptop, Car, Sparkles, Compass, Watch, Wrench, Grid } from 'lucide-react';
import { MOCK_CATEGORIES } from '../../data/mockData';
import { useMarketplace } from '../../context/MarketplaceContext';

export const CategoryBar: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useMarketplace();

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Cameras & Cinema': return <Camera className="w-4 h-4" />;
      case 'Tech & Gaming': return <Laptop className="w-4 h-4" />;
      case 'EVs & Vehicles': return <Car className="w-4 h-4" />;
      case 'Drones & Aviation': return <Sparkles className="w-4 h-4" />;
      case 'Outdoor & Camping': return <Compass className="w-4 h-4" />;
      case 'Luxury & Fashion': return <Watch className="w-4 h-4" />;
      case 'Tools & Equipment': return <Wrench className="w-4 h-4" />;
      default: return <Grid className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-[73px] z-40 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {/* All Category Pill */}
          <button
            onClick={() => setSelectedCategory('All')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'All'
                ? 'bg-renza-yellow-400 text-black shadow-yellow-glow font-bold'
                : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
            }`}
          >
            <Grid className="w-4 h-4" />
            All Gear
          </button>

          {MOCK_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-renza-yellow-400 text-black shadow-yellow-glow font-bold'
                    : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                {getCategoryIcon(cat.name)}
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
