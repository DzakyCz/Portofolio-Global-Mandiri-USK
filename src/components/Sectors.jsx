'use client';

import dynamic from 'next/dynamic';

const SectorsDirectory = dynamic(() => import('./SectorsDirectory'));

export default function Sectors() {
  return (
    <section id="sectors" className="sectors-section sectors-page-section">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow" data-reveal="rise" style={{ '--reveal-delay': '0ms' }}>
            PORTOFOLIO BISNIS
          </p>
          <h2 data-reveal="rise" style={{ '--reveal-delay': '100ms' }}>
            BIDANG USAHA STRATEGIS KAMI
          </h2>
          <span className="heading-rule" data-reveal="rise" style={{ '--reveal-delay': '160ms' }} />
          <p className="sectors-page-intro" data-reveal="rise" style={{ '--reveal-delay': '200ms' }}>
            Beragam bidang usaha yang dikembangkan untuk mendukung potensi dan kemandirian Universitas Syiah Kuala.
          </p>
        </div>
        <SectorsDirectory />
      </div>
    </section>
  );
}
