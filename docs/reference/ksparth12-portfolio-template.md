# ksparth12/Portfolio-Template

## 基本情報

| 項目 | 内容 |
|------|------|
| リポジトリ | [ksparth12/Portfolio-Template](https://github.com/ksparth12/Portfolio-Template) |
| デモサイト | 調査中 |
| スター数 | 調査中 |
| 最終更新 | 調査中 |

## 技術スタック

| カテゴリ | 技術 |
|----------|------|
| フレームワーク | Next.js 14 (App Router) |
| 言語 | TypeScript |
| アニメーション | Framer Motion |
| 3D | Three.js + @react-three/fiber |
| スタイリング | Tailwind CSS |
| UIコンポーネント | カスタム UI (Aceternity UI 風) |

## 概要

Next.js 14 App Router ベースのポートフォリオテンプレート。Spotlight エフェクト、CanvasRevealEffect (WebGL シェーダー)、Bento Grid レイアウトなど、高品質なビジュアルコンポーネントが特徴。再利用可能なテンプレートとして設計されている。

## 詳細調査

### ディレクトリ構造

```
Portfolio-Template/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── provider.tsx
├── components/
│   ├── ui/
│   │   ├── BentoGrid.tsx
│   │   ├── FloatingNavbar.tsx
│   │   ├── Spotlight.tsx
│   │   ├── CanvasRevealEffect.tsx
│   │   └── ...
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Footer.tsx
├── data/
│   └── index.ts
├── constants.ts
└── tailwind.config.ts
```

### Spotlight コンポーネント

```tsx
export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter id="filter" ...>
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
};
```

### CanvasRevealEffect (WebGL シェーダー)

```tsx
export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: CanvasRevealEffectProps) => {
  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full">
        <DotMatrix
          colors={colors ?? [[0, 255, 255]]}
          dotSize={dotSize ?? 3}
          opacities={opacities}
          shader={`
            float animation_speed_factor = ${animationSpeed.toFixed(1)};
            float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
            opacity *= step(intro_offset, u_time * animation_speed_factor);
            opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
          `}
          center={["x", "y"]}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};
```

**DotMatrix シェーダー:**

```glsl
precision mediump float;
in vec2 fragCoord;

uniform float u_time;
uniform float u_opacities[10];
uniform vec3 u_colors[6];
uniform float u_total_size;
uniform float u_dot_size;
uniform vec2 u_resolution;
out vec4 fragColor;

float PHI = 1.61803398874989484820459;
float random(vec2 xy) {
    return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
}

void main() {
    vec2 st = fragCoord.xy;
    // ドットマトリックス計算
    float opacity = step(0.0, st.x);
    opacity *= step(0.0, st.y);
    // ...
    fragColor = vec4(color, opacity);
    fragColor.rgb *= fragColor.a;
}
```

### Tailwind CSS カスタム設定

```typescript
const config = {
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000000",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        purple: "#CBACF9",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        moveHorizontal: {
          "0%": { transform: "translateX(-50%) translateY(-10%)" },
          "50%": { transform: "translateX(50%) translateY(10%)" },
          "100%": { transform: "translateX(-50%) translateY(-10%)" },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    // SVG背景パターン生成
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
```

### テンプレート機能

**README.md より:**

- Hero Section: Spotlight エフェクト + CTA ボタン
- Bento Grid Layout: モダンなグリッドレイアウト
- Projects Showcase: GitHub連携のプロジェクトカード
- Testimonials Section: アニメーション付きカルーセル
- Contact Form: メール連携
- Dark/Light Theme サポート
- SEO 最適化
- レスポンシブデザイン

### カスタマイズ方法

```
- Colors: tailwind.config.ts でカスタムテーマ
- Content: data/index.ts で個人情報
- Projects: constants.ts でプロジェクトデータ
- Styling: app/globals.css でグローバルスタイル
```

## 本プロジェクトへの示唆

### 採用すべきパターン
- **Spotlight SVG**: スポットライト効果（SVGフィルター）
- **CanvasRevealEffect**: WebGL シェーダーによる高品質エフェクト
- **bg-grid / bg-dot**: SVG背景パターンのTailwindプラグイン
- **カスタムキーフレーム**: spotlight, shimmer, moveHorizontal

### 参考になる実装
- mini-svg-data-uri による SVG のインライン化
- flattenColorPalette でTailwindカラーを動的に取得
- @react-three/fiber によるReact内での Three.js 統合

### テンプレートとしての設計
- data/ と constants.ts でデータを分離
- 設定ファイルのコメント付きガイド
- デプロイボタン（Vercel）の提供

## 参考リンク

- [GitHub リポジトリ](https://github.com/ksparth12/Portfolio-Template)
