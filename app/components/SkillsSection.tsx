import StationSign from './StationSign';
import { apiDesignRoadmapUrl, apiDesignSkills, skillMapUpdatedOn } from '@/app/data/skill-map';
import type { SkillsDict } from '@/app/i18n/types';

interface SkillsSectionProps {
  dict: SkillsDict;
}

export default function SkillsSection({ dict }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="border-b border-rail bg-board/35 px-4 py-24 dark:border-rail-dark dark:bg-board-dark/20 sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <StationSign
          code="YT-03"
          title={dict.sign.title}
          subtitle={dict.sign.subtitle}
          prev={{ href: '#about', label: 'about' }}
          next={{ href: '#contact', label: 'contact' }}
        />

        <div className="mt-12 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium tracking-wider text-steel dark:text-steel-dark">
              {dict.updatedLabel}{' '}
              <time dateTime={skillMapUpdatedOn} className="font-bold tabular-nums">
                {skillMapUpdatedOn}
              </time>
            </p>
            <h3 className="mt-2 text-2xl font-bold text-ink dark:text-ink-dark sm:text-3xl">
              {dict.trackTitle}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-steel dark:text-steel-dark">
              {dict.intro}
            </p>
          </div>
          <a href={apiDesignRoadmapUrl} className="button-secondary">
            {dict.roadmapLabel} <span aria-hidden="true">↗</span>
          </a>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {apiDesignSkills.map((entry) => {
            const topic = dict.topics[entry.id];

            return (
              <li
                key={entry.id}
                className="flex flex-col items-start rounded-2xl border border-rail bg-board p-5 dark:border-rail-dark dark:bg-board-dark sm:p-6"
              >
                <span
                  className={
                    entry.status === 'publicWork'
                      ? 'rounded-full bg-sobu px-2.5 py-1 text-xs font-semibold text-[#16181D]'
                      : 'rounded-full border border-rail px-2.5 py-1 text-xs font-semibold text-steel dark:border-rail-dark dark:text-steel-dark'
                  }
                >
                  {dict.statusLabels[entry.status]}
                </span>
                <h4 className="mt-4 text-lg font-bold text-ink dark:text-ink-dark">
                  {topic.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-steel dark:text-steel-dark">
                  {topic.description}
                </p>
                {entry.status === 'publicWork' ? (
                  <a
                    href={entry.proof.href}
                    className="mt-4 flex min-h-11 flex-wrap items-center gap-2 rounded-md text-sm font-medium text-ink underline decoration-sobu decoration-2 underline-offset-4 dark:text-ink-dark"
                  >
                    {topic.proofLabel} <span aria-hidden="true">↗</span>
                    <time dateTime={entry.proof.mergedOn} className="font-mono text-xs">
                      {entry.proof.mergedOn}
                    </time>
                  </a>
                ) : null}
              </li>
            );
          })}
        </ul>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-steel dark:text-steel-dark">
          {dict.readingNote}
        </p>
      </div>
    </section>
  );
}
