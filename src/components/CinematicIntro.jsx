import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowDown, FastForward } from 'lucide-react';

export default function CinematicIntro({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 2-second progress timer
    const intervalTime = 20; // 20ms intervals
    const totalDuration = 2000; // 2 seconds
    const increment = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    // Trigger complete at 2 seconds
    const timeout = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.12, 
        filter: 'blur(20px)',
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/95 backdrop-blur-2xl overflow-hidden px-4"
    >
      {/* Ambient Pulsating Glow Orbs */}
      <div className="absolute w-[36rem] h-[36rem] bg-white/5 rounded-full blur-[140px] pointer-events-none animate-pulse duration-700"></div>
      <div className="absolute w-[30rem] h-[30rem] bg-zinc-700/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute top-6 right-6 z-20 px-3.5 py-1.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
        title="Skip intro and enter portfolio"
      >
        <span>Skip</span>
        <FastForward className="w-3.5 h-3.5" />
      </button>

      {/* Center Cinematic Typography Frame */}
      <div className="relative z-10 text-center space-y-5 max-w-2xl mx-auto">
        
        {/* Intro Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2"
        >
          <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-zinc-400">
            Hi, I'm
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
        </motion.div>

        {/* Name Highlight */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-tight"
        >
          <span className="text-aurora drop-shadow-[0_0_35px_rgba(255,255,255,0.18)]">
            Gandikota Sai Kowshik
          </span>
        </motion.h1>

        {/* Title & Role Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-200 font-mono text-xs sm:text-sm shadow-xl">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="font-semibold tracking-wide">Full-Stack AI Developer</span>
          </div>
        </motion.div>

        {/* Countdown Telemetry Laser Beam */}
        <div className="w-48 sm:w-64 h-1 bg-zinc-900 rounded-full mx-auto mt-6 overflow-hidden border border-white/5">
          <div 
            className="h-full bg-gradient-to-r from-zinc-500 via-white to-zinc-400 transition-all duration-75 ease-linear rounded-full shadow-lg shadow-white/20"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.5 }}
          className="text-[11px] font-mono text-zinc-500 pt-2 flex items-center justify-center gap-1.5"
        >
          <span>Initializing workspace</span>
          <span className="w-1 h-1 rounded-full bg-white"></span>
          <span>Entering portfolio</span>
        </motion.p>
      </div>
    </motion.div>
  );
}
