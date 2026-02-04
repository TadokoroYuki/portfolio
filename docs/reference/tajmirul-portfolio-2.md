# Tajmirul/portfolio-2.0

## 基本情報

| 項目 | 内容 |
|------|------|
| リポジトリ | [Tajmirul/portfolio-2.0](https://github.com/Tajmirul/portfolio-2.0) |
| デモサイト | https://tajmirul.site |
| スター数 | 159 |
| 最終更新 | 2026-02-02 |

## 技術スタック

| カテゴリ | 技術 |
|----------|------|
| フレームワーク | Next.js 15.2.8 (App Router) |
| 言語 | TypeScript |
| UIライブラリ | React 19.0.0-rc |
| アニメーション | GSAP + @gsap/react |
| スムーススクロール | Lenis |
| スタイリング | Tailwind CSS + tailwind-merge |
| バリアント | class-variance-authority (CVA) |
| アイコン | Lucide React |
| 分析 | Google Analytics (@next/third-parties) |

## 概要

GSAPによる高品質なアニメーションと`template.tsx`を活用したページ遷移が特徴の洗練されたポートフォリオ。159スターを獲得した人気リポジトリ。

## 詳細調査

### ディレクトリ構造

```
portfolio-2.0/
├── app/
│   ├── _components/        # ページ固有コンポーネント
│   │   ├── AboutMe.tsx
│   │   ├── Banner.tsx
│   │   ├── Experiences.tsx
│   │   ├── Project.tsx
│   │   ├── ProjectList.tsx
│   │   ├── Skills.tsx
│   │   └── StickyEmail.tsx
│   ├── projects/
│   │   └── [slug]/         # 動的ルート
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   └── template.tsx        # ページ遷移アニメーション
├── components/             # 共有コンポーネント
│   ├── ArrowAnimation.tsx
│   ├── Button.tsx
│   ├── CustomCursor.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── ParticleBackground.tsx
│   ├── Preloader.tsx
│   ├── ScrollProgressIndicator.tsx
│   ├── SectionTitle.tsx
│   ├── TransitionLink.tsx
│   └── icons/
├── lib/
│   ├── data.ts
│   ├── sleep.ts
│   └── utils.ts
└── types/
```

### GSAPアニメーションパターン

**@gsap/react の useGSAP フック:**

```typescript
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, useGSAP);

useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 80%',
            scrub: 0.5,
        },
    });
    tl.from('.slide-up', { opacity: 0, y: 40, stagger: 0.4 });
}, { scope: containerRef });
```

**主なアニメーションパターン:**

| パターン | 使用場所 | 説明 |
|----------|----------|------|
| ScrollTrigger + scrub | Banner, Skills | スクロール連動 |
| stagger | Preloader, Skills | 連続アニメーション |
| repeat: -1 | ParticleBackground | 無限ループ |
| contextSafe | TransitionLink | イベントハンドラ内GSAP |
| strokeDasharray/offset | ArrowAnimation | SVGパスアニメーション |

### ページ遷移アニメーション

**template.tsx:**

```typescript
export default function Template({ children }: { children: React.ReactNode }) {
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.to('.page-transition--inner', { yPercent: 0, duration: 0.2 })
          .to('.page-transition--inner', { yPercent: -100, duration: 0.2 })
          .to('.page-transition', { yPercent: -100 });
    });

    return (
        <div>
            <div className="page-transition ...">
                <div className="page-transition--inner translate-y-full"></div>
            </div>
            {children}
        </div>
    );
}
```

**TransitionLink コンポーネント:**

```typescript
const handleLinkClick = contextSafe(async (e: React.MouseEvent) => {
    e.preventDefault();

    gsap.set('.page-transition', { yPercent: 100 });
    gsap.set('.page-transition--inner', { yPercent: 100 });

    const tl = gsap.timeline();
    tl.to('.page-transition', { yPercent: 0, duration: 0.3 });

    tl.then(() => {
        if (back) router.back();
        else if (href) router.push(href.toString());
    });
});
```

### コンポーネント設計

| カテゴリ | コンポーネント | 説明 |
|----------|---------------|------|
| レイアウト | Navbar, Footer | 全ページ共通UI |
| 視覚効果 | CustomCursor, ParticleBackground, Preloader | 演出系 |
| 遷移 | TransitionLink, template.tsx | ページ遷移制御 |
| セクション | Banner, AboutMe, Skills, Experiences | ホームページ |
| ユーティリティ | Button, SectionTitle, ArrowAnimation | 再利用可能UI |

### パフォーマンス最適化

1. **Turbopack**: `next dev --turbopack`
2. **静的生成**: `generateStaticParams()` でプロジェクトページ事前生成
3. **フォント最適化**: `next/font/google` で Anton, Roboto Flex
4. **ISR**: Footer.tsx で `revalidate: 60 * 60`（1時間キャッシュ）
5. **Lenis スムーススクロール**: `lerp: 0.1, duration: 1.4`
6. **scope オプション**: useGSAP で要素スコープ限定
7. **モバイル最適化**: カスタムカーソルは768px以下で無効化

## 本プロジェクトへの示唆

### 採用すべきパターン
- **template.tsx + TransitionLink**: App Router でのページ遷移アニメーション
- **@gsap/react の useGSAP**: クリーンアップ付きGSAP統合
- **ScrollTrigger + scrub**: スクロール連動アニメーション
- **contextSafe**: イベントハンドラ内でのGSAP使用

### 参考になる実装
- Preloader のタイムライン制御（stagger, 相対タイミング）
- ParticleBackground の無限ループアニメーション
- SVGパスアニメーション（ArrowAnimation）

## 参考リンク

- [GitHub リポジトリ](https://github.com/Tajmirul/portfolio-2.0)
- [デモサイト](https://tajmirul.site)
