import React from 'react';
import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';

export const RentalProcessSection: React.FC = () => {
  return (
    <SectionWrapper id="how-it-works" paddingY="lg">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-renza-yellow-600 dark:text-renza-yellow-400 uppercase tracking-wider">
            3-Step Workflow
          </span>
          <h2 className="text-3xl font-heading font-extrabold text-zinc-900 dark:text-white mt-1">
            Rental Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 rounded-full bg-renza-yellow-400 text-black font-extrabold text-2xl flex items-center justify-center mx-auto mb-4 shadow-yellow-glow">
              1
            </div>
            <h4 className="text-lg font-bold text-zinc-900 dark:text-white">Search & Select</h4>
            <p className="text-xs text-zinc-500 mt-2">Find cinema gear, electric vehicles, or tools near you.</p>
          </div>

          <div className="p-6">
            <div className="w-16 h-16 rounded-full bg-renza-yellow-400 text-black font-extrabold text-2xl flex items-center justify-center mx-auto mb-4 shadow-yellow-glow">
              2
            </div>
            <h4 className="text-lg font-bold text-zinc-900 dark:text-white">Reserve & Unlock</h4>
            <p className="text-xs text-zinc-500 mt-2">Select rental dates & unlock with Renza Passport.</p>
          </div>

          <div className="p-6">
            <div className="w-16 h-16 rounded-full bg-renza-yellow-400 text-black font-extrabold text-2xl flex items-center justify-center mx-auto mb-4 shadow-yellow-glow">
              3
            </div>
            <h4 className="text-lg font-bold text-zinc-900 dark:text-white">Create & Return</h4>
            <p className="text-xs text-zinc-500 mt-2">Use the gear for your project and return effortlessly.</p>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
