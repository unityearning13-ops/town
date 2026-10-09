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

        {/* Audio feedback toggle */}
        <button
          onClick={onToggleSound}
          title={soundEnabled ? 'সাউন্ড বন্ধ করুন' : 'ট্রানজিশন সাউন্ড চালু করুন'}
          className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
            soundEnabled
              ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
              : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-500'
          }`}
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-3.5 h-3.5" />
              <div className="flex items-center gap-0.5 h-3">
                <span className="w-0.5 bg-emerald-600 rounded-full animate-pulse" style={{ height: '70%', animationDuration: '0.6s' }} />
                <span className="w-0.5 bg-emerald-600 rounded-full animate-pulse" style={{ height: '100%', animationDuration: '0.4s' }} />
                <span className="w-0.5 bg-emerald-600 rounded-full animate-pulse" style={{ height: '50%', animationDuration: '0.8s' }} />
              </div>
            </>
          ) : (
            <VolumeX className="w-3.5 h-3.5" />
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
