"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, Plus, Minus } from "lucide-react";
import { Project } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";

function ProjectScreenshots({ images, title }: { images: string[]; title: string }) {
  const slots = images.length > 0 ? images.slice(0, 2) : [null, null];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {slots.map((src, idx) => (
        <div
          key={idx}
          className="relative aspect-video rounded-xl overflow-hidden border border-border/40 bg-secondary/30"
        >
          {src ? (
            <Image
              src={src}
              alt={`${title} screenshot ${idx + 1}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary to-primary/5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50">
                {title} preview {idx + 1}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function ProjectAccordion({
  projects,
  showViewAll = false,
}: {
  projects: Project[];
  showViewAll?: boolean;
}) {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const toggleExpand = (slug: string) => {
    setExpandedSlug(expandedSlug === slug ? null : slug);
  };

  return (
    <div className="space-y-0">
      {projects.map((project) => {
        const isExpanded = expandedSlug === project.slug;

        return (
          <div key={project.slug} className="border-b border-border/30 last:border-b-0">
            <button
              onClick={() => toggleExpand(project.slug)}
              className="w-full flex items-center justify-between py-6 md:py-8 text-left group cursor-pointer gap-4"
            >
              <div className="space-y-1 min-w-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {project.category}
                </span>
              </div>

              <div className="h-10 w-10 shrink-0 rounded-full border border-border/60 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-10 md:pb-14 space-y-8">
                    {/* Action links */}
                    <div className="flex flex-wrap items-center gap-4">
                      {project.demoUrl && !project.demoUrl.includes("example.com") && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github size={14} />
                          GitHub Repo
                        </a>
                      )}
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                      >
                        More Details
                      </Link>
                    </div>

                    <ProjectScreenshots images={project.images} title={project.title} />

                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-border/20">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="space-y-1 text-center md:text-left">
                          <span className="block text-xl sm:text-2xl font-extrabold text-foreground">
                            {metric.value}
                          </span>
                          <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Overview & Problem */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                          Project Overview
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      {project.problem && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                            The Problem
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.problem}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Key Features */}
                    {project.features.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {project.features.map((feature, fIdx) => (
                            <div
                              key={fIdx}
                              className="p-4 rounded-xl border border-border/30 bg-card/30 space-y-1.5"
                            >
                              <h5 className="text-xs font-bold text-foreground">{feature.title}</h5>
                              {feature.description && (
                                <p className="text-[11px] text-muted-foreground leading-relaxed">
                                  {feature.description}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Engineering Challenges */}
                    {project.engineeringChallenges.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                          Engineering Challenges
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {project.engineeringChallenges.map((item, cIdx) => (
                            <div
                              key={cIdx}
                              className="p-4 rounded-xl border border-border/30 bg-secondary/20 space-y-2"
                            >
                              <p className="text-[11px] leading-relaxed">
                                <strong className="text-rose-500">Challenge:</strong>{" "}
                                <span className="text-muted-foreground">{item.challenge}</span>
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                <strong className="text-emerald-500">Solution:</strong>{" "}
                                <span className="text-muted-foreground">{item.solution}</span>
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Role & Timeline + Tech Stack */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                          Project Details
                        </h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p>
                            Role: <strong className="text-foreground">{project.role}</strong>
                          </p>
                          {project.timeline && (
                            <p>
                              Timeline: <strong className="text-foreground">{project.timeline}</strong>
                            </p>
                          )}
                        </div>

                        {project.learnings.length > 0 && (
                          <div className="space-y-3 pt-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                              Key Learnings
                            </h4>
                            <ul className="space-y-2">
                              {project.learnings.map((learning, lIdx) => (
                                <li
                                  key={lIdx}
                                  className="flex items-start gap-2 text-xs text-muted-foreground"
                                >
                                  <span className="h-1 w-1 rounded-full bg-primary mt-2 shrink-0" />
                                  {learning}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                          Architecture &amp; Tech Stack
                        </h4>
                        <div className="space-y-4">
                          {project.techStack.map((group, gIdx) => (
                            <div key={gIdx} className="space-y-2">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-primary">
                                {group.category}
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {group.items.map((item) => (
                                  <span
                                    key={item}
                                    className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-secondary border border-border/20 text-muted-foreground"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {project.roadmap.length > 0 && (
                          <div className="space-y-3 pt-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                              Future Roadmap
                            </h4>
                            <ul className="space-y-2">
                              {project.roadmap.map((item, rIdx) => (
                                <li
                                  key={rIdx}
                                  className="flex items-start gap-2 text-xs text-muted-foreground"
                                >
                                  <span className="h-1 w-1 rounded-full bg-primary/60 mt-2 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      {showViewAll && (
        <div className="pt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:underline"
          >
            View All Projects
          </Link>
        </div>
      )}
    </div>
  );
}
