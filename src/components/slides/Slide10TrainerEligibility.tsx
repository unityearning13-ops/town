import React from 'react';
import { motion } from 'motion/react';
import { Check, ClipboardCheck, UserCheck } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
}

export const Slide10TrainerEligibility: React.FC<SlideProps> = ({ isActive }) => {
  const criteria = [
    "ভালো Communication Skill",
    "পরিষ্কারভাবে কথা বলার দক্ষতা",
    "Leadership Skill",
    "নিয়মিত Meeting-এ অংশগ্রহণ",
    "শিক্ষার্থীদের Guide করার সক্ষমতা",
    "দায়িত্বশীলতা ও নিয়ম মেনে চলা",
    "১৫টির বেশি Convert-এর অভিজ্ঞতা",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl xl:max-w-7xl mx-auto px-4 lg:px-8 py-2 text-center select-none overflow-hidden">
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs sm:text-base font-black uppercase tracking-wider"
      >
        <ClipboardCheck className="w-5 h-5 text-emerald-700" />
        Selection Criteria
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight"
      >
        Trainer Account পেতে প্রয়োজনীয় যোগ্যতা
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-2 text-sm sm:text-xl text-slate-900 font-black"
      >
        যোগ্যতা ও পারফরম্যান্স মূল্যায়নের ৭টি আবশ্যিক মানদণ্ড
      </motion.p>

      {/* Visual Checklist Grid */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-5xl lg:max-w-6xl text-left">
        {criteria.map((item, idx) => {
          const isHighlight = idx === criteria.length - 1;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: 0.25 + idx * 0.06 }}
              className={`flex items-center gap-4 p-4 sm:p-5 rounded-2xl border-2 ${
                isHighlight
                  ? 'bg-emerald-100 border-emerald-400 ring-2 ring-emerald-300 sm:col-span-2'
                  : 'bg-white border-slate-300 shadow-xs'
              }`}
            >
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 font-black ${
                  isHighlight ? 'bg-emerald-600 text-white shadow-2xs' : 'bg-emerald-100 text-emerald-950'
                }`}
              >
                <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
              </div>

              <span
                className={`text-sm sm:text-xl font-black ${
                  isHighlight ? 'text-emerald-950 font-black text-base sm:text-2xl' : 'text-slate-950'
                }`}
              >
                {item}
              </span>

              {isHighlight && (
                <span className="ml-auto hidden sm:inline-block text-xs sm:text-sm font-black text-emerald-950 bg-emerald-200 px-4 py-1 rounded-full uppercase">
                  Key Milestone
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom statement */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-4 max-w-4xl lg:max-w-5xl w-full bg-slate-950 text-white rounded-2xl p-4 sm:p-5 shadow-xs flex items-center justify-center gap-3 text-center"
      >
        <UserCheck className="w-6 h-6 text-emerald-400 shrink-0" />
        <p className="text-sm sm:text-xl font-black text-slate-100">
          উপরের যোগ্যতা বিবেচনা করে উপযুক্ত সদস্যদের <strong className="text-emerald-400 font-black">Trainer Account</strong> দেওয়া হতে পারে।
        </p>
      </motion.div>
    </div>
  );
};
