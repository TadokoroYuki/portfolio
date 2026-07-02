import type { Dictionary } from '../types';

export const ja: Dictionary = {
  meta: {
    title: 'Portfolio | Yuki Tadokoro',
    description:
      'Next.js / TypeScript を軸にライブ配信プラットフォームの機能開発に携わるフロントエンドエンジニア。AI エージェントを活用した高速な開発とプロダクト志向が持ち味です。',
    ogTitle: 'Portfolio | Yuki Tadokoro',
    ogDescription:
      'Next.js / TypeScript を軸に開発するフロントエンドエンジニア。AI エージェント活用とプロダクト志向が持ち味。',
    keywords: [
      'portfolio',
      'frontend engineer',
      'Next.js',
      'React',
      'TypeScript',
      'AI-driven development',
      'フロントエンド',
      'エンジニア',
    ],
  },
  nav: {
    ariaLabel: 'メインナビゲーション',
    logo: 'Portfolio',
    items: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    toggleMenu: 'メニューを開閉',
    languageLabel: '言語切替',
    themeToggle: {
      label: 'テーマ切り替え',
      toLight: 'ライトモードに切り替え',
      toDark: 'ダークモードに切り替え',
    },
  },
  hero: {
    name: 'Yuki Tadokoro',
    titles: [
      'Frontend Engineer',
      'Next.js / TypeScript Developer',
      'AI-Driven Developer',
      'Product-Minded Engineer',
    ],
    description: [
      'Next.js / TypeScript を軸に、ライブ配信プラットフォームの機能開発に携わるエンジニアです。',
      'AI エージェントを使い倒した高速な開発と、ユーザー価値から逆算したプロダクト作りが持ち味です。',
    ],
    profileImageAlt: 'Yuki Tadokoro のプロフィール写真',
    viewProjects: 'プロジェクトを見る',
    contactMe: 'お問い合わせ',
    downloadResume: '履歴書をダウンロード',
  },
  about: {
    heading: 'About Me',
    subheading: '私について',
    introHeading: '自己紹介',
    paragraphs: [
      'こんにちは！ライブ配信プラットフォームの長期インターンで機能開発に携わるフロントエンドエンジニアです。「技術をユーザー価値に変換すること」を最も大切にしていて、課題発見からリリース後の検証までを一気通貫で考えるプロダクト志向の開発が持ち味です。',
      'フロントエンドでは Next.js、React、TypeScript を使った開発を実務で行っており、課金機能やリアルタイム通信（Socket.IO / AWS AppSync）を含む機能を担当。アクセシビリティ（WCAG 2.1 準拠）やパフォーマンス最適化にも注力しています。プログラミング教育サービスでのコードレビュー・メンタリング経験もあります。',
      'もう一つの武器は AI エージェントを活用した開発です。Claude Code などの LLM エージェントを日常的に使い倒し、実装・検証・自動化のサイクルを高速化しつつ、設計判断は自分で行うスタイルで開発しています。ハッカソンでの受賞を目指した挑戦や OSS への貢献にも継続的に取り組んでいます。',
    ],
    timelineHeading: '経歴',
    timeline: [
      {
        year: '2026 - 現在',
        title: 'ライブ配信プラットフォーム フロントエンドエンジニア（長期インターン）',
        description:
          'Next.js / TypeScript による機能開発を担当。課金機能（リクエストメニュー）、マイリスト、ダークモード対応などを実装し、QA・コードレビューにも参加。リアルタイム通信（Socket.IO / AppSync）を実務で経験。',
        type: 'work',
      },
      {
        year: '2026',
        title: 'ハッカソン参加・OSS コントリビューション開始',
        description:
          'Progate Hackathon 2026 にチームで参加し konbini-navi を開発、AWS へ本番デプロイ。Obsidian Git プラグインへのバグ修正 PR がマージされ OSS 活動を開始。',
        type: 'work',
      },
      {
        year: '2025 - 2026',
        title: 'プログラミング教育サービス 長期インターン',
        description:
          'Web 開発ブートキャンプの運営に参画。受講生のコードレビュー、メンタリング、運営ナレッジの構築を担当し、教育とレビューの経験を積む。',
        type: 'work',
      },
      {
        year: '2023',
        title: 'Web 開発の学習開始',
        description:
          'React、Next.js、TypeScript などモダンなフロントエンド技術の習得を開始。個人開発と実務インターンを通じて実践的にスキルを拡張。',
        type: 'education',
      },
      {
        year: '2021',
        title: '東京電機大学 入学',
        description:
          'システムデザイン工学部にて情報システムを専攻。ソフトウェア工学・ネットワーク・データ工学を学ぶ。',
        type: 'education',
      },
    ],
    badgeWork: '職歴',
    badgeEducation: '学習',
    interestsHeading: '興味のある分野',
    interests: [
      'LLM エージェント × 開発自動化',
      'プロダクトエンジニアリング',
      'リアルタイム通信・配信技術',
      'UI/UX とアクセシビリティ',
      'データ分析・確率モデリング',
      'OSS 貢献',
    ],
  },
  skills: {
    heading: 'Skills',
    subheading: '技術スタックと開発経験',
    categories: [
      {
        category: 'Frontend',
        skills: [
          { name: 'Next.js', level: 'Advanced' },
          { name: 'React', level: 'Advanced' },
          { name: 'TypeScript', level: 'Advanced' },
          { name: 'Tailwind CSS', level: 'Intermediate' },
          { name: 'アクセシビリティ (WCAG)', level: 'Intermediate' },
        ],
      },
      {
        category: 'Backend & Infra',
        skills: [
          { name: 'Node.js (Hono / Express)', level: 'Intermediate' },
          { name: 'REST / GraphQL API', level: 'Intermediate' },
          { name: 'AWS (ECS / AppSync / DynamoDB)', level: 'Beginner' },
          { name: 'Docker', level: 'Intermediate' },
          { name: 'PostgreSQL / SQLite', level: 'Intermediate' },
        ],
      },
      {
        category: 'Testing & Quality',
        skills: [
          { name: 'Playwright', level: 'Intermediate' },
          { name: 'Vitest', level: 'Intermediate' },
          { name: 'コードレビュー', level: 'Advanced' },
        ],
      },
      {
        category: 'AI-Driven Development',
        skills: [
          { name: 'Claude Code / LLM エージェント', level: 'Advanced' },
          { name: 'ブラウザ自動化 (Playwright CLI)', level: 'Advanced' },
          { name: 'Python (データ分析・確率モデル)', level: 'Intermediate' },
        ],
      },
    ],
  },
  projects: {
    heading: 'Projects',
    subheading: 'これまで作成したプロジェクトや作品',
    codeLabel: 'Code',
    demoLabel: 'Demo',
    codeAria: '{title}のソースコード（GitHub）',
    demoAria: '{title}のデモを見る',
    items: [
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
    ],
  },
  contact: {
    heading: 'Contact',
    subheading: 'お気軽にご連絡ください',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/TadokoroYuki',
        label: '@TadokoroYuki',
      },
      {
        name: 'Email',
        url: 'mailto:tdkryk@icloud.com',
        label: 'tdkryk@icloud.com',
      },
    ],
    message: ['プロジェクトのご相談やお仕事のご依頼など、', 'お気軽にお問い合わせください。'],
  },
  a11y: {
    skipLink: 'メインコンテンツへスキップ',
    scrollToTop: 'ページトップへ戻る',
  },
};
