import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, CheckCircle2, Coins, ArrowRight, Info, Sparkles, TrendingUp } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
}

export const Slide07LeadGeneration: React.FC<SlideProps> = ({ isActive }) => {
  const flow = [
    { label: "Target Lead", sub: "সম্ভাব্য সদস্য", icon: Target, bg: "bg-sky-100 text-sky-950 border-sky-300" },
    { label: "Communication", sub: "পরামর্শ প্রদান", icon: Users, bg: "bg-blue-100 text-blue-950 border-blue-300" },
    { label: "Convert", sub: "সফল কনভার্ট", icon: CheckCircle2, bg: "bg-emerald-100 text-emerald-950 border-emerald-300" },
    { label: "Earnings", sub: "অর্জিত কমিশন", icon: Coins, bg: "bg-amber-100 text-amber-950 border-amber-300 ring-2 ring-amber-300" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-sky-200/20 via-emerald-200/25 to-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs sm:text-base font-black uppercase tracking-wider relative overflow-hidden"
      >
        <Sparkles className="w-5 h-5 text-emerald-700 animate-spin-slow" />
        সহজ ও প্রাথমিক আয়ের মাধ্যম
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight"
      >
        01 — Lead Generation
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-2 text-sm sm:text-xl text-slate-950 font-black max-w-4xl bg-white p-4 sm:p-5 rounded-2xl border-2 border-slate-300 shadow-xs relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-400 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer-move" />
        </div>
        Lead Generation প্ল্যাটফর্মে কাজ শুরু করার অন্যতম সহজ মাধ্যম। নতুনদের জন্য এটি শেখা তুলনামূলকভাবে সহজ এবং কয়েকবার Practically দেখানো হলে কাজটি বোঝা যায়।
      </motion.p>

      {/* Visual Funnel Pipeline with Continuous Animated Energy Flow */}
      <div className="mt-4 w-full max-w-5xl lg:max-w-6xl relative">
        {/* Continuous Connecting Energy Stream line behind cards */}
        <div className="hidden sm:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 pointer-events-none -z-0">
          <svg className="w-full h-4 overflow-visible" preserveAspectRatio="none">
            <line x1="0" y1="2" x2="100%" y2="2" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
            <line x1="0" y1="2" x2="100%" y2="2" stroke="#10b981" strokeWidth="2.5" strokeDasharray="8 8" className="animate-flow-dash" />
          </svg>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
          {flow.map((item, idx) => {
            const Icon = item.icon;
            const isEarnings = idx === 3;
            return (
              <div key={idx} className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-300 shadow-xs flex flex-col items-center relative overflow-hidden group hover:border-emerald-400 transition-all animate-float-gentle"
                  style={{ animationDelay: `${idx * 0.6}s` }}
                >
                  <div className={`relative w-12 h-12 rounded-2xl border-2 flex items-center justify-center mb-2 ${item.bg}`}>
                    {isEarnings && (
                      <div className="absolute -inset-1 rounded-2xl border-2 border-dashed border-amber-500 animate-spin-slow pointer-events-none" />
                    )}
                    <Icon className="w-6 h-6 stroke-[2.5] animate-pulse" />
                  </div>
                  <span className="text-sm sm:text-base font-black text-slate-950">{item.label}</span>
                  <span className="text-xs sm:text-sm text-slate-700 font-extrabold mt-0.5">{item.sub}</span>
                </motion.div>

                {idx < flow.length - 1 && (
                  <div className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border-2 border-slate-300 text-slate-700 items-center justify-center shadow-xs">
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Large Stat Cards with Live Earning Coin Animation */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-5xl lg:max-w-6xl text-left">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-sky-300 shadow-xs flex items-center gap-4 animate-float-gentle"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-950 shrink-0 font-bold shadow-2xs">
            <Target className="w-6 h-6 stroke-[2.5] animate-pulse" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-sky-900">নিয়মিত কাজের গুরুত্ব</h4>
            <p className="text-sm sm:text-base font-black text-slate-950 leading-snug mt-0.5">
              নিয়মিত কাজ ও কার্যকর Lead Generation-এর মাধ্যমে দৈনিক আয়ের সুযোগ তৈরি করা যায়।
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="bg-emerald-50 rounded-2xl p-4 sm:p-5 border-2 border-emerald-400 shadow-xs flex items-center gap-4 relative overflow-hidden animate-float-gentle"
          style={{ animationDelay: '1.2s' }}
        >
          {/* Animated coin sparkle */}
          <div className="relative w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs font-bold">
            <Coins className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 animate-ping" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-950 block">সম্ভাব্য দৈনিক আয়</span>
              <TrendingUp className="w-4 h-4 text-emerald-700 animate-pulse" />
            </div>
            <p className="text-base sm:text-xl font-black text-emerald-950 leading-snug mt-0.5">
              দক্ষতা ও কাজের মান অনুযায়ী <span className="bg-emerald-200 px-2 py-0.5 rounded border border-emerald-300 inline-block font-black shadow-xs">দৈনিক প্রায় ৳৬০০–৳৭০০</span> আয়ের সম্ভাবনা থাকতে পারে।
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="mt-3 flex items-center gap-2 text-xs sm:text-base text-slate-800 font-black"
      >
        <Info className="w-5 h-5 text-slate-600 shrink-0" />
        <span>আয় নির্ভর করবে কাজের পরিমাণ, পারফরম্যান্স ও অনুমোদিত কাজের ফলাফলের ওপর।</span>
      </motion.div>
    </div>
  );
};
