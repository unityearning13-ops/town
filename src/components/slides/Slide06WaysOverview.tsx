import React from 'react';
import { motion } from 'motion/react';
import { Target, BookOpenCheck, ShieldCheck, ArrowRight, TrendingUp } from 'lucide-react';

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
      targetSlide: 7, // 0-based index for Slide 08 Lead Generation
    },
    {
      num: "02",
      title: "Course + Project Work",
      tag: "দক্ষতা উন্নয়ন ও প্রজেক্ট",
      icon: BookOpenCheck,
      color: "border-emerald-300 bg-emerald-50",
      accent: "bg-emerald-600 text-white",
      targetSlide: 8, // 0-based index for Slide 09 Course Project
    },
    {
      num: "03",
      title: "Trainer / Sub-Admin Account",
      tag: "নেতৃত্ব ও প্রতিষ্ঠান",
      icon: ShieldCheck,
      color: "border-indigo-300 bg-indigo-50",
      accent: "bg-indigo-600 text-white",
      targetSlide: 9, // 0-based index for Slide 10 Trainer Account
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden">
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs sm:text-base font-black uppercase tracking-wider"
      >
        <TrendingUp className="w-5 h-5 text-emerald-700" />
        Earning Pathways
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

      {/* 3 Pathway Visual Cards */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl lg:max-w-6xl text-left">
        {ways.map((w, idx) => {
          const Icon = w.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
              onClick={() => onNavigateToSlide && onNavigateToSlide(w.targetSlide)}
              className={`group bg-white rounded-3xl p-6 border-2 ${w.color} shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-4xl sm:text-5xl font-black text-slate-400 group-hover:text-slate-950 transition-colors">
                    {w.num}
                  </span>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${w.accent} shadow-2xs`}>
                    <Icon className="w-6 h-6 stroke-[2.5]" />
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
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform stroke-[3]" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
