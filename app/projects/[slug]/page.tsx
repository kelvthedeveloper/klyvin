import { getProjectBySlug, getProjects } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Tag, Github, ExternalLink, ShieldAlert, Award } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const project = await getProjectBySlug(resolvedParams.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Kelvin's Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = await getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-20 space-y-12">
      {/* Back Button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to projects
      </Link>

      {/* Header */}
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Links & Tags */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-b border-border/40 py-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground bg-secondary/80 px-2.5 py-1 rounded border border-border/20"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={18} />
                GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Key Features</h2>
        <ul className="grid grid-cols-1 gap-3">
          {project.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 p-4 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold mt-0.5">
                {idx + 1}
              </span>
              <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Grid: Challenges & Lessons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-border/40 bg-card/45 backdrop-blur-sm space-y-3">
          <div className="flex items-center gap-2 text-rose-500 font-semibold text-sm">
            <ShieldAlert size={18} />
            <h3>Challenges Faced</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.challenges}
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-border/40 bg-card/45 backdrop-blur-sm space-y-3">
          <div className="flex items-center gap-2 text-emerald-500 font-semibold text-sm">
            <Award size={18} />
            <h3>Lessons Learned</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.lessons}
          </p>
        </div>
      </div>

      {/* Details & Architecture */}
      <div className="space-y-4 border-t border-border/40 pt-8">
        <h2 className="text-xl font-bold mb-4">Detailed Case Study</h2>
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: project.contentHtml }}
        />
      </div>
    </div>
  );
}
