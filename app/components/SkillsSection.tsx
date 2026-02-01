'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';

interface Skill {
  name: string;
  level?: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

export default function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Skills</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              技術スタックと開発経験
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.category}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                variants={itemVariants}
                whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center justify-between p-3 rounded-md bg-gray-50 dark:bg-gray-700"
                      whileHover={
                        prefersReducedMotion
                          ? {}
                          : { backgroundColor: 'rgba(59, 130, 246, 0.1)', x: 4 }
                      }
                      transition={{ duration: 0.15 }}
                    >
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-sm px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                          {skill.level}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
