'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import type { NavDict } from '@/app/i18n/types';

interface ThemeToggleProps {
  labels: NavDict['themeToggle'];
}

const buttonClassName =
  'rounded-md p-2 text-steel transition-colors hover:bg-rail/50 hover:text-ink dark:text-steel-dark dark:hover:bg-board-dark dark:hover:text-ink-dark';

export default function ThemeToggle({ labels }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className={buttonClassName} aria-label={labels.label}>
        <div className="h-5 w-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={buttonClassName}
      aria-label={isDark ? labels.toLight : labels.toDark}
    >
      {isDark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
    </button>
  );
}
