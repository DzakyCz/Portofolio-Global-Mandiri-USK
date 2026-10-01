import Link from 'next/link';

const highlights = [
  {
    id: 'career',
    number: '01',
    eyebrow: 'GROW WITH US',
    title: 'Karier di Brawijaya Multi Usaha',
    description: 'Temukan berbagai peluang untuk bertumbuh dan berkarya bersama kami. Jadilah bagian dari sinergi PT Brawijaya Multi Usaha dalam menciptakan inovasi yang berkelanjutan.',
    action: 'Jelajahi Karier',
    href: 'https://brawijayamultiusaha.co.id/id/career',
  },
  {
    id: 'governance',
    number: '02',
    eyebrow: 'INTEGRITAS & TRANSPARANSI',
    title: 'GCG Brawijaya Multi Usaha',
    description: 'Kami berkomitmen untuk menjunjung tinggi standar integritas dan transparansi. Kerangka GCG kami memastikan akuntabilitas dan mendorong pertumbuhan berkelanjutan bagi seluruh pemangku kepentingan.',
    action: 'Lihat GCG Kami',
    href: 'https://brawijayamultiusaha.co.id/id/gcg',
  },
  {
    id: 'tjsl',
    number: '03',
    eyebrow: 'TUMBUH BERSAMA MASYARAKAT',
    title: 'TJSL Brawijaya Multi Usaha',
    description: 'Di luar aspek bisnis, kami tetap mengedepankan kepedulian. Kami berkomitmen untuk menciptakan nilai bersama melalui upaya pelestarian lingkungan dan pemberdayaan masyarakat, guna memastikan masa depan yang berkelanjutan bagi generasi mendatang.',
    action: 'Lihat Lebih Banyak Tentang TJSL',
    href: 'https://brawijayamultiusaha.co.id/id/tjsl',
  },
];

export default function HomeHighlights() {
  return (
    <section className="highlights-section" aria-label="Karier, tata kelola, dan tanggung jawab sosial">
      {highlights.map((item) => (
        <article id={item.id} className="highlight-row" key={item.id} data-reveal="rise">
          <div className="highlight-number">{item.number}</div>
          <div className="highlight-copy">
            <p className="eyebrow">{item.eyebrow}</p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link className="text-link" href={item.href}>{item.action}<span>↗</span></Link>
          </div>
          <div className={`highlight-mark highlight-mark-${item.id}`} aria-hidden="true">
            <span>{item.id === 'career' ? 'BMU' : item.id === 'governance' ? 'GCG' : 'TJSL'}</span>
          </div>
        </article>
      ))}
    </section>
  );
}