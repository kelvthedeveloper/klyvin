import { BookOpen, FolderHeart, Clock } from "lucide-react";

export function BlogHero({ postCount }: { postCount: number }) {
  const categories = 3;
  const avgRead = "8 min";

  return (
    <section className="border-b border-border/20 pb-12">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 justify-between">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Technical Insights
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] font-serif">
            Ideas, Learnings &amp;
            <br />
            <span className="text-primary">Deep Dives</span>
          </h1>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
            Practical tutorials, architectural case studies, and software engineering insights gathered from shipping production code at Klyvin.
          </p>

          <div className="flex flex-wrap gap-6 pt-4 border-t border-border/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary border border-border/40 flex items-center justify-center">
                <BookOpen size={16} className="text-primary" />
              </div>
              <div>
                <div className="text-base font-extrabold leading-none text-foreground">{postCount}</div>
                <div className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Articles</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary border border-border/40 flex items-center justify-center">
                <FolderHeart size={16} className="text-primary" />
              </div>
              <div>
                <div className="text-base font-extrabold leading-none text-foreground">{categories}</div>
                <div className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Categories</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary border border-border/40 flex items-center justify-center">
                <Clock size={16} className="text-primary" />
              </div>
              <div>
                <div className="text-base font-extrabold leading-none text-foreground">{avgRead}</div>
                <div className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Avg Read</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-[320px] flex-shrink-0 relative">
          <div className="bg-card rounded-2xl border border-border/60 shadow-xl overflow-hidden font-mono text-[11px] leading-relaxed">
            <div className="flex items-center gap-1.5 px-4 py-3 bg-secondary/80 border-b border-border/20">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-[10px] text-muted-foreground">blog.ts</span>
            </div>
            <div className="p-5 text-muted-foreground/80 space-y-1">
              <div><span className="text-purple-400">const</span> <span className="text-blue-400">insights</span> = &#123;</div>
              <div className="pl-4"><span className="text-emerald-400">topics</span>: [<span className="text-amber-500">&quot;Next.js&quot;</span>, <span className="text-amber-500">&quot;TS&quot;</span>],</div>
              <div className="pl-4"><span className="text-emerald-400">author</span>: <span className="text-amber-500">&quot;Kelvin&quot;</span>,</div>
              <div className="pl-4"><span className="text-emerald-400">approach</span>: <span className="text-amber-500">&quot;practical&quot;</span></div>
              <div>&#125;;</div>
            </div>
          </div>
          <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg font-mono">
            &lt;/&gt;
          </div>
        </div>
      </div>
    </section>
  );
}
