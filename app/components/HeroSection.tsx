import StationSign from './StationSign';
import type { HeroDict } from '@/app/i18n/types';

interface HeroSectionProps {
  dict: HeroDict;
}

export default function HeroSection({ dict }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-4 pb-24 pt-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-10">
        {/* The station sign is the hero */}
        <StationSign
          as="h1"
          size="hero"
          title={dict.sign.title}
          subtitle={dict.sign.subtitle}
          prev={{ href: '#about', label: 'about' }}
          next={{ href: '#projects', label: 'projects' }}
        />

        {/* Monogram mark — swap for next/image + /profile.jpg when a real
            photo is added to public/ */}
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full bg-sobu"
          role="img"
          aria-label={dict.profileImageAlt}
        >
          <span className="font-mono text-xl font-bold text-ink">YT</span>
        </div>

        {/* Introduction */}
        <p className="max-w-2xl text-center leading-relaxed text-steel dark:text-steel-dark">
          {dict.description[0]}
          <br className="hidden sm:block" />
          {dict.description[1]}
        </p>

        <a
          href="https://github.com/TadokoroYuki"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-ink underline decoration-sobu decoration-2 underline-offset-4 transition-colors hover:decoration-4 dark:text-ink-dark"
        >
          {dict.githubCta} →
        </a>
      </div>
    </section>
  );
}
