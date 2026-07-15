export function About() {
  const skills = [
    { label: 'UI/UX Design' },
    { label: 'Figma' },
    { label: 'Adobe Suite' },
    { label: 'AI Design Tools' },
    { label: 'Frontend Dev' },
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
                Hi, I'm <strong>Kishan Darji</strong> — a <em>UI/UX Designer and Creative Designer</em> passionate about transforming ideas into meaningful digital experiences. I believe exceptional design goes beyond aesthetics—it's about solving real problems and creating intuitive interactions.
              </p>
              <p className="about-body">
                From mobile app interfaces to compelling brand identities, I create solutions that are clean, purposeful, and memorable, combining user-centered thinking with modern design principles.
              </p>
              <p className="about-body">
                I also leverage <em>AI-powered creative tools</em> to enhance my workflow. By combining AI with human creativity, I produce high-quality results efficiently while maintaining originality and strategic intent.
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

            <div className="service-row">
              <span className="service-num">04</span>
              <div className="service-body">
                <span className="service-title">AI-Assisted Design Workflow</span>
                <span className="service-desc">Leveraging AI tools like Midjourney, ChatGPT, and Adobe Firefly to enhance creative workflows, accelerate ideation, and produce original, high-quality visual concepts.</span>
              </div>
              <span className="service-arrow">→</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
