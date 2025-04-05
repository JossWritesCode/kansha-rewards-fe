import Layout from '../../layout';

import HeroSection from './components/HeroSection';
import WhyKanshaSection from './components/WhyKanshaSection';
import StatsSection from './components/StatsSection';
import FeaturesGrid from './components/FeaturesGrid';
function LandingPage() {
  return (
    <Layout>
      <HeroSection />
      <WhyKanshaSection />
      <StatsSection />
      <FeaturesGrid />
    </Layout>
  );
}

export default LandingPage;
