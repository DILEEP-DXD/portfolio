"use client";

import { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface SectionWrapperProps {
  id: string;
  eyebrow: string;
  heading: string;
  /** Use surface-alt (#F1F5F9) zebra-stripe background */
  altBg?: boolean;
  /** Use accent-light (#EFF6FF) background (achievements strip) */
  accentBg?: boolean;
  /** Full-bleed dark section (contact gradient) */
  dark?: boolean;
  /** Extra className for the outer section */
  className?: string;
  children: ReactNode;
}

export function SectionWrapper({
  id,
  eyebrow,
  heading,
  altBg = false,
  accentBg = false,
  dark = false,
  className = "",
  children,
}: SectionWrapperProps) {
  let bgClass = "bg-surface-page";
  if (altBg) bgClass = "bg-surface-alt";
  if (accentBg) bgClass = "bg-accent-light";
  if (dark) bgClass = ""; // handled by parent (gradient)

  return (
    <section
      id={id}
      className={`${bgClass} py-16 sm:py-20 md:py-24 lg:py-28 ${className}`}
    >
      <div className="mx-auto max-w-[1160px] px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p
            className={`font-mono text-xs tracking-wide uppercase mb-3 ${
              dark ? "text-text-ondark/60" : "text-text-muted"
            }`}
          >
            {eyebrow}
          </p>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight mb-10 sm:mb-14 ${
              dark ? "text-text-ondark" : "text-text-heading"
            }`}
          >
            {heading}
          </h2>
        </ScrollReveal>
        {children}
      </div>
    </section>
  );
}
