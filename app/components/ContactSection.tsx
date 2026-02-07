'use client';

import { useMemo } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { contactLinks } from '@/app/data';

const getContainerVariants = (prefersReducedMotion: boolean | null): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.1,
    },
  },
});

const getItemVariants = (prefersReducedMotion: boolean | null): Variants => ({
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.5,
      ease: 'easeOut' as const,
    },
  },
});

export default function ContactSection() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = useMemo(
    () => getContainerVariants(prefersReducedMotion),
    [prefersReducedMotion]
  );

  const itemVariants = useMemo(() => getItemVariants(prefersReducedMotion), [prefersReducedMotion]);

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
              Contact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              お気軽にご連絡ください
            </p>
          </motion.div>

          {/* Contact Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {contactLinks.map((link) => {
              const isExternal = !link.url.startsWith('mailto:');
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="group bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                  variants={itemVariants}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="flex-shrink-0 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      whileHover={prefersReducedMotion ? {} : { rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      {link.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {link.name}
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {link.label}
                      </p>
                    </div>
                    <motion.div
                      className="flex-shrink-0"
                      animate={prefersReducedMotion ? {} : { x: [0, 4, 0] }}
                      transition={
                        prefersReducedMotion
                          ? {}
                          : {
                              duration: 1.5,
                              repeat: Infinity,
                              ease: 'easeInOut' as const,
                            }
                      }
                    >
                      <HiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </motion.div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Additional Message */}
          <motion.div className="mt-12 text-center" variants={itemVariants}>
            <p className="text-gray-600 dark:text-gray-400">
              プロジェクトのご相談やお仕事のご依頼など、
              <br className="hidden sm:block" />
              お気軽にお問い合わせください。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
