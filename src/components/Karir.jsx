'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { jobCategories, jobs } from '../data/jobs';
import ArrowIcon from './icons/ArrowIcon';

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6.25" stroke="currentColor" strokeWidth="1.75" />
      <path d="M14 14L17.5 17.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2.5L11.6 8.4L17.5 10L11.6 11.6L10 17.5L8.4 11.6L2.5 10L8.4 8.4L10 2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function PersonPlusIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="7.75" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2.5 17c0-3 2.5-5 5.25-5s5.25 2 5.25 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 7v5M13.5 9.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12M11 5.5L16.5 10L11 14.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg className="job-spinner" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2.25" />
      <path d="M17.5 10a7.5 7.5 0 0 0-7.5-7.5" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
    </svg>
  );
}

export default function Karir() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const categoryRef = useRef(null);
  const searchTimeoutRef = useRef(null);

  useEffect(() => {
    if (!isCategoryOpen) return undefined;
    const handlePointerDown = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsCategoryOpen(false);
    };
    document.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCategoryOpen]);

  useEffect(() => () => window.clearTimeout(searchTimeoutRef.current), []);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (isSearching) return;
    setIsSearching(true);
    setHasSearched(false);
    searchTimeoutRef.current = window.setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
    }, 600);
  };

  const query = searchQuery.trim().toLocaleLowerCase('id');
  const visibleJobs = useMemo(
    () => jobs.filter((job) =>
      (selectedCategory === null || job.category === selectedCategory)
      && (query === ''
        || job.title.toLocaleLowerCase('id').includes(query)
        || job.category.toLocaleLowerCase('id').includes(query))
    ),
    [query, selectedCategory]
  );

  return (
    <section className="job-search-section" aria-label="Pencarian lowongan Global Mandiri USK">
      <div className="section-shell">
        <div className="job-search-bar">
          <div className="job-search-bar-media" aria-hidden="true">
            <Image
              className="job-search-bar-image"
              src="/Images/gmu.jpg"
              alt=""
              fill
              sizes="(max-width: 760px) 100vw, 1200px"
              quality={70}
            />
            <div className="job-search-bar-wash" />
          </div>
          <form className="job-search-form" onSubmit={handleSearchSubmit}>
            <div className="job-search-input-wrap">
              <span className="job-search-input-icon"><SearchIcon /></span>
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Cari posisi, mis. Administration"
                aria-label="Cari posisi"
              />
              <div className="job-search-category" ref={categoryRef}>
                <button
                  type="button"
                  className="job-search-category-toggle"
                  aria-haspopup="listbox"
                  aria-expanded={isCategoryOpen}
                  aria-label={selectedCategory ? `Kategori: ${selectedCategory}` : 'Pilih kategori'}
                  onClick={() => setIsCategoryOpen((open) => !open)}
                >
                  <ChevronDownIcon />
                </button>
                {isCategoryOpen && (
                  <ul className="job-search-category-list" role="listbox">
                    <li>
                      <button
                        type="button"
                        role="option"
                        aria-selected={selectedCategory === null}
                        className={selectedCategory === null ? 'is-selected' : ''}
                        onClick={() => {
                          setSelectedCategory(null);
                          setSearchQuery('');
                          setIsCategoryOpen(false);
                        }}
                      >
                        Semua kategori
                      </button>
                    </li>
                    {jobCategories.map((category) => (
                      <li key={category}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={selectedCategory === category}
                          className={selectedCategory === category ? 'is-selected' : ''}
                          onClick={() => {
                            setSelectedCategory(category);
                            setSearchQuery(category);
                            setIsCategoryOpen(false);
                          }}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="job-search-submit"
              disabled={isSearching}
              aria-busy={isSearching}
            >
              {isSearching ? (
                <>
                  <SpinnerIcon />
                  Mencari...
                </>
              ) : (
                'Cari Posisi'
              )}
            </button>
          </form>
        </div>

        {hasSearched && (
        <div className="job-results">
          <div className="job-results-heading">
            <h3>Hasil Pencarian</h3>
            <span className="job-results-count" aria-live="polite">{visibleJobs.length}</span>
          </div>

          {visibleJobs.length > 0 ? (
            <div className="job-list">
              {visibleJobs.map((job) => (
                <article className="job-card" key={job.title}>
                  <div className="job-card-info">
                    <h3>{job.title}</h3>
                    <div className="job-card-meta">
                      <span className="job-card-category">{job.category}</span>
                      {job.location && <span>{job.location}</span>}
                      {job.type && <span>{job.type}</span>}
                    </div>
                  </div>
                  <a className="text-link" href={job.href} target="_blank" rel="noopener noreferrer">
                    Lamar<span><ArrowIcon direction="up-right" /></span>
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="job-empty-state" role="status">
              <span className="job-empty-icon"><SearchIcon /></span>
              <h3>Belum ada posisi tersedia</h3>
              <p>
                Belum ada lowongan yang dibuka di sini. Anda tetap bisa menitipkan lamaran agar
                dipertimbangkan lebih dulu saat posisi terbuka.
              </p>
              <a
                className="job-empty-cta"
                href="mailto:globalmandiri@usk.ac.id?subject=Lamaran%20Umum%20-%20Talent%20Pool%20GMU"
              >
                <PersonPlusIcon />
                Kirim Lamaran Umum
                <ArrowRightIcon />
              </a>
            </div>
          )}
        </div>
        )}

        <div className="job-talent-pool">
          <div className="job-talent-pool-content">
            <span className="job-talent-pool-badge"><SparkleIcon /> Talent Pool GMU</span>
            <h2>Belum ada posisi yang cocok?</h2>
            <p>
              Kirim data diri dan dokumen Anda sekarang. Tim HR akan menyimpannya dan menghubungi Anda
              saat posisi yang sesuai terbuka.
            </p>
          </div>
          <a
            className="job-talent-pool-cta"
            href="mailto:globalmandiri@usk.ac.id?subject=Lamaran%20Umum%20-%20Talent%20Pool%20GMU"
          >
            <PersonPlusIcon />
            Kirim Lamaran Umum
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
