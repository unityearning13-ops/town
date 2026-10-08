import React, { useState } from 'react';
import { X, Copy, Check, Download, Code, Sparkles, ExternalLink } from 'lucide-react';
import { generateStandaloneHtml } from '../utils/standaloneHtmlGenerator';

interface StandaloneExportProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneExportModal: React.FC<StandaloneExportProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const htmlContent = generateStandaloneHtml();

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'unity-earning-town-hall-presentation.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleOpenNewTab = () => {
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Single Self-Contained HTML File
              </h3>
              <p className="text-xs text-slate-500">
                No dependencies required — opens in any web browser directly
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

        {/* Description & Action buttons */}
        <div className="p-5 border-b border-slate-100 bg-emerald-50/50 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-emerald-900 max-w-md">
            সম্পূর্ণ প্রেজেন্টেশনটি একটিমাত্র স্বয়ংসম্পূর্ণ <strong>.html</strong> ফাইলে প্রস্তুত করা হয়েছে। আপনি চাইলে সরাসরি ডাউনলোড করতে পারেন অথবা কোড কপি করে যেকোনো ব্রাউজারে অফলাইনে চালাতে পারেন।
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer active:scale-95"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'কপি হয়েছে!' : 'Copy HTML'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download .html</span>
            </button>
          </div>
        </div>

        {/* Code Preview Previewer */}
        <div className="p-4 flex-1 overflow-hidden flex flex-col">
          <span className="text-xs font-mono text-slate-400 mb-2">Code preview (first 100 lines):</span>
          <pre className="p-4 bg-slate-950 text-emerald-400 font-mono text-[11px] leading-relaxed rounded-2xl overflow-y-auto flex-1 select-all">
            {htmlContent.slice(0, 4500)}...
          </pre>
        </div>
      </div>
    </div>
  );
};
