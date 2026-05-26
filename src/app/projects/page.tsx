'use client';

import { Badge } from "@/components/ui/badge";
import { FeaturedProjects } from "@/components/project/FeaturedProjects";

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6 mb-20">
        <Badge variant="outline" className="border-klyvin-orange/20 text-klyvin-orange mb-4">PORTFOLIO</Badge>
        <h1 className="text-5xl font-black mb-8">Engineering <br/><span className="text-klyvin-orange">Showcase.</span></h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          An in-depth look at the systems, architectures, and products I've built.
        </p>
      </div>
      <FeaturedProjects />
    </div>
  );
}
