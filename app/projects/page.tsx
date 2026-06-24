import { getProjects } from "@/lib/content";
import { ProjectGrid } from "@/components/ProjectGrid";
import { PageHeader } from "@/components/ui/primitives";

export const metadata = {
  title: "Projects | Kelvin Nii Amu Okai",
  description: "Browse SaaS products, tools, and platforms built by Kelvin at Klyvin.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="pt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-4">
        <PageHeader
          label="Portfolio"
          title="All Projects"
          description="Case studies and products from the Klyvin suite and client work."
        />
      </div>
      <ProjectGrid projects={projects} hideHeader />
    </div>
  );
}
