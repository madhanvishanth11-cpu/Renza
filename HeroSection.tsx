import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  ShieldCheck,
  Zap,
  Star,
  ArrowRight,
  Sparkles,
  Grid,
  Users
} from 'lucide-react';
import { Button } from '../common/Button';
import hero3dImage from '../../assets/hero_3d.jpg';

interface HeroSectionProps {
  onSearchClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearchClick }) => {
  const customerAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
  ];

  return (
    <div className="relative pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Background Gradients & Floating Shapes */}
      <div className="absolute top-10 left-10 w-[500px] h-[350px] bg-renza-yellow-400/15 dark:bg-renza-yellow-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-amber-400/10 dark:bg-amber-400/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Floating Animated Geometric Shapes */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-1/3 w-16 h-16 rounded-2xl bg-renza-yellow-400/10 border border-renza-yellow-400/20 pointer-events-none hidden xl:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-amber-400/10 border border-amber-400/20 pointer-events-none hidden xl:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT SIDE ================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-renza-yellow-100 dark:bg-renza-yellow-950/40 border border-renza-yellow-300/60 dark:border-renza-yellow-800/60 text-xs font-bold text-zinc-900 dark:text-renza-yellow-300 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-renza-yellow-500 animate-pulse" />
              The Next-Gen Rental Marketplace
              <Sparkles className="w-3.5 h-3.5 text-renza-yellow-600 dark:text-renza-yellow-400" />
            </motion.div>

            {/* Large Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-6xl font-heading font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1]"
            >
              Access Premium Gear.{' '}
              <span className="bg-gradient-to-r from-renza-yellow-500 via-amber-400 to-yellow-600 bg-clip-text text-transparent underline decoration-renza-yellow-400/40">
                Without Owning It.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed max-w-xl"
            >
              Rent high-end cinema cameras, electric vehicles, Apple Vision Pro, camping setups & heavy tools near you. Insured up to $50,000 with zero-deposit verification.
            </motion.p>

            {/* Search Bar Widget */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2"
            >
              <div
                onClick={onSearchClick}
                className="p-3 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-zinc-200/90 dark:border-zinc-800 shadow-soft-lg hover:shadow-yellow-glow hover:border-renza-yellow-400 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 px-3 w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-2xl bg-renza-yellow-400/20 text-renza-yellow-600 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Find Item</span>
                    <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">Sony FX3, Taycan, Vision Pro...</span>
                  </div>
                </div>

                <div className="hidden sm:block h-8 w-px bg-zinc-200 dark:bg-zinc-800" />

                <div className="flex items-center gap-3 px-3 w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-renza-yellow-500" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">City</span>
                    <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">San Francisco, CA</span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto px-6"
                  onClick={onSearchClick}
                >
                  Search Gear
                </Button>
              </div>
            </motion.div>

            {/* Buttons: Browse Categories & Start Renting */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link to="/products">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Start Renting Now
                </Button>
              </Link>

              <Link to="/categories">
                <Button
                  variant="outline"
                  size="lg"
                  leftIcon={<Grid className="w-4 h-4 text-renza-yellow-500" />}
                >
                  Browse Categories
                </Button>
              </Link>
            </motion.div>

            {/* Booking Statistics & Happy Customer Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-4"
            >
              {/* Happy Customer Counter Avatar Stack */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  {customerAvatars.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt="Customer Avatar"
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-zinc-900 object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-renza-yellow-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-renza-yellow-400" />
                    ))}
                    <span className="font-bold text-zinc-900 dark:text-white ml-1">4.98 Rating</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 font-medium">Joined by 50,000+ creators & renters worldwide</p>
                </div>
              </div>

              {/* Statistics Counters */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">10,000+</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Listed Equipment</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-renza-yellow-600 dark:text-renza-yellow-400">50,000+</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Happy Renters</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">99.8%</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">On-Time Return Rate</p>
                </div>
              </div>

            </motion.div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Modern 3D Rental Illustration Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl bg-zinc-900 group"
            >
              <img
                src={hero3dImage}
                alt="Renza 3D Rental Equipment Illustration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
            </motion.div>

            {/* FLOATING CARD 1: Live Rental Notification */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 shadow-soft-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-renza-yellow-400 text-black flex items-center justify-center font-bold text-xs shrink-0 shadow-yellow-glow">
                RENTED
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                  Just Rented
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </p>
                <p className="text-[11px] text-zinc-500">Sony FX3 Cinema Rig • $145/day</p>
              </div>
            </motion.div>

            {/* FLOATING CARD 2: Verified Rating */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -right-6 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 shadow-soft-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 fill-renza-yellow-400 text-renza-yellow-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1">
                  4.99 ★ Verified Rating
                </p>
                <p className="text-[11px] text-zinc-500">50,000+ 5-Star Reviews</p>
              </div>
            </motion.div>

            {/* FLOATING CARD 3: $50,000 Protection Badge */}
            <motion.div
              animate={{ x: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-10 -left-8 z-20 hidden lg:flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-black/85 text-white backdrop-blur-xl border border-zinc-800 shadow-xl"
            >
              <ShieldCheck className="w-4 h-4 text-renza-yellow-400 shrink-0" />
              <span className="text-xs font-bold">$50,000 Protection Guarantee Active</span>
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  );
};
