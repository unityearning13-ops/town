import React from 'react';
import { motion } from 'motion/react';
import { Laptop, Check, AlertCircle, CalendarClock, BookCheck } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
}

export const Slide03Homework: React.FC<SlideProps> = ({ isActive }) => {
  const points = [
    {
      title: "নিয়মিত Homework সম্পন্ন করুন",
      desc: "প্রতিটি লেকচারের অ্যাসাইনমেন্ট সময়মতো প্রস্তুত করুন",
      icon: BookCheck,
    },
    {
      title: "নির্ধারিত সময়ের মধ্যে Submit করুন",
      desc: "Homework Portal-এ সময়সীমার মধ্যে আপলোড করুন",
      icon: CalendarClock,
    },
    {
      title: "Course Progress ঠিক রাখুন",
      desc: "ধারাবাহিক মূল্যায়ন সার্টিফিকেট নিশ্চিত করে",
      icon: Check,
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
        <Laptop className="w-5 h-5 text-emerald-700" />
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

      {/* Main Description */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-3.5 max-w-4xl lg:max-w-5xl w-full text-base sm:text-xl lg:text-2xl text-slate-950 leading-relaxed font-black bg-white p-5 lg:p-6 rounded-2xl border-2 border-slate-300 shadow-xs"
      >
        এখন থেকে <span className="text-sky-800 underline">Data Entry</span>, <span className="text-sky-800 underline">Digital Marketing</span> এবং অন্যান্য কোর্সের Homework অবশ্যই <span className="bg-emerald-600 text-white px-3 py-1 rounded font-black">Homework Portal</span>-এর মাধ্যমে Submit করতে হবে।
      </motion.div>

      {/* 3 Feature Cards */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl lg:max-w-6xl text-left">
        {points.map((pt, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
            className="bg-white rounded-2xl p-5 border-2 border-slate-300 shadow-xs flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold mt-0.5 shadow-2xs">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <div>
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

      {/* Policy Note Banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-4 max-w-4xl lg:max-w-5xl w-full bg-gradient-to-r from-emerald-50 via-white to-sky-50 rounded-2xl p-4 sm:p-5 border-2 border-emerald-400 shadow-xs flex items-center gap-4 text-left"
      >
        <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
          <AlertCircle className="w-7 h-7" />
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
