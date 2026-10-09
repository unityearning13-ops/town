import React from 'react';
import { motion } from 'motion/react';
import { Target, BookOpenCheck, ShieldCheck, ArrowRight, TrendingUp, Zap } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
  onNavigateToSlide?: (slideIndex: number) => void;
}

export const Slide06WaysOverview: React.FC<SlideProps> = ({ isActive, onNavigateToSlide }) => {
  const ways = [
    {
      num: "01",
      title: "Lead Generation",
      tag: "সহজ ও প্রাথমিক মাধ্যম",
      icon: Target,
      color: "border-sky-300 bg-sky-50",
      accent: "bg-sky-600 text-white",
      targetSlide: 7, // 0-based index for Slide 07 Lead Generation
    },
    {
      num: "02",
      title: "Course + Project Work",
      tag: "দক্ষতা উন্নয়ন ও প্রজেক্ট",
      icon: BookOpenCheck,
      color: "border-emerald-300 bg-emerald-50",
      accent: "bg-emerald-600 text-white",
      targetSlide: 8, // 0-based index for Slide 08 Course Project
    },
    {
      num: "03",
      title: "Trainer / Sub-Admin Account",
      tag: "নেতৃত্ব ও প্রতিষ্ঠান",
      icon: ShieldCheck,
      color: "border-indigo-300 bg-indigo-50",
      accent: "bg-indigo-600 text-white",
      targetSlide: 9, // 0-based index for Slide 09 Trainer Account
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden relative">
      {/* Ambient background energy field */}
      <div className="absolute w-[520px] h-[520px] bg-gradient-to-tr from-emerald-200/25 via-sky-200/25 to-indigo-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs sm:text-base font-black uppercase tracking-wider relative overflow-hidden"
      >
        <TrendingUp className="w-5 h-5 text-emerald-700 animate-pulse" />
        Earning Pathways
        <Zap className="w-4 h-4 text-emerald-600 animate-bounce" />
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight"
      >
        Unity Earning Platform থেকে আয়ের সম্ভাব্য মাধ্যম
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-2 text-sm sm:text-xl text-slate-950 font-black max-w-3xl"
      >
        আপনার দক্ষতা ও কাজের ধরন অনুযায়ী বিভিন্নভাবে কাজ করার সুযোগ রয়েছে।
      </motion.p>

      {/* 3 Pathway Visual Cards with Animated Connector Bus */}
      <div className="mt-5 w-full max-w-5xl lg:max-w-6xl relative">
        {/* Animated Connecting SVG Wire behind the 3 pathway cards */}
        <div className="hidden sm:block absolute top-12 left-10 right-10 h-1 pointer-events-none -z-0">
          <svg className="w-full h-4 overflow-visible" preserveAspectRatio="none">
            <line x1="0" y1="2" x2="100%" y2="2" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
            <line x1="0" y1="2" x2="100%" y2="2" stroke="#059669" strokeWidth="2.5" strokeDasharray="8 8" className="animate-flow-dash" />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left relative z-10">
          {ways.map((w, idx) => {
            const Icon = w.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                onClick={() => onNavigateToSlide && onNavigateToSlide(w.targetSlide)}
                className={`group bg-white rounded-3xl p-6 border-2 ${w.color} shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden animate-float-gentle`}
                style={{ animationDelay: `${idx * 0.8}s` }}
              >
                {/* Subtle continuous top shimmer */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer-move" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-4xl sm:text-5xl font-black text-slate-300 group-hover:text-slate-900 transition-colors">
                      {w.num}
                    </span>
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-emerald-400 animate-spin-slow pointer-events-none" />
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${w.accent} shadow-2xs`}>
                        <Icon className="w-5 h-5 stroke-[2.5] animate-pulse" />
                      </div>
                    </div>
                  </div>

                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700 block mb-1.5">
                    {w.tag}
                  </span>

                  <h3 className="text-lg sm:text-2xl font-black text-slate-950 group-hover:text-sky-900 transition-colors">
                    {w.title}
                  </h3>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-300 flex items-center justify-between text-xs sm:text-base font-black text-slate-800 group-hover:text-sky-900">
                  <span>বিস্তারিত দেখুন</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform stroke-[3] text-emerald-600 animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
