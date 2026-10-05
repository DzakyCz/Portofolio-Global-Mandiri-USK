const milestones = [
  {
    year: '2018',
    phase: 'FONDASI',
    title: 'Akar Kemandirian dan Inovasi',
    tag: 'PEMBENTUKAN BPBU',
    description: (
      <>
        Langkah strategis <strong>Universitas Syiah Kuala (USK)</strong> dalam memperkuat kemandirian finansial
        dimulai dengan pembentukan <strong>Badan Pengembangan Bisnis Universitas (BPBU)</strong> melalui SK
        Rektor Nomor 1374/UN11/KPT/2018. BPBU hadir sebagai fondasi awal dalam mengelola potensi usaha
        universitas secara terarah, mengoptimalisasi aset, serta membangun peluang kemitraan strategis.
      </>
    ),
    reference: <>SK REKTOR&nbsp; No. 1374/UN11/KPT/2018</>,
  },
  {
    year: '2022',
    phase: 'TRANSFORMASI',
    title: 'Era Transformasi PTN-BH dan Lahirnya DBDL',
    tag: 'PTN-BH · DBDL',
    description: (
      <>
        Transformasi besar terjadi ketika USK resmi ditetapkan sebagai <strong>Perguruan Tinggi Negeri Badan
        Hukum (PTN-BH)</strong> berdasarkan Peraturan Pemerintah Nomor 38 Tahun 2022. Sebagai tindak lanjut,
        pada <strong>5 Januari 2023</strong> dibentuklah <strong>Direktorat Bisnis dan Dana Lestari (DBDL)</strong>
        {' '}melalui Peraturan Rektor USK Nomor 1 Tahun 2023. Kehadiran DBDL menjadi langkah krusial dalam
        mengelola bisnis universitas secara profesional dan berkelanjutan guna mendukung visi USK yang
        mandiri dan berdaya saing global.
      </>
    ),
    reference: <>PERATURAN REKTOR&nbsp; No. 1 Tahun 2023 · 5 Januari 2023</>,
  },
  {
    year: '2024',
    phase: 'PENDIRIAN',
    title: 'Kelahiran PT Global Mandiri USK',
    tag: 'RESMI BERDIRI',
    description: (
      <>
        Sebagai puncak dari evolusi tata kelola bisnis tersebut, pada <strong>8 November 2024</strong> secara
        resmi didirikan <strong>PT Global Mandiri USK</strong>. Sebagai entitas bisnis profesional di bawah
        payung universitas, perusahaan ini memfokuskan diri pada hilirisasi produk inovasi, pengelolaan
        operasional komersial, dan pengembangan kemitraan global yang akuntabel.
      </>
    ),
    reference: <>TANGGAL PENDIRIAN&nbsp; 8 November 2024</>,
  },
];

export default function HistoryTimeline() {
  return (
    <section className="history-section" aria-labelledby="history-title">
      <div className="section-shell history-shell">
        <header className="history-heading">
          <p className="eyebrow" data-reveal="rise" style={{ '--reveal-delay': '0ms' }}>PERJALANAN KAMI</p>
          <h2 id="history-title" data-reveal="rise" style={{ '--reveal-delay': '100ms' }}>Sejarah Perusahaan</h2>
        </header>
        <ol className="history-timeline">
          {milestones.map((milestone, index) => (
            <li
              className="history-milestone"
              data-reveal="rise"
              key={milestone.year}
              style={{ '--reveal-delay': `${220 + index * 140}ms` }}
            >
              <div className="history-year">
                <strong>{milestone.year}</strong>
                <span>{milestone.phase}</span>
              </div>
              <span className="history-marker" aria-hidden="true" />
              <article className="history-card">
                <header className="history-card-heading">
                  <h3>{milestone.title}</h3>
                  <span className="history-tag">{milestone.tag}</span>
                </header>
                <p className="history-description">{milestone.description}</p>
                <footer className="history-reference">{milestone.reference}</footer>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
