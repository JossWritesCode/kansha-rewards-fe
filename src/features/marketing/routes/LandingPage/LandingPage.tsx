import Layout from '../../layout';

import HeroSection from './components/HeroSection';
import WhyKanshaSection from './components/WhyKanshaSection';

function LandingPage() {
  return (
    <Layout>
      <HeroSection />
      <WhyKanshaSection />
    </Layout>
  );
}

export default LandingPage;
