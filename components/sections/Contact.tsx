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
        
        <div className="mx-auto max-w-7xl flex-grow py-12 md:py-16 w-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            
            {/* Content Column (2 columns) */}
            <div className="lg:col-span-2 flex flex-col justify-center text-left">
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
                <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-[var(--color-text-body)] font-medium">
                  Open to engineering projects, internships, collaborations and interesting technical problems.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                  <a 
                    href="mailto:dileepkumarreddy2007@gmail.com" 
                    className="group inline-flex items-center gap-2 bg-transparent border border-black px-8 py-4 text-sm font-bold tracking-[0.1em] text-black transition-all duration-300 hover:bg-[var(--color-accent-green)] hover:text-white hover:border-[var(--color-accent-green)] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
                  >
                    EMAIL ME <span className="transition-transform duration-[250ms] group-hover:translate-x-1">↗</span>
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

            {/* Form Column (1 column) */}
            <div className="lg:col-span-1 flex flex-col justify-center">
              <ScrollReveal delay={0.4}>
                <form className="flex flex-col gap-5 bg-white/50 backdrop-blur-md border border-[var(--color-border)] p-8 rounded-2xl shadow-sm">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-bold tracking-[0.15em] text-[var(--color-text-heading)] uppercase">Name</label>
                    <input type="text" id="name" name="name" placeholder="John Doe" className="w-full bg-transparent border-b border-[var(--color-border)] py-2 text-sm focus:outline-none focus:border-[var(--color-accent-green)] transition-colors placeholder:text-[var(--color-text-muted)] text-[var(--color-text-heading)]" required />
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="email" className="text-[10px] font-bold tracking-[0.15em] text-[var(--color-text-heading)] uppercase">Email</label>
                    <input type="email" id="email" name="email" placeholder="john@example.com" className="w-full bg-transparent border-b border-[var(--color-border)] py-2 text-sm focus:outline-none focus:border-[var(--color-accent-green)] transition-colors placeholder:text-[var(--color-text-muted)] text-[var(--color-text-heading)]" required />
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="message" className="text-[10px] font-bold tracking-[0.15em] text-[var(--color-text-heading)] uppercase">Message</label>
                    <textarea id="message" name="message" rows={4} placeholder="Tell me about your project..." className="w-full bg-transparent border-b border-[var(--color-border)] py-2 text-sm focus:outline-none focus:border-[var(--color-accent-green)] transition-colors placeholder:text-[var(--color-text-muted)] text-[var(--color-text-heading)] resize-none" required></textarea>
                  </div>
                  <button type="submit" className="mt-4 w-full bg-black text-white px-6 py-4 text-xs font-bold tracking-[0.15em] hover:bg-[var(--color-accent-green)] transition-colors uppercase">
                    Send Message
                  </button>
                </form>
              </ScrollReveal>
            </div>
            
          </div>
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
