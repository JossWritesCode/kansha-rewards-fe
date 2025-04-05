import Layout from '../../layout';

import HeroSection from './components/HeroSection';
import WhyKanshaSection from './components/WhyKanshaSection';
import StatsSection from './components/StatsSection';
import FeaturesGridSection from './components/FeaturesGridSection';
import ResultsSection from './components/ResultsSection';
function LandingPage() {
  return (
    <Layout>
      <HeroSection />
      <WhyKanshaSection />
      <StatsSection />
      <FeaturesGridSection />
      <ResultsSection />
    </Layout>
  );
}

export default LandingPage;
