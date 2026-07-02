'use client';

import { useEffect, useState, useMemo } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('');

  // Memoize sectionIds to prevent unnecessary effect re-runs
  const memoizedIds = useMemo(() => sectionIds, [sectionIds.join(',')]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    memoizedIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
            // Update URL hash without adding to history
            window.history.replaceState(null, '', `#${id}`);
          }
        },
        { rootMargin: '-50% 0px -50% 0px' }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [memoizedIds]);

  return activeSection;
}
