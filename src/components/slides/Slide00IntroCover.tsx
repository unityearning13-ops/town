import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Radio, Award } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
  onNextSlide?: () => void;
}

export const Slide00IntroCover: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden relative">
      {/* 1. Animated Ambient Energy Fields */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.65, 0.35],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-96 h-96 sm:w-[620px] sm:h-[620px] bg-gradient-to-tr from-sky-300/30 via-emerald-300/30 to-indigo-300/30 rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Floating Ambient Glow Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/6 w-3 h-3 rounded-full bg-emerald-400/50 animate-float-gentle blur-[1px]" />
        <div className="absolute bottom-1/4 right-1/6 w-4 h-4 rounded-full bg-sky-400/50 animate-float-reverse blur-[1px]" />
        <div className="absolute top-1/3 right-1/5 w-2.5 h-2.5 rounded-full bg-amber-400/60 animate-float-gentle blur-[1px]" style={{ animationDelay: '1.2s' }} />
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 rounded-full bg-indigo-400/50 animate-float-reverse blur-[1px]" style={{ animationDelay: '2s' }} />
      </div>

      {/* 2. Top Brand Badge with Orbital Ring Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -20 }}
        animate={isActive ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: -20 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-3.5 relative"
      >
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md border-2 border-emerald-400 shadow-sm relative overflow-hidden group">
          {/* Subtle Continuous Shimmer Light Ray */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-200/40 to-transparent animate-shimmer-move pointer-events-none" />

          {/* Animated Avatar / Brand Badge */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Rotating Outer Tech Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500 animate-spin-slow" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 via-teal-600 to-sky-600 flex items-center justify-center text-white font-black text-sm shadow-xs animate-pulse">
              UE
            </div>
          </div>

          <span className="text-sm sm:text-lg font-black tracking-wider uppercase text-slate-900">
            Unity Earning
          </span>

          {/* Live Broadcast Indicator */}
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
            </span>
            <span className="text-xs sm:text-sm font-black text-emerald-950 uppercase tracking-wide">
              Live Town Hall
            </span>
          </div>

          <span className="text-xs sm:text-base font-black text-emerald-900 bg-emerald-100 px-3 py-0.5 rounded-full border border-emerald-300">
            E-Learning Platform
          </span>
        </div>
      </motion.div>

      {/* 3. Main Headline with Animated Glow Backing */}
      <div className="relative max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 25, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-tight"
        >
          ইউনিটি আর্নিং ই-লার্নিং প্ল্যাটফর্ম
        </motion.h1>
      </div>

      {/* 4. Official Town Hall Meeting Banner with Continuous Pulsing Sparkles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 relative inline-flex items-center gap-3 px-6 sm:px-8 py-3 rounded-2xl bg-gradient-to-r from-sky-600 via-emerald-600 to-indigo-600 text-white font-black text-xl sm:text-3xl shadow-lg border border-sky-300/60 overflow-hidden"
      >
        {/* Continuous Glint Light Stream */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-move pointer-events-none" />

        <div className="relative flex items-center justify-center">
          <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-amber-300 shrink-0 animate-spin-slow" />
        </div>
        <span className="tracking-wide">অফিসিয়াল টাউন হল মিটিং</span>
        <Radio className="w-6 h-6 text-emerald-200 shrink-0 animate-pulse ml-1" />
      </motion.div>

      {/* 5. Large Animated Welcome Address Card with Continuous Micro-Graphics */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 max-w-5xl w-full bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-9 lg:p-11 border-2 border-emerald-400 shadow-md relative overflow-hidden text-center"
      >
        {/* Flowing animated top bar */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-sky-500 via-emerald-500 to-indigo-500">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer-move" />
        </div>

        {/* Floating background watermark tech ring */}
        <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full border-4 border-dashed border-emerald-200/50 animate-spin-slow pointer-events-none -z-0" />
        <div className="absolute -left-16 -top-16 w-48 h-48 rounded-full border-4 border-dashed border-sky-200/50 animate-spin-reverse pointer-events-none -z-0" />

        <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 leading-snug font-sans relative z-10">
          ইউনিটি আর্নিং ই-লার্নিং প্ল্যাটফর্মের অফিশিয়াল টাউন হল মিটিংয়ে সবাইকে স্বাগতম।
        </p>

        {/* Live Audio Equalizer Wave Graphic inside the Card */}
        <div className="my-4 flex items-center justify-center gap-1.5 h-6">
          <span className="w-1.5 bg-emerald-500 rounded-full animate-pulse" style={{ height: '70%', animationDuration: '0.8s' }} />
          <span className="w-1.5 bg-sky-500 rounded-full animate-pulse" style={{ height: '100%', animationDuration: '0.5s' }} />
          <span className="w-1.5 bg-indigo-500 rounded-full animate-pulse" style={{ height: '45%', animationDuration: '0.9s' }} />
          <span className="w-1.5 bg-emerald-600 rounded-full animate-pulse" style={{ height: '85%', animationDuration: '0.6s' }} />
          <span className="w-1.5 bg-teal-500 rounded-full animate-pulse" style={{ height: '60%', animationDuration: '0.7s' }} />
          <span className="w-1.5 bg-amber-500 rounded-full animate-pulse" style={{ height: '90%', animationDuration: '0.4s' }} />
          <span className="w-1.5 bg-sky-600 rounded-full animate-pulse" style={{ height: '50%', animationDuration: '0.85s' }} />
        </div>

        <p className="mt-2 text-base sm:text-xl lg:text-2xl text-slate-900 font-black border-t-2 border-slate-100 pt-4 relative z-10">
          প্ল্যাটফর্মের নতুন আপডেট, কাজের নিয়মাবলি, আয়ের পথসমূহ এবং ক্যারিয়ারের সুযোগ নিয়ে বিস্তারিত আলোচনা
        </p>
      </motion.div>
    </div>
  );
};
