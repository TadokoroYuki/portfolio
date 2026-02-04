# UI/UXデザイン仕様書

## 概要
このドキュメントは、ポートフォリオサイトの新機能開発におけるUI/UXデザインの仕様を定義します。

## 参照ドキュメント
- [要件定義書](./REQUIREMENTS.md)
- [リファレンスリスト](./REFERENCE.md)
- [アーキテクチャ設計](./ARCHITECTURE.md)
- [コンポーネント設計](./COMPONENTS.md)

---

## デザイン原則

### 1. 一貫性 (Consistency)
- 既存のデザインシステムとの統一感を保つ
- カラーパレット、タイポグラフィ、スペーシングの一貫性
- コンポーネントの再利用性を重視

### 2. アクセシビリティ (Accessibility)
- WCAG 2.1 レベルAA準拠
- キーボード操作対応
- スクリーンリーダー対応
- 十分なカラーコントラスト

### 3. レスポンシブ (Responsive)
- モバイルファースト設計
- ブレークポイント: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- タッチデバイスでの操作性

### 4. パフォーマンス (Performance)
- 軽量なアニメーション
- 画像の最適化
- 遅延ロード

---

## カラーシステム

### 現在のカラーパレット

**ライトモード**
```css
--background: #ffffff;  /* 背景色（白） */
--foreground: #171717;  /* テキスト色（ほぼ黒） */
```

**ダークモード**
```css
--background: #0a0a0a;  /* 背景色（ほぼ黒） */
--foreground: #ededed;  /* テキスト色（明るいグレー） */
```

**システムカラー**
```css
--focus-color: #3b82f6;  /* フォーカスリング（blue-500） */
```

### 推奨カラーパレット拡張

参考ポートフォリオで人気のカラーテーマ案：

#### Theme 1: コズミック/スペーステーマ
深い青、紫、ピンクの組み合わせで宇宙的な雰囲気を演出

```css
:root {
  --primary: #6366f1;      /* Indigo-500 */
  --secondary: #8b5cf6;    /* Violet-500 */
  --accent: #ec4899;       /* Pink-500 */
  --glow: rgba(99, 102, 241, 0.5);  /* プライマリのグロー */
}
```

**参考**: Abhiz2411/3D-interactive-portfolio

#### Theme 2: グラデーションテーマ
青→紫→ピンクのグラデーション

```css
.gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.gradient-accent {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.gradient-cosmic {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}
```

#### Theme 3: ミニマリストテーマ
グレースケール + 1つのアクセントカラー

```css
:root {
  --primary: #000000;
  --secondary: #6b7280;    /* Gray-500 */
  --accent: #3b82f6;       /* Blue-500 */
  --background: #ffffff;
  --foreground: #171717;
}
```

### カラーの使用ガイドライン

**プライマリカラー**
- ボタン、リンク、主要なCTA
- ナビゲーションのアクティブ状態

**セカンダリカラー**
- サブタイトル、キャプション
- 補助的なボタン

**アクセントカラー**
- 重要な情報、警告
- ホバー時の強調

### ダークモード対応
- すべての新機能でダークモード対応必須
- `dark:` クラスを使用した切り替え
- 読みやすさを最優先
- カラーコントラスト比を確保（WCAG AA基準）

---

## タイポグラフィ

### フォントファミリー
- メイン: システムフォント（Inter, sans-serif）
- コード: monospace

### 文字サイズ
- Heading 1: `text-4xl md:text-5xl`
- Heading 2: `text-3xl md:text-4xl`
- Heading 3: `text-2xl md:text-3xl`
- Body: `text-base`
- Small: `text-sm`

---

## スペーシング

### セクション間
- `py-16 md:py-24` (標準的なセクション間の余白)

### コンポーネント内
- `p-4` (小さいパディング)
- `p-6` (通常のパディング)
- `p-8` (大きいパディング)

---

## 新機能のデザイン仕様

### 1. ブログ/記事機能 (Issue #95)

#### 記事一覧ページ
**レイアウト**
- グリッドレイアウト: 1列(モバイル) → 2列(タブレット) → 3列(デスクトップ)
- カード型デザイン

**記事カードの構成**
```
┌─────────────────────────────┐
│ [サムネイル画像]             │
│                             │
├─────────────────────────────┤
│ 📅 2024-01-01  ⏱️ 5 min read│
│                             │
│ 記事タイトル                │
│                             │
│ 記事の要約が2-3行で表示...  │
│                             │
│ [#React] [#TypeScript]      │
└─────────────────────────────┘
```

**インタラクション**
- ホバー時: 軽い浮き上がり効果 (`hover:shadow-lg hover:-translate-y-1`)
- クリック時: 記事詳細ページへ遷移

**カラー**
- カード背景: `bg-white dark:bg-gray-800`
- ボーダー: `border border-gray-200 dark:border-gray-700`
- タグ: `bg-primary/10 text-primary`

#### 記事詳細ページ
**レイアウト**
- 中央寄せ、最大幅 `max-w-3xl`
- 読みやすい行間 `leading-relaxed`

**構成要素**
1. ヒーローセクション
   - 記事タイトル (`text-4xl font-bold`)
   - メタ情報（日付、読了時間、著者）
   - タグ一覧
   - アイキャッチ画像

2. 目次 (TOC)
   - サイドバー固定（デスクトップ）
   - アコーディオン形式（モバイル）
   - 現在位置のハイライト

3. 記事本文
   - 見出し、段落、リスト、引用のスタイリング
   - コードブロックのシンタックスハイライト
   - 画像のキャプション

4. フッター
   - 共有ボタン
   - 関連記事

**コードブロック**
```typescript
// 背景色: bg-gray-900 dark:bg-gray-950
// フォント: font-mono text-sm
// パディング: p-4
// ボーダー半径: rounded-lg
// シンタックスハイライト: Shiki使用
```

---

### 2. プロジェクトフィルタリング機能 (Issue #96)

#### フィルタUIの配置
**デスクトップ**
```
┌────────────────────────────────────┐
│ All  Frontend  Backend  Full Stack │ ← カテゴリフィルタ
├────────────────────────────────────┤
│ [React] [Next.js] [TypeScript]...  │ ← タグフィルタ
├────────────────────────────────────┤
│ Sort by: [Latest ▼]  [Clear All]   │ ← ソート・リセット
└────────────────────────────────────┘
```

**モバイル**
```
┌────────────────┐
│ [🔍 Filter] ▼  │ ← アコーディオン
└────────────────┘
```

#### フィルタボタンのスタイル
**非選択時**
- `bg-gray-100 dark:bg-gray-800`
- `text-gray-700 dark:text-gray-300`
- `hover:bg-gray-200 dark:hover:bg-gray-700`

**選択時**
- `bg-primary text-white`
- `shadow-md`

**アニメーション**
- `transition-all duration-200`

#### プロジェクト一覧のアニメーション
```typescript
// framer-motion使用
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  layout
>
```

---

### 3. スキルレベル可視化 (Issue #97)

#### レイアウト案: カード型
```
┌─────────────────────────────────┐
│  Frontend                        │
│  ────────────────────────────── │
│                                  │
│  ⚛️  React                       │
│  ████████░░ 80%  3 years        │
│                                  │
│  📘 TypeScript                   │
│  ███████░░░ 70%  2 years        │
│                                  │
│  ⚡ Next.js                      │
│  █████████░ 90%  2 years        │
└─────────────────────────────────┘
```

#### プログレスバーのスタイル
**背景**
- `bg-gray-200 dark:bg-gray-700`
- `h-2 rounded-full`

**プログレス**
- `bg-gradient-to-r from-primary to-secondary`
- `h-full rounded-full`
- `transition-all duration-1000 ease-out`

#### インタラクション
**ホバー時**
- スキル名を強調
- プログレスバーがわずかに拡大
- ツールチップで詳細情報表示

**アニメーション**
- スクロールで表示領域に入ったらプログレスバーがアニメーション
- `useInView` フックを使用

---

### 4. 経歴タイムライン (Issue #98)

#### デスクトップレイアウト（左右交互）
```
2024        ●───────────────────────
            │  Software Engineer
            │  Company A
            │  Next.js, TypeScript
            │

────────────────────────────●  2023
                            │  Web Developer
                            │  Company B
                            │  React, Node.js
                            │

2022        ●───────────────────────
            │  Graduated
            │  University Name
            │
```

#### モバイルレイアウト（縦一列）
```
│
●─ 2024
│  Software Engineer
│  Company A
│
│
●─ 2023
│  Web Developer
│  Company B
│
│
●─ 2022
   Graduated
```

#### タイムラインのスタイル
**縦線**
- `w-px bg-gray-300 dark:bg-gray-600`
- 左側に配置（モバイル）、中央に配置（デスクトップ）

**ドット**
- `w-4 h-4 rounded-full`
- `bg-primary border-4 border-white dark:border-gray-900`
- 現在の項目は大きく: `w-5 h-5`

**エントリーカード**
- `bg-white dark:bg-gray-800`
- `border border-gray-200 dark:border-gray-700`
- `rounded-lg p-6`
- ホバー時: `hover:shadow-lg hover:border-primary/50`

---

### 5. 多言語対応 (Issue #99)

#### 言語切り替えボタン
**配置**
- ヘッダーの右上
- ダークモード切り替えの隣

**デザイン案1: テキスト型**
```
┌──────┐
│ EN   │  ← 選択中は太字
│ / JA │  ← 非選択は通常
└──────┘
```

**デザイン案2: ドロップダウン型**
```
┌──────────┐
│ 🌐 EN ▼  │
└──────────┘
```

**デザイン案3: トグル型**
```
┌─────────────┐
│ EN │ JA     │  ← スライダー
└─────────────┘
```

**推奨**: デザイン案1（シンプルで直感的）

#### 言語切り替えアニメーション
- フェードイン・アウト (`transition-opacity duration-300`)
- コンテンツがちらつかないように

---

## アニメーション仕様

### 使用するアニメーション
1. **フェードイン**: ページ遷移、コンテンツ表示
2. **スライドイン**: サイドバー、モーダル
3. **スケール**: ホバー時の拡大
4. **スピナー**: ローディング状態

### GSAP vs Framer Motion の使い分け

**現在の採用: Framer Motion**

本プロジェクトではFramer Motionを採用しています。以下のような場面で使用：

**ページロードアニメーション**
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

**セクション遷移（スクロール連動）**
```typescript
import { useInView } from 'framer-motion'

const ref = useRef(null)
const isInView = useInView(ref, { once: true })

<motion.div
  ref={ref}
  initial={{ opacity: 0 }}
  animate={{ opacity: isInView ? 1 : 0 }}
>
```

**マイクロインタラクション**
```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

**リスト項目のスタッガードアニメーション**
```typescript
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  initial="hidden"
  animate="show"
>
  {items.map((item) => (
    <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

**GSAPの検討が必要な場合**
- 複雑なタイムライン制御（連続した複数のアニメーション）
- スクロールトリガーで高度な制御が必要
- SVGのパスアニメーション

### パフォーマンス考慮
- `transform` と `opacity` のみアニメーション（GPUアクセラレーション）
- `will-change` は慎重に使用
- `prefers-reduced-motion` への対応

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. カスタムカーソル (オプション)

参考ポートフォリオで多く採用されているカスタムカーソルの仕様です。

### デザイン仕様

**構成要素**
1. **メインカーソル**: 小さい円（10px × 10px）
2. **フォロワー**: 大きい円（40px × 40px）、遅延追従

**ビジュアルデザイン**
```css
/* メインカーソル */
.custom-cursor {
  width: 10px;
  height: 10px;
  background-color: var(--primary);
  border-radius: 50%;
  mix-blend-mode: difference; /* 背景と反転 */
}

/* フォロワー */
.custom-cursor-follower {
  width: 40px;
  height: 40px;
  border: 2px solid var(--primary);
  border-radius: 50%;
  opacity: 0.5;
}
```

### インタラクション

**デフォルト状態**
- 通常のカーソルは非表示（`cursor: none`）
- カスタムカーソルがマウスに追従

**ホバー時（リンク、ボタン）**
- メインカーソルとフォロワーが拡大（1.5倍）
- オプション: カーソルの色変更、グローエフェクト追加

**クリック時**
- リップル効果（波紋が広がる）
- または縮小 → 拡大のアニメーション

**ドラッグ時**
- カーソルの形状変更（円 → 楕円）

### 実装パターン

**基本実装**
- カスタムdiv要素でカーソル追跡
- CSSトランスフォーム使用（`translate3d` でGPU最適化）
- `requestAnimationFrame` で60fps維持

**詳細は TECH_STACK.md のカスタムカーソル実装セクション参照**

### アクセシビリティ考慮

**モバイルでは無効化**
```css
@media (max-width: 768px) {
  .custom-cursor,
  .custom-cursor-follower {
    display: none;
  }
}
```

**prefers-reduced-motionで無効化**
```css
@media (prefers-reduced-motion: reduce) {
  .custom-cursor,
  .custom-cursor-follower {
    display: none;
  }
}
```

**キーボード操作への配慮**
- フォーカス時のアウトラインを明確に表示
- カスタムカーソルが視認性を妨げないようにする

**参考ポートフォリオ:**
- aarabii/v4
- ksparth12/Portfolio-Demo

---

## 7. パーティクル/グローエフェクト

視覚的な深みを加えるエフェクトの仕様です。

### パーティクル背景

**デザインパターン**

#### Pattern 1: 星空
```
・  ・    ・
    ・  ・      ・
 ・      ・   ・
    ・  ・
```

- パーティクル数: 50-100個
- サイズ: 1-3px
- 色: 白または薄い青（`#3b82f6` の半透明）
- アニメーション: ゆっくりと浮遊、点滅

#### Pattern 2: 接続線のあるネットワーク
```
・─────・
│      │
・      ・─────・
│
・─────・
```

- パーティクル数: 30-50個
- パーティクル間の距離が近い場合に線を描画
- 線の太さ: 1px
- 線の透明度: 0.3

#### Pattern 3: マウス追従パーティクル
- マウスカーソルに引き寄せられる
- マウスから離れると元の位置に戻る

**実装ライブラリ: tsParticles**

詳細は TECH_STACK.md のパーティクル効果セクション参照。

**配置**
- セクションの背景として配置
- `position: absolute` で固定
- z-indexを低く設定（コンテンツの後ろ）
- 透明度を調整して過度に目立たないようにする

### グローエフェクト

**テキストグロー**
```css
.text-glow {
  text-shadow: 0 0 10px rgba(99, 102, 241, 0.5),
               0 0 20px rgba(99, 102, 241, 0.3),
               0 0 30px rgba(99, 102, 241, 0.2);
}
```

**ボタングロー**
```css
.button-glow {
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
  transition: box-shadow 0.3s ease;
}

.button-glow:hover {
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.6),
              0 0 40px rgba(99, 102, 241, 0.4);
}
```

**カードグロー**
```css
.card-glow {
  position: relative;
}

.card-glow::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  border-radius: inherit;
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.card-glow:hover::before {
  opacity: 0.7;
}
```

**グラデーショングロー背景**
- ヒーローセクションなどで使用
- `filter: blur()` + `opacity` でぼかし効果
- 複数のグラデーション円を重ねて動かす

```css
.gradient-blob {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
  filter: blur(60px);
  animation: float-gradient 20s ease-in-out infinite;
}
```

**パフォーマンス注意**
- `filter: blur()` は重いので使用を最小限に
- グローエフェクトはヒーローや主要セクションのみに限定

---

## 8. 高度なホバーエフェクト

参考ポートフォリオで見られるホバーエフェクトパターンです。

### カードホバー

#### Pattern 1: 3D Tilt効果
```css
.card-3d {
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

.card-3d:hover {
  transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
}
```

**JavaScript実装（マウス位置に応じた傾き）**
```typescript
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = (y - centerY) / 10
  const rotateY = (centerX - x) / 10

  e.currentTarget.style.transform =
    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}
```

#### Pattern 2: グロー + 影の変化
```css
.card-glow-hover {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.card-glow-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1),
              0 0 30px rgba(99, 102, 241, 0.3);
}
```

#### Pattern 3: オーバーレイ表示
```css
.card-overlay {
  position: relative;
  overflow: hidden;
}

.card-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.8));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-overlay:hover::after {
  opacity: 1;
}
```

### ボタンホバー

#### Pattern 1: リップル効果
```typescript
// framer-motion使用
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="relative overflow-hidden"
>
  <motion.span
    className="absolute inset-0 bg-white/20"
    initial={{ scale: 0, opacity: 1 }}
    whileHover={{ scale: 2, opacity: 0 }}
    transition={{ duration: 0.5 }}
  />
  Button
</motion.button>
```

#### Pattern 2: グラデーション移動
```css
.button-gradient {
  background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
  background-size: 200% 100%;
  transition: background-position 0.5s ease;
}

.button-gradient:hover {
  background-position: 100% 0;
}
```

#### Pattern 3: ボーダーアニメーション
```css
.button-border {
  position: relative;
  border: 2px solid transparent;
}

.button-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid var(--primary);
  border-radius: inherit;
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  transition: clip-path 0.3s ease;
}

.button-border:hover::before {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
```

### テキストホバー

#### Pattern 1: アンダーラインアニメーション
```css
.link-underline {
  position: relative;
}

.link-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: width 0.3s ease;
}

.link-underline:hover::after {
  width: 100%;
}
```

#### Pattern 2: グリッチエフェクト
```css
.text-glitch {
  position: relative;
}

.text-glitch:hover::before,
.text-glitch:hover::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.text-glitch:hover::before {
  left: 2px;
  text-shadow: -2px 0 #ff00de;
  animation: glitch-1 0.3s infinite;
}

.text-glitch:hover::after {
  left: -2px;
  text-shadow: 2px 0 #00fff9;
  animation: glitch-2 0.3s infinite;
}

@keyframes glitch-1 {
  0%, 100% { clip-path: inset(40% 0 61% 0); }
  20% { clip-path: inset(92% 0 1% 0); }
  40% { clip-path: inset(43% 0 1% 0); }
  60% { clip-path: inset(25% 0 58% 0); }
  80% { clip-path: inset(54% 0 7% 0); }
}
```

### 画像ホバー

#### Pattern 1: ズーム
```css
.image-zoom {
  overflow: hidden;
}

.image-zoom img {
  transition: transform 0.5s ease;
}

.image-zoom:hover img {
  transform: scale(1.1);
}
```

#### Pattern 2: オーバーレイ + 情報表示
```css
.image-overlay {
  position: relative;
}

.image-overlay-content {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-overlay:hover .image-overlay-content {
  opacity: 1;
}
```

#### Pattern 3: フィルター変化
```css
.image-filter img {
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.image-filter:hover img {
  filter: grayscale(0%);
}
```

---

## 9. スクロール体験の強化

### スムーズスクロール

**既存実装（Next.js 15）**
```typescript
// app/layout.tsx
// スムーズスクロールは自動的に有効
```

**カスタムスムーズスクロール（オプション）**
```css
html {
  scroll-behavior: smooth;
}
```

### パララックス効果

**シンプルなパララックス**
```typescript
import { useScroll, useTransform, motion } from 'framer-motion'

export function ParallaxSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <motion.div style={{ y }}>
      {/* Content */}
    </motion.div>
  )
}
```

**多層パララックス**
```typescript
export function MultiLayerParallax() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])

  return (
    <>
      <motion.div style={{ y: y1 }} className="layer-1">背景</motion.div>
      <motion.div style={{ y: y2 }} className="layer-2">前景</motion.div>
    </>
  )
}
```

### スクロール連動アニメーション

**要素のフェードイン（スクロール連動）**
```typescript
import { useInView } from 'framer-motion'

export function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
```

**プログレスバー連動**
```typescript
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
    />
  )
}
```

### プログレスインジケーター

**トップ固定プログレスバー**
```typescript
export function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left z-50"
    />
  )
}
```

**サイドバー目次のハイライト**
```typescript
export function TableOfContents() {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -80% 0px' }
    )

    const headings = document.querySelectorAll('h2, h3')
    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [])

  return (
    <nav>
      {/* TOC items with activeId highlighting */}
    </nav>
  )
}
```

**スクロールトゥトップボタン**
```typescript
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}
```

---

## レスポンシブデザイン

### ブレークポイント戦略
| 画面サイズ | 対象デバイス | カラム数（グリッド） |
|-----------|------------|------------------|
| < 640px   | モバイル    | 1列              |
| 640-768px | タブレット縦| 2列              |
| 768-1024px| タブレット横| 2-3列            |
| > 1024px  | デスクトップ| 3-4列            |

### モバイル最適化
- タッチターゲット最小サイズ: 44x44px
- スワイプジェスチャー対応（カルーセル等）
- フローティングアクションボタン（必要に応じて）

---

## アクセシビリティ仕様

### キーボード操作
- `Tab`: 次の要素へ
- `Shift + Tab`: 前の要素へ
- `Enter` / `Space`: 選択・実行
- `Esc`: モーダル・ドロップダウンを閉じる

### スクリーンリーダー
- 適切な `aria-label`, `aria-labelledby`, `aria-describedby`
- ランドマーク: `role="navigation"`, `role="main"`, etc.
- ライブリージョン: `aria-live="polite"` (通知等)

### カラーコントラスト
- 通常テキスト: 4.5:1 以上
- 大きなテキスト: 3:1 以上
- UI要素: 3:1 以上

---

## デザインツール・リソース

### 使用ツール
- **デザインカンプ**: Figma（推奨）
- **プロトタイプ**: Figma / コード直接実装
- **アイコン**: React Icons
- **イラスト**: undraw.co, Storyset
- **カラーパレット**: Coolors.co, Adobe Color

### 参考リソース

#### UIコンポーネントライブラリ
- [Tailwind UI](https://tailwindui.com/) - 公式コンポーネント集
- [Flowbite](https://flowbite.com/) - Tailwind CSSコンポーネント
- [Headless UI](https://headlessui.com/) - アクセシブルなヘッドレスコンポーネント
- [Radix UI](https://www.radix-ui.com/) - プリミティブコンポーネント
- [Shadcn UI](https://ui.shadcn.com/) - コピー&ペーストコンポーネント（推奨）
- [Aceternity UI](https://ui.aceternity.com/) - モダンなアニメーションコンポーネント

#### アニメーション・エフェクトライブラリ
- [Framer Motion](https://www.framer.com/motion/) - React アニメーションライブラリ（現在使用中）
- [GSAP](https://greensock.com/gsap/) - 高度なアニメーションライブラリ
- [tsParticles](https://particles.js.org/) - パーティクル効果
- [Lottie](https://lottiefiles.com/) - アニメーションファイル（JSON）

#### 参考ポートフォリオ
本プロジェクトの参考にしたポートフォリオサイトは [REFERENCE.md](./REFERENCE.md) を参照してください。

**共通デザインパターン:**
- カスタムカーソル
- パーティクル/グローエフェクト
- スムーズなスクロールアニメーション
- 3Dインタラクティブ要素（一部）
- コズミック/スペーステーマ

**技術スタック:**
- Next.js（多数）
- Tailwind CSS（圧倒的多数）
- Framer Motion / GSAP
- Shadcn UI
- Spline（3D要素）

#### インスピレーション・ギャラリー
- [Awwwards](https://www.awwwards.com/) - デザイン賞受賞サイト
- [Dribbble](https://dribbble.com/) - デザイナーコミュニティ
- [Behance](https://www.behance.net/) - クリエイティブポートフォリオ
- [CodePen](https://codepen.io/) - フロントエンドコード例

---

## 実装チェックリスト

各機能実装時に確認する項目:

- [ ] レスポンシブデザイン（モバイル・タブレット・デスクトップ）
- [ ] ダークモード対応
- [ ] キーボード操作可能
- [ ] スクリーンリーダー対応（ARIAラベル）
- [ ] 十分なカラーコントラスト
- [ ] アニメーションのパフォーマンス確認
- [ ] 既存デザインとの一貫性
- [ ] ローディング状態の表示
- [ ] エラー状態の表示
- [ ] 空状態（データなし）の表示

---

## 更新履歴
| 日付 | 更新者 | 内容 |
|------|--------|------|
| 2024-XX-XX | - | 初版作成 |
