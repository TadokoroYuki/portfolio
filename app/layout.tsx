import type { ReactNode } from 'react';

/**
 * Root passthrough layout.
 *
 * The real <html> / <body> markup lives in app/[locale]/layout.tsx so that
 * the `lang` attribute can reflect the active locale. This layout only
 * exists because Next.js requires a root layout for the root page
 * (app/page.tsx), which immediately redirects to the default locale.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
