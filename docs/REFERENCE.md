# リファレンスリスト

## 概要
以下は参考にしたポートフォリオサイトのリストです。これらから得られた知見はDESIGN_SPEC.mdとTECH_STACK.mdに反映されています。

---

## 調査結果サマリー

### 共通技術スタック
- **フレームワーク**: Next.js（多数）、React + Vite
- **スタイリング**: Tailwind CSS（圧倒的多数）、Bootstrap、SCSS
- **アニメーション**: Framer Motion（多数）、GSAP（多数）
- **UIライブラリ**: Shadcn UI、Aceternity UI
- **3D/高度なビジュアル**: Three.js、Spline Runtime
- **その他**: React Query、Email.js、Resend、React Router
- **デプロイ**: Vercel（最多）、Netlify

### 共通デザインパターン
- **カスタムカーソル**: マウス追従カーソル、ホバー時の拡大エフェクト
- **パーティクルエフェクト**: 星空、浮遊する点、接続線ネットワーク
- **グローエフェクト**: テキスト・ボタンのグロー、グラデーション背景
- **スムーズなスクロールアニメーション**: パララックス、フェードイン
- **3Dインタラクティブ要素**: Three.js、Splineを使用した3Dオブジェクト
- **テーマ**: コズミック/スペース、グラデーション（青→紫→ピンク）

### 人気のカラーテーマ
- **紫系**: #6366f1（Indigo）、#8b5cf6（Violet）
- **青系**: #3b82f6（Blue）、#667eea
- **ピンク系**: #ec4899（Pink）、#f093fb
- **グラデーション**: 青→紫→ピンクのグラデーション

### 本プロジェクトとの差分

**既に実装済み:**
- ✅ Next.js 15, React, TypeScript
- ✅ Tailwind CSS
- ✅ Framer Motion
- ✅ ダークモード（next-themes）
- ✅ レスポンシブデザイン

**ドキュメントに追加した内容:**
- ✅ GSAP vs Framer Motionの比較
- ✅ Shadcn UIの検討
- ✅ カスタムカーソルの実装案
- ✅ パーティクル/グローエフェクトの実装案
- ✅ Three.js/Splineの3D要素検討
- ✅ Email.js/Resendのコンタクトフォーム実装
- ✅ 具体的なカラーパレット定義
- ✅ 高度なホバーエフェクトパターン

---

## [developer-portfolios](https://github.com/emmabostian/developer-portfolios)

開発者ポートフォリオのキュレーションリスト。1000以上のポートフォリオサイトが登録されており、インスピレーションを得るのに最適。

---

## 個別ポートフォリオ

### [red1-for-hek/developer-portfolio](https://github.com/red1-for-hek/developer-portfolio)

**技術スタック:**
- React
- TypeScript
- GSAP（アニメーション）
- Three.js（3Dグラフィックス）
- Vite

**特徴:**
- 3Dアニメーションを多用
- WebGLによる高度なビジュアルエフェクト
- GSAPによる滑らかなアニメーション

**本プロジェクトへの示唆:**
- Three.jsは学習コストとバンドルサイズが大きいため、個人ポートフォリオには過剰
- GSAPは高度なアニメーション制御が可能だが、Framer Motionで十分な場合が多い

---

### [adityadomle/My-Portfolio](https://github.com/adityadomle/My-Portfolio)

**技術スタック:**
- React
- TypeScript
- Vite
- Tailwind CSS

**特徴:**
- シンプルでクリーンなデザイン
- Tailwind CSSによる高速開発
- レスポンシブ対応

---

### [Tajmirul/portfolio-2.0](https://github.com/Tajmirul/portfolio-2.0)

**技術スタック:**
- Next.js
- TypeScript
- Tailwind CSS
- GSAP

**特徴:**
- 最新のデザイントレンド
- スムーズなページ遷移アニメーション
- GSAPによる高度なタイムライン制御

**本プロジェクトへの示唆:**
- Next.js + Tailwind CSSの組み合わせは非常に人気
- GSAPは複雑なアニメーションシーケンスに有用

---

### [ksparth12/Portfolio-Demo](https://github.com/ksparth12/Portfolio-Demo)

**技術スタック:**
- React
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI
- Framer Motion

**特徴:**
- **カスタムカーソル**: マウス追従カーソル、ホバー時の拡大
- **グローエフェクト**: ボタンやカードにグロー効果
- **紫テーマ**: #6366f1（Indigo）をメインカラーに使用
- Shadcn UIによる高品質なコンポーネント

**本プロジェクトへの示唆:**
- カスタムカーソルは視覚的なインパクトが大きい
- グローエフェクトでモダンな雰囲気を演出
- Shadcn UIは本プロジェクトでも検討価値あり

---

### [ksparth12/Portfolio-Template](https://github.com/ksparth12/Portfolio-Template)

**技術スタック:**
- React
- TypeScript
- Tailwind CSS
- Framer Motion

**特徴:**
- テンプレートとして再利用可能な構造
- Framer Motionによるスムーズなアニメーション
- モダンなレイアウト

---

### [aarabii/v4](https://github.com/aarabii/v4)

**技術スタック:**
- React
- Bootstrap
- Email.js

**特徴:**
- **カスタムカーソル**: 独自のカーソルデザイン
- **コンタクトフォーム**: Email.jsによるサーバーレスなメール送信
- Bootstrapによる迅速なUI構築

**本プロジェクトへの示唆:**
- Email.jsはコンタクトフォームの実装に最適（サーバーレス）
- カスタムカーソルの実装例として参考になる

---

### [aarabii/An](https://github.com/aarabii/An)

**技術スタック:**
- React
- Tailwind CSS
- Framer Motion

**特徴:**
- ミニマルなデザイン
- アニメーションが控えめで洗練されている

---

### [Abhiz2411/3D-interactive-portfolio](https://github.com/Abhiz2411/3D-interactive-portfolio)

**技術スタック:**
- Next.js
- Shadcn UI
- Framer Motion
- Spline Runtime

**特徴:**
- **3Dインタラクティブキーボード**: Splineで作成した3Dモデル
- **コズミックテーマ**: 宇宙的なビジュアルデザイン
- Shadcn UIによる高品質なコンポーネント

**本プロジェクトへの示唆:**
- Splineはノーコードで3D要素を作成できる
- 3D要素は差別化に有効だが、パフォーマンスに注意
- コズミックテーマは視覚的なインパクトが大きい

---

### [Nahuel61920/portafolio-Nahuel](https://github.com/Nahuel61920/portafolio-Nahuel)

**技術スタック:**
- Next.js
- Tailwind CSS
- Framer Motion

**特徴:**
- シンプルでわかりやすいナビゲーション
- アニメーションが適度に使用されている

---

### [asigdel29/matrixportfolio](https://github.com/asigdel29/matrixportfolio)

**技術スタック:**
- React
- TypeScript
- Tailwind CSS

**特徴:**
- マトリックス風のビジュアルエフェクト
- ユニークなテーマ

---

### [aditiarya37/my-portfolio-v2](https://github.com/aditiarya37/my-portfolio-v2)

**技術スタック:**
- Next.js
- Tailwind CSS
- Framer Motion

**特徴:**
- モダンなレイアウト
- パフォーマンスに配慮した設計

---

## 技術選定の教訓

### 採用すべき技術
1. **Next.js + Tailwind CSS**: 業界標準、高速開発
2. **Framer Motion**: React統合が優れている、学習曲線が緩やか
3. **Shadcn UI**: カスタマイズ性が高い、依存が少ない
4. **Email.js**: サーバーレスなコンタクトフォーム実装

### 慎重に検討すべき技術
1. **Three.js**: 学習コスト高、バンドルサイズ大、個人ポートフォリオには過剰
2. **Spline**: デザイナーがいる場合やプロトタイプには有用、本番環境では慎重に
3. **GSAP**: 高度なアニメーション制御が必要な場合のみ、通常はFramer Motionで十分
4. **tsParticles**: 視覚的なインパクトは大きいが、パフォーマンスへの影響を考慮

### 実装推奨度

**高（すぐに検討可能）:**
- カスタムカーソル（モバイルでは無効化）
- グローエフェクト（ヒーローセクション等）
- スムーズなスクロールアニメーション
- Shadcn UI（ブログやフィルタUI）

**中（必要に応じて検討）:**
- パーティクル背景（パフォーマンスに注意）
- Email.js（コンタクトフォーム実装時）

**低（基本的に不要）:**
- Three.js（過剰）
- Spline（過剰、デモ目的以外）
- GSAP（Framer Motionで十分）

---

## 関連ドキュメント

- [DESIGN_SPEC.md](./DESIGN_SPEC.md) - UI/UXデザイン仕様（このリファレンスの知見を反映）
- [TECH_STACK.md](./TECH_STACK.md) - 技術選定詳細（実装方法を記載）
- [ARCHITECTURE.md](./ARCHITECTURE.md) - アーキテクチャ設計
- [REQUIREMENTS.md](./REQUIREMENTS.md) - 要件定義
