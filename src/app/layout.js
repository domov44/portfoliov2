'use client';
import { useState, useEffect } from 'react';
import './styles/globals.css';
import './styles/styles.css';
import './styles/theme.css';
import './fonts/fonts.css';
import MegaMenu from './components/ui/aside/MegaMenu';
import Main from './components/ui/main/Main';
import Header from './components/ui/aside/Header';

export default function RootLayout({ children }) {
  const [MenuOpen, setMenuOpen] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [key, setKey] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  useEffect(() => {
    setPageLoaded(true);
  }, [key]);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [children]);

  const MenuContent = pageLoaded ? (
    <MegaMenu toggleMenu={toggleMenu} isopen={MenuOpen ? 'open' : 'close'} />
  ) : null;

  return (
    <html lang="en">
      <body data-theme="dark">
        <Header toggleMenu={toggleMenu} isopen={MenuOpen ? 'open' : 'close'} />
        {MenuContent}
        <Main>{children}</Main>
      </body>
    </html>
  );
}
