'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { heroData } from '@/app/data';
import ParticleBackground from './ParticleBackground';

const DownloadIcon = (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const ScrollIndicatorIcon = (
  <svg
    className="w-6 h-6 mx-auto text-gray-400"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
  </svg>
);

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Generate TypeAnimation sequence from heroData
  const typeSequence = heroData.titles.flatMap((title) => [title, 2000]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Particle Animation */}
        <ParticleBackground
          particleCount={40}
          connectionDistance={120}
          particleColor="rgba(59, 130, 246, 0.4)"
          lineColor="rgba(59, 130, 246, 0.1)"
        />
        {/* Primary gradient orb */}
        <div className="animate-float-gradient absolute -top-40 -right-40 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 dark:from-blue-600/20 dark:to-purple-700/20 blur-3xl" />
        {/* Secondary gradient orb */}
        <div className="animate-float-gradient-reverse absolute -bottom-40 -left-40 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-cyan-400/30 to-blue-500/30 dark:from-cyan-600/20 dark:to-blue-700/20 blur-3xl" />
        {/* Accent gradient orb */}
        <div className="animate-float-gradient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-600/10 dark:to-pink-600/10 blur-3xl" />
      </div>

      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div className="mb-8 flex justify-center" variants={itemVariants}>
          {imageError ? (
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-xl">
              <span className="text-4xl sm:text-5xl font-bold text-white">YT</span>
            </div>
          ) : (
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-xl ring-4 ring-white dark:ring-gray-800">
              <Image
                src={heroData.profileImage}
                alt={heroData.name}
                width={160}
                height={160}
                sizes="(max-width: 640px) 128px, 160px"
                className="w-full h-full object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlN2ViIi8+PC9zdmc+"
                onError={() => setImageError(true)}
              />
            </div>
          )}
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          {heroData.name}
        </motion.h1>

        {/* Subtitle with Type Animation */}
        <motion.div
          className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-light h-10"
          variants={itemVariants}
        >
          <TypeAnimation
            sequence={typeSequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {heroData.description[0]}
          <br className="hidden sm:block" />
          {heroData.description[1]}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => {
              const element = document.getElementById('projects');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          >
            プロジェクトを見る
          </motion.button>
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          >
            お問い合わせ
          </motion.button>
          <motion.a
            href="/resume.pdf"
            download
            className="w-full sm:w-auto px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors flex items-center justify-center gap-2"
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          >
            {DownloadIcon}
            履歴書をダウンロード
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-16"
          variants={itemVariants}
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
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
          {ScrollIndicatorIcon}
        </motion.div>
      </motion.div>
    </section>
  );
}
