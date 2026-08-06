import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BottomNavigation } from './BottomNavigation';
import { OfflineBanner } from '../common/OfflineBanner';
import { SessionExpiredModal } from '../auth/SessionExpiredModal';
import { FilterDrawer } from '../listing/FilterDrawer';
import { AdvancedSearchModal } from '../search/AdvancedSearchModal';
import { PageTransition } from './PageTransition';
import { useAuth } from '../../context/AuthContext';

export const MainLayout: React.FC = () => {
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const { sessionExpired, closeSessionExpiredModal } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-renza-yellow-400 selection:text-black relative">
      
      {/* Offline Connectivity Banner */}
      <OfflineBanner />

      {/* Sticky Header Navbar */}
      <Navbar
        onOpenFilter={() => setFilterDrawerOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Page Outlet with Transitions */}
      <main className="flex-grow pb-16 lg:pb-0">
        <PageTransition>
          <Outlet context={{ openFilter: () => setFilterDrawerOpen(true), openSearch: () => setSearchModalOpen(true) }} />
        </PageTransition>
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation Bar */}
      <BottomNavigation />

      {/* Global Filter Drawer Modal */}
      <FilterDrawer
        isOpen={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
      />

      {/* Global Advanced Search Modal */}
      <AdvancedSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />

      {/* Session Expired Modal */}
      <SessionExpiredModal
        isOpen={sessionExpired}
        onClose={closeSessionExpiredModal}
      />
    </div>
  );
};
