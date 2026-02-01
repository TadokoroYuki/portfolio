'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work';
}

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  const timelineItems: TimelineItem[] = [
    {
      year: '2024 - Present',
      title: 'Full Stack Developer',
      description:
        'Next.js と Go を使った Web アプリケーション開発。フロントエンドからバックエンド、インフラまで幅広く担当。',
      type: 'work',
    },
    {
      year: '2024',
      title: 'ポートフォリオサイト構築',
      description:
        'Next.js 15、TypeScript、Tailwind CSS を使用。アクセシビリティと SEO を重視した設計を実践。',
      type: 'work',
    },
    {
      year: '2023',
      title: 'Web 開発の学習開始',
      description:
        'React、Next.js、TypeScript などモダンなフロントエンド技術の習得。Go によるバックエンド開発も並行して学習。',
      type: 'education',
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

  const slideInVariants: Variants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">私について</p>
          </motion.div>

          {/* Introduction */}
          <motion.div className="mb-16" variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">自己紹介</h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  こんにちは！私は Web 開発に情熱を持つフルスタックデベロッパーです。
                  ユーザーにとって価値のあるプロダクトを作ることを最も大切にしています。
                </p>
                <p>
                  <strong>フロントエンド</strong>では Next.js、React、TypeScript
                  を使ったモダンな開発を得意としています。 アクセシビリティ（WCAG 2.1
                  準拠）やパフォーマンス最適化にも注力しています。
                  <strong>バックエンド</strong>では Go を使った API 開発の経験があります。
                </p>
                <p>
                  常に新しい技術をキャッチアップし、ベストプラクティスに沿ったコードを書くことを心がけています。
                  チーム開発や OSS への貢献にも積極的に取り組んでいきたいと考えています。
                </p>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              経歴
            </motion.h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden sm:block" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-0 sm:pl-20"
                    variants={slideInVariants}
                    custom={index}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-blue-600 border-4 border-gray-50 dark:border-gray-900 hidden sm:block" />

                    {/* Content Card */}
                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
                      whileHover={prefersReducedMotion ? {} : { scale: 1.01, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {item.year}
                        </span>
                        <span
                          className={`text-xs px-3 py-1 rounded-full ${
                            item.type === 'work'
                              ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                              : 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                          }`}
                        >
                          {item.type === 'work' ? '職歴' : '学習'}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Interests */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              興味のある分野
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              variants={containerVariants}
            >
              {[
                'モダンな Web 開発',
                'パフォーマンス最適化',
                'UI/UX デザイン',
                'バックエンド開発',
                'レスポンシブデザイン',
                'OSS 貢献',
              ].map((interest, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md"
                  variants={itemVariants}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{interest}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
