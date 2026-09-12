"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds (stagger children) */
  delay?: number;
  /** Once = true means animate only the first time */
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 5 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
        delay,
      }}
      className={className}
      /* Framer Motion respects prefers-reduced-motion natively
         via its ReducedMotion feature (auto by default since v10) */
    >
      {children}
    </motion.div>
  );
}
