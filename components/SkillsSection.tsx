import { SkillCategory } from "@/lib/site-data";

export function SkillsSection({ categories }: { categories: SkillCategory[] }) {
  return (
    <section className="space-y-10" id="skills">
      <div className="space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
          What I work with
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] font-serif">
          Skills &amp;
          <br />
          <span className="text-primary">Technologies</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.number}
            className="p-6 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm space-y-4 hover:border-primary/20 transition-colors duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-primary font-bold">{cat.number}</span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                {cat.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-lg bg-secondary/80 text-secondary-foreground border border-border/30 hover:border-primary/30 hover:text-foreground transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
