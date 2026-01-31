# 手動作業リスト

ポートフォリオサイトを完成させるために、以下の作業を行ってください。

## 1. 必須アセットの追加

`public/` ディレクトリに以下のファイルを配置してください。

### favicon.ico
- **サイズ**: 32x32 または 16x16 ピクセル
- **形式**: ICO
- **用途**: ブラウザタブに表示されるアイコン

### og-image.png
- **サイズ**: 1200x630 ピクセル
- **形式**: PNG
- **用途**: SNS でシェアされた際に表示されるプレビュー画像
- **内容例**: 名前 + 肩書き + 背景デザイン

### profile.jpg
- **サイズ**: 400x400 ピクセル以上（正方形推奨）
- **形式**: JPG または PNG
- **用途**: Hero セクションのプロフィール画像

### resume.pdf
- **形式**: PDF
- **用途**: 履歴書ダウンロード機能
- **内容**: 最新の履歴書・職務経歴書

## 2. 環境変数の設定（任意）

Vercel などにデプロイする際、以下の環境変数を設定すると OGP の URL が正しく設定されます。

```
NEXT_PUBLIC_SITE_URL=https://your-actual-domain.com
```

## 3. デプロイ後の確認

1. **OGP 画像の確認**
   - https://ogp.me/ でサイト URL を入力して確認
   - Twitter Card Validator でも確認推奨

2. **Lighthouse スコア確認**
   - Chrome DevTools > Lighthouse
   - Performance, Accessibility, SEO のスコアを確認

## 4. アセット配置後の削除

`public/ASSETS_README.txt` は不要になるため削除してください。

---

## 完了チェックリスト

- [ ] favicon.ico を配置
- [ ] og-image.png を配置
- [ ] profile.jpg を配置
- [ ] resume.pdf を配置
- [ ] ASSETS_README.txt を削除
- [ ] デプロイ
- [ ] OGP 表示確認
- [ ] Lighthouse スコア確認
