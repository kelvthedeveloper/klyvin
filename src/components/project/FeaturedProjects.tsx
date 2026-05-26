'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Layers, BarChart3, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: "Quantum Nexus",
    description: "High-performance enterprise dashboard with real-time analytics and predictive modeling.",
    tech: ["Next.js 15", "TypeScript", "Tailwind", "D3.js"],
    metrics: { speed: "98/100", users: "10k+", latency: "<50ms" },
    image: "/project1.jpg", // Placeholder
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "Aether OS",
    description: "Cloud-based operating system prototype built for seamless remote engineering collaboration.",
    tech: ["React", "WebContainers", "Socket.io", "Rust"],
    metrics: { speed: "95/100", users: "2k+", latency: "<20ms" },
    image: "/project2.jpg", // Placeholder
    color: "from-orange-500/20 to-amber-500/20"
  },
  {
    id: 3,
    title: "Velocity UI",
    description: "A premium design system and component library focused on performance and accessibility.",
    tech: ["React", "Radix UI", "Stitches", "Vite"],
    metrics: { speed: "100/100", users: "50k+", latency: "N/A" },
    image: "/project3.jpg", // Placeholder
    color: "from-purple-500/20 to-pink-500/20"
  }
];

export const FeaturedProjects = () => {
  const [hoveredId, setHoveredId] = React.useState<number | null>(null);

  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <Badge variant="outline" className="border-klyvin-orange/20 text-klyvin-orange bg-klyvin-orange/5 px-4 py-1">
                SELECTED WORKS
              </Badge>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Featured Engineering <br />
              <span className="text-klyvin-blue">Masterpieces</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="ghost" className="group text-lg hover:text-klyvin-blue">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card className="relative overflow-hidden group border-border/40 hover:border-klyvin-blue/30 transition-all duration-500 h-full flex flex-col bg-slate-50/50">
                {/* Image/Visual Placeholder */}
                <div className={`aspect-video w-full bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:scale-110 transition-transform duration-700">
                    <Layers className="w-20 h-20 text-slate-400" />
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="icon" variant="secondary" className="rounded-full w-8 h-8 bg-white/80 backdrop-blur-sm">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full w-8 h-8 bg-white/80 backdrop-blur-sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-slate-100 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-klyvin-blue transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/40">
                    <div className="flex flex-col">
                      <div className="flex items-center text-klyvin-blue mb-1">
                        <Zap className="w-3 h-3 mr-1" />
                        <span className="text-xs font-bold">{project.metrics.speed}</span>
                      </div>
                      <span className="text-[10px] uppercase text-muted-foreground font-medium">Speed</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center text-klyvin-orange mb-1">
                        <BarChart3 className="w-3 h-3 mr-1" />
                        <span className="text-xs font-bold">{project.metrics.users}</span>
                      </div>
                      <span className="text-[10px] uppercase text-muted-foreground font-medium">Reach</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center text-slate-800 mb-1">
                        <Layers className="w-3 h-3 mr-1" />
                        <span className="text-xs font-bold">{project.metrics.latency}</span>
                      </div>
                      <span className="text-[10px] uppercase text-muted-foreground font-medium">Lat</span>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {hoveredId === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-klyvin-blue/5 pointer-events-none"
                    />
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
