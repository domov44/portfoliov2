import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import TextLink from '../textual/TextLink';
import Bento from '../wrapper/Bento';
import Stack from '../wrapper/Stack';
import MegaMenuItem from './MegaMenuItem';

const StyledAside = styled.aside`
  background: var(--bg-color);
  border-radius: 10px;
  position: relative;
  padding-top: 80px;
  width: 100%;
  border: 2px solid var(--grey-color);
  z-index: 3;
`;

const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
  position: absolute;
  opacity: 0;
  visibility: ${props => (props.$isopen === 'open' ? 'visible' : 'hidden')};
`;

const StyledAsideContent = styled.div`
  background: var(--bg-color);
  padding: 15px;
  display: flex;
  width: 100%;
  flex-direction: column;
  z-index: 3;
  overflow-y: auto;
  height: 100%;
  gap: 50px;
`;

const MenuRoot = styled.div`
  position: fixed;
  padding: 0px 20px;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

function MegaMenu({ isopen, toggleMenu, isAnimating, setIsAnimating }) {
  const rootMenu = useRef(null);
  const asideRef = useRef(null);
  const overlayRef = useRef(null);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (isopen === 'open') {
      setMenuVisible(true); // Rendre le menu visible

      gsap.fromTo(
        asideRef.current,
        { y: '-100%' },
        {
          delay: 0.5,
          y: '20px',
          duration: 1,
          ease: 'power4.out',
          onComplete: () => {
            setIsAnimating(false);
          },
        }
      );

      gsap.to(overlayRef.current, {
        opacity: 1,
        delay: 0.5,
        duration: 0.6,
        ease: 'power4.out',
        visibility: 'visible',
      });
    } else {
      gsap.to(asideRef.current, {
        y: '-100%',
        duration: 0.6,
        ease: 'power4.in',
        onComplete: () => {
          setMenuVisible(false);
          setIsAnimating(false);
        },
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power4.in',
        onComplete: () => {
          overlayRef.current.style.visibility = 'hidden'; // Masquer l'overlay après l'animation
        },
      });
    }
  }, [isopen]);

  return (
    <MenuRoot ref={rootMenu} style={{ display: menuVisible ? 'block' : 'none' }}>
      <Overlay ref={overlayRef} $isopen={isopen} onClick={toggleMenu} />
      <StyledAside ref={asideRef} style={{ visibility: menuVisible ? 'visible' : 'hidden' }}>
        <StyledAsideContent>
          <Stack width={"100%"} spacing={"100px"}>
            <Stack width={"50%"}>
              <Bento highlight={"highlight"}>
                {/* Contenu du menu ici */}
              </Bento>
            </Stack>
            <Stack width={"50%"} direction={"column"} spacing={"0px"}>
              <MegaMenuItem href={"/"} transition onClick={toggleMenu}>
                Home
              </MegaMenuItem>
              <MegaMenuItem href={"/about-me"} transition onClick={toggleMenu}>
                About
              </MegaMenuItem>
              <MegaMenuItem href={"/"} transition onClick={toggleMenu}>
                Work
              </MegaMenuItem>
              <MegaMenuItem href={"/"} transition onClick={toggleMenu}>
                Gallery
              </MegaMenuItem>
            </Stack>
          </Stack>
          <Stack width={"100%"}>
            <Stack width={"33.3%"}>
              <TextLink href={"https://github.com/domov44"} className="step-2">
                github
              </TextLink>
            </Stack>
            <Stack width={"33.3%"} justify={"center"}>
              <TextLink href={"https://www.linkedin.com/in/ronan-scotet-concepteur-web/"} className="step-2">
                linkedin
              </TextLink>
            </Stack>
            <Stack width={"33.3%"} justify={"end"}>
              <TextLink href={"https://www.instagram.com/rscotet/profilecard/?igsh=MWtieXhsNGlkdTl4eA=="} className="step-2">
                instagram
              </TextLink>
            </Stack>
          </Stack>
        </StyledAsideContent>
      </StyledAside>
    </MenuRoot>
  );
}

export default MegaMenu;
