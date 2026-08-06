import type { Dictionary } from '../types';

export const en: Dictionary = {
  meta: {
    title: 'Yuki Tadokoro | Frontend Engineer',
    description:
      'Frontend engineer building live-streaming platform features with Next.js and TypeScript. Known for fast, AI-agent-driven development and a product-minded approach.',
    ogTitle: 'Yuki Tadokoro | Frontend Engineer',
    ogDescription:
      'Frontend engineer working with Next.js and TypeScript. Fast, AI-agent-driven development with a product-minded approach.',
    keywords: [
      'portfolio',
      'frontend engineer',
      'Next.js',
      'React',
      'TypeScript',
      'AI-driven development',
      'web development',
      'Tokyo',
    ],
  },
  nav: {
    ariaLabel: 'Main navigation',
    logo: 'YT / Portfolio',
    items: [
      { id: 'home', label: 'Home' },
      { id: 'projects', label: 'Work' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'contact', label: 'Contact' },
    ],
    toggleMenu: 'Toggle menu',
    languageLabel: 'Switch language',
    themeToggle: {
      label: 'Toggle theme',
      toLight: 'Switch to light mode',
      toDark: 'Switch to dark mode',
    },
  },
  hero: {
    eyebrow: 'TOKYO · FRONTEND / PRODUCT ENGINEER',
    headline: ['Build it.', 'Test it.', 'Ship it.'],
    role: 'Yuki Tadokoro — Frontend Engineer',
    description: [
      'I build live-streaming product features with Next.js and TypeScript, including payment flows and real-time interfaces.',
      'I am at my best when I can investigate a problem, shape the solution, and carry it through implementation and verification.',
    ],
    primaryCta: 'View selected work',
    secondaryCta: 'GitHub',
    proofLabel: 'Evidence, not adjectives',
    proofs: [
      { value: 'Production', label: 'Live-streaming product development' },
      { value: 'Merged', label: 'Patch to a public OSS project' },
      { value: 'Deployed', label: 'Team-built app shipped to AWS' },
    ],
    routeLabel: 'DEVELOPMENT ROUTE',
    routeSteps: [
      {
        code: '01',
        title: 'Find the real problem',
        description: 'Study the context and narrow down what is worth solving.',
      },
      {
        code: '02',
        title: 'Make it work',
        description: 'Connect the interface, data, and systems the solution needs.',
      },
      {
        code: '03',
        title: 'Verify and ship',
        description: 'Test, run QA, and carry the work through to a usable release.',
      },
    ],
  },
  about: {
    sign: {
      title: 'About',
      subtitle: 'じこしょうかい · 自己紹介',
    },
    lead: 'I care about what the technology changes for the person using it.',
    paragraphs: [
      'I work on a live-streaming product as a long-term frontend engineering intern. My work includes payment features, real-time interfaces, and retention-oriented features built with Next.js and TypeScript, along with QA and code review.',
      'I do not leave unknowns unresolved. I inspect the actual code and data, then turn what I learn into a working change. AI agents are part of my daily workflow, while product and engineering decisions remain my responsibility.',
    ],
    principlesHeading: 'How I work',
    principles: [
      {
        title: 'Replace guesses with evidence',
        description:
          'I check the specification, code, and usage context before choosing a direction.',
      },
      {
        title: 'Build small, verify early',
        description: 'I make the idea tangible, then improve it through tests and feedback.',
      },
      {
        title: 'Leave the team stronger',
        description: 'I aim for reviewable changes and records the next person can follow.',
      },
    ],
    timelineHeading: 'Experience',
    timelineMoreLabel: 'View the full timeline',
    timeline: [
      {
        year: '2026 - Present',
        title: 'Frontend Engineer, Live-Streaming Platform (Long-Term Internship)',
        description:
          'Feature development with Next.js and TypeScript: implemented payment features (request menu), My List, and dark mode support, while also taking part in QA and code review. Hands-on production experience with real-time communication (Socket.IO / AppSync).',
        type: 'work',
      },
      {
        year: '2026',
        title: 'First Hackathon & Start of Open Source Contributions',
        description:
          'Built konbini-navi with a team at Progate Hackathon 2026 and deployed it to production on AWS. Started contributing to open source with a merged bug-fix PR for the Obsidian Git plugin.',
        type: 'work',
      },
      {
        year: '2025 - 2026',
        title: 'Long-Term Internship, Programming Education Service',
        description:
          "Joined the operations team of a web development bootcamp: reviewed students' code, provided mentoring, and built up operational knowledge — gaining experience in both teaching and code review.",
        type: 'work',
      },
      {
        year: '2023',
        title: 'Started Learning Web Development',
        description:
          'Began learning modern frontend technologies such as React, Next.js, and TypeScript, expanding practical skills through personal projects and internships.',
        type: 'education',
      },
      {
        year: '2021',
        title: 'Enrolled at Tokyo Denki University',
        description:
          'Majoring in information systems at the School of System Design and Technology, studying software engineering, networks, and data engineering.',
        type: 'education',
      },
    ],
    badgeWork: 'Work',
    badgeEducation: 'Education',
    interestsHeading: 'Areas of Interest',
    interests: [
      'LLM agents × development automation',
      'Product engineering',
      'Real-time communication & streaming',
      'UI/UX and accessibility',
      'Data analysis & probabilistic modeling',
      'Open source contribution',
    ],
  },
  skills: {
    sign: {
      title: 'Skills',
      subtitle: 'すきる · 技術',
    },
    intro: 'Grouped by where I use each technology, rather than presenting a wall of tool names.',
    levelLabels: {
      Advanced: 'Core',
      Intermediate: 'Working',
      Beginner: 'Learning',
    },
    categories: [
      {
        category: 'Frontend',
        skills: [
          { name: 'Next.js', level: 'Advanced' },
          { name: 'React', level: 'Advanced' },
          { name: 'TypeScript', level: 'Advanced' },
          { name: 'Tailwind CSS', level: 'Intermediate' },
          { name: 'Accessibility (WCAG)', level: 'Intermediate' },
        ],
      },
      {
        category: 'Backend & Infra',
        skills: [
          { name: 'Node.js (Hono / Express)', level: 'Intermediate' },
          { name: 'REST / GraphQL API', level: 'Intermediate' },
          { name: 'AWS (ECS / AppSync / DynamoDB)', level: 'Beginner' },
          { name: 'Docker', level: 'Intermediate' },
          { name: 'PostgreSQL / SQLite', level: 'Intermediate' },
        ],
      },
      {
        category: 'Testing & Quality',
        skills: [
          { name: 'Playwright', level: 'Intermediate' },
          { name: 'Vitest', level: 'Intermediate' },
          { name: 'Code review', level: 'Advanced' },
        ],
      },
      {
        category: 'AI-Driven Development',
        skills: [
          { name: 'Claude Code / LLM agents', level: 'Advanced' },
          { name: 'Browser automation (Playwright CLI)', level: 'Advanced' },
          { name: 'Python (data analysis / probabilistic models)', level: 'Intermediate' },
        ],
      },
    ],
  },
  projects: {
    sign: {
      title: 'Projects',
      subtitle: 'せいさくぶつ · 制作物',
    },
    intro:
      'Selected professional, team, and personal work, organized around the problem and my scope.',
    featuredLabel: 'SELECTED WORK',
    moreLabel: 'View more projects and contributions',
    privateLabel: 'Professional · details private',
    codeLabel: 'Code',
    demoLabel: 'Demo',
    codeAria: 'Source code for {title} (GitHub)',
    demoAria: 'View the demo of {title}',
    items: [
      {
        title: 'Live-Streaming Platform Feature Development (Professional)',
        category: 'PROFESSIONAL',
        year: '2026 — NOW',
        description:
          "Frontend development as a long-term intern at a startup's streaming service. Implemented the request menu — a revenue-driving payment feature — from DB schema to real-time UI, along with a My List feature and dark mode support. Gained production experience with real-time communication via Socket.IO / AWS AppSync and a team workflow built on Linear and GitHub PR reviews.",
        outcome: 'Shipped payment, real-time UI, and retention-oriented features',
        technologies: ['Next.js', 'TypeScript', 'Socket.IO', 'AWS AppSync', 'DynamoDB'],
        featured: true,
        private: true,
      },
      {
        title: 'konbini-navi',
        category: 'TEAM PROJECT',
        year: '2026',
        description:
          'A web app that tracks convenience store purchases and makes recommendations. Built with a team at Progate Hackathon 2026 and deployed to production on AWS (Tokyo region). Owned the project end to end, from planning through deployment and operations design.',
        outcome: 'Carried the project from planning to production on AWS',
        technologies: ['Next.js', 'TypeScript', 'AWS'],
        featured: true,
        githubUrl: 'https://github.com/TadokoroYuki/konbini-navi',
      },
      {
        title: 'Expectation Watcher',
        category: 'PERSONAL PROJECT',
        year: '2026',
        description:
          'A personal dashboard that collects payout pools and carryovers for publicly operated racing from official open data, and watches for conditions where the expected value turns positive. Implemented scrapers for multiple sources with different character encodings, an expected-value calculation engine, time-series snapshots in SQLite, and a test suite.',
        outcome: 'Built the full path from official data ingestion to tested EV alerts',
        technologies: ['Next.js', 'TypeScript', 'SQLite', 'Cheerio', 'Vitest'],
        featured: true,
      },
      {
        title: 'Race Quant Models',
        category: 'RESEARCH',
        year: '2026',
        description:
          'A collection of probabilistic models in Python that predict finishing-order probabilities for publicly operated racing. Implemented softmax regression, probability calibration via temperature scaling, and Sinkhorn normalization, evaluated with log loss, Brier score, and ECE — all the way through to expected-value backtesting against the odds.',
        outcome: 'Connected probability modeling, calibration, and EV backtesting',
        technologies: ['Python', 'Machine learning', 'Probabilistic modeling'],
      },
      {
        title: 'Open Source Contributions',
        category: 'OPEN SOURCE',
        year: '2026',
        description:
          'Authored a merged patch for the Obsidian Git plugin fixing binary file writes on mobile. Identified a bug in OSS I use daily and took it all the way from diagnosis to fix, tests, and pull request.',
        outcome: 'Patch accepted and merged into a public OSS project',
        technologies: ['TypeScript', 'Obsidian Plugin', 'Git'],
        githubUrl: 'https://github.com/Vinzent03/obsidian-git/pull/1090',
      },
      {
        title: 'Portfolio Website',
        category: 'THIS SITE',
        year: '2026',
        description:
          'This site. File-based routing with the App Router, responsive design, dark mode, accessibility (WCAG 2.1 compliance), and SEO optimization — built with a strong focus on performance and UX.',
        outcome: 'Continuously improving localization, accessibility, and performance',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        githubUrl: 'https://github.com/TadokoroYuki/portfolio',
      },
    ],
  },
  contact: {
    sign: {
      title: 'Contact',
      subtitle: 'れんらくさき · 連絡先',
    },
    eyebrow: 'NEXT STOP',
    headline: "If there's something we can build together, let's talk.",
    responseNote: 'Early-stage questions and informal conversations are welcome.',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/TadokoroYuki',
        label: '@TadokoroYuki',
      },
      {
        name: 'Email',
        url: 'mailto:tdkryk@icloud.com',
        label: 'tdkryk@icloud.com',
      },
    ],
    message: [
      'For frontend development, product improvement, or AI-assisted engineering workflows,',
      'reach out on GitHub or by email.',
    ],
  },
  footer: {
    endOfLine: '— End of the Line —',
    copyright: '© 2026 Yuki Tadokoro',
  },
  a11y: {
    skipLink: 'Skip to main content',
    scrollToTop: 'Back to top',
  },
};
