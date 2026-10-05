import Image from 'next/image';

const executives = [
  {
    name: 'Rizal Syah',
    role: 'Direktur Utama',
    image: '/Images/rizal.png',
  },
  {
    name: 'Dr. Ir. Syaifullah Muhammad, ST., M.Eng',
    role: 'Komisaris',
    image: '/Images/syaifullah.png',
  },
];

export default function ExecutiveCommittee() {
  return (
    <section className="executive-section" aria-labelledby="executive-title">
      <div className="section-shell executive-shell">
        <div className="executive-heading">
          <p className="eyebrow" data-reveal="rise" style={{ '--reveal-delay': '0ms' }}>KEPEMIMPINAN</p>
          <h2 id="executive-title" data-reveal="rise" style={{ '--reveal-delay': '100ms' }}>Komite Eksekutif</h2>
        </div>
        <div className="executive-grid">
          {executives.map((executive, index) => (
            <article
              className="executive-card"
              data-reveal="rise"
              key={executive.name}
              style={{ '--reveal-delay': `${220 + index * 150}ms` }}
            >
              <div className="executive-portrait">
                <span className="executive-portrait-accent" aria-hidden="true" />
                <Image
                  src={executive.image}
                  alt={`Foto ${executive.name}`}
                  width={516}
                  height={652}
                  sizes="(max-width: 760px) 72vw, 32vw"
                  loading="lazy"
                />
              </div>
              <h3>{executive.name}</h3>
              <p>{executive.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
