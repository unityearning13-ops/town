import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Award, Briefcase, DollarSign, ArrowRight, UserCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
}

export const Slide08CourseProject: React.FC<SlideProps> = ({ isActive }) => {
  const steps = [
    { name: "Learn", sub: "শেখা", icon: BookOpen },
    { name: "Complete Course", sub: "কোর্স সমাপ্তি", icon: GraduationCap },
    { name: "Skill Dev", sub: "দক্ষতা অর্জন", icon: Award },
    { name: "Project Work", sub: "প্রজেক্টে কাজ", icon: Briefcase },
    { name: "Earn", sub: "সম্মানী", icon: DollarSign },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden relative">
      {/* Ambient background energy field */}
      <div className="absolute w-[520px] h-[520px] bg-gradient-to-tr from-teal-200/20 via-emerald-200/25 to-sky-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs sm:text-base font-black uppercase tracking-wider relative overflow-hidden"
      >
        <Sparkles className="w-5 h-5 text-emerald-700 animate-spin-slow" />
        Pathway 02 : Skill-Based Careers
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight"
      >
        02 — Course Complete করে Project Work
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-2 text-sm sm:text-xl text-slate-950 font-black max-w-4xl bg-white p-4 sm:p-5 rounded-2xl border-2 border-slate-300 shadow-xs relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer-move" />
        </div>
        নির্ধারিত কোর্স সম্পন্ন করার মাধ্যমে প্রয়োজনীয় দক্ষতা অর্জন করে বিভিন্ন Project-এ কাজ করার সুযোগ পাওয়া যায়।
      </motion.p>

      {/* 5-Step Stepper Graphic with Continuous Conveyor Light Beam */}
      <div className="mt-4 w-full max-w-5xl lg:max-w-6xl relative">
        {/* Animated Connecting SVG Wire behind steps */}
        <div className="hidden sm:block absolute top-1/2 left-6 right-6 -translate-y-1/2 h-1 pointer-events-none -z-0">
          <svg className="w-full h-4 overflow-visible" preserveAspectRatio="none">
            <line x1="0" y1="2" x2="100%" y2="2" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
            <line x1="0" y1="2" x2="100%" y2="2" stroke="#059669" strokeWidth="2.5" strokeDasharray="8 8" className="animate-flow-dash" />
          </svg>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isLast = idx === steps.length - 1;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: 0.3 + idx * 0.08 }}
                className={`relative bg-white rounded-2xl p-4 border-2 ${
                  isLast ? 'border-emerald-500 bg-emerald-50/80 ring-2 ring-emerald-300' : 'border-slate-300'
                } shadow-xs flex flex-col items-center overflow-hidden animate-float-gentle group`}
                style={{ animationDelay: `${idx * 0.5}s` }}
              >
                <div className={`relative w-12 h-12 rounded-2xl flex items-center justify-center mb-2 ${
                  isLast ? 'bg-emerald-600 text-white font-bold shadow-2xs' : 'bg-sky-100 text-sky-950 border border-sky-300'
                }`}>
                  {isLast && (
                    <div className="absolute -inset-1 rounded-2xl border-2 border-dashed border-emerald-500 animate-spin-slow pointer-events-none" />
                  )}
                  <Icon className="w-6 h-6 stroke-[2.5] animate-pulse" />
                </div>
                <span className="text-sm sm:text-base font-black text-slate-950 leading-snug">{st.name}</span>
                <span className="text-xs sm:text-sm text-slate-700 font-extrabold mt-0.5">{st.sub}</span>

                {idx < steps.length - 1 && (
                  <div className="hidden sm:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border-2 border-slate-300 text-slate-700 items-center justify-center shadow-xs">
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mentor Role Card with Animated Glowing Aura */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-4 max-w-4xl lg:max-w-5xl w-full bg-white rounded-2xl p-4 sm:p-5 border-2 border-emerald-400 shadow-xs flex items-center gap-4 text-left relative overflow-hidden animate-float-gentle"
        style={{ animationDelay: '1.2s' }}
      >
        <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-emerald-500 animate-spin-slow" />
          <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-950 font-bold shadow-2xs">
            <UserCheck className="w-7 h-7 stroke-[2.5] animate-pulse" />
          </div>
        </div>
        <div>
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-950 bg-emerald-100 px-3 py-0.5 rounded border border-emerald-300 mb-1 inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            অতিরিক্ত মেন্টরশিপ সুযোগ
          </span>
          <p className="text-sm sm:text-xl font-black text-slate-950 leading-snug">
            Course সফলভাবে সম্পন্ন করার পর যোগ্যতা ও পারফরম্যান্স অনুযায়ী <span className="text-emerald-900 underline font-black decoration-emerald-400">Mentor</span> হিসেবে কাজ করার সুযোগও থাকতে পারে।
          </p>
        </div>
      </motion.div>
    </div>
  );
};
