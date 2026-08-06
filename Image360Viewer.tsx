import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rotate3D, X, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';

interface Image360ViewerProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

export const Image360Viewer: React.FC<Image360ViewerProps> = ({
  images,
  isOpen,
  onClose,
}) => {
  const [frame, setFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    if (Math.abs(diff) > 15) {
      setFrame((prev) => (diff > 0 ? (prev + 1) % images.length : (prev === 0 ? images.length - 1 : prev - 1)));
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-2xl bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 z-10 p-6 text-white text-center"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-renza-yellow-400">
                <Rotate3D className="w-4 h-4 animate-spin" /> Interactive 360° Inspection View
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black cursor-grab active:cursor-grabbing select-none border border-zinc-800"
            >
              <img
                src={images[frame % images.length]}
                alt="360 View Frame"
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-zinc-700 text-xs font-semibold flex items-center gap-2">
                <Rotate3D className="w-3.5 h-3.5 text-renza-yellow-400" />
                <span>Drag left or right to rotate item 360°</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
