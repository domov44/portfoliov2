'use client'
import { useState } from 'react';
import MegaMenu from '../components/ui/aside/MegaMenu';
import Header from '../components/ui/aside/Header';
import Footer from '../components/ui/aside/Footer';

export default function LayoutStructure({ children }) {
    const [menuOpen, setMenuOpen] = useState(false); // État pour le menu
    const [isAnimating, setIsAnimating] = useState(false); // État pour l'animation

    // Fonction pour ouvrir/fermer le menu
    const toggleMenu = () => {
        if (isAnimating) return; // Empêche les changements d'état pendant l'animation
        setIsAnimating(true);
        setMenuOpen(prev => !prev);
    };

    return (
        <>
            {/* Passez `toggleMenu`, `isopen`, et `isAnimating` à Header et MegaMenu */}
            <Header toggleMenu={toggleMenu} isopen={menuOpen ? 'open' : 'close'} isAnimating={isAnimating} />
            <MegaMenu toggleMenu={toggleMenu} isopen={menuOpen ? 'open' : 'close'} isAnimating={isAnimating} setIsAnimating={setIsAnimating} />
            {children}
            <Footer />
        </>
    );
}
