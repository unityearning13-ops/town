import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MessageSquareHeart, PhoneCall, CheckCircle2 } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
}

export const Slide11Recruitment: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden">
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs sm:text-base font-black uppercase tracking-wider"
      >
        <Briefcase className="w-5 h-5 text-sky-700" />
        Official Career Announcement
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight"
      >
        Recruitment Notice
      </motion.h2>

      {/* Visual Poster Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 max-w-4xl lg:max-w-5xl w-full bg-white rounded-3xl p-6 sm:p-8 border-2 border-sky-400 shadow-sm relative overflow-hidden text-left"
      >
        <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-sky-500 via-emerald-500 to-indigo-500" />

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-100 to-indigo-100 border-2 border-sky-300 flex items-center justify-center text-sky-900 shrink-0 shadow-2xs">
            <MessageSquareHeart className="w-8 h-8 stroke-[2.5]" />
          </div>

          <div>
            <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-emerald-950 bg-emerald-100 px-3 py-1 rounded border border-emerald-300">
              Immediate Vacancy
            </span>
            <h3 className="mt-2 text-xl sm:text-3xl font-black text-slate-950 leading-tight">
              কোম্পানিতে একজন <span className="text-sky-900 underline decoration-sky-400 underline-offset-2">Female Counsellor</span> নিয়োগ দেওয়া হবে।
            </h3>
          </div>
        </div>

        {/* Job Description */}
        <div className="mt-4 p-5 rounded-2xl bg-slate-50 border-2 border-slate-200">
          <p className="text-sm sm:text-xl text-slate-950 font-black leading-relaxed">
            যারা Counsellor হিসেবে কাজ করতে আগ্রহী এবং শিক্ষার্থী/মেম্বারদের সঙ্গে সুন্দরভাবে যোগাযোগ ও পরামর্শ দিতে সক্ষম, তারা আবেদন করতে পারেন।
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-base font-black text-slate-900">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 shadow-2xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              সুন্দর বাচনভঙ্গি ও চমৎকার যোগাযোগ
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 shadow-2xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              শিক্ষার্থীদের সঠিক দিকনির্দেশনা ও পরামর্শ
            </span>
          </div>
        </div>

        {/* Contact instructions */}
        <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-emerald-50 border-2 border-sky-300 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-sky-950 block">
              আবেদন ও যোগাযোগের নিয়ম
            </span>
            <p className="text-sm sm:text-xl font-black text-slate-950 mt-0.5">
              আগ্রহী প্রার্থীরা বিস্তারিত তথ্যের জন্য নিজ নিজ Team Leader-এর সঙ্গে যোগাযোগ করুন।
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
