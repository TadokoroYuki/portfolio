import StationSign from './StationSign';
import type { ProjectsDict } from '@/app/i18n/types';

interface ProjectsSectionProps {
  dict: ProjectsDict;
}

export default function ProjectsSection({ dict }: ProjectsSectionProps) {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <StationSign
          code="YT-03"
          title={dict.sign.title}
          subtitle={dict.sign.subtitle}
          prev={{ href: '#skills', label: 'skills' }}
          next={{ href: '#contact', label: 'contact' }}
        />

        {/* Ruled list instead of cards */}
        <ul className="mt-16 border-t border-rail dark:border-rail-dark">
          {dict.items.map((project) => (
            <li
              key={project.title}
              className="-mx-3 border-b border-rail px-3 py-8 transition-colors hover:bg-board dark:border-rail-dark dark:hover:bg-board-dark"
            >
              <h3 className="text-lg font-bold text-ink dark:text-ink-dark">{project.title}</h3>
              <p className="mt-2 leading-relaxed text-steel dark:text-steel-dark">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-rail px-2 py-0.5 font-mono text-xs text-steel dark:border-rail-dark dark:text-steel-dark"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.githubUrl || project.demoUrl ? (
                <div className="mt-4 flex gap-6 font-mono text-sm">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={dict.codeAria.replace('{title}', project.title)}
                      className="text-ink underline decoration-sobu decoration-2 underline-offset-4 transition-colors hover:decoration-4 dark:text-ink-dark"
                    >
                      {dict.codeLabel} →
                    </a>
                  ) : null}
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={dict.demoAria.replace('{title}', project.title)}
                      className="text-ink underline decoration-sobu decoration-2 underline-offset-4 transition-colors hover:decoration-4 dark:text-ink-dark"
                    >
                      {dict.demoLabel} →
                    </a>
                  ) : null}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
