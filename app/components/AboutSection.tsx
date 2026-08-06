import StationSign from './StationSign';
import type { AboutDict, TimelineItem } from '@/app/i18n/types';

interface AboutSectionProps {
  dict: AboutDict;
}

function TimelineEntry({ item, dict }: { item: TimelineItem; dict: AboutDict }) {
  return (
    <li className="relative pl-9 sm:pl-11">
      <span
        aria-hidden="true"
        className="absolute left-[-7px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-sobu bg-paper dark:bg-paper-dark"
      />
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs font-bold tabular-nums tracking-wide text-ink dark:text-ink-dark">
          {item.year}
        </span>
        <span className="rounded-full border border-rail px-2.5 py-0.5 font-mono text-[10px] text-steel dark:border-rail-dark dark:text-steel-dark">
          {item.type === 'work' ? dict.badgeWork : dict.badgeEducation}
        </span>
      </div>
      <h4 className="mt-3 text-lg font-bold text-ink dark:text-ink-dark">{item.title}</h4>
      <p className="mt-2 leading-relaxed text-steel dark:text-steel-dark">{item.description}</p>
    </li>
  );
}

export default function AboutSection({ dict }: AboutSectionProps) {
  const recentTimeline = dict.timeline.slice(0, 3);
  const earlierTimeline = dict.timeline.slice(3);

  return (
    <section
      id="about"
      className="border-b border-rail px-4 py-24 dark:border-rail-dark sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <StationSign
          code="YT-02"
          title={dict.sign.title}
          subtitle={dict.sign.subtitle}
          prev={{ href: '#projects', label: 'work' }}
          next={{ href: '#skills', label: 'skills' }}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <h3 className="text-balance text-3xl font-bold leading-tight tracking-[-0.035em] text-ink dark:text-ink-dark sm:text-4xl">
              {dict.lead}
            </h3>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-steel dark:text-steel-dark">
            {dict.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="font-mono text-xs font-bold tracking-[0.18em] text-steel dark:text-steel-dark">
            {dict.principlesHeading}
          </h3>
          <ol className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-rail bg-rail dark:border-rail-dark dark:bg-rail-dark md:grid-cols-3">
            {dict.principles.map((principle, index) => (
              <li key={principle.title} className="bg-board p-6 dark:bg-board-dark sm:p-8">
                <span className="font-mono text-xs font-bold text-steel dark:text-steel-dark">
                  0{index + 1}
                </span>
                <h4 className="mt-5 text-xl font-bold text-ink dark:text-ink-dark">
                  {principle.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-steel dark:text-steel-dark">
                  {principle.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <h3 className="text-2xl font-bold text-ink dark:text-ink-dark">
              {dict.timelineHeading}
            </h3>
            <div className="mt-8 rounded-2xl border border-rail bg-board p-6 dark:border-rail-dark dark:bg-board-dark">
              <h4 className="font-mono text-xs font-bold tracking-[0.16em] text-steel dark:text-steel-dark">
                {dict.interestsHeading}
              </h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {dict.interests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full bg-paper px-3 py-1.5 text-sm text-ink dark:bg-paper-dark dark:text-ink-dark"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <ol className="space-y-10 border-l-2 border-sobu">
              {recentTimeline.map((item) => (
                <TimelineEntry key={`${item.year}-${item.title}`} item={item} dict={dict} />
              ))}
            </ol>

            {earlierTimeline.length > 0 ? (
              <details className="group/timeline mt-8 border-l-2 border-sobu pl-9 sm:pl-11">
                <summary className="inline-flex cursor-pointer list-none items-center gap-3 font-mono text-sm font-medium text-ink dark:text-ink-dark">
                  <span
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-rail transition-transform group-open/timeline:rotate-45 dark:border-rail-dark"
                    aria-hidden="true"
                  >
                    +
                  </span>
                  {dict.timelineMoreLabel}
                </summary>
                <ol className="mt-10 space-y-10">
                  {earlierTimeline.map((item) => (
                    <TimelineEntry key={`${item.year}-${item.title}`} item={item} dict={dict} />
                  ))}
                </ol>
              </details>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
