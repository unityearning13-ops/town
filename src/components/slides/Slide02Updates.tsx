import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
}

export const Slide02Updates: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden">
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs sm:text-base font-black uppercase tracking-wider"
      >
        <Sparkles className="w-5 h-5 text-sky-600" />
        Unity Earning E-Learning Platform
      </motion.div>

      {/* Slide Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight"
      >
        এই মাসের গুরুত্বপূর্ণ আপডেট
      </motion.h2>

      {/* 2 Visual Certificate Panels */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl lg:max-w-6xl text-left">
        {/* Update 01 Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-400 shadow-sm relative overflow-hidden flex flex-col justify-between"
        >
          {/* Top Award Seal */}
          <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-black text-emerald-900 bg-emerald-100 px-3 py-1 rounded border border-emerald-300 uppercase">
                  Update 01
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-snug mt-1.5">
                  10 Convert = Certificate
                </h3>
              </div>
            </div>
          </div>

          <p className="text-slate-950 text-sm sm:text-lg font-black leading-relaxed bg-emerald-50 p-4 sm:p-5 rounded-2xl border border-emerald-300">
            যেসব মেম্বার সফলভাবে ১০টি Convert সম্পন্ন করবেন, তাদের কোম্পানির পক্ষ থেকে সম্মানসূচক Certificate প্রদান করা হবে।
          </p>

          <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-2.5 text-sm sm:text-base font-black text-emerald-900">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>সম্মানসূচক মেম্বার সার্টিফিকেট ও ক্রেস্ট</span>
          </div>
        </motion.div>

        {/* Update 02 Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-sky-400 shadow-sm relative overflow-hidden flex flex-col justify-between"
        >
          {/* Top Graduation Diploma Seal */}
          <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-black text-sky-900 bg-sky-100 px-3 py-1 rounded border border-sky-300 uppercase">
                  Update 02
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-snug mt-1.5">
                  Course Completion Certificate
                </h3>
              </div>
            </div>
          </div>

          <p className="text-slate-950 text-sm sm:text-lg font-black leading-relaxed bg-sky-50 p-4 sm:p-5 rounded-2xl border border-sky-300">
            যেসব মেম্বার নির্ধারিত কোর্স সফলভাবে সম্পন্ন করবেন, তাদেরও কোম্পানির পক্ষ থেকে Certificate প্রদান করা হবে।
          </p>

          <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-2.5 text-sm sm:text-base font-black text-sky-900">
            <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
            <span>কোর্স সার্টিফিকেট ও প্রজেক্টে সরাসরি কাজের সুযোগ</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
