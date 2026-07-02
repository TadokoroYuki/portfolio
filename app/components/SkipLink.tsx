'use client';

interface SkipLinkProps {
  label: string;
}

export default function SkipLink({ label }: SkipLinkProps) {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-sobu focus:px-4 focus:py-2 focus:font-medium focus:text-ink focus:shadow-lg"
    >
      {label}
    </a>
  );
}
