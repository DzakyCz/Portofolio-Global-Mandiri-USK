import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-shell">
        <div className="footer-invite">
          <p className="eyebrow">TOGETHER WE GROW, TOGETHER WE SHINE</p>
          <h2>Mari bertumbuh<br />bersama.</h2>
          <a className="footer-email" href="mailto:globalmandiri@usk.ac.id">
            <Image src="https://brawijayamultiusaha.co.id/img/icons/mail.png" alt="" width={22} height={22} />globalmandiri@usk.ac.id
          </a>
        </div>
        <div className="footer-contact">
          <Image className="footer-logo" src="/Images/logo putih.png" alt="Logo Global Mandiri USK" width={245} height={74} loading="lazy" />
          <p>Jl. Tgk. Syecch Abdul Rauf No. 8<br />Kopelma Darussalam<br />Kec. Syiah Kuala<br />Kota Banda Aceh 23111<br />Aceh, Indonesia</p>
          <a href="https://www.google.com/maps/place/PT.+Global+mandiri+USK/@5.5672951,95.3672478,881m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3040370071ac3907:0x9eaf14b34e065391!8m2!3d5.5672951!4d95.3672478!16s%2Fg%2F11yhtn89sn?entry=ttu&g_ep=EgoyMDI2MDkyNy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">Lihat lokasi <span>↗</span></a>
        </div>
      </div>
      <div className="footer-bottom section-shell">
        <p>© 2026 | PT GLOBAL MANDIRI USK</p>
        <div className="social-links" aria-label="Media sosial">
          <a href="https://www.instagram.com/uskglobalmandiri/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/company/globalmandiriusk/posts/?feedView=all" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <a className="whatsapp-float" href="https://wa.me/6289601969966" rel="noreferrer" aria-label="Hubungi PT GLOBAL MANDIRI USK melalui WhatsApp">
        <Image src="/Images/wa.avif" alt="" width={64} height={64} />
      </a>
    </footer>
  );
}
