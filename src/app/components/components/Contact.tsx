export function Contact() {

  // ✅ અહીં તમારા પોતાના usernames નાખો
  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/kishan__1909/' },
    { name: 'Behance',   url: 'https://behance.net/kishandarji' },
    { name: 'LinkedIn',  url: 'https://www.linkedin.com/in/kishan-darji-4168852a0' },
    { name: 'Dribbble',  url: 'https://dribbble.com/kishandarji' },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 1.5rem',
        background: 'linear-gradient(135deg, #3b0764 0%, #4c1d95 50%, #312e81 100%)',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Heading */}
        <h2
          style={{
            margin: '0 0 1rem 0',
            padding: 0,
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.2,
          }}
        >
          Let's Work Together
        </h2>

        {/* Subtitle */}
        <p
          style={{
            margin: '0 0 3rem 0',
            fontSize: '1.1rem',
            color: '#d8b4fe',
            lineHeight: 1.6,
          }}
        >
          Have a project in mind? I'd love to hear about it.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kishandarji03@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '0.85rem 2rem',
              borderRadius: '9999px',
              background: 'linear-gradient(90deg, #7c3aed, #6366f1)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(124,58,237,0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.06)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
            }}
          >
            Email Me
          </a>

          <a
            href="/resume.pdf"
            download
            style={{
              padding: '0.85rem 2rem',
              borderRadius: '9999px',
              background: 'transparent',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.8)',
              transition: 'background 0.2s, color 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#fff';
              (e.currentTarget as HTMLAnchorElement).style.color = '#4c1d95';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
            }}
          >
            Download Resume
          </a>
        </div>

        {/* ✅ Social Links — હવે real links સાથે નવી tab માં ખુલશે */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"        // ← નવી tab માં ખુલશે
              rel="noopener noreferrer"
              style={{
                color: '#d8b4fe',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#d8b4fe';
              }}
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
