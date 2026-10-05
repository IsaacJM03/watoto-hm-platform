import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { type Article } from '../data/articles';

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
}

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  const [copied, setCopied] = useState(false);

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

  const copyFallback = (text: string) => {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Graceful no-op
    }
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#journal-${article.slug}`;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {
          copyFallback(url);
        });
    } else {
      copyFallback(url);
    }
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

      <motion.article
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8, transition: { duration: 0.16, ease: [0.23, 1, 0.32, 1] } }}
        transition={{ type: 'spring', duration: 0.4, bounce: 0.12 }}
        className="relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-(--line) bg-(--bg) p-6 text-(--fg) shadow-2xl sm:p-10"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close article"
          className="press absolute top-5 right-5 flex size-9 items-center justify-center rounded-full border border-(--line) text-(--muted) hover:text-(--fg)"
        >
          ✕
        </button>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-ember/10 px-3 py-1 font-semibold text-ember">
            {article.category}
          </span>
          <span className="text-(--muted)">
            {article.publishDate} · {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-4 text-2xl leading-[1.08] font-bold tracking-tight text-(--fg) sm:text-3xl lg:text-4xl">
          {article.title}
        </h1>

        {/* Author Byline */}
        <div className="mt-5 flex items-center gap-3 border-y border-(--line) py-3.5">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ember text-sm font-bold text-white">
            {article.author.avatarInitials}
          </div>
          <div>
            <p className="text-sm font-semibold text-(--fg)">{article.author.name}</p>
            <p className="text-xs text-(--muted)">{article.author.role}</p>
          </div>
        </div>

        {/* Pull Quote */}
        <blockquote className="my-6 border-l-2 border-ember pl-4">
          <p className="font-serif text-lg leading-relaxed italic text-ember sm:text-xl">
            “{article.pullQuote}”
          </p>
        </blockquote>

        {/* Essay Sections */}
        <div className="space-y-6 text-sm leading-relaxed text-(--muted) sm:text-base sm:leading-relaxed">
          {article.content.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              {sec.sectionHeading && (
                <h2 className="pt-2 text-lg font-bold tracking-tight text-(--fg) sm:text-xl">
                  {sec.sectionHeading}
                </h2>
              )}
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Key Takeaway Callout */}
        <div className="mt-8 rounded-2xl border border-ember/25 bg-ember/5 p-4 sm:p-5">
          <p className="text-xs font-bold tracking-wider text-ember uppercase">Core Reflection</p>
          <p className="mt-1.5 font-serif text-base italic text-(--fg) sm:text-lg">
            “{article.keyTakeaway}”
          </p>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-(--line) pt-4">
          <button
            type="button"
            onClick={handleCopyLink}
            className="press rounded-full border border-(--line) px-4 py-2 text-xs font-medium text-(--fg) hover:border-ember"
          >
            {copied ? 'Link copied! ✓' : 'Share essay link'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="press rounded-full bg-ember px-5 py-2 text-xs font-semibold text-white shadow-xs"
          >
            Back to Journal
          </button>
        </div>
      </motion.article>
    </div>
  );
}
