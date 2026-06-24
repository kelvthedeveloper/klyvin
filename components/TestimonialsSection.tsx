import Link from "next/link";
import { Star } from "lucide-react";
import { Testimonial } from "@/lib/site-data";
import { SectionLabel } from "@/components/ui/primitives";

export function TestimonialsSection({
  testimonials,
  showViewAll = false,
}: {
  testimonials: Testimonial[];
  showViewAll?: boolean;
}) {
  const display = showViewAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-12">
          <SectionLabel>Client Feedback</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            What People Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {display.map((t, i) => (
            <div
              key={i}
              className="bg-secondary rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-bold text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {!showViewAll && (
          <div className="flex justify-center mt-10">
            <Link
              href="/testimonials"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Read all testimonials →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function TestimonialsPageGrid({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-secondary rounded-2xl p-8 space-y-4">
          <div className="flex gap-0.5">
            {Array.from({ length: t.rating }).map((_, j) => (
              <Star key={j} size={16} className="fill-primary text-primary" />
            ))}
          </div>
          <p className="text-base leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
          <div className="pt-2 border-t border-border">
            <p className="font-bold">{t.author}</p>
            <p className="text-sm text-muted-foreground">{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
