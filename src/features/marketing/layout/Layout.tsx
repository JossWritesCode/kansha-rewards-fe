import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow p-5">{children}</main>
      <Footer />
    </div>
  );
}

export default MarketingLayout;
