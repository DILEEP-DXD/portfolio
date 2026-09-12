"use client";

import { CERTIFICATES } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Certificates() {
  return (
    <section id="certificates" className="py-8 md:py-14 bg-[var(--color-surface-page)]">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        
        <div className="mb-16 md:mb-24">
          <ScrollReveal>
            <p className="font-mono text-xs font-bold tracking-[0.2em] text-[var(--color-text-muted)] mb-6 uppercase">
              06 / CERTIFICATES
            </p>
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-[var(--color-text-heading)] leading-[1.05] tracking-tight">
              A few things I&apos;ve earned.
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-10 lg:mt-14 space-y-6">
          {CERTIFICATES.cards.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 0.05} className="w-full">
              <div className="group relative border border-[var(--color-border)] bg-white transition-all duration-300 hover:border-black hover:shadow-[0_16px_50px_-10px_rgba(0,0,0,0.06)]">
                
                {/* System Bar */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-[var(--color-border)] bg-[#FAFAFA] font-mono text-[10px] sm:text-[11px] tracking-[0.15em] text-[var(--color-text-muted)]">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[var(--color-accent-green)]">CERTIFICATE_{String(i + 1).padStart(2, '0')}</span>
                    <span className="opacity-30">/</span>
                    <span className="uppercase">{cert.date}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline uppercase">ISSUER: {cert.issuer}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-heading)] font-display tracking-tight group-hover:text-[var(--color-accent-green)] transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-start md:justify-end shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-[var(--color-border)]">
                    <a href={cert.verifyUrl || "#"} target={cert.verifyUrl ? "_blank" : "_self"} rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-[10px] font-mono font-bold tracking-[0.14em] uppercase transition-all duration-300 hover:bg-[var(--color-accent-green)]">
                      VERIFY CREDENTIAL <span>↗</span>
                    </a>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
