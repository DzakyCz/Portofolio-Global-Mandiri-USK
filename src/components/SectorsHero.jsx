import Image from 'next/image';
import HomeLink from './HomeLink';

export default function SectorsHero() {
  return (
    <section id="sectors-hero" className="about-hero-banner" aria-labelledby="sectors-hero-title">
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
        <h1 id="sectors-hero-title">BIDANG USAHA</h1>
        <nav className="about-breadcrumb" aria-label="Breadcrumb">
          <HomeLink>BERANDA</HomeLink>
          <span aria-hidden="true">/</span>
          <span aria-current="page">BIDANG USAHA</span>
        </nav>
      </div>
    </section>
  );
}
