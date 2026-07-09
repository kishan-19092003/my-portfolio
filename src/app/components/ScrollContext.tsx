import { createContext, useContext, useState, useEffect, useRef } from 'react';

type Phase = 'hero' | 'transitioning' | 'about';

interface ScrollContextValue {
  phase: Phase;
  scrollProgress: number; // 0 to 1 during transition
}

const ScrollContext = createContext<ScrollContextValue>({ phase: 'hero', scrollProgress: 0 });

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const aboutEl = document.getElementById('about');
      if (!aboutEl) return;

      const aboutTop = aboutEl.offsetTop;
      const transitionStart = 80;
      const transitionEnd = aboutTop - (window.innerHeight * 0.2);

      if (scrollY < transitionStart) {
        setPhase('hero');
        setScrollProgress(0);
      } else if (scrollY >= transitionEnd) {
        setPhase('about');
        setScrollProgress(1);
      } else {
        setPhase('transitioning');
        const progress = (scrollY - transitionStart) / (transitionEnd - transitionStart);
        setScrollProgress(Math.min(1, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ phase, scrollProgress }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollPhase() {
  return useContext(ScrollContext);
}
