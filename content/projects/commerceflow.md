---
title: "CommerceFlow"
description: "An AI-powered commerce platform that optimizes storefront metrics, simplifies product catalogs, and provides transactional insights."
tags: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI", "Tailwind CSS"]
githubUrl: "https://github.com/kelvthedeveloper/commerceflow"
demoUrl: "https://commerceflow.example.com"
features:
  - "Personalized product recommendations engine powered by vector search"
  - "Secure checking and custom pricing flows for enterprise customers"
  - "Real-time analytics dashboard monitoring daily transaction volume"
challenges: "Syncing product catalog search indexes in real-time during heavy flash sale traffic without spiking API database resource utilization."
lessons: "Leveraging Redis cache middleware and implementing elastic search queues enabled decoupled indexing, dropping response latency by 45%."
---

CommerceFlow was designed to bridge the gap between static e-commerce storefronts and interactive web experiences. By building on top of Next.js and integrating LLM-assisted search query optimization, users are able to search catalog listings in natural language.

### Core Architecture Decisions
* **Database & ORM**: PostgreSQL paired with Prisma for secure type-safe queries.
* **Vector Search**: PostgreSQL pgvector for managing item similarity embeddings.
* **Hosting**: Vercel for the web frontend and AWS RDS for database systems.
