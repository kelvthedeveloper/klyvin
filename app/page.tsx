import { getProjects } from "@/lib/content";
import { services, testimonials } from "@/lib/site-data";
import { Hero } from "@/components/Hero";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { ServicesAccordion } from "@/components/ServicesAccordion";
import { ProjectGrid } from "@/components/ProjectGrid";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default async function Home() {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />
      <MarqueeTicker />
      <ServicesAccordion services={services} showViewAll compact />
      <ProjectGrid projects={featured.length ? featured : projects} showViewAll limit={4} />
      <TestimonialsSection testimonials={testimonials} />
    </>
  );
}
