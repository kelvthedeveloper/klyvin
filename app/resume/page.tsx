import Link from "next/link";
import { Download } from "lucide-react";
import { siteInfo, experiences, certificates, education } from "@/lib/site-data";
import { PageHeader } from "@/components/ui/primitives";

export const metadata = {
  title: "Resume | Kelvin Nii Amu Okai",
  description: "Resume of Kelvin Nii Amu Okai — Full-Stack Developer at Klyvin.",
};

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader label="CV" title={siteInfo.fullName} description={siteInfo.title} />
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-semibold hover:bg-foreground/90 shrink-0"
        >
          <Download size={16} /> Download PDF
        </a>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-bold">Experience</h2>
        {experiences.map((exp, i) => (
          <div key={i} className="bg-secondary rounded-2xl p-6 space-y-2">
            <div className="flex justify-between gap-4">
              <div>
                <h3 className="font-bold">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>
              <span className="text-xs text-muted-foreground shrink-0">{exp.period}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold">Education</h2>
        {education.map((edu, i) => (
          <div key={i} className="bg-secondary rounded-2xl p-6">
            <h3 className="font-bold">{edu.degree}</h3>
            <p className="text-sm text-muted-foreground">{edu.school} · {edu.year}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold">Certificates</h2>
        {certificates.map((c) => (
          <div key={c.name} className="bg-secondary rounded-2xl p-5 flex justify-between gap-4">
            <span className="font-semibold text-sm">{c.name}</span>
            <span className="text-xs text-muted-foreground shrink-0">{c.issuer} · {c.year}</span>
          </div>
        ))}
      </section>

      <div className="text-center pt-4">
        <Link href="/contact" className="text-sm font-semibold text-primary hover:underline">
          Get in touch →
        </Link>
      </div>
    </div>
  );
}
