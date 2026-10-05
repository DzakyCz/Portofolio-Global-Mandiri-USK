import Image from 'next/image';
import HomeLink from './HomeLink';

export default function AboutHero() {
  return (
    <section id="about-hero" className="about-hero-banner" aria-labelledby="about-hero-title">
      <Image
        className="about-hero-image"
        src="/Images/usk.png"
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <div className="about-hero-wash" aria-hidden="true" />
      <div className="about-hero-content">
        <h1 id="about-hero-title">TENTANG KAMI</h1>
        <nav className="about-breadcrumb" aria-label="Breadcrumb">
          <HomeLink>BERANDA</HomeLink>
          <span aria-hidden="true">/</span>
          <span aria-current="page">TENTANG KAMI</span>
        </nav>
      </div>
    </section>
  );
}
