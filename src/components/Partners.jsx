'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const partners = [
  '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png',
  '10.png', '11.webp', '12.png', '13.png', '14.png', '15.webp', '16.png', '17.png', '18.png', '19.png',
];

const MAX_BOOST = 0.35;

function LogoTrack({ reverse = false }) {
  const logoOrder = reverse ? [...partners].reverse() : partners;

  return (
    <div className={`partner-track ${reverse ? 'partner-track-reverse' : ''}`}>
      {[0, 1].map((copy) => (
        <div className="partner-track-group" key={copy} aria-hidden={copy === 1}>
          {logoOrder.map((fileName, index) => (
            <div className="partner-logo" key={`${copy}-${fileName}`}>
              <Image src={`/Images/mitra/${fileName}`} alt={copy === 0 ? `Mitra strategis ${index + 1}` : ''} width={180} height={100} quality={70} loading="lazy" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Partners() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    let frame = 0;

    const tick = () => {
      const marqueeRect = marquee.getBoundingClientRect();
      const centerX = marqueeRect.left + marqueeRect.width / 2;
      const radius = Math.max(marqueeRect.width * 0.16, 90);
      const images = marquee.querySelectorAll('.partner-logo img');

      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.right < marqueeRect.left || rect.left > marqueeRect.right) return;
        const logoCenter = rect.left + rect.width / 2;
        const distance = Math.abs(logoCenter - centerX);
        const t = Math.max(0, 1 - distance / radius);
        const eased = t * t * (3 - 2 * t);
        img.style.setProperty('--proximity-scale', (1 + eased * MAX_BOOST).toFixed(3));
      });

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="partners" className="partners-section">
      <div className="section-shell">
        <div className="section-heading partners-heading">
          <p className="eyebrow" data-reveal="rise" style={{ '--reveal-delay': '0ms' }}>SINERGI & KOLABORASI</p>
          <h2 data-reveal="rise" style={{ '--reveal-delay': '100ms' }}>Mitra Strategis Kami</h2>
          <span className="heading-rule" data-reveal="rise" style={{ '--reveal-delay': '200ms' }} />
        </div>
      </div>
      <div className="partner-marquee" aria-label="Logo mitra strategis" ref={marqueeRef}>
        <LogoTrack />
        <LogoTrack reverse />
      </div>
      <div className="partner-footnote"><span>Together We Grow</span><span>UNIVERSITAS SYIAH KUALA · INDONESIA</span></div>
    </section>
  );
}
