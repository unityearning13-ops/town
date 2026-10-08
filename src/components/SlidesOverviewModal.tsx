import React from 'react';
import { X, Layers, Check } from 'lucide-react';
import { SLIDES_DATA } from '../data/slidesData';

interface SlidesOverviewProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (index: number) => void;
}

const SLIDE_TITLES: { [key: number]: string } = {
  1: "Official Counseling Meeting Cover",
  2: "Welcome & Meeting Discussion Scope",
  3: "This Month's Platform Updates",
  4: "Course Homework Submission",
  5: "Registration & Number Checker",
  6: "Important Account Policy",
  7: "Ways to Earn (Overview)",
  8: "Way 01 — Lead Generation",
  9: "Way 02 — Course + Project Work",
  10: "Way 03 — Trainer / Sub-Admin Account",
  11: "Trainer Account Eligibility",
  12: "Recruitment Notice (Female Counsellor)",
  13: "Closing & Thank You",
};

export const SlidesOverviewModal: React.FC<SlidesOverviewProps> = ({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                সকল স্লাইড সূচিপত্র (Presentation Deck)
              </h3>
              <p className="text-xs text-slate-500">
                যেকোনো স্লাইডে সরাসরি যেতে ক্লিক করুন
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-slate-200 text-slate-500 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid of slides */}
        <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {SLIDES_DATA.map((slide, idx) => {
            const isCurrent = idx === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between group cursor-pointer ${
                  isCurrent
                    ? 'border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-200 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-sky-300 hover:bg-sky-50/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isCurrent
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-sky-100 group-hover:text-sky-800'
                    }`}
                  >
                    SLIDE {slide.slideNumber}
                  </span>
                  {isCurrent && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                      <Check className="w-3.5 h-3.5" />
                      বর্তমান
                    </span>
                  )}
                </div>

                <h4 className="text-sm font-bold text-slate-800 line-clamp-2 leading-snug">
                  {SLIDE_TITLES[slide.id] || slide.category}
                </h4>

                <span className="text-[11px] text-slate-400 mt-2 block">
                  {slide.category}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
