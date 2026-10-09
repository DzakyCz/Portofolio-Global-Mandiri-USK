'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function MotionEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let initialFrame = 0;

    const updateScrollEffects = () => {
      document.querySelector('.scroll-logo-image')?.style.setProperty('--scroll-rotation', `${window.scrollY * 0.25}deg`);

      const aboutPreview = document.querySelector('.about-preview');
      if (!aboutPreview || reduceMotion) return;

      const bounds = aboutPreview.getBoundingClientRect();
      const start = window.innerHeight * 0.95;
      const end = window.innerHeight * 0.25;
      const progress = Math.min(1, Math.max(0, (start - bounds.top) / (start - end)));
      const initialScale = window.innerWidth <= 760 ? 1.12 : 1.25;

      aboutPreview.style.setProperty('--about-image-scale', (initialScale - (initialScale - 1) * progress).toFixed(3));
      aboutPreview.style.setProperty('--about-image-opacity', (0.35 + 0.65 * progress).toFixed(3));
    };

    let ticking = false;
    let queuedFrame = 0;

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      queuedFrame = window.requestAnimationFrame(() => {
        updateScrollEffects();
        ticking = false;
      });
    };

    if (!reduceMotion) {
      updateScrollEffects();
      initialFrame = window.requestAnimationFrame(updateScrollEffects);
      window.addEventListener('scroll', onScrollOrResize, { passive: true });
      window.addEventListener('resize', onScrollOrResize);
    }

    const cleanupScrollLogo = () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (initialFrame) window.cancelAnimationFrame(initialFrame);
      if (queuedFrame) window.cancelAnimationFrame(queuedFrame);
    };

    if (reduceMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach((target) => target.classList.add('is-visible'));
      return cleanupScrollLogo;
    }

    document.documentElement.classList.add('motion-enabled');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    const revealInViewport = () => {
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((target) => {
        const bounds = target.getBoundingClientRect();
        if (bounds.top < window.innerHeight && bounds.bottom > 0) {
          target.classList.add('is-visible');
          observer.unobserve(target);
        }
      });
    };

    const scheduleViewportReveal = () => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(revealInViewport);
      });
    };

    const observeRevealTargets = (node, method) => {
      if (!(node instanceof Element)) return;

      if (node.matches('[data-reveal]')) method(node);
      node.querySelectorAll('[data-reveal]').forEach(method);
    };

    observeRevealTargets(document.documentElement, (target) => observer.observe(target));
    scheduleViewportReveal();
    window.addEventListener('pageshow', scheduleViewportReveal);

    let pendingMutations = [];
    let mutationFrame = 0;

    const flushMutations = () => {
      mutationFrame = 0;
      const batch = pendingMutations;
      pendingMutations = [];
      batch.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          observeRevealTargets(node, (target) => observer.observe(target));
        });
        mutation.removedNodes.forEach((node) => {
          observeRevealTargets(node, (target) => observer.unobserve(target));
        });
      });
    };

    const mutationObserver = new MutationObserver((mutations) => {
      pendingMutations.push(...mutations);
      if (!mutationFrame) mutationFrame = window.requestAnimationFrame(flushMutations);
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      if (mutationFrame) window.cancelAnimationFrame(mutationFrame);
      observer.disconnect();
      window.removeEventListener('pageshow', scheduleViewportReveal);
      document.documentElement.classList.remove('motion-enabled');
      cleanupScrollLogo();
    };
  }, []);

  return (
    <div className="scroll-logo" aria-hidden="true">
      <Image className="scroll-logo-image" src="/Images/Logo polos.png" alt="" width={96} height={85} sizes="(max-width: 760px) 56px, 76px" priority />
    </div>
  );
}