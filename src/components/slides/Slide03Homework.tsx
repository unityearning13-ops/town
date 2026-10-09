import React from 'react';
import { motion } from 'motion/react';
import { Laptop, Check, AlertCircle, CalendarClock, BookCheck, UploadCloud, Clock } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
}

export const Slide03Homework: React.FC<SlideProps> = ({ isActive }) => {
  const points = [
    {
      title: "নিয়মিত Homework সম্পন্ন করুন",
      desc: "প্রতিটি লেকচারের অ্যাসাইনমেন্ট সময়মতো প্রস্তুত করুন",
      icon: BookCheck,
      badge: "Step 01",
    },
    {
      title: "নির্ধারিত সময়ের মধ্যে Submit করুন",
      desc: "Homework Portal-এ সময়সীমার মধ্যে আপলোড করুন",
      icon: CalendarClock,
      badge: "Step 02",
    },
    {
      title: "Course Progress ঠিক রাখুন",
      desc: "ধারাবাহিক মূল্যায়ন সার্টিফিকেট নিশ্চিত করে",
      icon: Check,
      badge: "Step 03",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-emerald-200/20 via-sky-200/20 to-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs sm:text-base font-black uppercase tracking-wider relative overflow-hidden"
      >
        <Laptop className="w-5 h-5 text-emerald-700 animate-pulse" />
        Academic Evaluation Process
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight"
      >
        Course Homework Submission
      </motion.h2>

      {/* Main Description with Animated Portal Portal Tag */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-3.5 max-w-4xl lg:max-w-5xl w-full text-base sm:text-xl lg:text-2xl text-slate-950 leading-relaxed font-black bg-white p-5 lg:p-6 rounded-2xl border-2 border-slate-300 shadow-xs relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer-move" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <span>এখন থেকে</span>
          <span className="text-sky-900 bg-sky-100 px-3 py-0.5 rounded-lg border border-sky-300">Data Entry</span>
          <span>,</span>
          <span className="text-sky-900 bg-sky-100 px-3 py-0.5 rounded-lg border border-sky-300">Digital Marketing</span>
          <span>এবং অন্যান্য কোর্সের Homework অবশ্যই</span>
          <span className="inline-flex items-center gap-1.5 bg-emerald-600 text-white px-3.5 py-1 rounded-xl font-black shadow-xs animate-pulse">
            <UploadCloud className="w-5 h-5" />
            Homework Portal
          </span>
          <span>-এর মাধ্যমে Submit করতে হবে।</span>
        </div>
      </motion.div>

      {/* 3 Interactive Feature Cards with Live Pulsing Checkmarks */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl lg:max-w-6xl text-left">
        {points.map((pt, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
            className="bg-white rounded-2xl p-5 border-2 border-slate-300 shadow-xs flex items-start gap-4 relative overflow-hidden group hover:border-emerald-400 transition-all animate-float-gentle"
            style={{ animationDelay: `${idx * 0.7}s` }}
          >
            {/* Animated Checkbox Icon with Rotating Tech Ring */}
            <div className="relative w-11 h-11 shrink-0 mt-0.5 flex items-center justify-center">
              <div className="absolute inset-0 rounded-xl border border-dashed border-emerald-400 animate-spin-slow" />
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-2xs">
                <Check className="w-5 h-5 stroke-[3] animate-pulse" />
              </div>
            </div>

            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block mb-1">
                {pt.badge}
              </span>
              <h3 className="text-sm sm:text-lg font-black text-slate-950 leading-snug">
                {pt.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-black mt-1.5">
                {pt.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Policy Note Banner with Continuous Pulsing Alert & Rotating Clock */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-4 max-w-4xl lg:max-w-5xl w-full bg-gradient-to-r from-emerald-50 via-white to-sky-50 rounded-2xl p-4 sm:p-5 border-2 border-emerald-400 shadow-xs flex items-center gap-4 text-left relative overflow-hidden"
      >
        <div className="relative w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
          <AlertCircle className="w-7 h-7 animate-pulse" />
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center">
            <Clock className="w-2.5 h-2.5 text-amber-950 animate-spin-slow" />
          </div>
        </div>

        <div>
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-950 block">
            Important Academic Policy
          </span>
          <p className="text-sm sm:text-xl font-black text-slate-950 mt-0.5">
            Homework Submission এখন থেকে Course Learning Process-এর একটি বাধ্যতামূলক অংশ।
          </p>
        </div>
      </motion.div>
    </div>
  );
};
