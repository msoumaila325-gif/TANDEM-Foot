import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#153E75] text-white select-none"
        >
          {/* Animated Glow */}
          <div className="absolute w-96 h-96 bg-[#1E4E92] rounded-full blur-3xl opacity-50 animate-pulse-glow" />

          {/* Logo Reveal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-center"
          >
            <Logo size="xl" showText={true} lightText={true} />

            {/* Progress Bar */}
            <div className="mt-8 w-48 h-1 bg-white/20 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-[#1E4E92] via-[#3B82F6] to-white"
              />
            </div>

            <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#DCEBFF]/80 mt-4 font-heading">
              BAMAKO • EST. 2024
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
