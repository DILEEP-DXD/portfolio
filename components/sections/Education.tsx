"use client";

import { useState } from "react";
import { EDUCATION } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  // Rich institutional details to ground each entry in authentic reality
  const details = [
    {
      coursework: ["Object Oriented Programming (C++)", "Data Structures & Algorithms", "Database Management", "Computer Architecture"],
      highlights: "Actively building open-source systems, AI agents, and solving algorithmic problems alongside core curriculum.",
      credentialType: "Full-time Undergraduate Degree",
      status: "CURRENT ENROLLMENT"
    },
    {
      coursework: ["Mathematics (Calculus, Coordinate Geometry, Algebra)", "Physics (Mechanics, Electromagnetism)", "Chemistry"],
      highlights: "Rigorous analytical and problem-solving foundation with comprehensive testing in competitive STEM subjects.",
      credentialType: "Senior Secondary (MPC Stream)",
      status: "GRADUATED WITH DISTINCTION"
    },
    {
      coursework: ["Advanced Mathematics", "General Sciences", "Computer Literacy", "Languages"],
      highlights: "Early distinction in scientific fundamentals, structured problem solving, and computational thinking.",
      credentialType: "Secondary School Certificate (Class X)",
      status: "COMPLETED"
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-[var(--color-surface-page)] border-b border-[var(--color-border)] overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[var(--color-border)]">
            <div>
              <p className="font-mono text-xs font-bold tracking-[0.2em] text-[var(--color-text-muted)] mb-6 uppercase">
                07 / EDUCATION
              </p>
              <h2 className="text-[clamp(2.5rem,5vw,4.2rem)] font-bold font-display text-[var(--color-text-heading)] leading-[1.05] tracking-tight">
                Where I&apos;ve been <span className="font-serif italic font-normal text-[var(--color-text-heading)]">learning</span>.
              </h2>
            </div>
            <div className="font-mono text-xs text-[var(--color-text-muted)] tracking-wider">
              <span>ACADEMIC TRAJECTORY: 2020 → PRESENT</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Timeline Editorial Rows */}
        <div className="mt-10 lg:mt-14 space-y-6">
          {EDUCATION.entries.map((entry, index) => {
            const isExpanded = expandedIndex === index;
            const extra = details[index];
            const startYear = entry.period.split(" – ")[0];
            const endYear = entry.period.split(" – ")[1];

            return (
              <ScrollReveal key={entry.degree} delay={index * 0.1}>
                <div
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className={`border transition-all duration-300 cursor-pointer ${
                    isExpanded
                      ? "border-black bg-white shadow-[0_16px_50px_-10px_rgba(0,0,0,0.08)]"
                      : "border-[var(--color-border)] bg-white hover:border-[var(--color-text-muted)]"
                  }`}
                >
                  {/* Summary Bar */}
                  <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    
                    {/* Left: Time & Year stamp */}
                    <div className="flex items-center gap-5 md:w-1/4 shrink-0">
                      <span className="font-mono text-xs font-bold text-[var(--color-accent-green)] bg-emerald-50 px-2.5 py-1 border border-emerald-100">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="font-display text-2xl font-bold text-[var(--color-text-heading)]">
                          {startYear}
                        </p>
                        <p className="font-mono text-[10px] font-bold tracking-widest text-[var(--color-text-muted)] uppercase">
                          TO {endYear}
                        </p>
                      </div>
                    </div>

                    {/* Middle: Degree & Institution */}
                    <div className="md:w-1/2 flex flex-col justify-center">
                      <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-[var(--color-text-heading)]">
                        {entry.degree.replace("Bachelor of Technology — ", "B.Tech in ")}
                      </h3>
                      <p className="text-sm font-medium text-[var(--color-text-body)] mt-1">
                        {entry.institution} <span className="text-[var(--color-text-muted)]">· {entry.location}</span>
                      </p>
                    </div>

                    {/* Right: Score + Interactive Chevron */}
                    <div className="flex items-center justify-between md:justify-end gap-6 md:w-1/4 shrink-0 border-t md:border-t-0 pt-4 md:pt-0 border-[var(--color-border)]">
                      <div className="text-left md:text-right">
                        <span className="block font-mono text-[10px] font-bold tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
                          EVALUATION
                        </span>
                        <span className="font-mono text-sm font-bold text-[var(--color-text-heading)]">
                          {entry.score}
                        </span>
                      </div>
                      
                      <span className={`w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center text-xs font-mono transition-transform duration-300 ${isExpanded ? "rotate-90 bg-black text-white border-black" : "text-[var(--color-text-muted)]"}`}>
                        →
                      </span>
                    </div>

                  </div>

                  {/* Expanded Engineering Insights Drawer */}
                  {isExpanded && extra && (
                    <div className="border-t border-[var(--color-border)] bg-[#FAFAFA] p-6 sm:p-8 animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        
                        {/* Coursework Modules */}
                        <div className="md:col-span-7">
                          <span className="block font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-3">
                            RELEVANT COURSEWORK & FOCUS AREAS
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {extra.coursework.map((course) => (
                              <span
                                key={course}
                                className="px-3 py-1 bg-white border border-[var(--color-border)] font-mono text-xs font-medium text-[var(--color-text-heading)]"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Program Meta & Status */}
                        <div className="md:col-span-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[var(--color-border)] pt-4 md:pt-0 md:pl-8">
                          <div>
                            <span className="block font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-1">
                              ACADEMIC STATUS
                            </span>
                            <p className="font-mono text-xs font-bold text-[var(--color-accent-green)]">
                              {extra.status}
                            </p>
                          </div>
                          
                          <p className="text-xs text-[var(--color-text-body)] mt-3 leading-relaxed font-sans">
                            {extra.highlights}
                          </p>
                        </div>

                      </div>
                    </div>
                  )}

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
