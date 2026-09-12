"use client";

import { SKILLS } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useState } from "react";

export function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 md:py-32 bg-white relative overflow-hidden">
      
      {/* Background blueprint grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="font-mono text-xs font-bold tracking-[0.2em] text-[var(--color-text-muted)] mb-6 uppercase">
                03 / TECH STACK
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--color-text-heading)] leading-[1.1] tracking-tight font-display">
                TECHNICAL <br />
                <span className="text-[var(--color-text-muted)]">STACK.</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} className="md:text-right">
            <p className="text-sm md:text-base text-[var(--color-text-muted)] max-w-sm font-medium">
              Languages, frameworks, and architectural tools leveraged to build intelligent, scalable systems.
            </p>
          </ScrollReveal>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.categories.map((cat, i) => {
            const isHovered = hoveredCategory === i;

            return (
              <ScrollReveal key={cat.title} delay={i * 0.1}>
                <div 
                  className="group relative h-full flex flex-col border border-[var(--color-border)] bg-white transition-all duration-500 hover:border-black hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
                  onMouseEnter={() => setHoveredCategory(i)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  
                  {/* System Bar */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] bg-[#FAFAFA] transition-colors duration-500 group-hover:bg-black group-hover:border-black">
                    <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-muted)] group-hover:text-white transition-colors duration-500">
                      SYS_MOD_{String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-border)] group-hover:bg-[var(--color-accent-green)] transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-heading)] mb-8 font-display tracking-tight group-hover:text-[var(--color-accent-green)] transition-colors duration-500">
                      {cat.title}
                    </h3>
                    
                    <div className="mt-auto flex flex-wrap gap-2">
                      {cat.tags.map((tag, tagIdx) => (
                        <div 
                          key={tag}
                          className="px-3 py-1.5 border border-[var(--color-border)] text-xs font-mono font-semibold tracking-tight text-[var(--color-text-body)] transition-all duration-300 group-hover:border-[var(--color-accent-green)]/30 group-hover:bg-[var(--color-accent-green)]/5"
                          style={{
                            transitionDelay: isHovered ? `${tagIdx * 40}ms` : '0ms'
                          }}
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-t border-l border-[var(--color-border)] bg-[#FAFAFA] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[var(--color-accent-green)]" />
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
