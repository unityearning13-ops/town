import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Compass, Award, Activity } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
}

export const Slide01Welcome: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden relative">
      {/* Ambient background pulsing aura */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-emerald-200/30 via-sky-200/30 to-indigo-200/30 rounded-full blur-3xl pointer-events-none -z-10 animate-float-gentle" />

      {/* 1. Official Brand Seal Badge with rotating border */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2 relative"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border-2 border-slate-300 shadow-2xs relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/50 to-transparent animate-shimmer-move pointer-events-none" />
          
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500 animate-spin-slow" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-600 to-sky-600 flex items-center justify-center text-white font-extrabold text-xs shadow-xs">
              UE
            </div>
          </div>

          <span className="text-xs sm:text-lg font-black tracking-wider uppercase text-slate-900">
            Unity Earning
          </span>

          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>

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

      {/* 3. Highlight Banner with Live Status Pulse */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-2.5 inline-flex items-center gap-2.5 px-5 py-2 rounded-xl bg-sky-100 border border-sky-300 text-sky-950 font-black text-lg sm:text-2xl lg:text-3xl shadow-2xs relative overflow-hidden"
      >
        <Sparkles className="w-6 h-6 text-sky-600 shrink-0 animate-spin-slow" />
        <span>Official Town Hall Meeting</span>
        <Activity className="w-5 h-5 text-emerald-700 shrink-0 animate-pulse" />
      </motion.div>

      {/* 4. Large Welcome Statement Card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4 max-w-4xl lg:max-w-5xl w-full bg-white rounded-3xl p-6 sm:p-8 lg:p-9 border-2 border-slate-300 shadow-sm relative overflow-hidden text-center"
      >
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-500 via-emerald-500 to-sky-500 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shimmer-move" />
        </div>
        
        <p className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-950 leading-relaxed font-sans">
          ইউনিটি আর্নিং ই-লার্নিং প্ল্যাটফর্মের টাউন হল মিটিংয়ে সবাইকে আন্তরিক স্বাগতম।
        </p>

        <p className="mt-3.5 text-sm sm:text-xl lg:text-2xl text-slate-800 leading-relaxed font-black border-t border-slate-200 pt-3.5">
          আজকের মিটিংয়ে প্ল্যাটফর্মের নতুন আপডেট, কাজের সুযোগ, আয়ের বিভিন্ন মাধ্যম এবং গুরুত্বপূর্ণ নিয়মাবলি নিয়ে আলোচনা করা হবে।
        </p>
      </motion.div>

      {/* 5. 3 Live Animated Feature Cards with Interconnected Continuous Energy Flow */}
      <div className="mt-4 w-full max-w-4xl lg:max-w-5xl relative">
        {/* Animated Connecting SVG Wire behind the 3 cards */}
        <div className="hidden sm:block absolute top-1/2 left-10 right-10 -translate-y-1/2 h-1 pointer-events-none -z-0">
          <svg className="w-full h-4 overflow-visible" preserveAspectRatio="none">
            <line x1="0" y1="2" x2="100%" y2="2" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
            <line x1="0" y1="2" x2="100%" y2="2" stroke="#10b981" strokeWidth="2.5" strokeDasharray="8 8" className="animate-flow-dash" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 relative z-10"
        >
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl p-3 sm:p-4 border-2 border-emerald-300 shadow-xs flex items-center justify-center gap-3 animate-float-gentle" style={{ animationDelay: '0s' }}>
            <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 shrink-0">
              <ShieldCheck className="w-6 h-6 animate-pulse" />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-wider font-black text-emerald-700 block">Category 01</span>
              <span className="text-sm sm:text-base font-black text-slate-950">অফিসিয়াল নতুন আপডেট</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl p-3 sm:p-4 border-2 border-sky-300 shadow-xs flex items-center justify-center gap-3 animate-float-gentle" style={{ animationDelay: '0.8s' }}>
            <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-800 shrink-0">
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-wider font-black text-sky-700 block">Category 02</span>
              <span className="text-sm sm:text-base font-black text-slate-950">আয়ের ৩টি মাধ্যম</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-2xl p-3 sm:p-4 border-2 border-amber-300 shadow-xs flex items-center justify-center gap-3 animate-float-gentle" style={{ animationDelay: '1.6s' }}>
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0">
              <Award className="w-6 h-6 animate-pulse" />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-wider font-black text-amber-700 block">Category 03</span>
              <span className="text-sm sm:text-base font-black text-slate-950">সার্টিফিকেট অ্যাওয়ার্ড</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
