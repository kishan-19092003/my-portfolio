export function About() {
  const skills = [
    { label: 'UI/UX Design' },
    { label: 'Figma' },
    { label: 'Adobe Illustrator' },
    { label: 'Photoshop' },
    { label: 'Web Development' },
    { label: 'React & JS' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">

        {/* ── TOP GRID: Photo left · Bio right ── */}
        <div className="about-top">

          {/* ── Left: Photo / Details Reveal Card ── */}
          <div className="about-photo-col animate-slideInLeft">
            
            {/* The placeholder which will be revealed when the photo slides away */}
            <div id="about-photo-placeholder" className="about-photo-frame" style={{ opacity: 0 }}>
            </div>

            {/* badge */}
            <div className="about-badge" style={{ marginTop: '1.25rem' }}>
              <span className="about-badge-dot" />
              Available for new projects
            </div>
          </div>

          {/* ── Right: Details ── */}
          <div className="about-bio animate-slideInRight">

            <p className="about-eyebrow">About Me</p>

            <h2 className="about-heading">
              Designing with purpose.<br />
              <span className="about-heading-line2">Building with precision.</span>
            </h2>

            <div className="about-body-block">
              <p className="about-body">
                Hi, I'm <strong>Kishan Darji</strong> — a UI/UX Designer and Creative Developer who
                sits at the intersection of <em>visual storytelling</em> and
                <em> engineering rigour</em>. I craft digital products that don't just
                look exceptional — they <em>perform flawlessly</em>.
              </p>
              <p className="about-body">
                From the first user-research session to the final line of deployed
                code, I bring the same obsessive attention to detail at every stage.
                My goal is simple: to create interfaces that feel so intuitive,
                users never have to think twice.
              </p>
            </div>

            {/* Skill tags */}
            <div className="skills-grid">
              {skills.map((s, i) => (
                <span
                  key={s.label}
                  className="skill-tag animate-fadeUp"
                  style={{ animationDelay: `${0.2 + i * 0.05}s` }}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── PROFESSIONAL STATS ROW ── */}
        <div className="animate-fadeUp" style={{ marginTop: '5.5rem', animationDelay: '0.3s' }}>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-value">1+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">20+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">15+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Job Success</span>
            </div>
          </div>
        </div>

        {/* ── SERVICES / EXPERTISE ROW ── */}
        <div className="about-services animate-fadeUp" style={{ marginTop: '5.5rem', animationDelay: '0.4s' }}>
          <p className="about-services-eyebrow">My Expertise</p>
          <div className="services-list">
            
            <div className="service-row">
              <span className="service-num">01</span>
              <div className="service-body">
                <span className="service-title">UI/UX &amp; Product Design</span>
                <span className="service-desc">Crafting intuitive, user-centric, and visually stunning interfaces. I specialize in wireframing, high-fidelity prototyping, and comprehensive design systems using Figma.</span>
              </div>
              <span className="service-arrow">→</span>
            </div>

            <div className="service-row">
              <span className="service-num">02</span>
              <div className="service-body">
                <span className="service-title">Creative Web Development</span>
                <span className="service-desc">Building responsive, lightning-fast web applications. I bridge the gap between design and code using modern technologies like React, Next.js, HTML, CSS, and interactive animations.</span>
              </div>
              <span className="service-arrow">→</span>
            </div>

            <div className="service-row">
              <span className="service-num">03</span>
              <div className="service-body">
                <span className="service-title">Brand Identity &amp; Graphics</span>
                <span className="service-desc">Designing memorable brand identities, modern logos, and aesthetic graphics that resonate with target audiences and elevate the market presence of businesses.</span>
              </div>
              <span className="service-arrow">→</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
