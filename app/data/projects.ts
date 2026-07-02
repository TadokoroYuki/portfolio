import type { Project } from './types';

export const projects: Project[] = [
  {
    title: 'ライブ配信プラットフォームの機能開発（実務）',
    description:
      'スタートアップの配信サービスで長期インターンとしてフロントエンド開発を担当。課金導線となるリクエストメニュー機能（DB スキーマ〜リアルタイム UI）、マイリスト機能、ダークモード対応などを実装。Socket.IO / AWS AppSync によるリアルタイム通信、Linear + GitHub PR レビューのチーム開発フローを実務で経験。',
    technologies: ['Next.js', 'TypeScript', 'Socket.IO', 'AWS AppSync', 'DynamoDB'],
  },
  {
    title: 'konbini-navi',
    description:
      'コンビニでの購買記録とレコメンドを行う Web アプリ。ハッカソン（Progate Hackathon 2026）でチーム開発し、AWS 東京リージョンに本番デプロイまで実施。企画からデプロイ・運用設計まで一気通貫で担当。',
    technologies: ['Next.js', 'TypeScript', 'AWS'],
  },
  {
    title: 'Expectation Watcher',
    description:
      '公営競技の払戻プールとキャリーオーバーを公式公開データから収集し、期待値がプラスになる条件を監視する個人開発ダッシュボード。文字コードの異なる複数ソースのスクレイパー、期待値計算エンジン、SQLite による時系列スナップショット、テストスイートを実装。',
    technologies: ['Next.js', 'TypeScript', 'SQLite', 'Cheerio', 'Vitest'],
  },
  {
    title: 'Race Quant Models',
    description:
      '公営競技の着順確率を予測する Python 製の確率モデル群。softmax 回帰・温度スケーリングによる確率キャリブレーション・Sinkhorn 正規化を実装し、log loss / Brier score / ECE で評価。オッズと組み合わせた期待値バックテストまでを一貫して構築。',
    technologies: ['Python', '機械学習', '確率モデリング'],
  },
  {
    title: 'OSS コントリビューション',
    description:
      'Obsidian の Git プラグイン（Star 8k+）にモバイル環境でのバイナリファイル書き込みを修正するパッチを送りマージされた。自分が日常的に使う OSS の不具合を特定し、修正・テスト・PR まで完結。',
    technologies: ['TypeScript', 'Obsidian Plugin', 'Git'],
    githubUrl: 'https://github.com/Vinzent03/obsidian-git/pull/1090',
  },
  {
    title: 'Portfolio Website',
    description:
      'このサイト。App Router によるファイルベースルーティング、レスポンシブデザイン、ダークモード対応、アクセシビリティ対応（WCAG 2.1 準拠）、SEO 最適化を実装。パフォーマンスと UX を重視した設計。',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/TadokoroYuki/portofolio',
  },
];
