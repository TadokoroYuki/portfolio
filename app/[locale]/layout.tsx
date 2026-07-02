import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans_JP, IBM_Plex_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import SkipLink from '@/app/components/SkipLink';
import Navigation from '@/app/components/Navigation';
import ScrollToTopButton from '@/app/components/ScrollToTopButton';
import ThemeProvider from '@/app/components/ThemeProvider';
import { getDictionary, isLocale, locales } from '@/app/i18n';

// preload:false is essential for Japanese fonts: next/font cannot subset
// them, so preloading would fetch every unicode-range chunk (~2.7 MB)
// up front. Without preload the browser lazily loads only the chunks
// actually used on the page.
const plexSansJP = IBM_Plex_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: false,
  variable: '--font-plex-sans-jp',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-plex-mono',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-portfolio.vercel.app';

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: 'Yuki Tadokoro' }],
    creator: 'Yuki Tadokoro',
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ja: '/ja',
        en: '/en',
        'x-default': '/ja',
      },
    },
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      url: `${siteUrl}/${locale}`,
      siteName: 'Yuki Tadokoro Portfolio',
      locale: locale === 'ja' ? 'ja_JP' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F6F7F9' },
    { media: '(prefers-color-scheme: dark)', color: '#0F1319' },
  ],
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${plexSansJP.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider>
          <SkipLink label={dict.a11y.skipLink} />
          <Navigation locale={locale} dict={dict.nav} />

          {/* The "line": a thin Sōbu-yellow rail running down the left edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed bottom-0 left-4 top-0 hidden w-1 bg-sobu lg:left-6 lg:block"
          />

          {children}

          {/* End of the line */}
          <footer>
            <div className="h-2 bg-sobu" aria-hidden="true" />
            <div className="px-4 py-8 text-center font-mono text-xs text-steel dark:text-steel-dark">
              <p>{dict.footer.endOfLine}</p>
              <p className="mt-2">{dict.footer.copyright}</p>
            </div>
          </footer>

          <ScrollToTopButton label={dict.a11y.scrollToTop} />
        </ThemeProvider>
      </body>
    </html>
  );
}
