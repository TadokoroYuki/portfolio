import StationSign from './StationSign';
import type { SkillsDict } from '@/app/i18n/types';

interface SkillsSectionProps {
  dict: SkillsDict;
}

export default function SkillsSection({ dict }: SkillsSectionProps) {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <StationSign
          code="YT-02"
          title={dict.sign.title}
          subtitle={dict.sign.subtitle}
          prev={{ href: '#about', label: 'about' }}
          next={{ href: '#projects', label: 'projects' }}
        />

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
          {dict.categories.map((category) => (
            <div key={category.category}>
              <h3 className="border-b border-rail pb-2 font-bold text-ink dark:border-rail-dark dark:text-ink-dark">
                {category.category}
              </h3>
              <ul className="mt-4 space-y-1">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between gap-4 py-1.5">
                    <span className="text-ink dark:text-ink-dark">{skill.name}</span>
                    {skill.level ? (
                      <span className="shrink-0 rounded border border-rail px-2 py-0.5 font-mono text-xs text-steel dark:border-rail-dark dark:text-steel-dark">
                        {skill.level.toLowerCase()}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
