import Layout from '../../layout';

import HeroSection from './components/HeroSection';
import WhyKanshaSection from './components/WhyKanshaSection';
import StatsSection from './components/StatsSection';
function LandingPage() {
  return (
    <Layout>
      <HeroSection />
      <WhyKanshaSection />
      <StatsSection />
    </Layout>
  );
}

export default LandingPage;
