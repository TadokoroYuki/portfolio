'use client';

import { useEffect, useState } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work';
}

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const timelineItems: TimelineItem[] = [
    {
      year: '2024 - Present',
      title: 'Full Stack Developer',
      description: 'Next.js と Go を使った Web 開発に従事',
      type: 'work',
    },
    {
      year: '2023',
      title: 'Web Development Journey',
      description: 'モダンな Web 技術の学習を開始',
      type: 'education',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              私について
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                自己紹介
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  こんにちは！私は Web
                  開発に情熱を持つフルスタックデベロッパーです。
                </p>
                <p>
                  Next.js や React
                  を使ったモダンなフロントエンド開発と、Go
                  を使ったバックエンド開発を得意としています。ユーザーにとって価値のあるプロダクトを作ることを大切にしています。
                </p>
                <p>
                  常に新しい技術を学び、より良いコードを書くことを心がけています。チーム開発や OSS
                  への貢献にも興味があります。
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              経歴
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden sm:block" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <div
                    key={index}
                    className={`relative pl-0 sm:pl-20 transition-all duration-500 ${
                      mounted
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-10'
                    }`}
                    style={{
                      transitionDelay: `${(index + 1) * 150}ms`,
                    }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-blue-600 border-4 border-gray-50 dark:border-gray-900 hidden sm:block" />

                    {/* Content Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
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
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              興味のある分野
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                '🚀 モダンな Web 開発',
                '⚡ パフォーマンス最適化',
                '🎨 UI/UX デザイン',
                '🔧 バックエンド開発',
                '📱 レスポンシブデザイン',
                '🌐 OSS 貢献',
              ].map((interest, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                    mounted
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                  }`}
                  style={{
                    transitionDelay: `${(index + 3) * 100}ms`,
                  }}
                >
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {interest}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
