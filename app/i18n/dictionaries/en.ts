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
      { id: 'skills', label: 'Skill Map' },
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
    skillMapCta: 'View Skill Map',
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
      'I’m a freelance web engineer building a live-streaming product with Next.js and TypeScript. I work across the UI and API, and take part in QA and code review.',
      'I do not leave unknowns unresolved. I inspect the actual code and data, then turn what I learn into a working change. AI agents are part of my daily workflow, while product and engineering decisions remain my responsibility.',
    ],
    focus: {
      updatedOn: '2026-11-25',
      heading: 'What I’m working on now',
      items: [
        {
          title: 'Making API design knowledge visible',
          description:
            'I’m mapping what I can explain and connecting it to code and tests I can share.',
        },
        {
          title: 'Reading the open source I use',
          description: 'I read how familiar tools work and explore small changes where I can help.',
        },
      ],
      skillMapLink: 'See the Skill Map',
    },
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
        title: 'Web Engineer, Live-Streaming Platform',
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
          'Studied information systems, including software engineering, networks, and data engineering.',
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
      title: 'Skill Map',
      subtitle: 'すきる · スキルマップ',
    },
    updatedLabel: 'Updated',
    trackTitle: 'API Design',
    intro:
      'I use the roadmap.sh API Design track to choose what to study, then record what I can explain or show in public work. This is a starting set of four topics.',
    roadmapLabel: 'API Design roadmap',
    statusLabels: {
      publicWork: 'Public work available',
      nextCheck: 'Next check',
      notAssessed: 'Not assessed',
    },
    topics: {
      documentingApis: {
        title: 'API and architecture documentation',
        description:
          'I updated the konbini-navi architecture and setup guides to match the code, including Swagger UI and curl verification steps.',
        proofLabel: 'Merged PR #135',
      },
      requestValidation: {
        title: 'Request validation and boundaries',
        description:
          'Next I want to show, with a public example and tests, how validation at the HTTP boundary keeps invalid path or query input out of the use case.',
      },
      httpContracts: {
        title: 'HTTP status codes and errors',
        description:
          'Check whether I can explain an API contract that distinguishes invalid input from a resource that does not exist.',
      },
      pagination: {
        title: 'Pagination',
        description:
          'Check whether I can explain offset and cursor pagination using an example with a changing, ordered list.',
      },
    },
    readingNote:
      '“Public work available” links to evidence for the topic. This is not roadmap.sh completion or third-party certification; “not assessed” does not mean “no knowledge.”',
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
          'Feature development for a live-streaming service, including payments, real-time interfaces, and features for returning users. I work across UI and API changes and take part in QA and code review.',
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
          'A team-built app for tracking convenience-store purchases and making recommendations. The user-facing app uses Expo, the admin app uses Next.js, and the backend uses Go and PostgreSQL. I documented the architecture and fixed the Expo Web build for AWS Amplify.',
        outcome: 'Documented the architecture and fixed the Expo Web build',
        technologies: ['Expo', 'Next.js (admin)', 'Go', 'PostgreSQL', 'AWS'],
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
          'This site. File-based routing with the App Router, responsive design, dark mode, keyboard-friendly accessibility, and SEO optimization — built with a strong focus on performance and UX.',
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
