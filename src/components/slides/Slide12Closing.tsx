import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Trophy, Star } from 'lucide-react';
import { soundManager } from '../../utils/audio';

interface SlideProps {
  isActive: boolean;
}

export const Slide12Closing: React.FC<SlideProps> = ({ isActive }) => {
  useEffect(() => {
    if (isActive) {
      soundManager.playSuccessChime();
    }
  }, [isActive]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden relative">
      {/* 1. Celebratory Ambient Energy Field */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-96 h-96 sm:w-[600px] sm:h-[600px] bg-gradient-to-tr from-amber-200/30 via-emerald-200/30 to-rose-200/30 rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Floating Celebration Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/5 left-1/6 w-3 h-3 rounded-full bg-amber-400/60 animate-float-gentle blur-[1px]" />
        <div className="absolute top-1/4 right-1/5 w-4 h-4 rounded-full bg-emerald-400/60 animate-float-reverse blur-[1px]" />
        <div className="absolute bottom-1/4 left-1/4 w-3.5 h-3.5 rounded-full bg-rose-400/50 animate-float-gentle blur-[1px]" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/5 right-1/6 w-3 h-3 rounded-full bg-sky-400/60 animate-float-reverse blur-[1px]" style={{ animationDelay: '1.8s' }} />
      </div>

      {/* Brand mark */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs sm:text-base font-black uppercase tracking-wider relative overflow-hidden"
      >
        <Sparkles className="w-5 h-5 text-emerald-700 animate-spin-slow" />
        Town Hall Meeting Conclusion
        <Trophy className="w-4 h-4 text-amber-600 animate-bounce" />
      </motion.div>

      {/* Main Heading: Thank You with Animated Glint */}
      <div className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-950 tracking-tight"
        >
          Thank You
        </motion.h2>
      </div>

      {/* Main Thank you message card with continuous animated border shimmer */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 max-w-3xl lg:max-w-4xl w-full bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-emerald-300 shadow-md relative overflow-hidden animate-float-gentle"
      >
        {/* Animated continuous top shimmer header */}
        <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-emerald-500 via-sky-500 to-rose-500 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer-move" />
        </div>

        <p className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-950 leading-snug font-sans">
          আজকের Town Hall Meeting-এ অংশগ্রহণ করার জন্য সবাইকে আন্তরিক ধন্যবাদ।
        </p>

        <p className="mt-4 text-sm sm:text-xl lg:text-2xl text-slate-900 font-black leading-relaxed border-t border-slate-200 pt-4">
          নিয়ম মেনে কাজ করুন, নিয়মিত শিখুন, নিজের দক্ষতা উন্নত করুন এবং আপনার Team-এর সঙ্গে সমন্বয় রেখে এগিয়ে যান।
        </p>
      </motion.div>

      {/* Final line: Unity Earning E-Learning Platform */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mt-4 text-center"
      >
        <h4 className="text-lg sm:text-2xl font-black text-slate-950 tracking-wide flex items-center justify-center gap-2">
          <span>Unity Earning E-Learning Platform</span>
          <Star className="w-5 h-5 text-amber-500 fill-amber-400 animate-spin-slow inline" />
        </h4>
        <div className="mt-2 inline-flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-lg font-black text-emerald-900 bg-emerald-100 px-6 py-2 rounded-full border border-emerald-300 shadow-2xs">
          <span>Learn</span>
          <span className="text-slate-400">•</span>
          <span>Develop</span>
          <span className="text-slate-400">•</span>
          <span>Work</span>
          <span className="text-slate-400">•</span>
          <span>Grow</span>
        </div>
      </motion.div>

      {/* Bottom Love note with Continuous Pulsing Heart & Ring */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-3.5 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-100 border border-rose-300 text-rose-950 text-sm sm:text-xl font-black shadow-2xs relative overflow-hidden group"
      >
        <span>Thank You Everyone</span>
        <div className="relative flex items-center justify-center">
          <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-rose-400 opacity-75" />
          <Heart className="w-5 h-5 fill-rose-600 text-rose-600 relative animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
};
