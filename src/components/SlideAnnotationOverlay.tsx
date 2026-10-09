import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  PenTool,
  Square,
  ArrowUpRight,
  Circle,
  Highlighter,
  Undo2,
  Trash2,
  X,
  Check,
  Minus,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { soundManager } from '../utils/audio';

export type AnnotationTool = 'arrow' | 'rectangle' | 'pen' | 'highlighter' | 'circle';

export interface BaseAnnotation {
  id: string;
  tool: AnnotationTool;
  color: string;
  strokeWidth: number;
}

export interface FreehandAnnotation extends BaseAnnotation {
  tool: 'pen' | 'highlighter';
  points: { x: number; y: number }[];
}

export interface ShapeAnnotation extends BaseAnnotation {
  tool: 'arrow' | 'rectangle' | 'circle';
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export type AnnotationItem = FreehandAnnotation | ShapeAnnotation;

interface SlideAnnotationOverlayProps {
  isActive: boolean;
  isBoxOpen: boolean;
  onOpenBox: () => void;
  onCloseBox: () => void;
  onCloseAndClear: () => void;
  currentSlide: number;
}

const COLORS = [
  { name: 'লাল', hex: '#ef4444', ring: 'ring-red-400', bg: 'bg-red-500' },
  { name: 'হলুদ', hex: '#eab308', ring: 'ring-yellow-400', bg: 'bg-yellow-500' },
  { name: 'সবুজ', hex: '#10b981', ring: 'ring-emerald-400', bg: 'bg-emerald-500' },
  { name: 'নীল', hex: '#0ea5e9', ring: 'ring-sky-400', bg: 'bg-sky-500' },
  { name: 'বেগুনী', hex: '#8b5cf6', ring: 'ring-purple-400', bg: 'bg-purple-500' },
  { name: 'সাদা', hex: '#ffffff', ring: 'ring-slate-300', bg: 'bg-white' },
];

const STROKE_WIDTHS = [
  { label: 'চিকন', width: 3 },
  { label: 'মাঝারি', width: 6 },
  { label: 'মোটা', width: 10 },
];

export const SlideAnnotationOverlay: React.FC<SlideAnnotationOverlayProps> = ({
  isActive,
  isBoxOpen,
  onOpenBox,
  onCloseBox,
  onCloseAndClear,
  currentSlide,
}) => {
  // Annotation storage mapped by slide index
  const [annotationsBySlide, setAnnotationsBySlide] = useState<Record<number, AnnotationItem[]>>({});
  
  // Current active tool: 'arrow' | 'rectangle' | 'pen' | 'highlighter' | 'circle'
  const [activeTool, setActiveTool] = useState<AnnotationTool>('rectangle');
  const [activeColor, setActiveColor] = useState<string>('#ef4444');
  const [strokeWidth, setStrokeWidth] = useState<number>(5);

  // Drawing state
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentShape, setCurrentShape] = useState<AnnotationItem | null>(null);

  // Floating save feedback toast
  const [showSaveToast, setShowSaveToast] = useState(false);
  const toastTimeoutRef = useRef<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Get current slide annotations
  const currentAnnotations = annotationsBySlide[currentSlide] || [];

  // Helper to add annotation to current slide
  const addAnnotation = useCallback((item: AnnotationItem) => {
    setAnnotationsBySlide((prev) => {
      const existing = prev[currentSlide] || [];
      return {
        ...prev,
        [currentSlide]: [...existing, item],
      };
    });
  }, [currentSlide]);

  // Undo last annotation on current slide
  const handleUndo = useCallback(() => {
    setAnnotationsBySlide((prev) => {
      const existing = prev[currentSlide] || [];
      if (existing.length === 0) return prev;
      return {
        ...prev,
        [currentSlide]: existing.slice(0, -1),
      };
    });
  }, [currentSlide]);

  // Clear annotations on current slide
  const handleClearSlide = useCallback(() => {
    setAnnotationsBySlide((prev) => ({
      ...prev,
      [currentSlide]: [],
    }));
  }, [currentSlide]);

  // Handle Save: Closes the box, but keeps marking active!
  const handleSave = useCallback(() => {
    onCloseBox();
    setShowSaveToast(true);
    soundManager.playSuccessChime();
    if (toastTimeoutRef.current) {
      window.clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = window.setTimeout(() => {
      setShowSaveToast(false);
    }, 3200);
  }, [onCloseBox]);

  // Handle Close & Clear: Clears all drawings across slides and closes pen mode completely
  const handleCloseAndClear = useCallback(() => {
    setAnnotationsBySlide({});
    setCurrentShape(null);
    setIsDrawing(false);
    if (toastTimeoutRef.current) {
      window.clearTimeout(toastTimeoutRef.current);
    }
    setShowSaveToast(false);
    onCloseAndClear();
  }, [onCloseAndClear]);

  // Keyboard shortcut listener: Escape to close and clear, Ctrl+Z to undo
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseAndClear();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        handleUndo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, handleCloseAndClear, handleUndo]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        window.clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  // Get relative coordinates inside container
  const getCoordinates = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return { x: 0, y: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isActive) return;
    // Only left click
    if (e.button !== 0) return;

    // Don't draw if clicking on interactive toolbar or mini pill
    const target = e.target as HTMLElement;
    if (target.closest('.annotation-toolbar') || target.closest('.annotation-pill')) return;

    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);

    const { x, y } = getCoordinates(e);
    setIsDrawing(true);

    const id = `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    if (activeTool === 'pen' || activeTool === 'highlighter') {
      setCurrentShape({
        id,
        tool: activeTool,
        color: activeColor,
        strokeWidth: activeTool === 'highlighter' ? strokeWidth * 3 : strokeWidth,
        points: [{ x, y }],
      });
    } else {
      setCurrentShape({
        id,
        tool: activeTool,
        color: activeColor,
        strokeWidth,
        startX: x,
        startY: y,
        endX: x,
        endY: y,
      });
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDrawing || !currentShape) return;
    const { x, y } = getCoordinates(e);

    if (currentShape.tool === 'pen' || currentShape.tool === 'highlighter') {
      const freehand = currentShape as FreehandAnnotation;
      setCurrentShape({
        ...freehand,
        points: [...freehand.points, { x, y }],
      });
    } else {
      const shape = currentShape as ShapeAnnotation;
      setCurrentShape({
        ...shape,
        endX: x,
        endY: y,
      });
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDrawing || !currentShape) return;
    setIsDrawing(false);

    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // Ignore pointer capture error
    }

    // Filter out accidental tiny clicks unless deliberate
    if (currentShape.tool === 'pen' || currentShape.tool === 'highlighter') {
      const freehand = currentShape as FreehandAnnotation;
      if (freehand.points.length > 0) {
        addAnnotation(currentShape);
      }
    } else {
      const shape = currentShape as ShapeAnnotation;
      const dist = Math.hypot(shape.endX - shape.startX, shape.endY - shape.startY);
      // If user merely clicked in place with arrow or rect, create a neat default stamp
      if (dist < 6) {
        if (shape.tool === 'rectangle') {
          addAnnotation({
            ...shape,
            endX: shape.startX + 150,
            endY: shape.startY + 75,
          });
        } else if (shape.tool === 'circle') {
          addAnnotation({
            ...shape,
            endX: shape.startX + 85,
            endY: shape.startY + 85,
          });
        } else if (shape.tool === 'arrow') {
          addAnnotation({
            ...shape,
            startX: shape.startX - 65,
            startY: shape.startY + 65,
            endX: shape.startX,
            endY: shape.startY,
          });
        }
      } else {
        addAnnotation(currentShape);
      }
    }

    setCurrentShape(null);
  };

  if (!isActive) return null;

  // Render SVG Shape
  const renderItem = (item: AnnotationItem, isDraft: boolean = false) => {
    const key = isDraft ? 'draft-shape' : item.id;
    const opacity = item.tool === 'highlighter' ? 0.45 : 1;

    if (item.tool === 'pen' || item.tool === 'highlighter') {
      const { points } = item as FreehandAnnotation;
      if (!points || points.length === 0) return null;
      if (points.length === 1) {
        return (
          <circle
            key={key}
            cx={points[0].x}
            cy={points[0].y}
            r={item.strokeWidth / 2}
            fill={item.color}
            opacity={opacity}
          />
        );
      }

      // Smooth path
      const d = points.reduce((acc, pt, idx) => {
        return idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
      }, '');

      return (
        <path
          key={key}
          d={d}
          fill="none"
          stroke={item.color}
          strokeWidth={item.strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={opacity}
        />
      );
    }

    const shape = item as ShapeAnnotation;
    const { startX, startY, endX, endY, color, strokeWidth: width, tool } = shape;

    if (tool === 'rectangle') {
      const x = Math.min(startX, endX);
      const y = Math.min(startY, endY);
      const widthBox = Math.abs(endX - startX);
      const heightBox = Math.abs(endY - startY);

      return (
        <g key={key}>
          <rect
            x={x}
            y={y}
            width={widthBox}
            height={heightBox}
            rx={8}
            fill={color}
            fillOpacity={0.12}
          />
          <rect
            x={x}
            y={y}
            width={widthBox}
            height={heightBox}
            rx={8}
            fill="none"
            stroke={color}
            strokeWidth={width}
            strokeDasharray={isDraft ? '6 4' : undefined}
            className="filter drop-shadow-md"
          />
        </g>
      );
    }

    if (tool === 'circle') {
      const cx = (startX + endX) / 2;
      const cy = (startY + endY) / 2;
      const rx = Math.abs(endX - startX) / 2;
      const ry = Math.abs(endY - startY) / 2;

      return (
        <g key={key}>
          <ellipse
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            fill={color}
            fillOpacity={0.12}
          />
          <ellipse
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            fill="none"
            stroke={color}
            strokeWidth={width}
            strokeDasharray={isDraft ? '6 4' : undefined}
            className="filter drop-shadow-md"
          />
        </g>
      );
    }

    if (tool === 'arrow') {
      const headLength = Math.max(16, width * 3.2);
      const headAngle = Math.PI / 6; // 30 degrees
      const angle = Math.atan2(endY - startY, endX - startX);

      const p1x = endX - headLength * Math.cos(angle - headAngle);
      const p1y = endY - headLength * Math.sin(angle - headAngle);
      const p2x = endX - headLength * Math.cos(angle + headAngle);
      const p2y = endY - headLength * Math.sin(angle + headAngle);

      return (
        <g key={key} className="filter drop-shadow-md">
          {/* Arrow main shaft */}
          <line
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke={color}
            strokeWidth={width}
            strokeLinecap="round"
          />
          {/* Arrow solid triangle head */}
          <polygon
            points={`${endX},${endY} ${p1x},${p1y} ${p2x},${p2y}`}
            fill={color}
          />
          {/* Start tail dot */}
          <circle cx={startX} cy={startY} r={width * 0.9} fill={color} />
        </g>
      );
    }

    return null;
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="fixed inset-0 z-35 overflow-hidden select-none cursor-crosshair touch-none"
      style={{
        pointerEvents: 'auto',
      }}
    >
      {/* SVG Canvas for all annotations */}
      <svg className="w-full h-full absolute inset-0 pointer-events-none">
        {/* Render already drawn shapes for this slide */}
        {currentAnnotations.map((item) => renderItem(item, false))}

        {/* Render shape currently being dragged/drawn in real time */}
        {currentShape && renderItem(currentShape, true)}
      </svg>

      {/* Floating Save Feedback Toast Banner */}
      <AnimatePresence>
        {showSaveToast && (
          <motion.div
            initial={{ opacity: 0, y: -25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-emerald-600/95 text-white backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-extrabold border border-emerald-400/80 pointer-events-none"
          >
            <div className="w-6 h-6 rounded-full bg-white text-emerald-600 flex items-center justify-center font-bold">
              ✓
            </div>
            <span>সেভ হয়েছে! বক্স বন্ধ করা হয়েছে — এখন যেকোনো স্থানে ক্লিক ও ড্র্যাগ করে মার্ক করতে পারবেন।</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Mini Pill when settings box is closed/hidden via Save */}
      {!isBoxOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="annotation-pill absolute top-16 right-4 sm:right-8 z-40 bg-slate-900/90 hover:bg-slate-900 text-white backdrop-blur-md px-3.5 py-2 rounded-2xl border-2 border-slate-700 shadow-2xl flex items-center gap-3 text-xs font-bold pointer-events-auto transition-all"
        >
          {/* Active Tool Badge */}
          <div className="flex items-center gap-2">
            <span
              className="w-3.5 h-3.5 rounded-full border border-white/50 shadow-xs"
              style={{ backgroundColor: activeColor }}
            />
            <span className="text-slate-200 hidden sm:inline">
              {activeTool === 'rectangle' ? 'স্কয়ার ফ্রেম' : activeTool === 'arrow' ? 'তীর চিহ্ন' : activeTool === 'circle' ? 'সার্কেল' : 'ফ্রিহ্যান্ড'}
            </span>
            <span className="text-emerald-400 text-[10px] bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40">
              মার্কিং চালু ✏️
            </span>
          </div>

          <span className="text-slate-600">|</span>

          {/* Re-open settings box */}
          <button
            type="button"
            onClick={onOpenBox}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-2.5 py-1 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1 shadow-sm"
            title="মার্কার সেটিংস ও টুল বক্স পুনরায় খুলুন"
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>বক্স খুলুন</span>
          </button>

          {/* Quick Close & Clear button */}
          <button
            type="button"
            onClick={handleCloseAndClear}
            className="bg-rose-600/80 hover:bg-rose-600 text-white px-2.5 py-1 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1"
            title="সব ড্রয়িং মুছে পেন বন্ধ করুন"
          >
            <X className="w-3.5 h-3.5" />
            <span>বন্ধ</span>
          </button>
        </motion.div>
      )}

      {/* Floating Tool Palette Box */}
      <AnimatePresence>
        {isBoxOpen && (
          <motion.div
            drag
            dragMomentum={false}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="annotation-toolbar absolute top-16 right-4 sm:right-8 z-40 bg-white/95 backdrop-blur-md border-2 border-slate-300 rounded-3xl shadow-2xl p-3.5 text-slate-800 pointer-events-auto flex flex-col gap-3 max-w-[340px] select-none"
          >
            {/* Toolbar Header & Dragger */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shadow-xs">
                  <PenTool className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-black text-xs text-slate-900 leading-tight">
                    স্লাইড মার্কার টুল
                  </div>
                  <div className="text-[10px] text-slate-500 font-semibold">
                    লাইভ অ্যানোটেশন ও মার্কিং
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-[10px] bg-red-100 text-red-700 font-black px-2 py-0.5 rounded-full">
                  LIVE
                </span>
                <button
                  type="button"
                  onClick={handleCloseAndClear}
                  className="p-1 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-lg cursor-pointer transition-colors"
                  title="পেন বন্ধ করুন (সব মুছে যাবে)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Primary Drawing Modes */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-black text-slate-600 uppercase tracking-wider">
                টুল নির্বাচন করুন:
              </span>
              <div className="grid grid-cols-4 gap-1.5">
                {/* 1. Square Frame / Rectangle */}
                <button
                  type="button"
                  onClick={() => setActiveTool('rectangle')}
                  className={`p-2 rounded-xl flex flex-col items-center justify-center gap-1 font-bold text-[11px] transition-all cursor-pointer ${
                    activeTool === 'rectangle'
                      ? 'bg-red-600 text-white shadow-md ring-2 ring-red-400 scale-[1.02]'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                  title="স্কয়ার ফ্রেমে যেকোনো অংশ মার্ক করুন"
                >
                  <Square className="w-4 h-4" />
                  <span>স্কয়ার ফ্রেম</span>
                </button>

                {/* 2. Arrow Tool */}
                <button
                  type="button"
                  onClick={() => setActiveTool('arrow')}
                  className={`p-2 rounded-xl flex flex-col items-center justify-center gap-1 font-bold text-[11px] transition-all cursor-pointer ${
                    activeTool === 'arrow'
                      ? 'bg-red-600 text-white shadow-md ring-2 ring-red-400 scale-[1.02]'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                  title="তীর চিহ্ন দিয়ে নির্দিষ্ট বিষয় নির্দেশ করুন"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  <span>তীর চিহ্ন</span>
                </button>

                {/* 3. Freehand Pen */}
                <button
                  type="button"
                  onClick={() => setActiveTool('pen')}
                  className={`p-2 rounded-xl flex flex-col items-center justify-center gap-1 font-bold text-[11px] transition-all cursor-pointer ${
                    activeTool === 'pen'
                      ? 'bg-red-600 text-white shadow-md ring-2 ring-red-400 scale-[1.02]'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                  title="মাউস ঘুরিয়ে ফ্রিহ্যান্ডে দাগ বা লেখা দিন"
                >
                  <PenTool className="w-4 h-4" />
                  <span>ফ্রিহ্যান্ড</span>
                </button>

                {/* 4. Circle / Highlight */}
                <button
                  type="button"
                  onClick={() => setActiveTool('circle')}
                  className={`p-2 rounded-xl flex flex-col items-center justify-center gap-1 font-bold text-[11px] transition-all cursor-pointer ${
                    activeTool === 'circle'
                      ? 'bg-red-600 text-white shadow-md ring-2 ring-red-400 scale-[1.02]'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                  title="বৃত্তাকার বৃত্ত এঁকে চিহ্নিত করুন"
                >
                  <Circle className="w-4 h-4" />
                  <span>সার্কেল</span>
                </button>
              </div>
            </div>

            {/* Color Palette */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-black text-slate-600 uppercase tracking-wider flex items-center justify-between">
                <span>রং নির্বাচন:</span>
                <span className="text-[11px] text-slate-500 font-bold">
                  {COLORS.find((c) => c.hex === activeColor)?.name}
                </span>
              </span>
              <div className="flex items-center justify-between gap-1.5 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                {COLORS.map((c) => (
                  <button
                    key={c.hex}
                    type="button"
                    onClick={() => setActiveColor(c.hex)}
                    style={{ backgroundColor: c.hex }}
                    className={`w-7 h-7 rounded-full transition-transform cursor-pointer border border-slate-300 flex items-center justify-center ${
                      activeColor === c.hex ? 'scale-115 ring-2 ' + c.ring : 'hover:scale-105'
                    }`}
                    title={c.name}
                  >
                    {activeColor === c.hex && (
                      <Check
                        className={`w-3.5 h-3.5 ${
                          c.hex === '#ffffff' || c.hex === '#eab308'
                            ? 'text-slate-900'
                            : 'text-white'
                        }`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Stroke Thickness */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-black text-slate-600 uppercase tracking-wider">
                দাগের ঘনত্ব:
              </span>
              <div className="grid grid-cols-3 gap-1.5 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                {STROKE_WIDTHS.map((s) => (
                  <button
                    key={s.width}
                    type="button"
                    onClick={() => setStrokeWidth(s.width)}
                    className={`py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      strokeWidth === s.width
                        ? 'bg-white shadow-xs text-slate-900 border border-slate-300'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span
                      className="rounded-full bg-slate-800"
                      style={{ width: s.width + 1, height: s.width + 1 }}
                    />
                    <span>{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions: Undo & Clear current slide */}
            <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
              <button
                type="button"
                onClick={handleUndo}
                disabled={currentAnnotations.length === 0}
                className="flex-1 py-1.5 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:pointer-events-none text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                title="পূর্বাবস্থায় নিন (Ctrl+Z)"
              >
                <Undo2 className="w-3.5 h-3.5" />
                <span>পূর্বাবস্থা</span>
              </button>

              <button
                type="button"
                onClick={handleClearSlide}
                disabled={currentAnnotations.length === 0}
                className="flex-1 py-1.5 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:pointer-events-none text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                title="বর্তমান স্লাইডের সব ড্রয়িং মুছুন"
              >
                <Trash2 className="w-3.5 h-3.5 text-slate-500" />
                <span>স্লাইড মুছুন</span>
              </button>
            </div>

            {/* PRIMARY USER-REQUESTED BUTTONS: সেভ (Save) and বন্ধ (Close) */}
            <div className="pt-2 border-t-2 border-slate-200 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                {/* ১. সেভ (Save) বাটন - বক্স অফ হয়ে যাবে, কিন্তু মার্কিং চালু থাকবে */}
                <button
                  type="button"
                  onClick={handleSave}
                  className="py-2.5 px-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-600/25 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                  title="সেভ করুন: বক্স বন্ধ হবে কিন্তু মার্ক করা চালু থাকবে"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>সেভ</span>
                </button>

                {/* ২. বন্ধ (Close) বাটন - সব রিমুভ হয়ে যাবে এবং পেন বন্ধ হবে */}
                <button
                  type="button"
                  onClick={handleCloseAndClear}
                  className="py-2.5 px-3 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-black text-sm flex items-center justify-center gap-1.5 shadow-lg shadow-red-600/25 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                  title="বন্ধ করুন: সব ড্রয়িং রিমুভ হয়ে যাবে এবং পেন অফ হবে"
                >
                  <X className="w-4 h-4 stroke-[3]" />
                  <span>বন্ধ</span>
                </button>
              </div>

              {/* Informative Helper Note */}
              <div className="flex items-center justify-between text-[10px] text-slate-500 font-semibold px-1">
                <span>✓ <b>সেভ</b>: বক্স বন্ধ, মার্ক চালু</span>
                <span>✕ <b>বন্ধ</b>: সব মুছে অফ</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
