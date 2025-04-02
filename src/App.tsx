import { Routes, Route } from 'react-router-dom';

import LoginPage from '@features/auth/routes/LoginPage';
import OnboardingIntro from '@features/auth/routes/OnboardingIntro';
import DashboardLayout from '@layout/DashboardLayout';
import LandingPage from '@features/marketing/routes/LandingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/onboarding" element={<OnboardingIntro />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
