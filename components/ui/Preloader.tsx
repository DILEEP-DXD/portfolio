"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";

const phases = [
  { word: "ENGINEERING", role: "01 // ARCHITECTURE & SYSTEMS" },
  { word: "INTELLIGENCE", role: "02 // AGENTS & RAG PIPELINES" },
  { word: "EXPERIENCE", role: "03 // PURPOSE-BUILT SOFTWARE" },
];

export function Preloader() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  
  const progressValue = useMotionValue(0);
  const progressText = useTransform(progressValue, (latest) => 
    Math.round(latest).toString().padStart(3, "0") + "%"
  );
  const progressWidth = useTransform(progressValue, (latest) => `${latest}%`);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // 1. Fluid progress bar and counter animation (3.6s duration)
    const controls = animate(progressValue, 100, {
      duration: 3.6,
      ease: [0.33, 1, 0.68, 1], // Smooth ease-out curve
      onComplete: () => {
        setTimeout(() => setShow(false), 500); // Small pause at 100% before exit
      }
    });

    // 2. Deliberate word transitions spaced out to let them breathe
    const t1 = setTimeout(() => setIndex(1), 1300);
    const t2 = setTimeout(() => setIndex(2), 2600);

    return () => {
      controls.stop();
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "unset";
    };
  }, [progressValue]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "unset";
      }}
    >
      {show && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.9, ease: [0.77, 0, 0.175, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col justify-between p-8 md:p-14 bg-[#080808] text-white select-none overflow-hidden"
        >
          {/* Minimalist Editorial Background */}
          <div className="absolute inset-0 bg-[#050505]" />

          {/* Top Bar: Minimal Identity */}
          <div className="relative z-10 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
            <span>DILEEP KUMAR</span>
            <span>PORTFOLIO 2026</span>
          </div>

          {/* Center Content: Elegant Typography */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            <div className="overflow-hidden py-4 text-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={phases[index].word}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-white font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl tracking-wide"
                >
                  {phases[index].word.toLowerCase()}
                </motion.h1>
              </AnimatePresence>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={phases[index].role}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mt-6"
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
                  {phases[index].role}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Bar: Clean Progress */}
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex justify-between items-end font-mono text-[10px] uppercase tracking-widest text-white/40">
              <span>LOADING</span>
              <motion.span>{progressText}</motion.span>
            </div>
            
            <div className="w-full h-[1px] bg-white/10 relative">
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-white/80"
                style={{ width: progressWidth }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
