'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import ExportGlobe from './ExportGlobe';

const productCatalogPages = Array.from({ length: 10 }, (_, index) => ({
  src: `/Images/bidang/produk-nilam/halaman-${String(index + 1).padStart(2, '0')}.jpg`,
  page: index + 1,
}));

const tataBusanaCatalogPages = Array.from({ length: 7 }, (_, index) => ({
  src: `/Images/bidang/tata-busana/halaman-${String(index + 1).padStart(2, '0')}.jpg`,
  page: index + 1,
}));

const hotelCatalogPages = Array.from({ length: 2 }, (_, index) => ({
  src: `/Images/bidang/hotel/halaman-${String(index + 1).padStart(2, '0')}.jpg`,
  page: index + 1,
}));

const digitalPrintingCatalogPages = Array.from({ length: 4 }, (_, index) => ({
  src: `/Images/bidang/digital-printing/halaman-${String(index + 1).padStart(2, '0')}.jpg`,
  page: index + 1,
}));

const desainFurniturCatalogPages = Array.from({ length: 4 }, (_, index) => ({
  src: `/Images/bidang/desain-furnitur/halaman-${String(index + 1).padStart(2, '0')}.jpg`,
  page: index + 1,
}));

const jasaOtomotifCatalogPages = Array.from({ length: 4 }, (_, index) => ({
  src: `/Images/bidang/jasa-otomotif/halaman-${String(index + 1).padStart(2, '0')}.jpg`,
  page: index + 1,
}));

const travelCatalogPages = Array.from({ length: 2 }, (_, index) => ({
  src: `/Images/bidang/travel/halaman-${String(index + 1).padStart(2, '0')}.jpg`,
  page: index + 1,
}));

const jasaBogaCatalogPages = Array.from({ length: 5 }, (_, index) => ({
  src: `/Images/bidang/jasa-boga/halaman-${String(index + 1).padStart(2, '0')}.jpg`,
  page: index + 1,
}));

const lasCatalogPages = Array.from({ length: 5 }, (_, index) => ({
  src: `/Images/bidang/las/halaman-${String(index + 1).padStart(2, '0')}.jpg`,
  page: index + 1,
}));

const jasaAcCatalogPages = Array.from({ length: 3 }, (_, index) => ({
  src: `/Images/bidang/jasa-ac/halaman-${String(index + 1).padStart(2, '0')}.jpg`,
  page: index + 1,
}));

export default function Sectors({ isPage = false }) {
  const productDialogRef = useRef(null);
  const tataBusanaDialogRef = useRef(null);
  const hotelDialogRef = useRef(null);
  const digitalPrintingDialogRef = useRef(null);
  const desainFurniturDialogRef = useRef(null);
  const jasaOtomotifDialogRef = useRef(null);
  const travelDialogRef = useRef(null);
  const jasaBogaDialogRef = useRef(null);
  const lasDialogRef = useRef(null);
  const jasaAcDialogRef = useRef(null);
  const nilamDialogRef = useRef(null);
  const [currentCatalogPage, setCurrentCatalogPage] = useState(0);
  const [currentTataBusanaPage, setCurrentTataBusanaPage] = useState(0);
  const [currentHotelPage, setCurrentHotelPage] = useState(0);
  const [currentDigitalPrintingPage, setCurrentDigitalPrintingPage] = useState(0);
  const [currentDesainFurniturPage, setCurrentDesainFurniturPage] = useState(0);
  const [currentJasaOtomotifPage, setCurrentJasaOtomotifPage] = useState(0);
  const [currentTravelPage, setCurrentTravelPage] = useState(0);
  const [currentJasaBogaPage, setCurrentJasaBogaPage] = useState(0);
  const [currentLasPage, setCurrentLasPage] = useState(0);
  const [currentJasaAcPage, setCurrentJasaAcPage] = useState(0);
  const [currentNilamPage, setCurrentNilamPage] = useState(0);
  const [isNilamDialogOpen, setIsNilamDialogOpen] = useState(false);
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
  const openTataBusanaDialog = () => {
    setCurrentTataBusanaPage(0);
    tataBusanaDialogRef.current?.showModal();
  };
  const openHotelDialog = () => {
    setCurrentHotelPage(0);
    hotelDialogRef.current?.showModal();
  };
  const openDigitalPrintingDialog = () => {
    setCurrentDigitalPrintingPage(0);
    digitalPrintingDialogRef.current?.showModal();
  };
  const openDesainFurniturDialog = () => {
    setCurrentDesainFurniturPage(0);
    desainFurniturDialogRef.current?.showModal();
  };
  const openJasaOtomotifDialog = () => {
    setCurrentJasaOtomotifPage(0);
    jasaOtomotifDialogRef.current?.showModal();
  };
  const openTravelDialog = () => {
    setCurrentTravelPage(0);
    travelDialogRef.current?.showModal();
  };
  const openJasaBogaDialog = () => {
    setCurrentJasaBogaPage(0);
    jasaBogaDialogRef.current?.showModal();
  };
  const openLasDialog = () => {
    setCurrentLasPage(0);
    lasDialogRef.current?.showModal();
  };
  const openJasaAcDialog = () => {
    setCurrentJasaAcPage(0);
    jasaAcDialogRef.current?.showModal();
  };
  const openNilamDialog = () => {
    setCurrentNilamPage(0);
    setIsNilamDialogOpen(true);
    nilamDialogRef.current?.showModal();
  };
  const DIALOG_UNIT_NAMES = [
    'Produk Turunan Nilam',
    'Tata Busana',
    'Hotel',
    'Digital Printing',
    'Layanan Desain Furnitur',
    'Layanan Jasa Otomotif',
    'Travel',
    'Jasa Boga',
    'Layanan Welding/Las',
    'Layanan Jasa Pendingin (AC)',
    'Perdagangan Minyak Nilam',
  ];
  const openDialogForUnit = (name) => {
    switch (name) {
      case 'Produk Turunan Nilam': openProductDialog(); break;
      case 'Tata Busana': openTataBusanaDialog(); break;
      case 'Hotel': openHotelDialog(); break;
      case 'Digital Printing': openDigitalPrintingDialog(); break;
      case 'Layanan Desain Furnitur': openDesainFurniturDialog(); break;
      case 'Layanan Jasa Otomotif': openJasaOtomotifDialog(); break;
      case 'Travel': openTravelDialog(); break;
      case 'Jasa Boga': openJasaBogaDialog(); break;
      case 'Layanan Welding/Las': openLasDialog(); break;
      case 'Layanan Jasa Pendingin (AC)': openJasaAcDialog(); break;
      case 'Perdagangan Minyak Nilam': openNilamDialog(); break;
      default: break;
    }
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
                    {paginatedBusinessUnits.map((unit, index) => {
                      const hasDialog = DIALOG_UNIT_NAMES.includes(unit.name);
                      return (
                      <article
                        className={`sector-directory-card${hasDialog ? ' is-clickable' : ''}`}
                        key={unit.image}
                        data-reveal="rise"
                        style={{ '--reveal-delay': `${Math.min(index * 60, 360)}ms` }}
                        role={hasDialog ? 'button' : undefined}
                        tabIndex={hasDialog ? 0 : undefined}
                        onClick={hasDialog ? () => openDialogForUnit(unit.name) : undefined}
                        onKeyDown={hasDialog ? (event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            openDialogForUnit(unit.name);
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
                      );
                    })}
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
              <dialog
                className="sector-product-dialog"
                ref={tataBusanaDialogRef}
                aria-labelledby="sector-tata-busana-dialog-title"
                onCancel={(event) => {
                  event.preventDefault();
                  event.currentTarget.close();
                }}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowLeft') {
                    setCurrentTataBusanaPage((page) => Math.max(0, page - 1));
                  } else if (event.key === 'ArrowRight') {
                    setCurrentTataBusanaPage((page) => Math.min(tataBusanaCatalogPages.length - 1, page + 1));
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
                    <h2 id="sector-tata-busana-dialog-title">Tata Busana</h2>
                    <button
                      className="sector-product-dialog-close"
                      type="button"
                      onClick={() => tataBusanaDialogRef.current?.close()}
                      aria-label="Tutup detail Tata Busana"
                    >
                      ×
                    </button>
                  </div>
                  <div className="sector-product-dialog-carousel" aria-label="Carousel katalog tata busana">
                    <div className="sector-product-dialog-frame sector-product-dialog-frame--busana">
                      <div
                        className="sector-product-dialog-track"
                        style={{ transform: `translateX(-${currentTataBusanaPage * 100}%)` }}
                        aria-live="polite"
                      >
                        {tataBusanaCatalogPages.map(({ src, page }) => (
                          <div className="sector-product-dialog-slide" key={src} aria-hidden={currentTataBusanaPage !== page - 1}>
                            <Image
                              className="sector-product-dialog-page"
                              src={src}
                              alt={`Halaman ${page} katalog tata busana`}
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
                        disabled={currentTataBusanaPage === 0}
                        onClick={() => setCurrentTataBusanaPage((page) => Math.max(0, page - 1))}
                      >
                        ‹
                      </button>
                      <button
                        className="sector-product-dialog-arrow is-next"
                        type="button"
                        aria-label="Halaman katalog berikutnya"
                        disabled={currentTataBusanaPage === tataBusanaCatalogPages.length - 1}
                        onClick={() => setCurrentTataBusanaPage((page) => Math.min(tataBusanaCatalogPages.length - 1, page + 1))}
                      >
                        ›
                      </button>
                    </div>
                    <div className="sector-product-dialog-dots" role="group" aria-label="Pilih halaman katalog">
                      {tataBusanaCatalogPages.map(({ page }) => (
                        <button
                          className={`sector-product-dialog-dot${currentTataBusanaPage === page - 1 ? ' is-active' : ''}`}
                          key={page}
                          type="button"
                          aria-label={`Buka halaman ${page}`}
                          aria-current={currentTataBusanaPage === page - 1 ? 'page' : undefined}
                          onClick={() => setCurrentTataBusanaPage(page - 1)}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="sector-product-dialog-description">
                    Menyediakan layanan konveksi yang mendukung kebutuhan produksi pakaian dan seragam, dengan hasil yang rapi, berkualitas, dan profesional.
                  </p>
                </div>
              </dialog>
              <dialog
                className="sector-product-dialog"
                ref={hotelDialogRef}
                aria-labelledby="sector-hotel-dialog-title"
                onCancel={(event) => {
                  event.preventDefault();
                  event.currentTarget.close();
                }}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowLeft') {
                    setCurrentHotelPage((page) => Math.max(0, page - 1));
                  } else if (event.key === 'ArrowRight') {
                    setCurrentHotelPage((page) => Math.min(hotelCatalogPages.length - 1, page + 1));
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
                    <h2 id="sector-hotel-dialog-title">Hotel</h2>
                    <button
                      className="sector-product-dialog-close"
                      type="button"
                      onClick={() => hotelDialogRef.current?.close()}
                      aria-label="Tutup detail Hotel"
                    >
                      ×
                    </button>
                  </div>
                  <div className="sector-product-dialog-carousel" aria-label="Carousel katalog hotel">
                    <div className="sector-product-dialog-frame">
                      <div
                        className="sector-product-dialog-track"
                        style={{ transform: `translateX(-${currentHotelPage * 100}%)` }}
                        aria-live="polite"
                      >
                        {hotelCatalogPages.map(({ src, page }) => (
                          <div className="sector-product-dialog-slide" key={src} aria-hidden={currentHotelPage !== page - 1}>
                            <Image
                              className="sector-product-dialog-page"
                              src={src}
                              alt={`Halaman ${page} katalog hotel`}
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
                        disabled={currentHotelPage === 0}
                        onClick={() => setCurrentHotelPage((page) => Math.max(0, page - 1))}
                      >
                        ‹
                      </button>
                      <button
                        className="sector-product-dialog-arrow is-next"
                        type="button"
                        aria-label="Halaman katalog berikutnya"
                        disabled={currentHotelPage === hotelCatalogPages.length - 1}
                        onClick={() => setCurrentHotelPage((page) => Math.min(hotelCatalogPages.length - 1, page + 1))}
                      >
                        ›
                      </button>
                    </div>
                    <div className="sector-product-dialog-dots" role="group" aria-label="Pilih halaman katalog">
                      {hotelCatalogPages.map(({ page }) => (
                        <button
                          className={`sector-product-dialog-dot${currentHotelPage === page - 1 ? ' is-active' : ''}`}
                          key={page}
                          type="button"
                          aria-label={`Buka halaman ${page}`}
                          aria-current={currentHotelPage === page - 1 ? 'page' : undefined}
                          onClick={() => setCurrentHotelPage(page - 1)}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="sector-product-dialog-description">
                    Menyediakan pelayanan pengelolaan unit penginapan atau hotel sekolah dengan dukungan operasional yang profesional untuk menghadirkan layanan akomodasi yang nyaman, representatif, dan berorientasi pada kepuasan pengguna.
                  </p>
                </div>
              </dialog>
              <dialog
                className="sector-product-dialog"
                ref={digitalPrintingDialogRef}
                aria-labelledby="sector-digital-printing-dialog-title"
                onCancel={(event) => {
                  event.preventDefault();
                  event.currentTarget.close();
                }}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowLeft') {
                    setCurrentDigitalPrintingPage((page) => Math.max(0, page - 1));
                  } else if (event.key === 'ArrowRight') {
                    setCurrentDigitalPrintingPage((page) => Math.min(digitalPrintingCatalogPages.length - 1, page + 1));
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
                    <h2 id="sector-digital-printing-dialog-title">Digital Printing</h2>
                    <button
                      className="sector-product-dialog-close"
                      type="button"
                      onClick={() => digitalPrintingDialogRef.current?.close()}
                      aria-label="Tutup detail Digital Printing"
                    >
                      ×
                    </button>
                  </div>
                  <div className="sector-product-dialog-carousel" aria-label="Carousel katalog digital printing">
                    <div className="sector-product-dialog-frame">
                      <div
                        className="sector-product-dialog-track"
                        style={{ transform: `translateX(-${currentDigitalPrintingPage * 100}%)` }}
                        aria-live="polite"
                      >
                        {digitalPrintingCatalogPages.map(({ src, page }) => (
                          <div className="sector-product-dialog-slide" key={src} aria-hidden={currentDigitalPrintingPage !== page - 1}>
                            <Image
                              className="sector-product-dialog-page"
                              src={src}
                              alt={`Halaman ${page} katalog digital printing`}
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
                        disabled={currentDigitalPrintingPage === 0}
                        onClick={() => setCurrentDigitalPrintingPage((page) => Math.max(0, page - 1))}
                      >
                        ‹
                      </button>
                      <button
                        className="sector-product-dialog-arrow is-next"
                        type="button"
                        aria-label="Halaman katalog berikutnya"
                        disabled={currentDigitalPrintingPage === digitalPrintingCatalogPages.length - 1}
                        onClick={() => setCurrentDigitalPrintingPage((page) => Math.min(digitalPrintingCatalogPages.length - 1, page + 1))}
                      >
                        ›
                      </button>
                    </div>
                    <div className="sector-product-dialog-dots" role="group" aria-label="Pilih halaman katalog">
                      {digitalPrintingCatalogPages.map(({ page }) => (
                        <button
                          className={`sector-product-dialog-dot${currentDigitalPrintingPage === page - 1 ? ' is-active' : ''}`}
                          key={page}
                          type="button"
                          aria-label={`Buka halaman ${page}`}
                          aria-current={currentDigitalPrintingPage === page - 1 ? 'page' : undefined}
                          onClick={() => setCurrentDigitalPrintingPage(page - 1)}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="sector-product-dialog-description">
                    Menyediakan layanan percetakan dan finishing produk cetak yang mendukung kebutuhan promosi, publikasi, dan administrasi, dengan hasil yang presisi, menarik, dan profesional.
                  </p>
                </div>
              </dialog>
              <dialog
                className="sector-product-dialog"
                ref={desainFurniturDialogRef}
                aria-labelledby="sector-desain-furnitur-dialog-title"
                onCancel={(event) => {
                  event.preventDefault();
                  event.currentTarget.close();
                }}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowLeft') {
                    setCurrentDesainFurniturPage((page) => Math.max(0, page - 1));
                  } else if (event.key === 'ArrowRight') {
                    setCurrentDesainFurniturPage((page) => Math.min(desainFurniturCatalogPages.length - 1, page + 1));
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
                    <h2 id="sector-desain-furnitur-dialog-title">Layanan Desain Furnitur</h2>
                    <button
                      className="sector-product-dialog-close"
                      type="button"
                      onClick={() => desainFurniturDialogRef.current?.close()}
                      aria-label="Tutup detail Layanan Desain Furnitur"
                    >
                      ×
                    </button>
                  </div>
                  <div className="sector-product-dialog-carousel" aria-label="Carousel katalog desain furnitur">
                    <div className="sector-product-dialog-frame">
                      <div
                        className="sector-product-dialog-track"
                        style={{ transform: `translateX(-${currentDesainFurniturPage * 100}%)` }}
                        aria-live="polite"
                      >
                        {desainFurniturCatalogPages.map(({ src, page }) => (
                          <div className="sector-product-dialog-slide" key={src} aria-hidden={currentDesainFurniturPage !== page - 1}>
                            <Image
                              className="sector-product-dialog-page"
                              src={src}
                              alt={`Halaman ${page} katalog desain furnitur`}
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
                        disabled={currentDesainFurniturPage === 0}
                        onClick={() => setCurrentDesainFurniturPage((page) => Math.max(0, page - 1))}
                      >
                        ‹
                      </button>
                      <button
                        className="sector-product-dialog-arrow is-next"
                        type="button"
                        aria-label="Halaman katalog berikutnya"
                        disabled={currentDesainFurniturPage === desainFurniturCatalogPages.length - 1}
                        onClick={() => setCurrentDesainFurniturPage((page) => Math.min(desainFurniturCatalogPages.length - 1, page + 1))}
                      >
                        ›
                      </button>
                    </div>
                    <div className="sector-product-dialog-dots" role="group" aria-label="Pilih halaman katalog">
                      {desainFurniturCatalogPages.map(({ page }) => (
                        <button
                          className={`sector-product-dialog-dot${currentDesainFurniturPage === page - 1 ? ' is-active' : ''}`}
                          key={page}
                          type="button"
                          aria-label={`Buka halaman ${page}`}
                          aria-current={currentDesainFurniturPage === page - 1 ? 'page' : undefined}
                          onClick={() => setCurrentDesainFurniturPage(page - 1)}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="sector-product-dialog-description">
                    Menyediakan layanan desain dan pembuatan furniture sesuai pesanan, dengan hasil yang fungsional, rapi, dan menyesuaikan kebutuhan serta preferensi pengguna.
                  </p>
                </div>
              </dialog>
              <dialog
                className="sector-product-dialog"
                ref={jasaOtomotifDialogRef}
                aria-labelledby="sector-jasa-otomotif-dialog-title"
                onCancel={(event) => {
                  event.preventDefault();
                  event.currentTarget.close();
                }}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowLeft') {
                    setCurrentJasaOtomotifPage((page) => Math.max(0, page - 1));
                  } else if (event.key === 'ArrowRight') {
                    setCurrentJasaOtomotifPage((page) => Math.min(jasaOtomotifCatalogPages.length - 1, page + 1));
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
                    <h2 id="sector-jasa-otomotif-dialog-title">Layanan Jasa Otomotif</h2>
                    <button
                      className="sector-product-dialog-close"
                      type="button"
                      onClick={() => jasaOtomotifDialogRef.current?.close()}
                      aria-label="Tutup detail Layanan Jasa Otomotif"
                    >
                      ×
                    </button>
                  </div>
                  <div className="sector-product-dialog-carousel" aria-label="Carousel katalog jasa otomotif">
                    <div className="sector-product-dialog-frame">
                      <div
                        className="sector-product-dialog-track"
                        style={{ transform: `translateX(-${currentJasaOtomotifPage * 100}%)` }}
                        aria-live="polite"
                      >
                        {jasaOtomotifCatalogPages.map(({ src, page }) => (
                          <div className="sector-product-dialog-slide" key={src} aria-hidden={currentJasaOtomotifPage !== page - 1}>
                            <Image
                              className="sector-product-dialog-page"
                              src={src}
                              alt={`Halaman ${page} katalog jasa otomotif`}
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
                        disabled={currentJasaOtomotifPage === 0}
                        onClick={() => setCurrentJasaOtomotifPage((page) => Math.max(0, page - 1))}
                      >
                        ‹
                      </button>
                      <button
                        className="sector-product-dialog-arrow is-next"
                        type="button"
                        aria-label="Halaman katalog berikutnya"
                        disabled={currentJasaOtomotifPage === jasaOtomotifCatalogPages.length - 1}
                        onClick={() => setCurrentJasaOtomotifPage((page) => Math.min(jasaOtomotifCatalogPages.length - 1, page + 1))}
                      >
                        ›
                      </button>
                    </div>
                    <div className="sector-product-dialog-dots" role="group" aria-label="Pilih halaman katalog">
                      {jasaOtomotifCatalogPages.map(({ page }) => (
                        <button
                          className={`sector-product-dialog-dot${currentJasaOtomotifPage === page - 1 ? ' is-active' : ''}`}
                          key={page}
                          type="button"
                          aria-label={`Buka halaman ${page}`}
                          aria-current={currentJasaOtomotifPage === page - 1 ? 'page' : undefined}
                          onClick={() => setCurrentJasaOtomotifPage(page - 1)}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="sector-product-dialog-description">
                    Memberikan layanan untuk Perawatan dan perbaikan Kendaraan Ringan (Mobil) dan Sepeda Motor.
                  </p>
                </div>
              </dialog>
              <dialog
                className="sector-product-dialog"
                ref={travelDialogRef}
                aria-labelledby="sector-travel-dialog-title"
                onCancel={(event) => {
                  event.preventDefault();
                  event.currentTarget.close();
                }}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowLeft') {
                    setCurrentTravelPage((page) => Math.max(0, page - 1));
                  } else if (event.key === 'ArrowRight') {
                    setCurrentTravelPage((page) => Math.min(travelCatalogPages.length - 1, page + 1));
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
                    <h2 id="sector-travel-dialog-title">Travel</h2>
                    <button
                      className="sector-product-dialog-close"
                      type="button"
                      onClick={() => travelDialogRef.current?.close()}
                      aria-label="Tutup detail Travel"
                    >
                      ×
                    </button>
                  </div>
                  <div className="sector-product-dialog-carousel" aria-label="Carousel katalog travel">
                    <div className="sector-product-dialog-frame">
                      <div
                        className="sector-product-dialog-track"
                        style={{ transform: `translateX(-${currentTravelPage * 100}%)` }}
                        aria-live="polite"
                      >
                        {travelCatalogPages.map(({ src, page }) => (
                          <div className="sector-product-dialog-slide" key={src} aria-hidden={currentTravelPage !== page - 1}>
                            <Image
                              className="sector-product-dialog-page"
                              src={src}
                              alt={`Halaman ${page} katalog travel`}
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
                        disabled={currentTravelPage === 0}
                        onClick={() => setCurrentTravelPage((page) => Math.max(0, page - 1))}
                      >
                        ‹
                      </button>
                      <button
                        className="sector-product-dialog-arrow is-next"
                        type="button"
                        aria-label="Halaman katalog berikutnya"
                        disabled={currentTravelPage === travelCatalogPages.length - 1}
                        onClick={() => setCurrentTravelPage((page) => Math.min(travelCatalogPages.length - 1, page + 1))}
                      >
                        ›
                      </button>
                    </div>
                    <div className="sector-product-dialog-dots" role="group" aria-label="Pilih halaman katalog">
                      {travelCatalogPages.map(({ page }) => (
                        <button
                          className={`sector-product-dialog-dot${currentTravelPage === page - 1 ? ' is-active' : ''}`}
                          key={page}
                          type="button"
                          aria-label={`Buka halaman ${page}`}
                          aria-current={currentTravelPage === page - 1 ? 'page' : undefined}
                          onClick={() => setCurrentTravelPage(page - 1)}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="sector-product-dialog-description">
                    Layanan jasa perjalanan dan wisata berupa perencanaan paket tur, edukasi, serta penyediaan transportasi dan pemandu profesional yang aman dan berkesan untuk kebutuhan individu, instansi, maupun acara spesial.
                  </p>
                </div>
              </dialog>
              <dialog
                className="sector-product-dialog"
                ref={jasaBogaDialogRef}
                aria-labelledby="sector-jasa-boga-dialog-title"
                onCancel={(event) => {
                  event.preventDefault();
                  event.currentTarget.close();
                }}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowLeft') {
                    setCurrentJasaBogaPage((page) => Math.max(0, page - 1));
                  } else if (event.key === 'ArrowRight') {
                    setCurrentJasaBogaPage((page) => Math.min(jasaBogaCatalogPages.length - 1, page + 1));
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
                    <h2 id="sector-jasa-boga-dialog-title">Jasa Boga</h2>
                    <button
                      className="sector-product-dialog-close"
                      type="button"
                      onClick={() => jasaBogaDialogRef.current?.close()}
                      aria-label="Tutup detail Jasa Boga"
                    >
                      ×
                    </button>
                  </div>
                  <div className="sector-product-dialog-carousel" aria-label="Carousel katalog jasa boga">
                    <div className="sector-product-dialog-frame">
                      <div
                        className="sector-product-dialog-track"
                        style={{ transform: `translateX(-${currentJasaBogaPage * 100}%)` }}
                        aria-live="polite"
                      >
                        {jasaBogaCatalogPages.map(({ src, page }) => (
                          <div className="sector-product-dialog-slide" key={src} aria-hidden={currentJasaBogaPage !== page - 1}>
                            <Image
                              className="sector-product-dialog-page"
                              src={src}
                              alt={`Halaman ${page} katalog jasa boga`}
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
                        disabled={currentJasaBogaPage === 0}
                        onClick={() => setCurrentJasaBogaPage((page) => Math.max(0, page - 1))}
                      >
                        ‹
                      </button>
                      <button
                        className="sector-product-dialog-arrow is-next"
                        type="button"
                        aria-label="Halaman katalog berikutnya"
                        disabled={currentJasaBogaPage === jasaBogaCatalogPages.length - 1}
                        onClick={() => setCurrentJasaBogaPage((page) => Math.min(jasaBogaCatalogPages.length - 1, page + 1))}
                      >
                        ›
                      </button>
                    </div>
                    <div className="sector-product-dialog-dots" role="group" aria-label="Pilih halaman katalog">
                      {jasaBogaCatalogPages.map(({ page }) => (
                        <button
                          className={`sector-product-dialog-dot${currentJasaBogaPage === page - 1 ? ' is-active' : ''}`}
                          key={page}
                          type="button"
                          aria-label={`Buka halaman ${page}`}
                          aria-current={currentJasaBogaPage === page - 1 ? 'page' : undefined}
                          onClick={() => setCurrentJasaBogaPage(page - 1)}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="sector-product-dialog-description">
                    Menyediakan layanan tata boga berupa produksi dan penyajian makanan serta minuman yang berkualitas dan higienis untuk berbagai acara.
                  </p>
                </div>
              </dialog>
              <dialog
                className="sector-product-dialog"
                ref={lasDialogRef}
                aria-labelledby="sector-las-dialog-title"
                onCancel={(event) => {
                  event.preventDefault();
                  event.currentTarget.close();
                }}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowLeft') {
                    setCurrentLasPage((page) => Math.max(0, page - 1));
                  } else if (event.key === 'ArrowRight') {
                    setCurrentLasPage((page) => Math.min(lasCatalogPages.length - 1, page + 1));
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
                    <h2 id="sector-las-dialog-title">Layanan Welding/Las</h2>
                    <button
                      className="sector-product-dialog-close"
                      type="button"
                      onClick={() => lasDialogRef.current?.close()}
                      aria-label="Tutup detail Layanan Welding/Las"
                    >
                      ×
                    </button>
                  </div>
                  <div className="sector-product-dialog-carousel" aria-label="Carousel katalog las">
                    <div className="sector-product-dialog-frame">
                      <div
                        className="sector-product-dialog-track"
                        style={{ transform: `translateX(-${currentLasPage * 100}%)` }}
                        aria-live="polite"
                      >
                        {lasCatalogPages.map(({ src, page }) => (
                          <div className="sector-product-dialog-slide" key={src} aria-hidden={currentLasPage !== page - 1}>
                            <Image
                              className="sector-product-dialog-page"
                              src={src}
                              alt={`Halaman ${page} katalog las`}
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
                        disabled={currentLasPage === 0}
                        onClick={() => setCurrentLasPage((page) => Math.max(0, page - 1))}
                      >
                        ‹
                      </button>
                      <button
                        className="sector-product-dialog-arrow is-next"
                        type="button"
                        aria-label="Halaman katalog berikutnya"
                        disabled={currentLasPage === lasCatalogPages.length - 1}
                        onClick={() => setCurrentLasPage((page) => Math.min(lasCatalogPages.length - 1, page + 1))}
                      >
                        ›
                      </button>
                    </div>
                    <div className="sector-product-dialog-dots" role="group" aria-label="Pilih halaman katalog">
                      {lasCatalogPages.map(({ page }) => (
                        <button
                          className={`sector-product-dialog-dot${currentLasPage === page - 1 ? ' is-active' : ''}`}
                          key={page}
                          type="button"
                          aria-label={`Buka halaman ${page}`}
                          aria-current={currentLasPage === page - 1 ? 'page' : undefined}
                          onClick={() => setCurrentLasPage(page - 1)}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="sector-product-dialog-description">
                    Menyediakan solusi pembuatan kanopi, pagar, teralis, dan rak besi yang fungsional dan estetis, dengan hasil yang kuat, rapi, dan profesional.
                  </p>
                </div>
              </dialog>
              <dialog
                className="sector-product-dialog"
                ref={jasaAcDialogRef}
                aria-labelledby="sector-jasa-ac-dialog-title"
                onCancel={(event) => {
                  event.preventDefault();
                  event.currentTarget.close();
                }}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowLeft') {
                    setCurrentJasaAcPage((page) => Math.max(0, page - 1));
                  } else if (event.key === 'ArrowRight') {
                    setCurrentJasaAcPage((page) => Math.min(jasaAcCatalogPages.length - 1, page + 1));
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
                    <h2 id="sector-jasa-ac-dialog-title">Layanan Jasa Pendingin (AC)</h2>
                    <button
                      className="sector-product-dialog-close"
                      type="button"
                      onClick={() => jasaAcDialogRef.current?.close()}
                      aria-label="Tutup detail Layanan Jasa Pendingin (AC)"
                    >
                      ×
                    </button>
                  </div>
                  <div className="sector-product-dialog-carousel" aria-label="Carousel katalog jasa pendingin AC">
                    <div className="sector-product-dialog-frame">
                      <div
                        className="sector-product-dialog-track"
                        style={{ transform: `translateX(-${currentJasaAcPage * 100}%)` }}
                        aria-live="polite"
                      >
                        {jasaAcCatalogPages.map(({ src, page }) => (
                          <div className="sector-product-dialog-slide" key={src} aria-hidden={currentJasaAcPage !== page - 1}>
                            <Image
                              className="sector-product-dialog-page"
                              src={src}
                              alt={`Halaman ${page} katalog jasa pendingin AC`}
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
                        disabled={currentJasaAcPage === 0}
                        onClick={() => setCurrentJasaAcPage((page) => Math.max(0, page - 1))}
                      >
                        ‹
                      </button>
                      <button
                        className="sector-product-dialog-arrow is-next"
                        type="button"
                        aria-label="Halaman katalog berikutnya"
                        disabled={currentJasaAcPage === jasaAcCatalogPages.length - 1}
                        onClick={() => setCurrentJasaAcPage((page) => Math.min(jasaAcCatalogPages.length - 1, page + 1))}
                      >
                        ›
                      </button>
                    </div>
                    <div className="sector-product-dialog-dots" role="group" aria-label="Pilih halaman katalog">
                      {jasaAcCatalogPages.map(({ page }) => (
                        <button
                          className={`sector-product-dialog-dot${currentJasaAcPage === page - 1 ? ' is-active' : ''}`}
                          key={page}
                          type="button"
                          aria-label={`Buka halaman ${page}`}
                          aria-current={currentJasaAcPage === page - 1 ? 'page' : undefined}
                          onClick={() => setCurrentJasaAcPage(page - 1)}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="sector-product-dialog-description">
                    Jasa teknis yang menyediakan layanan pengerjaan pemesinan untuk pembuatan dan perbaikan komponen serta layanan instalasi, perawatan, dan perbaikan sistem pendingin (AC).
                  </p>
                </div>
              </dialog>
              <dialog
                className="sector-product-dialog"
                ref={nilamDialogRef}
                aria-labelledby="sector-nilam-dialog-title"
                onCancel={(event) => {
                  event.preventDefault();
                  event.currentTarget.close();
                }}
                onClose={() => setIsNilamDialogOpen(false)}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowLeft') {
                    setCurrentNilamPage((page) => Math.max(0, page - 1));
                  } else if (event.key === 'ArrowRight') {
                    setCurrentNilamPage((page) => Math.min(2, page + 1));
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
                    <h2 id="sector-nilam-dialog-title">Perdagangan Minyak Nilam</h2>
                    <button
                      className="sector-product-dialog-close"
                      type="button"
                      onClick={() => nilamDialogRef.current?.close()}
                      aria-label="Tutup detail Perdagangan Minyak Nilam"
                    >
                      ×
                    </button>
                  </div>
                  <div className="sector-product-dialog-carousel" aria-label="Carousel jalur ekspor minyak nilam">
                    <div className="sector-product-dialog-frame sector-product-dialog-frame--nilam">
                      <div
                        className="sector-product-dialog-track"
                        style={{ transform: `translateX(-${currentNilamPage * 100}%)` }}
                        aria-live="polite"
                      >
                        <div className="sector-product-dialog-slide" aria-hidden={currentNilamPage !== 0}>
                          <div className="ne-hero-slide">
                            <div>
                              <div className="ne-hero-eyebrow">✈ Perdagangan Global · Minyak Nilam Aceh</div>
                              <h3>Menembus pasar dunia dari <em>Aceh</em> menuju jaringan ekspor global.</h3>
                              <p>Minyak nilam Aceh didistribusikan lewat jalur dagang lintas benua, dari hub regional di Asia Tenggara hingga pusat industri parfum di Eropa.</p>
                              <div className="ne-chips">
                                <span className="ne-chip">Asal: Banda Aceh</span>
                                <span className="ne-chip">Komoditas: Minyak Nilam</span>
                                <span className="ne-chip">Jangkauan: Asia · Timur Tengah · Eropa</span>
                              </div>
                            </div>
                            <ExportGlobe active={isNilamDialogOpen && currentNilamPage === 0} />
                          </div>
                        </div>

                        <div className="sector-product-dialog-slide" aria-hidden={currentNilamPage !== 1}>
                          <div className="ne-market-slide">
                            <div>
                              <div className="ne-slide-kicker">Jalur Distribusi</div>
                              <h3 className="ne-slide-title">Tujuan Pasar Ekspor</h3>
                            </div>
                            <div className="ne-market-grid">
                              <div className="ne-market-card">
                                <span className="ne-flag">🇸🇬</span>
                                <h4>Singapura</h4>
                                <p>Hub perdagangan regional Asia Tenggara — pintu masuk re-ekspor ke berbagai negara mitra.</p>
                              </div>
                              <div className="ne-market-card">
                                <span className="ne-flag">🇦🇪</span>
                                <h4>Dubai, Uni Emirat Arab</h4>
                                <p>Gerbang pasar Timur Tengah untuk minyak atsiri dan bahan baku parfum premium.</p>
                              </div>
                              <div className="ne-market-card">
                                <span className="ne-flag">🇳🇱</span>
                                <h4>Rotterdam, Belanda</h4>
                                <p>Pelabuhan utama Eropa, titik distribusi ke industri parfum dan kosmetik.</p>
                              </div>
                              <div className="ne-market-card">
                                <span className="ne-flag">🇫🇷</span>
                                <h4>Grasse, Prancis</h4>
                                <p>Pusat industri parfum dunia — tujuan akhir minyak nilam kualitas ekspor.</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="sector-product-dialog-slide" aria-hidden={currentNilamPage !== 2}>
                          <div className="ne-process-slide">
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                              <div>
                                <div className="ne-slide-kicker">Dari Kebun ke Kapal</div>
                                <h3 className="ne-slide-title">Proses Menuju Ekspor</h3>
                              </div>
                              <span className="ne-sample-tag">Contoh — sesuaikan isinya</span>
                            </div>
                            <div className="ne-process-list">
                              <div className="ne-process-step">
                                <div className="ne-process-num">1</div>
                                <div>
                                  <h4>Panen &amp; Penyulingan</h4>
                                  <p>Daun nilam dari petani mitra di Aceh disuling menjadi minyak atsiri mentah.</p>
                                </div>
                              </div>
                              <div className="ne-process-step">
                                <div className="ne-process-num">2</div>
                                <div>
                                  <h4>Uji Kualitas</h4>
                                  <p>Setiap batch diuji kemurnian dan kadar patchouli alcohol sesuai standar ekspor.</p>
                                </div>
                              </div>
                              <div className="ne-process-step">
                                <div className="ne-process-num">3</div>
                                <div>
                                  <h4>Pengemasan</h4>
                                  <p>Dikemas dalam drum food-grade tersegel untuk menjaga kualitas selama pengiriman.</p>
                                </div>
                              </div>
                              <div className="ne-process-step">
                                <div className="ne-process-num">4</div>
                                <div>
                                  <h4>Distribusi &amp; Ekspor</h4>
                                  <p>Dikirim ke mitra dagang di Singapura, Timur Tengah, dan Eropa.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="sector-product-dialog-arrow is-previous"
                        type="button"
                        aria-label="Slide sebelumnya"
                        disabled={currentNilamPage === 0}
                        onClick={() => setCurrentNilamPage((page) => Math.max(0, page - 1))}
                      >
                        ‹
                      </button>
                      <button
                        className="sector-product-dialog-arrow is-next"
                        type="button"
                        aria-label="Slide berikutnya"
                        disabled={currentNilamPage === 2}
                        onClick={() => setCurrentNilamPage((page) => Math.min(2, page + 1))}
                      >
                        ›
                      </button>
                    </div>
                    <div className="sector-product-dialog-dots" role="group" aria-label="Pilih slide">
                      {[0, 1, 2].map((page) => (
                        <button
                          className={`sector-product-dialog-dot${currentNilamPage === page ? ' is-active' : ''}`}
                          key={page}
                          type="button"
                          aria-label={`Slide ${page + 1}`}
                          aria-current={currentNilamPage === page ? 'page' : undefined}
                          onClick={() => setCurrentNilamPage(page)}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="sector-product-dialog-description">
                    Menyediakan minyak nilam berkualitas tinggi dari Aceh untuk pasar ekspor internasional, dengan jalur distribusi yang jelas dan standar mutu yang terjaga.
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
