# aarabii/An

## 基本情報

| 項目 | 内容 |
|------|------|
| リポジトリ | [aarabii/An](https://github.com/aarabii/An) |
| デモサイト | https://aarab.vercel.app |
| スター数 | 7 |
| 最終更新 | 2026-01-09 |

## 技術スタック

| カテゴリ | 技術 |
|----------|------|
| フレームワーク | Next.js 15.4.10 (App Router) |
| 言語 | TypeScript |
| UIライブラリ | React 19.1.0 |
| アニメーション | motion (Framer Motion v12) |
| スタイリング | Tailwind CSS 3.4 + tailwindcss-animate |
| 背景シェーダー | @paper-design/shaders-react |
| UIコンポーネント | Radix UI (@radix-ui/react-slot) |
| バリアント | class-variance-authority (CVA) |
| 通知 | Sonner |
| アイコン | React Icons |
| メール | Nodemailer |
| 分析 | Vercel Analytics |

## 概要

Next.js 15 + React 19 + Framer Motion 12 を使用した、ダークラグジュアリーテーマとグラスモーフィズムが特徴のミニマルなポートフォリオ。`@paper-design/shaders-react` による背景シェーダーエフェクトも注目。

## 詳細調査

### ディレクトリ構造

```
aarabii/An/
├── next.config.ts
├── package.json
├── tailwind.config.js
├── public/
└── src/
    ├── app/
    │   ├── (main)/
    │   │   └── page.tsx
    │   ├── api/
    │   ├── fonts.ts
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── not-found.tsx
    │   ├── resume/
    │   ├── robots.ts
    │   └── sitemap.ts
    ├── assets/
    ├── components/
    │   ├── Cards/
    │   │   ├── ContactFormCard.tsx
    │   │   ├── ContactSocials.tsx
    │   │   ├── ExperienceCard.tsx
    │   │   ├── ProjectCard.tsx
    │   │   └── SkillsCard.tsx
    │   ├── common/
    │   │   ├── Background.tsx
    │   │   ├── Footer.tsx
    │   │   ├── Navbar.tsx
    │   │   └── PreLoader.tsx
    │   ├── sections/
    │   │   ├── About.tsx
    │   │   ├── Contact.tsx
    │   │   ├── Experience.tsx
    │   │   ├── Hero.tsx
    │   │   ├── Projects.tsx
    │   │   └── Skills.tsx
    │   └── ui/
    │       ├── badge.tsx
    │       ├── button.tsx
    │       └── card.tsx
    ├── constant/
    │   ├── experience.ts
    │   ├── projects.ts
    │   ├── self.ts
    │   └── skillsData.ts
    └── lib/
        └── utils.ts
```

### ミニマルデザインパターン

**カラーシステム（ダークラグジュアリーテーマ）:**

```css
:root {
  --background: 240 15% 2%;           /* 超ダークな背景 */
  --foreground: 220 8% 94%;           /* ライトなテキスト */
  --primary: 220 15% 88%;             /* プラチナ系プライマリ */
  --secondary: 275 60% 45%;           /* パープル系セカンダリ */
  --accent: 275 70% 55%;              /* アメジスト系アクセント */
  --muted: 240 18% 6%;
  --glass-bg: hsl(245 30% 3% / 0.9);  /* グラスモーフィズム */
}
```

**グラスモーフィズムコンポーネント:**

```css
.glass-card {
  background: hsl(var(--glass-bg));
  backdrop-filter: var(--glass-backdrop);  /* blur(16px) saturate(180%) */
  border: 1px solid hsl(var(--glass-border));
  box-shadow: var(--glass-glow);
}

.glass-card:hover {
  background: hsl(var(--glass-bg-light));
  border-color: hsl(var(--glass-border-hover));
  transform: translateY(-2px);
}
```

### Framer Motion アニメーションパターン

**基本的なエントリーアニメーション:**

```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
>
```

**スクロール連動アニメーション (useInView):**

```tsx
const isInView = useInView(ref, {
  once: false,         // 繰り返し発火
  margin: "-60px",     // トリガーマージン
  amount: 0.2,         // 表示割合
});

<motion.div
  initial={{ opacity: 0, x: -60 }}
  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
>
```

**ホバーアニメーション:**

```tsx
whileHover={{
  y: -10,
  scale: 1.02,
  transition: {
    duration: 0.3,
    type: "spring",
    stiffness: 400,
    damping: 25,
  },
}}
```

**ステージアニメーション（遅延）:**

```tsx
transition={{ duration: 0.8, delay: 0.2 }}  // 名前
transition={{ duration: 0.7, delay: 0.4 }}  // 役職
transition={{ duration: 0.7, delay: 0.6 }}  // 説明
transition={{ duration: 0.7, delay: 0.8 }}  // ボタン
```

**無限ループアニメーション（マーキー）:**

```tsx
<motion.div
  animate={{ x: animateX }}
  transition={{
    repeat: Infinity,
    duration: animationDuration,
    ease: "linear",
  }}
>
```

**シマーエフェクト:**

```tsx
<motion.div
  className="absolute inset-0 opacity-0 group-hover:opacity-30"
  style={{ background: "var(--glass-shimmer)" }}
  initial={{ x: "-100%" }}
  whileHover={{ x: "100%" }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
/>
```

### 背景シェーダー

```tsx
// Background.tsx - @paper-design/shaders-react を使用
<MeshGradient
  colors={["#000000", "#8b5cf6", "#ffffff", "#1e1b4b", "#4c1d95"]}
  speed={0.3}
/>
```

### パフォーマンス最適化

```css
/* GPU最適化クラス */
.will-change-transform { will-change: transform; }
.gpu-accelerated {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* prefers-reduced-motion 対応 */
@media (prefers-reduced-motion: reduce) {
  .marquee-infinite, .floating-orb, .loading-spinner, .pulse-animation {
    animation: none;
  }
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### コンポーネント設計

**shadcn/ui パターン:**

```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2...",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow...",
        outline: "border border-input bg-background shadow-sm...",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
      },
    },
  }
);

const Comp = asChild ? Slot : "button";
```

## 本プロジェクトへの示唆

### 採用すべきパターン
- **ダークラグジュアリーテーマ**: モノクロ + パープルアクセント
- **グラスモーフィズム**: `backdrop-filter: blur()` + 透明感
- **useInView + once: false**: 繰り返しスクロールアニメーション
- **@paper-design/shaders-react**: 高品質な背景シェーダー

### 参考になる実装
- カスタムイージング関数 `[0.25, 0.46, 0.45, 0.94]`
- マーキー（無限スクロール）アニメーション
- prefers-reduced-motion 対応

## 参考リンク

- [GitHub リポジトリ](https://github.com/aarabii/An)
- [デモサイト](https://aarab.vercel.app)
