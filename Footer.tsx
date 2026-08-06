import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';

export const Footer: React.FC = () => {
  const { addToast } = useMarketplace();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    addToast('Subscribed! $20 discount code sent to your email.', 'success');
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-12 border-t border-zinc-800/80 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-renza-yellow-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* $50,000 Host Protection Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 shadow-soft-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-renza-yellow-400 text-black font-extrabold shadow-yellow-glow shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg text-white">
                $50,000 Host & Renter Protection Coverage
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Every rental listed on Renza is automatically insured against accidental damage, loss, or theft.
              </p>
            </div>
          </div>
          <Link to="/support">
            <button className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold text-white border border-white/20 transition-all shrink-0">
              Read Protection Guarantee
            </button>
          </Link>
        </div>

        {/* Main Footer Links Grid (5 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* 1. Company Information & Brand Logo */}
          <div className="lg:col-span-1 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="px-3.5 py-1.5 rounded-2xl bg-black text-white flex items-center gap-2 border border-zinc-800 shadow-md group-hover:scale-105 transition-transform">
                <div className="w-6 h-6 rounded-lg bg-renza-yellow-400 text-black font-extrabold flex items-center justify-center text-sm shadow-sm">
                  R
                </div>
                <span className="font-heading font-bold text-xl tracking-tight text-white">
                  Renza
                </span>
              </div>
            </Link>

            <p className="text-xs text-zinc-400 leading-relaxed">
              The premier peer-to-peer rental marketplace for cinema gear, EVs, Vision Pro, drones, outdoor gear, and heavy tools.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2 pt-2">
              {[
                { icon: <Twitter className="w-4 h-4" />, href: '#' },
                { icon: <Instagram className="w-4 h-4" />, href: '#' },
                { icon: <Linkedin className="w-4 h-4" />, href: '#' },
                { icon: <Github className="w-4 h-4" />, href: '#' },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-renza-yellow-400 hover:border-renza-yellow-400 hover:scale-110 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs text-zinc-300 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><Link to="/" className="hover:text-renza-yellow-400 transition-colors">Home Marketplace</Link></li>
              <li><Link to="/products" className="hover:text-renza-yellow-400 transition-colors">Explore All Gear</Link></li>
              <li><a href="#how-it-works" className="hover:text-renza-yellow-400 transition-colors">How it Works</a></li>
              <li><Link to="/list-item" className="hover:text-renza-yellow-400 transition-colors text-renza-yellow-400 font-bold">Become an Owner</Link></li>
              <li><Link to="/design-system" className="hover:text-renza-yellow-400 transition-colors">Design System</Link></li>
            </ul>
          </div>

          {/* 3. Categories */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs text-zinc-300 uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><Link to="/products?category=Cameras%20%26%20Cinema" className="hover:text-renza-yellow-400 transition-colors">Cameras & Cinema</Link></li>
              <li><Link to="/products?category=EVs%20%26%20Vehicles" className="hover:text-renza-yellow-400 transition-colors">EVs & Vehicles</Link></li>
              <li><Link to="/products?category=Tech%20%26%20Gaming" className="hover:text-renza-yellow-400 transition-colors">Tech & Vision Pro</Link></li>
              <li><Link to="/products?category=Drones%20%26%20Aviation" className="hover:text-renza-yellow-400 transition-colors">Drones & Aviation</Link></li>
              <li><Link to="/products?category=Tools%20%26%20Equipment" className="hover:text-renza-yellow-400 transition-colors">Tools & Equipment</Link></li>
            </ul>
          </div>

          {/* 4. Support & Concierge */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs text-zinc-300 uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><Link to="/support" className="hover:text-renza-yellow-400 transition-colors">24/7 Concierge Support</Link></li>
              <li><Link to="/support" className="hover:text-renza-yellow-400 transition-colors">Rental Passport™ Check</Link></li>
              <li><Link to="/support" className="hover:text-renza-yellow-400 transition-colors">Security Deposit Rules</Link></li>
              <li><Link to="/support" className="hover:text-renza-yellow-400 transition-colors">Host Guarantee Policy</Link></li>
            </ul>
          </div>

          {/* 5. Contact Information */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs text-zinc-300 uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-emerald-500" /> +1 (800) 555-RENZA</p>
              <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-renza-yellow-500" /> support@renza.com</p>
              <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-sky-500" /> 742 Montgomery St, San Francisco, CA</p>
            </div>
          </div>

        </div>

        {/* Newsletter & Mobile App Download Row */}
        <div className="pt-10 border-t border-zinc-900 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Newsletter Subscription */}
          <div className="lg:col-span-7 space-y-2">
            <h4 className="font-heading font-bold text-sm text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-renza-yellow-400" /> Subscribe to Newsletter for $20 Discount Code
            </h4>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your work email address..."
                className="flex-grow px-4 py-2.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-renza-yellow-400"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-2xl bg-renza-yellow-400 text-black font-bold text-xs hover:bg-renza-yellow-300 shadow-yellow-glow transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* App Download Badges */}
          <div className="lg:col-span-5 flex flex-wrap items-center lg:justify-end gap-3">
            <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs flex items-center gap-3 hover:border-zinc-700 transition-colors cursor-pointer">
              <Download className="w-5 h-5 text-renza-yellow-400" />
              <div>
                <span className="text-[9px] text-zinc-400 uppercase font-bold block">Download on</span>
                <span className="font-bold text-white">Apple App Store</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs flex items-center gap-3 hover:border-zinc-700 transition-colors cursor-pointer">
              <Download className="w-5 h-5 text-emerald-400" />
              <div>
                <span className="text-[9px] text-zinc-400 uppercase font-bold block">GET IT ON</span>
                <span className="font-bold text-white">Google Play Store</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Legal Disclaimers */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Renza Rental Marketplace, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300">Terms of Service</a>
            <a href="#" className="hover:text-zinc-300">Security Disclosures</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
