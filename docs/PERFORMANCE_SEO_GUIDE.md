# パフォーマンス最適化とSEO対策ガイド

このドキュメントは、ポートフォリオサイトのパフォーマンスを向上させ、SEOを最適化するためのガイドです。

## 実装済みの項目 ✅

### SEO対策
- [x] メタタグの設定（title, description, keywords）
- [x] Open Graph タグ
- [x] 作者情報
- [x] 適切な HTML 構造（semantic HTML）
- [x] lang 属性の設定

---

## ユーザーが対応すべき項目 📋

### 1. favicon の追加

ブラウザのタブやブックマークに表示されるアイコンを追加します。

#### 手順

1. **favicon ファイルの準備**
   - 推奨サイズ: 32x32px, 16x16px
   - フォーマット: PNG または ICO
   - ツール: [Favicon Generator](https://realfavicongenerator.net/)

2. **ファイルの配置**
   ```
   public/
   ├── favicon.ico
   ├── favicon-16x16.png
   ├── favicon-32x32.png
   └── apple-touch-icon.png (180x180px)
   ```

3. **layout.tsx に追加**
   ```typescript
   export const metadata: Metadata = {
     // ... 既存の設定
     icons: {
       icon: [
         { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
         { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
       ],
       apple: '/apple-touch-icon.png',
     },
   };
   ```

---

### 2. OGP 画像の追加

SNSでシェアされた時に表示される画像を設定します。

#### 手順

1. **OGP 画像の作成**
   - 推奨サイズ: 1200x630px
   - フォーマット: PNG または JPG
   - 内容: サイト名、キャッチコピー、デザイン要素
   - ツール: [Canva](https://www.canva.com/), Figma, Photoshop

2. **ファイルの配置**
   ```
   public/
   └── og-image.png
   ```

3. **layout.tsx に追加**
   ```typescript
   export const metadata: Metadata = {
     // ... 既存の設定
     openGraph: {
       title: "Portfolio | Yuki Tadokoro",
       description: "Full Stack Developer specializing in Next.js and Go",
       type: "website",
       images: [
         {
           url: '/og-image.png',
           width: 1200,
           height: 630,
           alt: 'Portfolio Preview',
         },
       ],
     },
     twitter: {
       card: 'summary_large_image',
       title: "Portfolio | Yuki Tadokoro",
       description: "Full Stack Developer specializing in Next.js and Go",
       images: ['/og-image.png'],
     },
   };
   ```

4. **テスト**
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

---

### 3. 画像の最適化

現在はプレースホルダー画像を使用していますが、実際の画像を追加する際に最適化が必要です。

#### プロフィール画像の追加

1. **画像の準備**
   - フォーマット: WebP 推奨（フォールバックで PNG/JPG）
   - サイズ: 最大 400x400px（実際の表示サイズに合わせる）
   - 圧縮: [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)

2. **ファイルの配置**
   ```
   public/images/
   └── profile.webp
   ```

3. **HeroSection.tsx を更新**
   ```typescript
   import Image from 'next/image';

   // プレースホルダーの代わりに
   <Image
     src="/images/profile.webp"
     alt="田所ユキのプロフィール写真"
     width={160}
     height={160}
     className="rounded-full"
     priority
   />
   ```

#### プロジェクト画像の追加

1. **スクリーンショットの準備**
   - フォーマット: WebP 推奨
   - サイズ: 最大 800x600px
   - アスペクト比: 4:3 または 16:9
   - 圧縮: 品質 80-90%

2. **ファイルの配置**
   ```
   public/images/projects/
   ├── project1.webp
   ├── project2.webp
   └── project3.webp
   ```

3. **ProjectsSection.tsx を更新**
   ```typescript
   import Image from 'next/image';

   // プレースホルダーの代わりに
   <div className="relative h-48">
     <Image
       src="/images/projects/project1.webp"
       alt="プロジェクト1のスクリーンショット"
       fill
       className="object-cover"
     />
   </div>
   ```

#### 画像最適化のベストプラクティス

- **Next.js Image コンポーネントを使用**
  - 自動レスポンシブ対応
  - 遅延読み込み（lazy loading）
  - 自動フォーマット最適化

- **WebP フォーマットを優先**
  - PNG/JPG より 25-35% 小さい
  - Next.js が自動で変換（Vercel デプロイ時）

- **適切な画質設定**
  ```typescript
  <Image
    src="/image.jpg"
    quality={85} // デフォルトは 75
    alt="説明"
  />
  ```

---

### 4. Lazy Loading の実装

既に Next.js Image コンポーネントが lazy loading をサポートしています。

#### 追加設定

重要な画像（ファーストビュー）:
```typescript
<Image
  src="/hero-image.webp"
  priority // lazy loading を無効化
  alt="説明"
/>
```

それ以外の画像:
```typescript
<Image
  src="/other-image.webp"
  loading="lazy" // デフォルト
  alt="説明"
/>
```

---

### 5. パフォーマンス測定

#### Lighthouse を使用

1. **Chrome DevTools を開く**
   - F12 または右クリック → 検証

2. **Lighthouse タブを選択**
   - カテゴリ: すべて選択
   - デバイス: Desktop と Mobile 両方
   - "Analyze page load" をクリック

3. **スコアを確認**
   - Performance: 90以上が目標
   - Accessibility: 90以上が目標
   - Best Practices: 90以上が目標
   - SEO: 90以上が目標

#### 目標スコア

| カテゴリ | 目標 | 現状 |
|---------|------|------|
| Performance | 90+ | 測定してください |
| Accessibility | 90+ | 測定してください |
| Best Practices | 90+ | 測定してください |
| SEO | 90+ | 測定してください |

---

### 6. パフォーマンス最適化のチェックリスト

#### 完了済み ✅
- [x] Next.js による自動コード分割
- [x] レスポンシブデザイン
- [x] ダークモード対応（CSSメディアクエリ）
- [x] Tailwind CSS の使用（小さいCSSバンドル）

#### 対応推奨 📋

**画像関連**
- [ ] プロフィール画像を WebP で追加
- [ ] プロジェクト画像を WebP で追加
- [ ] OGP 画像を追加
- [ ] favicon を追加
- [ ] すべての画像に alt 属性を設定

**コード最適化**
- [ ] 未使用のコンポーネントやライブラリを削除
- [ ] バンドルサイズを確認
  ```bash
  npm run build
  # サイズが表示される
  ```

**フォント最適化**
- [ ] Google Fonts の代わりにローカルフォントを使用（オプション）
- [ ] `font-display: swap` を設定（既に Next.js が対応）

**JavaScript最適化**
- [ ] 不要な console.log を削除
- [ ] 本番ビルドで圧縮されているか確認

---

### 7. SEO 最適化のチェックリスト

#### 完了済み ✅
- [x] タイトルタグ
- [x] メタディスクリプション
- [x] キーワードタグ
- [x] Open Graph タグ
- [x] セマンティック HTML
- [x] レスポンシブデザイン

#### 対応推奨 📋

**メタデータ**
- [ ] OGP 画像を追加
- [ ] Twitter Card を設定
- [ ] canonical URL を設定（必要に応じて）

**構造化データ**
- [ ] JSON-LD でパーソナル情報を追加（オプション）
  ```typescript
  // layout.tsx または page.tsx
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yuki Tadokoro',
    jobTitle: 'Full Stack Developer',
    url: 'https://your-domain.com',
  };

  // head に追加
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
  ```

**サイトマップ**
- [ ] sitemap.xml を生成（デプロイ後）
  - Next.js 15 は自動生成をサポート
  ```typescript
  // app/sitemap.ts
  export default function sitemap() {
    return [
      {
        url: 'https://your-domain.com',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://your-domain.com/#about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      // 他のセクション
    ];
  }
  ```

**robots.txt**
- [ ] robots.txt を作成
  ```
  # public/robots.txt
  User-agent: *
  Allow: /
  Sitemap: https://your-domain.com/sitemap.xml
  ```

**Google Analytics / Search Console**
- [ ] Google Analytics を設定（オプション）
- [ ] Google Search Console にサイトを登録

---

### 8. モニタリングツール

#### パフォーマンス監視
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

#### SEO 監視
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

#### アクセス解析
- [Google Analytics 4](https://analytics.google.com/)
- [Vercel Analytics](https://vercel.com/analytics)（Vercel 使用時）

---

## 実装の優先順位

### 高優先度（すぐに対応）
1. favicon の追加
2. OGP 画像の作成と追加
3. プロフィール画像の最適化
4. Lighthouse でパフォーマンス測定

### 中優先度（デプロイ前後）
5. プロジェクト画像の追加と最適化
6. sitemap.xml の生成
7. robots.txt の作成
8. Google Search Console への登録

### 低優先度（必要に応じて）
9. Google Analytics の設定
10. 構造化データの追加
11. カスタムフォントの最適化

---

## トラブルシューティング

### Lighthouse スコアが低い場合

**Performance が低い**
- 画像サイズを確認（大きすぎる場合は圧縮）
- 未使用のコードを削除
- JavaScript のサイズを確認

**Accessibility が低い**
- `/docs/ACCESSIBILITY_CHECKLIST.md` を参照
- すべての画像に alt 属性があるか確認

**SEO が低い**
- メタタグが正しく設定されているか確認
- タイトルが適切か確認（60文字以内）
- ディスクリプションが適切か確認（160文字以内）

---

## 次のステップ

1. favicon を作成して追加
2. OGP 画像を作成して追加
3. プロフィール画像を準備して最適化
4. Lighthouse でパフォーマンスを測定
5. スコアを記録して改善点を特定
6. 継続的にモニタリング

詳しい質問がある場合は、以下を参照してください:
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Web.dev Performance](https://web.dev/learn/)
