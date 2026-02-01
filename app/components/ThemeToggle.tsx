'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
        aria-label="テーマ切替"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={isDark ? 'ライトモードに切替' : 'ダークモードに切替'}
    >
      {isDark ? (
        <HiSun className="w-5 h-5 text-yellow-500" />
      ) : (
        <HiMoon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
}
