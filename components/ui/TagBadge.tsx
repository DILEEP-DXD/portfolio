import React from "react";

interface TagBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function TagBadge({ children, className = "" }: TagBadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest border border-[var(--color-border)] text-[var(--color-text-heading)] ${className}`}>
      {children}
    </span>
  );
}
