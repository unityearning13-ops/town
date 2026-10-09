/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeaderNav } from './components/HeaderNav';
import { BottomNav } from './components/BottomNav';
import { SpeakerNotesDrawer } from './components/SpeakerNotesDrawer';
import { SlidesOverviewModal } from './components/SlidesOverviewModal';
import { StandaloneExportModal } from './components/StandaloneExportModal';
import { SlideAnnotationOverlay } from './components/SlideAnnotationOverlay';
import { soundManager } from './utils/audio';

// Import 13 slides (including special intro cover)
import { Slide00IntroCover } from './components/slides/Slide00IntroCover';
import { Slide01Welcome } from './components/slides/Slide01Welcome';
import { Slide02Updates } from './components/slides/Slide02Updates';
import { Slide03Homework } from './components/slides/Slide03Homework';
import { Slide04NumberChecker } from './components/slides/Slide04NumberChecker';
import { Slide05PolicyWarning } from './components/slides/Slide05PolicyWarning';
import { Slide06WaysOverview } from './components/slides/Slide06WaysOverview';
import { Slide07LeadGeneration } from './components/slides/Slide07LeadGeneration';
import { Slide08CourseProject } from './components/slides/Slide08CourseProject';
import { Slide09TrainerAccount } from './components/slides/Slide09TrainerAccount';
import { Slide10TrainerEligibility } from './components/slides/Slide10TrainerEligibility';
import { Slide11Recruitment } from './components/slides/Slide11Recruitment';
import { Slide12Closing } from './components/slides/Slide12Closing';

const TOTAL_SLIDES = 13;

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isPenActive, setIsPenActive] = useState(false);
  const [isPenBoxOpen, setIsPenBoxOpen] = useState(true);

  // Touch tracking for mobile swipe
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  const handleTogglePen = useCallback(() => {
    setIsPenActive((prev) => {
      if (!prev) {
        // Activate pen and open the settings box
        setIsPenBoxOpen(true);
        soundManager.playPenToggle();
        return true;
      } else {
        // If pen is active and box is hidden, re-open the box
        if (!isPenBoxOpen) {
          setIsPenBoxOpen(true);
          soundManager.playPenToggle();
          return true;
        } else {
          // If box is open, close/save the box while keeping marking active
          setIsPenBoxOpen(false);
          return true;
        }
      }
    });
  }, [isPenBoxOpen]);

  const handleCloseAndClearPen = useCallback(() => {
    setIsPenActive(false);
    setIsPenBoxOpen(false);
    soundManager.playClickChime();
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index === currentSlide) return;
    const newDir = index > currentSlide ? 1 : -1;
    setDirection(newDir);
    setCurrentSlide(index);
    soundManager.playSlideTransition();
  }, [currentSlide]);

  const handleNext = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
      soundManager.playSlideTransition();
    } else {
      // Loop to beginning if at the end
      setDirection(1);
      setCurrentSlide(0);
      soundManager.playSlideTransition();
    }
  }, [currentSlide]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
      soundManager.playSlideTransition();
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input/textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        handleTogglePen();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(TOTAL_SLIDES - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, goToSlide, handleTogglePen]);

  // Autoplay slideshow timer
  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      handleNext();
    }, 10000); // 10 seconds per slide
    return () => clearInterval(timer);
  }, [isAutoplay, handleNext]);

  // Fullscreen toggle handler
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const handleToggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    soundManager.enabled = nextVal;
    // Play instant pleasant crystal sound whenever sound icon is toggled
    soundManager.playToggleChime(nextVal);
  };

  // Touch event handlers for mobile gestures
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    const diffY = e.changedTouches[0].clientY - touchStartY.current;

    // Horizontal swipe takes precedence
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX < 0) {
        handleNext(); // Swipe left -> Next
      } else {
        handlePrev(); // Swipe right -> Prev
      }
    } else if (Math.abs(diffY) > 60) {
      // Vertical swipe fallback
      if (diffY < 0) {
        handleNext(); // Swipe up -> Next
      } else {
        handlePrev(); // Swipe down -> Prev
      }
    }
  };

  // Slide transition animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 15 : -15,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: 'easeOut' as const,
      },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -15 : 15,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeIn' as const,
      },
    }),
  };

  // Render individual slide component
  const renderSlide = (index: number) => {
    switch (index) {
      case 0:
        return <Slide00IntroCover isActive={currentSlide === 0} onNextSlide={handleNext} />;
      case 1:
        return <Slide01Welcome isActive={currentSlide === 1} />;
      case 2:
        return <Slide02Updates isActive={currentSlide === 2} />;
      case 3:
        return <Slide03Homework isActive={currentSlide === 3} />;
      case 4:
        return <Slide04NumberChecker isActive={currentSlide === 4} />;
      case 5:
        return <Slide05PolicyWarning isActive={currentSlide === 5} />;
      case 6:
        return <Slide06WaysOverview isActive={currentSlide === 6} onNavigateToSlide={goToSlide} />;
      case 7:
        return <Slide07LeadGeneration isActive={currentSlide === 7} />;
      case 8:
        return <Slide08CourseProject isActive={currentSlide === 8} />;
      case 9:
        return <Slide09TrainerAccount isActive={currentSlide === 9} />;
      case 10:
        return <Slide10TrainerEligibility isActive={currentSlide === 10} />;
      case 11:
        return <Slide11Recruitment isActive={currentSlide === 11} />;
      case 12:
        return <Slide12Closing isActive={currentSlide === 12} />;
      default:
        return <Slide00IntroCover isActive={true} onNextSlide={handleNext} />;
    }
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50/20 to-emerald-50/30 text-slate-900 flex flex-col select-none"
    >
      {/* Background patterns and subtle ambient glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <HeaderNav
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        showNotes={showNotes}
        onToggleNotes={() => setShowNotes((prev) => !prev)}
        onOpenOverview={() => setShowOverview(true)}
        onOpenExport={() => setShowExport(true)}
        isPenActive={isPenActive}
        isPenBoxOpen={isPenBoxOpen}
        onTogglePen={handleTogglePen}
      />

      {/* Main Slide Viewport */}
      <main className="flex-1 w-full h-full relative overflow-hidden pt-12 pb-14 sm:pb-16 flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full min-h-full flex items-center justify-center p-2 sm:p-4 my-auto"
          >
            {renderSlide(currentSlide)}
          </motion.div>
        </AnimatePresence>

        {/* Live Presentation Annotation Overlay (কলম/মার্কার টুল - স্কয়ার ফ্রেম, তীর চিহ্ন, ফ্রিহ্যান্ড) */}
        <SlideAnnotationOverlay
          isActive={isPenActive}
          isBoxOpen={isPenBoxOpen}
          onOpenBox={() => setIsPenBoxOpen(true)}
          onCloseBox={() => setIsPenBoxOpen(false)}
          onCloseAndClear={handleCloseAndClearPen}
          currentSlide={currentSlide}
        />
      </main>

      {/* Bottom Navigation */}
      <BottomNav
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onNext={handleNext}
        onPrev={handlePrev}
        onGoToSlide={goToSlide}
        isAutoplay={isAutoplay}
        onToggleAutoplay={() => setIsAutoplay((prev) => !prev)}
      />

      {/* Presenter Speaker Notes Drawer */}
      <SpeakerNotesDrawer
        isOpen={showNotes}
        onClose={() => setShowNotes(false)}
        currentSlide={currentSlide}
      />

      {/* Slides Overview Modal */}
      <SlidesOverviewModal
        isOpen={showOverview}
        onClose={() => setShowOverview(false)}
        currentSlide={currentSlide}
        onSelectSlide={goToSlide}
      />

      {/* Standalone Single File HTML Export Modal */}
      <StandaloneExportModal
        isOpen={showExport}
        onClose={() => setShowExport(false)}
      />
    </div>
  );
}
