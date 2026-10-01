import Link from 'next/link';
import Image from 'next/image';

export default function News() {
  const newsItems = [
    {
      date: '28 Januari 2026',
      category: 'Update Perusahaan, Kerja sama',
      title: 'PT GMU Gandeng SMK Untuk Transformasi Aset Menuju Kemandirian Ekonomi',
      desc: 'Banda Aceh, Serambi - Universitas Syiah Kuala (USK) melalui PT Global Mandiri USK menjalin kolaborasi dengan sekolah menengah kejuruan (SMK) di Banda Aceh untuk mengoptimalkan pengelolaan aset pendidikan. Kerja sama ini bertujuan memperkuat ekosistem bisnis PTNBH sekaligus mendorong kemandirian ekonomi berbasis pendidikan vokasi.',
      image: '/Images/berita/28 jan 2026.webp',
      href: '',
    },
    {
      date: '10 Januari 2026',
      category: 'Update Perusahaan, Bisnis',
      title: 'PT Global Mandiri USK Cetak Kenaikan Aset Lebih dari 300%',
      desc: 'Banda Aceh, USK  - PT Global Mandiri USK berhasil mencatat kenaikkan aset lebih dari 300% sejak berdiri dan menyiapkan ekspansi usaha lanjutan untuk meningkatkan kontribusi terhadap Universitas Syiah Kuala.',
      image: '/Images/berita/10 jan 2026.jpg',
      href: '',
    },
     {
      date: '22 November 2025',
      category: 'Update Perusahaan, Bisnis',
      title: 'USK Pimpin Hilirasi Nilam, Jaga Supremasi 90% Pasar Global',
      desc: 'Banda Aceh, USK - Universitas Syiah Kuala (USK) memperkuat posisi Indonesia di pasar minyak nilam dunia dengan target mempertahankan 90% pasokan nilam dengan mempercepat pengolahan hilir, penelitian, dan kolaborasi industry.',
      image: '/Images/berita/22 nov 2025.jpg',
      href: '',
    },
  ];

  return (
    <section id="news" className="news-section">
      <div className="section-shell">
        <div className="news-heading" data-reveal="rise">
          <div><p className="eyebrow">KABAR KAMI</p><h2>BERITA TERBARU</h2></div>
          <Link href="https://brawijayamultiusaha.co.id/id/news" className="text-link">Lihat Semua <span>↗</span></Link>
        </div>
        <div className="news-featured">
          {newsItems.map((item, index) => (
            <article className="news-card" key={item.title} data-reveal="rise" style={{ '--reveal-delay': `${index * 100}ms` }}>
              <Link href={item.href} className="news-image"><Image src={item.image} alt={item.title} width={640} height={400} sizes="(max-width: 760px) 90vw, 30vw" loading="lazy" /></Link>
              <div className="news-meta"><span>{item.date}</span><span>{item.category}</span></div>
              <h3><Link href={item.href}>{item.title}</Link></h3>
              <p>{item.desc}</p>
              <Link href={item.href} className="news-read-more">Baca Selengkapnya <span>↗</span></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
