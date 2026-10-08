import React from 'react';
import { X, FileText, CheckCircle2 } from 'lucide-react';
import { SLIDES_DATA } from '../data/slidesData';

interface SpeakerNotesProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
}

export const SpeakerNotesDrawer: React.FC<SpeakerNotesProps> = ({
  isOpen,
  onClose,
  currentSlide,
}) => {
  if (!isOpen) return null;

  const currentData = SLIDES_DATA[currentSlide];

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-white shadow-2xl border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-200">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Presenter Notes</h3>
            <span className="text-xs text-slate-500 font-mono">
              Slide {currentData.slideNumber} / 12
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 overflow-y-auto space-y-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Category
          </span>
          <p className="text-sm font-bold text-slate-800 bg-slate-100 px-3 py-1.5 rounded-lg inline-block">
            {currentData.category}
          </p>
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            মঞ্চে উপস্থাপনের মূল বার্তা
          </span>
          <div className="p-4 rounded-xl bg-sky-50 border border-sky-200/80 text-sky-950 font-medium text-sm leading-relaxed">
            {currentData.speakerNote}
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
            উপস্থাপক গাইডলাইন
          </span>
          <ul className="text-xs text-slate-600 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>কথা বলার সময় স্বচ্ছতা বজায় রাখুন এবং নির্দিষ্ট কোনো আয়ের গ্যারান্টি দেবেন না।</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>সদস্যদের টিমওয়ার্ক ও নিয়মানুবর্তিতার প্রতি উৎসাহিত করুন।</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
