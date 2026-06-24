import Link from "next/link";
import { Project } from "@/lib/content";
import { ArrowButton, SectionLabel } from "@/components/ui/primitives";

export function ProjectGrid({
  projects,
  showViewAll = false,
  limit,
  hideHeader = false,
}: {
  projects: Project[];
  showViewAll?: boolean;
  limit?: number;
  hideHeader?: boolean;
}) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-16 sm:py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {!hideHeader && (
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <SectionLabel>My Work</SectionLabel>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Featured Projects
              </h2>
            </div>
            {!showViewAll && (
              <p className="text-muted-foreground text-sm max-w-sm">
                A selection of SaaS products, tools, and platforms built under Klyvin.
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {list.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group bg-background rounded-2xl border border-border p-6 sm:p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-6 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                View Case Study
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background group-hover:bg-primary transition-colors">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 11L11 3M11 3H5M11 3V9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {showViewAll && (
          <div className="flex justify-center mt-10">
            <ArrowButton href="/projects" label="View All Projects" variant="primary" />
          </div>
        )}
      </div>
    </section>
  );
}
