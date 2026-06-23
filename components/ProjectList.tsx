"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Tag, Github, ExternalLink } from "lucide-react";
import { Project } from "@/lib/content";

export function ProjectList({ projects }: { projects: Project[] }) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract unique tags
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

  const filteredProjects = selectedTag
    ? projects.filter((p) => p.tags.includes(selectedTag))
    : projects;

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag(null)}
          className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
            selectedTag === null
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-secondary text-muted-foreground border-border/40 hover:border-primary/20 hover:text-foreground"
          }`}
        >
          All Projects
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
              selectedTag === tag
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-secondary text-muted-foreground border-border/40 hover:border-primary/20 hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.slug}
            className="flex flex-col p-6 rounded-2xl border border-border/40 bg-card/45 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
          >
            <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground bg-secondary/80 px-2 py-0.5 rounded border border-border/20"
                >
                  <Tag size={8} />
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border/30 mt-auto">
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors p-1"
                    title="View GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors p-1"
                    title="View Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer"
              >
                Case Study
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
