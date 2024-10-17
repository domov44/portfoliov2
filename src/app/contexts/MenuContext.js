'use client'
import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const useMenuContext = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleMenu = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setMenuOpen(prev => !prev);
        }
    };

    return (
        <MenuContext.Provider value={{ menuOpen, isAnimating, setIsAnimating, toggleMenu }}>
            {children}
        </MenuContext.Provider>
    );
};
