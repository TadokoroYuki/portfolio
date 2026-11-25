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
      { id: 'skills', label: 'スキルマップ' },
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
    skillMapCta: 'スキルマップを見る',
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
      'フリーランスのWebエンジニアとして、Next.js / TypeScript を使ったライブ配信サービスの開発に携わっています。UIからAPIまで、機能開発とQA・コードレビューに取り組んでいます。',
      '分からないことを放置せず、実際のコードやデータを調べて形にするのが得意です。AI エージェントも日常的に使いますが、何を作るか、どう確かめるかは自分で判断します。',
    ],
    focus: {
      updatedOn: '2026-11-25',
      heading: 'いま取り組んでいること',
      items: [
        {
          title: 'API 設計の理解を見える形に',
          description: 'どこまで説明できるかを整理し、公開できるコードやテストにつなげています。',
        },
        {
          title: '使っている OSS を読む',
          description: '身近な道具の実装を読み、改善できるところがあれば、小さい変更から試します。',
        },
      ],
      skillMapLink: '現在地をスキルマップで見る',
    },
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
        title: 'ライブ配信サービスのWebエンジニア',
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
      subtitle: 'スキルマップ · Skill Map',
    },
    updatedLabel: '更新',
    trackTitle: 'API設計',
    intro:
      'roadmap.sh の API Design を分野選びの基準に、自分が何を説明できるか、どの実装を公開できるかを記録します。まずはこの4項目から。',
    roadmapLabel: 'API Design ロードマップ',
    statusLabels: {
      publicWork: '公開実績あり',
      nextCheck: '次に確かめる',
      notAssessed: '未評価',
    },
    topics: {
      documentingApis: {
        title: 'APIと構成のドキュメント',
        description:
          'konbini-navi の構成図と起動手順を実装に合わせて更新し、Swagger UI や curl での確認手順を整理しました。',
        proofLabel: 'マージ済みの PR #135',
      },
      requestValidation: {
        title: '入力検証と責務の分離',
        description:
          '次は、パス・クエリの検証を入口で行い、不正な入力をユースケースに渡さないことを公開できる例とテストで示します。',
      },
      httpContracts: {
        title: 'HTTPステータスとエラー設計',
        description:
          '入力の形式不正と対象データが存在しない場合を区別し、レスポンスの契約を説明できるか確認します。',
      },
      pagination: {
        title: 'ページネーション',
        description:
          'オフセット方式とカーソル方式の違いを、一覧の更新や並び順を含む例で説明できるか確認します。',
      },
    },
    readingNote:
      '「公開実績あり」は、その項目の根拠を読めるという意味です。roadmap.sh の修了率や第三者による認定ではなく、「未評価」は理解していないという意味でもありません。',
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
          'ライブ配信サービスで課金導線やリアルタイム UI、継続利用につながる機能の開発を担当。UIからAPIまで手を入れ、QAとコードレビューにも参加しています。',
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
          'コンビニでの購買記録とレコメンドを行うチーム開発アプリ。利用者向けは Expo、管理画面は Next.js、バックエンドは Go / PostgreSQL。構成のドキュメント整備と、AWS Amplify 向けの Expo Web ビルド修正を担当しました。',
        outcome: 'アーキテクチャの文書化と Expo Web のビルド修正を担当',
        technologies: ['Expo', 'Next.js（管理画面）', 'Go', 'PostgreSQL', 'AWS'],
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
          'このサイト。App Router によるファイルベースルーティング、レスポンシブデザイン、ダークモード対応、キーボード操作を考慮したアクセシビリティ対応、SEO 最適化を実装。パフォーマンスと UX を重視した設計。',
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
