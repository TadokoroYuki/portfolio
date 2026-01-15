import type { Metadata } from "next";
import "./globals.css";
import SkipLink from "./components/SkipLink";

export const metadata: Metadata = {
  title: "Portfolio | Yuki Tadokoro",
  description: "Full Stack Developer specializing in Next.js and Go. Portfolio showcasing web development projects and skills.",
  keywords: ["portfolio", "web developer", "Next.js", "Go", "TypeScript", "full stack"],
  authors: [{ name: "Yuki Tadokoro" }],
  openGraph: {
    title: "Portfolio | Yuki Tadokoro",
    description: "Full Stack Developer specializing in Next.js and Go",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
