'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [imageError, setImageError] = useState(false);

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
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          {imageError ? (
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-xl">
              <span className="text-4xl sm:text-5xl font-bold text-white">
                YT
              </span>
            </div>
          ) : (
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-xl ring-4 ring-white dark:ring-gray-800">
              <Image
                src="/profile.jpg"
                alt="Yuki Tadokoro"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
                onError={() => setImageError(true)}
              />
            </div>
          )}
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          Yuki Tadokoro
        </h1>

        {/* Subtitle with Type Animation */}
        <div className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-light h-10">
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Next.js Engineer',
              2000,
              'Go Backend Developer',
              2000,
              'Web Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block"
          />
        </div>

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
          <a
            href="/resume.pdf"
            download
            className="w-full sm:w-auto px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            履歴書をダウンロード
          </a>
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
