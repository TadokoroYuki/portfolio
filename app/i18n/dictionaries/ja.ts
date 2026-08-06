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
    logo: 'YT / Portfolio',
    items: [
      { id: 'home', label: 'Home' },
      { id: 'projects', label: 'Work' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
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
    eyebrow: 'TOKYO · FRONTEND / PRODUCT ENGINEER',
    headline: ['つくって、試して、', '届ける。'],
    role: '田所 佑樹 — Frontend Engineer',
    description: [
      'Next.js / TypeScript を軸に、課金・リアルタイム通信を含むライブ配信サービスの機能開発に取り組んでいます。',
      '課題を調べ、設計し、実装と検証まで進めることが得意です。',
    ],
    primaryCta: '実績を見る',
    secondaryCta: 'GitHub',
    proofLabel: '実績で見る',
    proofs: [
      { value: '実務', label: 'ライブ配信サービスの機能開発' },
      { value: 'Merged', label: '公開 OSS への修正 PR' },
      { value: 'Production', label: 'チーム開発アプリを AWS へ' },
    ],
    routeLabel: 'DEVELOPMENT ROUTE',
    routeSteps: [
      {
        code: '01',
        title: '課題をつかむ',
        description: '利用状況と背景を調べ、解くべき問題を絞る。',
      },
      {
        code: '02',
        title: '動く形にする',
        description: 'UI からデータ設計まで、必要な範囲をつなぐ。',
      },
      {
        code: '03',
        title: '検証して届ける',
        description: 'テストと QA を通し、使われる状態まで進める。',
      },
    ],
  },
  about: {
    sign: {
      title: 'じこしょうかい',
      subtitle: '自己紹介 · About',
    },
    lead: '技術の話だけで終わらず、使う人に届くところまで考えます。',
    paragraphs: [
      'ライブ配信サービスの長期インターンで、Next.js / TypeScript を使った機能開発をしています。課金機能やリアルタイム UI、継続利用につながる機能を担当し、QA やコードレビューにも参加しています。',
      '分からないことを放置せず、実際のコードやデータを調べて形にするのが得意です。AI エージェントも日常的に使いますが、何を作るか、どう確かめるかは自分で判断します。',
    ],
    principlesHeading: '開発で大切にしていること',
    principles: [
      {
        title: '分からないまま進めない',
        description: '仕様、コード、利用状況を確認し、推測と事実を分けて考えます。',
      },
      {
        title: '小さく作って確かめる',
        description: '動くものを早めに出し、テストとフィードバックで精度を上げます。',
      },
      {
        title: 'チームに残る形にする',
        description: 'レビューしやすい変更と、次の人が追える記録を意識します。',
      },
    ],
    timelineHeading: '経歴',
    timelineMoreLabel: 'これまでの経歴をすべて見る',
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
    sign: {
      title: 'すきる',
      subtitle: '技術 · Skills',
    },
    intro: '技術名の多さではなく、どの場面で使ってきたかが分かるように整理しています。',
    levelLabels: {
      Advanced: '主力',
      Intermediate: '実務・制作',
      Beginner: '学習中',
    },
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
    sign: {
      title: 'せいさくぶつ',
      subtitle: '制作物 · Projects',
    },
    intro: '実務、チーム開発、個人研究から、課題と担当範囲が伝わるものを先にまとめました。',
    featuredLabel: 'SELECTED WORK',
    moreLabel: 'その他の制作・取り組みを見る',
    privateLabel: '実務・詳細非公開',
    codeLabel: 'Code',
    demoLabel: 'Demo',
    codeAria: '{title}のソースコード（GitHub）',
    demoAria: '{title}のデモを見る',
    items: [
      {
        title: 'ライブ配信プラットフォームの機能開発（実務）',
        category: 'PROFESSIONAL',
        year: '2026 — NOW',
        description:
          'スタートアップの配信サービスで長期インターンとしてフロントエンド開発を担当。課金導線となるリクエストメニュー機能（DB スキーマ〜リアルタイム UI）、マイリスト機能、ダークモード対応などを実装。Socket.IO / AWS AppSync によるリアルタイム通信、Linear + GitHub PR レビューのチーム開発フローを実務で経験。',
        outcome: '課金導線・リアルタイム UI・継続利用機能を実装',
        technologies: ['Next.js', 'TypeScript', 'Socket.IO', 'AWS AppSync', 'DynamoDB'],
        featured: true,
        private: true,
      },
      {
        title: 'konbini-navi',
        category: 'TEAM PROJECT',
        year: '2026',
        description:
          'コンビニでの購買記録とレコメンドを行う Web アプリ。ハッカソン（Progate Hackathon 2026）でチーム開発し、AWS 東京リージョンに本番デプロイまで実施。企画からデプロイ・運用設計まで一気通貫で担当。',
        outcome: '企画から AWS 本番デプロイまで担当',
        technologies: ['Next.js', 'TypeScript', 'AWS'],
        featured: true,
        githubUrl: 'https://github.com/TadokoroYuki/konbini-navi',
      },
      {
        title: 'Expectation Watcher',
        category: 'PERSONAL PROJECT',
        year: '2026',
        description:
          '公営競技の払戻プールとキャリーオーバーを公式公開データから収集し、期待値がプラスになる条件を監視する個人開発ダッシュボード。文字コードの異なる複数ソースのスクレイパー、期待値計算エンジン、SQLite による時系列スナップショット、テストスイートを実装。',
        outcome: '公式データ収集から期待値判定・テストまで一貫実装',
        technologies: ['Next.js', 'TypeScript', 'SQLite', 'Cheerio', 'Vitest'],
        featured: true,
      },
      {
        title: 'Race Quant Models',
        category: 'RESEARCH',
        year: '2026',
        description:
          '公営競技の着順確率を予測する Python 製の確率モデル群。softmax 回帰・温度スケーリングによる確率キャリブレーション・Sinkhorn 正規化を実装し、log loss / Brier score / ECE で評価。オッズと組み合わせた期待値バックテストまでを一貫して構築。',
        outcome: '予測だけでなく確率評価と期待値検証まで構築',
        technologies: ['Python', '機械学習', '確率モデリング'],
      },
      {
        title: 'OSS コントリビューション',
        category: 'OPEN SOURCE',
        year: '2026',
        description:
          'Obsidian の Git プラグインに、モバイル環境でのバイナリファイル書き込みを修正するパッチを送りマージされた。自分が日常的に使う OSS の不具合を特定し、修正・テスト・PR まで完結。',
        outcome: '公開 OSS に修正 PR がマージ',
        technologies: ['TypeScript', 'Obsidian Plugin', 'Git'],
        githubUrl: 'https://github.com/Vinzent03/obsidian-git/pull/1090',
      },
      {
        title: 'Portfolio Website',
        category: 'THIS SITE',
        year: '2026',
        description:
          'このサイト。App Router によるファイルベースルーティング、レスポンシブデザイン、ダークモード対応、アクセシビリティ対応（WCAG 2.1 準拠）、SEO 最適化を実装。パフォーマンスと UX を重視した設計。',
        outcome: '多言語・アクセシビリティ・表示速度を継続改善',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        githubUrl: 'https://github.com/TadokoroYuki/portfolio',
      },
    ],
  },
  contact: {
    sign: {
      title: 'れんらくさき',
      subtitle: '連絡先 · Contact',
    },
    eyebrow: 'NEXT STOP',
    headline: '一緒につくれることがあれば、話しましょう。',
    responseNote: '相談ベースのご連絡でも大丈夫です。',
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
    message: [
      'フロントエンド開発、プロダクト改善、AI を使った開発フローについて、',
      'まずは GitHub やメールから気軽にご連絡ください。',
    ],
  },
  footer: {
    endOfLine: '― 終点 ―',
    copyright: '© 2026 Yuki Tadokoro',
  },
  a11y: {
    skipLink: 'メインコンテンツへスキップ',
    scrollToTop: 'ページトップへ戻る',
  },
};
