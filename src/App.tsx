import { useEffect, useState } from 'react';
import { LayoutGroup, MotionConfig, useMotionValueEvent, useScroll } from 'framer-motion';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Roundtable } from './components/Roundtable';
import { CellDirectory } from './components/CellDirectory';
import { Gatherings } from './components/Gatherings';
import { TestimonyWall } from './components/TestimonyWall';
import { Journal } from './components/Journal';
import { Footer } from './components/Footer';
import { Wireframes } from './components/Wireframes';

export type Theme = 'light' | 'dark';

const DOCK_AT = 160;

export default function App() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  );
  const [route, setRoute] = useState(location.hash);
  const [docked, setDocked] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setDocked(y > DOCK_AT));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('hm-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onHash = () => setRoute(location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const wireframes = route === '#/wireframes';

  useEffect(() => {
    if (wireframes) window.scrollTo(0, 0);
  }, [wireframes]);

  if (wireframes) return <Wireframes />;

  return (
    <MotionConfig reducedMotion="user">
      <LayoutGroup>
        <Nav docked={docked} theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero docked={docked} />
          <Manifesto />
          <Roundtable />
          <CellDirectory />
          <Gatherings />
          <TestimonyWall />
          <Journal />
        </main>
        <Footer theme={theme} onToggleTheme={toggleTheme} />
      </LayoutGroup>
    </MotionConfig>
  );
}
