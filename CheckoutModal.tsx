import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Calendar, CheckCircle2, CreditCard, Lock, Zap } from 'lucide-react';
import { Listing } from '../../types';
import { Button } from '../common/Button';
import { useMarketplace } from '../../context/MarketplaceContext';

interface CheckoutModalProps {
  listing: Listing;
  startDate: string;
  endDate: string;
  totalDays: number;
  totalPrice: number;
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  listing,
  startDate,
  endDate,
  totalDays,
  totalPrice,
  isOpen,
  onClose,
}) => {
  const { addBooking } = useMarketplace();
  const [step, setStep] = useState<'review' | 'payment' | 'confirmed'>('review');
  const [insurance, setInsurance] = useState<'standard' | 'premium'>('premium');
  const [isProcessing, setIsProcessing] = useState(false);

  const insuranceCost = insurance === 'premium' ? 18 * totalDays : 0;
  const finalTotal = totalPrice + insuranceCost;

  const handleConfirmPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      addBooking({
        listingId: listing.id,
        listingTitle: listing.title,
        listingImage: listing.images[0],
        startDate: startDate || '2026-08-15',
        endDate: endDate || '2026-08-18',
        totalDays: totalDays || 3,
        totalPrice: finalTotal,
        insurancePlan: insurance === 'premium' ? 'Premium Damage Protection' : 'Standard Basic Protection',
        hostName: listing.host.name,
      });
      setStep('confirmed');
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 z-10 overflow-hidden"
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between sticky top-0 bg-white dark:bg-zinc-900 z-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-renza-yellow-400 text-black flex items-center justify-center font-bold">
                  R
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {step === 'confirmed' ? 'Rental Confirmed!' : 'Request Rental'}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step 1: Review & Protection */}
            {step === 'review' && (
              <div className="p-6 space-y-6">
                {/* Item Summary Card */}
                <div className="flex gap-4 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800">
                  <img
                    src={listing.images[0]}
                    alt={listing.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-renza-yellow-600 dark:text-renza-yellow-400">
                      {listing.category}
                    </span>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white line-clamp-1">
                      {listing.title}
                    </h4>
                    <p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {totalDays} days ({startDate || 'Aug 15'} - {endDate || 'Aug 18'})
                    </p>
                  </div>
                </div>

                {/* Insurance Option Selection */}
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                    Choose Protection Plan
                  </label>

                  <div className="space-y-3">
                    <div
                      onClick={() => setInsurance('premium')}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                        insurance === 'premium'
                          ? 'border-renza-yellow-400 bg-renza-yellow-50/50 dark:bg-renza-yellow-950/20'
                          : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="w-6 h-6 text-renza-yellow-500 shrink-0" />
                        <div>
                          <p className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                            Premium Protection
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-renza-yellow-400 text-black font-extrabold">
                              RECOMMENDED
                            </span>
                          </p>
                          <p className="text-xs text-zinc-500">Covers accidental drops, spills, & water damage ($0 deductible)</p>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-zinc-900 dark:text-white shrink-0">
                        +${18 * totalDays}
                      </span>
                    </div>

                    <div
                      onClick={() => setInsurance('standard')}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                        insurance === 'standard'
                          ? 'border-renza-yellow-400 bg-renza-yellow-50/50 dark:bg-renza-yellow-950/20'
                          : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
                      }`}
                    >
                      <div>
                        <p className="text-sm font-bold text-zinc-900 dark:text-white">Basic Security Deposit Only</p>
                        <p className="text-xs text-zinc-500">${listing.securityDeposit} refundable security hold</p>
                      </div>
                      <span className="text-sm font-bold text-zinc-900 dark:text-white shrink-0">
                        Included
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price Summary */}
                <div className="space-y-2 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-sm">
                  <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                    <span>${listing.pricePerDay} x {totalDays} days</span>
                    <span>${totalPrice}</span>
                  </div>
                  {insuranceCost > 0 && (
                    <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                      <span>Premium Protection Plan</span>
                      <span>+${insuranceCost}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-extrabold text-base text-zinc-900 dark:text-white pt-2 border-t border-zinc-200 dark:border-zinc-800">
                    <span>Total Due Now</span>
                    <span className="text-renza-yellow-600 dark:text-renza-yellow-400">${finalTotal}</span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={() => setStep('payment')}
                  rightIcon={<Zap className="w-4 h-4 fill-black" />}
                >
                  Proceed to Checkout (${finalTotal})
                </Button>
              </div>
            )}

            {/* Step 2: Payment Details */}
            {step === 'payment' && (
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <Lock className="w-4 h-4 shrink-0" />
                  <span>256-Bit Encrypted Secure Checkout</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Madhav Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-sm text-zinc-900 dark:text-white font-medium focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        defaultValue="•••• •••• •••• 4242"
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-sm text-zinc-900 dark:text-white font-medium focus:outline-none"
                      />
                      <CreditCard className="w-5 h-5 text-zinc-400 absolute right-3 top-2.5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">Expiry</label>
                      <input
                        type="text"
                        defaultValue="08 / 28"
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-sm text-zinc-900 dark:text-white font-medium focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">CVC</label>
                      <input
                        type="text"
                        defaultValue="888"
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-sm text-zinc-900 dark:text-white font-medium focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="lg" className="w-1/3" onClick={() => setStep('review')}>
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-2/3"
                    isLoading={isProcessing}
                    onClick={handleConfirmPayment}
                  >
                    Confirm & Pay ${finalTotal}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Success Confirmation */}
            {step === 'confirmed' && (
              <div className="p-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-500 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                    Rental Confirmed!
                  </h3>
                  <p className="text-sm text-zinc-500 mt-2 max-w-sm mx-auto">
                    Host <span className="font-bold text-zinc-900 dark:text-white">{listing.host.name}</span> has received your rental reservation. Pickup instructions sent to your email.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 text-left text-xs space-y-2 border border-zinc-200 dark:border-zinc-800">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Booking Ref:</span>
                    <span className="font-mono font-bold text-zinc-900 dark:text-white">RENZA-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Pickup Date:</span>
                    <span className="font-bold text-zinc-900 dark:text-white">{startDate || 'Aug 15, 2026'}</span>
                  </div>
                </div>

                <Button variant="dark" size="lg" fullWidth onClick={onClose}>
                  Done (View in Dashboard)
                </Button>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
