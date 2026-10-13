'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';

const SectorsDirectory = dynamic(() => import('./SectorsDirectory'));

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

export default function Sectors({ isPage = false }) {
  return (
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
          <SectorsDirectory />
        ) : (
          <div className="sector-grid">
            {portfolioSectors.map((sector, index) => (
              <article
                className="sector-card"
                key={sector.name}
                data-reveal="rise"
                style={{ '--reveal-delay': `${280 + index * 100}ms` }}
              >
                <Image
                  src={sector.image}
                  alt=""
                  fill
                  className="sector-photo"
                  sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 40vw"
                  quality={70}
                />
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
  );
}
