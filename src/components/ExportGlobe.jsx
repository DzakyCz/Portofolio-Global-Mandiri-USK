'use client';

import { useEffect, useRef } from 'react';
import { geoOrthographic, geoPath, geoGraticule, geoDistance, geoInterpolate } from 'd3-geo';
import { select } from 'd3-selection';
import { feature, mesh } from 'topojson-client';

const SIZE = 320;
const CX = SIZE / 2;
const CY = SIZE / 2;
const RADIUS = SIZE / 2 - 3;
const SENS = 0.3;
const SPIN = 0.12;
const FRICTION = 0.88;
const DEFAULT_ROTATE = [-102, 0];

const CITIES = [
  { lon: 95.32, lat: 5.55, label: 'Aceh', origin: true },
  { lon: 103.82, lat: 1.35, label: 'Singapura', origin: false },
  { lon: 55.27, lat: 25.2, label: 'Dubai', origin: false },
  { lon: 4.48, lat: 51.92, label: 'Rotterdam', origin: false },
  { lon: 6.92, lat: 43.66, label: 'Grasse', origin: false },
];

const ROUTES = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
];

let worldDataCache = null;
let worldDataPromise = null;

function loadWorldData() {
  if (worldDataCache) return Promise.resolve(worldDataCache);
  if (!worldDataPromise) {
    worldDataPromise = fetch('/data/world-110m.json')
      .then((res) => res.json())
      .then((world) => {
        worldDataCache = {
          land: feature(world, world.objects.land),
          borders: mesh(world, world.objects.countries, (a, b) => a !== b),
        };
        return worldDataCache;
      })
      .catch(() => null);
  }
  return worldDataPromise;
}

export default function ExportGlobe({ active }) {
  const wrapRef = useRef(null);
  const svgRef = useRef(null);
  const planeRef = useRef(null);
  const dragHintRef = useRef(null);

  const rotationRef = useRef({ lambda: DEFAULT_ROTATE[0], phi: DEFAULT_ROTATE[1] });
  const projectionRef = useRef(null);
  const elementsRef = useRef(null);
  const worldDataRef = useRef(null);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const projection = geoOrthographic()
      .scale(RADIUS)
      .translate([CX, CY])
      .clipAngle(90)
      .rotate([rotationRef.current.lambda, rotationRef.current.phi, 0]);
    projectionRef.current = projection;
    const path = geoPath(projection);

    const svg = select(svgRef.current);
    svg.selectAll('*').remove();
    const defs = svg.append('defs');

    const oceanG = defs.append('radialGradient').attr('id', 'ne-og').attr('cx', '33%').attr('cy', '28%').attr('r', '68%');
    oceanG.append('stop').attr('offset', '0%').attr('stop-color', '#1c4f8c');
    oceanG.append('stop').attr('offset', '60%').attr('stop-color', '#0d2f66');
    oceanG.append('stop').attr('offset', '100%').attr('stop-color', '#02133a');

    const landG = defs.append('linearGradient').attr('id', 'ne-lg').attr('x1', '0%').attr('y1', '0%').attr('x2', '0%').attr('y2', '100%');
    landG.append('stop').attr('offset', '0%').attr('stop-color', '#ffd466');
    landG.append('stop').attr('offset', '100%').attr('stop-color', '#d99a00');

    const specG = defs.append('radialGradient').attr('id', 'ne-sg').attr('cx', '30%').attr('cy', '24%').attr('r', '54%');
    specG.append('stop').attr('offset', '0%').attr('stop-color', 'rgba(255,255,255,0.18)');
    specG.append('stop').attr('offset', '100%').attr('stop-color', 'rgba(255,255,255,0)');

    const rimG = defs.append('radialGradient').attr('id', 'ne-rg').attr('cx', '50%').attr('cy', '50%').attr('r', '50%');
    rimG.append('stop').attr('offset', '72%').attr('stop-color', 'rgba(0,0,0,0)');
    rimG.append('stop').attr('offset', '100%').attr('stop-color', 'rgba(0,0,0,0.4)');

    defs.append('clipPath').attr('id', 'ne-clip').append('circle').attr('cx', CX).attr('cy', CY).attr('r', RADIUS);

    svg.append('circle').attr('cx', CX).attr('cy', CY).attr('r', RADIUS).attr('fill', 'url(#ne-og)');

    const gratEl = svg
      .append('path')
      .attr('clip-path', 'url(#ne-clip)')
      .attr('fill', 'none')
      .attr('stroke', 'rgba(255,255,255,0.08)')
      .attr('stroke-width', 0.5);
    const graticule = geoGraticule().step([20, 20])();

    const landEl = svg
      .append('path')
      .attr('clip-path', 'url(#ne-clip)')
      .attr('fill', 'url(#ne-lg)')
      .attr('stroke', 'rgba(140,90,0,0.4)')
      .attr('stroke-width', 0.35);
    const bordersEl = svg
      .append('path')
      .attr('clip-path', 'url(#ne-clip)')
      .attr('fill', 'none')
      .attr('stroke', 'rgba(110,70,0,0.25)')
      .attr('stroke-width', 0.3);

    const routeGroup = svg.append('g').attr('clip-path', 'url(#ne-clip)');
    const routeEls = ROUTES.map(([, ], i) => {
      const el = routeGroup
        .append('path')
        .attr('fill', 'none')
        .attr('stroke', i === 0 ? 'rgba(255,188,35,0.95)' : 'rgba(132,179,255,0.75)')
        .attr('stroke-width', i === 0 ? 2.4 : 1.7)
        .attr('stroke-linecap', 'round')
        .attr('stroke-dasharray', '7 9');
      if (!reduceMotionRef.current) el.style('animation', 'ne-dash 16s linear infinite');
      return el;
    });

    const cityGroup = svg.append('g').attr('clip-path', 'url(#ne-clip)');

    svg.append('circle').attr('cx', CX).attr('cy', CY).attr('r', RADIUS).attr('fill', 'url(#ne-sg)').attr('pointer-events', 'none');
    svg.append('circle').attr('cx', CX).attr('cy', CY).attr('r', RADIUS).attr('fill', 'url(#ne-rg)').attr('pointer-events', 'none');
    svg
      .append('circle')
      .attr('cx', CX)
      .attr('cy', CY)
      .attr('r', RADIUS)
      .attr('fill', 'none')
      .attr('stroke', 'rgba(255,255,255,0.16)')
      .attr('stroke-width', 1.2)
      .attr('pointer-events', 'none');

    const gcInterps = ROUTES.map(([from, to]) =>
      geoInterpolate([CITIES[from].lon, CITIES[from].lat], [CITIES[to].lon, CITIES[to].lat])
    );

    elementsRef.current = { gratEl, graticule, landEl, bordersEl, routeEls, cityGroup, gcInterps };

    function isVisible(lonlat) {
      const rot = projection.rotate();
      return geoDistance(lonlat, [-rot[0], -rot[1]]) < Math.PI / 2;
    }

    function render() {
      const { lambda, phi } = rotationRef.current;
      projection.rotate([lambda, phi, 0]);

      gratEl.datum(graticule).attr('d', path);
      if (worldDataRef.current) {
        landEl.datum(worldDataRef.current.land).attr('d', path);
        bordersEl.datum(worldDataRef.current.borders).attr('d', path);
      }

      ROUTES.forEach(([from, to], i) => {
        const a = CITIES[from];
        const b = CITIES[to];
        routeEls[i]
          .datum({ type: 'LineString', coordinates: [[a.lon, a.lat], [b.lon, b.lat]] })
          .attr('d', path);
      });

      cityGroup.selectAll('*').remove();
      CITIES.forEach((city) => {
        if (!isVisible([city.lon, city.lat])) return;
        const xy = projection([city.lon, city.lat]);
        if (!xy) return;
        const [x, y] = xy;

        if (city.origin && !reduceMotionRef.current) {
          [{ r: 14, dur: '2.6s', delay: '0s' }, { r: 22, dur: '2.6s', delay: '0.4s' }].forEach((p) => {
            const c = cityGroup
              .append('circle')
              .attr('cx', x)
              .attr('cy', y)
              .attr('r', 6)
              .attr('fill', 'none')
              .attr('stroke', 'rgba(255,188,35,0.55)')
              .attr('stroke-width', 1.1);
            c.append('animate').attr('attributeName', 'r').attr('values', `6;${p.r};6`).attr('dur', p.dur).attr('begin', p.delay).attr('repeatCount', 'indefinite');
            c.append('animate').attr('attributeName', 'opacity').attr('values', '0.7;0;0.7').attr('dur', p.dur).attr('begin', p.delay).attr('repeatCount', 'indefinite');
          });
        }

        cityGroup
          .append('circle')
          .attr('cx', x)
          .attr('cy', y)
          .attr('r', city.origin ? 5.5 : 3.5)
          .attr('fill', city.origin ? '#ffbc23' : '#ffffff')
          .attr('stroke', city.origin ? '#b88400' : 'rgba(132,179,255,0.7)')
          .attr('stroke-width', city.origin ? 2 : 1);

        const goRight = x < CX * 1.4;
        const lx = x + (goRight ? (city.origin ? 10 : 7) : -(city.origin ? 10 : 7));
        const ly = y + (city.origin ? -5 : -3);
        cityGroup
          .append('text')
          .attr('x', lx)
          .attr('y', ly)
          .attr('text-anchor', goRight ? 'start' : 'end')
          .attr('font-size', city.origin ? 11 : 9)
          .attr('font-weight', city.origin ? 700 : 500)
          .attr('font-family', 'var(--font-body), Segoe UI, sans-serif')
          .attr('fill', city.origin ? '#ffbc23' : '#eef4ff')
          .attr('stroke', 'rgba(2,19,58,0.85)')
          .attr('stroke-width', 3)
          .attr('paint-order', 'stroke')
          .text(city.label);
      });
    }

    elementsRef.current.render = render;
    elementsRef.current.isVisible = isVisible;
    render();

    loadWorldData().then((data) => {
      if (data) {
        worldDataRef.current = data;
        render();
      }
    });

    return () => {
      svg.selectAll('*').remove();
    };
  }, []);

  useEffect(() => {
    if (!active || !elementsRef.current) return undefined;

    const { render, isVisible, gcInterps } = elementsRef.current;
    const reduceMotion = reduceMotionRef.current;
    const globeWrap = wrapRef.current;
    const globeSvgEl = svgRef.current;
    const dragHint = dragHintRef.current;
    const planeEl = planeRef.current;

    let autoRotate = !reduceMotion;
    let mainRaf;
    let planeRaf;
    let momentumRaf;
    let resumeTimer;
    let dragging = false;
    let dragOrigin = null;
    let rotOrigin = null;
    let velLambda = 0;
    let velPhi = 0;
    let hintHidden = false;
    let planeRoute = 0;
    let planeProg = 0;

    function mainLoop() {
      if (autoRotate) {
        rotationRef.current.lambda += SPIN;
        render();
      }
      mainRaf = requestAnimationFrame(mainLoop);
    }
    mainRaf = requestAnimationFrame(mainLoop);

    function hideHint() {
      if (!hintHidden && dragHint) {
        hintHidden = true;
        dragHint.classList.add('ne-hint-hidden');
      }
    }
    function getPoint(e) {
      return e.touches ? e.touches[0] : e;
    }
    function startDrag(e) {
      cancelAnimationFrame(momentumRaf);
      clearTimeout(resumeTimer);
      hideHint();
      autoRotate = false;
      dragging = true;
      velLambda = 0;
      velPhi = 0;
      const pt = getPoint(e);
      dragOrigin = [pt.clientX, pt.clientY];
      rotOrigin = [rotationRef.current.lambda, rotationRef.current.phi];
      globeSvgEl.classList.add('ne-dragging');
      e.preventDefault();
    }
    function moveDrag(e) {
      if (!dragging) return;
      const pt = getPoint(e);
      const dx = pt.clientX - dragOrigin[0];
      const dy = pt.clientY - dragOrigin[1];
      const newLambda = rotOrigin[0] + dx * SENS;
      const newPhi = Math.max(-70, Math.min(70, rotOrigin[1] - dy * SENS));
      velLambda = (newLambda - rotationRef.current.lambda) * 0.8 + velLambda * 0.2;
      velPhi = (newPhi - rotationRef.current.phi) * 0.8 + velPhi * 0.2;
      rotationRef.current.lambda = newLambda;
      rotationRef.current.phi = newPhi;
      render();
      e.preventDefault();
    }
    function applyMomentum() {
      cancelAnimationFrame(momentumRaf);
      function step() {
        velLambda *= FRICTION;
        velPhi *= FRICTION;
        rotationRef.current.lambda += velLambda;
        rotationRef.current.phi = Math.max(-70, Math.min(70, rotationRef.current.phi + velPhi));
        render();
        const speed = Math.abs(velLambda) + Math.abs(velPhi);
        if (speed > 0.008) momentumRaf = requestAnimationFrame(step);
        else scheduleResume();
      }
      momentumRaf = requestAnimationFrame(step);
    }
    function scheduleResume() {
      if (reduceMotion) return;
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        autoRotate = true;
      }, 3500);
    }
    function endDrag() {
      if (!dragging) return;
      dragging = false;
      globeSvgEl.classList.remove('ne-dragging');
      const speed = Math.sqrt(velLambda * velLambda + velPhi * velPhi);
      if (!reduceMotion && speed > 0.05) applyMomentum();
      else scheduleResume();
    }

    globeWrap.addEventListener('mousedown', startDrag, { passive: false });
    globeWrap.addEventListener('touchstart', startDrag, { passive: false });
    document.addEventListener('mousemove', moveDrag, { passive: false });
    document.addEventListener('touchmove', moveDrag, { passive: false });
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);

    if (!reduceMotion && planeEl) {
      const animatePlane = () => {
        planeProg += 0.003;
        if (planeProg >= 1) {
          planeProg = 0;
          planeRoute = (planeRoute + 1) % gcInterps.length;
        }
        const gc = gcInterps[planeRoute];
        const pos = gc(planeProg);
        const next = gc(Math.min(1, planeProg + 0.008));
        if (isVisible(pos)) {
          const xy = projectionRef.current(pos);
          const xy2 = projectionRef.current(next);
          planeEl.style.opacity = '1';
          if (xy && xy2) {
            const box = globeWrap.getBoundingClientRect();
            const scale = box.width / SIZE;
            const angle = (Math.atan2(xy2[1] - xy[1], xy2[0] - xy[0]) * 180) / Math.PI;
            planeEl.style.left = `${xy[0] * scale}px`;
            planeEl.style.top = `${xy[1] * scale}px`;
            planeEl.style.transform = `translate(-50%,-50%) rotate(${angle}deg)`;
          }
        } else {
          planeEl.style.opacity = '0';
        }
        planeRaf = requestAnimationFrame(animatePlane);
      };
      planeRaf = requestAnimationFrame(animatePlane);
    } else if (planeEl) {
      planeEl.style.display = 'none';
    }

    return () => {
      cancelAnimationFrame(mainRaf);
      cancelAnimationFrame(planeRaf);
      cancelAnimationFrame(momentumRaf);
      clearTimeout(resumeTimer);
      globeWrap.removeEventListener('mousedown', startDrag);
      globeWrap.removeEventListener('touchstart', startDrag);
      document.removeEventListener('mousemove', moveDrag);
      document.removeEventListener('touchmove', moveDrag);
      document.removeEventListener('mouseup', endDrag);
      document.removeEventListener('touchend', endDrag);
    };
  }, [active]);

  return (
    <div className="ne-globe-col">
      <div className="ne-globe-wrap" ref={wrapRef}>
        <div className="ne-globe-shadow" />
        <svg className="ne-globe-svg" ref={svgRef} viewBox={`0 0 ${SIZE} ${SIZE}`} aria-label="Globe jalur ekspor minyak nilam Aceh" />
        <div className="ne-plane" ref={planeRef}>✈</div>
      </div>
      <div className="ne-drag-hint" ref={dragHintRef}>⟳ Geser untuk memutar</div>
      <div className="ne-destinations">
        <span>Aceh</span>
        <span>Singapura</span>
        <span>Dubai</span>
        <span>Eropa</span>
      </div>
    </div>
  );
}
