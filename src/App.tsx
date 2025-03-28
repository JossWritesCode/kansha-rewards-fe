import { Link, Routes, Route } from 'react-router-dom';

import LoginPage from '@features/auth/routes/LoginPage';
import OnboardingIntro from '@features/auth/routes/OnboardingIntro';
import DashboardLayout from '@layout/DashboardLayout';

function App() {
  return (
    <>
      <nav className="border-b border-gray-200 p-4">
        <Link to="/login" className="mr-4">
          Login
        </Link>
        <Link to="/onboarding">Onboarding</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/onboarding" element={<OnboardingIntro />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
        <Route path="*" element={<div className="p-8">404 - Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
