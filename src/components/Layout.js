// This is a common component for all the screens of the app
// It contains Header & Footer components, and other common
//  attributes that are shared by all the pages in the app.
import React, { useCallback, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';

const Layout = ({ children }) => {
  console.log('rendered');
  const [showBTTButton, setShowBTTButton] = useState(false);

  const scrollEventListenerCB = useCallback(() => {
    if (window.scrollY > 200) {
      setShowBTTButton(true);
    } else {
      setShowBTTButton(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollEventListenerCB);
    return () => {
      window.removeEventListener('scroll', scrollEventListenerCB);
    };
  }, []);

  const onBackToTopButtonClicked = useCallback(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-slate-900 w-full lg:w-2/3 m-auto">
      <Header />
      <div className="flex flex-col flex-grow">{children}</div>
      {showBTTButton && (
        <ScrollToTopButton onClickCallback={onBackToTopButtonClicked} />
      )}
      <Footer />
    </main>
  );
};

export default Layout;
