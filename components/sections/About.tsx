"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HERO } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-8 md:py-14 bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">

        <ScrollReveal>
          <p className="font-mono text-xs font-bold tracking-[0.2em] text-[var(--color-text-muted)] mb-6 uppercase">
            02 / ABOUT
          </p>
        </ScrollReveal>

        {/* Single compact row: Image | Text + Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-t border-[var(--color-border)] pt-12 pb-4">

          {/* Left: Engineering Frame Image */}
          <div className="lg:col-span-4">
            <ScrollReveal className="w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] mt-4">
                
                {/* Blueprint frame */}
                <div className="absolute -inset-4 border border-[var(--color-border)] bg-[var(--color-surface-alt)] z-0" />
                
                {/* Crosshairs */}
                <div className="absolute -top-6 -left-6 w-3 h-3 border-t-2 border-l-2 border-[var(--color-text-muted)] z-10" />
                <div className="absolute -top-6 -right-6 w-3 h-3 border-t-2 border-r-2 border-[var(--color-text-muted)] z-10" />
                <div className="absolute -bottom-6 -left-6 w-3 h-3 border-b-2 border-l-2 border-[var(--color-text-muted)] z-10" />
                <div className="absolute -bottom-6 -right-6 w-3 h-3 border-b-2 border-r-2 border-[var(--color-text-muted)] z-10" />

                {/* Grid Overlay on Frame */}
                <div 
                  className="absolute -inset-4 pointer-events-none opacity-30 z-0"
                  style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
                    backgroundSize: "16px 16px"
                  }}
                />

                {/* Image container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-[var(--color-border)] z-10 bg-white p-2">
                  <div className="relative w-full h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-out border border-[var(--color-border)]">
                    <Image
                      src={HERO.headshot}
                      alt="Dileep Kumar"
                      fill
                      sizes="(max-width: 1024px) 50vw, 30vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                
                {/* Telemetry tag */}
                <div className="absolute -right-10 bottom-6 rotate-90 origin-bottom-right z-20">
                  <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-[var(--color-text-muted)] uppercase bg-white px-2 py-1 border border-[var(--color-border)] shadow-sm">
                    IMG_SRC_01 // ACTIVE
                  </span>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right: Text + quote + facts all compact */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <ScrollReveal delay={0.05}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-[var(--color-text-heading)] leading-[1.15] tracking-tight max-w-3xl">
                I&apos;m a computer science engineering student who likes turning <span className="font-serif italic font-normal">messy ideas</span> into things people can actually use.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-base md:text-lg text-[var(--color-text-body)] leading-relaxed max-w-2xl">
                I work across software, AI and automation — starting with messy problems and building simple systems. I care about useful products, clean interfaces and learning by building.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <blockquote className="text-xl md:text-2xl font-serif italic text-[var(--color-text-heading)] leading-snug opacity-70">
                &ldquo;Build it. Break it. Understand it. Make it better.&rdquo;
              </blockquote>
            </ScrollReveal>

            {/* Facts as a single inline row */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--color-border)] pt-6">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-muted)] uppercase">Location</span>
                  <span className="text-[10px] text-[var(--color-text-muted)]">/</span>
                  <span className="text-sm font-semibold text-[var(--color-text-heading)]">India</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-muted)] uppercase">Focus</span>
                  <span className="text-[10px] text-[var(--color-text-muted)]">/</span>
                  <span className="text-sm font-semibold text-[var(--color-text-heading)]">AI &amp; Software</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-muted)] uppercase">Education</span>
                  <span className="text-[10px] text-[var(--color-text-muted)]">/</span>
                  <span className="text-sm font-semibold text-[var(--color-text-heading)]">B.Tech CSE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-muted)] uppercase">Interests</span>
                  <span className="text-[10px] text-[var(--color-text-muted)]">/</span>
                  <span className="text-sm font-semibold text-[var(--color-text-heading)]">Automation</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
