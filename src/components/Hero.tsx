import { motion } from 'framer-motion';
import { HMMark } from './HMMark';
import { dock } from '../motion';

export function Hero({ docked }: { docked: boolean }) {
  return (
    <section id="top" className="relative isolate flex min-h-svh flex-col items-center overflow-hidden px-5 pt-24 pb-20 text-center sm:pt-28">
      <div className="absolute inset-0 -z-10 [background:var(--field)]" />
      <img
        src="/crowd.jpg"
        alt=""
        className="absolute inset-x-0 bottom-0 -z-10 h-[62svh] w-full object-cover object-bottom opacity-40 mix-blend-luminosity [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_85%,transparent)] dark:opacity-35"
      />

      <div className="w-36 aspect-[264/224] sm:w-44">
        {!docked && (
          <motion.div layoutId="hm-mark" transition={dock} className="text-(--fg)">
            <HMMark className="w-full" />
          </motion.div>
        )}
      </div>

      <p
        className="animate-hero-rise mt-8 text-xs font-semibold tracking-widest text-ember uppercase sm:mt-10 sm:text-sm"
        style={{ animationDelay: '100ms' }}
      >
        Belong. Become. Build.
      </p>

      <h1
        className="animate-hero-rise mt-5 text-[clamp(3.25rem,10.5vw,9rem)] leading-[0.88] font-extrabold tracking-[-0.045em] text-(--fg)"
        style={{ animationDelay: '180ms' }}
      >
        History Makers
      </h1>

      <p
        className="animate-hero-rise mt-5 max-w-2xl text-balance text-lg text-(--muted) sm:text-xl"
        style={{ animationDelay: '260ms' }}
      >
        The young adults of Watoto Church. A generation of <span className="font-semibold text-(--fg)">bold, Christ-centered young adults</span> who love and build communities, purposely prepared to serve sacrificially in the church and marketplace.
      </p>

      <p
        className="animate-hero-rise mt-3 max-w-lg font-serif text-sm italic text-(--muted) sm:text-base"
        style={{ animationDelay: '320ms' }}
      >
        “Called out of darkness into His marvelous light.” — 1 Peter 2:9 NKJV
      </p>

      <div
        className="animate-hero-rise mt-8 flex flex-wrap items-center justify-center gap-3"
        style={{ animationDelay: '380ms' }}
      >
        <a href="#cells" className="press rounded-full bg-ember px-6 py-3 text-sm font-medium text-white shadow-xs">
          Find a Cell
        </a>
        <a href="#talk" className="press rounded-full bg-(--fg) px-6 py-3 text-sm font-medium text-(--bg) shadow-xs">
          Can we talk?
        </a>
        <a href="#fridays" className="press rounded-full px-6 py-3 text-sm font-medium text-(--fg) ring-1 ring-(--line) backdrop-blur-xs">
          Friday nights
        </a>
      </div>
    </section>
  );
}
