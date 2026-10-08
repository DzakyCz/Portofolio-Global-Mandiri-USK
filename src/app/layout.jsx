import './site.css';
import { Sora, Plus_Jakarta_Sans } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MotionEffects from '../components/MotionEffects';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata = {
  title: 'PT Global Mandiri USK',
  description: 'PT Global Mandiri mendukung pengembangan bisnis inovatif dan berkelanjutan Universitas Syiah Kuala'
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${sora.variable} ${plusJakartaSans.variable}`}>
      <body>
        <MotionEffects />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
