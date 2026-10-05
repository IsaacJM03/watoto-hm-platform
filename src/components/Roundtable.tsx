import { useCallback, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { TalkSheet } from './TalkSheet';
import { cardSpring } from '../motion';

export type Topic = { id: string; no: string; title: string; line: string; rest: number };

const topics: Topic[] = [
  { id: 'faith', no: '01', title: 'Faith & doubt', line: 'When God feels quiet and the questions get loud.', rest: -3 },
  { id: 'anxiety', no: '02', title: 'Anxiety & loneliness', line: 'For the heavy days nobody else sees.', rest: 2 },
  { id: 'relationships', no: '03', title: 'Relationships', line: 'Family, friends, dating, and the talks we avoid.', rest: -1.5 },
  { id: 'calling', no: '04', title: 'Calling & marketplace', line: 'Serving purposely in church, career, and marketplace.', rest: 2.5 },
];

const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const hang = { type: 'spring', duration: 0.7, bounce: 0.3 } as const;

function Badge({ topic, index, onOpen }: { topic: Topic; index: number; onOpen: () => void }) {
  const [held, setHeld] = useState(false);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 220, damping: 20 };
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-6, 6]), spring);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [5, -5]), spring);

  const onMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!finePointer) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };

  const release = () => {
    setHeld(false);
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      className="relative shrink-0 snap-center pt-28 [perspective:900px]"
      style={{ transformOrigin: '50% 0%' }}
      animate={{ rotate: held ? 0 : topic.rest }}
      transition={hang}
    >
      <motion.button
        layoutId={`card-${topic.id}`}
        transition={cardSpring}
        type="button"
        aria-haspopup="dialog"
        onClick={onOpen}
        onPointerEnter={() => finePointer && setHeld(true)}
        onPointerMove={onMove}
        onPointerLeave={release}
        whileTap={{ scale: 0.97 }}
        style={{ rotateX, rotateY, borderRadius: 22 }}
        className="relative flex h-[340px] w-[264px] flex-col bg-[#f6f4f0] p-6 pt-12 text-left text-[#0a0a0a] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_2px_6px_rgba(0,0,0,0.12),0_24px_48px_-16px_rgba(0,0,0,0.4)]"
      >
        <BadgeFace topic={topic} index={index} />
      </motion.button>
      <div className="pointer-events-none absolute top-0 left-1/2 h-[7.25rem] w-[18px] -translate-x-1/2 bg-gradient-to-r from-[#e24a12] via-ember to-[#e24a12] [mask-image:linear-gradient(to_bottom,transparent,black_45%)]" />
      <div className="pointer-events-none absolute top-[7rem] left-1/2 h-[1.4rem] w-4 -translate-x-1/2 rounded-b-md border-2 border-t-0 border-[#8f8a82]" />
    </motion.div>
  );
}

function BadgeFace({ topic, index }: { topic: Topic; index: number }) {
  return (
    <>
      <span className="absolute top-4 left-1/2 h-3.5 w-16 -translate-x-1/2 rounded-full bg-[#dcd8d0] shadow-[inset_0_1px_2px_rgba(0,0,0,0.25)]" />
      <span className="flex items-center justify-between text-xs text-black/45">
        <span>No. {topic.no}</span>
        <span className="flex gap-1" aria-hidden>
          {topics.map((t, i) => (
            <span key={t.id} className={`size-1 rounded-full ${i === index ? 'bg-black/70' : 'bg-black/15'}`} />
          ))}
        </span>
      </span>
      <span className="mt-auto text-[1.65rem] leading-[1.05] font-semibold tracking-[-0.03em]">{topic.title}</span>
      <span className="mt-2 text-sm leading-snug text-black/55">{topic.line}</span>
      <span className="mt-6 flex items-center justify-between border-t border-black/8 pt-4 text-xs text-black/50">
        <span>Anonymous · Mentorship</span>
        <span className="grid size-7 place-items-center rounded-full bg-black text-white">→</span>
      </span>
    </>
  );
}

export function Roundtable() {
  const [open, setOpen] = useState<Topic | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section id="talk" className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold tracking-wider text-ember uppercase">Can we talk?</p>
        <h2 className="mt-3 max-w-2xl text-[clamp(2.25rem,5vw,4rem)] leading-[1] font-bold tracking-[-0.04em]">
          A safe place to be honest about faith, doubt, and life.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-pretty text-(--muted)">
          Belong before you believe. Intentional mentoring starts with honest conversation. Pick a thread. Stay anonymous. We listen first, and if you need someone now, a peer mentor can talk one-to-one.
        </p>
      </div>

      <div className="mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))] pb-16 [scrollbar-width:none] lg:justify-center lg:gap-8">
        {topics.map((t, i) =>
          open?.id === t.id ? (
            <div key={t.id} className="h-[452px] w-[264px] shrink-0" />
          ) : (
            <Badge key={t.id} topic={t} index={i} onOpen={() => setOpen(t)} />
          ),
        )}
      </div>

      <AnimatePresence>
        {open && <TalkSheet topic={open} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
