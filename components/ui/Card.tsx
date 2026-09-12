import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className = "", hoverable = false }: CardProps) {
  const hoverStyles = hoverable 
    ? "transition-colors duration-150 hover:border-[var(--color-text-heading)]" 
    : "";

  return (
    <div className={`bg-transparent overflow-hidden ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
