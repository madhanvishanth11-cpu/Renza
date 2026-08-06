import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Sun,
  Moon,
  PlusCircle,
  Heart,
  User,
  Menu,
  X,
  Bell,
  ChevronDown,
  Camera,
  Laptop,
  Car,
  Sparkles,
  Compass,
  Watch,
  Wrench,
  HelpCircle,
  Info,
  PhoneCall,
  Home,
  SlidersHorizontal,
  LogOut,
  Grid
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useMarketplace } from '../../context/MarketplaceContext';
import { Button } from '../common/Button';
import { AuthModal } from '../auth/AuthModal';

interface NavbarProps {
  onOpenFilter?: () => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFilter, onOpenSearch }) => {
  const { theme, toggleTheme } = useTheme();
  const { wishlist, setSelectedCategory } = useMarketplace();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllPopups = () => {
    setMobileMenuOpen(false);
    setCategoriesOpen(false);
    setNotificationsOpen(false);
    setProfileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const categoriesList = [
    { name: 'Cameras & Cinema', icon: <Camera className="w-4 h-4 text-renza-yellow-500" /> },
    { name: 'Tech & Gaming', icon: <Laptop className="w-4 h-4 text-purple-500" /> },
    { name: 'EVs & Vehicles', icon: <Car className="w-4 h-4 text-emerald-500" /> },
    { name: 'Drones & Aviation', icon: <Sparkles className="w-4 h-4 text-sky-500" /> },
    { name: 'Outdoor & Camping', icon: <Compass className="w-4 h-4 text-amber-500" /> },
    { name: 'Luxury & Fashion', icon: <Watch className="w-4 h-4 text-rose-500" /> },
    { name: 'Tools & Equipment', icon: <Wrench className="w-4 h-4 text-indigo-500" /> },
  ];

  const notificationsList = [
    { id: 1, title: 'Booking Approved', msg: 'Marcus accepted your Sony FX3 rental request.', time: '10m ago' },
    { id: 2, title: 'Host Earnings', msg: 'You received $280 for Cybertruck rental.', time: '2h ago' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-soft-lg py-3 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/80'
          : 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md py-4 border-b border-zinc-100 dark:border-zinc-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo Emblem */}
          <Link to="/" onClick={closeAllPopups} className="flex items-center gap-3 group shrink-0">
            <div className="px-3.5 py-1.5 rounded-2xl bg-black text-white flex items-center gap-2.5 shadow-md group-hover:scale-105 transition-transform duration-200 border border-zinc-800">
              <div className="w-6 h-6 rounded-lg bg-renza-yellow-400 text-black font-extrabold flex items-center justify-center text-sm shadow-sm">
                R
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Renza
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
            <Link
              to="/"
              className={`relative py-1 transition-colors ${
                isActive('/') ? 'text-renza-yellow-600 dark:text-renza-yellow-400 font-extrabold' : 'text-zinc-700 dark:text-zinc-300 hover:text-renza-yellow-600 dark:hover:text-renza-yellow-400'
              }`}
            >
              Home
              {isActive('/') && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-renza-yellow-400 rounded-full" />
              )}
            </Link>

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setCategoriesOpen(!categoriesOpen);
                  setNotificationsOpen(false);
                  setProfileMenuOpen(false);
                }}
                className="flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-renza-yellow-600 dark:hover:text-renza-yellow-400 transition-colors"
              >
                Categories
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${categoriesOpen ? 'rotate-180 text-renza-yellow-500' : ''}`} />
              </button>

              <AnimatePresence>
                {categoriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-3 w-64 p-3 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl z-50 grid grid-cols-1 gap-1"
                  >
                    <Link
                      to="/categories"
                      onClick={() => setCategoriesOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-2xl bg-renza-yellow-50 dark:bg-renza-yellow-950/40 text-xs font-bold text-renza-yellow-800 dark:text-renza-yellow-300"
                    >
                      <Grid className="w-4 h-4 text-renza-yellow-500" />
                      View All Categories
                    </Link>
                    {categoriesList.map((cat, idx) => (
                      <Link
                        key={idx}
                        to={`/products?category=${cat.name}`}
                        onClick={() => {
                          setSelectedCategory(cat.name);
                          setCategoriesOpen(false);
                        }}
                        className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors"
                      >
                        {cat.icon}
                        {cat.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#how-it-works" className="text-zinc-700 dark:text-zinc-300 hover:text-renza-yellow-600 dark:hover:text-renza-yellow-400 transition-colors">
              How it Works
            </a>

            <Link
              to="/list-item"
              className={`relative py-1 font-bold ${
                isActive('/list-item') ? 'text-renza-yellow-600 dark:text-renza-yellow-400 font-extrabold' : 'text-renza-yellow-600 dark:text-renza-yellow-400 hover:underline'
              }`}
            >
              Become an Owner
            </Link>

            <a href="#about" className="text-zinc-700 dark:text-zinc-300 hover:text-renza-yellow-600 dark:hover:text-renza-yellow-400 transition-colors">
              About
            </a>

            <a href="#contact" className="text-zinc-700 dark:text-zinc-300 hover:text-renza-yellow-600 dark:hover:text-renza-yellow-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Side Items */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
              title="Search Gear"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist Icon */}
            <Link
              to="/dashboard?section=wishlist"
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors relative"
              title="Saved Wishlist"
            >
              <Heart className="w-4 h-4 hover:text-rose-500" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white font-bold text-[10px] flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Notifications Trigger */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => {
                  setNotificationsOpen(!notificationsOpen);
                  setCategoriesOpen(false);
                  setProfileMenuOpen(false);
                }}
                className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors relative"
                title="Notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-renza-yellow-400 animate-ping" />
              </button>

              <AnimatePresence>
                {notificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-3 w-80 p-4 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl z-50"
                  >
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Notifications</h4>
                    <div className="space-y-2">
                      {notificationsList.map((n) => (
                        <div key={n.id} className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 text-xs">
                          <p className="font-bold text-zinc-900 dark:text-white flex items-center justify-between">
                            {n.title}
                            <span className="text-[10px] text-zinc-400 font-normal">{n.time}</span>
                          </p>
                          <p className="text-zinc-500 mt-0.5">{n.msg}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
              title="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-renza-yellow-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700" />
              )}
            </button>

            {/* Login & Register Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="primary" size="sm">
                  Register
                </Button>
              </Link>
            </div>

            {/* User Profile Avatar Menu */}
            <div className="relative">
              <button
                onClick={() => {
                  setProfileMenuOpen(!profileMenuOpen);
                  setCategoriesOpen(false);
                  setNotificationsOpen(false);
                }}
                className="w-9 h-9 rounded-full ring-2 ring-renza-yellow-400 overflow-hidden hover:scale-105 transition-transform shrink-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  alt="Madhav Sharma"
                  className="w-full h-full object-cover"
                />
              </button>

              <AnimatePresence>
                {profileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-3 w-56 p-2 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl z-50 text-xs font-semibold"
                  >
                    <div className="p-3 border-b border-zinc-100 dark:border-zinc-800">
                      <p className="font-bold text-zinc-900 dark:text-white">Madhav Sharma</p>
                      <p className="text-zinc-400 font-normal text-[11px]">madhav@renza.com</p>
                    </div>
                    <Link
                      to="/dashboard"
                      onClick={() => setProfileMenuOpen(false)}
                      className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      <User className="w-4 h-4 text-renza-yellow-500" />
                      Customer Dashboard
                    </Link>
                    <Link
                      to="/owner-dashboard"
                      onClick={() => setProfileMenuOpen(false)}
                      className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-500" />
                      Owner Dashboard
                    </Link>
                    <Link
                      to="/profile"
                      onClick={() => setProfileMenuOpen(false)}
                      className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      <User className="w-4 h-4 text-sky-500" />
                      Profile Settings
                    </Link>
                    <Link
                      to="/login"
                      onClick={() => setProfileMenuOpen(false)}
                      className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/40 text-rose-600 dark:text-rose-400"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Hamburger Drawer Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Hamburger Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl px-4 pt-3 pb-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="w-1/2">
                <Button variant="outline" size="sm" fullWidth>Login</Button>
              </Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="w-1/2">
                <Button variant="primary" size="sm" fullWidth>Register</Button>
              </Link>
            </div>

            <nav className="flex flex-col gap-1 text-sm font-semibold">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900">
                <Home className="w-4 h-4 text-renza-yellow-500" /> Home
              </Link>
              <Link to="/categories" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900">
                <Grid className="w-4 h-4 text-purple-500" /> Categories
              </Link>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900">
                <HelpCircle className="w-4 h-4 text-sky-500" /> How it Works
              </a>
              <Link to="/list-item" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-renza-yellow-50 dark:bg-renza-yellow-950/30 text-renza-yellow-600 font-bold">
                <PlusCircle className="w-4 h-4" /> Become an Owner
              </Link>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900">
                <Info className="w-4 h-4 text-emerald-500" /> About
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900">
                <PhoneCall className="w-4 h-4 text-amber-500" /> Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <AuthModal isOpen={authModalOpen} initialMode={authMode} onClose={() => setAuthModalOpen(false)} />
    </header>
  );
};
