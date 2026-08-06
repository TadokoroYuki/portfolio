import StationSign from './StationSign';
import { GitHubIcon, MailIcon } from './Icons';
import type { ContactDict } from '@/app/i18n/types';

const contactIcons: Record<string, React.ReactNode> = {
  GitHub: <GitHubIcon className="h-5 w-5" />,
  Email: <MailIcon className="h-5 w-5" />,
};

interface ContactSectionProps {
  dict: ContactDict;
}

export default function ContactSection({ dict }: ContactSectionProps) {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <StationSign
          code="YT-04"
          title={dict.sign.title}
          subtitle={dict.sign.subtitle}
          prev={{ href: '#skills', label: 'skills' }}
        />

        <div className="relative mt-14 overflow-hidden rounded-3xl bg-ink px-6 py-12 text-paper dark:bg-board-dark sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            className="hero-grid-dark pointer-events-none absolute inset-0 opacity-30"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-10 -top-20 h-72 w-72 rounded-full bg-sobu/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold tracking-[0.2em] text-sobu">
                {dict.eyebrow}
              </p>
              <h3 className="mt-6 max-w-3xl text-balance text-4xl font-bold leading-tight tracking-[-0.04em] text-paper sm:text-5xl lg:text-6xl">
                {dict.headline}
              </h3>
              <div className="mt-7 max-w-2xl text-base leading-relaxed text-steel-dark sm:text-lg">
                {dict.message.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                {dict.links.map((link) => {
                  const isExternal = !link.url.startsWith('mailto:');
                  const isEmail = link.url.startsWith('mailto:');
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className={`inline-flex min-w-60 items-center justify-center gap-3 rounded-xl px-5 py-3.5 font-mono text-sm font-bold transition duration-200 ${
                        isEmail
                          ? 'bg-sobu text-ink hover:-translate-y-0.5 hover:bg-[#ffd329]'
                          : 'border border-steel/60 text-paper hover:-translate-y-0.5 hover:border-sobu hover:text-sobu'
                      }`}
                    >
                      {contactIcons[link.name]}
                      {link.label}
                      <span aria-hidden="true">{isExternal ? '↗' : '→'}</span>
                    </a>
                  );
                })}
              </div>
              <p className="mt-4 text-center text-xs text-steel-dark lg:text-left">
                {dict.responseNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
