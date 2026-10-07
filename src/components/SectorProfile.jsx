import Image from 'next/image';
import ProfileScrollCue from './ProfileScrollCue';

export default function SectorProfile() {
  return (
    <section className="sector-profile-section" aria-labelledby="sector-profile-title">
      <div className="section-shell sector-profile-shell">
        <div className="sector-profile-preview" data-reveal="rise">
          <div className="sector-profile-frame">
            <Image
              src="/Images/gmu.jpg"
              alt="Kegiatan presentasi PT Global Mandiri USK"
              width={1200}
              height={620}
              sizes="(max-width: 760px) 100vw, 55vw"
              priority
            />
          </div>
        </div>
        <div className="sector-profile-copy">
          <p className="eyebrow" data-reveal="rise">BIDANG USAHA</p>
          <h2 id="sector-profile-title" data-reveal="rise">Ruang Kontribusi & Kolaborasi</h2>
          <p className="sector-profile-text" data-reveal="rise">
            <strong>PT Global Mandiri USK</strong>  mengelola berbagai unit usaha strategis sebagai bagian dari komitmen dalam mendukung kemandirian Universitas Syiah Kuala. Setiap lini usaha dikembangkan dengan prinsip profesionalisme, inovasi, tata kelola yang baik, dan keberlanjutan, sehingga mampu memberikan kontribusi nyata bagi universitas, dunia usaha, dan masyarakat secara luas.
          </p>
        </div>
        <ProfileScrollCue />
      </div>
    </section>
  );
}
