'use client';

import { motion, useReducedMotion } from 'framer-motion';

export interface SignNeighbor {
  href: string;
  label: string;
}

interface StationSignProps {
  /** Large text on the board (hiragana in ja / English in en). */
  title: string;
  /** Smaller mono line under the title. */
  subtitle: string;
  /** Station-numbering style badge, e.g. "YT-01". */
  code?: string;
  /** Link to the previous section ("← まえ"). */
  prev?: SignNeighbor;
  /** Link to the next section ("つぎ →"). */
  next?: SignNeighbor;
  /** Heading element to render the title as. */
  as?: 'h1' | 'h2';
  /** Hero renders one large sign; sections render a smaller one. */
  size?: 'hero' | 'section';
}

/**
 * JR-style station sign (駅名標): a white board with a thin frame,
 * the section name written large, a romanized/mono subtitle, arrows to
 * the neighboring sections, and the Sōbu Line yellow band at the bottom.
 *
 * The only entrance animation on the site lives here: an 8px rise-in,
 * once, when the sign scrolls into view.
 */
export default function StationSign({
  title,
  subtitle,
  code,
  prev,
  next,
  as: Heading = 'h2',
  size = 'section',
}: StationSignProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="w-full"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="relative overflow-hidden rounded-md border border-rail bg-board dark:border-rail-dark dark:bg-board-dark">
        {code ? (
          <span
            aria-hidden="true"
            className="absolute left-3 top-3 rounded border-2 border-sobu px-1.5 py-0.5 font-mono text-xs font-medium tracking-widest text-ink dark:text-ink-dark"
          >
            {code}
          </span>
        ) : null}

        <div
          className={`px-6 text-center ${
            size === 'hero' ? 'pb-6 pt-12 sm:px-16 sm:pt-14' : 'pb-5 pt-10 sm:px-10'
          }`}
        >
          <Heading
            className={`font-bold tracking-wide text-ink text-balance dark:text-ink-dark ${
              size === 'hero' ? 'text-4xl sm:text-6xl' : 'text-3xl sm:text-4xl'
            }`}
          >
            {title}
          </Heading>
          <p
            className={`mt-3 font-mono tracking-[0.2em] text-steel dark:text-steel-dark ${
              size === 'hero' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
            }`}
          >
            {subtitle}
          </p>

          {prev || next ? (
            <div className="mt-6 flex items-center justify-between font-mono text-xs text-steel dark:text-steel-dark">
              {prev ? (
                <a
                  href={prev.href}
                  className="rounded px-1 py-0.5 transition-colors hover:text-ink dark:hover:text-ink-dark"
                >
                  ← {prev.label}
                </a>
              ) : (
                <span aria-hidden="true" />
              )}
              {next ? (
                <a
                  href={next.href}
                  className="rounded px-1 py-0.5 transition-colors hover:text-ink dark:hover:text-ink-dark"
                >
                  {next.label} →
                </a>
              ) : (
                <span aria-hidden="true" />
              )}
            </div>
          ) : null}
        </div>

        {/* Sōbu Line color band */}
        <div className="h-2 bg-sobu" aria-hidden="true" />
      </div>
    </motion.div>
  );
}
