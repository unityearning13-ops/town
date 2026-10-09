import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MessageSquareHeart, PhoneCall, CheckCircle2, Sparkles, Radio } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
}

export const Slide11Recruitment: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden relative">
      {/* Ambient background energy aura */}
      <div className="absolute w-[520px] h-[520px] bg-gradient-to-tr from-sky-200/25 via-indigo-200/20 to-emerald-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs sm:text-base font-black uppercase tracking-wider relative overflow-hidden"
      >
        <Briefcase className="w-5 h-5 text-sky-700 animate-pulse" />
        Official Career Announcement
        <Sparkles className="w-4 h-4 text-sky-600 animate-spin-slow" />
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

      {/* Visual Poster Card Container with Live Opportunity Flare */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 max-w-4xl lg:max-w-5xl w-full bg-white rounded-3xl p-6 sm:p-8 border-2 border-sky-400 shadow-sm relative overflow-hidden text-left animate-float-gentle"
      >
        {/* Animated continuous top shimmer header */}
        <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-sky-500 via-emerald-500 to-indigo-500 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer-move" />
        </div>

        <div className="flex items-center gap-4 pt-1">
          {/* Animated Counsellor Icon with Orbit Ring */}
          <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-sky-400 animate-spin-slow" />
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-100 to-indigo-100 border-2 border-sky-300 flex items-center justify-center text-sky-900 shadow-2xs">
              <MessageSquareHeart className="w-7 h-7 stroke-[2.5] animate-pulse" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-emerald-950 bg-emerald-100 px-3 py-0.5 rounded border border-emerald-300">
                Immediate Vacancy
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
            </div>

            <h3 className="mt-2 text-xl sm:text-3xl font-black text-slate-950 leading-tight">
              কোম্পানিতে একজন <span className="text-sky-900 underline decoration-sky-400 underline-offset-4">Female Counsellor</span> নিয়োগ দেওয়া হবে।
            </h3>
          </div>
        </div>

        {/* Job Description with Animated Skill Chips */}
        <div className="mt-4 p-5 rounded-2xl bg-slate-50 border-2 border-slate-200">
          <p className="text-sm sm:text-xl text-slate-950 font-black leading-relaxed">
            যারা Counsellor হিসেবে কাজ করতে আগ্রহী এবং শিক্ষার্থী/মেম্বারদের সঙ্গে সুন্দরভাবে যোগাযোগ ও পরামর্শ দিতে সক্ষম, তারা আবেদন করতে পারেন।
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-base font-black text-slate-900">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 shadow-2xs animate-float-gentle" style={{ animationDelay: '0.3s' }}>
              <CheckCircle2 className="w-5 h-5 text-emerald-600 animate-pulse" />
              সুন্দর বাচনভঙ্গি ও চমৎকার যোগাযোগ
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 shadow-2xs animate-float-gentle" style={{ animationDelay: '0.9s' }}>
              <CheckCircle2 className="w-5 h-5 text-emerald-600 animate-pulse" />
              শিক্ষার্থীদের সঠিক দিকনির্দেশনা ও পরামর্শ
            </span>
          </div>
        </div>

        {/* Contact instructions with Live Ringing Phone */}
        <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-emerald-50 border-2 border-sky-300 flex items-center gap-4 relative overflow-hidden">
          <div className="relative w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
            <PhoneCall className="w-6 h-6 animate-bounce" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
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
