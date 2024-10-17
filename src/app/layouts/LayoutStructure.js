'use client';
import MegaMenu from '../components/ui/aside/MegaMenu';
import Header from '../components/ui/aside/Header';
import Footer from '../components/ui/aside/Footer';
import { useMenuContext } from '../contexts/MenuContext';

export default function LayoutStructure({children}) {
    const { menuOpen, isAnimating, setIsAnimating, toggleMenu } = useMenuContext();

    const MenuContent = (
        <MegaMenu
            toggleMenu={toggleMenu}
            isopen={menuOpen ? 'open' : 'close'}
            isAnimating={isAnimating}
            setIsAnimating={setIsAnimating}
        />
    );

    return (
        <>
            <Header toggleMenu={toggleMenu} isopen={menuOpen ? 'open' : 'close'} isAnimating={isAnimating} />
            {MenuContent}
            {children}
            <Footer />
        </>
    );
}
