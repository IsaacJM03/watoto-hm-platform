import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HMMark } from './HMMark';
import { dock } from '../motion';
import { ThemeToggle } from './ThemeToggle';
import type { Theme } from '../App';

export function Nav({ docked, theme, onToggleTheme }: { docked: boolean; theme: Theme; onToggleTheme: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Vision', href: '#manifesto' },
    { label: 'Cells', href: '#cells' },
    { label: 'Fridays', href: '#fridays' },
    { label: 'Stories', href: '#stories' },
    { label: 'Journal', href: '#journal' },
  ];

  return (
    <motion.header layoutRoot className="fixed inset-x-0 top-0 z-40">
      <div
        className="absolute inset-0 border-b border-(--line) bg-(--bg)/85 backdrop-blur-md transition-opacity duration-200"
        style={{ opacity: docked || mobileMenuOpen ? 1 : 0 }}
      />
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="press flex h-10 w-16 items-center" aria-label="History Makers, back to top">
          {docked && (
            <motion.div layoutId="hm-mark" transition={dock} className="w-12 text-(--fg)">
              <HMMark className="w-full" showWordmark={false} />
            </motion.div>
          )}
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="press rounded-full px-3 py-2 text-(--muted) transition-colors duration-150 hover:text-(--fg)"
            >
              {link.label}
            </a>
          ))}
          <a href="#talk" className="press ml-2 rounded-full bg-ember px-4 py-2 font-medium text-white shadow-xs">
            Can we talk?
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <a href="#talk" className="press rounded-full bg-ember px-3.5 py-1.5 text-xs font-semibold text-white">
            Can we talk?
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            className="press flex size-9 items-center justify-center rounded-full border border-(--line) text-sm text-(--fg)"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-(--line) bg-(--bg) px-6 py-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="press rounded-xl px-3 py-2 text-base font-medium text-(--fg) hover:bg-(--fg)/[0.04]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
