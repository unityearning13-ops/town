import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Calendar, Activity, Info } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
}

export const Slide09TrainerAccount: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden">
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs sm:text-base font-black uppercase tracking-wider"
      >
        <ShieldCheck className="w-5 h-5 text-indigo-700" />
        Pathway 03 : Leadership Role
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
        className="mt-2 text-sm sm:text-xl text-slate-950 font-black max-w-4xl bg-white p-4 sm:p-5 rounded-2xl border-2 border-slate-300 shadow-xs"
      >
        যোগ্যতা ও নির্ধারিত শর্ত পূরণ করলে Trainer / Sub-Admin Account নিয়ে কাজ করার সুযোগ পাওয়া যেতে পারে।
      </motion.p>

      {/* 2 Income Dashboard Visual Cards */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-5xl lg:max-w-6xl text-left">
        {/* Monthly Salary */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-white rounded-3xl p-6 border-2 border-indigo-300 shadow-xs relative overflow-hidden flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 border border-indigo-300 flex items-center justify-center text-indigo-950 shrink-0 font-extrabold shadow-2xs">
                <Calendar className="w-8 h-8 stroke-[2.5]" />
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

            <div className="py-2.5 px-5 rounded-2xl bg-indigo-50 border-2 border-indigo-200 inline-block my-2">
              <span className="text-3xl sm:text-4xl font-black text-indigo-950">
                প্রায় ৳5,000–৳6,000+
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-base text-slate-800 font-extrabold mt-3 pt-3 border-t border-slate-200">
            নির্দিষ্ট সময়সূচী ও পরিচালন দায়িত্ব পালনের ওপর ভিত্তি করে
          </p>
        </motion.div>

        {/* Daily Student Activity */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-white rounded-3xl p-6 border-2 border-emerald-300 shadow-xs relative overflow-hidden flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-950 shrink-0 font-extrabold shadow-2xs">
                <Activity className="w-8 h-8 stroke-[2.5]" />
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

            <div className="py-2.5 px-5 rounded-2xl bg-emerald-50 border-2 border-emerald-200 inline-block my-2">
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

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="mt-4 max-w-4xl lg:max-w-5xl w-full bg-slate-100 rounded-2xl p-4 border border-slate-300 text-left flex items-start gap-3"
      >
        <Info className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
        <p className="text-xs sm:text-base text-slate-900 font-extrabold leading-relaxed">
          <strong className="text-slate-950 font-black">Disclaimer:</strong> আয় নির্ভর করবে দায়িত্ব, কাজের পরিমাণ, পারফরম্যান্স এবং প্রতিষ্ঠানের নির্ধারিত নীতিমালার ওপর।
        </p>
      </motion.div>
    </div>
  );
};
