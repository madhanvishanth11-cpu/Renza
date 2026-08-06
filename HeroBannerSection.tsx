import React from 'react';
import { HeroSection } from '../listing/HeroSection';

interface HeroBannerSectionProps {
  onSearchClick: () => void;
}

export const HeroBannerSection: React.FC<HeroBannerSectionProps> = ({ onSearchClick }) => {
  return <HeroSection onSearchClick={onSearchClick} />;
};
