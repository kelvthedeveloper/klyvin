import Link from "next/link";
import { cn } from "@/lib/utils";

interface ArrowButtonProps {
  href: string;
  label: string;
  variant?: "dark" | "light" | "primary";
  external?: boolean;
  className?: string;
}

export function ArrowButton({
  href,
  label,
  variant = "dark",
  external,
  className,
}: ArrowButtonProps) {
  const variants = {
    dark: "bg-foreground text-background hover:bg-foreground/90",
    light: "bg-background text-foreground border-2 border-foreground hover:bg-secondary",
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  };

  const inner = (
    <>
      <span className="font-semibold text-sm sm:text-base">{label}</span>
      <span
        className={cn(
          "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full shrink-0",
          variant === "dark" && "bg-primary text-primary-foreground",
          variant === "light" && "bg-foreground text-background",
          variant === "primary" && "bg-foreground text-background"
        )}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path
            d="M3 11L11 3M11 3H5M11 3V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </>
  );

  const classes = cn(
    "inline-flex items-center gap-3 sm:gap-4 pl-6 sm:pl-8 pr-2 py-2 rounded-full transition-all duration-300 cursor-pointer",
    variants[variant],
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium text-primary flex items-center gap-2">
      <span className="text-foreground">—</span>
      {children}
    </p>
  );
}

export function PageHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-4 max-w-2xl">
      <SectionLabel>{label}</SectionLabel>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
        {title}
      </h1>
      {description && (
        <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
      )}
    </div>
  );
}
