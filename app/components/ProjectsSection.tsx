import StationSign from './StationSign';
import type { Project, ProjectsDict } from '@/app/i18n/types';

interface ProjectsSectionProps {
  dict: ProjectsDict;
}

interface ProjectCardProps {
  project: Project;
  dict: ProjectsDict;
  wide?: boolean;
}

function ProjectCard({ project, dict, wide = false }: ProjectCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-rail bg-board p-6 transition duration-300 hover:-translate-y-1 hover:border-sobu hover:shadow-[0_18px_50px_rgba(22,24,29,0.08)] dark:border-rail-dark dark:bg-board-dark dark:hover:border-sobu dark:hover:shadow-black/20 sm:p-8 ${
        wide ? 'lg:grid lg:grid-cols-[1fr_0.72fr] lg:gap-12' : ''
      }`}
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] font-medium tracking-[0.14em] text-steel dark:text-steel-dark">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <h3 className="mt-5 text-balance text-2xl font-bold tracking-[-0.025em] text-ink dark:text-ink-dark sm:text-3xl">
          {project.title}
        </h3>

        {project.private ? (
          <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-paper px-3 py-1 font-mono text-xs text-steel dark:bg-paper-dark dark:text-steel-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-sobu" aria-hidden="true" />
            {dict.privateLabel}
          </span>
        ) : null}

        <p className="mt-5 leading-relaxed text-steel dark:text-steel-dark">
          {project.description}
        </p>
      </div>

      <div
        className={
          wide
            ? 'mt-7 lg:mt-0 lg:border-l lg:border-rail lg:pl-10 dark:lg:border-rail-dark'
            : 'mt-auto pt-7'
        }
      >
        <div className="rounded-xl border-l-4 border-sobu bg-paper px-4 py-3 dark:bg-paper-dark">
          <p className="text-sm font-bold leading-relaxed text-ink dark:text-ink-dark">
            {project.outcome}
          </p>
        </div>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-rail px-2.5 py-1 font-mono text-[11px] text-steel dark:border-rail-dark dark:text-steel-dark"
            >
              {tech}
            </li>
          ))}
        </ul>

        {project.githubUrl || project.demoUrl ? (
          <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm font-medium">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.codeAria.replace('{title}', project.title)}
                className="text-link"
              >
                {dict.codeLabel} ↗
              </a>
            ) : null}
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.demoAria.replace('{title}', project.title)}
                className="text-link"
              >
                {dict.demoLabel} ↗
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function ProjectsSection({ dict }: ProjectsSectionProps) {
  const featured = dict.items.filter((project) => project.featured);
  const more = dict.items.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="border-b border-rail bg-board/35 px-4 py-24 dark:border-rail-dark dark:bg-board-dark/20 sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <StationSign
          code="YT-01"
          title={dict.sign.title}
          subtitle={dict.sign.subtitle}
          prev={{ href: '#home', label: 'home' }}
          next={{ href: '#about', label: 'about' }}
        />

        <div className="mt-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <p className="max-w-2xl text-lg leading-relaxed text-steel dark:text-steel-dark">
            {dict.intro}
          </p>
          <p className="shrink-0 font-mono text-xs font-medium tracking-[0.18em] text-steel dark:text-steel-dark">
            {dict.featuredLabel}
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {featured.map((project, index) => (
            <div key={project.title} className={index === 0 ? 'lg:col-span-2' : ''}>
              <ProjectCard project={project} dict={dict} wide={index === 0} />
            </div>
          ))}
        </div>

        {more.length > 0 ? (
          <details className="group/more mt-8 rounded-2xl border border-rail bg-paper/60 dark:border-rail-dark dark:bg-paper-dark/50">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-5 font-bold text-ink transition-colors hover:bg-board dark:text-ink-dark dark:hover:bg-board-dark sm:px-8">
              <span>{dict.moreLabel}</span>
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full border border-rail font-mono text-lg transition-transform group-open/more:rotate-45 dark:border-rail-dark"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <div className="grid gap-5 border-t border-rail p-5 dark:border-rail-dark md:grid-cols-2 lg:grid-cols-3 sm:p-8">
              {more.map((project) => (
                <ProjectCard key={project.title} project={project} dict={dict} />
              ))}
            </div>
          </details>
        ) : null}
      </div>
    </section>
  );
}
