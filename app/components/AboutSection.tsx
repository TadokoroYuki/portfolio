import StationSign from './StationSign';
import type { AboutDict } from '@/app/i18n/types';

interface AboutSectionProps {
  dict: AboutDict;
}

export default function AboutSection({ dict }: AboutSectionProps) {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <StationSign
          code="YT-01"
          title={dict.sign.title}
          subtitle={dict.sign.subtitle}
          prev={{ href: '#home', label: 'home' }}
          next={{ href: '#skills', label: 'skills' }}
        />

        {/* Introduction */}
        <div className="mt-16 space-y-6 leading-relaxed text-ink dark:text-ink-dark">
          {dict.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        {/* Timeline as a rail map: yellow line, each entry is a station */}
        <h3 className="mb-10 mt-20 border-b border-rail pb-2 text-xl font-bold text-ink dark:border-rail-dark dark:text-ink-dark">
          {dict.timelineHeading}
        </h3>
        <ol className="ml-2 space-y-12 border-l-4 border-sobu pl-8 sm:ml-4">
          {dict.timeline.map((item) => (
            <li key={`${item.year}-${item.title}`} className="relative">
              {/* Station marker on the line */}
              <span
                aria-hidden="true"
                className="absolute -left-[42px] top-1 h-4 w-4 rounded-full border-[3px] border-sobu bg-board dark:bg-board-dark"
              />
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-sm tabular-nums text-steel dark:text-steel-dark">
                  {item.year}
                </span>
                <span className="rounded border border-sobu px-2 py-0.5 font-mono text-xs text-ink dark:text-ink-dark">
                  {item.type === 'work' ? dict.badgeWork : dict.badgeEducation}
                </span>
              </div>
              <h4 className="mt-2 font-bold text-ink dark:text-ink-dark">{item.title}</h4>
              <p className="mt-1 leading-relaxed text-steel dark:text-steel-dark">
                {item.description}
              </p>
            </li>
          ))}
        </ol>

        {/* Interests */}
        <h3 className="mb-8 mt-20 border-b border-rail pb-2 text-xl font-bold text-ink dark:border-rail-dark dark:text-ink-dark">
          {dict.interestsHeading}
        </h3>
        <ul className="flex flex-wrap gap-3">
          {dict.interests.map((interest) => (
            <li
              key={interest}
              className="rounded border border-rail px-3 py-1 font-mono text-sm text-steel dark:border-rail-dark dark:text-steel-dark"
            >
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
