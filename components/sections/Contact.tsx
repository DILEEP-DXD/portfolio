"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedMeshGradient } from "@/components/ui/AnimatedMeshGradient";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <footer id="contact" className="relative min-h-[80vh] md:min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden bg-white">
      
      {/* Background Gradient — fills entire footer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatedMeshGradient variant="footer" />
      </div>

      {/* Seamless transition from the white section above (~100px) */}
      <div 
        className="absolute inset-x-0 top-0 h-[100px] z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col justify-between px-5 pt-16 pb-10 md:px-10 md:pt-20 lg:px-16 flex-grow">
        
        <div className="mx-auto max-w-4xl text-center flex-grow flex flex-col justify-center py-12 md:py-16">
          <ScrollReveal>
            <p className="font-mono text-xs font-bold tracking-[0.2em] text-[var(--color-text-muted)] mb-6 uppercase">
              09 / CONTACT
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] text-[var(--color-text-heading)]">
              Let&apos;s build<br />something useful.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[var(--color-text-body)] font-medium">
              Open to engineering projects, internships, collaborations and interesting technical problems.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              {/* Solid Button for Contrast against Pale Gradient */}
              <a 
                href="mailto:dileepkumarreddy2007@gmail.com" 
                className="inline-flex items-center gap-2 bg-transparent border border-black px-8 py-4 text-sm font-bold tracking-[0.1em] text-black transition-all duration-300 hover:bg-[var(--color-accent-green)] hover:text-white hover:border-[var(--color-accent-green)] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
              >
                EMAIL ME <span className="transition-transform duration-[250ms] hover:translate-x-1">↗</span>
              </a>
              
              <div className="flex gap-6 sm:ml-4">
                <Button variant="link" href="https://github.com/DILEEP-DXD" target="_blank" rel="noopener noreferrer" className="!text-black hover:!text-[var(--color-accent-green)] uppercase text-xs tracking-[0.14em]">
                  Github
                </Button>
                <Button variant="link" href="https://www.linkedin.com/in/dileep-kumar-donthireddy" target="_blank" rel="noopener noreferrer" className="!text-black hover:!text-[var(--color-accent-green)] uppercase text-xs tracking-[0.14em]">
                  LinkedIn
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Footer Bottom Row — dark text over pale gradient */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-accent-green)] pt-8 text-xs font-bold tracking-[0.12em] sm:flex-row">
          <p className="text-[var(--color-text-muted)]">© 2026 DILEEP KUMAR</p>
          <a href="#hero" className="text-[var(--color-text-muted)] transition-colors hover:text-black">
            BACK TO TOP ↑
          </a>
        </div>

      </div>
    </footer>
  );
}
