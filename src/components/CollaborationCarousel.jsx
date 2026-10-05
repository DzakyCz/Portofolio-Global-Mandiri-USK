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
  const animationRef = useRef(null);
  const [canScroll, setCanScroll] = useState({ previous: false, next: true });

  const stopScrollAnimation = useCallback(() => {
    const animation = animationRef.current;
    if (!animation) return;

    cancelAnimationFrame(animation.frame);
    animation.track.style.scrollBehavior = animation.scrollBehavior;
    animation.track.style.scrollSnapType = animation.scrollSnapType;
    animationRef.current = null;
  }, []);

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const nextCanScroll = {
      previous: track.scrollLeft > 8,
      next: maxScroll - track.scrollLeft > 1,
    };

    setCanScroll((current) => (
      current.previous === nextCanScroll.previous && current.next === nextCanScroll.next
        ? current
        : nextCanScroll
    ));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    updateControls();
    window.addEventListener('resize', updateControls);

    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(track);

    return () => {
      stopScrollAnimation();
      window.removeEventListener('resize', updateControls);
      resizeObserver.disconnect();
    };
  }, [stopScrollAnimation, updateControls]);

  const moveCarousel = (direction) => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild;
    if (!track || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const distance = firstCard.getBoundingClientRect().width + gap;

    stopScrollAnimation();

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      track.scrollLeft += direction * distance;
      updateControls();
    } else {
      const start = track.scrollLeft;
      const end = Math.max(0, Math.min(start + direction * distance, track.scrollWidth - track.clientWidth));
      const duration = 560;
      const animation = {
        frame: 0,
        scrollBehavior: track.style.scrollBehavior,
        scrollSnapType: track.style.scrollSnapType,
        track,
      };

      track.style.scrollBehavior = 'auto';
      track.style.scrollSnapType = 'none';

      const animate = (timestamp, startTime = timestamp) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = progress < 0.5
          ? 4 * progress ** 3
          : 1 - ((-2 * progress + 2) ** 3) / 2;

        track.scrollLeft = start + (end - start) * easedProgress;

        if (progress < 1) {
          animation.frame = requestAnimationFrame((nextTimestamp) => animate(nextTimestamp, startTime));
          return;
        }

        track.style.scrollBehavior = animation.scrollBehavior;
        track.style.scrollSnapType = animation.scrollSnapType;
        animationRef.current = null;
        updateControls();
      };

      animationRef.current = animation;
      animation.frame = requestAnimationFrame(animate);
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
          onPointerDown={stopScrollAnimation}
          onTouchStart={stopScrollAnimation}
          onWheel={stopScrollAnimation}
          onKeyDown={(event) => {
            if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
              stopScrollAnimation();
            }
          }}
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
