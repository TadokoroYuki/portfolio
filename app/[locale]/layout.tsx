import type { Metadata, Viewport } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import SkipLink from '@/app/components/SkipLink';
import Navigation from '@/app/components/Navigation';
import ScrollToTopButton from '@/app/components/ScrollToTopButton';
import ToastProvider from '@/app/components/ToastProvider';
import ThemeProvider from '@/app/components/ThemeProvider';
import ClientOnlyCustomCursor from '@/app/components/ClientOnlyCustomCursor';
import { getDictionary, isLocale, locales } from '@/app/i18n';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
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
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={notoSansJP.variable} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
          <SkipLink label={dict.a11y.skipLink} />
          <Navigation locale={locale} dict={dict.nav} />
          {children}
          <ScrollToTopButton label={dict.a11y.scrollToTop} />
          <ToastProvider />
          <ClientOnlyCustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
