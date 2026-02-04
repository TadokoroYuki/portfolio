# アーキテクチャドキュメント

## 1. プロジェクト概要

### 目的・ゴール
Next.js 15 を使用したモダンなポートフォリオサイト。Web 開発のスキルと実績を効果的にアピールし、潜在的なクライアントや雇用主に対してプロフェッショナルな第一印象を与えることを目的としています。

### ターゲットユーザー
- 採用担当者・リクルーター
- 潜在的なクライアント
- 技術コミュニティのメンバー

### 主な特徴
- シングルページアプリケーション (SPA) 構成
- ダークモード対応
- レスポンシブデザイン
- アクセシビリティ対応 (WCAG 2.1 準拠)
- SEO 最適化
- パフォーマンス最適化

---

## 2. 技術スタック

### 概要
本プロジェクトは、Next.js 15 (App Router) を中心としたモダンなフロントエンド技術スタックで構築されています。

**Core:**
- **Next.js 15.1.5** - フレームワーク (App Router)
- **React 19.0.0** - UI ライブラリ
- **TypeScript 5.x** - 型安全な開発

**Styling:**
- **Tailwind CSS 3.4.17** - ユーティリティファースト CSS
- **Framer Motion 12.29.2** - アニメーション
- CSS Variables - テーマカラー管理

**UI/UX:**
- next-themes, react-icons, react-type-animation, react-hot-toast

**Tooling:**
- ESLint, Prettier, Playwright, next-sitemap

**デプロイ:**
- Vercel（プラットフォーム）
- GitHub Actions（CI/CD）

> 📘 **詳細は [TECH_STACK.md](./TECH_STACK.md) を参照**
> 新機能の技術選定（ブログ、多言語対応、UIライブラリ等）の詳細は技術スタックドキュメントに記載されています。

---

## 3. ディレクトリ構造

```
portofolio/
├── app/                          # Next.js App Router
│   ├── components/               # React コンポーネント
│   │   ├── Navigation.tsx        # スティッキーナビ + モバイルメニュー
│   │   ├── ThemeProvider.tsx     # next-themes ラッパー
│   │   ├── ThemeToggle.tsx       # ダーク/ライト切り替え
│   │   ├── SkipLink.tsx          # アクセシビリティ (スキップリンク)
│   │   ├── ScrollToTopButton.tsx # ページトップへ戻るボタン
│   │   ├── TextHighlight.tsx     # テキストハイライトコンポーネント
│   │   ├── ToastProvider.tsx     # トースト通知プロバイダー
│   │   ├── CustomCursor.tsx      # カスタムカーソル
│   │   ├── ParticleBackground.tsx # 背景パーティクル
│   │   ├── HeroSection.tsx       # ヒーローセクション
│   │   ├── AboutSection.tsx      # 自己紹介セクション
│   │   ├── SkillsSection.tsx     # スキルセクション
│   │   ├── ProjectsSection.tsx   # プロジェクトセクション
│   │   └── ContactSection.tsx    # コンタクトセクション
│   ├── data/                     # データレイヤー (実装済み)
│   │   ├── index.ts              # 統合エクスポート
│   │   ├── types.ts              # 型定義
│   │   ├── hero.ts               # Heroセクションデータ
│   │   ├── skills.ts             # スキルデータ
│   │   ├── projects.ts           # プロジェクトデータ
│   │   ├── timeline.ts           # タイムラインデータ
│   │   ├── interests.ts          # 興味分野データ
│   │   └── contact.tsx           # コンタクト情報 (JSXアイコン含む)
│   ├── hooks/                    # カスタムフック
│   │   └── useInView.ts          # Intersection Observer フック
│   ├── layout.tsx                # ルートレイアウト
│   ├── page.tsx                  # ホームページ
│   └── globals.css               # グローバルスタイル
├── docs/                         # ドキュメント
│   ├── ARCHITECTURE.md           # アーキテクチャ (本ドキュメント)
│   ├── COMPONENTS.md             # コンポーネント API リファレンス
│   ├── DESIGN_SPEC.md            # デザイン仕様
│   ├── REQUIREMENTS.md           # 要件定義
│   ├── TECH_STACK.md             # 技術スタック詳細
│   ├── REFERENCE.md              # 参考資料
│   ├── ACCESSIBILITY_CHECKLIST.md
│   ├── DEPLOYMENT_GUIDE.md
│   └── PERFORMANCE_SEO_GUIDE.md
├── public/                       # 静的アセット
│   ├── favicon.ico
│   ├── profile.jpg
│   ├── og-image.png
│   └── resume.pdf
├── .github/                      # GitHub 設定
│   ├── ISSUE_TEMPLATE/
│   ├── pull_request_template.md
│   └── workflows/ci.yml
├── tailwind.config.ts            # Tailwind 設定
├── next.config.ts                # Next.js 設定
├── tsconfig.json                 # TypeScript 設定
└── package.json                  # 依存関係・スクリプト
```

---

## 4. コンポーネントアーキテクチャ

### コンポーネント分類

#### レイアウトコンポーネント
ページ全体の構造を定義するコンポーネント。

| コンポーネント | 役割 | Client/Server |
|---------------|------|---------------|
| `layout.tsx` | ルートレイアウト、メタデータ、プロバイダー | Server |
| `ThemeProvider` | テーマコンテキストの提供 | Client |
| `Navigation` | グローバルナビゲーション | Client |

#### セクションコンポーネント
ページの各セクションを構成するコンポーネント。

| コンポーネント | セクション | 機能 |
|---------------|-----------|------|
| `HeroSection` | ヒーロー | プロフィール画像、タイプアニメーション、CTA |
| `AboutSection` | 自己紹介 | 経歴タイムライン、興味分野 |
| `SkillsSection` | スキル | 技術スタックのグリッド表示 |
| `ProjectsSection` | プロジェクト | プロジェクトカード、GitHub/Demo リンク |
| `ContactSection` | コンタクト | SNS/Email リンク |

#### ユーティリティコンポーネント
再利用可能な UI パーツ。

| コンポーネント | 役割 |
|---------------|------|
| `ThemeToggle` | ダークモード切り替えボタン |
| `SkipLink` | メインコンテンツへのスキップリンク |
| `ScrollToTopButton` | ページトップへ戻るボタン |
| `TextHighlight` | テキストハイライト装飾 |
| `ToastProvider` | トースト通知の設定 |
| `CustomCursor` | カスタムカーソル（デスクトップのみ） |
| `ParticleBackground` | 背景パーティクルアニメーション |

### 共通パターン

#### 1. Hydration-Safe Mounting
クライアントサイドのみで動作するコンポーネントは、`mounted` 状態を使用してハイドレーションミスマッチを防止。

```tsx
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) {
  return <Placeholder />;
}
```

#### 2. Reduced Motion 対応
`useReducedMotion` フックを使用して、モーション設定を尊重。

```tsx
const prefersReducedMotion = useReducedMotion();

const variants = {
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
  visible: { opacity: 1, y: 0 }
};
```

#### 3. Scroll-triggered Animation
Framer Motion の `whileInView` を使用したスクロール連動アニメーション。

```tsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
>
```

---

## 5. データフロー

### 現状（実装済み）
すべてのデータは `app/data/` ディレクトリに分離され、一元管理されています。

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

### データの種類
| データ | ファイル | 内容 |
|--------|---------|------|
| Heroデータ | `app/data/hero.ts` | プロフィール情報、タイプアニメーション文字列 |
| スキルデータ | `app/data/skills.ts` | 技術スタック、習熟度、カテゴリ分類 |
| プロジェクトデータ | `app/data/projects.ts` | プロジェクト情報、リンク、技術タグ |
| タイムラインデータ | `app/data/timeline.ts` | 経歴情報、時系列イベント |
| 興味分野データ | `app/data/interests.ts` | 興味・関心分野リスト |
| コンタクトデータ | `app/data/contact.tsx` | SNS、Email リンク（JSXアイコン） |
| 型定義 | `app/data/types.ts` | 全データの TypeScript 型定義 |

### 使用例

```tsx
// コンポーネントからのインポート
import { skillCategories, type SkillCategory } from '@/app/data';

export default function SkillsSection() {
  return (
    <div>
      {skillCategories.map((category) => (
        <div key={category.category}>
          <h3>{category.category}</h3>
          {category.skills.map((skill) => (
            <span key={skill.name}>{skill.name}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
```

### データレイヤーの利点

- **分離と再利用性**: コンポーネントとデータが分離され、保守性が向上
- **一元管理**: `index.ts` による統合エクスポートで管理が容易
- **型安全性**: TypeScript による厳格な型定義で開発時のエラーを防止
- **将来の拡張性**: CMS 連携やデータフェッチングへの移行が容易

### 将来計画
- CMS (Contentful, Sanity 等) との連携
- データフェッチングライブラリ（React Query）の導入検討

> 📘 **データフェッチングの詳細**
> React Query等のデータ管理ライブラリの検討については [TECH_STACK.md](./TECH_STACK.md) のデータフェッチングセクションを参照。

---

## 6. 状態管理

### テーマ状態
`next-themes` ライブラリを使用。

```tsx
// ThemeProvider.tsx
<NextThemesProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
  {children}
</NextThemesProvider>
```

**特徴:**
- システム設定の自動検出
- LocalStorage への永続化
- `class` 属性によるダークモード切り替え

### UI ステート
各コンポーネント内で React の `useState` を使用。

| コンポーネント | 状態 | 用途 |
|---------------|------|------|
| `Navigation` | `isScrolled` | スクロール位置に応じたスタイル変更 |
| `Navigation` | `isMobileMenuOpen` | モバイルメニューの開閉 |
| `ScrollToTopButton` | `isVisible` | ボタンの表示/非表示 |
| `ThemeToggle` | `mounted` | ハイドレーション制御 |
| `HeroSection` | `imageError` | 画像エラー時のフォールバック |

### カスタムフック
```tsx
// useInView.ts
export function useInView<T extends HTMLElement>({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseInViewOptions = {}) {
  // Intersection Observer による可視性検出
  // Reduced motion 設定の尊重
}
```

---

## 7. スタイリング戦略

### 基本方針
- **Tailwind CSS**: ユーティリティファーストによる高速開発
- **CSS Variables**: テーマカラーの集中管理
- **ダークモード**: `dark:` プレフィックスによる自動切り替え
- **レスポンシブ**: モバイルファーストアプローチ

### Tailwind CSS 設定

```ts
// tailwind.config.ts
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
} satisfies Config;
```

### CSS カスタムプロパティ

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

> 📘 **デザインシステムの詳細**
> カラーパレット、タイポグラフィ、スペーシング、アニメーション仕様については [DESIGN_SPEC.md](./DESIGN_SPEC.md) を参照。

---

## 8. パフォーマンス

### フォント最適化
Next.js の `next/font` を使用した自動最適化。

```tsx
// layout.tsx
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});
```

**効果:**
- 自動的なフォントファイルのホスティング
- `font-display: swap` によるレイアウトシフト防止
- サブセット化による軽量化

### 画像最適化
Next.js の `next/image` を使用。

```tsx
<Image
  src="/profile.jpg"
  alt="Yuki Tadokoro"
  width={160}
  height={160}
  priority  // LCP 対策
  onError={() => setImageError(true)}  // フォールバック
/>
```

**効果:**
- 自動的な WebP/AVIF 変換
- レスポンシブ画像の生成
- 遅延読み込み (デフォルト)
- `priority` による LCP 最適化

### アニメーション最適化
- Framer Motion の `whileInView` による遅延アニメーション
- `transform` と `opacity` のみを使用 (GPU アクセラレーション)
- `will-change` の自動適用

---

## 9. アクセシビリティ

### キーボードナビゲーション
- **スキップリンク**: メインコンテンツへの直接ジャンプ
- **フォーカス表示**: `focus-visible` スタイルの適用
- **セマンティック HTML**: 適切な見出し構造 (`h1` → `h2` → `h3`)

```css
/* globals.css */
*:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
```

### スクリーンリーダー対応
- **aria-label**: ボタン、リンクへの説明
- **aria-hidden**: 装飾的な要素の非表示
- **セマンティック要素**: `<nav>`, `<main>`, `<section>` の使用

```tsx
<button aria-label="ページトップへ戻る">
  <svg aria-hidden="true">...</svg>
</button>
```

### モーション設定
`prefers-reduced-motion` メディアクエリの尊重。

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

```tsx
const prefersReducedMotion = useReducedMotion();
// アニメーションを条件付きで無効化
```

---

## 10. SEO

### メタデータ
`layout.tsx` で包括的なメタデータを設定。

```tsx
export const metadata: Metadata = {
  title: 'Portfolio | Yuki Tadokoro',
  description: '...',
  keywords: ['portfolio', 'web developer', ...],
  openGraph: { ... },
  twitter: { ... },
  robots: { index: true, follow: true },
};
```

### サイトマップ
`next-sitemap` による自動生成。

```bash
npm run postbuild  # サイトマップ生成
```

### 構造化データ
今後の改善項目として検討:
- Person スキーマ
- WebSite スキーマ
- CreativeWork スキーマ (プロジェクト)

---

## 11. 将来のロードマップ

### 実装済み ✅
- [x] データレイヤーの分離 (`app/data/` ディレクトリ)
- [x] ダークモード対応
- [x] レスポンシブデザイン
- [x] アクセシビリティ対応（WCAG 2.1 AA）
- [x] SEO最適化（sitemap, robots.txt）
- [x] パフォーマンス最適化（next/image, next/font）

### 短期 (1-3ヶ月)

**テスト・品質改善**
- [ ] ユニットテストの追加 (Jest + React Testing Library)
- [ ] E2Eテストの追加 (Playwright)

**データ・コンテンツ**
- [ ] プロジェクトデータの拡充（複数プロジェクト）
- [ ] スキルレベル可視化の改善（プログレスバー、経験年数）

**SEO強化**
- [ ] 構造化データの追加（JSON-LD: Person, WebSite, CreativeWork）

### 中期 (3-6ヶ月)

**コンテンツ機能**
- [ ] ブログ機能の追加（MDX + Contentlayer）
  - 記事一覧・詳細ページ
  - タグ・カテゴリによる分類
  - 目次（TOC）自動生成
  - シンタックスハイライト（Shiki）
  - 読了時間の表示

**インタラクティブ機能**
- [ ] プロジェクトフィルタリング機能
  - タグ・カテゴリでのフィルタリング
  - ソート機能（日付、名前）
  - URLクエリパラメータでの状態管理

**多言語対応**
- [ ] 多言語対応 (next-intl)
  - 日本語・英語の切り替え
  - 言語別のメタデータ
  - 言語切り替えUI

**コミュニケーション**
- [ ] コンタクトフォームの実装
  - Email.js または Resend
  - バリデーション、成功/エラー通知

**デザイン強化**
- [ ] グローエフェクトの追加
  - ヒーローセクションのグローエフェクト
  - ボタンのグローエフェクト
- [ ] 高度なホバーエフェクト
  - カード3D tilt（マウス追従）
  - リップルエフェクト
  - グラデーション移動
- [ ] スクロール体験の強化
  - パララックス効果
  - スクロールプログレスバー
  - 目次のハイライト（記事詳細ページ）

### 長期 (6ヶ月以降)

**オプション機能**
- [ ] カスタムカーソル実装
  - デスクトップのみ有効
  - モバイル・Reduced Motion時は無効化
  - 視覚的インパクト大、実装コスト低
- [ ] パーティクル背景
  - tsParticles使用
  - パフォーマンスへの影響を考慮
  - 透明度を調整し、過度に目立たないように

**インフラ・分析**
- [ ] PWA 対応
- [ ] アナリティクス連携（Google Analytics、Vercel Analytics）

**CMS検討（必要に応じて）**
- [ ] CMS 連携 (Contentful/Sanity)
  - ブログ運用が活発になった場合に検討

---

### 実装推奨度

**高（積極的に検討）:**
- ✅ ブログ機能（MDX + Contentlayer）
- ✅ プロジェクトフィルタリング
- ✅ グローエフェクト
- ✅ 高度なホバーエフェクト
- ✅ スクロール体験の強化
- ✅ Shadcn UI導入（新規UIコンポーネント用）

**中（必要に応じて）:**
- ⚠️ カスタムカーソル（視覚的インパクト大、実装コスト低）
- ⚠️ パーティクル背景（パフォーマンスへの影響を考慮）
- ⚠️ コンタクトフォーム（Email.js推奨、サーバーレス）

**低（基本的に不要）:**
- ❌ Three.js（過剰、パフォーマンス懸念、学習コスト高）
- ❌ Spline（過剰、デモ目的以外不要）
- ❌ GSAP（Framer Motionで十分、追加依存を避ける）

> 📘 **参考資料**
> 詳細は [REFERENCE.md](./REFERENCE.md) の「技術選定の教訓」セクションを参照。参考ポートフォリオから得られた知見に基づいています。

---

## 12. デザインシステム

### カラーシステム

> 📘 **詳細は [DESIGN_SPEC.md](./DESIGN_SPEC.md#カラーシステム) を参照**

**現在採用しているテーマ:**
- ライトモード: 白背景 (#ffffff) + ほぼ黒テキスト (#171717)
- ダークモード: ほぼ黒背景 (#0a0a0a) + 明るいグレーテキスト (#ededed)
- フォーカスカラー: Blue-500 (#3b82f6)

### タイポグラフィ
- **フォント**: Noto Sans JP（日本語・英語対応）
- **見出し**: `text-4xl md:text-5xl` (H1)、`text-3xl md:text-4xl` (H2)
- **本文**: `text-base`

### スペーシング
- セクション間: `py-16 md:py-24`
- カード内: `p-6` (通常)、`p-8` (大)

### ダークモード戦略
- `next-themes` による自動切り替え
- システム設定の検出
- LocalStorageへの永続化
- `class` 属性による制御

> 📘 **詳細なデザイン仕様**
> カラーテーマの拡張案、高度なホバーエフェクト、グローエフェクト、カスタムカーソル等の詳細は [DESIGN_SPEC.md](./DESIGN_SPEC.md) を参照。

---

## 13. 参考資料

### 参考ポートフォリオから得られた知見

本プロジェクトは11の優れた開発者ポートフォリオを調査し、その知見を反映しています。

**共通技術スタック:**
- Next.js（多数）、Tailwind CSS（圧倒的多数）
- Framer Motion / GSAP（アニメーション）
- Shadcn UI、Aceternity UI（UIライブラリ）

**共通デザインパターン:**
- カスタムカーソル（マウス追従、ホバー時拡大）
- パーティクル/グローエフェクト
- スムーズなスクロールアニメーション
- コズミック/スペーステーマ（青→紫→ピンク）

**技術選定の教訓:**
- Three.js/Splineは過剰（学習コスト高、バンドルサイズ大）
- Framer MotionでGSAPの大半はカバー可能
- Shadcn UIはコピー&ペースト式で依存管理が容易
- Email.jsはサーバーレスで手軽（コンタクトフォーム）

> 📘 **詳細な参考資料**
> [REFERENCE.md](./REFERENCE.md) に11のポートフォリオの詳細分析を記載。

---

## 14. 技術的負債・改善点

### 現在の技術的負債

#### 1. テストカバレッジ
**問題点:**
- ユニットテストが未実装
- E2Eテストが未実装

**解決策:**
- Jest + React Testing Libraryの導入
- Playwrightの導入
- コンポーネント単位のテスト追加
- テストカバレッジ目標: 80%以上

#### 2. プロジェクト数
**問題点:**
- 現在1プロジェクトのみ表示
- ポートフォリオとして不十分

**解決策:**
- 複数プロジェクトの追加（目標: 3-5プロジェクト）
- プロジェクトのカテゴリ分類（Frontend、Backend、Full Stack）
- 各プロジェクトの詳細情報拡充

#### 3. メタデータ・SEO
**問題点:**
- 構造化データ（JSON-LD）が未実装
- リッチリザルト表示の機会損失

**解決策:**
- JSON-LD スキーマの追加
  - Person（個人情報）
  - WebSite（サイト情報）
  - CreativeWork（プロジェクト）
- OpenGraph、Twitter Cardの最適化

#### 4. スキルレベルの可視化
**問題点:**
- スキルレベルが視覚的に表現されていない
- 習熟度が不明瞭

**解決策:**
- プログレスバーの追加（Framer Motionアニメーション）
- 経験年数の表示
- オプション: チャート（Recharts）

---

## 関連ドキュメント

### 設計ドキュメント
- [REQUIREMENTS.md](./REQUIREMENTS.md) - 要件定義（機能要件・非機能要件）
- [DESIGN_SPEC.md](./DESIGN_SPEC.md) - UI/UXデザイン仕様
- [TECH_STACK.md](./TECH_STACK.md) - 技術選定詳細
- [COMPONENTS.md](./COMPONENTS.md) - コンポーネント API リファレンス

### 開発ガイド
- [ACCESSIBILITY_CHECKLIST.md](./ACCESSIBILITY_CHECKLIST.md) - アクセシビリティチェックリスト
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - デプロイメントガイド
- [PERFORMANCE_SEO_GUIDE.md](./PERFORMANCE_SEO_GUIDE.md) - パフォーマンス・SEO ガイド

### 参考資料
- [REFERENCE.md](./REFERENCE.md) - 参考ポートフォリオの調査結果
