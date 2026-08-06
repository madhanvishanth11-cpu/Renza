import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Mail, User, ShieldCheck, ArrowRight, Github } from 'lucide-react';
import { Button } from '../common/Button';
import { useMarketplace } from '../../context/MarketplaceContext';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'login' | 'register';
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode = 'login',
  onClose,
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const { addToast } = useMarketplace();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToast(
      mode === 'login' ? 'Successfully logged into Renza!' : 'Welcome to Renza! Account created.',
      'success'
    );
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-renza-yellow-400 text-black flex items-center justify-center font-bold text-lg shadow-yellow-glow">
                  R
                </div>
                <span className="font-bold text-xl text-zinc-900 dark:text-white">
                  {mode === 'login' ? 'Welcome Back' : 'Create Renza Account'}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tab Selector */}
            <div className="flex border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40">
              <button
                onClick={() => setMode('login')}
                className={`w-1/2 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
                  mode === 'login'
                    ? 'border-renza-yellow-400 text-zinc-900 dark:text-white bg-white dark:bg-zinc-900'
                    : 'border-transparent text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setMode('register')}
                className={`w-1/2 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
                  mode === 'register'
                    ? 'border-renza-yellow-400 text-zinc-900 dark:text-white bg-white dark:bg-zinc-900'
                    : 'border-transparent text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'
                }`}
              >
                Register
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Madhav Sharma"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-sm font-medium text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-renza-yellow-400"
                    />
                    <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="user@renza.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-sm font-medium text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-renza-yellow-400"
                  />
                  <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-sm font-medium text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-renza-yellow-400"
                  />
                  <Lock className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
                </div>
              </div>

              <Button variant="primary" size="lg" fullWidth rightIcon={<ArrowRight className="w-4 h-4" />}>
                {mode === 'login' ? 'Sign In to Account' : 'Create Free Account'}
              </Button>

              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-zinc-200 dark:border-zinc-800" />
                <span className="shrink mx-3 text-[10px] text-zinc-400 uppercase tracking-wider">or continue with</span>
                <div className="flex-grow border-t border-zinc-200 dark:border-zinc-800" />
              </div>

              <Button variant="outline" size="md" fullWidth leftIcon={<Github className="w-4 h-4" />}>
                Google / Apple ID
              </Button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
