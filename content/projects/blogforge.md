---
title: "BlogForge"
description: "A modern content management system built for creators, publishers, and businesses with visual MDX editing and analytics."
category: "Next.js & MDX"
featured: false
order: 7
tags: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "SQLite"]
githubUrl: "https://github.com/kelvthedeveloper/BlogForge"
role: "Full Stack Developer & Founder"
timeline: "Jun 2025 - Present"
problem: "Content teams need a CMS supporting interactive MDX components without sacrificing security. Traditional editors lack live preview and unsafe rendering opens XSS attack vectors."
features:
  - title: "Visual MDX Workspace"
    description: "Side-by-side editor with live preview of parsed MDX tags and interactive components."
  - title: "Dynamic SEO Manager"
    description: "Automatic meta tag generation with verification warnings for missing descriptions."
  - title: "Secure Component Sandbox"
    description: "Custom AST validators block unverified iframe and script inputs before compilation."
metrics:
  - value: "MDX"
    label: "Static AST Compiler"
  - value: "100%"
    label: "Secure Sandbox"
  - value: "Zero"
    label: "XSS Vectors"
  - value: "6 Weeks"
    label: "Development Time"
engineeringChallenges:
  - challenge: "Creating a secure compiler interface for custom interactive MDX React components"
    solution: "Wrote custom AST validators to drop unverified iframe/script inputs before compiling."
techStack:
  - category: "Frontend"
    items: ["Next.js", "React", "Tailwind CSS", "MDX"]
  - category: "Backend"
    items: ["Node.js", "SQLite", "Edge Functions"]
learnings:
  - "Deepened expertise in MDX compilation pipelines and AST manipulation."
  - "Learned security-first content rendering for user-generated components."
roadmap:
  - "Collaborative multi-author editing with real-time cursors."
  - "AI-assisted content suggestions and SEO optimization."
challenges: "Creating a secure compiler interface for custom interactive MDX React components."
lessons: "Custom AST validators blocked unverified inputs before compilation, avoiding XSS exploits."
---

BlogForge powers blogs by offering editors a layout editor that compiles Markdown into visually striking articles.
