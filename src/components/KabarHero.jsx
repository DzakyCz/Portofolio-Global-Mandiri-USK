import Image from 'next/image';
import HomeLink from './HomeLink';

export default function KabarHero() {
  return (
    <section id="kabar-hero" className="about-hero-banner" aria-labelledby="kabar-hero-title">
      <Image
        className="about-hero-image"
        src="/Images/usk.webp"
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <div className="about-hero-wash" aria-hidden="true" />
      <div className="about-hero-content">
        <h1 id="kabar-hero-title">KABAR KAMI</h1>
        <nav className="about-breadcrumb" aria-label="Breadcrumb">
          <HomeLink>BERANDA</HomeLink>
          <span aria-hidden="true">/</span>
          <span aria-current="page">KABAR</span>
        </nav>
      </div>
    </section>
  );
}
