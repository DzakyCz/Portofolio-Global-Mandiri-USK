import Image from 'next/image';

const partners = [
  '1.png', '2.jpg', '3.jpeg', '4.png', '5.png', '6.png', '7.png', '8.jpg', '9.png',
  '10.png', '11.webp', '12.png', '13.jpg', '14.jpg', '15.webp', '16.jpg', '17.png', '18.png', '19.jpg',
];

function LogoTrack({ reverse = false }) {
  const logoOrder = reverse ? [...partners].reverse() : partners;

  return (
    <div className={`partner-track ${reverse ? 'partner-track-reverse' : ''}`}>
      {[0, 1].map((copy) => (
        <div className="partner-track-group" key={copy} aria-hidden={copy === 1}>
          {logoOrder.map((fileName, index) => (
            <div className="partner-logo" key={`${copy}-${fileName}`}>
              <Image src={`/Images/mitra/${fileName}`} alt={copy === 0 ? `Mitra strategis ${index + 1}` : ''} width={180} height={100} loading="lazy" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="partners-section">
      <div className="section-shell">
        <div className="section-heading partners-heading">
          <p className="eyebrow" data-reveal="rise" style={{ '--reveal-delay': '0ms' }}>SINERGI & KOLABORASI</p>
          <h2 data-reveal="rise" style={{ '--reveal-delay': '100ms' }}>Mitra Strategis Kami</h2>
          <span className="heading-rule" data-reveal="rise" style={{ '--reveal-delay': '200ms' }} />
        </div>
      </div>
      <div className="partner-marquee" aria-label="Logo mitra strategis">
        <LogoTrack />
        <LogoTrack reverse />
      </div>
      <div className="partner-footnote"><span>Together We Grow</span><span>UNIVERSITAS SYIAH KUALA · INDONESIA</span></div>
    </section>
  );
}