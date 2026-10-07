import Link from 'next/link';
import Image from 'next/image';
import ProfileScrollCue from './ProfileScrollCue';

export default function About({ isPage = false }) {
  const Heading = isPage ? 'h1' : 'h2';

  return (
    <section id="about" className={`about-section${isPage ? ' about-profile-section' : ''}`}>
      <div className={`section-shell${isPage ? ' about-profile-shell' : ''}`}>
        <div className="about-preview" data-reveal="rise" style={{ '--reveal-delay': '0ms' }}>
          <div className="about-preview-frame">
            <Image
              src={isPage ? '/Images/gmu.jpg' : '/Images/nilam.jpeg'}
              alt={isPage ? 'Kegiatan presentasi PT Global Mandiri USK' : 'Kegiatan usaha PT Global Mandiri USK'}
              width={1200}
              height={620}
              sizes="(max-width: 760px) 100vw, 50vw"
              loading={isPage ? 'eager' : 'lazy'}
            />
            {!isPage && <span className="preview-caption">Global Mandiri USK <span>—</span> Banda Aceh, Indonesia</span>}
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow" data-reveal="rise" style={{ '--reveal-delay': '100ms' }}>TENTANG KAMI</p>
          <Heading data-reveal="rise" style={{ '--reveal-delay': '180ms' }}>Profil Perusahaan</Heading>
          <p className="about-text" data-reveal="rise" style={{ '--reveal-delay': '260ms' }}>
            <strong className="about-lead">PT Global Mandiri USK</strong> adalah perusahaan yang dibangun sebagai representasi transformasi Universitas Syiah Kuala menjadi Perguruan Tinggi Negeri Berbadan Hukum (PTNBH). Dengan semangat inovasi dan kemandirian, perusahaan ini dirancang sebagai holding untuk mengelola unit-unit bisnis strategis.
          </p>
          <p className="about-text" data-reveal="rise" style={{ '--reveal-delay': '340ms' }}>
            Kami percaya bahwa sinergi antara keunggulan akademik dan dunia bisnis akan memberikan dampak nyata bagi kemajuan masyarakat. Komitmen kami adalah menghadirkan solusi yang profesional, inovatif, dan berorientasi pada kebutuhan pelanggan, sekaligus menjadi pilar penguatan ekosistem kewirausahaan berbasis pendidikan di Indonesia.
          </p>
          {!isPage && (
            <Link href="/about#about-hero" className="text-link" data-reveal="rise" style={{ '--reveal-delay': '420ms' }}>
              More About Us <span>↗</span>
            </Link>
          )}
        </div>
        {isPage && <ProfileScrollCue />}
      </div>
    </section>
  );
}
