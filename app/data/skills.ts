import type { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Next.js', level: 'Advanced' },
      { name: 'React', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Intermediate' },
      { name: 'アクセシビリティ (WCAG)', level: 'Intermediate' },
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
      { name: 'コードレビュー', level: 'Advanced' },
    ],
  },
  {
    category: 'AI-Driven Development',
    skills: [
      { name: 'Claude Code / LLM エージェント', level: 'Advanced' },
      { name: 'ブラウザ自動化 (Playwright CLI)', level: 'Advanced' },
      { name: 'Python (データ分析・確率モデル)', level: 'Intermediate' },
    ],
  },
];
