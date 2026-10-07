'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

const productCatalogPages = Array.from({ length: 10 }, (_, index) => ({
  src: `/Images/bidang/produk-nilam/halaman-${String(index + 1).padStart(2, '0')}.jpg`,
  page: index + 1,
}));

export default function Sectors({ isPage = false }) {
  const productDialogRef = useRef(null);
  const [currentCatalogPage, setCurrentCatalogPage] = useState(0);
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
    && unit.name.toLocaleLowerCase('id').includes(query)
  );
  const pageCount = Math.max(1, Math.ceil(visibleBusinessUnits.length / pageSize));
  const pageStart = (currentPage - 1) * pageSize;
  const paginatedBusinessUnits = visibleBusinessUnits.slice(pageStart, pageStart + pageSize);
  const firstVisibleUnit = visibleBusinessUnits.length === 0 ? 0 : pageStart + 1;
  const lastVisibleUnit = Math.min(pageStart + pageSize, visibleBusinessUnits.length);
  const openProductDialog = () => {
    setCurrentCatalogPage(0);
    productDialogRef.current?.showModal();
  };

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
                        className={`sector-directory-card${unit.name === 'Produk Turunan Nilam' ? ' is-clickable' : ''}`}
                        key={unit.image}
                        data-reveal="rise"
                        style={{ '--reveal-delay': `${Math.min(index * 60, 360)}ms` }}
                        role={unit.name === 'Produk Turunan Nilam' ? 'button' : undefined}
                        tabIndex={unit.name === 'Produk Turunan Nilam' ? 0 : undefined}
                        onClick={unit.name === 'Produk Turunan Nilam' ? openProductDialog : undefined}
                        onKeyDown={unit.name === 'Produk Turunan Nilam' ? (event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            openProductDialog();
                          }
                        } : undefined}
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
              <dialog
                className="sector-product-dialog"
                ref={productDialogRef}
                aria-labelledby="sector-product-dialog-title"
                onCancel={(event) => {
                  event.preventDefault();
                  event.currentTarget.close();
                }}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowLeft') {
                    setCurrentCatalogPage((page) => Math.max(0, page - 1));
                  } else if (event.key === 'ArrowRight') {
                    setCurrentCatalogPage((page) => Math.min(productCatalogPages.length - 1, page + 1));
                  }
                }}
                onClick={(event) => {
                  if (event.target === event.currentTarget) {
                    event.currentTarget.close();
                  }
                }}
              >
                <div className="sector-product-dialog-content">
                  <div className="sector-product-dialog-header">
                    <h2 id="sector-product-dialog-title">Produk Turunan Nilam</h2>
                    <button
                      className="sector-product-dialog-close"
                      type="button"
                      onClick={() => productDialogRef.current?.close()}
                      aria-label="Tutup detail Produk Turunan Nilam"
                    >
                      ×
                    </button>
                  </div>
                  <div className="sector-product-dialog-carousel" aria-label="Carousel katalog produk nilam">
                    <div className="sector-product-dialog-frame">
                      <div
                        className="sector-product-dialog-track"
                        style={{ transform: `translateX(-${currentCatalogPage * 100}%)` }}
                        aria-live="polite"
                      >
                        {productCatalogPages.map(({ src, page }) => (
                          <div className="sector-product-dialog-slide" key={src} aria-hidden={currentCatalogPage !== page - 1}>
                            <Image
                              className="sector-product-dialog-page"
                              src={src}
                              alt={`Halaman ${page} katalog produk nilam`}
                              fill
                              sizes="(max-width: 760px) 100vw, 900px"
                              priority={page === 1}
                            />
                          </div>
                        ))}
                      </div>
                      <button
                        className="sector-product-dialog-arrow is-previous"
                        type="button"
                        aria-label="Halaman katalog sebelumnya"
                        disabled={currentCatalogPage === 0}
                        onClick={() => setCurrentCatalogPage((page) => Math.max(0, page - 1))}
                      >
                        ‹
                      </button>
                      <button
                        className="sector-product-dialog-arrow is-next"
                        type="button"
                        aria-label="Halaman katalog berikutnya"
                        disabled={currentCatalogPage === productCatalogPages.length - 1}
                        onClick={() => setCurrentCatalogPage((page) => Math.min(productCatalogPages.length - 1, page + 1))}
                      >
                        ›
                      </button>
                    </div>
                    <div className="sector-product-dialog-dots" role="group" aria-label="Pilih halaman katalog">
                      {productCatalogPages.map(({ page }) => (
                        <button
                          className={`sector-product-dialog-dot${currentCatalogPage === page - 1 ? ' is-active' : ''}`}
                          key={page}
                          type="button"
                          aria-label={`Buka halaman ${page}`}
                          aria-current={currentCatalogPage === page - 1 ? 'page' : undefined}
                          onClick={() => setCurrentCatalogPage(page - 1)}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="sector-product-dialog-description">
                    Menghadirkan rangkaian parfum dan perawatan kulit berbasis minyak nilam dengan kualitas alami yang murni, aman, dan berstandar tinggi untuk menunjang kecantikan dan kepercayaan diri.
                  </p>
                </div>
              </dialog>
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
