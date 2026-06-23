import { FileText, Download, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, Globe } from "lucide-react";

export const metadata = {
  title: "Resume | Kelvin's Professional Experience",
  description: "View and download Kelvin's resume, detailing skills in Next.js, React, Node.js, and Full-Stack Engineering.",
};

export default function ResumePage() {
  const experiences = [
    {
      period: "2024 - Present",
      role: "Senior Full-Stack Developer",
      company: "InnovateTech Solutions",
      bullets: [
        "Architected Next.js micro-frontends with customized middleware caches, speeding page load metrics by 35%.",
        "Configured backend OpenAI agent pipelines to handle product categorization and user request sorting.",
        "Refactored relational database indexes on large client telemetry data schemas, saving thousands in AWS storage budgets."
      ]
    },
    {
      period: "2022 - 2024",
      role: "Full-Stack Engineer",
      company: "Apex E-Commerce Systems",
      bullets: [
        "Constructed custom stripe-assisted multi-currency checkout routes for enterprise merchants.",
        "Managed database cluster optimizations on MongoDB instances, securing uptime during heavy black Friday traffic windows.",
        "Initiated type-safety refactors on old javascript components to standard TypeScript interfaces."
      ]
    },
    {
      period: "2020 - 2022",
      role: "Software Developer",
      company: "Launchpad Software Studio",
      bullets: [
        "Constructed customizable dashboard visuals for client administration utilities using modular React architectures.",
        "Set up GitHub Actions CI/CD workflows, shortening deployment testing loops by 15 minutes.",
        "Authored developer manuals and codebase onboarding files for new junior staff hires."
      ]
    }
  ];

  const education = [
    {
      degree: "B.S. in Computer Science",
      school: "State University of Technology",
      year: "2016 - 2020",
      details: "Specialized in Software Engineering and Distributed Systems. Graduated with Honors."
    }
  ];

  const certifications = [
    { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", year: "2025" },
    { name: "MongoDB Certified Developer", issuer: "MongoDB Inc", year: "2023" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-12">
      {/* Page Title & Download CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/40 pb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Curriculum Vitae</h1>
          <p className="text-muted-foreground text-sm mt-1">My professional experience and technical history.</p>
        </div>
        
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm cursor-pointer"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>

      {/* Grid: Main Info & Contact Sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Main Content (Experience, Education) */}
        <div className="md:col-span-2 space-y-10">
          {/* Work Experience */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2 border-b border-border/40 pb-2">
              <Briefcase size={20} className="text-primary" />
              Work Experience
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                      <p className="text-sm font-semibold text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-secondary/80 px-2 py-1 rounded border border-border/20 self-start sm:self-center">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1.5 leading-relaxed">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2 border-b border-border/40 pb-2">
              <GraduationCap size={20} className="text-primary" />
              Education
            </h2>
            
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-foreground">{edu.degree}</h3>
                    <span className="text-xs text-muted-foreground bg-secondary/80 px-2 py-1 rounded border border-border/20 self-start sm:self-center">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground">{edu.school}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-1">{edu.details}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar (Skills, Contact, Certifications) */}
        <div className="space-y-8">
          {/* Contact Details */}
          <div className="p-6 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm space-y-4">
            <h3 className="text-base font-bold border-b border-border/30 pb-2">Contact Details</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span>kelvin@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span>+1 (555) 019-2834</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={16} className="text-primary" />
                <a href="https://kelvin.dev" className="hover:text-foreground transition-colors">kelvin.dev</a>
              </div>
            </div>
          </div>

          {/* Key Skills */}
          <div className="p-6 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm space-y-4">
            <h3 className="text-base font-bold border-b border-border/30 pb-2">Key Skills</h3>
            <div className="flex flex-wrap gap-1.5">
              {["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "MongoDB", "REST APIs", "AWS Cloud", "Docker", "Git Workflow", "AI Integrations"].map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded bg-secondary text-secondary-foreground border border-border/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="p-6 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm space-y-4">
            <h3 className="text-base font-bold border-b border-border/30 pb-2 flex items-center gap-2">
              <Award size={18} className="text-primary" />
              Certificates
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              {certifications.map((cert, idx) => (
                <div key={idx} className="space-y-0.5">
                  <h4 className="font-bold text-foreground text-xs leading-tight">{cert.name}</h4>
                  <p className="text-[11px]">{cert.issuer} &bull; {cert.year}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
