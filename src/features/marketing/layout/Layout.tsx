import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <h1 className="text-3xl font-bold text-red-500">Hello Tailwind</h1>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default MarketingLayout;
