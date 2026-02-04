import type { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      'モダンな技術スタックで構築したポートフォリオサイト。App Router によるファイルベースルーティング、レスポンシブデザイン、ダークモード対応、アクセシビリティ対応（WCAG 2.1 準拠）、SEO 最適化を実装。パフォーマンスと UX を重視した設計。',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/TadokoroYuki/portofolio',
  },
];
