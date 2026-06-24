import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { getProjectBySlug, getProjects } from "@/lib/content";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return { title: `${project.title} | Kelvin`, description: project.description };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-10">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <div className="space-y-4">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          {project.category}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{project.title}</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90"
            >
              <Github size={16} /> GitHub
            </a>
          )}
          {project.demoUrl && !project.demoUrl.includes("example.com") && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {project.metrics.map((m, i) => (
          <div key={i} className="bg-secondary rounded-2xl p-4 text-center">
            <p className="text-xl font-bold text-primary">{m.value}</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{m.label}</p>
          </div>
        ))}
      </div>

      {project.problem && (
        <div className="bg-secondary rounded-2xl p-6 sm:p-8 space-y-2">
          <h2 className="font-bold">The Problem</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
        </div>
      )}

      <div className="space-y-4">
        <h2 className="font-bold text-lg">Key Features</h2>
        <div className="grid gap-3">
          {project.features.map((f, i) => (
            <div key={i} className="bg-secondary rounded-2xl p-5">
              <h3 className="font-semibold text-sm">{f.title}</h3>
              {f.description && (
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{f.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {project.engineeringChallenges.length > 0 && (
        <div className="space-y-4">
          <h2 className="font-bold text-lg">Engineering Challenges</h2>
          {project.engineeringChallenges.map((c, i) => (
            <div key={i} className="border border-border rounded-2xl p-5 space-y-2 text-sm">
              <p><strong className="text-primary">Challenge:</strong> <span className="text-muted-foreground">{c.challenge}</span></p>
              <p><strong className="text-foreground">Solution:</strong> <span className="text-muted-foreground">{c.solution}</span></p>
            </div>
          ))}
        </div>
      )}

      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
    </div>
  );
}
