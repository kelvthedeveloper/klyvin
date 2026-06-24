export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tags?: string[];
}

export interface Service {
  id: string;
  title: string;
  tags: string[];
  description: string;
  image?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface Certificate {
  name: string;
  issuer: string;
  year: string;
  tags: string[];
}

export const siteInfo = {
  fullName: "Kelvin Nii Amu Okai",
  firstName: "Kelvin",
  lastName: "Nii Amu Okai",
  company: "Klyvin",
  role: "Full-Stack Developer",
  location: "Accra, Ghana",
  title: "Full-Stack Developer, SaaS Builder & AI Integrator",
  bio: "I'm Kelvin Nii Amu Okai, a full-stack developer based in Accra, Ghana, building modern web applications with Next.js, React, TypeScript, and Django. Through Klyvin, I design and ship AI-powered SaaS products that solve real business problems.",
  email: "hello@klyvin.com",
  phone: "",
  website: "https://klyvin.vercel.app",
  socials: {
    github: "https://github.com/kelvthedeveloper",
    linkedin: "https://linkedin.com/in/kelvthedeveloper",
    website: "https://www.klyvin.com",
  },
  reviewSummary: {
    count: "50+",
    rating: "4.9",
    label: "Reviews from valued clients & collaborators",
  },
};

export const heroTags = [
  { label: "SaaS Platforms", variant: "dark" as const },
  { label: "AI Integration", variant: "primary" as const },
  { label: "Next.js Apps", variant: "dark" as const, icon: true },
  { label: "API Design", variant: "primary" as const },
  { label: "E-Commerce", variant: "dark" as const },
];

export const tickerItems = [
  "Full-Stack Development",
  "SaaS Architecture",
  "AI Workflows",
  "API Integration",
  "Cloud Deployment",
  "UI Engineering",
];

export const services: Service[] = [
  {
    id: "01",
    title: "Frontend Engineering",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    description:
      "Pixel-perfect, performance-first interfaces built with React and Next.js. From landing pages to complex dashboards — fast load times, accessible components, and smooth interactions.",
  },
  {
    id: "02",
    title: "Full-Stack Applications",
    tags: ["Next.js", "Django", "Node.js", "PostgreSQL", "Supabase", "REST APIs"],
    description:
      "End-to-end product development — authentication, databases, APIs, and deployment. I architect scalable full-stack systems that grow with your business, from MVP to production.",
    image: "/kelvin.jpg",
  },
  {
    id: "03",
    title: "SaaS & Product Development",
    tags: ["Multi-tenant", "Stripe Billing", "Dashboard UI", "Admin Panels"],
    description:
      "Complete SaaS builds including user management, subscription billing, analytics dashboards, and admin tooling. Specialized in the Klyvin product suite pattern.",
  },
  {
    id: "04",
    title: "AI Integration",
    tags: ["OpenAI API", "LangChain", "Prompt Engineering", "Automation"],
    description:
      "Integrate LLMs into your product — smart search, chat assistants, automated workflows, and AI-powered features with proper error handling and cost controls.",
  },
  {
    id: "05",
    title: "DevOps & Deployment",
    tags: ["Vercel", "Docker", "CI/CD", "AWS", "Performance Tuning"],
    description:
      "Production-ready deployments with optimized build pipelines, environment management, and Core Web Vitals tuning. Your app shipped fast and kept fast.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Kelvin's full-stack expertise transformed our product roadmap. Clean code, fast delivery, and excellent communication throughout.",
    author: "Alex M.",
    role: "Startup Founder",
    rating: 5,
  },
  {
    quote:
      "The SaaS platform Kelvin built for us handles thousands of users flawlessly. His Next.js and API architecture skills are top-tier.",
    author: "Sarah K.",
    role: "Product Manager",
    rating: 5,
  },
  {
    quote:
      "Reliable, detail-oriented, and always thinking about scalability. Kelvin delivered beyond our expectations on a tight deadline.",
    author: "James O.",
    role: "Tech Lead",
    rating: 5,
  },
  {
    quote:
      "From AI integration to deployment — Kelvin handled everything. Our conversion rates improved significantly after the redesign.",
    author: "Priya R.",
    role: "E-Commerce Director",
    rating: 5,
  },
];

export const experiences: Experience[] = [
  {
    role: "Founder & Full-Stack Developer",
    company: "Klyvin",
    period: "2025 - Present",
    description:
      "Building a suite of AI-powered SaaS platforms including CommerceFlow, GymFlow AI, TeamSync, and DevFlow. Architecting Next.js frontends, Django/Node backends, and OpenAI integrations.",
    tags: ["Next.js", "TypeScript", "Django", "OpenAI"],
  },
  {
    role: "Independent Software Developer",
    company: "Freelance & Open Source",
    period: "2024 - Present",
    description:
      "Delivering full-stack web applications for clients. Specializing in React/Next.js SPAs, REST API design, and browser extension development.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
];

export const stats = [
  { value: "10+", label: "Projects Shipped" },
  { value: "5+", label: "SaaS Products" },
  { value: "3+", label: "Years Coding" },
  { value: "100%", label: "Client Focus" },
];

export const certificates: Certificate[] = [
  { name: "Meta Front-End Developer", issuer: "Meta", year: "2025", tags: ["React"] },
  { name: "Google IT Automation with Python", issuer: "Google", year: "2025", tags: ["Python"] },
  { name: "AWS Cloud Practitioner", issuer: "AWS", year: "2024", tags: ["Cloud"] },
];

export const education = [
  {
    degree: "B.Sc. Computer Science (In Progress)",
    school: "University",
    year: "2022 - Present",
    details: "Software engineering, web development, and applied AI systems.",
  },
];
