# デプロイガイド

このドキュメントは、ポートフォリオサイトを公開するための手順をまとめたものです。

## 推奨デプロイ先

### 1. Vercel（推奨）⭐

Next.js プロジェクトに最適なデプロイプラットフォームです。

#### メリット
- Next.js との完璧な統合
- 自動ビルド・デプロイ
- 無料プランで十分な機能
- カスタムドメイン対応
- 自動SSL証明書
- プレビューデプロイ（PR毎）

#### デプロイ手順

1. **Vercelアカウントの作成**
   - [vercel.com](https://vercel.com) にアクセス
   - GitHubアカウントでサインアップ

2. **プロジェクトのインポート**
   - Vercelダッシュボードで "Add New Project" をクリック
   - GitHubリポジトリ `TadokoroYuki/portfolio` を選択
   - "Import" をクリック

3. **設定（自動検出されます）**
   ```
   Framework Preset: Next.js
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

4. **デプロイ**
   - "Deploy" ボタンをクリック
   - 数分で完了し、URLが発行されます

5. **カスタムドメインの設定（オプション）**
   - プロジェクト設定 → Domains
   - 使用したいドメインを追加
   - DNSレコードを設定（ガイドに従う）

#### 環境変数の設定

環境変数が必要な場合（将来的なバックエンド連携など）:
- プロジェクト設定 → Environment Variables
- 変数を追加

---

### 2. Netlify

もう一つの人気のあるデプロイプラットフォームです。

#### メリット
- 簡単なデプロイ
- 無料プランあり
- カスタムドメイン対応
- フォーム機能（コンタクトフォームに便利）

#### デプロイ手順

1. **Netlifyアカウントの作成**
   - [netlify.com](https://netlify.com) にアクセス
   - GitHubアカウントでサインアップ

2. **新しいサイトの作成**
   - "Add new site" → "Import an existing project"
   - GitHubを選択して認証
   - `TadokoroYuki/portfolio` を選択

3. **ビルド設定**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **デプロイ**
   - "Deploy site" をクリック
   - デプロイが完了するとURLが発行されます

5. **next.config.ts の更新**

   Netlify用に `next.config.ts` を更新:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: 'export', // 静的エクスポート
     images: {
       unoptimized: true, // 画像最適化を無効化
     },
   };

   export default nextConfig;
   ```

---

### 3. GitHub Pages

GitHubが提供する無料の静的サイトホスティングです。

#### メリット
- 完全無料
- GitHubリポジトリと統合
- `yourusername.github.io` のURLが使える

#### 制限事項
- 静的サイトのみ（サーバーサイド機能は使えない）
- ビルド時間に制限あり

#### デプロイ手順

1. **next.config.ts の更新**

   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: 'export',
     basePath: '/portfolio', // リポジトリ名と同じ
     images: {
       unoptimized: true,
     },
   };

   export default nextConfig;
   ```

2. **package.json にスクリプト追加**

   ```json
   {
     "scripts": {
       "dev": "next dev",
       "build": "next build",
       "start": "next start",
       "lint": "next lint",
       "export": "next build && next export"
     }
   }
   ```

3. **GitHub Actions ワークフローの作成**

   `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Export
           run: npx next export

         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

4. **GitHub リポジトリ設定**
   - リポジトリ設定 → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` / `root`
   - Save

5. **デプロイ**
   - mainブランチにプッシュすると自動デプロイ
   - `https://tadokoroyuki.github.io/portfolio/` でアクセス可能

---

## カスタムドメインの設定

### ドメインの購入

ドメインレジストラーでドメインを購入:
- [Google Domains](https://domains.google/)
- [Namecheap](https://www.namecheap.com/)
- [お名前.com](https://www.onamae.com/)

### DNS設定

#### Vercel の場合
1. Vercel プロジェクト設定 → Domains
2. ドメインを追加
3. 表示されるDNSレコードを設定:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

#### Netlify の場合
1. Netlify サイト設定 → Domain management
2. カスタムドメインを追加
3. DNSレコードを設定:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: [your-site].netlify.app
   ```

#### GitHub Pages の場合
1. ルートに `CNAME` ファイルを作成:
   ```
   yourdomain.com
   ```
2. DNSレコードを設定:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153

   Type: CNAME
   Name: www
   Value: tadokoroyuki.github.io
   ```

---

## 環境変数の管理

### 開発環境

`.env.local` ファイルを作成（このファイルはGitにコミットしない）:
```env
# 例: コンタクトフォーム用のメールAPIキー
NEXT_PUBLIC_EMAIL_API_KEY=your_key_here

# 例: Goバックエンドのエンドポイント
NEXT_PUBLIC_API_URL=http://localhost:8080
```

### 本番環境

各プラットフォームの環境変数設定画面で追加:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site settings → Environment variables
- **GitHub Pages**: Repository Settings → Secrets and variables → Actions

---

## デプロイ後のチェックリスト

デプロイ完了後、以下を確認してください:

- [ ] サイトが正常に表示される
- [ ] すべてのページが動作する
- [ ] ナビゲーションが正常に動作する
- [ ] レスポンシブデザインが機能している
- [ ] ダークモードが機能している
- [ ] 外部リンク（GitHub、SNSなど）が正しい
- [ ] メタタグが正しく設定されている（ブラウザのタブタイトルを確認）
- [ ] HTTPSが有効になっている
- [ ] カスタムドメインが正しく設定されている（設定した場合）

### パフォーマンステスト

- [ ] [PageSpeed Insights](https://pagespeed.web.dev/) でスコアを確認
- [ ] [GTmetrix](https://gtmetrix.com/) でパフォーマンスを測定
- [ ] Chrome DevTools の Lighthouse で監査

### SEOテスト

- [ ] Google Search Console にサイトを登録
- [ ] sitemap.xml を作成・送信（将来的に）
- [ ] robots.txt を確認

---

## トラブルシューティング

### ビルドエラーが発生する

```bash
# ローカルでビルドを確認
npm run build

# エラーが出る場合、依存関係を再インストール
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 画像が表示されない

Next.js の Image コンポーネントを使用している場合:
- Vercel: 自動で最適化される
- Netlify/GitHub Pages: `unoptimized: true` を設定

### 404エラーが発生する

- ルーティングが正しいか確認
- `basePath` の設定を確認（GitHub Pages の場合）

### デプロイは成功するが、サイトが真っ白

- ブラウザのコンソールでエラーを確認
- next.config.ts の設定を確認
- 環境変数が正しく設定されているか確認

---

## 継続的デプロイ（CI/CD）

### 自動デプロイの設定

すべてのプラットフォームで、mainブランチへのプッシュで自動デプロイされます:

```bash
# 変更をコミット
git add .
git commit -m "Update portfolio"

# mainブランチにプッシュ（自動デプロイが開始）
git push origin main
```

### プレビューデプロイ

Vercel と Netlify は、プルリクエスト毎にプレビューURLを生成します:
- 変更内容を確認
- 本番環境にマージする前にテスト

---

## 次のステップ

1. デプロイ先を選択（Vercel 推奨）
2. 上記の手順に従ってデプロイ
3. カスタムドメインを設定（オプション）
4. パフォーマンステストを実施
5. Google Analytics などの分析ツールを追加（オプション）

詳しい質問や問題がある場合は、各プラットフォームの公式ドキュメントを参照してください:
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Pages Documentation](https://docs.github.com/pages)
