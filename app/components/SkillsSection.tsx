import StationSign from './StationSign';
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

        <p className="mt-12 max-w-2xl text-lg leading-relaxed text-steel dark:text-steel-dark">
          {dict.intro}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {dict.categories.map((category, index) => (
            <article
              key={category.category}
              className="rounded-2xl border border-rail bg-board p-6 dark:border-rail-dark dark:bg-board-dark sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-ink dark:text-ink-dark">
                  {category.category}
                </h3>
                <span className="font-mono text-xs font-bold text-steel dark:text-steel-dark">
                  0{index + 1}
                </span>
              </div>
              <div className="mt-5 h-1 w-12 bg-sobu" aria-hidden="true" />

              <ul className="mt-5 divide-y divide-rail dark:divide-rail-dark">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between gap-4 py-3">
                    <span className="text-sm font-medium text-ink dark:text-ink-dark sm:text-base">
                      {skill.name}
                    </span>
                    {skill.level ? (
                      <span className="shrink-0 rounded-full bg-paper px-2.5 py-1 font-mono text-[10px] font-medium text-steel dark:bg-paper-dark dark:text-steel-dark">
                        {dict.levelLabels[skill.level]}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
