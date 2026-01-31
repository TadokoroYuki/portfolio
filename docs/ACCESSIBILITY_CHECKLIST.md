# アクセシビリティチェックリスト

このドキュメントは、ポートフォリオサイトのアクセシビリティを確認するためのチェックリストです。

## 実装済みの項目 ✅

### キーボードナビゲーション
- [x] すべてのインタラクティブ要素がキーボードでアクセス可能
- [x] フォーカス表示が明確（青い outline が表示される）
- [x] スキップリンクの実装（Tab キーでメインコンテンツへジャンプ可能）

### スタイリング
- [x] `prefers-reduced-motion` への対応（アニメーションを減らす設定に対応）
- [x] ダークモード対応

### セマンティックHTML
- [x] `<main>` 要素の使用
- [x] `<section>` 要素による適切な区分け
- [x] 見出し階層の適切な使用（h1, h2, h3）

### SEO対策
- [x] メタタグの設定（title, description, keywords）
- [x] Open Graph 対応
- [x] lang属性の設定（日本語）

## ユーザーが確認・対応すべき項目 📋

### 画像のアクセシビリティ

#### プロフィール画像
- [ ] プロフィール画像を追加する場合、適切な alt 属性を設定
  - 例: `alt="田所ユキのプロフィール写真"`

#### プロジェクト画像
- [ ] プロジェクトのスクリーンショットを追加する場合、説明的な alt 属性を設定
  - 例: `alt="ポートフォリオサイトのトップページ"`
  - 装飾的な画像の場合: `alt=""` （空文字列）

### カラーコントラスト
- [ ] カラーコントラスト比を確認（WCAG AA基準: 4.5:1以上）
  - 推奨ツール: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
  - 現在のカラースキームを確認:
    - ライトモード: テキスト #171717 / 背景 #ffffff
    - ダークモード: テキスト #ededed / 背景 #0a0a0a

### スクリーンリーダーテスト
- [ ] スクリーンリーダーで各セクションを確認
  - macOS: VoiceOver (Cmd + F5)
  - Windows: NVDA または JAWS
  - 確認項目:
    - すべてのコンテンツが読み上げられるか
    - ナビゲーションが理解しやすいか
    - リンクの目的が明確か

### キーボードナビゲーションテスト
- [ ] Tab キーですべてのリンクとボタンに移動できるか確認
- [ ] Enter / Space キーですべてのボタンが動作するか確認
- [ ] ハンバーガーメニューがキーボードで操作できるか確認
- [ ] スムーススクロールがキーボードで動作するか確認

### モバイルデバイステスト
- [ ] iPhone / Android での表示確認
- [ ] タッチターゲットのサイズ（最小44x44px推奨）
- [ ] ズーム機能が正常に動作するか

### リンクとボタン
- [ ] すべてのリンクに意味のあるテキストがあるか確認
  - ❌ 悪い例: "こちら"、"クリック"
  - ✅ 良い例: "プロジェクトを見る"、"GitHubリポジトリ"
- [ ] 外部リンクに適切な属性が設定されているか確認
  - `target="_blank"` と `rel="noopener noreferrer"` のセット

## 推奨テストツール

### ブラウザ拡張機能
- **axe DevTools** - 自動アクセシビリティテスト
  - [Chrome](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

- **WAVE** - WebAIM のアクセシビリティ評価ツール
  - [Chrome/Firefox](https://wave.webaim.org/extension/)

### オンラインツール
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Chrome DevTools に組み込み
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)

## 次のステップ

1. 上記のチェックリストを順番に確認
2. 問題が見つかった場合は GitHub Issue を作成
3. 定期的にアクセシビリティテストを実施（新機能追加時など）

## 参考リンク

- [WCAG 2.1 ガイドライン](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/ja/docs/Web/Accessibility)
- [a11y Project Checklist](https://www.a11yproject.com/checklist/)
