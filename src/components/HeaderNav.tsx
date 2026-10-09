import React from 'react';
import { Volume2, VolumeX, Maximize2, Minimize2, ListFilter, FileText, Download, PenTool } from 'lucide-react';

interface HeaderNavProps {
  currentSlide: number;
  totalSlides: number;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onToggleNotes: () => void;
  showNotes: boolean;
  onOpenOverview: () => void;
  onOpenExport: () => void;
  isPenActive: boolean;
  isPenBoxOpen?: boolean;
  onTogglePen: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentSlide,
  totalSlides,
  isFullscreen,
  onToggleFullscreen,
  soundEnabled,
  onToggleSound,
  onToggleNotes,
  showNotes,
  onOpenOverview,
  onOpenExport,
  isPenActive,
  isPenBoxOpen = true,
  onTogglePen,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-200 px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between select-none shadow-2xs">
      {/* Top-left: Unity Earning small professional brand label */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-600 to-emerald-600 flex items-center justify-center text-white font-extrabold text-xs shadow-2xs">
          UE
        </div>
        <div className="flex flex-col">
          <span className="text-xs sm:text-sm font-extrabold tracking-tight text-slate-900 leading-none">
            Unity Earning
          </span>
          <span className="text-[10px] text-slate-500 font-medium leading-none mt-1 hidden xs:inline">
            E-Learning Platform
          </span>
        </div>
      </div>

      {/* Top-right: Controls + TOWN HALL 2026 */}
      <div className="flex items-center gap-1.5 sm:gap-2.5">
        {/* Slide Overview / Table of contents button */}
        <button
          onClick={onOpenOverview}
          title="সকল স্লাইডের তালিকা (Jump to slide)"
          className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <ListFilter className="w-3.5 h-3.5 text-slate-500" />
          <span className="hidden sm:inline">স্লাইড তালিকা</span>
        </button>

        {/* Speaker Notes toggle */}
        <button
          onClick={onToggleNotes}
          title="স্পিকার নোট্স (Presenter notes)"
          className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
            showNotes
              ? 'bg-sky-50 border-sky-300 text-sky-800'
              : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">নোটস</span>
        </button>

        {/* Presentation Marker / Pen Tool toggle (নতুন কলম ও মার্কার টুল) */}
        <button
          onClick={onTogglePen}
          title={
            !isPenActive
              ? 'কলম/মার্কার চালু করুন (বক্স, তীর চিহ্ন, ফ্রিহ্যান্ড)'
              : !isPenBoxOpen
              ? 'মার্কার সেটিংস বক্স পুনরায় খুলুন'
              : 'মার্কার সেটিংস বক্স হাইড করুন'
          }
          className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
            isPenActive
              ? 'bg-red-500 border-red-600 text-white shadow-md ring-2 ring-red-400'
              : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-red-600'
          }`}
        >
          <PenTool className={`w-3.5 h-3.5 ${isPenActive ? 'text-white' : 'text-red-500'}`} />
          <span className="hidden sm:inline">
            {isPenActive ? (!isPenBoxOpen ? 'পেন চালু (বক্স খুলুন)' : 'পেন চালু') : 'পেন/মার্কার'}
          </span>
          {isPenActive && (
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping hidden sm:inline-block" />
          )}
        </button>

        {/* Audio feedback toggle (নতুন দৃষ্টিনন্দন সাউন্ড বাটন ও অডিও ভিজুয়ালাইজার) */}
        <button
          onClick={onToggleSound}
          title={soundEnabled ? 'সাউন্ড বন্ধ করুন (মিষ্টি সুর চালু আছে)' : 'সাউন্ড চালু করুন (ক্লিক করলে মিষ্টি সুর বাজবে)'}
          className={`p-1.5 sm:px-3 sm:py-1.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all cursor-pointer relative overflow-hidden active:scale-95 ${
            soundEnabled
              ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 text-white border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.35)] ring-2 ring-emerald-300/40'
              : 'border-slate-300 bg-white hover:bg-emerald-50/70 hover:border-emerald-300 text-slate-700 hover:text-emerald-700'
          }`}
        >
          {soundEnabled ? (
            <>
              {/* Shimmer light pass */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer-move pointer-events-none" />
              <Volume2 className="w-4 h-4 text-emerald-100 shrink-0 animate-pulse" />
              
              {/* 4-Band Dancing Equalizer Visualizer */}
              <div className="flex items-end gap-[2.5px] h-3.5 px-0.5">
                <span className="w-[3px] bg-white rounded-full animate-pulse shadow-xs" style={{ height: '70%', animationDuration: '0.45s' }} />
                <span className="w-[3px] bg-amber-200 rounded-full animate-pulse shadow-xs" style={{ height: '100%', animationDuration: '0.35s' }} />
                <span className="w-[3px] bg-sky-200 rounded-full animate-pulse shadow-xs" style={{ height: '55%', animationDuration: '0.55s' }} />
                <span className="w-[3px] bg-white rounded-full animate-pulse shadow-xs" style={{ height: '85%', animationDuration: '0.4s' }} />
              </div>
              <span className="hidden sm:inline tracking-wide font-black text-white">সাউন্ড চালু</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="hidden sm:inline font-bold text-slate-600">সাউন্ড</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 hidden sm:inline-block" title="সাউন্ড চালু করার ইঙ্গিত" />
            </>
          )}
        </button>

        {/* Fullscreen toggle */}
        <button
          onClick={onToggleFullscreen}
          title={isFullscreen ? 'ফুলস্ক্রিন থেকে বের হোন' : 'ফুলস্ক্রিন প্রেজেন্টেশন'}
          className="p-1.5 sm:p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>

        {/* Single HTML Export */}
        <button
          onClick={onOpenExport}
          title="Download / Copy standalone single-file HTML"
          className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors cursor-pointer"
        >
          <Download className="w-3.5 h-3.5 text-emerald-600" />
          <span>Single HTML</span>
        </button>

        {/* Top-right brand tag: TOWN HALL 2026 */}
        <div className="ml-1 pl-2 sm:pl-3 border-l border-slate-200 hidden xs:flex items-center">
          <span className="px-2.5 py-1 rounded-md bg-slate-900 text-white font-mono text-[10px] sm:text-xs font-black tracking-wider uppercase shadow-2xs">
            TOWN HALL 2026
          </span>
        </div>
      </div>
    </header>
  );
};
