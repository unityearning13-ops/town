import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, AlertOctagon, Scale, CheckCircle2, ShieldX, Radio } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
}

export const Slide05PolicyWarning: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden relative">
      {/* Ambient security red/amber aura */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-rose-200/25 via-amber-200/20 to-orange-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-300 text-rose-950 text-xs sm:text-base font-black uppercase tracking-wider relative overflow-hidden"
      >
        <ShieldAlert className="w-5 h-5 text-rose-700 animate-pulse" />
        Official Security & Compliance
        <Radio className="w-4 h-4 text-rose-600 animate-ping ml-0.5" />
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight"
      >
        Important Account Policy
      </motion.h2>

      {/* Warning Visual Panel with Live Animated Radar Scanner & Caution Stripes */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-5 max-w-4xl lg:max-w-5xl w-full bg-white rounded-3xl p-6 sm:p-8 border-2 border-rose-400 shadow-sm relative overflow-hidden text-left"
      >
        {/* Animated Caution Stripes Header Bar */}
        <div className="absolute top-0 left-0 right-0 h-3 animate-caution-stripes border-b border-rose-400" />

        {/* Live Radar Scanner Circle Background Effect */}
        <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full border-2 border-rose-200/60 pointer-events-none overflow-hidden">
          <div className="w-full h-full rounded-full border border-dashed border-rose-300 animate-spin-slow" />
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-transparent to-transparent animate-radar-sweep" />
        </div>

        <div className="flex items-start gap-4 relative z-10 pt-2">
          {/* Animated Warning Icon with Orbit Ring */}
          <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-rose-400 animate-spin-reverse" />
            <div className="w-12 h-12 rounded-xl bg-rose-100 border-2 border-rose-300 flex items-center justify-center text-rose-700 shadow-2xs">
              <AlertOctagon className="w-7 h-7 animate-pulse stroke-[2.5]" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-rose-950 bg-rose-100 px-3 py-1 rounded border border-rose-300">
                Strict Lead Policy
              </span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600" />
              </span>
            </div>

            <h3 className="mt-2 text-lg sm:text-2xl lg:text-3xl font-black text-slate-950 leading-snug">
              যেসব Lead Meeting-এ অংশগ্রহণ করেছে, তাদের ক্ষেত্রে ভুলভাবে Sure Shot দেওয়া সম্পূর্ণ নিষিদ্ধ।
            </h3>
          </div>
        </div>

        {/* Alert Callout Box with Animated Hazard Border */}
        <div className="mt-5 p-5 rounded-2xl bg-rose-50 border-2 border-rose-300 flex items-start gap-3.5 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-rose-600 animate-pulse" />
          <Scale className="w-6 h-6 text-rose-800 shrink-0 mt-0.5 stroke-[2.5] animate-pulse" />
          <p className="text-sm sm:text-xl text-slate-950 font-black leading-relaxed">
            নিয়ম ভঙ্গ করে Meeting করা Lead-কে Sure Shot দেওয়া হলে সংশ্লিষ্ট <span className="font-black text-rose-950 underline decoration-rose-400">Account-এর বিরুদ্ধে ব্যবস্থা নেওয়া হবে</span> এবং প্রয়োজনে <span className="font-black text-rose-950 underline decoration-rose-400">Account Block</span> করা হতে পারে।
          </p>
        </div>

        <div className="mt-5 pt-3.5 border-t border-slate-200 flex items-center justify-between text-xs sm:text-base font-black text-emerald-900">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 animate-pulse" />
            <span>সঠিক ও স্বচ্ছ কাজের সংস্কৃতি বজায় রাখুন</span>
          </div>
          <span className="text-slate-600 font-mono text-xs sm:text-sm font-black flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Unity Compliance Team
          </span>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="mt-4 text-sm sm:text-xl font-black text-slate-950 bg-white px-6 py-2 rounded-full border border-slate-300 shadow-2xs animate-float-gentle"
      >
        ✨ সঠিক তথ্য যাচাই করে কাজ করুন।
      </motion.p>
    </div>
  );
};
