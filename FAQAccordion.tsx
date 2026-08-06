import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'How does the $50,000 Host & Renter Protection work?',
      answer: 'Every rental on Renza is automatically covered by our $50,000 protection guarantee. In the event of accidental damage, theft, or equipment loss, our insurance covers repair or replacement costs with $0 deductible for verified Renza Passport™ holders.',
    },
    {
      id: 'faq-2',
      question: 'What is Renza Passport™ and how do I unlock zero security deposits?',
      answer: 'Renza Passport™ is a instant digital identity verification system. Once verified with government ID and bank checks, your security deposit holds are waived ($0 deposit) across all rental equipment.',
    },
    {
      id: 'faq-3',
      question: 'Can I request doorstep courier delivery for cinema cameras & EVs?',
      answer: 'Yes! Renza offers Doorstep Courier Delivery ($25) where our verified courier team delivers equipment directly to your filming set, hotel, or home address, and handles pickup when your rental ends.',
    },
    {
      id: 'faq-4',
      question: 'How do hosts receive payouts?',
      answer: 'Host payouts are processed automatically via Stripe Direct Deposit 24 hours after the rental handover is completed. Earnings can be withdrawn directly to your bank account.',
    },
    {
      id: 'faq-5',
      question: 'What happens if I need to cancel my booking?',
      answer: 'Cancel up to 24 hours before your pickup date for a 100% full refund. Cancellations within 24 hours receive a 50% credit refund.',
    },
  ];

  return (
    <SectionWrapper id="faq" paddingY="lg">
      <Container size="md">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-renza-yellow-100 dark:bg-renza-yellow-950/40 text-renza-yellow-700 dark:text-renza-yellow-300 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" /> Got Questions?
          </span>
          <h2 className="text-3xl font-heading font-extrabold text-zinc-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            Everything you need to know about renting and hosting on Renza.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={false}
                className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-soft overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between font-heading font-bold text-sm sm:text-base text-zinc-900 dark:text-white focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-renza-yellow-500' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/80 pt-3"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
};
