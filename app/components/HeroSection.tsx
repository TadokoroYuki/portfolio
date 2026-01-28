'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div
        className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Profile Image Placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-xl">
            <span className="text-4xl sm:text-5xl font-bold text-white">
              YT
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          Yuki Tadokoro
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-light">
          Full Stack Developer
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Next.js と Go を使った Web 開発に情熱を持っています。
          <br className="hidden sm:block" />
          モダンな技術で価値あるプロダクトを作ることを目指しています。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => {
              const element = document.getElementById('projects');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            プロジェクトを見る
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
          >
            お問い合わせ
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
