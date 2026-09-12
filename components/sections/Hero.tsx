"use client";
import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedMeshGradient } from "@/components/ui/AnimatedMeshGradient";
import { Button } from "@/components/ui/Button";
import { HERO } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

const EXPLORING_TOPICS = [
  "RAG systems, agents, and automation that earn their place.",
  "Multi-agent orchestration and automated research workflows.",
  "Practical LLM integration for real-world software applications.",
];

export function Hero() {
  const [activeTopic, setActiveTopic] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTopic((prev) => (prev + 1) % EXPLORING_TOPICS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-20 pb-12 overflow-hidden"
    >
      {/* Background Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)"
        }}
      >
        <AnimatedMeshGradient variant="hero" />
      </div>
      
      {/* Content Layer */}
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16 z-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ---- Text Column (Left) ---- */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-6 font-mono text-xs font-bold tracking-[0.18em] text-[var(--color-text-muted)]">DILEEP KUMAR / AI &amp; SOFTWARE BUILDER</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="max-w-5xl text-[clamp(2.8rem,5vw,5.5rem)] font-bold font-display leading-[1.05] tracking-tight mb-6 text-[var(--color-text-heading)]">
                I build software that solves <span className="font-serif italic font-normal text-[var(--color-text-heading)]">real</span> problems.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.0, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-lg md:text-xl font-medium text-[var(--color-text-muted)] mb-8 max-w-2xl leading-relaxed">
                Computer science student building practical software, AI tools and automation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12">
                <Button variant="primary" href="#projects">
                  View projects
                </Button>
                <Button variant="secondary" href={HERO.cta.secondary.href} download>
                  Download CV
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3.5 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <p className="text-[0.7rem] font-bold tracking-[0.15em] text-[var(--color-text-muted)]">
                  CSE STUDENT / AI / SOFTWARE
                </p>
                <div className="hidden sm:block w-8 h-[1px] bg-[var(--color-border)]" />
                <div className="flex gap-4">
                  <a href={HERO.socials.github} target="_blank" rel="noreferrer" className="text-[0.7rem] font-bold tracking-[0.15em] text-[var(--color-text-heading)] hover:text-[var(--color-accent-green)] transition-colors">GITHUB</a>
                  <a href={HERO.socials.linkedin} target="_blank" rel="noreferrer" className="text-[0.7rem] font-bold tracking-[0.15em] text-[var(--color-text-heading)] hover:text-[var(--color-accent-green)] transition-colors">LINKEDIN</a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ---- Currently Exploring (Right) ---- */}
          <div className="lg:col-span-4 flex items-end lg:justify-end mt-12 lg:mt-0 lg:pt-32">
            <ScrollReveal delay={0.2} className="w-full h-full relative">
              <div className="border-l border-white/30 pl-6 py-5 lg:pl-8 relative z-10 drop-shadow-md">
                <p className="font-mono text-xs tracking-[0.16em] text-white/80">CURRENTLY EXPLORING</p>
                <div className="mt-4 min-h-[5.5rem] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeTopic}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl md:text-2xl font-bold leading-tight text-white"
                    >
                      {EXPLORING_TOPICS[activeTopic]}
                    </motion.p>
                  </AnimatePresence>
                </div>
                <div className="mt-6 flex gap-2">
                  {EXPLORING_TOPICS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTopic(idx)}
                      aria-label={`View exploring topic ${idx + 1}`}
                      className={`h-2 transition-all duration-300 drop-shadow-sm ${
                        activeTopic === idx 
                          ? "w-12 bg-white" 
                          : "w-4 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
