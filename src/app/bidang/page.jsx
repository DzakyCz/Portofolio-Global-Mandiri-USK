import Sectors from '../../components/Sectors';
import SectorProfile from '../../components/SectorProfile';
import SectorsHero from '../../components/SectorsHero';

export const metadata = {
  title: 'Bidang Usaha | PT Global Mandiri USK',
  description: 'Kenali bidang usaha strategis PT Global Mandiri USK di sektor nilam, manufaktur, teknik, kreatif, dan lainnya.'
};

export default function SectorsPage() {
  return (
    <>
      <SectorsHero />
      <SectorProfile />
      <Sectors isPage />
    </>
  );
}
