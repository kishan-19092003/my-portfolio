import './animations.css';

export function Hero() {
  const skills = ['UI/UX Design', 'Figma', 'Web Dev', 'Branding', 'Photoshop'];

  return (
    <section className="hero-section">

      {/* ── Animated vertical grid lines ── */}
      <div className="hero-grid" aria-hidden="true">
        <div className="hero-grid-line" style={{ animationDelay: '0s'   }} />
        <div className="hero-grid-line" style={{ animationDelay: '0.3s' }} />
        <div className="hero-grid-line" style={{ animationDelay: '0.6s' }} />
        <div className="hero-grid-line" style={{ animationDelay: '0.9s' }} />
        <div className="hero-grid-line" style={{ animationDelay: '1.2s' }} />
      </div>

      {/* ── Soft blobs ── */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="hero-inner">

        {/* ══ LEFT COLUMN ══ */}
        <div className="hero-content">

          {/* Top row */}
          <div className="hero-top-row animate-fadeUp" style={{ animationDelay: '0.05s' }}>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              UI/UX Designer &amp; Developer
            </div>
          </div>

          {/* Title block */}
          <div className="hero-title-block">
            
            <div className="reveal-text-container">
              <div className="reveal-line reveal-line-left" />
              <h1 className="hero-title animate-slideFromLeft">Building</h1>
            </div>
            
            <div className="hero-title-row">
              <div className="reveal-text-container reveal-right">
                <span className="hero-title hero-title-outline animate-slideFromRight">Digital</span>
                <div className="reveal-line reveal-line-right" />
              </div>
              <div className="hero-title-tag animate-fadeUp" style={{ animationDelay: '0.6s' }}>
                <span className="hero-title-tag-label">Experiences</span>
              </div>
            </div>
          </div>

          {/* Divider + subtitle */}
          <div className="hero-divider animate-fadeUp" style={{ animationDelay: '0.5s' }}>
            <div className="hero-divider-line" />
            <p className="hero-subtitle">
              I craft intuitive, beautiful, and user-centered interfaces that leave a lasting impression — from concept to pixel-perfect code.
            </p>
          </div>

          {/* CTA */}
          <div className="hero-cta-row animate-fadeUp" style={{ animationDelay: '0.65s' }}>
            <button
              className="hero-btn"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <svg className="hero-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kishandarji03@gmail.com"
              target="_blank" rel="noreferrer"
              className="hero-link"
            >
              Say Hello →
            </a>
          </div>
        </div>

        {/* ══ RIGHT COLUMN ══ */}
        <div className="hero-visual animate-slideInRight" style={{ animationDelay: '0.3s' }}>

          {/* Photo card Placeholder */}
          <div
            id="hero-photo-placeholder"
            className="hero-card"
            style={{
              opacity: 0,
              transform: 'none', /* Overrides the rotate(2deg) so bounding box is perfectly calculated */
            }}
          >
          </div>

          {/* Floating skill pills */}
          {skills.map((s, i) => (
            <div
              key={s}
              className="hero-float-pill animate-fadeUp"
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
              data-index={i}
            >
              {s}
            </div>
          ))}

          {/* Floating stat card */}
          <div className="hero-stat-card animate-fadeUp" style={{ animationDelay: '0.9s' }}>
            <span className="hero-stat-num">20+</span>
            <span className="hero-stat-lbl">Projects<br />Delivered</span>
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="hero-scroll animate-fadeUp" style={{ animationDelay: '1.1s' }}>
        <div className="hero-scroll-line" />
        <span className="hero-scroll-label">Scroll</span>
      </div>

    </section>
  );
}
