import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { type Article, type ArticleCategory, ARTICLE_CATEGORIES, ARTICLES } from '../data/articles';
import { ArticleModal } from './ArticleModal';

export function Journal() {
  const [selectedCategory, setSelectedCategory] = useState<'All Essays' | ArticleCategory>('All Essays');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#journal-')) {
        const slug = hash.replace('#journal-', '');
        const matched = ARTICLES.find((a) => a.slug === slug);
        if (matched) {
          setActiveArticle(matched);
        }
      }
    };
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const handleOpenArticle = (article: Article) => {
    setActiveArticle(article);
    window.history.replaceState(null, '', `#journal-${article.slug}`);
  };

  const handleCloseArticle = () => {
    setActiveArticle(null);
    if (window.location.hash.startsWith('#journal-')) {
      window.history.replaceState(null, '', '#journal');
    }
  };

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All Essays') return ARTICLES;
    return ARTICLES.filter((a) => a.category === selectedCategory);
  }, [selectedCategory]);

  const featuredArticle = filteredArticles[0];
  const restArticles = filteredArticles.slice(1);

  return (
    <section id="journal" className="relative border-t border-(--line) px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-ember uppercase">
              <span className="size-1.5 rounded-full bg-ember" />
              <span>The Journal · History Makers Essays</span>
            </div>
            <h2 className="mt-3 text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[0.96] font-extrabold tracking-[-0.04em] text-(--fg)">
              Faith, culture & <span className="font-serif font-normal text-ember italic">calling.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-pretty text-(--muted) sm:text-lg">
              High-craft editorial essays on navigating ambition, intentional relationships, the theology of waiting, and marketplace priesthood in Kampala and beyond.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
          {ARTICLE_CATEGORIES.map((cat) => (
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

        {/* Featured Article Card */}
        {featuredArticle && (
          <div
            role="button"
            tabIndex={0}
            aria-label={`Read featured essay: ${featuredArticle.title}`}
            onClick={() => handleOpenArticle(featuredArticle)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenArticle(featuredArticle);
              }
            }}
            className="group mt-8 cursor-pointer rounded-3xl border border-(--line) bg-(--bg) p-6 transition-[border-color,box-shadow] duration-200 ease-out hover:border-ember/40 hover:shadow-xl hover:shadow-ember/5 focus-visible:outline-2 focus-visible:outline-ember sm:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-ember/10 px-3 py-1 font-semibold text-ember">
                    Featured Essay
                  </span>
                  <span className="text-(--muted)">
                    {featuredArticle.category} · {featuredArticle.readTime}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-(--fg) group-hover:text-ember sm:text-3xl lg:text-4xl">
                  {featuredArticle.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-(--muted) sm:text-base">
                  {featuredArticle.excerpt}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-ember text-xs font-bold text-white">
                    {featuredArticle.author.avatarInitials}
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-(--fg)">{featuredArticle.author.name}</p>
                    <p className="text-(--muted)">{featuredArticle.author.role} · {featuredArticle.publishDate}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-ember/20 bg-ember/5 p-6 lg:col-span-5">
                <p className="font-serif text-lg leading-relaxed italic text-ember sm:text-xl">
                  “{featuredArticle.pullQuote}”
                </p>
                <div className="mt-6 flex items-center justify-between text-xs font-semibold text-ember">
                  <span>Read full essay</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Remaining Articles Grid */}
        {restArticles.length > 0 && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {restArticles.map((article) => (
              <div
                key={article.id}
                role="button"
                tabIndex={0}
                aria-label={`Read essay: ${article.title}`}
                onClick={() => handleOpenArticle(article)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenArticle(article);
                  }
                }}
                className="group flex cursor-pointer flex-col justify-between rounded-3xl border border-(--line) bg-(--bg) p-6 transition-[border-color,box-shadow] duration-200 ease-out hover:border-ember/40 hover:shadow-lg hover:shadow-ember/5 focus-visible:outline-2 focus-visible:outline-ember sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="rounded-full bg-ember/10 px-3 py-1 font-semibold text-ember">
                      {article.category}
                    </span>
                    <span className="text-(--muted)">{article.readTime}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-(--fg) group-hover:text-ember sm:text-2xl">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-(--muted) line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-(--line) pt-4 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-7 items-center justify-center rounded-full bg-ember/15 text-[11px] font-bold text-ember">
                      {article.author.avatarInitials}
                    </div>
                    <div>
                      <p className="font-semibold text-(--fg)">{article.author.name}</p>
                      <p className="text-[11px] text-(--muted)">{article.publishDate}</p>
                    </div>
                  </div>
                  <span className="font-semibold text-ember group-hover:translate-x-0.5 transition-transform">
                    Read →
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeArticle && (
          <ArticleModal
            article={activeArticle}
            onClose={handleCloseArticle}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
