import About from '../../components/About';
import AboutHero from '../../components/AboutHero';
import ExecutiveCommittee from '../../components/ExecutiveCommittee';
import HistoryTimeline from '../../components/HistoryTimeline';
import VisionMission from '../../components/VisionMission';

export const metadata = {
  title: 'Tentang Kami | PT Global Mandiri USK',
  description: 'Kenali PT Global Mandiri USK dan komitmen kami dalam mengembangkan peluang usaha dan kemitraan.'
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <About isPage />
      <ExecutiveCommittee />
      <HistoryTimeline />
      <VisionMission />
    </>
  );
}
