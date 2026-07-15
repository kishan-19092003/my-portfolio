import React from 'react';

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
      <style>{`
        .portfolio-section {
          background-color: #fdfcf8; /* Premium warm cream color */
          padding: 8rem 5%;
          position: relative;
          color: #0f172a;
        }

        @media (max-width: 768px) {
          .portfolio-section {
            padding: 4rem 1.5rem;
          }
        }

        .portfolio-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .portfolio-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 5rem;
        }

        @media (max-width: 768px) {
          .portfolio-header {
            margin-bottom: 3rem;
          }
        }

        .portfolio-eyebrow {
          color: #6366f1;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .portfolio-huge-text {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          color: #0f172a;
        }

        .portfolio-desc {
          font-size: 1.15rem;
          color: #475569;
          line-height: 1.6;
          max-width: 600px;
        }

        /* Editorial Style Grid */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 5rem 3rem; /* Huge images, generous spacing */
          grid-auto-flow: dense;
        }

        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        .portfolio-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          cursor: pointer;
        }

        /* Make 1st and 6th projects featured (full width) */
        .portfolio-card.featured {
          grid-column: span 2;
        }

        @media (max-width: 768px) {
          .portfolio-card.featured {
            grid-column: span 1;
          }
        }

        .portfolio-image-wrapper {
          width: 100%;
          aspect-ratio: 1/1;
          border-radius: 20px;
          overflow: hidden;
          background: #f1f5f9;
          position: relative;
          box-shadow: 0 10px 40px rgba(0,0,0,0.04);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        /* Featured images are wider */
        .portfolio-card.featured .portfolio-image-wrapper {
          aspect-ratio: 21/9;
        }
        
        @media (max-width: 1024px) {
          .portfolio-card.featured .portfolio-image-wrapper {
            aspect-ratio: 16/9;
          }
        }

        .portfolio-card:hover .portfolio-image-wrapper {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.08);
        }

        .portfolio-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .portfolio-card:hover .portfolio-img {
          transform: scale(1.04);
        }

        /* Overlay gradient for a premium touch on hover */
        .portfolio-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15,23,42,0.3), transparent);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .portfolio-card:hover .portfolio-img-overlay {
          opacity: 1;
        }

        .portfolio-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0 0.5rem;
        }

        .portfolio-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }
        
        /* Larger title for featured cards */
        .portfolio-card.featured .portfolio-title {
          font-size: 2rem;
        }

        .portfolio-card:hover .portfolio-title {
          color: #6366f1;
        }

        .portfolio-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #64748b;
          font-size: 1.05rem;
          font-weight: 500;
        }

        .portfolio-meta-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #cbd5e1;
        }

        .portfolio-meta-tag {
          color: #475569;
          font-weight: 600;
        }
      `}</style>

      <div className="portfolio-container">
        
        {/* Header */}
        <div className="portfolio-header animate-fadeUp">
          <p className="portfolio-eyebrow">Selected Works</p>
          <h2 className="portfolio-huge-text">Projects.</h2>
          <p className="portfolio-desc">
            A curated collection of design and development work spanning UI/UX, brand identity, and web experiences.
          </p>
        </div>

        {/* Editorial Style Grid */}
        <div className="portfolio-grid">
          {projects.map((p, i) => {
            // Intelligent Editorial Layout: Wide projects (Web/Banners) are featured (span 2), Mobile/Posters are square (span 1)
            const isFeatured = i === 1 || i === 5;
            
            return (
              <div 
                key={i} 
                className={"portfolio-card animate-fadeUp " + (isFeatured ? "featured" : "")}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="portfolio-image-wrapper">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="portfolio-img"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://placehold.co/1200x800/f1f5f9/64748b?text=" + encodeURIComponent(p.title);
                    }}
                  />
                  <div className="portfolio-img-overlay"></div>
                </div>
                <div className="portfolio-info">
                  <h3 className="portfolio-title">{p.title}</h3>
                  <div className="portfolio-meta">
                    <span className="portfolio-meta-tag">{p.tag}</span>
                    <span className="portfolio-meta-dot"></span>
                    <span>{p.subtitle}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}