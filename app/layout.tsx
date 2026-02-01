import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import SkipLink from './components/SkipLink';
import Navigation from './components/Navigation';
import ScrollToTopButton from './components/ScrollToTopButton';
import ToastProvider from './components/ToastProvider';
import ThemeProvider from './components/ThemeProvider';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-portfolio.vercel.app';

export const metadata: Metadata = {
  title: 'Portfolio | Yuki Tadokoro',
  description:
    'Next.js と Go を使った Web 開発に情熱を持つフルスタックデベロッパー。モダンな技術で価値あるプロダクトを作ることを目指しています。',
  keywords: [
    'portfolio',
    'web developer',
    'Next.js',
    'Go',
    'TypeScript',
    'full stack',
    'フロントエンド',
    'バックエンド',
  ],
  authors: [{ name: 'Yuki Tadokoro' }],
  creator: 'Yuki Tadokoro',
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Portfolio | Yuki Tadokoro',
    description: 'Next.js と Go を使った Web 開発に情熱を持つフルスタックデベロッパー',
    url: siteUrl,
    siteName: 'Yuki Tadokoro Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yuki Tadokoro - Full Stack Developer',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Yuki Tadokoro',
    description: 'Next.js と Go を使った Web 開発に情熱を持つフルスタックデベロッパー',
    images: ['/og-image.png'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
          <SkipLink />
          <Navigation />
          {children}
          <ScrollToTopButton />
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
