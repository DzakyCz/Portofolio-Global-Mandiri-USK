import Image from 'next/image';
import HomeLink from './HomeLink';

export default function KarirHero() {
  return (
    <section id="karir-hero" className="about-hero-banner" aria-labelledby="karir-hero-title">
      <Image
        className="about-hero-image"
        src="/Images/plaza-kampus-monumen.jpg"
        alt=""
        fill
        priority
        fetchPriority="high"
        quality={70}
        sizes="100vw"
      />
      <div className="about-hero-wash" aria-hidden="true" />
      <div className="about-hero-content">
        <h1 id="karir-hero-title">KARIR</h1>
        <nav className="about-breadcrumb" aria-label="Breadcrumb">
          <HomeLink>BERANDA</HomeLink>
          <span aria-hidden="true">/</span>
          <span aria-current="page">KARIR</span>
        </nav>
      </div>
    </section>
  );
}
