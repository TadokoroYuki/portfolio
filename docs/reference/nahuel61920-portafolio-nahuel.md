# Nahuel61920/portafolio-Nahuel

## 基本情報

| 項目 | 内容 |
|------|------|
| リポジトリ | [Nahuel61920/portafolio-Nahuel](https://github.com/Nahuel61920/portafolio-Nahuel) |
| デモサイト | https://nahuel61920.github.io/portafolio-Nahuel/ |
| スター数 | 61 |
| 最終更新 | 2026-01-25 |

## 技術スタック

| カテゴリ | 技術 |
|----------|------|
| フレームワーク | Create React App (React 18.0.0) |
| 言語 | JavaScript |
| ルーティング | react-router-dom 6.3.0 (HashRouter) |
| アニメーション | AOS (Animate On Scroll) |
| パーティクル | react-tsparticles |
| カルーセル | Swiper 8.1.4 |
| 多言語 | react-intl (英語/スペイン語) |
| スクロール | react-scroll |
| タイピング | react-typical |
| スタイリング | 純粋CSS（Tailwind不使用） |
| デプロイ | GitHub Pages (gh-pages) |

## 概要

Create React App ベースのポートフォリオ。**Next.js、Tailwind CSS、Framer Motion は使用していない。** 代わりに AOS + react-tsparticles + 純粋な CSS でスタイリング。react-intl による多言語対応（英語/スペイン語）が特徴。

## 詳細調査

### ディレクトリ構造

```
portafolio-Nahuel/
├── package.json
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
└── src/
    ├── App.css
    ├── App.js
    ├── index.js
    ├── components/
    │   ├── ButtomGet/
    │   ├── Content/
    │   ├── DarkMode/
    │   ├── Footer/
    │   ├── Header/
    │   ├── Main/
    │   │   ├── About.jsx
    │   │   ├── Contact.jsx
    │   │   ├── Project.jsx
    │   │   └── Service.jsx
    │   ├── ParticlesBg/
    │   │   ├── ParticleBackground.jsx
    │   │   ├── particle-config.js
    │   │   └── ParticlesHeader/
    │   └── ScrollToTop/
    ├── context/
    │   └── Context.jsx
    ├── cv/
    ├── img/
    ├── language/
    │   ├── en.json
    │   └── es.json
    └── pages/
        ├── About/
        ├── Contact/
        ├── Home/
        ├── Project/
        └── Service/
```

### ナビゲーション設計

**デュアルナビゲーションシステム:**

```jsx
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

// ページ内スクロール
<Link to="inicio" spy={true} offset={-150} href="#inicio">
  <FormattedMessage id='home' defaultMessage='Home' />
</Link>

// ロゴはページ遷移
<NavLink className="logo" to="/">
  <p>=(<span>NAHUEL61920</span>)=></p>
</NavLink>
```

**HashRouter (GitHub Pages対応):**

```jsx
import { HashRouter } from "react-router-dom";

root.render(
  <HashRouter>
    <LangProvider>
      <App />
    </LangProvider>
  </HashRouter>
);
```

### アニメーションパターン (AOS)

**data属性によるスクロールアニメーション:**

```jsx
<div className="columns" data-aos="fade-right" data-aos-delay="300">
<div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
<div data-aos="fade-up" data-aos-delay="600">
<div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
```

**使用されているAOSアニメーション:**
- `fade-up` - 下から上へフェードイン
- `fade-right` - 右からフェードイン
- `fade-left` - 左からフェードイン
- `flip-left` - 左回転フリップ

### react-tsparticles

**背景パーティクル:**

```jsx
<Particles id="particles" className="particles-css" params={ParticleConfig} />
```

**設定:**
- 六角形ポリゴン (polygon sides: 6)
- 移動速度: 8
- パーティクル数: 6
- サイズアニメーション有効

**ヘッダーパーティクル:**
- スキルアイコン画像をパーティクルとして使用 (HTML, CSS, JS, React, Node.js等)
- 回転アニメーション付き
- ランダムな透明度変化

### Swiper カルーセル

```jsx
<Swiper
  spaceBetween={30}
  loop={true}
  grabCursor={true}
  centeredSlides={true}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  modules={[Pagination, Autoplay]}
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
```

### CSS変数によるテーマ管理

```css
:root {
  --green: #00e5fe;
  --secundario: #15b8ca;
  --terciario: #00fefe;
  --black: #121f41;
  --light-color: #788E9C;
  --light-color-white: #353e44;
  --white: #fff;
  --borde: .1rem solid rgba(0, 0, 0, .1);
  --box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.1);
}
```

### ダークモード実装

```jsx
// DarkMode.jsx - body.dark / body.light でクラス切り替え
const switchTheme = (e) => {
  if (theme === darkTheme) {
    body.classList.replace(darkTheme, lightTheme);
    localStorage.setItem("theme", "light");
  } else {
    body.classList.replace(lightTheme, darkTheme);
    localStorage.setItem("theme", "dark");
  }
};
```

### 多言語対応 (react-intl)

```jsx
// LangProvider でコンテキスト提供
<IntlProvider locale={locale} messages={messages[locale]}>
  {children}
</IntlProvider>

// 使用例
<FormattedMessage id='home' defaultMessage='Home' />
```

### レスポンシブデザイン

```css
@media (max-width: 990px) {
  html { font-size: 55%; }
}
@media (max-width: 760px) {
  #menu-btn { display: block; }
  .site-header .navbar { clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); }
}
@media (max-width: 570px) {
  html { font-size: 50%; }
}
```

## 本プロジェクトへの示唆

### 参考になる点
- **AOS**: data属性によるシンプルなスクロールアニメーション
- **react-intl**: 多言語対応の実装パターン
- **HashRouter**: GitHub Pages へのデプロイ対応
- **react-tsparticles**: スキルアイコンをパーティクルとして表示

### 代替を検討すべき点
- AOS → Framer Motion の whileInView（より柔軟）
- 純粋CSS → Tailwind CSS（開発効率向上）
- CRA → Next.js または Vite（パフォーマンス向上）

## 参考リンク

- [GitHub リポジトリ](https://github.com/Nahuel61920/portafolio-Nahuel)
- [デモサイト](https://nahuel61920.github.io/portafolio-Nahuel/)
