'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import { businessUnits } from '../data/business-units';

const SectorsDirectory = dynamic(() => import('./SectorsDirectory'));
const SectorCategoryDialog = dynamic(() => import('./SectorCategoryDialog'));

const portfolioSectors = [
  {
    name: 'Nilam',
    image: '/Images/nilam.jpeg',
    description: 'Pengembangan potensi komoditas nilam melalui pengelolaan dan pengolahan yang berorientasi pada nilai tambah.',
    gradient: 'linear-gradient(125deg, rgba(0, 67, 106, 0.78), rgba(0, 142, 83, 0.76))',
  },
  {
    name: 'Manufaktur & Produksi',
    image: '/Images/manufaktur.png',
    description: 'Mendukung kegiatan manufaktur dan produksi melalui proses kerja yang terencana, efisien, dan berorientasi pada mutu.',
    gradient: 'linear-gradient(125deg, rgba(115, 24, 65, 0.78), rgba(222, 46, 66, 0.76))',
  },
  {
    name: 'Teknik & Pemeliharaan',
    image: '/Images/teknik.png',
    description: 'Bidang teknik dan pemeliharaan untuk mendukung keandalan fasilitas, peralatan, dan operasional.',
    gradient: 'linear-gradient(125deg, rgba(30, 79, 127, 0.78), rgba(190, 148, 20, 0.76))',
  },
  {
    name: 'Kreatif & Pemasaran',
    image: '/Images/kreatif.png',
    description: 'Dukungan kreatif dan pemasaran untuk memperkuat komunikasi serta jangkauan produk dan layanan.',
    gradient: 'linear-gradient(125deg, rgba(83, 38, 103, 0.78), rgba(223, 103, 30, 0.76))',
  },
  {
    name: 'Lainnya',
    image: '/Images/lainnya.png',
    description: 'Ruang bagi pengembangan usaha dan layanan lain yang sejalan dengan potensi serta kebutuhan ekosistem USK.',
    gradient: 'linear-gradient(125deg, rgba(23, 76, 123, 0.8), rgba(38, 122, 150, 0.76))',
  },
];

export default function Sectors({ isPage = false }) {
  const categoryDialogRef = useRef(null);
  const [activeSector, setActiveSector] = useState(null);

  const openCategoryDialog = (sector) => {
    setActiveSector(sector);
    categoryDialogRef.current?.showModal();
  };

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
          <span className="heading-rule" data-reveal="rise" style={{ '--reveal-delay': '160ms' }} />
          {isPage && (
            <p className="sectors-page-intro" data-reveal="rise" style={{ '--reveal-delay': '200ms' }}>
              Beragam bidang usaha yang dikembangkan untuk mendukung potensi dan kemandirian Universitas Syiah Kuala.
            </p>
          )}
        </div>
        {isPage ? (
          <SectorsDirectory />
        ) : (
          <>
            <div className="sector-grid">
              {portfolioSectors.map((sector, index) => (
                <article
                  className="sector-card"
                  key={sector.name}
                  data-reveal="rise"
                  style={{ '--reveal-delay': `${280 + index * 100}ms` }}
                >
                  <button
                    type="button"
                    className="sector-card-trigger"
                    onClick={() => openCategoryDialog(sector)}
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
                  </button>
                </article>
              ))}
            </div>
            <SectorCategoryDialog
              dialogRef={categoryDialogRef}
              category={activeSector?.name}
              image={activeSector?.image}
              gradient={activeSector?.gradient}
              units={businessUnits.filter((unit) => unit.category === activeSector?.name)}
            />
          </>
        )}
      </div>
    </section>
  );
}
