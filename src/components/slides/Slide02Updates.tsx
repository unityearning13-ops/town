import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
}

export const Slide02Updates: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden relative">
      {/* Ambient background energy aura */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-emerald-200/25 via-teal-200/20 to-sky-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Category Header with live pulse */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs sm:text-base font-black uppercase tracking-wider relative overflow-hidden"
      >
        <Sparkles className="w-5 h-5 text-sky-600 animate-spin-slow" />
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

      {/* 2 Visual Certificate Panels with Continuous Interactive Motion */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl lg:max-w-6xl text-left">
        {/* Update 01 Card: 10 Convert = Certificate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-emerald-400 shadow-sm relative overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow animate-float-gentle"
          style={{ animationDelay: '0s' }}
        >
          {/* Animated top shimmer sheen */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer-move" />
          </div>

          <div>
            {/* Top Award Seal with Rotating Orbit Ring */}
            <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-emerald-400 animate-spin-slow" />
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Award className="w-7 h-7 animate-pulse" />
                  </div>
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-black text-emerald-900 bg-emerald-100 px-3 py-0.5 rounded border border-emerald-300 uppercase">
                    Update 01
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-snug mt-1">
                    10 Convert = Certificate
                  </h3>
                </div>
              </div>

              {/* Animated Live Counter Badge */}
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-xs font-bold text-slate-500 uppercase">Target Goal</span>
                <span className="text-sm font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  10 / 10 Target
                </span>
              </div>
            </div>

            {/* Continuous Animated Convert Progress Bar */}
            <div className="mb-3 bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-200">
              <div className="flex justify-between items-center text-xs font-black text-emerald-950 mb-1">
                <span>কনভার্ট প্রগ্রেস ইন্ডিকেটর</span>
                <span className="text-emerald-700 font-mono">100% Achieved</span>
              </div>
              <div className="w-full h-2.5 bg-emerald-200 rounded-full overflow-hidden relative">
                <motion.div
                  animate={{ width: ['0%', '100%'] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"
                />
              </div>
            </div>

            <p className="text-slate-950 text-sm sm:text-lg font-black leading-relaxed bg-emerald-50 p-4 rounded-2xl border border-emerald-300">
              যেসব মেম্বার সফলভাবে ১০টি Convert সম্পন্ন করবেন, তাদের কোম্পানির পক্ষ থেকে সম্মানসূচক Certificate প্রদান করা হবে।
            </p>
          </div>

          <div className="mt-3.5 pt-3 border-t border-slate-200 flex items-center gap-2.5 text-sm sm:text-base font-black text-emerald-900">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 animate-pulse" />
            <span>সম্মানসূচক মেম্বার সার্টিফিকেট ও ক্রেস্ট</span>
          </div>
        </motion.div>

        {/* Update 02 Card: Course Completion Certificate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-sky-400 shadow-sm relative overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow animate-float-gentle"
          style={{ animationDelay: '1s' }}
        >
          {/* Animated top shimmer sheen */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-400 to-indigo-500 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer-move" />
          </div>

          <div>
            {/* Top Graduation Diploma Seal */}
            <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-sky-400 animate-spin-reverse" />
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <GraduationCap className="w-7 h-7 animate-pulse" />
                  </div>
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-black text-sky-900 bg-sky-100 px-3 py-0.5 rounded border border-sky-300 uppercase">
                    Update 02
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-snug mt-1">
                    Course Completion Certificate
                  </h3>
                </div>
              </div>

              {/* Animated Live Badge */}
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-xs font-bold text-slate-500 uppercase">Evaluation</span>
                <span className="text-sm font-black text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                  Verified Skill
                </span>
              </div>
            </div>

            {/* Continuous Animated Course Completion Bar */}
            <div className="mb-3 bg-sky-50/80 p-2.5 rounded-xl border border-sky-200">
              <div className="flex justify-between items-center text-xs font-black text-sky-950 mb-1">
                <span>কোর্স কমপ্লিশন ট্র্যাক</span>
                <span className="text-sky-700 font-mono">Course Verified</span>
              </div>
              <div className="w-full h-2.5 bg-sky-200 rounded-full overflow-hidden relative">
                <motion.div
                  animate={{ width: ['0%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full"
                />
              </div>
            </div>

            <p className="text-slate-950 text-sm sm:text-lg font-black leading-relaxed bg-sky-50 p-4 rounded-2xl border border-sky-300">
              যেসব মেম্বার নির্ধারিত কোর্স সফলভাবে সম্পন্ন করবেন, তাদেরও কোম্পানির পক্ষ থেকে Certificate প্রদান করা হবে।
            </p>
          </div>

          <div className="mt-3.5 pt-3 border-t border-slate-200 flex items-center gap-2.5 text-sm sm:text-base font-black text-sky-900">
            <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 animate-pulse" />
            <span>কোর্স সার্টিফিকেট ও প্রজেক্টে সরাসরি কাজের সুযোগ</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
