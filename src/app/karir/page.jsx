import Karir from '../../components/Karir';
import KarirHero from '../../components/KarirHero';

export const metadata = {
  title: 'Karir | PT Global Mandiri USK',
  description: 'Temukan peluang karier dan lowongan kerja di PT Global Mandiri USK.'
};

export default function KarirPage() {
  return (
    <>
      <KarirHero />
      <Karir />
    </>
  );
}
