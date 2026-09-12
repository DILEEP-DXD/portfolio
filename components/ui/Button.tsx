import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "link";
  href?: string;
  children: React.ReactNode;
};

export function Button({ variant = "primary", className = "", href, children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 transition-colors duration-150 font-bold tracking-wide focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-green)] focus:ring-offset-2";
  
  const variants = {
    primary: "border border-[var(--color-text-heading)] text-[var(--color-text-heading)] px-6 py-3 hover:bg-[var(--color-surface-alt)] active:bg-[var(--color-border)] bg-transparent",
    secondary: "border-0 text-[var(--color-text-heading)] hover:underline hover:underline-offset-4 active:text-[var(--color-text-muted)] bg-transparent",
    link: "border-0 text-[var(--color-text-heading)] hover:underline hover:underline-offset-4 group bg-transparent",
  };

  const isLink = variant === "link";

  if (href) {
    return (
      <a 
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
        {isLink && (
          <span className="text-[var(--color-accent-green)] transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        )}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
      {isLink && (
        <span className="text-[var(--color-accent-green)] transition-transform duration-300 group-hover:translate-x-1">
          ↗
        </span>
      )}
    </button>
  );
}
