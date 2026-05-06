import { useState } from 'react';

export function About() {
  const [hovered, setHovered] = useState(false);

  const skills = [
    { label: 'UI/UX Design',      bg: '#f3e8ff', color: '#7c3aed' },
    { label: 'Web Development',   bg: '#e0e7ff', color: '#4f46e5' },
    { label: 'Adobe Illustrator', bg: '#fce7f3', color: '#db2777' },
    { label: 'Adobe Photoshop',   bg: '#d1fae5', color: '#059669' },
    { label: 'Canva',             bg: '#fef9c3', color: '#b45309' },
  ];

  return (
    <section id="about" style={{ padding: '6rem 1.5rem', background: '#fff', boxSizing: 'border-box' }}>
      <div style={{
        maxWidth: '960px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '4rem',
        flexWrap: 'wrap',
      }}>

        {/* Photo with Hover Overlay */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            width: '300px',
            height: '400px',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            flexShrink: 0,
            position: 'relative',
            cursor: 'pointer',
            boxShadow: hovered
              ? '0 28px 70px rgba(124,58,237,0.35), 0 8px 24px rgba(0,0,0,0.15)'
              : '0 20px 60px rgba(124,58,237,0.14), 0 4px 16px rgba(0,0,0,0.08)',
            transition: 'box-shadow 0.3s ease',
          }}
        >
          {/* Photo */}
          <img
            src="/projects/your-photo.jpg"
            alt="Kishan Darji"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.4s ease',
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://placehold.co/300x400/e9d5ff/7c3aed?text=Kishan';
            }}
          />

          {/* Dark Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(60,7,100,0.15) 0%, rgba(60,7,100,0.75) 100%)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
            borderRadius: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: '2rem',
          }}>
            {/* Name tag on hover */}
            <p style={{
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: 700,
              margin: '0 0 0.3rem 0',
              letterSpacing: '0.03em',
              transform: hovered ? 'translateY(0)' : 'translateY(16px)',
              transition: 'transform 0.35s ease',
            }}>
              Kishan Darji
            </p>
            <p style={{
              color: '#FFFDD1',
              fontSize: '0.85rem',
              fontWeight: 500,
              margin: 0,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transform: hovered ? 'translateY(0)' : 'translateY(16px)',
              transition: 'transform 0.4s ease',
            }}>
              UI/UX Designer
            </p>
          </div>
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: '260px' }}>
          <h2 style={{
            margin: '0 0 1.5rem 0',
            padding: 0,
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            background: 'linear-gradient(90deg, #9333ea, #6366f1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          } as React.CSSProperties}>
            About Me
          </h2>

          <p style={{ color: '#374151', fontSize: '1.05rem', lineHeight: 1.8, margin: '0 0 1rem 0', fontWeight: 500 }}>
            I'm <span style={{ color: '#7c3aed', fontWeight: 700 }}>Kishan Darji</span> — a UI/UX Designer and Creative Developer who transforms ideas into visually compelling digital experiences.
          </p>

          <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.8, margin: '0 0 1rem 0' }}>
            With a sharp eye for detail and a passion for clean design, I craft interfaces that feel intuitive, look stunning, and tell a story. From mobile app UI to brand identities, I bring strategy and aesthetics together in every pixel.
          </p>

          <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.8, margin: '0 0 2rem 0' }}>
            My toolkit spans <span style={{ color: '#6366f1', fontWeight: 600 }}>Figma, Adobe Illustrator, Photoshop</span>, and modern web technologies — always learning, always creating.
          </p>

          {/* Skill Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            {skills.map(skill => (
              <span
                key={skill.label}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  background: skill.bg,
                  color: skill.color,
                  border: `1.5px solid ${skill.bg}`,
                  letterSpacing: '0.01em',
                }}
              >
                {skill.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
