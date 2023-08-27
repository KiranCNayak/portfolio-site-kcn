// This is a common component for all the screens of the app
// It contains Header & Footer components, and other common
//  attributes that are shared by all the pages in the app.
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen bg-slate-900 items-center w-full md:w-2/3 m-auto">
      <Header />
      <div className="flex flex-col flex-grow">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
