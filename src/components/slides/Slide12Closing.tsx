import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
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
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden">
      {/* Brand mark */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs sm:text-base font-black uppercase tracking-wider"
      >
        <Sparkles className="w-5 h-5 text-emerald-700" />
        Town Hall Meeting Conclusion
      </motion.div>

      {/* Main Heading: Thank You */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight"
      >
        Thank You
      </motion.h2>

      {/* Main Thank you message */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 max-w-3xl lg:max-w-4xl w-full bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-slate-300 shadow-sm"
      >
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
        <h4 className="text-lg sm:text-2xl font-black text-slate-950 tracking-wide">
          Unity Earning E-Learning Platform
        </h4>
        <div className="mt-2 flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-lg font-black text-emerald-900 bg-emerald-100 px-6 py-2 rounded-full border border-emerald-300 inline-block shadow-2xs">
          <span>Learn</span>
          <span className="text-slate-400">•</span>
          <span>Develop</span>
          <span className="text-slate-400">•</span>
          <span>Work</span>
          <span className="text-slate-400">•</span>
          <span>Grow</span>
        </div>
      </motion.div>

      {/* Bottom Love note */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-100 border border-rose-300 text-rose-950 text-sm sm:text-xl font-black shadow-2xs"
      >
        <span>Thank You Everyone</span>
        <Heart className="w-5 h-5 fill-rose-600 text-rose-600 inline animate-pulse" />
      </motion.div>
    </div>
  );
};
