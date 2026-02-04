# asigdel29/matrixportfolio

## 基本情報

| 項目 | 内容 |
|------|------|
| リポジトリ | [asigdel29/matrixportfolio](https://github.com/asigdel29/matrixportfolio) |
| デモサイト | なし（設定なし） |
| スター数 | 16 |
| 最終更新 | 2025-12-01 |

## 技術スタック

| カテゴリ | 技術 |
|----------|------|
| フレームワーク | Create React App (React 18.2.0) |
| 言語 | JavaScript |
| ルーティング | react-router-dom 6.11.2 |
| ターミナルUI | react-console-emulator |
| パーティクル | react-rain-animation |
| アニメーション | react-transition-group + CSS |
| スタイリング | 純粋CSS（Tailwind不使用） |

## 概要

映画「マトリックス」をテーマにした非常にユニークなポートフォリオ。ターミナルエミュレーターをUIとして採用し、Canvas APIによるMatrixRain効果が特徴。**Next.jsもTailwind CSSも使用していない。**

## 詳細調査

### ディレクトリ構造

```
matrixportfolio/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
└── src/
    ├── App.css
    ├── App.js
    ├── index.css
    ├── index.js
    ├── Styles/
    │   └── styles.css
    ├── pages/
    │   ├── About.js
    │   ├── MainPage.js
    │   ├── Misc.js
    │   ├── Projects.js
    │   └── Research.js
    └── Components/
        ├── About Page/
        │   ├── AboutModal.js
        │   └── PageContent/
        ├── Misc Page/
        │   ├── MiscModal.js
        │   └── Page Content/
        ├── Page Layout/
        │   ├── Layout.js
        │   ├── MatrixRain.js
        │   └── styles.css
        ├── Project Page/
        │   ├── ProjectsModal.js
        │   └── PageContent/
        └── Research Page/
            ├── ResearchModal.js
            └── PageContent/
```

### マトリックスエフェクト実装

**MatrixRain.js (Canvas API):**

```javascript
const MatrixRain = () => {
    useEffect(() => {
        const canvas = document.getElementById('matrix-rain');
        const context = canvas.getContext('2d');

        // キャンバスサイズをウィンドウに合わせる
        const setCanvasDimensions = () => {
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
        }
        setCanvasDimensions();
        window.addEventListener('resize', setCanvasDimensions);

        // カタカナ文字で映画「マトリックス」風を再現
        const characters = 'エウエアエイウアエイウア...';

        const columns = canvas.width / 20;
        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        function draw() {
            // 半透明の黒で塗りつぶし（残像効果）
            context.fillStyle = 'rgba(0, 0, 0, 0.05)';
            context.fillRect(0, 0, canvas.width, canvas.height);

            // 緑色の文字
            context.fillStyle = '#0F0';
            context.font = '20px Courier';

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                context.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        const matrixInterval = setInterval(draw, 33); // 約30fps

        return () => {
            clearInterval(matrixInterval);
            window.removeEventListener('resize', setCanvasDimensions);
        }
    }, []);

    return <canvas id="matrix-rain" className="matrix-rain"></canvas>;
};
```

### ターミナルエミュレーター体験

**Layout.js:**

```javascript
const Layout = ({ commands, children, welcomeMessage }) => {
    const [dynamicWelcome, setDynamicWelcome] = useState('');
    const [isInputAllowed, setInputAllowed] = useState(false);

    // タイピングアニメーションでウェルカムメッセージを表示
    useEffect(() => {
        let messageIndex = 0;
        const welcomeMessageInterval = setInterval(() => {
            if (messageIndex < welcomeText.length) {
                setDynamicWelcome((prev) => prev + welcomeText[messageIndex]);
                messageIndex++;
            } else {
                setInputAllowed(true);
                clearInterval(welcomeMessageInterval);
            }
        }, 45);
        return () => clearInterval(welcomeMessageInterval);
    }, [welcomeMessage]);

    return (
        <div style={{ position: 'relative' }}>
            <MatrixRain />
            <div className="terminal-container" style={terminalContainerStyle}>
                <p style={{ color: '#00FF00', fontFamily: 'monospace' }}>
                    {dynamicWelcome}
                </p>
                <Console
                    commands={commands}
                    promptLabel={'Anu@Matrix:~$'}
                />
            </div>
        </div>
    );
};
```

**コマンドベースナビゲーション:**

```javascript
// MainPage.js
const commands = {
    ls: {
        description: 'List all pages',
        fn: () => 'about projects research misc',
    },
    about: {
        description: 'Go to About page',
        fn: () => {
            setTimeout(() => navigate('/about'), 1200);
            return 'Redirecting...';
        },
    },
};
```

### カラーパレット（マトリックステーマ）

```css
/* インラインスタイルとCSSで定義 */
背景: #000000 (黒)
メイン: #00FF00, #0F0 (マトリックスグリーン)
ボーダー: #007500 (ダークグリーン)
テキスト: #00D100 (明るい緑)
```

### コンポーネント設計

```
App.js (ルーティング)
├── MainPage.js
├── About.js
├── Projects.js
├── Research.js
└── Misc.js
    └── 各ページが Layout コンポーネントを使用
        ├── MatrixRain.js (背景アニメーション)
        ├── Console (react-console-emulator)
        └── *Modal.js (コンテンツモーダル)
```

### パフォーマンス最適化

1. **useEffect クリーンアップ**: interval と eventListener の適切な解除
2. **約30fps アニメーション**: `setInterval(draw, 33)`
3. **レスポンシブ Canvas**: resize イベントでキャンバスサイズ動的調整

## 本プロジェクトへの示唆

### ユニークな点
- **ターミナルUI**: 開発者向けポートフォリオとして差別化
- **Canvas API**: パフォーマンス良好なカスタムアニメーション
- **コマンドパターン**: ナビゲーションをコマンドオブジェクトで管理

### 参考になる実装
- MatrixRain の残像効果（`rgba(0, 0, 0, 0.05)` で塗りつぶし）
- タイピングアニメーション（setInterval でウェルカムメッセージ）
- react-console-emulator によるターミナル体験

## 参考リンク

- [GitHub リポジトリ](https://github.com/asigdel29/matrixportfolio)
