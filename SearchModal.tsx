import React from 'react';
import { AdvancedSearchModal } from './AdvancedSearchModal';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  return <AdvancedSearchModal isOpen={isOpen} onClose={onClose} />;
};
