# 技術選定・技術スタック詳細

## 概要
このドキュメントは、ポートフォリオサイトの新機能開発における技術選定の根拠と詳細を記載します。

## 関連ドキュメント
- [REQUIREMENTS.md](./REQUIREMENTS.md) - 要件定義（何を作るか）
- [ARCHITECTURE.md](./ARCHITECTURE.md) - アーキテクチャ設計（どう作るか）
- [DESIGN_SPEC.md](./DESIGN_SPEC.md) - UI/UXデザイン仕様（どう見せるか）
- [REFERENCE.md](./REFERENCE.md) - 参考ポートフォリオ（ベストプラクティス）

---

## 現在の技術スタック

### フロントエンド
| 技術 | バージョン | 用途 |
|------|-----------|------|
| Next.js | 15.1.5 | フレームワーク（App Router） |
| React | 19.0.0 | UIライブラリ |
| TypeScript | 5.x | 型安全性 |
| Tailwind CSS | 3.4.17 | スタイリング |
| framer-motion | 12.29.2 | アニメーション |

### ユーティリティ
| 技術 | バージョン | 用途 |
|------|-----------|------|
| react-icons | 5.5.0 | アイコン |
| react-hot-toast | 2.6.0 | 通知 |
| react-type-animation | 3.2.0 | タイピングアニメーション |
| next-themes | 0.4.6 | ダークモード |

### 開発ツール
| 技術 | バージョン | 用途 |
|------|-----------|------|
| ESLint | 9.x | リント（静的解析） |
| Prettier | 3.8.1 | フォーマット |
| next-sitemap | 4.2.3 | サイトマップ生成 |

### テスト（将来計画）
| 技術 | バージョン | 用途 | ステータス |
|------|-----------|------|----------|
| Playwright | 1.58.1 | E2Eテスト | セットアップ予定 |
| Jest | - | ユニットテスト | 検討中 |
| React Testing Library | - | コンポーネントテスト | 検討中 |

---

## 将来計画の技術選定

以下は将来実装予定の機能における技術選定の指針です。

### 1. ブログ/記事機能 (Issue #95) - 将来計画

#### コンテンツ管理の選択肢

##### Option 1: Contentlayer + MDX (推奨)
**選定理由**
- Next.js App Routerとの相性が良い
- MDXで動的コンポーネント埋め込み可能
- 型安全なコンテンツ取得
- ビルド時にコンテンツを検証

**実装例**
```typescript
// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string' },
    tags: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace(/^blog\//, ''),
    },
  },
}))
```

**依存パッケージ**
```json
{
  "contentlayer": "^0.3.4",
  "next-contentlayer": "^0.3.4"
}
```

##### Option 2: next-mdx-remote
**メリット**
- 軽量
- リモートMDXソースにも対応

**デメリット**
- 型安全性がContentlayerより劣る
- ビルド時の検証が弱い

##### Option 3: ヘッドレスCMS（Sanity, Contentful, etc.）
**メリット**
- 非エンジニアでも編集可能
- 画像管理が容易

**デメリット**
- 外部サービス依存
- 無料プランの制限
- オーバースペック（個人ポートフォリオには過剰）

**結論**: Contentlayer + MDX を採用

---

#### コードハイライトの選択肢

##### Option 1: Shiki (推奨)
**選定理由**
- VS Codeと同じシンタックスハイライト
- 100以上の言語サポート
- テーマカスタマイズ可能
- Next.jsで公式推奨

**実装例**
```typescript
import { getHighlighter } from 'shiki'

const highlighter = await getHighlighter({
  themes: ['nord', 'min-light'],
  langs: ['javascript', 'typescript', 'jsx', 'tsx', 'css', 'html'],
})

const html = highlighter.codeToHtml(code, {
  lang: 'typescript',
  theme: isDark ? 'nord' : 'min-light',
})
```

**依存パッケージ**
```json
{
  "shiki": "^1.0.0"
}
```

##### Option 2: Prism.js
**メリット**
- 軽量
- プラグインが豊富

**デメリット**
- クライアント側で実行（SSRが面倒）
- Shikiほど見た目が良くない

**結論**: Shiki を採用

---

#### 目次（TOC）生成

##### Option 1: rehype-slug + rehype-autolink-headings + 自前実装
**実装例**
```typescript
// lib/toc.ts
export function extractTOC(content: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const headings = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2],
      slug: slugify(match[2]),
    })
  }

  return headings
}
```

##### Option 2: remark-toc
**メリット**
- プラグインで自動生成

**デメリット**
- カスタマイズ性が低い

**結論**: 自前実装（柔軟性が高い）

---

#### 読了時間の計算
```typescript
// lib/reading-time.ts
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200 // 平均読書速度
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}
```

---

### 2. プロジェクトフィルタリング機能 (Issue #96) - 将来計画

#### 状態管理の選択肢

##### Option 1: useState + URLクエリパラメータ (推奨)
**選定理由**
- シンプル
- URLでフィルタ状態を共有可能
- Next.js App Routerの `useSearchParams` を活用

**実装例**
```typescript
'use client'

import { useSearchParams, useRouter } from 'next/navigation'

export function ProjectFilter() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const selectedTags = searchParams.get('tags')?.split(',') || []

  const toggleTag = (tag: string) => {
    const params = new URLSearchParams(searchParams)
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag]

    if (newTags.length > 0) {
      params.set('tags', newTags.join(','))
    } else {
      params.delete('tags')
    }

    router.push(`?${params.toString()}`)
  }

  return (
    // Filter UI
  )
}
```

##### Option 2: Zustand / Jotai
**メリット**
- グローバル状態管理が容易

**デメリット**
- 小規模機能には過剰
- 追加依存

**結論**: useState + URLクエリパラメータ を採用

---

#### フィルタリングロジック
```typescript
// lib/filter-projects.ts
export function filterProjects(
  projects: Project[],
  filters: {
    tags?: string[]
    category?: string
    sortBy?: 'date' | 'name'
  }
) {
  let filtered = [...projects]

  // タグでフィルタ
  if (filters.tags && filters.tags.length > 0) {
    filtered = filtered.filter(project =>
      filters.tags.some(tag => project.tags.includes(tag))
    )
  }

  // カテゴリーでフィルタ
  if (filters.category) {
    filtered = filtered.filter(project => project.category === filters.category)
  }

  // ソート
  if (filters.sortBy === 'date') {
    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } else if (filters.sortBy === 'name') {
    filtered.sort((a, b) => a.title.localeCompare(b.title))
  }

  return filtered
}
```

---

### 3. スキルレベル可視化 (Issue #97) - 将来計画

#### プログレスバーのアニメーション

##### Option 1: framer-motion (推奨)
**選定理由**
- 既に導入済み
- `useInView` フックで表示時トリガー

**実装例**
```typescript
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function SkillProgress({ skill }: { skill: Skill }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref}>
      <motion.div
        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: isInView ? `${skill.level}%` : 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: skill.index * 0.1 }}
      />
    </div>
  )
}
```

##### Option 2: CSS Animations
**メリット**
- 軽量

**デメリット**
- 制御が難しい
- スクロールトリガーが面倒

**結論**: framer-motion を活用

---

#### チャート（オプション）

##### Option 1: Recharts
**特徴**
- React専用
- レスポンシブ
- 軽量

##### Option 2: Chart.js + react-chartjs-2
**特徴**
- 多機能
- やや重い

**結論**: まずはプログレスバーのみ実装、必要に応じてRechartsを検討

---

### 4. 経歴タイムライン (Issue #98) - 将来計画

#### タイムラインコンポーネント

##### Option 1: 自前実装 (推奨)
**選定理由**
- デザインの完全制御
- 依存を増やさない
- CSS Grid / Flexboxで十分実現可能

**実装例**
```typescript
// components/Timeline.tsx
export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative">
      {/* 縦線 */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600" />

      {entries.map((entry, index) => (
        <motion.div
          key={entry.id}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`relative flex items-center mb-8 ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          {/* ドット */}
          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-900 transform -translate-x-1/2" />

          {/* コンテンツ */}
          <div className="ml-12 md:w-1/2 md:ml-0 md:px-8">
            <TimelineCard entry={entry} />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
```

##### Option 2: react-vertical-timeline-component
**メリット**
- 実装が簡単

**デメリット**
- カスタマイズが制限される
- スタイルの上書きが面倒
- ダークモード対応が手間

**結論**: 自前実装

---

### 5. 多言語対応 (Issue #99) - 将来計画

#### i18nライブラリの選択肢

##### Option 1: next-intl (推奨)
**選定理由**
- Next.js App Router専用設計
- 型安全
- サーバーコンポーネント対応
- シンプルなAPI

**インストール**
```bash
npm install next-intl
```

**ディレクトリ構成**
```
app/
├── [locale]/
│   ├── layout.tsx
│   ├── page.tsx
│   └── blog/
│       └── page.tsx
messages/
├── en.json
└── ja.json
```

**実装例**
```typescript
// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

// i18n/routing.ts
import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['en', 'ja'],
  defaultLocale: 'ja'
})

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
```

**翻訳の使用**
```typescript
// Client Component
'use client'
import { useTranslations } from 'next-intl'

export function Navigation() {
  const t = useTranslations('nav')

  return (
    <nav>
      <a href="/">{t('home')}</a>
      <a href="/about">{t('about')}</a>
    </nav>
  )
}

// Server Component
import { getTranslations } from 'next-intl/server'

export default async function HomePage() {
  const t = await getTranslations('hero')

  return <h1>{t('greeting')}</h1>
}
```

##### Option 2: next-i18next
**メリット**
- 成熟したライブラリ
- 豊富な事例

**デメリット**
- Pages Router向け
- App Routerでは設定が複雑

##### Option 3: 自前実装
**メリット**
- 依存なし
- シンプル

**デメリット**
- 機能が限定的
- メンテナンスコスト

**結論**: next-intl を採用

---

#### 翻訳ファイルの構造
```json
// messages/ja.json
{
  "nav": {
    "home": "ホーム",
    "about": "私について",
    "skills": "スキル",
    "projects": "プロジェクト",
    "blog": "ブログ",
    "contact": "お問い合わせ"
  },
  "hero": {
    "greeting": "こんにちは、{name}です",
    "role": "フルスタックデベロッパー",
    "description": "Next.js、TypeScript、Goを使用したWebアプリケーション開発"
  },
  "about": {
    "title": "私について",
    "description": "..."
  },
  "skills": {
    "title": "スキル",
    "categories": {
      "frontend": "フロントエンド",
      "backend": "バックエンド",
      "tools": "ツール"
    }
  },
  "projects": {
    "title": "プロジェクト",
    "viewProject": "プロジェクトを見る",
    "sourceCode": "ソースコード",
    "filter": {
      "all": "すべて",
      "frontend": "フロントエンド",
      "backend": "バックエンド",
      "fullstack": "フルスタック"
    }
  },
  "blog": {
    "title": "ブログ",
    "readMore": "続きを読む",
    "minuteRead": "{minutes}分で読めます",
    "publishedOn": "{date}に公開",
    "tags": "タグ"
  },
  "contact": {
    "title": "お問い合わせ",
    "email": "メールアドレス",
    "github": "GitHub",
    "linkedin": "LinkedIn"
  }
}
```

---

## パフォーマンス最適化

### 画像最適化
- Next.js Image コンポーネント使用
- WebP形式への自動変換
- 遅延ロード（`loading="lazy"`）

### コード分割
- 動的インポート（`next/dynamic`）
- ルートベースの自動コード分割

### キャッシング戦略
```typescript
// app/blog/[slug]/page.tsx
export const revalidate = 3600 // 1時間ごとに再生成
```

---

## SEO最適化

### メタデータ生成
```typescript
// app/[locale]/blog/[slug]/page.tsx
import { Metadata } from 'next'

export async function generateMetadata({
  params
}: {
  params: { slug: string; locale: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Your Name'],
      images: [{ url: post.coverImage }]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.coverImage]
    },
    alternates: {
      languages: {
        en: `/en/blog/${params.slug}`,
        ja: `/ja/blog/${params.slug}`
      }
    }
  }
}
```

### 構造化データ
```typescript
// components/StructuredData.tsx
export function BlogPostStructuredData({ post }: { post: Post }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      '@type': 'Person',
      name: 'Your Name'
    },
    description: post.description
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
```

---

## テスト戦略

### E2Eテスト（Playwright）
```typescript
// e2e/blog.spec.ts
import { test, expect } from '@playwright/test'

test('should navigate to blog post', async ({ page }) => {
  await page.goto('/blog')
  await page.click('article:first-child a')
  await expect(page).toHaveURL(/\/blog\/.+/)
  await expect(page.locator('h1')).toBeVisible()
})
```

### コンポーネントテスト（将来的に検討）
- Vitest + React Testing Library

---

## 依存パッケージの追加

### ブログ機能
```json
{
  "contentlayer": "^0.3.4",
  "next-contentlayer": "^0.3.4",
  "shiki": "^1.0.0",
  "rehype-slug": "^6.0.0",
  "rehype-autolink-headings": "^7.0.0"
}
```

### 多言語対応
```json
{
  "next-intl": "^3.9.0"
}
```

### スキルチャート（オプション）
```json
{
  "recharts": "^2.10.0"
}
```

---

## セキュリティ考慮事項

### XSS対策
- MDXコンテンツのサニタイゼーション
- `dangerouslySetInnerHTML` の使用を最小限に

### CSRF対策
- コンタクトフォーム実装時（将来）
- CSRFトークンの生成・検証

### Content Security Policy
```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
  }
]
```

---

## 開発環境

### 推奨エディタ設定
```json
// .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

### 推奨VSCode拡張機能
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- MDX
- i18n Ally

---

## CI/CD

### GitHub Actions（既存）
```yaml
# .github/workflows/playwright.yml
name: Playwright Tests
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run build
      - run: npx playwright install --with-deps
      - run: npm run test:e2e
```

---

## 技術的負債管理

### 定期的な依存更新
```bash
npm outdated
npm update
```

### セキュリティ監査
```bash
npm audit
npm audit fix
```

---

## アニメーション技術の選定

### Framer Motion vs GSAP

本プロジェクトでは現在 **Framer Motion** を採用しています。以下は他の選択肢との比較です。

| 項目 | Framer Motion (現在採用) | GSAP |
|------|------------------------|------|
| React統合 | ネイティブサポート | react-gsapラッパー経由 |
| 学習曲線 | 緩やか | やや急 |
| バンドルサイズ | ~50KB | ~50KB (core) |
| パフォーマンス | 優秀 | 優秀 |
| 機能 | React向け最適化 | より高度なタイムライン制御 |
| ライセンス | MIT | 商用プラグインは有料 |
| ドキュメント | 充実 | 非常に充実 |

**推奨アプローチ:**
- 現在のFramer Motionを継続使用
  - React統合が優れている
  - 宣言的なAPI（`<motion.div>`）が直感的
  - `useInView`、`AnimatePresence`などの便利なフック
- 将来的に高度なタイムライン制御が必要な場合のみGSAPを検討

**参考ポートフォリオでの使用例:**
- Framer Motion: Abhiz2411/3D-interactive-portfolio, ksparth12/Portfolio-Demo
- GSAP: red1-for-hek/developer-portfolio, Tajmirul/portfolio-2.0

---

## UIコンポーネントライブラリ

### Shadcn UI

**概要**
- Radix UI + Tailwind CSS のコンポーネント集
- コピー&ペーストで使用（npm installではない）
- カスタマイズ性が高い
- TypeScript完全対応

**メリット**
- 依存関係が少ない（コードを直接プロジェクトに追加）
- Tailwind CSSとの親和性が高い
- アクセシビリティが標準で確保される（Radix UI使用）
- 必要なコンポーネントのみ追加可能

**デメリット**
- セットアップに若干の手間
- コンポーネントのアップデートは手動

**推奨度**: High（ブログのUI、フィルタコンポーネント等で有用）

**使用例**
```bash
npx shadcn@latest init
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add accordion
```

**参考ポートフォリオ:**
- Abhiz2411/3D-interactive-portfolio
- ksparth12/Portfolio-Demo

### Aceternity UI

**概要**
- モダンなUI/UXコンポーネント
- アニメーション効果が豊富
- コピー&ペースト形式

**メリット**
- 視覚的に印象的なコンポーネント
- アニメーション効果が組み込まれている

**デメリット**
- ドキュメントがShadcn UIほど充実していない
- カスタマイズ性はShadcn UIに劣る

**推奨度**: Medium（既存の実装で十分な場合も多い）

---

## 3D/高度なビジュアル要素

### Three.js

**概要**
- JavaScriptの3Dグラフィックスライブラリ
- WebGLをラップした高レベルAPI
- React統合: **React Three Fiber** (@react-three/fiber)

**用途**
- 3Dシーン、インタラクティブオブジェクト
- パーティクル効果、シェーダーアニメーション

**トレードオフ**
- ✅ 高度な3D表現が可能
- ✅ パフォーマンスが良い（WebGL使用）
- ❌ 学習コスト高
- ❌ バンドルサイズ大（~600KB）
- ❌ SEOへの影響（クライアント側レンダリング）

**実装例**
```typescript
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'

export function ThreeScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial color="hotpink" />
      </Sphere>
      <OrbitControls />
    </Canvas>
  )
}
```

**推奨度**: Low（ポートフォリオには過剰、パフォーマンスへの影響大）

**参考ポートフォリオ:**
- red1-for-hek/developer-portfolio（Three.js使用）

### Spline

**概要**
- ノーコード3Dデザインツール
- React統合: **@splinetool/react-spline**

**用途**
- デザイナーが3Dシーンを作成 → Reactで埋め込み
- インタラクティブな3Dオブジェクト

**メリット**
- コーディング不要で3Dシーン作成
- エクスポートが簡単

**デメリット**
- Splineのサービス依存
- ファイルサイズが大きくなりがち
- カスタマイズ性に限界

**推奨度**: Medium（デザイナーがいる場合、またはプロトタイプ用）

**参考ポートフォリオ:**
- Abhiz2411/3D-interactive-portfolio（Spline Runtime使用）

**結論**: 個人ポートフォリオには基本的に不要。差別化が必要な場合のみ慎重に検討。

---

## カスタムカーソル実装

多くの参考ポートフォリオでカスタムカーソルが実装されています。以下は実装方法の選択肢です。

### Option 1: 自前実装 (推奨)

**実装例**
```typescript
// hooks/useCustomCursor.ts
import { useEffect } from 'react'

export function useCustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement
    const cursorFollower = document.querySelector('.custom-cursor-follower') as HTMLElement

    if (!cursor || !cursorFollower) return

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`

      // Follower with slight delay
      setTimeout(() => {
        cursorFollower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }, 100)
    }

    const handleLinkHover = () => {
      cursor.classList.add('cursor-hover')
      cursorFollower.classList.add('cursor-hover')
    }

    const handleLinkLeave = () => {
      cursor.classList.remove('cursor-hover')
      cursorFollower.classList.remove('cursor-hover')
    }

    document.addEventListener('mousemove', moveCursor)

    const links = document.querySelectorAll('a, button')
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover)
      link.addEventListener('mouseleave', handleLinkLeave)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover)
        link.removeEventListener('mouseleave', handleLinkLeave)
      })
    }
  }, [])
}
```

**CSS例**
```css
/* globals.css */
.custom-cursor {
  position: fixed;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #3b82f6;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
  mix-blend-mode: difference;
}

.custom-cursor-follower {
  position: fixed;
  width: 40px;
  height: 40px;
  border: 2px solid #3b82f6;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transition: transform 0.15s ease;
  opacity: 0.5;
}

.cursor-hover {
  transform: scale(1.5);
}

/* Hide on mobile */
@media (max-width: 768px) {
  .custom-cursor,
  .custom-cursor-follower {
    display: none;
  }
}
```

**メリット**
- シンプルで軽量
- 完全な制御が可能
- 依存なし

**デメリット**
- 全て自分で実装する必要がある

### Option 2: ライブラリ使用

**react-custom-cursor**
```bash
npm install react-custom-cursor
```

**cursor-effects**
```bash
npm install cursor-effects
```

**結論**: 自前実装を推奨（シンプルで軽量、カスタマイズ性が高い）

**参考ポートフォリオ:**
- aarabii/v4
- ksparth12/Portfolio-Demo

---

## パーティクル効果

### Option 1: tsParticles (推奨)

**概要**
- 軽量、高性能なパーティクルライブラリ
- 豊富なプリセット
- React統合: **react-tsparticles**

**インストール**
```bash
npm install tsparticles @tsparticles/react @tsparticles/engine @tsparticles/slim
```

**実装例**
```typescript
// components/ParticleBackground.tsx
'use client'

import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'

export function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: '#3b82f6',
          },
          links: {
            color: '#3b82f6',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            outModes: {
              default: 'bounce',
            },
          },
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
```

**メリット**
- 高性能（Canvas API使用）
- 豊富なカスタマイズオプション
- プリセットが豊富

**デメリット**
- バンドルサイズがやや大きい（~100KB、slimバージョンで削減可能）

### Option 2: particles.js

**概要**
- 古いライブラリ
- メンテナンス停止気味

**推奨度**: Low（tsParticlesの方が優れている）

**結論**: tsParticlesを推奨。ただし、パフォーマンスへの影響を考慮し、必要な場合のみ使用。

---

## コンタクトフォーム実装

将来的にコンタクトフォームを実装する場合の技術選定です。

### Email送信サービスの比較

| サービス | 無料枠 | 実装方法 | セットアップ | 推奨度 |
|---------|--------|----------|------------|--------|
| Email.js | 200件/月 | クライアント側 | 簡単 | High |
| Resend | 100件/日 | サーバー側API | やや複雑 | High |
| SendGrid | 100件/日 | サーバー側API | やや複雑 | Medium |

### Option 1: Email.js (クライアント側)

**メリット**
- サーバーレス
- セットアップが簡単
- 無料枠が十分

**デメリット**
- セキュリティがやや劣る（APIキーが公開される）
- スパム対策が必要

**実装例**
```typescript
// components/ContactForm.tsx
'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      )
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  )
}
```

**インストール**
```bash
npm install @emailjs/browser
```

### Option 2: Resend (サーバー側API)

**メリット**
- セキュア（APIキーがサーバー側）
- モダンなAPI
- Next.js App Router対応

**デメリット**
- Server Actionsまたはapi routeが必要
- セットアップがやや複雑

**実装例**
```typescript
// app/api/contact/route.ts
import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()

  try {
    const data = await resend.emails.send({
      from: 'contact@yourdomain.com',
      to: 'your-email@example.com',
      subject: `New contact from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
```

**インストール**
```bash
npm install resend
```

**推奨アプローチ:**
- フロントエンドのみで完結させる場合: **Email.js**
- 将来的にGo APIと統合する場合: **Resend** (サーバー側で統一)

**参考ポートフォリオ:**
- aarabii/v4（Email.js使用）

---

## データフェッチング

### React Query (TanStack Query)

**概要**
- サーバーステート管理ライブラリ
- キャッシング、再取得、楽観的更新などをサポート

**用途**
- API呼び出しの管理
- リアルタイムデータの取得

**現時点の判断**
- ❌ 不要（現在は静的データのみ）
- ✅ 将来的に有用（CMS連携時、動的データ取得時）

**将来の検討例**
- ヘッドレスCMS（Sanity、Contentful）を使用する場合
- 外部API（GitHub API、Qiita APIなど）からデータを取得する場合
- 記事の閲覧数、いいね数などの動的データを扱う場合

**インストール（将来）**
```bash
npm install @tanstack/react-query
```

**実装例（将来）**
```typescript
// app/providers.tsx
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

// hooks/usePosts.ts
import { useQuery } from '@tanstack/react-query'

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('/api/posts')
      return res.json()
    },
  })
}
```

---

## 更新履歴
| 日付 | 更新者 | 内容 |
|------|--------|------|
| 2024-XX-XX | - | 初版作成 |
