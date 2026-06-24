---
title: "CurrencyFlow"
description: "An AI-powered browser extension that converts currencies instantly while you browse the web."
category: "Browser Extension"
featured: false
order: 10
tags: ["JavaScript", "Chrome Extension", "AI", "APIs"]
githubUrl: "https://github.com/kelvthedeveloper/CurrencyFlow"
role: "Full Stack Developer & Founder"
timeline: "Jun 2025 - Present"
problem: "Online shoppers and travelers constantly switch between tabs to check currency conversions. Existing tools are slow, inaccurate, or require manual input for every price encountered."
features:
  - title: "Instant Conversion"
    description: "Automatically detects prices on web pages and converts them to your preferred currency."
  - title: "Smart Detection"
    description: "AI-assisted parsing identifies price formats across different locales and currencies."
  - title: "Custom Preferences"
    description: "Set default currency, rounding rules, and highlight styles in a lightweight popup."
metrics:
  - value: "Instant"
    label: "Conversion Speed"
  - value: "50+ Currencies"
    label: "Supported"
  - value: "Zero Config"
    label: "Auto-Detect"
  - value: "3 Weeks"
    label: "Development Time"
engineeringChallenges:
  - challenge: "Parsing diverse price formats across international e-commerce sites"
    solution: "Built a regex and AI hybrid parser that handles locale-specific number formats and currency symbols."
  - challenge: "Minimizing performance impact on page load"
    solution: "Used MutationObserver with debounced scanning limited to text nodes containing currency patterns."
techStack:
  - category: "Extension"
    items: ["JavaScript", "Chrome APIs", "Manifest V3"]
  - category: "Backend"
    items: ["Exchange Rate API", "Caching"]
  - category: "AI"
    items: ["Pattern Detection"]
learnings:
  - "Learned Chrome extension architecture with Manifest V3 service workers."
  - "Gained experience optimizing DOM scanning for minimal page performance impact."
roadmap:
  - "Firefox and Edge extension ports."
  - "Historical rate charts in popup dashboard."
challenges: "Parsing diverse price formats across international e-commerce sites."
lessons: "A regex and AI hybrid parser handled locale-specific number formats reliably."
---

CurrencyFlow brings instant currency conversion to any webpage — part of the Klyvin product ecosystem.
