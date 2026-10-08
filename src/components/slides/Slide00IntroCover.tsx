import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
  onNextSlide?: () => void;
}

export const Slide00IntroCover: React.FC<SlideProps> = ({ isActive, onNextSlide }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden relative">
      {/* Background glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-80 h-80 sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-sky-200/40 via-emerald-200/40 to-indigo-200/40 rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* 1. Top Brand Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={isActive ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -20 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-3.5"
      >
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border-2 border-emerald-400 shadow-sm">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-600 to-sky-600 flex items-center justify-center text-white font-black text-base shadow-2xs">
            UE
          </div>
          <span className="text-sm sm:text-lg font-black tracking-wider uppercase text-slate-900">
            Unity Earning
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs sm:text-base font-black text-emerald-900 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300">
            E-Learning Platform
          </span>
        </div>
      </motion.div>

      {/* 2. Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 25, scale: 0.95 }}
        animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 25, scale: 0.95 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-tight max-w-5xl"
      >
        ইউনিটি আর্নিং ই-লার্নিং প্ল্যাটফর্ম
      </motion.h1>

      {/* 3. Official Town Hall Meeting Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-600 via-emerald-600 to-sky-600 text-white font-black text-xl sm:text-3xl shadow-md border border-sky-400"
      >
        <Sparkles className="w-7 h-7 text-amber-300 shrink-0" />
        <span>অফিসিয়াল টাউন হল মিটিং</span>
      </motion.div>

      {/* 4. Large Animated Welcome Address */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 max-w-5xl w-full bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-emerald-400 shadow-md relative overflow-hidden text-center"
      >
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-sky-500 via-emerald-500 to-sky-500" />

        <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 leading-snug font-sans">
          ইউনিটি আর্নিং ই-লার্নিং প্ল্যাটফর্মের অফিশিয়াল টাউন হল মিটিংয়ে সবাইকে স্বাগতম।
        </p>

        <p className="mt-5 text-base sm:text-xl lg:text-2xl text-slate-900 font-black border-t-2 border-slate-100 pt-4">
          প্ল্যাটফর্মের নতুন আপডেট, কাজের নিয়মাবলি, আয়ের পথসমূহ এবং ক্যারিয়ারের সুযোগ নিয়ে বিস্তারিত আলোচনা
        </p>
      </motion.div>
    </div>
  );
};
