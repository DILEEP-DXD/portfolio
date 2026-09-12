"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "ABOUT", href: "#about" }, 
  { label: "SKILLS", href: "#skills" }, 
  { label: "WORK", href: "#projects" },
  { label: "CONTACT", href: "#contact" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { 
    const update = () => setScrolled(window.scrollY > 24); 
    update(); 
    window.addEventListener("scroll", update, { passive: true }); 
    return () => window.removeEventListener("scroll", update); 
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled && !menuOpen ? "bg-white/50 backdrop-blur-[40px] py-5 md:py-6 border-b border-[var(--color-border)]" : "bg-transparent py-6 md:py-8 border-b border-transparent"}`}>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">
          
          {/* Logo */}
          <Link 
            href="#hero" 
            className={`text-sm font-bold tracking-[0.08em] z-[60] transition-colors duration-300 ${menuOpen ? "text-white" : "text-[var(--color-text-heading)]"}`} 
            onClick={() => setMenuOpen(false)}
          >
            DK <span className={`hidden md:inline transition-colors duration-300 ${menuOpen ? "text-white/50" : "text-[var(--color-text-muted)]"}`}>/ DILEEP KUMAR</span>
          </Link>
          
          {/* Menu Toggle */}
          <button 
            type="button" 
            aria-expanded={menuOpen} 
            aria-label="Toggle navigation menu" 
            className={`group flex items-center gap-3 z-[60]`} 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`text-[11px] font-bold tracking-[0.15em] transition-colors duration-300 ${menuOpen ? "text-white" : "text-[var(--color-text-heading)]"}`}>
              {menuOpen ? "CLOSE" : "MENU"}
            </span>
            <div className="relative h-3 w-5 flex flex-col justify-between">
              <span className={`block h-[1.5px] w-full transition-all duration-300 origin-center ${menuOpen ? "translate-y-[5.25px] rotate-45 bg-white" : "bg-[var(--color-text-heading)]"}`} />
              <span className={`block h-[1.5px] w-full transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[5.25px] -rotate-45 bg-white" : "bg-[var(--color-text-heading)]"}`} />
            </div>
          </button>

        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div 
        className={`fixed inset-0 z-[45] bg-[#0a0a0a] flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col items-center gap-5 md:gap-6">
          {navigation.map((item, i) => (
            <Link 
              key={item.href} 
              href={item.href} 
              onClick={() => setMenuOpen(false)} 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white/80 hover:text-white transition-all duration-500 ease-out ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${menuOpen ? i * 60 + 100 : 0}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className={`absolute bottom-10 flex flex-col items-center gap-3 transition-all duration-700 ease-out ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: menuOpen ? "400ms" : "0ms" }}>
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">Let&apos;s build something.</p>
          <div className="flex gap-5 mt-1">
            <a href="mailto:dileepkumarreddy2007@gmail.com" className="text-xs font-medium text-white/50 hover:text-white transition-colors">Email</a>
            <a href="https://github.com/DILEEP-DXD" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-white/50 hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/dileep-kumar-donthireddy" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-white/50 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </>
  );
}
