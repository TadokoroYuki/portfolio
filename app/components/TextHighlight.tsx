interface TextHighlightProps {
  children: React.ReactNode;
  variant?: 'gradient' | 'underline' | 'background';
}

export default function TextHighlight({ children, variant = 'gradient' }: TextHighlightProps) {
  const variants = {
    gradient:
      'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold',
    underline: 'underline decoration-2 decoration-blue-500 underline-offset-4 font-semibold',
    background: 'bg-blue-100 dark:bg-blue-900/50 px-1 rounded font-semibold',
  };

  return <span className={variants[variant]}>{children}</span>;
}
