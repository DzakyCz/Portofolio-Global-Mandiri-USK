"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeLink from './HomeLink';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    ['01', 'Beranda', '/'],
    ['02', 'Tentang', '/about#about-hero'],
    ['03', 'Bidang', '/bidang'],
    ['04', 'Kabar', '/#news'],
  ];

  useEffect(() => {
    let animationFrame = null;

    const handleScroll = () => {
      if (animationFrame !== null) return;

      animationFrame = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setIsScrolled((scrolled) => (scrolled ? scrollY > 8 : scrollY > 36));
        animationFrame = null;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="header-inner">
          <HomeLink className="brand" aria-label="PT Global Mandiri USK, beranda">
            <Image src="/Images/Logo.png?v=2" alt="Global Mandiri USK" width={224} height={54} priority unoptimized />
          </HomeLink>
          <nav className="header-nav">
            {navItems.map(([number, label, href]) => href === '/'
              ? <HomeLink className="header-nav-link" key={number}>{label}</HomeLink>
              : <Link className="header-nav-link" href={href} key={number}>{label}</Link>)}
          </nav>
          <div className="header-actions">
            <span className="language-label">ID</span>
            <button
              className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
              type="button"
              aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div
          className="menu-backdrop"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsMenuOpen(false);
          }}
        >
          <nav className="menu-panel" id="mobile-navigation" aria-label="Navigasi mobile">
            <p className="menu-kicker">Navigasi</p>
            {navItems.map(([number, label, href]) => (
              <Link className="menu-link" href={href} key={number} onClick={() => setIsMenuOpen(false)}>
                <span>{number}</span>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
