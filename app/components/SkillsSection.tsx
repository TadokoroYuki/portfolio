'use client';

import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level?: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

export default function SkillsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      category: 'Frontend',
      skills: [
        { name: 'Next.js', level: 'Advanced' },
        { name: 'React', level: 'Advanced' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Intermediate' },
        { name: 'HTML/CSS', level: 'Advanced' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Go', level: 'Intermediate' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'REST API', level: 'Advanced' },
      ],
    },
    {
      category: 'Database',
      skills: [
        { name: 'PostgreSQL', level: 'Intermediate' },
        { name: 'MySQL', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Beginner' },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 'Advanced' },
        { name: 'GitHub', level: 'Advanced' },
        { name: 'Docker', level: 'Intermediate' },
        { name: 'Vercel', level: 'Intermediate' },
        { name: 'VS Code', level: 'Advanced' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              技術スタックと開発経験
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.category}
                className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  mounted
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${categoryIndex * 100}ms`,
                }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-3 rounded-md bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-sm px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
