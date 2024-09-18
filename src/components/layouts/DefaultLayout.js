import React, { useState, useEffect } from 'react';
import MegaMenu from '../ui/aside/MegaMenu';
import Main from '../ui/main/Main';
import Header from '../ui/aside/Header';

export default function Defaultlayout({ children }) {
  const [MenuOpen, setMenuOpen] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [key, setKey] = useState(0);

  console.log(MenuOpen)

  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setMenuOpen(false);
      } else {
        setMenuOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    setPageLoaded(true);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [key]);

  const MenuContent = pageLoaded ? (
    <MegaMenu toggleMenu={toggleMenu} isopen={MenuOpen ? 'open' : 'close'} />
  ) : null;

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [children]);

  return (
    <>
      <Header toggleMenu={toggleMenu} isopen={MenuOpen ? 'open' : 'close'} />
      {MenuContent}
      <Main>
        {children}
      </Main>
    </>
  );
}
