interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary font-bold">
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] font-serif">
        {title}
        {titleAccent && (
          <>
            <br />
            <span className="text-primary">{titleAccent}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mt-1">
          {description}
        </p>
      )}
    </div>
  );
}
