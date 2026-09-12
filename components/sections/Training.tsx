"use client";

import Image from "next/image";
import { TRAINING } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Training() {
  const { card } = TRAINING;

  const curriculumFocus = [
    {
      domain: "TREE & GRAPH ALGORITHMS",
      complexity: "O(V + E) / O(log n)",
      spec: "DFS, BFS, Dijkstra, Binary Search Trees, Cycle Detection",
    },
    {
      domain: "DYNAMIC PROGRAMMING & RECURSION",
      complexity: "O(n · W) / O(n²)",
      spec: "Memoization, Tabulation, 0/1 Knapsack, Longest Common Subsequence",
    },
    {
      domain: "LINEAR STRUCTURES & POINTERS",
      complexity: "O(1) / O(n)",
      spec: "Circular Doubly Linked Lists, Queues, Sliding Window, Two Pointers",
    },
  ];

  return (
    <section id="training" className="bg-[var(--color-surface-page)] py-16 md:py-24 border-b border-[var(--color-border)]">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        
        {/* Top Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[var(--color-border)]">
            <div>
              <p className="font-mono text-xs font-bold tracking-[0.2em] text-[var(--color-text-muted)] mb-6 uppercase">
                05 / TRAINING
              </p>
              <h2 className="text-[clamp(2.5rem,5vw,4.2rem)] font-bold font-display text-[var(--color-text-heading)] leading-[1.05] tracking-tight">
                Built while <span className="font-serif italic font-normal text-[var(--color-text-heading)]">learning</span>.
              </h2>
            </div>
            <p className="max-w-md text-base text-[var(--color-text-muted)] leading-relaxed font-sans">
              Theory is tested by execution. Coursework focused on low-level memory layout, algorithmic complexity, and building systems from scratch.
            </p>
          </div>
        </ScrollReveal>

        {/* Minimal Project-Style Training Card */}
        <div className="mt-10 lg:mt-14 space-y-8">
          <ScrollReveal delay={0.1}>
            <div className="group border border-[var(--color-border)] bg-white p-8 sm:p-10 transition-all duration-300 hover:border-black hover:shadow-[0_8px_30px_-15px_rgba(0,0,0,0.1)]">
              
              {/* Header: Thumbnail + Title */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
                <div className="relative w-14 h-14 rounded-sm overflow-hidden shrink-0 border border-[var(--color-border)]">
                  <Image
                    src={card.image}
                    alt={`${card.title} thumbnail`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="56px"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-heading)] tracking-tight group-hover:text-[var(--color-accent-green)] transition-colors">
                  {card.title}
                </h3>
              </div>

              {/* Curriculum Modules */}
              <div className="space-y-6 mb-8">
                {curriculumFocus.map((focus) => (
                  <div key={focus.domain}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="block font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
                        {focus.domain}
                      </span>
                      <span className="font-mono text-[9px] font-bold text-[var(--color-text-muted)] bg-[#FAFAFA] border border-[var(--color-border)] px-1.5 py-0.5 rounded-sm">
                        {focus.complexity}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-text-body)] leading-relaxed max-w-4xl">
                      {focus.spec}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer: Credential & Action Link */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[var(--color-border)]">
                <div>
                  <span className="block font-mono text-[10px] font-bold tracking-[0.14em] text-[var(--color-text-muted)] uppercase mb-1">
                    VERIFIED CREDENTIAL
                  </span>
                  <span className="font-mono text-xs font-bold text-[var(--color-text-heading)] uppercase">
                    IAM NEO // C++ DSA CERTIFIED
                  </span>
                </div>
                
                <a
                  href="https://drive.google.com/file/d/1aPS4PMmdqmxAcSZoKhJp5WoEPoaiX5nU/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-black text-white text-[10px] font-mono font-bold tracking-[0.16em] uppercase transition-all duration-300 hover:bg-[var(--color-accent-green)] shrink-0"
                >
                  VIEW CREDENTIAL <span>↗</span>
                </a>
              </div>

            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
