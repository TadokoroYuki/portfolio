'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { useActiveSection } from '@/app/hooks/useActiveSection';
import type { Locale, NavDict } from '@/app/i18n/types';
import { locales } from '@/app/i18n/types';

const HamburgerIcon = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface NavigationProps {
  locale: Locale;
  dict: NavDict;
}

export default function Navigation({ locale, dict }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = dict.items;

  const sectionIds = useMemo(() => navItems.map((item) => item.id), [navItems]);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to hash position on initial load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  /** Build the same path under another locale (e.g. /ja → /en). */
  const localeHref = (target: Locale) => {
    const rest = pathname.replace(/^\/(ja|en)(?=\/|$)/, '');
    return `/${target}${rest}`;
  };

  const languageSwitcher = (
    <div
      className="flex items-center gap-1 font-mono text-sm"
      role="group"
      aria-label={dict.languageLabel}
    >
      {locales.map((target, index) => (
        <span key={target} className="flex items-center gap-1">
          {index > 0 && (
            <span className="text-rail dark:text-rail-dark" aria-hidden="true">
              /
            </span>
          )}
          <Link
            href={localeHref(target)}
            aria-current={target === locale ? 'true' : undefined}
            className={`rounded px-1 py-0.5 uppercase transition-colors ${
              target === locale
                ? 'font-bold text-ink dark:text-ink-dark'
                : 'text-steel hover:text-ink dark:text-steel-dark dark:hover:text-ink-dark'
            }`}
          >
            {target}
          </Link>
        </span>
      ))}
    </div>
  );

  return (
    <nav
      role="navigation"
      aria-label={dict.ariaLabel}
      className={`fixed left-0 right-0 top-0 z-50 pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] pt-[env(safe-area-inset-top)] transition-colors duration-300 ${
        isScrolled
          ? 'border-b border-rail bg-paper/95 backdrop-blur-sm dark:border-rail-dark dark:bg-paper-dark/95'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 font-mono text-lg font-bold text-ink transition-colors hover:text-steel dark:text-ink-dark dark:hover:text-steel-dark"
          >
            <span className="inline-block h-3 w-3 rounded-sm bg-sobu" aria-hidden="true" />
            {dict.logo}
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={
                  item.id === 'contact'
                    ? 'rounded-lg bg-sobu px-3 py-2 font-bold text-ink transition-transform hover:-translate-y-0.5'
                    : `border-b-2 pb-0.5 font-medium transition-colors ${
                        activeSection === item.id
                          ? 'border-sobu text-ink dark:text-ink-dark'
                          : 'border-transparent text-steel hover:text-ink dark:text-steel-dark dark:hover:text-ink-dark'
                      }`
                }
              >
                {item.label}
              </a>
            ))}
            {languageSwitcher}
            <ThemeToggle labels={dict.themeToggle} />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center gap-1 md:hidden">
            {languageSwitcher}
            <ThemeToggle labels={dict.themeToggle} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-md p-2 text-steel transition-colors hover:bg-rail/50 hover:text-ink dark:text-steel-dark dark:hover:bg-board-dark dark:hover:text-ink-dark"
              aria-label={dict.toggleMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? CloseIcon : HamburgerIcon}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (#136: overscroll-behavior contain) */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="overscroll-contain border-t border-rail bg-paper dark:border-rail-dark dark:bg-paper-dark md:hidden"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleMobileMenuClick}
                className={
                  item.id === 'contact'
                    ? 'mt-2 block w-full rounded-md bg-sobu px-3 py-3 text-left text-base font-bold text-ink'
                    : `block w-full rounded-md px-3 py-2 text-left text-base font-medium transition-colors ${
                        activeSection === item.id
                          ? 'bg-board text-ink dark:bg-board-dark dark:text-ink-dark'
                          : 'text-steel hover:bg-board hover:text-ink dark:text-steel-dark dark:hover:bg-board-dark dark:hover:text-ink-dark'
                      }`
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
