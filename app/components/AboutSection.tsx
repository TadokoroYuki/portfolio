'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import TextHighlight from './TextHighlight';
import { timelineItems, interests } from '@/app/data';

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

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
                  こんにちは！ライブ配信プラットフォームの長期インターンで機能開発に携わる
                  <TextHighlight>フロントエンドエンジニア</TextHighlight>です。
                  「技術をユーザー価値に変換すること」を最も大切にしていて、
                  課題発見からリリース後の検証までを一気通貫で考えるプロダクト志向の開発が持ち味です。
                </p>
                <p>
                  <TextHighlight variant="background">フロントエンド</TextHighlight>では{' '}
                  <TextHighlight>Next.js</TextHighlight>、<TextHighlight>React</TextHighlight>、
                  <TextHighlight>TypeScript</TextHighlight>{' '}
                  を使った開発を実務で行っており、課金機能やリアルタイム通信（Socket.IO / AWS
                  AppSync）を含む機能を担当。アクセシビリティ（WCAG 2.1
                  準拠）やパフォーマンス最適化にも注力しています。
                  プログラミング教育サービスでの<TextHighlight>コードレビュー・メンタリング</TextHighlight>
                  経験もあります。
                </p>
                <p>
                  もう一つの武器は <TextHighlight>AI エージェントを活用した開発</TextHighlight>
                  です。Claude Code などの LLM
                  エージェントを日常的に使い倒し、実装・検証・自動化のサイクルを高速化しつつ、設計判断は自分で行うスタイルで開発しています。
                  ハッカソンでの受賞を目指した挑戦や <TextHighlight>OSS への貢献</TextHighlight>
                  にも継続的に取り組んでいます。
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
              {interests.map((interest, index) => (
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
