# adityadomle/My-Portfolio

## 基本情報

| 項目 | 内容 |
|------|------|
| リポジトリ | [adityadomle/My-Portfolio](https://github.com/adityadomle/My-Portfolio) |
| デモサイト | https://aadi.is-a.dev |
| スター数 | 0 |
| 最終更新 | 2026-02-03 |

## 技術スタック

| カテゴリ | 技術 |
|----------|------|
| フレームワーク | Next.js 15.5.9 |
| 言語 | TypeScript |
| UIライブラリ | React 19.1.1 |
| スタイリング | Tailwind CSS v4 |
| UIコンポーネント | shadcn/ui (Radix UI) |
| スムーススクロール | Lenis |
| カルーセル | Embla Carousel |
| テーマ | next-themes |
| 通知 | Sonner |
| DB | MongoDB (Mongoose) |
| メール | Nodemailer |
| 分析 | Vercel Analytics, Speed Insights |

## 概要

Next.js 15 + React 19 + Tailwind CSS v4 という最新スタックを使用した、shadcn/ui ベースのモダンなポートフォリオ。OKLCH カラースペースを使用した高度なカラーシステムが特徴。

## 詳細調査

### ディレクトリ構造

```
My-Portfolio/
├── app/                    # Next.js App Router
│   ├── about/             # About ページ
│   ├── actions/           # Server Actions
│   ├── api/               # API Routes
│   ├── contact/           # Contact ページ
│   ├── education/         # Education ページ
│   ├── experience/        # Experience ページ
│   ├── projects/          # Projects ページ
│   │   └── [id]/          # 動的ルート（個別プロジェクト）
│   ├── skills-tools/      # Skills & Tools ページ
│   ├── stats/             # Stats ページ
│   ├── testimonials/      # Testimonials ページ
│   ├── globals.css        # グローバルCSS
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # ホームページ
├── components/
│   ├── providers/         # Lenis Provider など
│   └── ui/                # shadcn/ui コンポーネント
├── config/                # 設定ファイル
├── constants/             # 定数・データ
├── hooks/                 # カスタムフック
├── lib/                   # ユーティリティ関数
├── model/                 # MongoDB モデル
└── types/                 # TypeScript型定義
```

### コンポーネント設計

**shadcn/ui ベースのコンポーネント:**
- Badge, Button, Card, Command, Dialog, Drawer
- Hover Card, Input, Label, Sonner, Tabs, Textarea

**カスタムコンポーネント:**
- PageHeader系: ページヘッダー、見出し、説明、アクションボタン
- SiteHeader: ナビゲーション、テーマ切り替え、音楽プレーヤー、ライブ時計
- SideNav: docsConfig連動のサイドバー
- MobileNav: Drawer ベースのモバイルナビゲーション
- CommandMenu: Cmd+K コマンドパレット
- Pager: 前後ページナビゲーション

### スタイリングパターン

**Tailwind CSS v4 + OKLCH カラー:**

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-secondary: var(--secondary);
}
```

**カスタムユーティリティ:**

```css
.border-grid {
  @apply border-dashed border-border/50 dark:border-border;
}

.container-wrapper {
  @apply max-w-[1600px] min-[1800px]:max-w-screen-2xl
         min-[1400px]:border-x border-border/70
         dark:border-border mx-auto w-full border-dashed;
}
```

### レスポンシブ対応

**フォントサイズの段階的調整:**

```css
html { font-size: 100%; }           /* モバイル */
@media (min-width: 768px)  { html { font-size: 105%; } }  /* タブレット */
@media (min-width: 1280px) { html { font-size: 110%; } }  /* ラップトップ */
@media (min-width: 1920px) { html { font-size: 115%; } }  /* 大画面 */
```

**グリッドレイアウト:**

```tsx
<div className="container flex-1 items-start
  md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6
  lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
```

### パフォーマンス最適化

1. **Turbopack**: `next dev --turbopack` で高速ビルド
2. **Lenis スムーススクロール**: `autoRaf: true` で最適化
3. **Vercel Analytics / Speed Insights**: パフォーマンス監視
4. **Server Actions**: サーバーサイドでデータプリフェッチ
5. **テーマカラー事前設定**: Flash of Wrong Theme 防止
6. **backdrop-blur 条件適用**: `supports-[backdrop-filter]`

## 本プロジェクトへの示唆

### 採用すべきパターン
- **Tailwind CSS v4 + OKLCH**: モダンなカラーシステム
- **shadcn/ui**: 一貫性のある再利用可能なコンポーネント
- **Lenis**: スムーススクロール
- **CommandMenu**: 開発者向けUX向上

### 参考になる実装
- フォントサイズの段階的レスポンシブ調整
- docsConfig による動的ナビゲーション生成
- Server Actions によるデータフェッチ

## 参考リンク

- [GitHub リポジトリ](https://github.com/adityadomle/My-Portfolio)
- [デモサイト](https://aadi.is-a.dev)
