import React from 'react';
import { PenTool, BrainCircuit, Code2 } from 'lucide-react';

export function Tools() {
  const categories = [
    {
      title: "Design",
      icon: PenTool,
      accent: "#ec4899",
      accentBg: "#fdf2f8", // Very light pink
      tools: [
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
        { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" },
        { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" }
      ]
    },
    {
      title: "AI & Creative Tools",
      icon: BrainCircuit,
      accent: "#a855f7",
      accentBg: "#faf5ff", // Very light purple
      tools: [
        { name: "ChatGPT", icon: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=128" },
        { name: "Midjourney", icon: "https://www.google.com/s2/favicons?domain=midjourney.com&sz=128" },
        { name: "Firefly", icon: "https://www.google.com/s2/favicons?domain=firefly.adobe.com&sz=128" },
        { name: "Leonardo AI", icon: "https://www.google.com/s2/favicons?domain=leonardo.ai&sz=128" },
        { name: "Ideogram", icon: "https://www.google.com/s2/favicons?domain=ideogram.ai&sz=128" },
        { name: "Flux AI", icon: "https://www.google.com/s2/favicons?domain=blackforestlabs.ai&sz=128" },
        { name: "Kling AI", icon: "https://www.google.com/s2/favicons?domain=klingai.com&sz=128" },
        { name: "Runway ML", icon: "https://www.google.com/s2/favicons?domain=runwayml.com&sz=128" }
      ]
    },
    {
      title: "Frontend",
      icon: Code2,
      accent: "#3b82f6",
      accentBg: "#eff6ff", // Very light blue
      tools: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" }
      ]
    }
  ];

  return (
    <section id="tools" className="tools-section">
      <style>{`
        .tools-section {
          background: #ffffff;
          padding: 8rem 2rem;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .tools-section {
            padding: 4rem 1.5rem;
          }
        }
        
        /* Subtle mesh gradient blob for background */
        .light-blob {
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 800px; height: 800px;
          background: radial-gradient(circle, rgba(241,245,249,0.8) 0%, rgba(255,255,255,0) 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        
        .tools-header {
          text-align: center;
          margin-bottom: 5rem;
          position: relative;
          z-index: 10;
        }

        @media (max-width: 768px) {
          .tools-header {
            margin-bottom: 3rem;
          }
        }
        
        /* 3 Column Grid */
        .tools-grid {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          position: relative;
          z-index: 10;
          perspective: 1000px;
        }
        
        @media (max-width: 1024px) {
          .tools-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .tools-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .tool-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 2rem;
          padding: 3rem 2.5rem;
          position: relative;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          gap: 2rem;
          overflow: hidden;
          z-index: 1;
          box-shadow: 0 10px 30px rgba(15,23,42,0.02);
        }

        @media (max-width: 768px) {
          .tool-card {
            padding: 2rem 1.5rem;
            gap: 1.5rem;
          }
        }
        
        /* The Creative Background Reveal */
        .tool-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: var(--accent-bg);
          border-radius: 2rem;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: -1;
        }

        .tool-card:hover {
          transform: translateY(-15px);
          border-color: var(--accent);
          box-shadow: 0 30px 60px rgba(0,0,0,0.08);
        }
        
        .tool-card:hover::before {
          transform: scaleY(1);
        }
        
        .icon-box {
          width: 76px;
          height: 76px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
          color: var(--accent);
        }
        
        .tool-card:hover .icon-box {
          background: #ffffff;
          transform: scale(1.15) rotate(8deg);
          box-shadow: 0 15px 30px rgba(0,0,0,0.08);
          border-color: var(--accent);
        }
        
        .tool-bento-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 0.5rem;
        }
        
        .tool-micro-card {
          padding: 0.65rem 1rem;
          background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%);
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #334155;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          box-shadow: 0 2px 4px rgba(15,23,42,0.01), inset 0 1px 0 rgba(255,255,255,1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: default;
        }
        
        .tool-card:hover .tool-micro-card {
          border-color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.8);
        }
        
        .tool-micro-card:hover {
          transform: translateY(-5px) scale(1.05) !important;
          border-color: var(--accent) !important;
          box-shadow: 0 10px 25px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,1) !important;
          color: var(--accent) !important;
          background: #ffffff !important;
        }
        
        .tool-logo {
          width: 18px;
          height: 18px;
          object-fit: contain;
          transition: all 0.3s ease;
        }
        
        .tool-micro-card:hover .tool-logo {
          transform: scale(1.2);
        }
        
        @keyframes creativeEnter {
          from { opacity: 0; transform: translateY(80px) rotateX(-15deg); }
          to { opacity: 1; transform: translateY(0) rotateX(0); }
        }
        
        .creative-card-enter {
          animation: creativeEnter 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
      `}</style>
      
      <div className="light-blob"></div>
      
      <div className="tools-header animate-fadeUp">
        <p className="section-eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>Toolkit</p>
        <h2 className="about-heading" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          Tools &amp; Technologies
        </h2>
        <p className="about-body" style={{ maxWidth: '650px', margin: '0 auto' }}>
          The creative software and technical frameworks I leverage to bring ideas to life, from initial concept to deployed reality.
        </p>
      </div>
      
      <div className="tools-grid">
        {categories.map((cat, i) => {
          const cardStyle = {
            '--accent': cat.accent,
            '--accent-bg': cat.accentBg,
            animationDelay: `${0.1 + i * 0.15}s`
          } as React.CSSProperties;
          
          return (
            <div 
              key={cat.title} 
              className="tool-card creative-card-enter"
              style={cardStyle}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="icon-box">
                  <cat.icon size={34} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em' }}>
                  {cat.title}
                </h3>
              </div>
              
              <div className="tool-bento-grid">
                {cat.tools.map((tool) => (
                  <div key={tool.name} className="tool-micro-card">
                    <img 
                      src={tool.icon} 
                      alt={tool.name} 
                      className="tool-logo"
                      onError={(e) => {
                        // Safe fallback if an icon fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {tool.name}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}
