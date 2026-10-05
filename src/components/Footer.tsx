import { ThemeToggle } from './ThemeToggle';
import type { Theme } from '../App';

const socials = ['Instagram', 'TikTok', 'YouTube', 'X', 'Facebook'];

export function Footer({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  return (
    <footer className="border-t border-(--line) px-5 py-10 text-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
        <div>
          <p className="font-medium text-(--fg)">History Makers · Watoto Church</p>
          <p className="mt-0.5 text-xs text-(--muted)">Belong. Become. Build · 1 Peter 2:9 NKJV</p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {socials.map((s) => (
            <li key={s}>
              <a href="#" className="text-(--muted) transition-colors duration-150 hover:text-(--fg)">
                {s}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#/wireframes" className="text-(--muted) transition-colors duration-150 hover:text-(--fg)">
            Wireframes
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </footer>
  );
}
