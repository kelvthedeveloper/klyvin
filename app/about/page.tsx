import { Award, Briefcase, BookOpen, Code2, Heart } from "lucide-react";

export default function AboutPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Redux Toolkit", "Framer Motion"],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis", "REST APIs", "GraphQL"],
    },
    {
      title: "DevOps & Cloud",
      skills: ["Vercel", "AWS (S3, EC2)", "Docker", "Git/GitHub", "CI/CD Pipelines", "Linux Shell"],
    },
    {
      title: "AI & Tools",
      skills: ["OpenAI API", "LangChain", "Vector Databases", "VS Code", "Postman", "Figma"],
    },
  ];

  const experienceTimeline = [
    {
      role: "Senior Full-Stack Developer",
      company: "InnovateTech Solutions",
      period: "2024 - Present",
      description: "Leading the development of a flagship SaaS management tool. Built AI assistant services integrating OpenAI APIs to automate customer ticket classification, improving resolution speeds by 30%. Core technologies: Next.js, Node.js, and PostgreSQL.",
    },
    {
      role: "Full-Stack Engineer",
      company: "Apex E-Commerce Systems",
      period: "2022 - 2024",
      description: "Designed and implemented critical payment workflows and storefront enhancements. Managed the transition from legacy monolith systems to decoupled API-driven storefront models, reducing client-side load times significantly.",
    },
    {
      role: "Software Developer",
      company: "Launchpad Software Studio",
      period: "2020 - 2022",
      description: "Developed customizable content dashboards and API routes for client businesses. Championed modular React designs and automated unit testing procedures, boosting overall codebase stability.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-16">
      
      {/* Intro section */}
      <section className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          I&apos;m a software engineer focused on designing clean, maintainable, and high-performance solutions for SaaS and e-commerce spaces. I enjoy bridging the gap between solid architectural patterns and outstanding user experiences.
        </p>
      </section>

      {/* Grid: Bio and Journey */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary font-semibold">
            <BookOpen size={18} />
            <h2>My Journey</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            My programming journey began out of a desire to build things that automate repetitiveness. What started as simple scripting utility hacks quickly evolved into designing robust multi-service web applications.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Over the years, I&apos;ve collaborated with teams to construct transactional databases, scalable API endpoints, and clean interactive frontends. I constant-learn to keep pace with changing architectures, currently optimizing systems with modern LLMs and vector embeddings.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary font-semibold">
            <Heart size={18} />
            <h2>My Philosophy</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I believe that software should be intuitive to use and maintainable to scale. I write well-documented, type-safe code and structure directories cleanly to ensure coworkers and contributors can navigate implementations easily.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Outside of coding, I participate in open-source development, author developer guides on my technical blog, and stay interested in emerging product designs.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-primary font-semibold">
          <Code2 size={18} />
          <h2>Technical Expertise</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl border border-border/40 bg-card/45 backdrop-blur-sm"
            >
              <h3 className="text-base font-bold mb-4 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-secondary text-secondary-foreground border border-border/30 hover:border-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-primary font-semibold">
          <Briefcase size={18} />
          <h2>Professional Experience</h2>
        </div>

        <div className="relative border-l border-border/80 pl-6 ml-3 space-y-10">
          {experienceTimeline.map((job) => (
            <div key={job.company + job.role} className="relative group">
              
              {/* Dot indicator */}
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-primary transition-colors duration-200" />
              
              <div className="space-y-2">
                <span className="text-xs text-muted-foreground font-medium block">
                  {job.period}
                </span>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                  {job.role}
                </h3>
                <h4 className="text-sm font-semibold text-muted-foreground">{job.company}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2 max-w-3xl">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
