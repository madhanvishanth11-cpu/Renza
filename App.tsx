import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from './context/ThemeContext';
import { MarketplaceProvider } from './context/MarketplaceContext';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { MainLayout } from './components/layout/MainLayout';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Loader } from './components/common/Loader';
import { Home } from './pages/Home';
import { ToastContainer } from './components/common/ToastContainer';

// Route-based Code Splitting via React.lazy
const CategoriesPage = lazy(() => import('./pages/CategoriesPage').then(m => ({ default: m.CategoriesPage })));
const ProductListingPage = lazy(() => import('./pages/ProductListingPage').then(m => ({ default: m.ProductListingPage })));
const ListingDetail = lazy(() => import('./pages/ListingDetail').then(m => ({ default: m.ListingDetail })));
const BookingFlow = lazy(() => import('./pages/BookingFlow').then(m => ({ default: m.BookingFlow })));
const ListAnItem = lazy(() => import('./pages/ListAnItem').then(m => ({ default: m.ListAnItem })));
const Dashboard = lazy(() => import('./pages/Dashboard').then(m => ({ default: m.Dashboard })));
const OwnerDashboard = lazy(() => import('./pages/OwnerDashboard').then(m => ({ default: m.OwnerDashboard })));
const Login = lazy(() => import('./pages/Login').then(m => ({ default: m.Login })));
const Register = lazy(() => import('./pages/Register').then(m => ({ default: m.Register })));
const ProfilePage = lazy(() => import('./pages/ProfilePage').then(m => ({ default: m.ProfilePage })));
const SettingsPage = lazy(() => import('./pages/SettingsPage').then(m => ({ default: m.SettingsPage })));
const SupportPage = lazy(() => import('./pages/SupportPage').then(m => ({ default: m.SupportPage })));
const NotificationsPage = lazy(() => import('./pages/NotificationsPage').then(m => ({ default: m.NotificationsPage })));
const DesignSystemPage = lazy(() => import('./pages/DesignSystemPage').then(m => ({ default: m.DesignSystemPage })));
const ServerErrorPage = lazy(() => import('./pages/ServerErrorPage').then(m => ({ default: m.ServerErrorPage })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Create TanStack Query Client for API caching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

// Scroll to top automatically on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center p-8">
    <Loader size="lg" text="Loading Renza experience..." />
  </div>
);

export function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <AuthProvider>
              <MarketplaceProvider>
                <Router>
                  <ScrollToTop />
                  <Suspense fallback={<PageFallback />}>
                    <Routes>
                      <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="categories" element={<CategoriesPage />} />
                        <Route path="products" element={<ProductListingPage />} />
                        <Route path="listing/:id" element={<ListingDetail />} />
                        <Route path="booking/:id" element={<BookingFlow />} />
                        <Route path="checkout/:id" element={<BookingFlow />} />
                        
                        {/* Protected Host & Customer Routes */}
                        <Route path="list-item" element={<ProtectedRoute><ListAnItem /></ProtectedRoute>} />
                        <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                        <Route path="owner-dashboard" element={<ProtectedRoute allowedRoles={['owner', 'admin']}><OwnerDashboard /></ProtectedRoute>} />
                        <Route path="profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                        <Route path="settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
                        
                        {/* Auth & Public Pages */}
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="support" element={<SupportPage />} />
                        <Route path="notifications" element={<NotificationsPage />} />
                        <Route path="design-system" element={<DesignSystemPage />} />
                        <Route path="500" element={<ServerErrorPage />} />
                        <Route path="*" element={<NotFound />} />
                      </Route>
                    </Routes>
                  </Suspense>
                  <ToastContainer />
                </Router>
              </MarketplaceProvider>
            </AuthProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
