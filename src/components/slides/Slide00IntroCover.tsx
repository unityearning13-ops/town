import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Radio, 
  Award, 
  Users, 
  TrendingUp, 
  Volume2, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  ShieldCheck, 
  Star,
  PartyPopper
} from 'lucide-react';
import { soundManager } from '../../utils/audio';

interface SlideProps {
  isActive: boolean;
  onNextSlide?: () => void;
}

export const Slide00IntroCover: React.FC<SlideProps> = ({ isActive, onNextSlide }) => {
  const [hasPlayedWelcomeAudio, setHasPlayedWelcomeAudio] = useState(false);
  const [showSparkleBurst, setShowSparkleBurst] = useState(false);

  const handlePlayWelcomeSound = () => {
    soundManager.playWelcomeCelebration();
    setHasPlayedWelcomeAudio(true);
    setShowSparkleBurst(true);
    setTimeout(() => setShowSparkleBurst(false), 2400);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 text-center select-none overflow-hidden relative">
      
      {/* 1. Dramatic Stage Spotlights Sweeping Across the Canvas */}
      <div className="absolute top-0 left-1/10 w-96 h-[600px] bg-gradient-to-b from-sky-400/25 via-emerald-300/15 to-transparent blur-3xl pointer-events-none origin-top animate-spotlight-left -z-10" />
      <div className="absolute top-0 right-1/10 w-96 h-[600px] bg-gradient-to-b from-emerald-400/25 via-sky-300/15 to-transparent blur-3xl pointer-events-none origin-top animate-spotlight-right -z-10" />

      {/* 2. Rotating Multi-layered Energy Aura in Center */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.75, 0.4],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[450px] h-[450px] sm:w-[700px] sm:h-[700px] bg-gradient-to-tr from-sky-300/35 via-emerald-300/35 to-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* 3. Floating Celebration Particles / Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/6 left-1/12 w-4 h-4 rounded-full bg-emerald-400/60 animate-celebration-particle blur-[0.5px]" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/5 right-1/12 w-5 h-5 rounded-full bg-amber-400/60 animate-celebration-particle blur-[0.5px]" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-1/3 right-1/8 w-3.5 h-3.5 rounded-full bg-sky-400/60 animate-celebration-particle blur-[0.5px]" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/8 w-4 h-4 rounded-full bg-indigo-400/60 animate-celebration-particle blur-[0.5px]" style={{ animationDelay: '2.8s' }} />
        <div className="absolute top-1/2 left-1/20 w-3 h-3 rounded-full bg-teal-400/60 animate-float-gentle" />
        <div className="absolute top-1/2 right-1/20 w-3 h-3 rounded-full bg-emerald-400/60 animate-float-reverse" />
      </div>

      {/* Sparkle burst celebration particles on click */}
      <AnimatePresence>
        {showSparkleBurst && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center"
          >
            <div className="relative w-96 h-96">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{ 
                    x: Math.cos((i * 30 * Math.PI) / 180) * 160, 
                    y: Math.sin((i * 30 * Math.PI) / 180) * 160,
                    opacity: 0,
                    scale: 0.5
                  }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-400 to-emerald-400 shadow-[0_0_12px_rgba(245,158,11,0.8)]"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Top Grand Brand & Live Broadcast Pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -25 }}
        animate={isActive ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: -25 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-3 relative"
      >
        <div className="inline-flex items-center gap-2 sm:gap-3.5 px-4 sm:px-6 py-2 rounded-full bg-white/95 backdrop-blur-md border-2 border-emerald-400/90 shadow-[0_4px_20px_-4px_rgba(16,185,129,0.25)] relative overflow-hidden group">
          {/* Continuous Shimmer Light Ray */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-200/50 to-transparent animate-shimmer-move pointer-events-none" />

          {/* Animated Brand Emblem with Concentric Spin */}
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500 animate-spin-slow" />
            <div className="absolute inset-0.5 rounded-full border border-sky-400/60 animate-spin-reverse" />
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-emerald-600 via-teal-600 to-sky-600 flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-sm animate-pulse">
              UE
            </div>
          </div>

          <span className="text-sm sm:text-xl font-black tracking-wider uppercase text-slate-950 font-sans">
            Unity Earning
          </span>

          {/* Live Broadcast Indicator */}
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full bg-rose-50 border border-rose-300 shadow-2xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-600" />
            </span>
            <span className="text-[11px] sm:text-xs font-black text-rose-950 uppercase tracking-wide">
              Live Town Hall
            </span>
          </div>

          <span className="hidden xs:inline-block text-xs sm:text-sm font-black text-emerald-950 bg-emerald-100/90 px-3 py-0.5 rounded-full border border-emerald-300">
            E-Learning Platform
          </span>
        </div>
      </motion.div>

      {/* 5. Main Platform Name with High-Contrast Typography */}
      <div className="relative max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-tight drop-shadow-xs"
        >
          ইউনিটি আর্নিং ই-লার্নিং প্ল্যাটফর্ম
        </motion.h1>
      </div>

      {/* 6. Official Town Hall Meeting Banner with Golden Sparkles and Glint */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-3.5 relative inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-9 py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 text-white font-black text-lg sm:text-2xl md:text-3xl shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)] border border-emerald-300/70 overflow-hidden"
      >
        {/* Continuous Glint Light Stream */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent animate-shimmer-move pointer-events-none" />

        <div className="relative flex items-center justify-center">
          <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300 shrink-0 animate-spin-slow" />
        </div>
        <span className="tracking-wide">অফিসিয়াল টাউন হল মিটিং</span>
        <Radio className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-200 shrink-0 animate-pulse ml-1" />
      </motion.div>

      {/* 7. Grand Welcome Address Hero Card (দৃষ্টিনন্দন ওয়েলকাম কার্ড ও লাইভ অ্যানিমেশন) */}
      <motion.div
        initial={{ opacity: 0, y: 22, scale: 0.97 }}
        animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 22, scale: 0.97 }}
        transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 max-w-5xl w-full bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-8 lg:p-10 border-2 border-emerald-400/90 shadow-[0_15px_35px_-10px_rgba(16,185,129,0.22)] relative overflow-hidden text-center"
      >
        {/* Animated Top Rainbow Bar */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-emerald-500 via-teal-400 via-sky-500 via-indigo-500 to-amber-400 animate-gradient-flow overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer-move" />
        </div>

        {/* Ambient Decorative Rotating Watermarks */}
        <div className="absolute -right-16 -bottom-16 w-52 h-52 rounded-full border-4 border-dashed border-emerald-200/60 animate-spin-slow pointer-events-none -z-0" />
        <div className="absolute -left-16 -top-16 w-44 h-44 rounded-full border-4 border-dashed border-sky-200/60 animate-spin-reverse pointer-events-none -z-0" />

        {/* Celebratory Welcome Tag */}
        <div className="mb-3 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-300 text-amber-900 text-xs sm:text-sm font-black shadow-2xs relative z-10 animate-float-gentle">
          <PartyPopper className="w-4 h-4 text-amber-600 animate-pulse" />
          <span>সকল শিক্ষক, শিক্ষার্থী ও সম্মানিত সদস্যদের সাদর অভ্যর্থনা</span>
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
        </div>

        {/* Main Welcome Headline */}
        <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 leading-snug font-sans relative z-10">
          ইউনিটি আর্নিং ই-লার্নিং প্ল্যাটফর্মের অফিশিয়াল টাউন হল মিটিংয়ে সবাইকে স্বাগতম।
        </p>

        {/* Live Audio Equalizer Wave Graphic inside the Card */}
        <div className="my-3.5 flex items-center justify-center gap-1.5 h-6 relative z-10">
          <span className="w-1.5 bg-emerald-500 rounded-full animate-pulse shadow-xs" style={{ height: '70%', animationDuration: '0.8s' }} />
          <span className="w-1.5 bg-sky-500 rounded-full animate-pulse shadow-xs" style={{ height: '100%', animationDuration: '0.5s' }} />
          <span className="w-1.5 bg-indigo-500 rounded-full animate-pulse shadow-xs" style={{ height: '45%', animationDuration: '0.9s' }} />
          <span className="w-1.5 bg-emerald-600 rounded-full animate-pulse shadow-xs" style={{ height: '85%', animationDuration: '0.6s' }} />
          <span className="w-1.5 bg-teal-500 rounded-full animate-pulse shadow-xs" style={{ height: '60%', animationDuration: '0.7s' }} />
          <span className="w-1.5 bg-amber-500 rounded-full animate-pulse shadow-xs" style={{ height: '90%', animationDuration: '0.4s' }} />
          <span className="w-1.5 bg-sky-600 rounded-full animate-pulse shadow-xs" style={{ height: '50%', animationDuration: '0.85s' }} />
        </div>

        {/* Detailed Discussion Points */}
        <p className="mt-1 text-base sm:text-xl lg:text-2xl text-slate-900 font-black border-t-2 border-slate-100 pt-3.5 relative z-10">
          প্ল্যাটফর্মের নতুন আপডেট, কাজের নিয়মাবলি, আয়ের পথসমূহ এবং ক্যারিয়ারের সুযোগ নিয়ে বিস্তারিত আলোচনা
        </p>

        {/* 4 Interactive Live Pulse Badges (টাউন হল লাইভ ফিচার হাইলাইটস) */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 relative z-10 text-left">
          <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50/90 border border-emerald-200/90 flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Users className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-bold text-emerald-800">অংশগ্রহণকারী</div>
              <div className="text-xs sm:text-sm font-black text-emerald-950">৫০০+ সক্রিয় সদস্য</div>
            </div>
          </div>

          <div className="p-2 sm:p-2.5 rounded-xl bg-sky-50/90 border border-sky-200/90 flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0">
              <Award className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-bold text-sky-800">সার্টিফিকেশন</div>
              <div className="text-xs sm:text-sm font-black text-sky-950">১০ কনভার্ট রিওয়ার্ড</div>
            </div>
          </div>

          <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-50/90 border border-indigo-200/90 flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <TrendingUp className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-bold text-indigo-800">আয়ের মাধ্যম</div>
              <div className="text-xs sm:text-sm font-black text-indigo-950">৪টি নিশ্চিত পথ</div>
            </div>
          </div>

          <div className="p-2 sm:p-2.5 rounded-xl bg-amber-50/90 border border-amber-200/90 flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-bold text-amber-800">ট্রেইনারশিপ</div>
              <div className="text-xs sm:text-sm font-black text-amber-950">অফিসিয়াল ক্যারিয়ার</div>
            </div>
          </div>
        </div>

        {/* 8. Interactive Action Row: Welcome Sound Chime Button + Next Slide CTA */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 relative z-10 pt-2 border-t border-slate-100">
          {/* Button 1: Play Welcome Fanfare Chime */}
          <button
            onClick={handlePlayWelcomeSound}
            title="ওয়েলকাম সাউন্ড শুনুন"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Volume2 className="w-4 h-4 animate-bounce" />
            <span>{hasPlayedWelcomeAudio ? 'ওয়েলকাম সুর পুনরায় শুনুন 🔔' : 'ওয়েলকাম সুর শুনুন 🔔'}</span>
          </button>

          {/* Button 2: Proceed to next slide */}
          {onNextSlide && (
            <button
              onClick={onNextSlide}
              title="মিটিংয়ের পরবর্তী স্লাইডে যান"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 hover:from-emerald-700 hover:to-sky-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer group"
            >
              <span>মিটিং শুরু করুন (পরবর্তী স্লাইড)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};
