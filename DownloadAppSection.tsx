import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, QrCode, Star, Apple, Play } from 'lucide-react';
import { Container } from '../layout/Container';

export const DownloadAppSection: React.FC = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 text-white border border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-renza-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text & Store Buttons */}
          <div className="space-y-6 max-w-xl z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-renza-yellow-400 text-black text-xs font-bold uppercase tracking-wider">
              <Smartphone className="w-4 h-4" /> Renza iOS & Android App
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Rent & Unlock Gear from Your Mobile Phone
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Track active rentals, chat live with hosts, perform digital handover inspection checklists, and unlock Smart Lockers with the Renza Mobile App.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors shadow-lg">
                <Apple className="w-6 h-6 shrink-0" />
                <div className="text-left leading-tight">
                  <span className="text-[10px] text-zinc-600 block uppercase font-normal">Download on the</span>
                  <span className="text-sm font-extrabold">App Store</span>
                </div>
              </button>

              <button className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-zinc-800 text-white font-bold text-sm hover:bg-zinc-700 transition-colors border border-zinc-700 shadow-lg">
                <Play className="w-5 h-5 text-renza-yellow-400 shrink-0 fill-renza-yellow-400" />
                <div className="text-left leading-tight">
                  <span className="text-[10px] text-zinc-400 block uppercase font-normal">GET IT ON</span>
                  <span className="text-sm font-extrabold">Google Play</span>
                </div>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-400 pt-2">
              <div className="flex text-renza-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-renza-yellow-400" />
                ))}
              </div>
              <span>4.9 Star Rating (12,000+ Mobile Reviews)</span>
            </div>
          </div>

          {/* Right Mobile Device Preview Visual */}
          <div className="z-10 shrink-0 flex items-center gap-6">
            <div className="hidden sm:flex flex-col items-center p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-center">
              <QrCode className="w-24 h-24 text-white mb-2" />
              <span className="text-[10px] font-bold text-zinc-400 uppercase">Scan to Download</span>
            </div>

            <div className="w-56 h-96 rounded-[40px] bg-zinc-900 border-4 border-zinc-800 shadow-2xl p-3 flex flex-col justify-between relative overflow-hidden">
              <div className="w-20 h-4 bg-zinc-800 rounded-full mx-auto mb-2" />
              <div className="p-3 rounded-2xl bg-zinc-800/80 text-xs font-semibold text-white space-y-2">
                <div className="h-3 w-16 bg-renza-yellow-400 rounded" />
                <p className="text-[10px] text-zinc-300">Rental Active: Sony FX3 Camera</p>
                <div className="h-1.5 w-full bg-emerald-500 rounded-full" />
              </div>
              <div className="p-3 rounded-2xl bg-renza-yellow-400 text-black text-xs font-bold text-center">
                Unlock Smart Locker
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};
