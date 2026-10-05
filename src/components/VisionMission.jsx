import CollaborationCarousel from './CollaborationCarousel';

const missions = [
  {
    icon: 'bars',
    text: 'Mengelola peluang bisnis internal dan eksternal secara profesional',
  },
  {
    icon: 'gear',
    text: 'Mendorong efisiensi belanja dan layanan operasional USK',
  },
  {
    icon: 'people',
    text: 'Mengembangkan produk berbasis riset, inovasi, dan potensi lokal Aceh',
  },
  {
    icon: 'briefcase',
    text: 'Membangun kerja sama dengan pemerintah, BUMN, swasta, dan dunia industri',
  },
  {
    icon: 'leaf',
    text: 'Mengembangkan kontribusi ekonomi kepada Universitas Syiah Kuala',
  },
];

const iconPaths = {
  bars: <><path d="M3 13h3v7H3zM10 8h3v12h-3zM17 3h3v17h-3z" /></>,
  gear: <><path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" /><path d="m19.4 13.5 1.2.9-1.6 2.8-1.4-.6a7.9 7.9 0 0 1-1.6.9l-.2 1.5h-3.2l-.2-1.5a7.9 7.9 0 0 1-1.6-.9l-1.4.6-1.6-2.8 1.2-.9a7.7 7.7 0 0 1 0-1.8l-1.2-.9 1.6-2.8 1.4.6a7.9 7.9 0 0 1 1.6-.9l.2-1.5h3.2l.2 1.5a7.9 7.9 0 0 1 1.6.9l1.4-.6 1.6 2.8-1.2.9a7.7 7.7 0 0 1 0 1.8Z" /></>,
  target: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="3.1" /><path d="M12 1v3M12 20v3M1 12h3M20 12h3" /></>,
  people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 19a6 6 0 0 1 12 0v1H3zM15 14a5 5 0 0 1 6 5v1h-4" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" /></>,
  leaf: <><path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 8-8 8-16Z" /><path d="M4 21c3-5 6-8 12-11" /></>,
};

function Icon({ name }) {
  if (name === 'gear') {
    return (
      <svg className="mission-gear-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="8.2" />
        <g>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <rect key={angle} x="9.8" y="1" width="4.4" height="7" rx="1.2" transform={`rotate(${angle} 12 12)`} />
          ))}
        </g>
        <circle className="mission-gear-hole" cx="12" cy="12" r="3.6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {iconPaths[name]}
    </svg>
  );
}

export default function VisionMission() {
  return (
    <section className="vision-mission-section" aria-labelledby="vision-mission-title">
      <div className="section-shell vision-mission-shell">
        <header className="vision-mission-heading">
          <p className="eyebrow" data-reveal="rise" style={{ '--reveal-delay': '0ms' }}>ARAH STRATEGIS</p>
          <h2 id="vision-mission-title" data-reveal="rise" style={{ '--reveal-delay': '120ms' }}>Visi &amp; Misi</h2>
        </header>
        <div className="vision-mission-layout">
          <article className="vision-card" data-reveal="rise" style={{ '--reveal-delay': '240ms' }}>
            <div className="vision-card-title">
              <span className="vision-icon"><Icon name="target" /></span>
              <h2>VISI</h2>
            </div>
            <p>
              Menjadi perusahaan milik <strong>Universitas Syiah Kuala</strong> yang profesional, mandiri,
              berdaya saing, dan berkontribusi terhadap kemandirian finansial universitas.
            </p>
          </article>
          <div className="mission-content">
            <div className="mission-grid">
              {missions.map((mission, index) => (
                <article
                  className="mission-card"
                  data-reveal="rise"
                  key={mission.icon}
                  style={{ '--reveal-delay': `${360 + index * 140}ms` }}
                >
                  <span className="mission-icon"><Icon name={mission.icon} /></span>
                  <strong className="mission-number">{String(index + 1).padStart(2, '0')}</strong>
                  <p>{mission.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <CollaborationCarousel />
      </div>
    </section>
  );
}
