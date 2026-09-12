interface TagPillProps {
  label: string;
  className?: string;
}

export function TagPill({ label, className = "" }: TagPillProps) {
  return (
    <span
      className={`inline-block border border-[var(--color-border)] text-[var(--color-text-heading)] text-xs font-mono font-medium
        px-3 py-1 whitespace-nowrap ${className}`}
    >
      {label}
    </span>
  );
}
