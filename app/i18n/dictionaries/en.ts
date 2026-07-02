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
    logo: 'Portfolio',
    items: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
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
    name: 'Yuki Tadokoro',
    titles: [
      'Frontend Engineer',
      'Next.js / TypeScript Developer',
      'AI-Driven Developer',
      'Product-Minded Engineer',
    ],
    description: [
      'I build features for a live-streaming platform, working primarily with Next.js and TypeScript.',
      'I ship fast by leaning on AI agents, and I design products backwards from user value.',
    ],
    profileImageAlt: 'Portrait of Yuki Tadokoro',
    viewProjects: 'View Projects',
    contactMe: 'Get in Touch',
    downloadResume: 'Download Resume',
  },
  about: {
    heading: 'About Me',
    subheading: 'Who I am',
    introHeading: 'Introduction',
    paragraphs: [
      "Hi! I'm a frontend engineer working on feature development at a live-streaming platform as a long-term intern. What I value most is turning technology into user value — I take a product-minded approach that spans the entire cycle, from discovering problems to validating outcomes after release.",
      'On the frontend I work professionally with Next.js, React, and TypeScript, building features that include payment flows and real-time communication (Socket.IO / AWS AppSync). I also put strong emphasis on accessibility (WCAG 2.1 compliance) and performance optimization, and I have code review and mentoring experience at a programming education service.',
      'My other strength is AI-agent-driven development. I use LLM agents such as Claude Code every day to accelerate the implement–verify–automate cycle, while keeping design decisions firmly in my own hands. I also keep challenging myself at hackathons and contributing to open source.',
    ],
    timelineHeading: 'Experience',
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
    heading: 'Skills',
    subheading: 'Tech stack and hands-on experience',
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
    heading: 'Projects',
    subheading: 'Selected work and personal projects',
    codeLabel: 'Code',
    demoLabel: 'Demo',
    codeAria: 'Source code for {title} (GitHub)',
    demoAria: 'View the demo of {title}',
    items: [
      {
        title: 'Live-Streaming Platform Feature Development (Professional)',
        description:
          "Frontend development as a long-term intern at a startup's streaming service. Implemented the request menu — a revenue-driving payment feature — from DB schema to real-time UI, along with a My List feature and dark mode support. Gained production experience with real-time communication via Socket.IO / AWS AppSync and a team workflow built on Linear and GitHub PR reviews.",
        technologies: ['Next.js', 'TypeScript', 'Socket.IO', 'AWS AppSync', 'DynamoDB'],
      },
      {
        title: 'konbini-navi',
        description:
          'A web app that tracks convenience store purchases and makes recommendations. Built with a team at Progate Hackathon 2026 and deployed to production on AWS (Tokyo region). Owned the project end to end, from planning through deployment and operations design.',
        technologies: ['Next.js', 'TypeScript', 'AWS'],
      },
      {
        title: 'Expectation Watcher',
        description:
          'A personal dashboard that collects payout pools and carryovers for publicly operated racing from official open data, and watches for conditions where the expected value turns positive. Implemented scrapers for multiple sources with different character encodings, an expected-value calculation engine, time-series snapshots in SQLite, and a test suite.',
        technologies: ['Next.js', 'TypeScript', 'SQLite', 'Cheerio', 'Vitest'],
      },
      {
        title: 'Race Quant Models',
        description:
          'A collection of probabilistic models in Python that predict finishing-order probabilities for publicly operated racing. Implemented softmax regression, probability calibration via temperature scaling, and Sinkhorn normalization, evaluated with log loss, Brier score, and ECE — all the way through to expected-value backtesting against the odds.',
        technologies: ['Python', 'Machine learning', 'Probabilistic modeling'],
      },
      {
        title: 'Open Source Contributions',
        description:
          'Authored a merged patch for the Obsidian Git plugin (8k+ stars) fixing binary file writes on mobile. Identified a bug in OSS I use daily and took it all the way from diagnosis to fix, tests, and pull request.',
        technologies: ['TypeScript', 'Obsidian Plugin', 'Git'],
        githubUrl: 'https://github.com/Vinzent03/obsidian-git/pull/1090',
      },
      {
        title: 'Portfolio Website',
        description:
          'This site. File-based routing with the App Router, responsive design, dark mode, accessibility (WCAG 2.1 compliance), and SEO optimization — built with a strong focus on performance and UX.',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        githubUrl: 'https://github.com/TadokoroYuki/portofolio',
      },
    ],
  },
  contact: {
    heading: 'Contact',
    subheading: 'Feel free to reach out',
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
    message: ["Whether it's a project idea or a work inquiry,", "I'd love to hear from you."],
  },
  a11y: {
    skipLink: 'Skip to main content',
    scrollToTop: 'Back to top',
  },
};
