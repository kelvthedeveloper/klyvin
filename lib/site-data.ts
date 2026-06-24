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
  summary: string;
  tags: string[];
  description: string;
  deliverables: string[];
  idealFor: string;
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
  email: "kelvthedeveloper@gmail.com",
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

export const serviceHighlights = [
  { value: "5", label: "Core services" },
  { value: "2–8 wks", label: "Typical delivery" },
  { value: "10+", label: "Products shipped" },
];

export const services: Service[] = [
  {
    id: "01",
    title: "Frontend Engineering",
    summary: "Fast, polished interfaces that convert and scale.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Accessibility"],
    description:
      "I build responsive UIs with clean component architecture, strong performance budgets, and accessibility baked in — from marketing sites to data-heavy dashboards.",
    deliverables: [
      "Component library & design system alignment",
      "Core Web Vitals optimization",
      "Responsive layouts for all breakpoints",
      "Animation and interaction polish",
    ],
    idealFor: "Startups refreshing their product UI or launching a new web app.",
  },
  {
    id: "02",
    title: "Full-Stack Applications",
    summary: "End-to-end apps from auth to deployment.",
    tags: ["Next.js", "Django", "Node.js", "PostgreSQL", "Supabase", "REST APIs"],
    description:
      "Full product builds covering authentication, database design, API layers, and production deployment — structured to grow from MVP to a stable v1 without rewrites.",
    deliverables: [
      "Auth, roles, and secure API routes",
      "Database schema & migrations",
      "Admin tools and internal workflows",
      "Staging + production deployment setup",
    ],
    idealFor: "Founders who need a reliable technical partner to ship v1.",
    image: "/kelvin.png",
  },
  {
    id: "03",
    title: "SaaS & Product Development",
    summary: "Subscription products with billing and admin built in.",
    tags: ["Multi-tenant", "Stripe Billing", "Dashboards", "Admin Panels"],
    description:
      "I specialize in SaaS architecture — tenant isolation, subscription flows, usage analytics, and operator dashboards — using patterns proven across the Klyvin product suite.",
    deliverables: [
      "Stripe checkout & subscription lifecycle",
      "Customer and admin dashboards",
      "Usage metrics and reporting views",
      "Onboarding and account management flows",
    ],
    idealFor: "Teams launching or scaling a B2B/B2C SaaS product.",
  },
  {
    id: "04",
    title: "AI Integration",
    summary: "Practical LLM features with cost and reliability controls.",
    tags: ["OpenAI API", "LangChain", "RAG", "Prompt Engineering"],
    description:
      "Smart search, assistants, and workflow automation powered by LLMs — with guardrails, fallbacks, token budgeting, and observability so AI features stay production-safe.",
    deliverables: [
      "Chat, search, or copilot feature integration",
      "Prompt templates & evaluation workflow",
      "Rate limiting and error fallback logic",
      "Cost monitoring and usage dashboards",
    ],
    idealFor: "Products adding AI without sacrificing reliability or margins.",
  },
  {
    id: "05",
    title: "DevOps & Deployment",
    summary: "Ship fast, stay fast in production.",
    tags: ["Vercel", "Docker", "CI/CD", "AWS", "Monitoring"],
    description:
      "CI/CD pipelines, environment strategy, and performance tuning so releases are predictable and your app stays fast under real traffic.",
    deliverables: [
      "Automated build & deploy pipelines",
      "Environment and secrets management",
      "Lighthouse & Core Web Vitals tuning",
      "Monitoring hooks and rollback strategy",
    ],
    idealFor: "Teams preparing for launch or stabilizing an existing product.",
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
    degree: "CTVET - Computer Hardware Technology",
    school: "Accra Technical Training Centre",
    year: "2021 - 2024",
    details: "Computer Hardware,  Computer Networking, and Web Development",
  },
  {
    degree: "B.Tech. Computer Science (In Progress)",
    school: "Accra TechnicalUniversity",
    year: "2024 - Present",
    details: "Software engineering, web development, and applied AI systems.",
  },
];
