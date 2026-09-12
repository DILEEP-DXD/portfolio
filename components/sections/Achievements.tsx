"use client";

import { ACHIEVEMENTS } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export function Achievements() {
  const getSvgForIndex = (index: number) => {
    switch (index) {
      case 0: // Datathon - Data Node
        return (
          <div className="w-10 h-10 text-[var(--color-text-heading)] flex items-center justify-center">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <motion.path 
                initial={{ pathLength: 0 }} 
                whileInView={{ pathLength: 1 }} 
                transition={{ duration: 2, ease: "easeInOut" }} 
                viewport={{ once: true }}
                d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
              />
            </svg>
          </div>
        );
      case 1: // Hackathon - Terminal
        return (
          <div className="w-10 h-10 text-[var(--color-text-heading)] flex items-center justify-center">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <motion.rect 
                initial={{ pathLength: 0 }} 
                whileInView={{ pathLength: 1 }} 
                transition={{ duration: 2, ease: "easeInOut" }} 
                viewport={{ once: true }}
                x="2" y="3" width="20" height="18" rx="2" ry="2"
              />
              <motion.path 
                initial={{ pathLength: 0 }} 
                whileInView={{ pathLength: 1 }} 
                transition={{ duration: 1, delay: 1, ease: "easeInOut" }} 
                viewport={{ once: true }}
                d="M6 8l4 4-4 4 M14 16h4"
              />
            </svg>
          </div>
        );
      case 2: // Award / Recognition
        return (
          <div className="w-10 h-10 text-[var(--color-text-heading)] flex items-center justify-center">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <motion.path 
                initial={{ pathLength: 0 }} 
                whileInView={{ pathLength: 1 }} 
                transition={{ duration: 1.5, ease: "easeInOut" }} 
                viewport={{ once: true }}
                d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34M18 4H6v7a6 6 0 0 0 12 0V4z"
              />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="achievements" className="py-8 md:py-14 bg-[var(--color-surface-page)] border-t border-[var(--color-border)]">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <ScrollReveal>
            <p className="font-mono text-xs font-bold tracking-[0.2em] text-[var(--color-text-muted)] mb-6 uppercase">
              08 / ACHIEVEMENTS
            </p>
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-[var(--color-text-heading)] leading-[1.05] tracking-tight">
              A few extra wins.
            </h2>
          </ScrollReveal>
        </div>

        {/* Blocks */}
        <div className="mt-10 lg:mt-14 space-y-6">
          {ACHIEVEMENTS.items.map((item, i) => {
            const actionText = item.linkText || (i === 0 ? "Github" : i === 1 ? "View badge" : "View");
            const actionHref = item.link || (i === 0 ? "https://github.com/DILEEP-DXD" : i === 1 ? "https://www.kaggle.com/certification/badges/dileepkumar091/105" : "#");
            return (
              <ScrollReveal key={item.bold} delay={i * 0.05} className="w-full">
                <div className="group relative border border-[var(--color-border)] bg-white transition-all duration-300 hover:border-black hover:shadow-[0_16px_50px_-10px_rgba(0,0,0,0.06)]">
                  
                  {/* System Bar */}
                  <div className="flex items-center justify-between px-6 py-3 border-b border-[var(--color-border)] bg-[#FAFAFA] font-mono text-[10px] sm:text-[11px] tracking-[0.15em] text-[var(--color-text-muted)]">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[var(--color-accent-green)]">ACHIEVEMENT_{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="hidden sm:inline uppercase">STATUS: VERIFIED</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="flex items-center md:items-start shrink-0">
                      {getSvgForIndex(i)}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-heading)] mb-3 font-display tracking-tight group-hover:text-[var(--color-accent-green)] transition-colors">
                        {item.bold}
                      </h3>
                      <p className="text-sm md:text-base text-[var(--color-text-body)] leading-relaxed max-w-2xl font-medium">
                        {item.detail}
                      </p>
                    </div>

                    <div className="flex items-start md:justify-end shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-[var(--color-border)] mt-4 md:mt-0">
                      <a href={actionHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-[10px] font-mono font-bold tracking-[0.14em] uppercase transition-all duration-300 hover:bg-[var(--color-accent-green)]">
                        {actionText} <span>↗</span>
                      </a>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
