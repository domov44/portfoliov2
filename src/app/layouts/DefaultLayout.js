'use client';
import { useState, useEffect } from 'react';
import MegaMenu from '../components/ui/aside/MegaMenu';
import Main from '../components/ui/main/Main';
import Header from '../components/ui/aside/Header';
import Footer from '../components/ui/aside/Footer';
import Transition from '../components/ui/transition/Transition';
import TransitionOverlay from '../components/ui/transition/TransitionOverlay';

export default function DefaultLayout({ children }) {
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
        <>
            <Transition />
            <TransitionOverlay/>
            <Header toggleMenu={toggleMenu} isopen={MenuOpen ? 'open' : 'close'} />
            {MenuContent}
            <Main>{children}</Main>
            <Footer />
        </>
    );
}
