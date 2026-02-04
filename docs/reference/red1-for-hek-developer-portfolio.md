# red1-for-hek/developer-portfolio

## 基本情報

| 項目 | 内容 |
|------|------|
| リポジトリ | [red1-for-hek/developer-portfolio](https://github.com/red1-for-hek/developer-portfolio) |
| デモサイト | https://redoyanulhaque-portfolio.vercel.app |
| スター数 | 4 |
| 最終更新 | 2026-02-01 |

## 技術スタック

| カテゴリ | 技術 |
|----------|------|
| フレームワーク | Vite + React |
| 言語 | TypeScript |
| 3D | Three.js |
| アニメーション | GSAP + ScrollTrigger |
| ルーティング | react-router-dom |
| スタイリング | CSS |

## 概要

Three.js による 3D キャラクターモデルと GSAP による高度なアニメーションを組み合わせた、視覚的にインパクトのあるポートフォリオ。水平スクロールセクションやマウス追従の頭部回転など、インタラクティブな要素が豊富。

## 詳細調査

### ディレクトリ構造

```
developer-portfolio/
├── package.json
├── vite.config.ts
├── public/
│   └── models/              # 3Dモデルファイル
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── config.ts            # 設定ファイル
    ├── components/
    │   ├── Character/
    │   │   ├── Character.tsx
    │   │   └── utils/
    │   │       └── mouseUtils.ts
    │   ├── Hero.tsx
    │   ├── Loading.tsx
    │   ├── WhatIDo.tsx
    │   ├── Work.tsx
    │   └── WorkImage.tsx
    ├── context/
    │   └── LoadingProvider.tsx
    ├── pages/
    │   └── Play.tsx         # チェスゲーム
    └── utils/
        └── textSplitter.ts   # テキスト分割ユーティリティ
```

### Three.js 3Dキャラクター実装

**マウス追従の頭部回転 (mouseUtils.ts):**

```typescript
export const handleHeadRotation = (
  headBone: THREE.Object3D,
  mouseX: number,
  mouseY: number,
  interpolationX: number,
  interpolationY: number,
  lerp: (x: number, y: number, t: number) => number
) => {
  if (!headBone) return;
  if (window.scrollY < 200) {
    const maxRotation = Math.PI / 6;
    headBone.rotation.y = lerp(
      headBone.rotation.y,
      mouseX * maxRotation,
      interpolationY
    );
    // ... Y軸回転の制限処理
  } else {
    if (window.innerWidth > 1024) {
      headBone.rotation.x = lerp(headBone.rotation.x, -0.4, 0.03);
      headBone.rotation.y = lerp(headBone.rotation.y, -0.3, 0.03);
    }
  }
};
```

**マウス/タッチイベント処理:**

```typescript
export const handleMouseMove = (
  event: MouseEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchMove = (
  event: TouchEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};
```

### GSAP ScrollTrigger 水平スクロール

**Work.tsx:**

```typescript
useEffect(() => {
  // モバイルではピン固定を無効化
  if (window.innerWidth <= 768) return;

  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    if (box.length === 0) return;
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`,
      scrub: 1,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      id: "work",
      invalidateOnRefresh: true,
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  ScrollTrigger.refresh();

  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
```

### テキスト分割ユーティリティ

**textSplitter.ts (GSAP SplitText の代替):**

```typescript
export class TextSplitter {
  chars: Element[] = [];
  words: Element[] = [];
  lines: Element[] = [];
  elements: Element[] = [];
  private originalHTML: Map<Element, string> = new Map();

  constructor(target: string | Element | NodeListOf<Element> | Element[], vars?: { type?: string; linesClass?: string }) {
    const type = vars?.type || "chars,words,lines";
    const linesClass = vars?.linesClass || "split-line";

    // 要素を取得
    let elements: Element[] = [];
    if (typeof target === "string") {
      elements = Array.from(document.querySelectorAll(target));
    } else if (target instanceof NodeList) {
      elements = Array.from(target);
    } else if (Array.isArray(target)) {
      elements = target;
    } else {
      elements = [target];
    }

    // テキスト分割処理...
  }

  revert() {
    this.elements.forEach((element) => {
      const original = this.originalHTML.get(element);
      if (original !== undefined) {
        element.innerHTML = original;
      }
    });
    // クリーンアップ
  }
}
```

### ローディングプロバイダー

```typescript
export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(() => {
    // モバイルではローディングをスキップ
    if (window.innerWidth <= 768) return false;
    return true;
  });

  useEffect(() => {
    // モバイルでは3Dモデルがないため、直接アニメーション開始
    if (window.innerWidth <= 768) {
      import("../components/utils/initialFX").then((module) => {
        if (module.initialFX) {
          setTimeout(() => {
            module.initialFX();
          }, 100);
        }
      });
    }
  }, []);

  return (
    <LoadingContext.Provider value={value}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};
```

### WhatIDo コンポーネント

```typescript
const WhatIDo = () => {
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    // クリーンアップ
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            &nbsp;I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        {/* SVG破線ボーダー */}
        <svg width="100%">
          <line x1="0" y1="0" x2="0" y2="100%"
            stroke="white" strokeWidth="2" strokeDasharray="7,7" />
        </svg>
        {/* コンテンツ */}
        <div className="what-content-in">
          <h3>{config.skills.develop.title}</h3>
          <h4>{config.skills.develop.description}</h4>
          <p>{config.skills.develop.details}</p>
          <h5>Skillset & tools</h5>
          <div className="what-content-flex">
            {config.skills.develop.tools.map((tool, index) => (
              <div key={index} className="what-tags">{tool}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
```

## 本プロジェクトへの示唆

### 採用すべきパターン
- **マウス追従 3D キャラクター**: 視覚的インパクト（パフォーマンスに注意）
- **GSAP ScrollTrigger + pin**: 水平スクロールセクション
- **TextSplitter**: テキストアニメーション用ユーティリティ
- **モバイル分岐**: 3D要素をモバイルで無効化

### 参考になる実装
- lerp によるスムーズな回転補間
- ScrollTrigger.isTouch でタッチデバイス検出
- invalidateOnRefresh でリサイズ対応

### 注意点
- Three.js はバンドルサイズが大きい
- 3Dモデルの読み込み時間に注意
- モバイルでの代替表示が必要

## 参考リンク

- [GitHub リポジトリ](https://github.com/red1-for-hek/developer-portfolio)
- [デモサイト](https://redoyanulhaque-portfolio.vercel.app)
