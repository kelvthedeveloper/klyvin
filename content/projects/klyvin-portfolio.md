---
title: "Klyvin Portfolio"
description: "A cinematic full-stack portfolio site showcasing projects, technical writing, and professional experience — built to reflect the craft of a pro developer."
category: "Next.js & Design"
featured: true
order: 4
tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "MDX"]
githubUrl: "https://github.com/kelvthedeveloper/Kelvin-Portfolio"
demoUrl: "https://klyvin.vercel.app"
images: ["/kelvin.jpg"]
role: "Full Stack Developer & Designer"
timeline: "May 2025 - Present"
problem: "Generic portfolio templates fail to communicate engineering depth and personality. Developers need a site that showcases case studies, writing, and experience in an immersive, performance-optimized layout."
features:
  - title: "Cinematic Hero Design"
    description: "Outline typography, portrait framing, and infinite marquee inspired by modern portfolio aesthetics."
  - title: "Rich Project Accordions"
    description: "Expandable case studies with metrics, engineering challenges, tech stacks, and roadmaps."
  - title: "MDX Blog Engine"
    description: "Markdown-powered blog with syntax highlighting and SEO-optimized static generation."
  - title: "Dark/Light Theming"
    description: "System-aware theme switching with film grain and ambient light overlays."
metrics:
  - value: "98/100"
    label: "Lighthouse Score"
  - value: "<1.2s"
    label: "Load Time"
  - value: "10+ Pages"
    label: "Routes Built"
  - value: "6 Weeks"
    label: "Development Time"
engineeringChallenges:
  - challenge: "Building smooth accordion animations without layout shift"
    solution: "Used Framer Motion height animations with overflow-hidden containers and cubic-bezier easing for fluid expand/collapse."
  - challenge: "Keeping content manageable across projects, blog, and site data"
    solution: "Centralized site metadata in lib/site-data.ts and project content in markdown frontmatter parsed at build time."
techStack:
  - category: "Frontend"
    items: ["Next.js 16", "React 19", "Tailwind CSS v4", "Framer Motion"]
  - category: "Content"
    items: ["Gray Matter", "Marked", "MDX"]
  - category: "Deployment"
    items: ["Vercel", "Static Generation"]
learnings:
  - "Mastered Next.js App Router static generation with dynamic markdown content."
  - "Learned to balance cinematic design with Core Web Vitals performance."
  - "Improved component architecture for reusable portfolio sections."
roadmap:
  - "CMS integration for non-technical content updates."
  - "Analytics dashboard for visitor insights."
  - "Internationalization support."
challenges: "Building smooth accordion animations without layout shift on expandable project panels."
lessons: "Framer Motion with overflow-hidden containers and custom easing curves delivered fluid animations without jank."
---

This portfolio is the flagship showcase for Klyvin — designed to communicate engineering depth through interactive case studies, technical writing, and a cinematic user experience.
