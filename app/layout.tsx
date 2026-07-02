import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import SkipLink from './components/SkipLink';
import Navigation from './components/Navigation';
import ScrollToTopButton from './components/ScrollToTopButton';
import ToastProvider from './components/ToastProvider';
import ThemeProvider from './components/ThemeProvider';
import ClientOnlyCustomCursor from './components/ClientOnlyCustomCursor';

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
    'Next.js / TypeScript を軸にライブ配信プラットフォームの機能開発に携わるフロントエンドエンジニア。AI エージェントを活用した高速な開発とプロダクト志向が持ち味です。',
  keywords: [
    'portfolio',
    'frontend engineer',
    'Next.js',
    'React',
    'TypeScript',
    'AI-driven development',
    'フロントエンド',
    'エンジニア',
  ],
  authors: [{ name: 'Yuki Tadokoro' }],
  creator: 'Yuki Tadokoro',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Portfolio | Yuki Tadokoro',
    description:
      'Next.js / TypeScript を軸に開発するフロントエンドエンジニア。AI エージェント活用とプロダクト志向が持ち味。',
    url: siteUrl,
    siteName: 'Yuki Tadokoro Portfolio',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Yuki Tadokoro',
    description:
      'Next.js / TypeScript を軸に開発するフロントエンドエンジニア。AI エージェント活用とプロダクト志向が持ち味。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
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
          <ClientOnlyCustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
