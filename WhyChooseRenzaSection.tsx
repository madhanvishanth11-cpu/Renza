import React from 'react';
import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';
import { ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

export const WhyChooseRenzaSection: React.FC = () => {
  return (
    <SectionWrapper background="muted" paddingY="lg">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-renza-yellow-600 dark:text-renza-yellow-400 uppercase tracking-wider">
            The Renza Advantage
          </span>
          <h2 className="text-3xl font-heading font-extrabold text-zinc-900 dark:text-white mt-1">
            Why Choose Renza?
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2">
            The safest, easiest way to rent premium tech, gear, and vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-soft">
            <div className="w-12 h-12 rounded-2xl bg-renza-yellow-400 text-black flex items-center justify-center font-bold text-xl mb-6 shadow-yellow-glow">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              Instant Verification
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Every renter and host is verified with government ID and bank checks to guarantee maximum security.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-soft">
            <div className="w-12 h-12 rounded-2xl bg-renza-yellow-400 text-black flex items-center justify-center font-bold text-xl mb-6 shadow-yellow-glow">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              $50,000 Host Guarantee
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Rent out your equipment with 100% peace of mind. Full damage and theft insurance included.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-soft">
            <div className="w-12 h-12 rounded-2xl bg-renza-yellow-400 text-black flex items-center justify-center font-bold text-xl mb-6 shadow-yellow-glow">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              Doorstep Handshake
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Pick up locally or request courier delivery straight to your shoot, event, or home address.
            </p>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
