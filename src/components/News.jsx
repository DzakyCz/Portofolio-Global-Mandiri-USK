'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { newsItems } from '../data/news';

const newsCategories = ['Update Perusahaan', 'Kerja Sama', 'Bisnis', 'Berita'];
const PAGE_SIZE = 5;
const HOME_PREVIEW_SIZE = 3;

export default function News({ isPage = false }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const visibleNewsItems = selectedCategory
    ? newsItems.filter((item) =>
        item.category.toLocaleLowerCase('id').includes(selectedCategory.toLocaleLowerCase('id'))
      )
    : newsItems;

  const totalPages = Math.max(1, Math.ceil(visibleNewsItems.length / PAGE_SIZE));
  const page = Math.min(currentPage, totalPages);
  const pagedNewsItems = isPage
    ? visibleNewsItems.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
    : visibleNewsItems.slice(0, HOME_PREVIEW_SIZE);

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const goToPage = (nextPage) => {
    setCurrentPage(nextPage);
    document.getElementById('news')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="news" className={`news-section${isPage ? ' news-page-section' : ''}`}>
      <div className="section-shell">
        {isPage ? (
          <div className="section-heading">
            <p className="eyebrow" data-reveal="rise" style={{ '--reveal-delay': '0ms' }}>KABAR KAMI</p>
            <h2 data-reveal="rise" style={{ '--reveal-delay': '100ms' }}>BERITA TERBARU</h2>
            <p className="news-page-intro" data-reveal="rise" style={{ '--reveal-delay': '160ms' }}>
              Kumpulan kabar dan perkembangan terbaru seputar PT Global Mandiri USK.
            </p>
            <span className="heading-rule" data-reveal="rise" style={{ '--reveal-delay': '200ms' }} />
          </div>
        ) : (
          <div className="news-heading">
            <div>
              <p className="eyebrow" data-reveal="rise" style={{ '--reveal-delay': '0ms' }}>KABAR KAMI</p>
              <h2 data-reveal="rise" style={{ '--reveal-delay': '100ms' }}>BERITA TERBARU</h2>
              <span className="heading-rule" data-reveal="rise" style={{ '--reveal-delay': '160ms' }} />
            </div>
            <Link href="/kabar" className="text-link" data-reveal="rise" style={{ '--reveal-delay': '200ms' }}>Lihat Semua <span>↗</span></Link>
          </div>
        )}
        {isPage && (
          <div className="news-filter" data-reveal="rise" style={{ '--reveal-delay': '240ms' }}>
            <p className="news-filter-label" id="news-filter-label">Filter kategori</p>
            <div className="news-filter-list" role="group" aria-labelledby="news-filter-label">
              <button
                type="button"
                className={selectedCategory === null ? 'is-active' : ''}
                aria-pressed={selectedCategory === null}
                onClick={() => selectCategory(null)}
              >
                Semua
              </button>
              {newsCategories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={selectedCategory === category ? 'is-active' : ''}
                  aria-pressed={selectedCategory === category}
                  onClick={() => selectCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
        {pagedNewsItems.length > 0 ? (
          <div className="news-featured">
            {pagedNewsItems.map((item, index) => {
              const href = item.slug ? `/kabar/${item.slug}` : item.href;
              return (
                <article className="news-card" key={item.title} data-reveal="rise" style={{ '--reveal-delay': `${300 + index * 120}ms` }}>
                  <Link href={href} className="news-image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={640}
                      height={400}
                      sizes="(max-width: 760px) 90vw, 30vw"
                      priority={index === 0}
                      loading={index === 0 ? undefined : 'lazy'}
                    />
                  </Link>
                  <div className="news-meta"><span>{item.date}</span><span>{item.category}</span></div>
                  <h3><Link href={href}>{item.title}</Link></h3>
                  <p>{item.desc}</p>
                  <Link href={href} className="news-read-more">Baca Selengkapnya <span>↗</span></Link>
                </article>
              );
            })}
          </div>
        ) : (
          <p className="news-filter-empty" role="status">
            Tidak ada kabar untuk kategori “{selectedCategory}”.
          </p>
        )}
        {isPage && totalPages > 1 && (
          <nav className="news-pagination" aria-label="Navigasi halaman kabar">
            <button
              type="button"
              className="news-pagination-nav"
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
            >
              <span aria-hidden="true">←</span> Sebelumnya
            </button>
            <div className="news-pagination-pages">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                  type="button"
                  key={pageNumber}
                  className={pageNumber === page ? 'is-active' : ''}
                  aria-current={pageNumber === page ? 'page' : undefined}
                  onClick={() => goToPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="news-pagination-nav"
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
            >
              Selanjutnya <span aria-hidden="true">→</span>
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
