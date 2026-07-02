'use client';

import { useState, useEffect } from 'react';

const ArrowUpIcon = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 10l7-7m0 0l7 7m-7-7v18"
    />
  </svg>
);

interface ScrollToTopButtonProps {
  label: string;
}

export default function ScrollToTopButton({ label }: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label={label}
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`fixed bottom-8 right-8 z-50 rounded-md border border-rail bg-board p-3
                 text-ink shadow-sm transition-opacity duration-200 hover:border-sobu
                 dark:border-rail-dark dark:bg-board-dark dark:text-ink-dark dark:hover:border-sobu
                 ${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      {ArrowUpIcon}
    </button>
  );
}
