import { services } from "@/lib/site-data";
import { ServicesAccordion } from "@/components/ServicesAccordion";
import { PageHeader } from "@/components/ui/primitives";

export const metadata = {
  title: "Services | Kelvin Nii Amu Okai",
  description: "Full-stack development, SaaS builds, AI integration, and deployment services by Kelvin.",
};

export default function ServicesPage() {
  return (
    <div className="pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-4">
        <PageHeader
          label="What I Do"
          title="Services I Provide"
          description="Pick a service to see deliverables, tech stack, and who it is best suited for — then let's talk scope."
        />
      </div>
      <ServicesAccordion services={services} />
    </div>
  );
}
