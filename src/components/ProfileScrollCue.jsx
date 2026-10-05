'use client';

import { useEffect, useRef } from 'react';

export default function ProfileScrollCue() {
  const cueRef = useRef(null);

  useEffect(() => {
    const cue = cueRef.current;
    if (!cue) return;

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
      || !('IntersectionObserver' in window)
    ) {
      cue.classList.add('is-drawn');
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        cue.classList.add('is-drawn');
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    observer.observe(cue);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="profile-scroll-cue" ref={cueRef}>
      <svg viewBox="0 0 1000 20" preserveAspectRatio="none" aria-hidden="true">
        <path className="profile-scroll-line" pathLength="1000" d="M0 10H986" />
        <path className="profile-scroll-star" d="m989 0 3 7 8 3-8 3-3 7-3-7-8-3 8-3z" />
      </svg>
      <p>Scroll untuk melihat lebih banyak <span aria-hidden="true">↓</span></p>
    </div>
  );
}
