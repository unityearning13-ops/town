import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Calendar, Activity, Info, TrendingUp, Sparkles } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
}

export const Slide09TrainerAccount: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute w-[520px] h-[520px] bg-gradient-to-tr from-indigo-200/25 via-sky-200/20 to-emerald-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs sm:text-base font-black uppercase tracking-wider relative overflow-hidden"
      >
        <ShieldCheck className="w-5 h-5 text-indigo-700 animate-pulse" />
        Pathway 03 : Leadership Role
        <Sparkles className="w-4 h-4 text-indigo-600 animate-spin-slow" />
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight"
      >
        03 — Trainer / Sub-Admin Account
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-2 text-sm sm:text-xl text-slate-950 font-black max-w-4xl bg-white p-4 sm:p-5 rounded-2xl border-2 border-slate-300 shadow-xs relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer-move" />
        </div>
        যোগ্যতা ও নির্ধারিত শর্ত পূরণ করলে Trainer / Sub-Admin Account নিয়ে কাজ করার সুযোগ পাওয়া যেতে পারে।
      </motion.p>

      {/* 2 Income Dashboard Visual Cards with Live Animated Analytics */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-5xl lg:max-w-6xl text-left">
        {/* Monthly Salary Card with Live Financial Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-white rounded-3xl p-6 border-2 border-indigo-300 shadow-xs relative overflow-hidden flex flex-col justify-between animate-float-gentle"
          style={{ animationDelay: '0s' }}
        >
          {/* Animated top shimmer sheen */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 to-sky-500 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer-move" />
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-indigo-400 animate-spin-slow" />
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 border border-indigo-300 flex items-center justify-center text-indigo-950 shrink-0 font-extrabold shadow-2xs">
                    <Calendar className="w-7 h-7 stroke-[2.5] animate-pulse" />
                  </div>
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-indigo-900 block">
                    মাসিক সম্মানী
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black text-slate-950">
                    Monthly Salary
                  </h3>
                </div>
              </div>

              {/* Live Status indicator */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600" />
                </span>
                <span className="text-[11px] font-black text-indigo-900 uppercase">Fixed Role</span>
              </div>
            </div>

            <div className="py-2.5 px-5 rounded-2xl bg-indigo-50 border-2 border-indigo-200 inline-flex items-center gap-2 my-2 shadow-xs">
              <span className="text-3xl sm:text-4xl font-black text-indigo-950">
                প্রায় ৳5,000–৳6,000+
              </span>
              <TrendingUp className="w-6 h-6 text-indigo-600 animate-pulse ml-1" />
            </div>
          </div>

          <p className="text-xs sm:text-base text-slate-800 font-extrabold mt-3 pt-3 border-t border-slate-200">
            নির্দিষ্ট সময়সূচী ও পরিচালন দায়িত্ব পালনের ওপর ভিত্তি করে
          </p>
        </motion.div>

        {/* Daily Student Activity Card with Animated Activity Equalizer Bars */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-white rounded-3xl p-6 border-2 border-emerald-300 shadow-xs relative overflow-hidden flex flex-col justify-between animate-float-gentle"
          style={{ animationDelay: '0.8s' }}
        >
          {/* Animated top shimmer sheen */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer-move" />
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-emerald-400 animate-spin-reverse" />
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-950 shrink-0 font-extrabold shadow-2xs">
                    <Activity className="w-7 h-7 stroke-[2.5] animate-pulse" />
                  </div>
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-900 block">
                    দৈনিক এক্টিভিটি
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black text-slate-950">
                    Daily Student Activity
                  </h3>
                </div>
              </div>

              {/* Animated Live Activity Equalizer Bars */}
              <div className="flex items-end gap-1 h-6 px-2.5 py-1 bg-emerald-50 rounded-xl border border-emerald-200">
                <span className="w-1 bg-emerald-600 rounded-full animate-pulse" style={{ height: '50%', animationDuration: '0.6s' }} />
                <span className="w-1 bg-emerald-600 rounded-full animate-pulse" style={{ height: '90%', animationDuration: '0.4s' }} />
                <span className="w-1 bg-emerald-600 rounded-full animate-pulse" style={{ height: '40%', animationDuration: '0.7s' }} />
                <span className="w-1 bg-emerald-600 rounded-full animate-pulse" style={{ height: '80%', animationDuration: '0.5s' }} />
              </div>
            </div>

            <div className="py-2.5 px-5 rounded-2xl bg-emerald-50 border-2 border-emerald-200 inline-block my-2 shadow-xs">
              <span className="text-3xl sm:text-4xl font-black text-emerald-950">
                প্রায় ৳300–৳400
              </span>
              <span className="text-xs sm:text-sm text-emerald-950 font-black ml-2">
                পর্যন্ত সম্ভাব্য আয়
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-base text-slate-800 font-extrabold mt-3 pt-3 border-t border-slate-200">
            শিক্ষার্থীদের সাপোর্ট ও অ্যাক্টিভিটির ওপর নির্ভরশীল
          </p>
        </motion.div>
      </div>

      {/* Disclaimer with Gentle Pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="mt-4 max-w-4xl lg:max-w-5xl w-full bg-slate-100 rounded-2xl p-4 border border-slate-300 text-left flex items-start gap-3"
      >
        <Info className="w-5 h-5 text-slate-700 shrink-0 mt-0.5 animate-pulse" />
        <p className="text-xs sm:text-base text-slate-900 font-extrabold leading-relaxed">
          <strong className="text-slate-950 font-black">Disclaimer:</strong> আয় নির্ভর করবে দায়িত্ব, কাজের পরিমাণ, পারফরম্যান্স এবং প্রতিষ্ঠানের নির্ধারিত নীতিমালার ওপর।
        </p>
      </motion.div>
    </div>
  );
};
