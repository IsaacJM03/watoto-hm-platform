import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cardSpring } from '../motion';
import type { Topic } from './Roundtable';

const steps = [
  'Write what’s on your mind. Your name stays hidden.',
  'An intentional mentor reads it first and replies here.',
  'If you want, keep talking one-to-one to grow together.',
];

const swap = {
  initial: { opacity: 0, filter: 'blur(4px)' },
  animate: { opacity: 1, filter: 'blur(0px)' },
  exit: { opacity: 0, filter: 'blur(4px)' },
  transition: { duration: 0.2, ease: 'easeOut' },
} as const;

export function TalkSheet({ topic, onClose }: { topic: Topic; onClose: () => void }) {
  const panel = useRef<HTMLDivElement>(null);
  const [text, setText] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    const root = document.documentElement;
    root.style.overflow = 'hidden';
    panel.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      root.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      trigger?.focus({ preventScroll: true });
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <motion.div
        className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.25 } }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        onClick={onClose}
      />
      <motion.div
        ref={panel}
        layoutId={`card-${topic.id}`}
        transition={cardSpring}
        role="dialog"
        aria-modal="true"
        aria-labelledby="talk-title"
        tabIndex={-1}
        style={{ borderRadius: 28 }}
        className="relative max-h-[90svh] w-full max-w-[560px] overflow-y-auto bg-[#f6f4f0] p-7 pt-12 text-[#0a0a0a] outline-none sm:p-9 sm:pt-14"
      >
        <span className="absolute top-4 left-1/2 h-3.5 w-16 -translate-x-1/2 rounded-full bg-[#dcd8d0] shadow-[inset_0_1px_2px_rgba(0,0,0,0.25)]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.12 } }}
          exit={{ opacity: 0, transition: { duration: 0.08 } }}
        >
          <p className="text-xs text-black/45">No. {topic.no} · Can we talk?</p>
          <h2 id="talk-title" className="mt-3 text-4xl leading-[1] font-semibold tracking-[-0.035em]">
            {topic.title}
          </h2>
          <p className="mt-3 text-black/60">{topic.line}</p>

          <ol className="mt-8 space-y-3 border-t border-black/8 pt-6 text-sm text-black/70">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="text-black/35 tabular-nums">{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>

          <AnimatePresence mode="wait" initial={false}>
            {sent ? (
              <motion.div key="sent" {...swap} className="mt-8 rounded-2xl bg-black/[0.04] p-5">
                <p className="font-medium">Sent. We listen first.</p>
                <p className="mt-1 text-sm text-black/55">An intentional mentor will reply here. You can close this and come back anytime.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                {...swap}
                className="mt-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (text.trim()) setSent(true);
                }}
              >
                <label htmlFor="talk-input" className="sr-only">
                  What’s on your mind?
                </label>
                <textarea
                  id="talk-input"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={4}
                  placeholder="What’s on your mind?"
                  className="w-full resize-none rounded-2xl bg-white p-4 text-[15px] ring-1 ring-black/8 transition-shadow duration-150 outline-none placeholder:text-black/35 focus:ring-2 focus:ring-ember"
                />
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <button type="button" className="press text-sm text-black/55 underline-offset-4 hover:underline">
                    Talk to someone now
                  </button>
                  <button
                    type="submit"
                    disabled={!text.trim()}
                    className="press rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-white transition-opacity duration-150 disabled:opacity-40"
                  >
                    Start talking
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="press absolute top-4 right-4 grid size-9 place-items-center rounded-full text-black/50 transition-colors duration-150 hover:bg-black/5 hover:text-black"
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
}
