import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Zap, Award, Sparkles, Lock, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';

export const RentalPassport: React.FC = () => {
  return (
    <div className="relative py-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-renza-yellow-400/10 dark:bg-renza-yellow-400/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Explanation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-renza-yellow-100 dark:bg-renza-yellow-950/40 text-renza-yellow-800 dark:text-renza-yellow-300 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-renza-yellow-500" />
              Introducing Renza Passport™
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
              One Passport for Zero-Deposit Instant Rentals Worldwide
            </h2>

            <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
              Verify your identity once and unlock instant access to over $100M worth of premium cinema gear, sports cars, tech, and tools without placing heavy security holds on your credit card.
            </p>

            {/* Passport Perks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Zero Security Holds</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">No funds blocked on your credit cards during rentals.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 flex items-start gap-3">
                <Zap className="w-5 h-5 text-renza-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Instant Unlock</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Skip owner pre-approvals for instant 1-click pickup.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 flex items-start gap-3">
                <Lock className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Biometric Security</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Encrypted ID verification powered by Stripe Identity.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white">$50k Coverage Included</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Comprehensive loss & damage protection on every rental.</p>
                </div>
              </div>
            </div>

            <div>
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Get Verified for Renza Passport
              </Button>
            </div>
          </div>

          {/* Right Holographic Card Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ rotateY: 5, scale: 1.02 }}
              className="relative w-full max-w-md p-8 rounded-3xl bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white border-2 border-renza-yellow-400/40 shadow-yellow-glow-lg overflow-hidden"
            >
              {/* Metallic shine effect */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-renza-yellow-400/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-renza-yellow-400 text-black flex items-center justify-center font-bold text-lg">
                    R
                  </div>
                  <span className="font-extrabold text-xl tracking-wider uppercase">RENZA PASSPORT</span>
                </div>
                <Sparkles className="w-6 h-6 text-renza-yellow-400" />
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest block">PASSPORT HOLDER</span>
                  <span className="text-lg font-bold text-white tracking-wide">MADHAV SHARMA</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest block">STATUS</span>
                    <span className="text-emerald-400 font-extrabold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED VIP
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest block">COVERAGE</span>
                    <span className="text-renza-yellow-400 font-extrabold">$50,000 USD</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="font-mono">ID: RZ-9982-PASSPORT</span>
                  <span>GLOBAL ACCESS</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};
