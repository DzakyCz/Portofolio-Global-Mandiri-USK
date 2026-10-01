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
        <div className="section-heading" data-reveal="rise">
          <p className="eyebrow">PORTOFOLIO BISNIS</p>
          <h2>UNIT BISNIS STRATEGIS KAMI</h2>
          <span className="heading-rule" />
        </div>
        <div className="sector-grid">
          {sectors.map((sector, index) => (
            <article className="sector-card" key={sector.name} data-reveal="rise" style={{ '--reveal-delay': `${index * 90}ms` }}>
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
