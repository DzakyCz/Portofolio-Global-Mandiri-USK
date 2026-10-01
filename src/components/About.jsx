import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-shell">
        <div className="about-preview" data-reveal="rise">
          <div className="about-preview-frame">
            <Image src="/Images/nilam.jpeg" alt="Kegiatan usaha PT Global Mandiri USK" width={1200} height={620} sizes="100vw" loading="lazy" />
            <span className="preview-caption">Global Mandiri USK <span>—</span> Banda Aceh, Indonesia</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow" data-reveal="rise">TENTANG KAMI</p>
          <h2 data-reveal="rise">SEKILAS TENTANG PT GLOBAL MANDIRI USK (GMU)</h2>
          <p className="about-text" data-reveal="rise">
            <strong className="about-lead">PT Global Mandiri USK</strong> merupakan perusahaan yang hadir untuk mengembangkan peluang usaha, memperluas kemitraan, dan mendorong terciptanya nilai bersama. Kami membawa semangat profesional, adaptif, dan kolaboratif dalam setiap langkah, sehingga perusahaan dapat tumbuh secara sehat sekaligus memberi manfaat yang nyata.
          </p>
          <Link href="" className="text-link" data-reveal="rise">
            More About Us <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
