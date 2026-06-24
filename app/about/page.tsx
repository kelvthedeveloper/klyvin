import Image from "next/image";
import { stats, experiences, certificates, education, siteInfo } from "@/lib/site-data";
import { PageHeader, ArrowButton } from "@/components/ui/primitives";

export const metadata = {
  title: "About | Kelvin Nii Amu Okai",
  description: "Learn about Kelvin Nii Amu Okai — Full-Stack Developer and founder of Klyvin.",
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <PageHeader
            label="About Me"
            title={`I'm ${siteInfo.firstName}, a ${siteInfo.role}`}
            description={siteInfo.bio}
          />
          <ArrowButton href="/contact" label="Work With Me" variant="dark" />
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 rounded-3xl" />
          <div className="relative aspect-[4/5] max-w-sm mx-auto rounded-2xl overflow-hidden">
            <Image src="/kelvin.jpg" alt={siteInfo.fullName} fill className="object-cover" sizes="400px" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-secondary rounded-2xl p-6 text-center">
            <p className="text-3xl sm:text-4xl font-bold text-primary">{s.value}</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Experience */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Work Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-secondary rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-4 md:gap-8"
            >
              <div className="md:w-1/3">
                <p className="text-sm text-primary font-semibold">{exp.period}</p>
                <h3 className="text-lg font-bold mt-1">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>
              <div className="md:w-2/3 space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags?.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-background border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="bg-secondary rounded-2xl p-6">
              <h3 className="font-bold">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">{edu.school} · {edu.year}</p>
              <p className="text-sm text-muted-foreground mt-2">{edu.details}</p>
            </div>
          ))}
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Certificates</h2>
          {certificates.map((cert) => (
            <div key={cert.name} className="bg-secondary rounded-2xl p-6">
              <h3 className="font-bold text-sm">{cert.name}</h3>
              <p className="text-xs text-muted-foreground">{cert.issuer} · {cert.year}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
