import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { type Testimony, type TestimonyCategory, TESTIMONY_CATEGORIES } from '../data/testimonies';

interface TestimonyModalProps {
  testimony?: Testimony | null;
  mode: 'read' | 'share';
  onClose: () => void;
}

export function TestimonyModal({ testimony, mode, onClose }: TestimonyModalProps) {
  const [shareName, setShareName] = useState('');
  const [shareContact, setShareContact] = useState('');
  const [shareCampus, setShareCampus] = useState('');
  const [shareCategory, setShareCategory] = useState<TestimonyCategory>('Campus & Freedom');
  const [shareTitle, setShareTitle] = useState('');
  const [shareStory, setShareStory] = useState('');
  const [contactError, setContactError] = useState('');
  const [shareSubmitting, setShareSubmitting] = useState(false);
  const [shareSubmitted, setShareSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const root = document.documentElement;
    const body = document.body;
    const prevRootOverflow = root.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    root.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      root.style.overflow = prevRootOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [onClose]);

  const handleShareSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shareName.trim() || !shareStory.trim()) return;
    if (!shareContact.trim() || shareContact.trim().length < 5) {
      setContactError('Please provide a valid WhatsApp number or email address');
      return;
    }
    setContactError('');
    setShareSubmitting(true);
    setTimeout(() => {
      setShareSubmitting(false);
      setShareSubmitted(true);
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8, transition: { duration: 0.16, ease: [0.23, 1, 0.32, 1] } }}
        transition={{ type: 'spring', duration: 0.4, bounce: 0.12 }}
        className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-(--line) bg-(--bg) p-6 text-(--fg) shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="press absolute top-5 right-5 flex size-9 items-center justify-center rounded-full border border-(--line) text-(--muted) hover:text-(--fg)"
        >
          ✕
        </button>

        {mode === 'read' && testimony && (
          <article className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-(--line) pb-4 text-xs">
              <span className="rounded-full bg-ember/10 px-3 py-1 font-semibold text-ember">
                {testimony.category}
              </span>
              <span className="text-(--muted)">
                {testimony.date} · {testimony.location}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-(--fg) sm:text-3xl">
                {testimony.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-(--muted)">
                Story by <strong className="text-(--fg)">{testimony.name}</strong>, {testimony.age} · {testimony.role}
              </p>
            </div>

            {/* Pull Quote */}
            <div className="border-l-2 border-ember pl-4">
              <p className="font-serif text-lg leading-snug italic text-ember sm:text-xl">
                “{testimony.pullQuote}”
              </p>
            </div>

            {/* Story Body */}
            <div className="space-y-4 text-sm leading-relaxed text-(--muted) sm:text-base sm:leading-relaxed">
              {testimony.fullStory.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Turning Point Box */}
            <div className="rounded-2xl border border-ember/20 bg-ember/5 p-4 sm:p-5">
              <p className="text-xs font-bold tracking-wider text-ember uppercase">The Turning Point</p>
              <p className="mt-1.5 text-sm font-medium text-(--fg)">{testimony.turningPoint}</p>
            </div>

            {/* Scripture & Encouragement */}
            <div className="grid gap-4 rounded-2xl border border-(--line) bg-(--fg)/[0.02] p-4 text-xs sm:grid-cols-2 sm:p-5">
              <div>
                <span className="font-semibold text-ember uppercase">Scripture Anchor</span>
                <p className="mt-1 font-serif italic text-(--fg)">{testimony.scriptureAnchor}</p>
              </div>
              <div>
                <span className="font-semibold text-ember uppercase">Words of Encouragement</span>
                <p className="mt-1 text-(--muted)">{testimony.encouragement}</p>
              </div>
            </div>

            <div className="border-t border-(--line) pt-4 text-right">
              <button
                type="button"
                onClick={onClose}
                className="press rounded-full bg-ember px-6 py-2.5 text-sm font-semibold text-white shadow-xs"
              >
                Close Story
              </button>
            </div>
          </article>
        )}

        {mode === 'share' && (
          <div>
            {!shareSubmitted ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-ember uppercase">
                  <span className="size-1.5 rounded-full bg-ember" />
                  <span>Proclaim His Light</span>
                </div>
                <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  Share your <span className="font-serif font-normal text-ember italic">testimony.</span>
                </h3>
                <p className="mt-2 text-sm text-(--muted)">
                  “...that you may proclaim the praises of Him who called you out of darkness into His marvelous light.” (1 Peter 2:9). Your breakthrough will give someone else permission to hope.
                </p>

                <form onSubmit={handleShareSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="share-name" className="block text-xs font-semibold tracking-wide text-(--fg)">
                        Name (or First Name + Initial) *
                      </label>
                      <input
                        id="share-name"
                        type="text"
                        required
                        placeholder="e.g. David M."
                        value={shareName}
                        onChange={(e) => setShareName(e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-(--line) bg-(--bg) px-3.5 py-2.5 text-sm text-(--fg) placeholder:text-(--muted)/60 focus:border-ember focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="share-contact" className="block text-xs font-semibold tracking-wide text-(--fg)">
                        WhatsApp or Email *
                      </label>
                      <input
                        id="share-contact"
                        type="text"
                        required
                        placeholder="+256 700 000 000"
                        value={shareContact}
                        onChange={(e) => {
                          setShareContact(e.target.value);
                          if (contactError) setContactError('');
                        }}
                        className="mt-1.5 w-full rounded-xl border border-(--line) bg-(--bg) px-3.5 py-2.5 text-sm text-(--fg) placeholder:text-(--muted)/60 focus:border-ember focus:outline-none"
                      />
                      {contactError && (
                        <p className="mt-1 text-xs text-rose-500 font-medium">{contactError}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="share-campus" className="block text-xs font-semibold tracking-wide text-(--fg)">
                        Campus / Workplace / City
                      </label>
                      <input
                        id="share-campus"
                        type="text"
                        placeholder="e.g. Kyambogo / Bugolobi"
                        value={shareCampus}
                        onChange={(e) => setShareCampus(e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-(--line) bg-(--bg) px-3.5 py-2.5 text-sm text-(--fg) placeholder:text-(--muted)/60 focus:border-ember focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="share-category" className="block text-xs font-semibold tracking-wide text-(--fg)">
                        Theme / Category
                      </label>
                      <select
                        id="share-category"
                        value={shareCategory}
                        onChange={(e) => setShareCategory(e.target.value as TestimonyCategory)}
                        className="mt-1.5 w-full rounded-xl border border-(--line) bg-(--bg) px-3 py-2.5 text-sm font-medium text-(--fg) focus:border-ember focus:outline-none"
                      >
                        {TESTIMONY_CATEGORIES.filter((c) => c !== 'All Stories').map((c) => (
                          <option key={c} value={c} className="bg-(--bg) text-(--fg)">
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="share-title" className="block text-xs font-semibold tracking-wide text-(--fg)">
                      Headline / One-line summary
                    </label>
                    <input
                      id="share-title"
                      type="text"
                      placeholder="e.g. How Jesus broke my addiction to validation"
                      value={shareTitle}
                      onChange={(e) => setShareTitle(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-(--line) bg-(--bg) px-3.5 py-2.5 text-sm text-(--fg) placeholder:text-(--muted)/60 focus:border-ember focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="share-story" className="block text-xs font-semibold tracking-wide text-(--fg)">
                      Your Story (What was your darkness, and how did God bring light?) *
                    </label>
                    <textarea
                      id="share-story"
                      rows={5}
                      required
                      placeholder="Be as honest and real as you want. Raw stories heal real wounds..."
                      value={shareStory}
                      onChange={(e) => setShareStory(e.target.value)}
                      className="mt-1.5 w-full resize-none rounded-xl border border-(--line) bg-(--bg) px-3.5 py-2.5 text-sm text-(--fg) placeholder:text-(--muted)/60 focus:border-ember focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={shareSubmitting}
                      className="press flex w-full items-center justify-center rounded-full bg-ember py-3.5 text-sm font-semibold text-white shadow-md disabled:opacity-70"
                    >
                      {shareSubmitting ? 'Submitting your story...' : 'Submit Testimony'}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-6 text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-ember/15 text-2xl text-ember">
                  ✓
                </div>
                <p className="mt-4 text-xs font-semibold tracking-wider text-ember uppercase">Glory to God</p>
                <h3 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                  Thank you for your voice, <span className="font-serif font-normal text-ember italic">{shareName}!</span>
                </h3>
                <p className="mt-3 text-sm text-(--muted)">
                  Your testimony has been submitted. Our pastoral and media team reviews every submission with care and honor before publishing it on the wall.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={onClose}
                    className="press rounded-full bg-ember px-6 py-2.5 text-sm font-semibold text-white"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
