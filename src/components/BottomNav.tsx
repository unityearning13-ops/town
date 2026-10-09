import React from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw, ArrowDown } from 'lucide-react';

interface BottomNavProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onGoToSlide: (index: number) => void;
  isAutoplay: boolean;
  onToggleAutoplay: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onGoToSlide,
  isAutoplay,
  onToggleAutoplay,
}) => {
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === totalSlides - 1;

  // Format "01 / 12"
  const formattedCurrent = String(currentSlide + 1).padStart(2, '0');
  const formattedTotal = String(totalSlides).padStart(2, '0');
  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 select-none pointer-events-none">
      {/* Background pill bar - slimmer and compact with refined colors */}
      <div className="max-w-3xl mx-auto px-3 pb-2 sm:pb-3 flex flex-col items-center">
        <div className="w-full bg-white/95 backdrop-blur-md border border-emerald-500/20 rounded-full px-3 py-1.5 shadow-[0_8px_30px_rgba(16,185,129,0.12)] pointer-events-auto flex items-center justify-between gap-2">
          
          {/* Left section: Previous Button & Autoplay */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={onPrev}
              disabled={isFirst}
              title="পূর্ববর্তী স্লাইড (Arrow Left)"
              className={`px-3 py-1 rounded-full flex items-center gap-1 text-[11px] font-bold transition-all cursor-pointer ${
                isFirst
                  ? 'opacity-30 cursor-not-allowed bg-slate-100 text-slate-400'
                  : 'bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 active:scale-95'
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">পূর্ববর্তী</span>
            </button>

            {/* Slideshow timer toggle */}
            <button
              onClick={onToggleAutoplay}
              title={isAutoplay ? 'অটো-স্লাইড বন্ধ করুন' : 'অটো-স্লাইড চালু করুন'}
              className={`p-1.5 rounded-full border text-[11px] font-bold transition-colors cursor-pointer ${
                isAutoplay
                  ? 'bg-sky-50 border-sky-300 text-sky-700 shadow-xs'
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-500'
              }`}
            >
              {isAutoplay ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
          </div>

          {/* Center section: Slimmer circular Down / Next Arrow Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={isLast ? () => onGoToSlide(0) : onNext}
              title={isLast ? 'শুরুতে ফিরে যান' : 'পরবর্তী স্লাইড (Down/Space)'}
              className={`relative group w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white cursor-pointer transition-transform active:scale-95 shadow-md ${
                isLast
                  ? 'bg-slate-900 hover:bg-slate-800'
                  : 'bg-gradient-to-tr from-emerald-600 via-teal-600 to-sky-600 hover:from-emerald-500 hover:to-sky-500 animate-soft-pulse'
              }`}
            >
              {isLast ? (
                <RotateCcw className="w-4 h-4" />
              ) : (
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>

          {/* Right section: Slide Number Indicator + Next Button */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Slide counter indicator */}
            <div className="px-2.5 py-0.5 rounded-lg bg-emerald-50/80 border border-emerald-200 text-slate-700 font-mono text-[11px] font-black tracking-wider flex items-center gap-0.5">
              <span className="text-emerald-700">{formattedCurrent}</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-600">{formattedTotal}</span>
            </div>

            {/* Next button */}
            <button
              onClick={isLast ? () => onGoToSlide(0) : onNext}
              title={isLast ? 'শুরুতে যান' : 'পরবর্তী স্লাইড (Arrow Right)'}
              className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white flex items-center gap-1 text-[11px] font-black transition-all active:scale-95 cursor-pointer shadow-sm"
            >
              <span className="hidden sm:inline">{isLast ? 'রিস্টার্ট' : 'পরবর্তী'}</span>
              {isLast ? <RotateCcw className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Interactive Dots Track */}
        <div className="mt-1 hidden sm:flex items-center gap-1 pointer-events-auto">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => onGoToSlide(idx)}
              title={`স্লাইড ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === currentSlide
                  ? 'w-6 bg-emerald-600 shadow-xs'
                  : 'w-1.5 bg-slate-300 hover:bg-emerald-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thin progress indicator bar at the bottom */}
      <div className="w-full h-1 bg-slate-200/80 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-sky-500 via-emerald-500 to-teal-500 transition-all duration-300 ease-out relative overflow-hidden"
          style={{ width: `${progressPercent}%` }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer-move" />
        </div>
      </div>
    </div>
  );
};
