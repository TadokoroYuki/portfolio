# aditiarya37/my-portfolio-v2

## 基本情報

| 項目 | 内容 |
|------|------|
| リポジトリ | [aditiarya37/my-portfolio-v2](https://github.com/aditiarya37/my-portfolio-v2) |
| デモサイト | https://aditiarya.netlify.app/ |
| スター数 | 0 |
| 最終更新 | 2025-09-03 |

## 技術スタック

| カテゴリ | 技術 |
|----------|------|
| フレームワーク | Vite + React 19.1.0 |
| 言語 | JavaScript (JSX) |
| アニメーション | Framer Motion 12.12.2 |
| スタイリング | Tailwind CSS 3 |
| アイコン | React Icons |
| スクロール | react-scroll |
| タイピング効果 | react-type-animation |

## 概要

Vite + React ベースのシンプルなポートフォリオ。Framer Motion による豊富なアニメーション（スクロールトリガー、スタガー、ホバー）が特徴。**Next.js は使用していない。**

## 詳細調査

### ディレクトリ構造

```
my-portfolio-v2/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/
    ├── data/
    └── components/
        ├── About.jsx
        ├── Contact.jsx
        ├── Experience.jsx
        ├── Footer.jsx
        ├── Hero.jsx
        ├── Navbar.jsx
        ├── Projects.jsx
        ├── ScrollToTop.jsx
        ├── SectionTitle.jsx
        └── Skills.jsx
```

### Framer Motion アニメーションパターン

**基本フェードイン + スライド:**

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
```

**スクロールトリガー (whileInView):**

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
```

**スタガーアニメーション:**

```jsx
const skillCategoryVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.1, duration: 0.5 }
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
```

**インデックスベースの遅延:**

```jsx
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: i => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,  // インデックス×0.1秒
      duration: 0.5,
      ease: "easeOut"
    },
  }),
};
```

**ホバーアニメーション:**

```jsx
<motion.div
  variants={skillItemVariants}
  whileHover={{ y: -5 }}
>
```

**モバイルメニューアニメーション:**

```jsx
<motion.div
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: 'auto' }}
  exit={{ opacity: 0, height: 0 }}
  transition={{ duration: 0.3 }}
>
```

### カラーシステム (Tailwind カスタム)

```javascript
colors: {
  'primary-bg': '#1a1a2e',    // 濃い紺色
  'secondary-bg': '#16213e',  // やや明るい紺色
  'accent-1': '#00f5c3',      // シアン/緑
  'accent-2': '#e94560',      // ピンク/赤
  'text-primary': '#e0e0e0',  // 明るいグレー
  'text-secondary': '#a0a0a0', // 薄いグレー
}
```

### レイアウトパターン

**レスポンシブグリッド:**

```jsx
// Projects - 3カラム
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// Skills - 6カラム
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
```

**固定ナビゲーションバー:**

```jsx
<motion.nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
  ${isScrolled || isOpen ? 'bg-secondary-bg shadow-lg py-4' : 'bg-transparent py-6'}`}>
```

### パフォーマンス最適化

1. **フォント preconnect**: `<link rel="preconnect" href="https://fonts.googleapis.com">`
2. **Tailwind PurgeCSS**: 未使用CSS削除
3. **viewport={{ once: true }}**: 一度だけアニメーション実行
4. **スムーススクロール**: `html { scroll-behavior: smooth; }`
5. **イベントリスナークリーンアップ**: useEffect の return でリスナー解除
6. **Vite ビルド最適化**: ES モジュール、ツリーシェイキング

## 本プロジェクトへの示唆

### 採用すべきパターン
- **whileInView + viewport={{ once: true }}**: 効率的なスクロールトリガー
- **staggerChildren**: 子要素の連続アニメーション
- **カスタムカラーパレット**: ダークテーマ + アクセントカラー

### 参考になる実装
- インデックスベースの遅延（custom プロップ）
- スクロール位置に応じたナビバー背景変化
- グリッドのレスポンシブブレークポイント設計

## 参考リンク

- [GitHub リポジトリ](https://github.com/aditiarya37/my-portfolio-v2)
- [デモサイト](https://aditiarya.netlify.app/)
