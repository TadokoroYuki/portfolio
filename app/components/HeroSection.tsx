import type { HeroDict } from '@/app/i18n/types';

interface HeroSectionProps {
  dict: HeroDict;
}

export default function HeroSection({ dict }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-rail px-4 pb-20 pt-28 dark:border-rail-dark sm:px-6 sm:pb-24 sm:pt-36 lg:px-8"
    >
      <div
        className="hero-grid pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-sobu/15 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-rail bg-board/80 px-3 py-1.5 font-mono text-xs font-medium tracking-[0.12em] text-steel backdrop-blur-sm dark:border-rail-dark dark:bg-board-dark/80 dark:text-steel-dark">
              <span className="h-2 w-2 rounded-full bg-sobu" aria-hidden="true" />
              {dict.eyebrow}
            </p>

            <h1 className="mt-8 text-balance text-5xl font-bold leading-[1.08] tracking-[-0.045em] text-ink dark:text-ink-dark sm:text-7xl lg:text-[5.25rem]">
              {dict.headline.map((line, index) => (
                <span key={line} className="block">
                  {index === dict.headline.length - 1 ? (
                    <span className="relative inline-block">
                      {line}
                      <span
                        className="absolute -bottom-1 left-0 -z-10 h-3 w-full bg-sobu/70 sm:h-4"
                        aria-hidden="true"
                      />
                    </span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p className="mt-7 font-mono text-sm font-medium tracking-wide text-ink dark:text-ink-dark">
              {dict.role}
            </p>

            <div className="mt-6 max-w-2xl space-y-2 text-base leading-relaxed text-steel dark:text-steel-dark sm:text-lg">
              {dict.description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="button-primary">
                {dict.primaryCta}
                <span aria-hidden="true">↓</span>
              </a>
              <a
                href="https://github.com/TadokoroYuki"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                {dict.secondaryCta}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="relative" aria-label={dict.routeLabel}>
            <div
              className="absolute -inset-3 translate-x-3 translate-y-3 rounded-2xl border border-sobu/40"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl border border-rail bg-board shadow-[0_24px_80px_rgba(22,24,29,0.1)] dark:border-rail-dark dark:bg-board-dark dark:shadow-black/20">
              <div className="flex items-center justify-between border-b border-rail px-5 py-4 dark:border-rail-dark sm:px-7">
                <span className="font-mono text-xs font-medium tracking-[0.18em] text-steel dark:text-steel-dark">
                  {dict.routeLabel}
                </span>
                <span className="rounded border-2 border-sobu px-2 py-1 font-mono text-xs font-bold tracking-widest text-ink dark:text-ink-dark">
                  YT-00
                </span>
              </div>

              <ol className="relative px-5 py-7 sm:px-7 sm:py-9">
                <span
                  className="absolute bottom-14 left-[2.15rem] top-14 w-1 bg-sobu sm:left-[2.65rem]"
                  aria-hidden="true"
                />
                {dict.routeSteps.map((step, index) => (
                  <li
                    key={step.code}
                    className={`relative grid grid-cols-[2.5rem_1fr] gap-4 ${
                      index > 0 ? 'mt-8' : ''
                    }`}
                  >
                    <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-4 border-board bg-sobu font-mono text-[11px] font-bold text-ink dark:border-board-dark">
                      {step.code}
                    </span>
                    <div className="pt-1">
                      <h2 className="font-bold text-ink dark:text-ink-dark">{step.title}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-steel dark:text-steel-dark">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="h-2 bg-sobu" aria-hidden="true" />
            </div>
          </aside>
        </div>

        <div className="mt-16 border-t border-rail pt-7 dark:border-rail-dark sm:mt-20">
          <p className="font-mono text-xs font-medium tracking-[0.16em] text-steel dark:text-steel-dark">
            {dict.proofLabel}
          </p>
          <dl className="mt-4 grid gap-px overflow-hidden rounded-xl border border-rail bg-rail dark:border-rail-dark dark:bg-rail-dark sm:grid-cols-3">
            {dict.proofs.map((proof) => (
              <div key={proof.label} className="bg-board px-5 py-5 dark:bg-board-dark sm:px-6">
                <dt className="font-mono text-sm font-bold text-ink dark:text-ink-dark">
                  {proof.value}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-steel dark:text-steel-dark">
                  {proof.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
