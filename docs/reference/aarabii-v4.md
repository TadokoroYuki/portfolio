# aarabii/v4

## 基本情報

| 項目 | 内容 |
|------|------|
| リポジトリ | [aarabii/v4](https://github.com/aarabii/v4) |
| デモサイト | なし（Heroku） |
| スター数 | 51 |
| 最終更新 | 調査時点 |

## 技術スタック

| カテゴリ | 技術 |
|----------|------|
| フレームワーク | Create React App (React) |
| 言語 | JavaScript |
| スタイリング | 純粋CSS（CSS変数） |
| アイコン | React Icons |
| ルーティング | react-router-dom |

## 概要

Create React App ベースのシンプルなポートフォリオ。**Tailwind CSS、Framer Motion は使用していない。** CSS変数によるテーマ管理とカスタムカーソルが特徴。JSON設定ファイルでプロジェクトや個人情報を管理。

## 詳細調査

### ディレクトリ構造

```
aarabii/v4/
├── package.json
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
└── src/
    ├── App.css
    ├── App.js
    ├── index.css
    ├── index.js
    ├── config.json           # 設定ファイル（個人情報・プロジェクト）
    ├── assets/
    ├── styles/
    │   ├── About.css
    │   ├── Contact.css
    │   ├── Exp.css
    │   ├── Footer.css
    │   ├── githubRepo.css
    │   └── ...
    └── components/
        └── Section/
            ├── Nav.jsx
            ├── About.jsx
            ├── Contact.jsx
            ├── Exp.jsx
            ├── Footer.jsx
            └── GithubRepo.jsx
```

### コンポーネント設計

**設定ファイルベースのデータ管理 (config.json):**

```json
{
  "name": "Aarab nishchal",
  "firstName": "Aarab",
  "lastName": "Nishchal",
  "bio": "I build things that lives on Internet.",
  "githubUsername": "losier",
  "instagramUsername": "aarab.ii",
  "linkdinUsername": "aarab-nishchal",
  "mail": "nishu@duck.com",
  "numberOfAchivement": "69",
  "myImage": "https://...",
  "demoProjects": [
    {
      "id": 1,
      "image": "...",
      "title": "v4",
      "github": "https://github.com/losier/v4",
      "demo": "http://..."
    }
  ]
}
```

**About コンポーネント（GitHub API連携）:**

```jsx
const About = () => {
  const [projectNumber, setProjectNumber] = useState(0);

  const getRepoCount = async () => {
    fetch(`https://api.github.com/users/${config.githubUsername}`)
      .then((response) => response.json())
      .then((data) => {
        setProjectNumber(data.public_repos);
      })
      .catch((err) => {
        setProjectNumber(config.demoProjects.length);
      });
  };

  // ...
};
```

### CSS変数によるテーマ管理

```css
:root {
  --color-bg: #1f1f38;
  --color-bg-variant: #2c2c6c;
  --color-primary: #4db5ff;
  --color-primary-variant: rgba(77, 181, 255, 0.4);
  --color-white: #ffffff;
  --color-light: rgba(255, 255, 255, 0.6);
  --color-light-gray: #dbdbdb;
  --color-neon: #64ffda;

  --transition: all 400ms ease;

  --container-width-lg: 75%;
  --container-width-md: 86%;
  --container-width-ms: 90%;
}
```

### カスタムカーソル

```css
* {
  cursor: none;  /* デフォルトカーソル非表示 */
}

/* カスタムカーソルの実装（JavaScript側） */
```

### ナビゲーション

```jsx
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <ul>
        <li>
          <a
            href={"#"}
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            <span>1.</span> Home
          </a>
        </li>
        <li>
          <a
            href={"#about"}
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            <span>2.</span> About
          </a>
        </li>
        {/* ... */}
      </ul>
    </nav>
  );
};
```

### プロジェクトカード

```jsx
const GithubRepo = () => {
  return (
    <section id="projects">
      <h5>My recent works.</h5>
      <h2>Projects</h2>

      <div className="container githubRepo_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="githubRepo_item">
              <div className="gitProject_item_image">
                <img loading="lazy" src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="githubRepo_item_cta">
                <a href={github} className="btn">Github</a>
                <a href={demo} className="btn btn-primary">Demo</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
```

### レスポンシブデザイン

```css
/* ==================== MEDIA QUERIES (MEDIUM DEVICES) ==================== */
@media screen and (max-width: 1024px) {
  .container {
    width: var(--container-width-md);
  }

  section {
    margin-top: 6rem;
  }
}

/* ==================== MEDIA QUERIES (SMALL DEVICES) ==================== */
@media screen and (max-width: 600px) {
  .container {
    width: var(--container-width-ms);
  }

  section > h2 {
    margin-bottom: 2rem;
  }
}
```

### コンタクトフォームスタイル

```css
.contact_option {
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: var(--transition);
}

.contact_option:hover {
  background: transparent;
  border-color: var(--color-primary-variant);
}

/* グラデーションアンダーラインエフェクト */
.status {
  background: linear-gradient(
      to right,
      rgba(100, 200, 200, 1),
      rgba(100, 200, 200, 1)
    ),
    linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
    );
  background-size: 100% 3px, 0 3px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
}

.status:hover {
  background-size: 0 3px, 100% 3px;
}
```

## 本プロジェクトへの示唆

### 参考になる点
- **JSON設定ファイル**: プロジェクト・個人情報の一元管理
- **GitHub API連携**: リポジトリ数の動的取得
- **CSS変数**: テーマカラーの管理
- **グラデーションアンダーライン**: ホバーエフェクト

### 代替を検討すべき点
- CRA → Next.js または Vite（パフォーマンス向上）
- 純粋CSS → Tailwind CSS（開発効率向上）
- 手動アニメーション → Framer Motion（より洗練されたアニメーション）

## 参考リンク

- [GitHub リポジトリ](https://github.com/aarabii/v4)
