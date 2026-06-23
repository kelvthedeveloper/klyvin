import { getProjects } from "@/lib/content";
import { ProjectList } from "@/components/ProjectList";

export const metadata = {
  title: "Projects | Kelvin's Portfolio Showcase",
  description: "Browse the developer projects completed by Kelvin, including SaaS platforms, developer toolkits, and AI workspaces.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A showcase of products I have architected and built, focusing on clean structure, scalability, and UX.
        </p>
      </div>

      <ProjectList projects={projects} />
    </div>
  );
}
