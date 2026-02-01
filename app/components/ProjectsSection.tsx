'use client';

import { useInView } from '../hooks/useInView';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink, HiOutlinePhotograph } from 'react-icons/hi';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

export default function ProjectsSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const projects: Project[] = [
    {
      title: 'Portfolio Website',
      description:
        'モダンな技術スタックで構築したポートフォリオサイト。App Router によるファイルベースルーティング、レスポンシブデザイン、ダークモード対応、アクセシビリティ対応（WCAG 2.1 準拠）、SEO 最適化を実装。パフォーマンスと UX を重視した設計。',
      technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com/TadokoroYuki/portofolio',
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              これまで作成したプロジェクトや作品
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <HiOutlinePhotograph className="w-16 h-16 text-white opacity-50" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <HiOutlineExternalLink className="w-5 h-5" />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
