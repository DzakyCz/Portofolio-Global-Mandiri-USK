import Link from 'next/link';
import Image from 'next/image';
import ArrowIcon from './icons/ArrowIcon';

const highlights = [
  {
    id: 'career',
    number: '01',
    eyebrow: 'GROW WITH US',
    title: 'Karier di Global Mandiri USK',
    description: 'Temukan berbagai peluang untuk bertumbuh dan berkarya bersama kami. Jadilah bagian dari sinergi PT Global Mandiri USK dalam menciptakan inovasi yang berkelanjutan.',
    action: 'Jelajahi Karier',
    href: '/karir',
    image: '/Images/jelajahi karir.jpeg',
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
          {item.image ? (
            <div className="highlight-mark highlight-mark-photo" aria-hidden="true">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 760px) 100vw, 40vw"
                quality={85}
              />
            </div>
          ) : (
            <div className={`highlight-mark highlight-mark-${item.id}`} aria-hidden="true">
              <span>{item.id === 'career' ? 'GMU' : item.id === 'governance' ? 'GCG' : 'TJSL'}</span>
            </div>
          )}
          <div className="highlight-copy">
            <p className="eyebrow">{item.eyebrow}</p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link className="text-link" href={item.href}>{item.action}<span><ArrowIcon direction="up-right" /></span></Link>
          </div>
        </article>
      ))}
    </section>
  );
}