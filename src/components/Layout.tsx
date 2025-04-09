import React from 'react';
import Header from '@/components/header';
import SubHeader from '@/components/subheader';
import Footer from '@/components/footer';
import '../App.css'; // global styles if needed

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
