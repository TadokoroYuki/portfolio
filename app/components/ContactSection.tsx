import StationSign from './StationSign';
import { GitHubIcon, MailIcon } from './Icons';
import type { ContactDict } from '@/app/i18n/types';

/** Icons are kept out of the dictionary so it stays serializable. */
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
      <div className="mx-auto w-full max-w-4xl">
        {/* Last stop — no "next" arrow */}
        <StationSign
          code="YT-04"
          title={dict.sign.title}
          subtitle={dict.sign.subtitle}
          prev={{ href: '#projects', label: 'projects' }}
        />

        <div className="mt-16 text-center">
          <p className="leading-relaxed text-steel dark:text-steel-dark">
            {dict.message[0]}
            <br className="hidden sm:block" />
            {dict.message[1]}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            {dict.links.map((link) => {
              const isExternal = !link.url.startsWith('mailto:');
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 font-mono text-sm text-ink underline decoration-sobu decoration-2 underline-offset-4 transition-colors hover:decoration-4 dark:text-ink-dark"
                >
                  {contactIcons[link.name]}
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
