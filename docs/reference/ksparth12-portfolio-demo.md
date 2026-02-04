# ksparth12/Portfolio-Demo

## 基本情報

| 項目 | 内容 |
|------|------|
| リポジトリ | [ksparth12/Portfolio-Demo](https://github.com/ksparth12/Portfolio-Demo) |
| デモサイト | 調査中 |
| スター数 | 調査中 |
| 最終更新 | 調査中 |

## 技術スタック

| カテゴリ | 技術 |
|----------|------|
| フレームワーク | Vite + React |
| 言語 | TypeScript |
| アニメーション | Framer Motion |
| スタイリング | Tailwind CSS |
| アイコン | Lucide React |

## 概要

Framer Motion による高度なスクロール連動アニメーションとパーティクル背景が特徴のポートフォリオ。useScroll + useTransform を使った parallax 効果と、セクションごとの flying animation が印象的。

## 詳細調査

### Framer Motion スクロールアニメーション

**Index.tsx (高度なスクロール連動):**

```tsx
const Index = () => {
  const { scrollY, scrollYProgress } = useScroll();

  // セクション別のスクロール変換
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const heroY = useTransform(scrollY, [0, 400], [0, -200]);

  const aboutY = useTransform(scrollY, [200, 800], [100, -100]);
  const aboutOpacity = useTransform(scrollY, [200, 600], [0, 1]);
  const aboutScale = useTransform(scrollY, [200, 600], [0.9, 1]);

  const skillsY = useTransform(scrollY, [600, 1200], [80, -80]);
  const skillsOpacity = useTransform(scrollY, [600, 1000], [0, 1]);

  const projectsY = useTransform(scrollY, [1000, 1600], [80, -80]);
  const projectsOpacity = useTransform(scrollY, [1000, 1400], [0, 1]);
  const projectsScale = useTransform(scrollY, [1000, 1400], [0.9, 1]);

  const backgroundY = useTransform(scrollY, [0, 2000], [0, -800]);
  const parallaxY = useTransform(scrollY, [0, 2000], [0, -400]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden w-full">
      {/* Parallax 背景 */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0">
        <ParticleBackground />
      </motion.div>

      <motion.div style={{ y: parallaxY }} className="fixed inset-0 z-0">
        <FloatingElements />
      </motion.div>

      {/* Hero Section */}
      <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}>
        <HeroSection />
      </motion.div>

      {/* About Section with Flying Animation */}
      <motion.div style={{ y: aboutY, opacity: aboutOpacity, scale: aboutScale }}>
        <motion.div
          initial={{ opacity: 0, y: 200, rotateX: 45 }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }
          }}
          viewport={{ once: true, margin: "-150px" }}
        >
          <AboutSection />
        </motion.div>
      </motion.div>

      {/* スクロール連動の背景グラデーション */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 0.2, 0.4, 0.6, 0.8, 1],
            [
              "linear-gradient(180deg, #000000 0%, #1a0033 100%)",
              "linear-gradient(180deg, #1a0033 0%, #2d1b69 100%)",
              "linear-gradient(180deg, #2d1b69 0%, #4c1d95 100%)",
              "linear-gradient(180deg, #4c1d95 0%, #5b21b6 100%)",
              "linear-gradient(180deg, #5b21b6 0%, #6d28d9 100%)",
              "linear-gradient(180deg, #6d28d9 0%, #000000 100%)"
            ]
          )
        }}
      />
    </div>
  );
};
```

### TypewriterEffect コンポーネント

```tsx
const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      const fullText = texts[currentTextIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setIsPaused(true);
        }
      }
    }, isPaused ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className="font-mono">
      <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
        {currentText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="text-purple-400 ml-1"
      >
        |
      </motion.span>
    </div>
  );
};
```

### AboutSection コンポーネント

```tsx
const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [200, 600], [0, 1]);
  const scale = useTransform(scrollY, [200, 600], [0.8, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* 浮遊要素 */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 bg-purple-800/30 rounded-full"
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.8, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* 統計カード */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: Code, label: "Projects", value: "15+" },
          { icon: Target, label: "Experience", value: "2+ Years" },
          { icon: Lightbulb, label: "Technologies", value: "20+" }
        ].map((item, index) => (
          <motion.div
            key={item.label}
            whileHover={{
              scale: 1.08,
              y: -8,
              boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* カード内容 */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
```

### 紫テーマカラーパレット

```css
/* グラデーション使用例 */
--purple-400: #a855f7;
--purple-600: #9333ea;
--purple-700: #7e22ce;
--purple-800: #6b21a8;
--purple-900: #581c87;

/* 背景グラデーション */
bg-gradient-to-r from-purple-800 to-purple-900
bg-gradient-to-t from-black to-purple-900/20

/* ホバー時のグロー */
shadow-purple-500/25
```

## 本プロジェクトへの示唆

### 採用すべきパターン
- **useScroll + useTransform**: スクロール位置に応じた連続的な変換
- **scrollYProgress**: 背景グラデーションの動的変更
- **Flying Animation**: rotateX/Y を使った3D風エントリー
- **TypewriterEffect**: タイピングアニメーション

### 参考になる実装
- セクションごとの独立したスクロール変換設定
- 浮遊要素の無限ループアニメーション
- react-intersection-observer との組み合わせ
- 統計カードのホバーエフェクト

## 参考リンク

- [GitHub リポジトリ](https://github.com/ksparth12/Portfolio-Demo)
