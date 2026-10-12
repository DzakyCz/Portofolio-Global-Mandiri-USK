import KabarHero from '../../components/KabarHero';
import News from '../../components/News';

export const metadata = {
  title: 'Kabar | PT Global Mandiri USK',
  description: 'Kumpulan kabar dan perkembangan terbaru seputar PT Global Mandiri USK.'
};

export default function KabarPage() {
  return (
    <>
      <KabarHero />
      <News isPage />
    </>
  );
}
