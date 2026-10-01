import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-wash" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-eyebrow" data-reveal="rise">HOLDING COMPANY OF UNIVERSITAS SYIAH KUALA</p>
        <h1 data-reveal="rise">PT GLOBAL<br />MANDIRI USK</h1>
        <p className="hero-slogan" data-reveal="rise">TOGERTHER WE GROW, TOGETHER WE SHINE</p>
        <Link href="#about" className="hero-scroll" data-reveal="rise">
          <span className="scroll-mark">↓</span><span>Scroll to explore</span>
        </Link>
      </div>
    </section>
  );
}
