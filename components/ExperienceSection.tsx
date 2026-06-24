import { Experience } from "@/lib/site-data";

export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section className="space-y-10" id="experience">
      <div className="space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
          Where I&apos;ve worked
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] font-serif">
          Work
          <br />
          <span className="text-primary">Experience</span>
        </h2>
      </div>

      <div className="space-y-0 divide-y divide-border/30">
        {experiences.map((exp, idx) => (
          <article
            key={idx}
            className="py-8 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 group"
          >
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {exp.role}
              </h3>
              <p className="text-sm text-muted-foreground">
                <span className="text-primary/60">&middot;</span> {exp.company}
              </p>
              <time className="text-xs font-mono text-muted-foreground/70 block pt-1">
                {exp.period}
              </time>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              {exp.tags && exp.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-secondary border border-border/30 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
