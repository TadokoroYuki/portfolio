# Abhiz2411/3D-interactive-portfolio

## 基本情報

| 項目 | 内容 |
|------|------|
| リポジトリ | [Abhiz2411/3D-interactive-portfolio](https://github.com/Abhiz2411/3D-interactive-portfolio) |
| デモサイト | https://www.abhijitzende.com/ |
| スター数 | 276 |
| 最終更新 | 2026-02-02 |

## 技術スタック

| カテゴリ | 技術 |
|----------|------|
| フレームワーク | Next.js 14.2.3 (App Router) |
| 言語 | TypeScript |
| UIライブラリ | React 18 |
| 3Dランタイム | @splinetool/react-spline, @splinetool/runtime, Three.js |
| アニメーション | Framer Motion + GSAP + @gsap/react |
| UIコンポーネント | Radix UI, shadcn/ui, Aceternity UI |
| スタイリング | Tailwind CSS + SASS |
| スムーススクロール | Lenis |
| バリアント | class-variance-authority (CVA) |
| その他 | Socket.io (リアルタイム), Resend (メール), Zod (バリデーション) |

## 概要

Splineによる3Dインタラクティブキーボード、GSAP + ScrollTriggerによるスクロール連動アニメーション、Framer Motion + Aceternity UIを組み合わせた高度なポートフォリオ。276スターを獲得した人気リポジトリ。

## 詳細調査

### ディレクトリ構造

```
3D-interactive-portfolio/
├── components.json          # Shadcn UI設定
├── next.config.mjs
├── package.json
├── tailwind.config.ts
├── public/
└── src/
    ├── app/
    │   ├── about/
    │   ├── api/
    │   ├── blog/
    │   ├── contact/
    │   ├── projects/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── sections/          # hero, skills, projects, contact
    │   ├── ui/                # Shadcn + Aceternity UI
    │   ├── header/
    │   ├── footer/
    │   ├── preloader/
    │   ├── realtime/
    │   ├── Particles.tsx
    │   ├── animated-background.tsx
    │   ├── reveal-animations.tsx
    │   └── smooth-scroll.tsx
    ├── contexts/
    ├── data/
    ├── hooks/
    ├── lib/
    ├── types/
    └── utils/
```

### Spline 3Dモデル統合

**animated-background.tsx:**

```typescript
const Spline = React.lazy(() => import("@splinetool/react-spline"));

<Spline
  ref={splineContainer}
  onLoad={(app: Application) => {
    setSplineApp(app);
    bypassLoading();
  }}
  scene="/assets/skills-keyboard.spline"
/>
```

**セクション別の状態管理:**

```typescript
const STATES = {
  hero: {
    desktop: { scale: { x: 0.25, y: 0.25, z: 0.25 }, position: { x: 400, y: -200, z: 0 } },
    mobile: { scale: { x: 0.15, y: 0.15, z: 0.15 }, position: { x: 0, y: -200, z: 0 } }
  },
  skills: { /* ... */ },
  projects: { /* ... */ },
  contact: { /* ... */ },
};
```

**インタラクティブキーボード:**

```typescript
splineApp.addEventListener("mouseHover", handleMouseHover);
splineApp.addEventListener("keyDown", (e) => {
  const skill = SKILLS[e.target.name as SkillNames];
  splineApp.setVariable("heading", skill.label);
  splineApp.setVariable("desc", skill.shortDescription);
});
```

**GSAP + ScrollTrigger連動:**

```typescript
gsap.timeline({
  scrollTrigger: {
    trigger: "#skills",
    start: "top 50%",
    scrub: true,
    onEnter: () => {
      gsap.to(kbd.scale, { ...keyboardStates("skills").scale, duration: 1 });
    }
  }
});
```

### Particles コンポーネント（コズミックテーマ）

```typescript
// Canvas APIを使用した浮遊パーティクルシステム
const circleParams = (): Circle => ({
  x: Math.floor(Math.random() * canvasSize.current.w),
  y: Math.floor(Math.random() * canvasSize.current.h),
  size: Math.floor(Math.random() * 2) + 0.1,
  alpha: 0,
  targetAlpha: parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
  dx: (Math.random() - 0.5) * 0.2,
  dy: (Math.random() - 0.5) * 0.2,
  magnetism: 0.1 + Math.random() * 4,
});

// マウス追従効果
circle.translateX += (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;
```

### Shadcn UI + Aceternity UI パターン

**components.json:**

```json
{
  "style": "default",
  "rsc": true,
  "tailwind": {
    "baseColor": "slate",
    "cssVariables": true
  }
}
```

**CVAによるバリアント管理:**

```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md...",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "border border-input bg-background",
        ghost: "",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
  }
);
```

**Aceternity UI パターン:**
- **FloatingDock**: マウス位置に応じてアイコンサイズが変化
- **3D Pin**: ホバー時に3D回転エフェクト

### Framer Motion アニメーションパターン

**BlurIn:**

```typescript
const defaultVariants = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};
```

**BoxReveal (スクロール連動):**

```typescript
const isInView = useInView(ref, { once });

useEffect(() => {
  if (isInView) {
    mainControls.start("visible");  // { opacity: 1, y: 0 }
    slideControls.start("visible"); // { left: "100%" }
  }
}, [isInView]);
```

**useSpring (物理ベース):**

```typescript
let width = useSpring(widthTransform, {
  mass: 0.1,
  stiffness: 150,
  damping: 12,
});
```

### パフォーマンス最適化

1. **React.lazy + Suspense**: Spline コンポーネントの遅延読み込み
2. **Lenis スムーススクロール**: `duration: 2`
3. **Preloader**: GSAP タイムラインで読み込み制御
4. **useInView**: ビューポート内に入ったときのみアニメーション
5. **requestAnimationFrame**: Canvas 最適化
6. **useMediaQuery**: モバイル/デスクトップで状態切り替え

## 本プロジェクトへの示唆

### 採用すべきパターン
- **Spline 3Dモデル + GSAP ScrollTrigger**: スクロール連動3Dアニメーション
- **React.lazy**: 3Dモデルの遅延読み込み
- **Aceternity UI**: 高品質なUIコンポーネント
- **Particles + マウス追従**: コズミックな雰囲気

### 参考になる実装
- セクション別の3Dモデル状態管理
- Spline変数によるインタラクション
- useSpring による物理ベースアニメーション

## 参考リンク

- [GitHub リポジトリ](https://github.com/Abhiz2411/3D-interactive-portfolio)
- [デモサイト](https://www.abhijitzende.com/)
