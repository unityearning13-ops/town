import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Compass, Award } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
}

export const Slide01Welcome: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden">
      {/* 1. Official Brand Seal Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border-2 border-slate-300 shadow-2xs">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-sky-600 flex items-center justify-center text-white font-extrabold text-sm shadow-xs">
            UE
          </div>
          <span className="text-xs sm:text-lg font-black tracking-wider uppercase text-slate-900">
            Unity Earning
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-xs sm:text-base font-black text-emerald-900 bg-emerald-100 px-3.5 py-0.5 rounded-full border border-emerald-300">
            E-Learning Platform
          </span>
        </div>
      </motion.div>

      {/* 2. Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight max-w-5xl"
      >
        Unity Earning E-Learning Platform
      </motion.h1>

      {/* 3. Highlight Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-3 inline-flex items-center gap-2.5 px-5 py-2 rounded-xl bg-sky-100 border border-sky-300 text-sky-950 font-black text-lg sm:text-2xl lg:text-3xl shadow-2xs"
      >
        <Sparkles className="w-6 h-6 text-sky-600 shrink-0" />
        <span>Official Town Hall Meeting</span>
      </motion.div>

      {/* 4. Large Welcome Statement */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-5 max-w-4xl lg:max-w-5xl w-full bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-slate-300 shadow-sm relative overflow-hidden text-center"
      >
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-500 via-emerald-500 to-sky-500" />
        
        <p className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-950 leading-relaxed font-sans">
          ইউনিটি আর্নিং ই-লার্নিং প্ল্যাটফর্মের টাউন হল মিটিংয়ে সবাইকে আন্তরিক স্বাগতম।
        </p>

        <p className="mt-4 text-sm sm:text-xl lg:text-2xl text-slate-800 leading-relaxed font-black border-t border-slate-200 pt-3.5">
          আজকের মিটিংয়ে প্ল্যাটফর্মের নতুন আপডেট, কাজের সুযোগ, আয়ের বিভিন্ন মাধ্যম এবং গুরুত্বপূর্ণ নিয়মাবলি নিয়ে আলোচনা করা হবে।
        </p>
      </motion.div>

      {/* 5. 3 Visual Feature Chips */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm sm:text-base lg:text-lg text-slate-900"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 font-black shadow-2xs">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          অফিসিয়াল নতুন আপডেট
        </span>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 font-black shadow-2xs">
          <Compass className="w-5 h-5 text-sky-600" />
          আয়ের ৩টি মাধ্যম
        </span>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 font-black shadow-2xs">
          <Award className="w-5 h-5 text-amber-600" />
          সার্টিফিকেট অ্যাওয়ার্ড
        </span>
      </motion.div>
    </div>
  );
};
