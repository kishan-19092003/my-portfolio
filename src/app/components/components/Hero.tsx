export function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f3e8ff 0%, #e0f2fe 35%, #fce7f3 65%, #fff1f2 100%)',
        padding: '2rem',
        boxSizing: 'border-box',
      }}
    >
      {/* Glow blobs */}
      <div style={{
        position: 'absolute', top: '5rem', left: '25%',
        width: '320px', height: '320px', borderRadius: '50%',
        opacity: 0.35, filter: 'blur(80px)', pointerEvents: 'none',
        background: 'radial-gradient(circle, #c084fc 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', bottom: '5rem', right: '20%',
        width: '320px', height: '320px', borderRadius: '50%',
        opacity: 0.35, filter: 'blur(80px)', pointerEvents: 'none',
        background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        width: '400px', height: '400px', borderRadius: '50%',
        opacity: 0.18, filter: 'blur(90px)', pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, #f472b6 0%, transparent 70%)',
      }} />

      {/* Centered content */}
      <div style={{
        position: 'relative', zIndex: 10,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center',
        width: '100%', maxWidth: '900px',
      }}>

        {/* Badge */}
        <div style={{
          marginBottom: '2rem',
          padding: '0.6rem 1.5rem',
          borderRadius: '9999px',
          background: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 2px 20px rgba(147,51,234,0.12), 0 1px 4px rgba(0,0,0,0.07)',
          border: '1px solid rgba(255,255,255,0.95)',
          fontSize: '0.9rem',
          fontWeight: 500,
          color: '#555',
          display: 'inline-block',
          letterSpacing: '0.02em',
        }}>
          UI/UX Designer & Developer
        </div>

        {/* Main Title */}
        <h1 style={{
          margin: 0, padding: 0,
          fontSize: 'clamp(3.5rem, 9vw, 7.5rem)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          background: 'linear-gradient(90deg, #9333ea 0%, #6366f1 45%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textAlign: 'center',
          textFillColor: 'transparent',
        } as React.CSSProperties}>
          Creative Designer
        </h1>

        {/* Subtitle */}
        <p style={{
          margin: '1.5rem 0 0 0',
          fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
          color: '#6b7280',
          fontWeight: 400,
          lineHeight: 1.6,
          maxWidth: '480px',
          textAlign: 'center',
        }}>
          Crafting beautiful experiences through design & code
        </p>

        {/* CTA Button */}
        <button
          style={{
            marginTop: '2.5rem',
            padding: '0.95rem 2.5rem',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(124,58,237,0.38)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            letterSpacing: '0.01em',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.06)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 14px 40px rgba(124,58,237,0.52)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 30px rgba(124,58,237,0.38)';
          }}
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View My Work
        </button>
      </div>
    </section>
  );
}
