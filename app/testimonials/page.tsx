import { testimonials } from "@/lib/site-data";
import { TestimonialsPageGrid } from "@/components/TestimonialsSection";
import { PageHeader, ArrowButton } from "@/components/ui/primitives";

export const metadata = {
  title: "Testimonials | Kelvin Nii Amu Okai",
  description: "Client and collaborator feedback on Kelvin's full-stack development work.",
};

export default function TestimonialsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12">
      <PageHeader
        label="Client Feedback"
        title="What People Say About My Work"
        description="Feedback from founders, product managers, and tech leads I've collaborated with."
      />
      <TestimonialsPageGrid testimonials={testimonials} />
      <div className="flex justify-center pt-4">
        <ArrowButton href="/contact" label="Start a Project" variant="primary" />
      </div>
    </div>
  );
}
