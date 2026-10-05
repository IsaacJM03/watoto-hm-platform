import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';

// Words prefixed with * render in the serif accent.
const TEXT =
  'A generation of *bold, *Christ-centered young adults who love and *build *communities—purposely prepared to serve sacrificially in the *church and *marketplace, multiplying disciples through *intentional mentoring relationships.';
const words = TEXT.split(' ');

function Word({ word, index, progress }: { word: string; index: number; progress: MotionValue<number> }) {
  const start = index / words.length;
  const opacity = useTransform(progress, [start, start + 1 / words.length], [0.14, 1]);
  const accent = word.startsWith('*');
  return (
    <motion.span style={{ opacity }} className={accent ? 'font-serif font-normal text-ember italic' : undefined}>
      {accent ? word.slice(1) : word}{' '}
    </motion.span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const progress = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);

  return (
    <section id="manifesto" ref={ref} className="relative h-[260svh]">
      <div className="sticky top-0 flex min-h-svh items-center px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-semibold tracking-wider text-ember uppercase">HM Vision & Ethos</p>
            <p className="text-xs font-medium tracking-wide text-(--muted)">Belong · Become · Build</p>
          </div>

          <p className="text-[clamp(1.9rem,4.8vw,4.25rem)] leading-[1.06] font-semibold tracking-[-0.035em] text-balance">
            {reduce
              ? words.map((w, i) => {
                  const accent = w.startsWith('*');
                  return (
                    <span key={i} className={accent ? 'font-serif font-normal text-ember italic' : undefined}>
                      {accent ? w.slice(1) : w}{' '}
                    </span>
                  );
                })
              : words.map((w, i) => <Word key={i} word={w} index={i} progress={progress} />)}
          </p>

          <div className="mt-8 border-t border-(--line) pt-6">
            <p className="font-serif text-base leading-relaxed text-pretty text-(--muted) sm:text-xl">
              “But you are a chosen generation, a royal priesthood, a holy nation, His own special people, that you may proclaim the praises of Him who called you out of darkness into His marvelous light.”
            </p>
            <p className="mt-2 text-xs font-semibold tracking-wider text-ember uppercase">
              1 Peter 2:9 NKJV · Foundational Scripture
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-(--line) bg-(--bg)/60 px-3.5 py-1.5 font-medium text-(--fg) backdrop-blur-xs">
              <strong className="text-ember">Belong:</strong> Loving & Building Communities
            </span>
            <span className="rounded-full border border-(--line) bg-(--bg)/60 px-3.5 py-1.5 font-medium text-(--fg) backdrop-blur-xs">
              <strong className="text-ember">Become:</strong> Disciples Through Intentional Mentoring
            </span>
            <span className="rounded-full border border-(--line) bg-(--bg)/60 px-3.5 py-1.5 font-medium text-(--fg) backdrop-blur-xs">
              <strong className="text-ember">Build:</strong> Sacrificial Service in Church & Marketplace
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
