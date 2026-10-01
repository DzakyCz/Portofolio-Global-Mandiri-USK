"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    ['01', 'Beranda', '#home'],
    ['02', 'Tentang', '#about'],
    ['03', 'Bidang', '#sectors'],
    ['04', 'Kabar', '#news'],
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackdropClick = (event) => {
    const scrollLink = document.querySelector('.hero-scroll');
    const linkBounds = scrollLink?.getBoundingClientRect();
    const clickedScrollLink = linkBounds
      && event.clientX >= linkBounds.left
      && event.clientX <= linkBounds.right
      && event.clientY >= linkBounds.top
      && event.clientY <= linkBounds.bottom;

    setIsMenuOpen(false);

    if (clickedScrollLink) {
      window.history.replaceState(null, '', '#about');
      document.querySelector('#about')?.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="header-inner">
          <Link className="brand" href="#home" aria-label="PT Global Mandiri USK, beranda">
            <Image src="/Images/Logo.png?v=2" alt="Global Mandiri USK" width={224} height={54} priority unoptimized />
          </Link>
          <div className="header-actions">
            <span className="language-label">ID</span>
            <button
              className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
              type="button"
              aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="menu-backdrop" onClick={handleBackdropClick}>
          <nav className="menu-panel" aria-label="Navigasi utama" onClick={(event) => event.stopPropagation()}>
            <p className="menu-kicker">Jelajahi Global Mandiri USK</p>
            {navItems.map(([number, label, href]) => (
              <Link className="menu-link" href={href} key={number} onClick={() => setIsMenuOpen(false)}>
                <span>{number}</span>{label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
