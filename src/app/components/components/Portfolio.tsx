const projects = [
  {
    num: '01',
    title: 'Yummy Taste Application',
    subtitle: 'Mobile App Design',
    tag: 'UI/UX Design',
    img: '/projects/yummy-taste1.png',
    year: '2024',
  },
  {
    num: '02',
    title: 'Saraswati Academy',
    subtitle: 'Educational Website',
    tag: 'Web Design',
    img: '/projects/saraswati.png',
    year: '2024',
  },
  {
    num: '03',
    title: 'Instagram UI Clone',
    subtitle: 'Social Media Design',
    tag: 'UI Design',
    img: '/projects/instagram.png',
    year: '2023',
  },
  {
    num: '04',
    title: 'Digital Sale Poster',
    subtitle: 'Graphic Design',
    tag: 'Graphic Design',
    img: '/projects/digital-sale.png',
    year: '2023',
  },
  {
    num: '05',
    title: 'Experience Dubai',
    subtitle: 'Travel Poster',
    tag: 'Graphic Design',
    img: '/projects/dubai.png',
    year: '2023',
  },
  {
    num: '06',
    title: 'Leo Business',
    subtitle: 'Digital Marketing',
    tag: 'Graphic Design',
    img: '/projects/leo.png',
    year: '2023',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">

        {/* ── Header ── */}
        <div className="portfolio-header animate-fadeUp">
          <p className="portfolio-eyebrow">Selected Works</p>
          <div className="portfolio-header-row">
            <h2 className="portfolio-heading">Projects</h2>
            <p className="portfolio-subtitle">
              A curated collection of design and development work spanning UI/UX, brand identity, and web experiences.
            </p>
          </div>
        </div>

        {/* ── Project List ── */}
        <div className="project-list">
          {projects.map((p, i) => (
            <div
              key={i}
              className="project-row animate-fadeUp"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Hover image preview */}
              <div className="project-row-preview">
                <img
                  src={p.img}
                  alt={p.title}
                  className="project-row-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://placehold.co/480x300/f1f5f9/4f46e5?text=${encodeURIComponent(p.title)}`;
                  }}
                />
              </div>

              <div className="project-row-inner">
                <span className="project-row-num">{p.num}</span>

                <div className="project-row-info">
                  <h3 className="project-row-title">{p.title}</h3>
                  <p className="project-row-sub">{p.subtitle}</p>
                </div>

                <div className="project-row-meta">
                  <span className="project-row-tag">{p.tag}</span>
                  <span className="project-row-year">{p.year}</span>
                </div>

                <div className="project-row-arrow">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer ── */}
        <div className="portfolio-footer animate-fadeUp">
          <button className="view-all-btn">
            View All Projects
            <svg className="view-all-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}