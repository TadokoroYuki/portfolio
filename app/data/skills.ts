import type { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Next.js', level: 'Advanced' },
      { name: 'React', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Intermediate' },
      { name: 'HTML/CSS', level: 'Advanced' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Go', level: 'Intermediate' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'REST API', level: 'Advanced' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Beginner' },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'GitHub', level: 'Advanced' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Vercel', level: 'Intermediate' },
      { name: 'VS Code', level: 'Advanced' },
    ],
  },
];
