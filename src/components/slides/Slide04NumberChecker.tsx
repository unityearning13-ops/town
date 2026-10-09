import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, SearchCheck, ShieldCheck, UserCheck, ArrowRight, AlertTriangle, Scan, Database } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
}

export const Slide04NumberChecker: React.FC<SlideProps> = ({ isActive }) => {
  const steps = [
    { num: "01", label: "Mobile Number", sub: "মোবাইল নম্বর", icon: Smartphone, color: "bg-sky-100 text-sky-950 border-sky-300" },
    { num: "02", label: "Number Checker", sub: "পোর্টালে ইনপুট", icon: SearchCheck, color: "bg-emerald-100 text-emerald-950 border-emerald-400 ring-2 ring-emerald-200" },
    { num: "03", label: "Verify Status", sub: "ডাটাবেজ যাচাই", icon: ShieldCheck, color: "bg-blue-100 text-blue-950 border-blue-300" },
    { num: "04", label: "Registration", sub: "নিরাপদ নিবন্ধন", icon: UserCheck, color: "bg-emerald-600 text-white border-emerald-700 shadow-2xs" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-sky-200/25 via-emerald-200/20 to-teal-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs sm:text-base font-black uppercase tracking-wider relative overflow-hidden"
      >
        <ShieldCheck className="w-5 h-5 text-sky-700 animate-pulse" />
        System Verification Protocol
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight"
      >
        Registration-এর আগে <span className="text-emerald-700 underline decoration-emerald-400">Number Checker</span> ব্যবহার বাধ্যতামূলক
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-2 text-sm sm:text-xl text-slate-950 font-black max-w-3xl"
      >
        কোনো নতুন Registration করার আগে অবশ্যই Number Checker ব্যবহার করে নম্বরটি যাচাই করতে হবে।
      </motion.p>

      {/* 4-Step Visual Flow Pipeline with Continuous Scanning & Pulse Streams */}
      <div className="mt-5 w-full max-w-5xl lg:max-w-6xl relative">
        {/* Continuous Connecting Energy Stream line behind cards */}
        <div className="hidden sm:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 pointer-events-none -z-0">
          <svg className="w-full h-4 overflow-visible" preserveAspectRatio="none">
            <line x1="0" y1="2" x2="100%" y2="2" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
            <line x1="0" y1="2" x2="100%" y2="2" stroke="#0ea5e9" strokeWidth="2.5" strokeDasharray="8 8" className="animate-flow-dash" />
          </svg>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isScanningStep = idx === 1; // Number checker step
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-300 shadow-xs flex flex-col items-center relative overflow-hidden group hover:border-sky-400 transition-all animate-float-gentle"
                style={{ animationDelay: `${idx * 0.5}s` }}
              >
                {/* Laser Scanning Line for the Number Checker step */}
                {isScanningStep && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-scanline-v shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  </div>
                )}

                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Step {st.num}
                  </span>
                  {isScanningStep && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  )}
                </div>

                <div className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 flex items-center justify-center mb-2.5 ${st.color}`}>
                  {/* Orbit ring on active steps */}
                  {isScanningStep && (
                    <div className="absolute -inset-1 rounded-2xl border-2 border-dashed border-emerald-500 animate-spin-slow pointer-events-none" />
                  )}
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5] animate-pulse" />
                </div>

                <h4 className="text-sm sm:text-lg font-black text-slate-950 leading-snug">
                  {st.label}
                </h4>
                <span className="text-xs sm:text-sm text-slate-700 font-extrabold mt-1">
                  {st.sub}
                </span>

                {idx < steps.length - 1 && (
                  <div className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border-2 border-slate-300 text-slate-700 items-center justify-center shadow-xs">
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Warning Alert Box with Continuous Caution Beacon */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-5 max-w-4xl lg:max-w-5xl w-full bg-amber-50 rounded-2xl p-4 sm:p-5 border-2 border-amber-400 shadow-xs flex items-start gap-4 text-left relative overflow-hidden"
      >
        <div className="relative w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs font-bold">
          <AlertTriangle className="w-7 h-7 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-rose-500 animate-ping" />
        </div>
        <div>
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-950 block">
            আবশ্যিক নিয়ম
          </span>
          <p className="text-sm sm:text-xl font-black text-slate-950 leading-relaxed mt-0.5">
            যদি কোনো নম্বর পূর্বে Registration করা হয়ে থাকে, তাহলে সেটি অবশ্যই <strong className="text-amber-950 underline font-black">Number Checker</strong>-এর মাধ্যমে যাচাই ও Count করতে হবে।
          </p>
        </div>
      </motion.div>
    </div>
  );
};
