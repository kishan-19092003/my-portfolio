import { useState } from 'react';

const projects = [
  {
    title: 'Yummy Taste Application',
    subtitle: 'Mobile App Design',
    tag: 'UI/UX Design',
    images: [
      '/projects/yummy-taste1.png',
      '/projects/yummy-taste2.png',
      '/projects/yummy-taste3.png',
      '/projects/yummy-taste4.png',
    ],
  },
  {
    title: 'Saraswati Academy',
    subtitle: 'Educational Website',
    tag: 'Web Design',
    images: ['/projects/saraswati.png'],
  },
  {
    title: 'Instagram UI Clone',
    subtitle: 'Social Media Design',
    tag: 'UI Design',
    images: ['/projects/instagram.png'],
  },
  {
    title: 'Digital Sale Poster',
    subtitle: 'Graphic Design',
    tag: 'Graphic Design',
    images: ['/projects/digital-sale.png'],
  },
  {
    title: 'Experience Dubai',
    subtitle: 'Travel Poster',
    tag: 'Graphic Design',
    images: ['/projects/dubai.png'],
  },
  {
    title: 'Leo Business',
    subtitle: 'Digital Marketing',
    tag: 'Graphic Design',
    images: ['/projects/leo.png'],
  },
  {
    title: 'Paravomil Flyaer',
    subtitle: 'Flyer Design',
    tag: 'Graphic Design',
    images: ['/projects/Paravomil Flyaer copy.jpg'],
  },
  {
    title: 'All Identity Card',
    subtitle: 'Graphic Design',
    tag: 'Graphic Design',
    images: ['/projects/All Identity Card.png'],
  },
];

export function Portfolio() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);
  const next = () => setCurrent((c) => (c + 1) % projects.length);

  const visible = [
    projects[current % projects.length],
    projects[(current + 1) % projects.length],
    projects[(current + 2) % projects.length],
  ];

  return (
    <section id="portfolio" style={{ padding: '80px 24px', background: '#f9fafb' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <h2 style={{
          fontSize: '3rem', fontWeight: 800, textAlign: 'center', marginBottom: '12px',
          background: 'linear-gradient(90deg, #9333ea, #6366f1)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>
          Selected Work
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '48px', fontSize: '1.1rem' }}>
          A collection of my recent projects and creative explorations
        </p>

        {/* Cards */}
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {visible.map((p, i) => (
              <div
                key={p.title + i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'white',
                  boxShadow: hovered === i
                    ? '0 20px 40px rgba(124,58,237,0.2)'
                    : '0 4px 15px rgba(0,0,0,0.08)',
                  transform: hovered === i ? 'translateY(-8px)' : 'translateY(0)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}>

                {/* Image Box */}
                <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative', background: '#f3f4f6' }}>
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      transform: hovered === i ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.3s ease',
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://placehold.co/400x300/e9d5ff/7c3aed?text=${encodeURIComponent(p.title)}`;
                    }}
                  />
                  {hovered === i && (
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(124,58,237,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <span style={{
                        background: 'white', color: '#7c3aed',
                        padding: '8px 20px', borderRadius: '999px',
                        fontWeight: 600, fontSize: '14px'
                      }}>
                        View Project
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div style={{ padding: '16px' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#1f2937', marginBottom: '4px' }}>{p.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '8px' }}>{p.subtitle}</p>
                  <span style={{
                    background: '#f3e8ff', color: '#7c3aed',
                    padding: '4px 12px', borderRadius: '999px',
                    fontSize: '12px', fontWeight: 500
                  }}>
                    {p.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          {['‹', '›'].map((arrow, idx) => (
            <button key={arrow} onClick={idx === 0 ? prev : next}
              style={{
                position: 'absolute',
                [idx === 0 ? 'left' : 'right']: '-20px',
                top: '50%', transform: 'translateY(-50%)',
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'white', border: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                fontSize: '24px', color: '#7c3aed',
                cursor: 'pointer', zIndex: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
              {arrow}
            </button>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
          {projects.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              style={{
                width: current === i ? '24px' : '8px',
                height: '8px', borderRadius: '999px', border: 'none',
                background: current === i ? '#7c3aed' : '#d1d5db',
                cursor: 'pointer', transition: 'all 0.3s ease',
              }} />
          ))}
        </div>
      </div>
    </section>
  );
}