export default function Sectors() {
  const sectors = [
    { name: 'Nilam', image: '/Images/nilam.jpeg' },
    { name: 'Manufaktur & Produksi', image: '/Images/manufaktur.png' },
    { name: 'Teknik & Pemeliharaan', image: '/Images/teknik.png' },
    { name: 'Kreatif & Pemasaran', image: '/Images/kreatif.png' },
    { name: 'Lainnya', image: '/Images/lainnya.png' },
  ];

  return (
    <section id="sectors" className="sectors-section">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow" data-reveal="rise" style={{ '--reveal-delay': '0ms' }}>PORTOFOLIO BISNIS</p>
          <h2 data-reveal="rise" style={{ '--reveal-delay': '100ms' }}>UNIT BISNIS STRATEGIS KAMI</h2>
          <span className="heading-rule" data-reveal="rise" style={{ '--reveal-delay': '200ms' }} />
        </div>
        <div className="sector-grid">
          {sectors.map((sector, index) => (
            <article className="sector-card" key={sector.name} data-reveal="rise" style={{ '--reveal-delay': `${280 + index * 100}ms` }}>
              <div className="sector-photo" style={{ backgroundImage: `url(${sector.image})` }} />
              <div className="sector-overlay" />
              <div className="sector-card-top"><span>↗</span></div>
              <h3>{sector.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
