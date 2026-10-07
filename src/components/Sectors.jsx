'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Sectors({ isPage = false }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const portfolioSectors = [
    {
      name: 'Nilam',
      image: '/Images/nilam.jpeg',
      description: 'Pengembangan potensi komoditas nilam melalui pengelolaan dan pengolahan yang berorientasi pada nilai tambah.'
    },
    {
      name: 'Manufaktur & Produksi',
      image: '/Images/manufaktur.png',
      description: 'Mendukung kegiatan manufaktur dan produksi melalui proses kerja yang terencana, efisien, dan berorientasi pada mutu.'
    },
    {
      name: 'Teknik & Pemeliharaan',
      image: '/Images/teknik.png',
      description: 'Bidang teknik dan pemeliharaan untuk mendukung keandalan fasilitas, peralatan, dan operasional.'
    },
    {
      name: 'Kreatif & Pemasaran',
      image: '/Images/kreatif.png',
      description: 'Dukungan kreatif dan pemasaran untuk memperkuat komunikasi serta jangkauan produk dan layanan.'
    },
    {
      name: 'Lainnya',
      image: '/Images/lainnya.png',
      description: 'Ruang bagi pengembangan usaha dan layanan lain yang sejalan dengan potensi serta kebutuhan ekosistem USK.'
    },
  ];
  const businessUnits = [
    { name: 'Perdagangan Minyak Nilam', category: 'Nilam', image: '/Images/bidang/nilam.jpeg' },
    { name: 'Produk Turunan Nilam', category: 'Nilam', image: '/Images/bidang/produk.png' },
    { name: 'Tata Busana', category: 'Manufaktur & Produksi', image: '/Images/bidang/busana.png' },
    { name: 'Layanan Desain Furnitur', category: 'Manufaktur & Produksi', image: '/Images/bidang/furnitur.png' },
    { name: 'Layanan Welding/Las', category: 'Teknik & Pemeliharaan', image: '/Images/bidang/las.png' },
    { name: 'Layanan Jasa Pendingin (AC)', category: 'Teknik & Pemeliharaan', image: '/Images/bidang/ac.png' },
    { name: 'Layanan Jasa Otomotif', category: 'Teknik & Pemeliharaan', image: '/Images/bidang/otomotif.png' },
    { name: 'Digital Printing', category: 'Kreatif & Pemasaran', image: '/Images/bidang/print.png' },
    { name: 'Hotel', category: 'Lainnya', image: '/Images/bidang/hotel.png' },
    { name: 'Jasa Boga', category: 'Lainnya', image: '/Images/bidang/boga.png' },
    { name: 'Travel', category: 'Lainnya', image: '/Images/bidang/travel.png' },
  ];
  const categories = [
    'Nilam',
    'Manufaktur & Produksi',
    'Teknik & Pemeliharaan',
    'Kreatif & Pemasaran',
    'Lainnya',
  ];
  const query = searchQuery.trim().toLocaleLowerCase('id');
  const visibleBusinessUnits = businessUnits.filter((unit) =>
    (selectedCategories === null || selectedCategories.includes(unit.category))
    && (
      unit.name.toLocaleLowerCase('id').includes(query)
      || unit.category.toLocaleLowerCase('id').includes(query)
    )
  );
  const pageCount = Math.max(1, Math.ceil(visibleBusinessUnits.length / pageSize));
  const pageStart = (currentPage - 1) * pageSize;
  const paginatedBusinessUnits = visibleBusinessUnits.slice(pageStart, pageStart + pageSize);
  const firstVisibleUnit = visibleBusinessUnits.length === 0 ? 0 : pageStart + 1;
  const lastVisibleUnit = Math.min(pageStart + pageSize, visibleBusinessUnits.length);

  return (
    <>
      <section id="sectors" className={`sectors-section${isPage ? ' sectors-page-section' : ''}`}>
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow" data-reveal="rise" style={{ '--reveal-delay': '0ms' }}>
              PORTOFOLIO BISNIS
            </p>
            <h2 data-reveal="rise" style={{ '--reveal-delay': '100ms' }}>
              {isPage ? 'BIDANG USAHA STRATEGIS KAMI' : 'UNIT BISNIS STRATEGIS KAMI'}
            </h2>
            {isPage && (
              <p className="sectors-page-intro" data-reveal="rise" style={{ '--reveal-delay': '160ms' }}>
                Beragam bidang usaha yang dikembangkan untuk mendukung potensi dan kemandirian Universitas Syiah Kuala.
              </p>
            )}
            <span className="heading-rule" data-reveal="rise" style={{ '--reveal-delay': '200ms' }} />
          </div>
          {isPage ? (
            <>
              <div className="sector-search" data-reveal="rise" style={{ '--reveal-delay': '240ms' }}>
                <label className="sector-search-label" htmlFor="sector-search-input">
                  Cari bidang usaha
                </label>
                <div className="sector-search-controls">
                  <div className="sector-filter">
                    <button
                      className={`sector-filter-toggle${selectedCategories?.length ? ' is-active' : ''}`}
                      type="button"
                      aria-expanded={isFilterOpen}
                      aria-controls="sector-category-options"
                      onClick={() => setIsFilterOpen((isOpen) => !isOpen)}
                    >
                      <Image src="/Images/filter.avif" alt="" width={20} height={20} />
                      <span>Filter</span>
                      {!!selectedCategories?.length && (
                        <span className="sector-filter-badge">{selectedCategories.length}</span>
                      )}
                    </button>
                  </div>
                  <div className="sector-search-field">
                    <input
                      id="sector-search-input"
                      type="search"
                      value={searchQuery}
                      onChange={(event) => {
                        setSearchQuery(event.target.value);
                        setCurrentPage(1);
                      }}
                      placeholder="Contoh: Nilam, Hotel, Otomotif..."
                      aria-describedby="sector-search-count"
                    />
                  </div>
                </div>
                {isFilterOpen && (
                  <div className="sector-filter-options" id="sector-category-options" aria-label="Kategori bidang usaha">
                    <p>Kategori bidang usaha</p>
                    <div className="sector-filter-options-list">
                      <button
                        type="button"
                        className={selectedCategories === null ? 'is-selected' : ''}
                        aria-pressed={selectedCategories === null}
                        onClick={() => {
                          setSelectedCategories(null);
                          setCurrentPage(1);
                        }}
                      >
                        Semua kategori
                      </button>
                      {categories.map((category) => (
                        <button
                          type="button"
                          key={category}
                          className={selectedCategories?.includes(category) ? 'is-selected' : ''}
                          aria-pressed={selectedCategories?.includes(category) ?? false}
                          onClick={() => {
                            setSelectedCategories((selected) => {
                              const current = selected ?? [];
                              return current.includes(category)
                                ? current.filter((item) => item !== category)
                                : [...current, category];
                            });
                            setCurrentPage(1);
                          }}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <p className="sector-search-count" id="sector-search-count" aria-live="polite">
                  Menampilkan {firstVisibleUnit}–{lastVisibleUnit} dari {visibleBusinessUnits.length} bidang usaha
                </p>
              </div>
              {visibleBusinessUnits.length > 0 ? (
                <>
                  <div className="sector-directory-grid">
                    {paginatedBusinessUnits.map((unit, index) => (
                      <article
                        className="sector-directory-card"
                        key={unit.image}
                        data-reveal="rise"
                        style={{ '--reveal-delay': `${Math.min(index * 60, 360)}ms` }}
                      >
                        <div className="sector-directory-image">
                          <Image
                            src={unit.image}
                            alt={unit.name}
                            fill
                            sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw"
                          />
                        </div>
                        <h3>{unit.name}</h3>
                      </article>
                    ))}
                  </div>
                  {pageCount > 1 && (
                    <nav className="sector-pagination" aria-label="Halaman bidang usaha">
                      <button
                        type="button"
                        onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                        disabled={currentPage === 1}
                      >
                        ← Sebelumnya
                      </button>
                      <span aria-live="polite">Halaman {currentPage} dari {pageCount}</span>
                      <button
                        type="button"
                        onClick={() => setCurrentPage((page) => Math.min(pageCount, page + 1))}
                        disabled={currentPage === pageCount}
                      >
                        Berikutnya →
                      </button>
                    </nav>
                  )}
                </>
              ) : (
                <p className="sector-search-empty" role="status">
                  Tidak ada bidang usaha yang cocok dengan “{searchQuery.trim()}”.
                </p>
              )}
            </>
          ) : (
            <div className="sector-grid">
              {portfolioSectors.map((sector, index) => (
                <article
                  className="sector-card"
                  key={sector.name}
                  data-reveal="rise"
                  style={{ '--reveal-delay': `${280 + index * 100}ms` }}
                >
                  <div className="sector-photo" style={{ backgroundImage: `url(${sector.image})` }} />
                  <div className="sector-overlay" />
                  <div className="sector-card-top"><span>↗</span></div>
                  <div className="sector-card-copy">
                    <h3>{sector.name}</h3>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
