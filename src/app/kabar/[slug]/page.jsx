import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import HomeLink from '../../../components/HomeLink';
import ShareButtons from '../../../components/ShareButtons';
import ArrowIcon from '../../../components/icons/ArrowIcon';
import { newsItems } from '../../../data/news';

export function generateStaticParams() {
  return newsItems
    .filter((item) => item.slug)
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = newsItems.find((entry) => entry.slug === slug);
  if (!item?.article) return {};

  return {
    title: `${item.article.headline} | PT Global Mandiri USK`,
    description: item.desc,
  };
}

export default async function KabarArticlePage({ params }) {
  const { slug } = await params;
  const item = newsItems.find((entry) => entry.slug === slug);
  if (!item?.article) notFound();

  const { article } = item;
  const relatedItems = newsItems.filter((entry) => entry !== item);

  return (
    <section className="article-section">
      <div className="section-shell article-shell">
        <Link href="/kabar" className="article-back">
          <span aria-hidden="true"><ArrowIcon direction="left" /></span> Kembali
        </Link>

        <nav className="about-breadcrumb article-breadcrumb" aria-label="Breadcrumb">
          <HomeLink>BERANDA</HomeLink>
          <span aria-hidden="true">/</span>
          <Link href="/kabar">KABAR</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{item.title}</span>
        </nav>

        <div className="article-layout">
          <div className="article-main">
            <p className="article-category" data-reveal="rise" style={{ '--reveal-delay': '0ms' }}>{item.category}</p>
            <h1 className="article-title" data-reveal="rise" style={{ '--reveal-delay': '80ms' }}>{article.headline}</h1>
            <p className="article-date" data-reveal="rise" style={{ '--reveal-delay': '140ms' }}>{item.date}</p>

            <div className="article-image" data-reveal="rise" style={{ '--reveal-delay': '200ms' }}>
              <Image
                src={item.image}
                alt={article.headline}
                width={1200}
                height={700}
                sizes="(max-width: 820px) 100vw, 760px"
                priority
              />
            </div>

            <div className="article-body" data-reveal="rise" style={{ '--reveal-delay': '280ms' }}>
              <p className="article-lead">{article.lead}</p>
              {article.body.map((block, index) => {
                if (block.type === 'quote') {
                  return (
                    <blockquote className="article-quote" key={index}>
                      <p>&ldquo;{block.text}&rdquo;</p>
                      <cite>{block.attribution}</cite>
                    </blockquote>
                  );
                }
                if (block.type === 'image') {
                  return (
                    <div className="article-inline-image" key={index}>
                      <Image
                        src={block.src}
                        alt={block.alt || ''}
                        width={1200}
                        height={700}
                        sizes="(max-width: 820px) 100vw, 760px"
                      />
                    </div>
                  );
                }
                return <p key={index}>{block.text}</p>;
              })}
            </div>

            {article.source && (
              <div className="article-source" data-reveal="rise" style={{ '--reveal-delay': '340ms' }}>
                <p>
                  Sumber: {article.source.name} &ndash; artikel berjudul &ldquo;{article.source.articleTitle}&rdquo;
                </p>
                <Link
                  href={article.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-source-button"
                >
                  Buka Artikel Sumber <span aria-hidden="true"><ArrowIcon direction="up-right" /></span>
                </Link>
              </div>
            )}

            <div data-reveal="rise" style={{ '--reveal-delay': '380ms' }}>
              <ShareButtons title={article.headline} />
            </div>
          </div>

          <aside className="article-sidebar" aria-label="Kabar lainnya">
            <p className="article-sidebar-heading" data-reveal="rise" style={{ '--reveal-delay': '240ms' }}>Kabar Lainnya</p>
            <div className="article-sidebar-list">
              {relatedItems.map((related, index) => {
                const href = related.slug ? `/kabar/${related.slug}` : related.href;
                return (
                  <Link
                    href={href}
                    className="article-related-card"
                    key={related.title}
                    data-reveal="rise"
                    style={{ '--reveal-delay': `${300 + index * 100}ms` }}
                  >
                    <div className="article-related-image">
                      <Image
                        src={related.image}
                        alt={related.title}
                        width={160}
                        height={100}
                        sizes="96px"
                      />
                    </div>
                    <div>
                      <span className="article-related-date">{related.date}</span>
                      <h3>{related.title}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
