import React from 'react';
import Header from '@/components/layout/header';
import SubHeader from '@/components/layout/subheader';
import Footer from '@/components/layout/footer';
import '@/App.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="main-container">
        <Header />
        <SubHeader />
        {children}
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
