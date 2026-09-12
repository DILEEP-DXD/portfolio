"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  // Derive unique tech tags across all projects for quick filtering
  const allTags = ["ALL", "C++", "PYTHON", "AI / LLM", "AUTOMATION"];

  const filteredProjects = PROJECTS.cards.filter((p) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "C++") return p.tags.includes("C++");
    if (activeFilter === "PYTHON") return p.tags.includes("Python");
    if (activeFilter === "AI / LLM") return p.tags.some(t => t.includes("Groq") || t.includes("Whisper") || t.includes("Gemini") || t.includes("Multi-Agent"));
    if (activeFilter === "AUTOMATION") return p.tags.some(t => t.includes("Playwright") || t.includes("Telegram") || t.includes("Queue"));
    return true;
  });

  return (
    <section id="projects" className="relative py-16 md:py-24 bg-[var(--color-surface-page)] border-b border-[var(--color-border)] overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        
        {/* Header with Title and Index/Controls */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[var(--color-border)]">
            <div>
              <p className="font-mono text-xs font-bold tracking-[0.2em] text-[var(--color-text-muted)] mb-6 uppercase">
                04 / ENGINEERING IN PRACTICE
              </p>
              <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold font-display text-[var(--color-text-heading)] leading-[1.02] tracking-tight">
                Engineering <span className="font-serif italic font-normal text-[var(--color-text-heading)]">in practice</span>.
              </h2>
            </div>

            {/* Filter Tags + Link to All Repos */}
            <div className="flex flex-wrap items-center gap-2 lg:gap-3">
              {allTags.map((filter) => {
                const isSelected = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3 py-1.5 text-[11px] font-mono font-bold tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[var(--color-text-heading)] text-white shadow-sm"
                        : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text-heading)] hover:border-[var(--color-text-heading)]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
              <a
                href={PROJECTS.githubAll}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 ml-3 px-3.5 py-1.5 text-[11px] font-mono font-bold tracking-[0.14em] uppercase text-[var(--color-accent-green)] hover:text-black transition-colors"
              >
                ALL REPOSITORIES <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Minimal Editorial Project Cards */}
        <div className="mt-10 lg:mt-14 space-y-8">
          {filteredProjects.map((project, index) => {
            return (
              <ScrollReveal key={project.title} delay={index * 0.1}>
                <div className="group border border-[var(--color-border)] bg-white p-8 sm:p-10 transition-all duration-300 hover:border-black hover:shadow-[0_8px_30px_-15px_rgba(0,0,0,0.1)]">
                  
                  {/* Header: Thumbnail + Title */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
                    <div className="relative w-14 h-14 rounded-sm overflow-hidden shrink-0 border border-[var(--color-border)]">
                      <Image
                        src={project.cover}
                        alt={`${project.title} thumbnail`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="56px"
                      />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-heading)] tracking-tight group-hover:text-[var(--color-accent-green)] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Problem & Solution */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <span className="block font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-2">
                        PROBLEM
                      </span>
                      <p className="text-sm text-[var(--color-text-body)] leading-relaxed max-w-4xl">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <span className="block font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-2">
                        SOLUTION
                      </span>
                      <p className="text-sm text-[var(--color-text-body)] leading-relaxed max-w-4xl">
                        {project.approach}
                      </p>
                    </div>
                  </div>

                  {/* Footer: Tags & Repo Link */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[var(--color-border)]">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-[#FAFAFA] text-[10px] font-mono font-bold tracking-[0.14em] uppercase text-[var(--color-text-muted)] border border-[var(--color-border)] transition-colors group-hover:border-[var(--color-text-muted)] group-hover:text-[var(--color-text-heading)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-black text-white text-[10px] font-mono font-bold tracking-[0.16em] uppercase transition-all duration-300 hover:bg-[var(--color-accent-green)] shrink-0"
                    >
                      GITHUB REPO <span>↗</span>
                    </a>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 p-8 border border-[var(--color-border)] bg-[#FAFAFA] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold font-display text-[var(--color-text-heading)]">Looking for more implementation details?</h4>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">Explore all repositories, code architectures, and experiments on GitHub.</p>
            </div>
            <a
              href={PROJECTS.githubAll}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 border border-black bg-white text-black hover:bg-black hover:text-white text-xs font-mono font-bold tracking-[0.14em] uppercase transition-all shrink-0"
            >
              VIEW ALL REPOSITORIES ↗
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
