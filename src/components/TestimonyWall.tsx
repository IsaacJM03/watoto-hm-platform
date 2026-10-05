import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { type Testimony, type TestimonyCategory, TESTIMONIES, TESTIMONY_CATEGORIES } from '../data/testimonies';
import { TestimonyModal } from './TestimonyModal';

export function TestimonyWall() {
  const [selectedCategory, setSelectedCategory] = useState<'All Stories' | TestimonyCategory>('All Stories');
  const [activeTestimony, setActiveTestimony] = useState<Testimony | null>(null);
  const [modalMode, setModalMode] = useState<'read' | 'share' | null>(null);

  const filteredTestimonies = useMemo(() => {
    if (selectedCategory === 'All Stories') return TESTIMONIES;
    return TESTIMONIES.filter((t) => t.category === selectedCategory);
  }, [selectedCategory]);

  const openRead = (testimony: Testimony) => {
    setActiveTestimony(testimony);
    setModalMode('read');
  };

  const openShare = () => {
    setActiveTestimony(null);
    setModalMode('share');
  };

  const closeModal = () => {
    setActiveTestimony(null);
    setModalMode(null);
  };

  return (
    <section id="stories" className="relative border-t border-(--line) px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-ember uppercase">
              <span className="size-1.5 rounded-full bg-ember" />
              <span>Testimony Wall · 1 Peter 2:9</span>
            </div>
            <h2 className="mt-3 text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[0.96] font-extrabold tracking-[-0.04em] text-(--fg)">
              From darkness into His <span className="font-serif font-normal text-ember italic">marvelous light.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-pretty text-(--muted) sm:text-lg">
              No church clichés, no pretend perfection. Living proof of what happens when Jesus meets young adults in academic pressure, workplace corruption, deep anxiety, and relational wounds.
            </p>
          </div>
          <div className="shrink-0">
            <button
              type="button"
              onClick={openShare}
              className="press inline-flex items-center gap-2 rounded-full border border-(--line) bg-(--fg) px-6 py-3.5 text-sm font-semibold text-(--bg) shadow-xs"
            >
              <span>Share Your Story</span>
              <span>+</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
          {TESTIMONY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`press shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-150 ease-out ${
                selectedCategory === cat
                  ? 'bg-ember text-white shadow-xs'
                  : 'border border-(--line) bg-(--bg) text-(--muted) hover:text-(--fg)'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonies.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              aria-label={`Read story: ${item.title} by ${item.name}`}
              onClick={() => openRead(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openRead(item);
                }
              }}
              className="group flex cursor-pointer flex-col justify-between rounded-3xl border border-(--line) bg-(--bg) p-6 transition-[border-color,box-shadow] duration-200 ease-out hover:border-ember/40 hover:shadow-lg hover:shadow-ember/5 focus-visible:outline-2 focus-visible:outline-ember"
            >
              <div>
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-ember/10 px-3 py-1 font-semibold text-ember">
                    {item.category}
                  </span>
                  <span className="text-(--muted)">{item.date}</span>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-(--fg) group-hover:text-ember">
                  {item.title}
                </h3>

                <blockquote className="mt-3 border-l-2 border-ember/60 pl-3">
                  <p className="font-serif text-sm leading-snug italic text-ember">
                    “{item.pullQuote}”
                  </p>
                </blockquote>

                <p className="mt-3 text-xs leading-relaxed text-(--muted) line-clamp-3">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-6 border-t border-(--line) pt-4">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-(--fg)">
                      {item.name}, {item.age}
                    </p>
                    <p className="text-(--muted)">{item.role} · {item.location}</p>
                  </div>
                  <span className="press rounded-full bg-ember/10 px-3 py-1 font-medium text-ember group-hover:bg-ember group-hover:text-white">
                    Read story →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modalMode && (
          <TestimonyModal
            testimony={activeTestimony}
            mode={modalMode}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
