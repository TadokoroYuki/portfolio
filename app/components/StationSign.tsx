export interface SignNeighbor {
  href: string;
  label: string;
}

interface StationSignProps {
  title: string;
  subtitle: string;
  code?: string;
  prev?: SignNeighbor;
  next?: SignNeighbor;
  as?: 'h1' | 'h2';
  size?: 'hero' | 'section';
}

/**
 * A compact station-board heading. The yellow rail keeps the site's Sōbu-line
 * identity, while the smaller footprint leaves attention for the actual work.
 */
export default function StationSign({
  title,
  subtitle,
  code,
  prev,
  next,
  as: Heading = 'h2',
}: StationSignProps) {
  return (
    <header className="sign-reveal">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-start gap-4 sm:gap-5">
          {code ? (
            <span className="mt-1 shrink-0 rounded border-2 border-sobu px-2 py-1 font-mono text-xs font-bold tracking-widest text-ink dark:text-ink-dark">
              {code}
            </span>
          ) : null}
          <div>
            <Heading className="text-balance text-3xl font-bold tracking-[-0.035em] text-ink dark:text-ink-dark sm:text-5xl">
              {title}
            </Heading>
            <p className="mt-2 font-mono text-xs tracking-[0.18em] text-steel dark:text-steel-dark sm:text-sm">
              {subtitle}
            </p>
          </div>
        </div>

        {prev || next ? (
          <nav
            aria-label={`${subtitle} section navigation`}
            className="flex items-center gap-4 font-mono text-xs text-steel dark:text-steel-dark"
          >
            {prev ? (
              <a href={prev.href} className="section-nav-link">
                ← {prev.label}
              </a>
            ) : null}
            {next ? (
              <a href={next.href} className="section-nav-link">
                {next.label} →
              </a>
            ) : null}
          </nav>
        ) : null}
      </div>
      <div className="mt-6 flex items-center" aria-hidden="true">
        <span className="h-2 w-20 bg-sobu" />
        <span className="h-px flex-1 bg-rail dark:bg-rail-dark" />
      </div>
    </header>
  );
}
