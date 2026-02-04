# コンポーネント API リファレンス

このドキュメントは、ポートフォリオサイトの全コンポーネントの API 仕様、使用方法、実装詳細を記載します。

## 関連ドキュメント
- [ARCHITECTURE.md](./ARCHITECTURE.md) - アーキテクチャ全体像
- [DESIGN_SPEC.md](./DESIGN_SPEC.md) - デザイン仕様
- [TECH_STACK.md](./TECH_STACK.md) - 技術選定詳細

---

## 目次
1. [データレイヤー](#データレイヤー)
2. [レイアウトコンポーネント](#レイアウトコンポーネント)
3. [セクションコンポーネント](#セクションコンポーネント)
4. [ユーティリティコンポーネント](#ユーティリティコンポーネント)
5. [カスタムフック](#カスタムフック)

---

## データレイヤー

### 概要
すべてのデータは `app/data/` ディレクトリに集約されており、コンポーネントとデータの分離を実現しています。

### ディレクトリ構造

```
app/data/
├── index.ts         # 統合エクスポート
├── types.ts         # 型定義
├── hero.ts          # Heroセクションデータ
├── skills.ts        # スキルデータ
├── projects.ts      # プロジェクトデータ
├── timeline.ts      # タイムラインデータ
├── interests.ts     # 興味分野データ
└── contact.tsx      # コンタクト情報（JSXアイコン含む）
```

### エクスポートされる型

```typescript
// app/data/types.ts
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Skill {
  name: string;
  level?: SkillLevel;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work';
}

export interface ContactLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  label: string;
}

export interface HeroData {
  name: string;
  titles: string[];
  description: string[];
  profileImage: string;
}
```

### エクスポートされるデータ

```typescript
// app/data/index.ts
import {
  skillCategories,
  projects,
  timelineItems,
  interests,
  contactLinks,
  heroData,
} from '@/app/data';
```

### 使用例

```tsx
import { skillCategories, type SkillCategory } from '@/app/data';

export default function SkillsSection() {
  return (
    <section>
      {skillCategories.map((category: SkillCategory) => (
        <div key={category.category}>
          <h3>{category.category}</h3>
          {category.skills.map((skill) => (
            <span key={skill.name}>
              {skill.name} - {skill.level}
            </span>
          ))}
        </div>
      ))}
    </section>
  );
}
```

---

## レイアウトコンポーネント

ページ全体の構造を定義するコンポーネント。

### ThemeProvider

**ファイル**: `app/components/ThemeProvider.tsx`

**用途**: アプリケーション全体のテーマ管理（ダークモード対応）

**特徴**:
- `next-themes` ライブラリを使用
- システム設定の自動検出
- LocalStorage への永続化
- ハイドレーションミスマッチ対策

**Props**: なし（children のみ）

**使用例**:
```tsx
// app/layout.tsx
import { ThemeProvider } from '@/app/components/ThemeProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

**実装詳細**:
- `attribute="class"`: ダークモード時に `dark` クラスを追加
- `defaultTheme="system"`: システム設定をデフォルトで使用
- `enableSystem`: システム設定の検出を有効化
- `disableTransitionOnChange`: テーマ切り替え時のトランジション無効化（ちらつき防止）

---

### Navigation

**ファイル**: `app/components/Navigation.tsx`

**用途**: グローバルナビゲーション（スティッキーヘッダー + モバイルメニュー）

**特徴**:
- スクロール時の背景色変化
- モバイルメニュー対応
- スムーズスクロール
- アクティブセクションの検出

**Props**: なし

**状態管理**:
```typescript
const [isScrolled, setIsScrolled] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

**ナビゲーションアイテム**:
```typescript
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];
```

**アクセシビリティ**:
- `<nav role="navigation">`
- `aria-label` によるスクリーンリーダー対応
- キーボード操作対応

---

## セクションコンポーネント

ページの各セクションを構成するコンポーネント。

### HeroSection

**ファイル**: `app/components/HeroSection.tsx`

**用途**: ファーストビューのヒーローセクション

**データソース**: `@/app/data` (heroData)

**依存関係**:
- `next/image`: プロフィール画像の最適化
- `framer-motion`: アニメーション
- `react-type-animation`: タイプライター効果

**特徴**:
- プロフィール画像の表示（フォールバック対応）
- タイプアニメーション
- スクロール連動フェードイン
- Reduced Motion 対応

**実装例**:
```tsx
import { heroData } from '@/app/data';

export default function HeroSection() {
  return (
    <section id="home">
      <Image
        src="/profile.jpg"
        alt={heroData.name}
        width={160}
        height={160}
        priority
      />
      <h1>{heroData.name}</h1>
      <TypeAnimation
        sequence={heroData.typewriterStrings}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </section>
  );
}
```

---

### AboutSection

**ファイル**: `app/components/AboutSection.tsx`

**用途**: 自己紹介・経歴タイムライン

**データソース**: `@/app/data` (timelineItems, interests)

**特徴**:
- タイムライン表示（時系列）
- 興味分野のリスト表示
- スクロール連動アニメーション

**使用データ**:
```typescript
import { timelineItems, interests } from '@/app/data';
```

---

### SkillsSection

**ファイル**: `app/components/SkillsSection.tsx`

**用途**: 技術スタックの表示

**データソース**: `@/app/data` (skillCategories)

**特徴**:
- カテゴリ別グリッド表示
- スキルレベルの視覚化
- レスポンシブレイアウト
- スタッガードアニメーション

**レイアウト**:
- モバイル: 1列
- タブレット: 2列
- デスクトップ: 3列

**アニメーション**:
```tsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
>
  {skillCategories.map((category) => (
    <motion.div variants={itemVariants} key={category.category}>
      {/* スキルカード */}
    </motion.div>
  ))}
</motion.div>
```

---

### ProjectsSection

**ファイル**: `app/components/ProjectsSection.tsx`

**用途**: プロジェクト一覧の表示

**データソース**: `@/app/data` (projects)

**特徴**:
- プロジェクトカード
- GitHub / デモリンク
- 使用技術タグ表示
- ホバーエフェクト

**カード構成**:
- タイトル
- 説明文
- 技術タグ
- GitHub リンク（アイコン）
- デモリンク（アイコン）

---

### ContactSection

**ファイル**: `app/components/ContactSection.tsx`

**用途**: SNS・メールリンク集

**データソース**: `@/app/data` (contactLinks)

**特徴**:
- アイコン付きリンクカード
- ホバー時の拡大エフェクト
- アクセシビリティ対応（aria-label）

**リンク例**:
```tsx
import { contactLinks } from '@/app/data';

{contactLinks.map((link) => (
  <a
    key={link.name}
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={link.name}
  >
    {link.icon}
    <span>{link.name}</span>
  </a>
))}
```

---

## ユーティリティコンポーネント

再利用可能な UI パーツ。

### ThemeToggle

**ファイル**: `app/components/ThemeToggle.tsx`

**用途**: ダークモード切り替えボタン

**依存関係**: `next-themes`

**特徴**:
- ハイドレーションミスマッチ対策
- アイコンのスムーズ切り替え
- アクセシビリティ対応

**実装パターン**:
```tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="テーマ切り替え"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
```

---

### SkipLink

**ファイル**: `app/components/SkipLink.tsx`

**用途**: メインコンテンツへのスキップリンク（アクセシビリティ）

**特徴**:
- キーボード操作時のみ表示
- フォーカス時に画面上部に表示
- スクリーンリーダー対応

**実装**:
```tsx
<a
  href="#main"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
>
  メインコンテンツへスキップ
</a>
```

---

### ScrollToTopButton

**ファイル**: `app/components/ScrollToTopButton.tsx`

**用途**: ページトップへ戻るボタン

**特徴**:
- スクロール位置に応じた表示/非表示
- スムーズスクロール
- フェードイン/アウトアニメーション

**状態管理**:
```typescript
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

### TextHighlight

**ファイル**: `app/components/TextHighlight.tsx`

**用途**: テキストハイライト装飾

**Props**:
```typescript
interface TextHighlightProps {
  children: React.ReactNode;
  className?: string;
}
```

**使用例**:
```tsx
<TextHighlight>重要なテキスト</TextHighlight>
```

**スタイル**:
- グラデーション背景
- 半透明効果
- ダークモード対応

---

### ToastProvider

**ファイル**: `app/components/ToastProvider.tsx`

**用途**: トースト通知の設定

**依存関係**: `react-hot-toast`

**特徴**:
- ダークモード対応
- カスタムスタイル
- 位置設定（top-center）

**実装**:
```tsx
import { Toaster } from 'react-hot-toast';

export function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: {
          background: 'var(--background)',
          color: 'var(--foreground)',
        },
      }}
    />
  );
}
```

---

### ParticleBackground

**ファイル**: `app/components/ParticleBackground.tsx`

**用途**: 背景パーティクルアニメーション

**特徴**:
- Canvas ベースのアニメーション
- レスポンシブ対応
- パフォーマンス最適化
- Reduced Motion 対応

**実装詳細**:
- `requestAnimationFrame` による60fps維持
- `prefers-reduced-motion` 検出時は無効化
- モバイルではパーティクル数を削減

---

### CustomCursor

**ファイル**: `app/components/CustomCursor.tsx`

**用途**: カスタムカーソル（デスクトップのみ）

**特徴**:
- Framer Motion による滑らかなアニメーション
- タッチデバイス検出・自動無効化
- Reduced Motion 対応（無効化）
- インタラクティブ要素上でのホバーエフェクト

**実装詳細**:
- `useSpring` によるスプリングアニメーション（遅延追従するリング）
- `mix-blend-mode: difference` によるコントラスト確保
- インタラクティブ要素（`a`, `button`, `[role="button"]`等）の自動検出
- `pointer: coarse` メディアクエリによるタッチデバイス検出

**Props**: なし

---

## カスタムフック

### useInView

**ファイル**: `app/hooks/useInView.ts`

**用途**: Intersection Observer による可視性検出

**型定義**:
```typescript
interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView<T extends HTMLElement>(
  options?: UseInViewOptions
): { ref: React.RefObject<T>; isInView: boolean };
```

**特徴**:
- Intersection Observer API を使用
- `prefers-reduced-motion` 対応
- トリガー回数の制御（once オプション）

**使用例**:
```tsx
import { useInView } from '@/app/hooks/useInView';

export function AnimatedSection() {
  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '-100px',
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {isInView && <div>表示領域に入りました</div>}
    </div>
  );
}
```

**実装パターン**:
```typescript
export function useInView<T extends HTMLElement>({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}
```

---

## コンポーネント設計原則

### 1. 一貫性
- 命名規則の統一（PascalCase for components）
- ファイル構造の統一
- Props の型定義を必須化

### 2. 再利用性
- 単一責任の原則（Single Responsibility Principle）
- Props による柔軟性
- スタイルのカスタマイズ性

### 3. アクセシビリティ
- セマンティック HTML の使用
- ARIA 属性の適切な使用
- キーボード操作対応

### 4. パフォーマンス
- 適切な `use client` ディレクティブの使用
- Lazy Loading の活用
- 不要な再レンダリングの防止

### 5. 型安全性
- TypeScript による厳格な型定義
- Props インターフェースの明示
- データレイヤーの型定義との統合

---

## テストガイドライン（将来計画）

### ユニットテスト
```typescript
// __tests__/components/ThemeToggle.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '@/app/components/ThemeToggle';

describe('ThemeToggle', () => {
  it('should toggle theme on click', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    // assertions
  });
});
```

### E2E テスト
```typescript
// e2e/navigation.spec.ts
import { test, expect } from '@playwright/test';

test('should navigate to sections', async ({ page }) => {
  await page.goto('/');
  await page.click('a[href="#about"]');
  await expect(page.locator('#about')).toBeInViewport();
});
```

---

## トラブルシューティング

### ハイドレーションミスマッチエラー
**原因**: クライアント側でのみ動作するコンポーネントをサーバーサイドでレンダリング

**解決策**:
```tsx
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) {
  return <Placeholder />;
}
```

### スクロールアニメーションが動作しない
**原因**: `viewport` オプションの設定ミス

**解決策**:
```tsx
<motion.div
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
>
```

---

## 更新履歴
| 日付 | 更新者 | 内容 |
|------|--------|------|
| 2026-02-04 | Claude | 初版作成 |
