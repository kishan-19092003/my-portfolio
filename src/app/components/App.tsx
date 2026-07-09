import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

function MagicPhoto() {
  const photoRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let heroRect: DOMRect | null = null;
    let aboutRect: DOMRect | null = null;
    let docHeroTop = 0;
    let docAboutTop = 0;

    const updateLayout = () => {
      const heroEl = document.getElementById('hero-photo-placeholder');
      const aboutEl = document.getElementById('about-photo-placeholder');
      if (heroEl) {
        heroRect = heroEl.getBoundingClientRect();
        docHeroTop = heroRect.top + window.scrollY;
      }
      if (aboutEl) {
        aboutRect = aboutEl.getBoundingClientRect();
        docAboutTop = aboutRect.top + window.scrollY;
      }
      
      onScroll(); // Apply immediately
    };

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const onScroll = () => {
      if (!photoRef.current || !heroRect || !aboutRect) return;
      
      const scrollY = window.scrollY;
      
      const endScroll = docAboutTop - (window.innerHeight * 0.15);
      const startScroll = 20; 
      
      let p = 0;
      if (scrollY > startScroll) {
        p = (scrollY - startScroll) / (endScroll - startScroll);
      }
      p = Math.min(Math.max(p, 0), 1);

      const easedP = easeInOutCubic(p);

      const currentScreenHeroTop = docHeroTop - scrollY;
      const currentScreenAboutTop = docAboutTop - scrollY;

      // Interpolate the viewport position
      const currentTop = currentScreenHeroTop + (currentScreenAboutTop - currentScreenHeroTop) * easedP;
      const currentLeft = heroRect.left + (aboutRect.left - heroRect.left) * easedP;
      
      // Interpolate dimensions
      const currentWidth = heroRect.width + (aboutRect.width - heroRect.width) * easedP;
      const currentHeight = heroRect.height + (aboutRect.height - heroRect.height) * easedP;
      
      // Interpolate rotation
      const currentRotateZ = 2 * (1 - easedP); // 2deg to 0deg
      const currentRotateY = easedP * 360;     // 0deg to 360deg

      // Interpolate opacity for overlay
      let opacity = 0;
      if (easedP > 0.1 && easedP < 0.9) {
        opacity = Math.sin(((easedP - 0.1) / 0.8) * Math.PI);
      }

      photoRef.current.style.top = `${currentTop}px`;
      photoRef.current.style.left = `${currentLeft}px`;
      photoRef.current.style.width = `${currentWidth}px`;
      photoRef.current.style.height = `${currentHeight}px`;
      photoRef.current.style.transform = `perspective(1200px) rotateZ(${currentRotateZ}deg) rotateY(${currentRotateY}deg)`;
      
      // Make sure it's visible after first layout calc
      photoRef.current.style.opacity = '1';

      if (overlayRef.current) {
        overlayRef.current.style.opacity = String(opacity);
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    window.addEventListener('scroll', onScroll, { passive: true });
    
    setTimeout(updateLayout, 100);
    setTimeout(updateLayout, 500);
    setTimeout(updateLayout, 1500); 

    return () => {
      window.removeEventListener('resize', updateLayout);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      ref={photoRef}
      style={{
        position: 'fixed',
        zIndex: 50,
        transformStyle: 'preserve-3d',
        borderRadius: '1.25rem',
        overflow: 'hidden',
        boxShadow: '0 25px 60px rgba(15,23,42,0.18)',
        willChange: 'top, left, width, height, transform, opacity',
        top: '-1000px', 
        opacity: 0,
      }}
    >
      <img
        src="/projects/your-photo.jpg"
        alt="Kishan Darji"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top center',
          display: 'block',
        }}
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            'https://placehold.co/480x600/111827/ffffff?text=Kishan+Darji';
        }}
      />
      {/* Details overlay */}
      <div 
        ref={overlayRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, rgba(30,30,60,0.55) 0%, rgba(99,102,241,0.45) 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '2.5rem 2rem',
          opacity: 0,
          willChange: 'opacity'
        }}
      >
        <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '1.25rem' }}>Design. Code. Deliver.</p>
        <div style={{ width: '36px', height: '1.5px', background: '#fff', opacity: 0.35, marginBottom: '1rem' }} />
        <p style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Kishan Darji</p>
        <p style={{ marginTop: '0.35rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500, letterSpacing: '0.02em' }}>UI/UX Designer · Creative Developer</p>
      </div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <MagicPhoto />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}