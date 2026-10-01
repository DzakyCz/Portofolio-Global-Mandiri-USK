import './site.css';
import { Montserrat } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MotionEffects from '../components/MotionEffects';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'PT Global Mandiri USK',
  description: 'PT Global Mandiri mendukung pengembangan bisnis inovatif dan berkelanjutan Universitas Syiah Kuala'
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={montserrat.variable}>
      <body>
        <MotionEffects />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
