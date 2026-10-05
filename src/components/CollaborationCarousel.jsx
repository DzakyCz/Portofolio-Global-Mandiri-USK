'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const collaborations = [
  {
    image: '/Images/Perangkat Medis.jpg',
    title: 'Kerja sama operasional dengan Crown (perangkat medis).',
  },
  {
    image: '/Images/kolaborasi strategis/minyak nilam.png',
    title: 'Kemitraan dengan PEMA (minyak nilam).',
  },
  {
    image: '/Images/kolaborasi strategis/elektronik.png',
    title: 'Kolaborasi dengan Panasonic (elektronik).',
  },
  {
    image: '/Images/kolaborasi strategis/migas.png',
    title: 'Kerja sama dengan Cesco (minyak & gas).',
  },
  {
    image: '/Images/kolaborasi strategis/konsultan nilam.png',
    title: 'Kerja sama dengan PT LARAS (konsultan nilam).',
  },
  {
    image: '/Images/kolaborasi strategis/outsourcing.png',
    title: 'ARAINS (outsourcing layanan pelanggan & keamanan).',
  },
  {
    image: '/Images/kolaborasi strategis/aldzama.png',
    title: 'Kerja sama dengan PT Aldzama.',
  },
];

export default function CollaborationCarousel() {
  const trackRef = useRef(null);
  const [canScroll, setCanScroll] = useState({ previous: false, next: true });

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScroll({
      previous: track.scrollLeft > 8,
      next: maxScroll - track.scrollLeft > 1,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    updateControls();
    window.addEventListener('resize', updateControls);

    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(track);

    return () => {
      window.removeEventListener('resize', updateControls);
      resizeObserver.disconnect();
    };
  }, [updateControls]);

  const moveCarousel = (direction) => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild;
    if (!track || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const distance = firstCard.getBoundingClientRect().width + gap;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      track.scrollLeft += direction * distance;
    } else {
      track.scrollBy({ left: direction * distance, behavior: 'smooth' });
    }
  };

  return (
    <section className="collaboration-section" aria-labelledby="collaboration-title">
      <div className="collaboration-heading" data-reveal="rise">
        <div>
          <p className="eyebrow">SINERGI &amp; KOLABORASI</p>
          <h2 id="collaboration-title">Kolaborasi Strategis</h2>
        </div>
      </div>
      <p className="collaboration-swipe-hint">Geser ke samping untuk melihat lainnya <span aria-hidden="true">→</span></p>
      <div className="collaboration-carousel">
        <div className="collaboration-controls collaboration-controls-previous" aria-label="Kontrol carousel kolaborasi" hidden={!canScroll.previous}>
          <button type="button" aria-label="Kolaborasi sebelumnya" onClick={() => moveCarousel(-1)}>
            <span aria-hidden="true">←</span>
          </button>
        </div>
        <div
          className="collaboration-track"
          ref={trackRef}
          role="region"
          aria-label="Daftar kolaborasi strategis; geser ke samping untuk melihat lainnya"
          tabIndex={0}
          onScroll={updateControls}
        >
          {collaborations.map((collaboration) => (
            <article className="collaboration-card" key={collaboration.image}>
              <h3>{collaboration.title}</h3>
              <div className="collaboration-image">
                <Image
                  src={collaboration.image}
                  alt={collaboration.title}
                  fill
                  sizes="(max-width: 760px) 82vw, (max-width: 1050px) 40vw, 28vw"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
        <div className="collaboration-controls collaboration-controls-next" aria-label="Kontrol carousel kolaborasi" hidden={!canScroll.next}>
          <button type="button" aria-label="Kolaborasi berikutnya" onClick={() => moveCarousel(1)}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
