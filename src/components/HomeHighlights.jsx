import Link from 'next/link';

const highlights = [
  {
    id: 'career',
    number: '01',
    eyebrow: 'GROW WITH US',
    title: 'Karier di Global Mandiri USK',
    description: 'Temukan berbagai peluang untuk bertumbuh dan berkarya bersama kami. Jadilah bagian dari sinergi PT Global Mandiri USK dalam menciptakan inovasi yang berkelanjutan.',
    action: 'Jelajahi Karier',
    href: '/karir',
  },
];

export default function HomeHighlights() {
  return (
    <section className="highlights-section" aria-label="Karier, tata kelola, dan tanggung jawab sosial">
      {highlights.map((item, index) => (
        <article
          id={item.id}
          className="highlight-row"
          key={item.id}
          data-reveal="rise"
          style={{ '--reveal-delay': `${index * 140}ms` }}
        >
          <div className={`highlight-mark highlight-mark-${item.id}`} aria-hidden="true">
            <span>{item.id === 'career' ? 'GMU' : item.id === 'governance' ? 'GCG' : 'TJSL'}</span>
          </div>
          <div className="highlight-copy">
            <p className="eyebrow">{item.eyebrow}</p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link className="text-link" href={item.href}>{item.action}<span>↗</span></Link>
          </div>
        </article>
      ))}
    </section>
  );
}