import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Text from '../textual/Text';
import TextLink from '../textual/TextLink';
import Bento from '../wrapper/Bento';
import Stack from '../wrapper/Stack';
import Title from '../textual/Title';

const StyledAside = styled.aside`
  background: var(--bg-color);
  border-radius: 10px;
  margin-top: 10px;
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
  display: ${props => (props.$isopen === 'open' ? 'block' : 'none')}; 
  z-index: 3;
`;

function MegaMenu({ isopen, toggleMenu }) {
  const asideRef = useRef(null);
  const overlayRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (isopen === 'open') {
      setMenuVisible(true);
      setTimeout(() => {
        setIsAnimating(true);
        gsap.fromTo(
          asideRef.current,
          { y: '-100%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 1,
            ease: 'power4.out',
          }
        );

        gsap.to(overlayRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: 'power4.out',
          visibility: 'visible',
        });
      }, 400);
    } else {
      setIsAnimating(false);
      gsap.to(asideRef.current, {
        y: '-100%',
        opacity: 0,
        duration: 0.6,
        ease: 'power4.in',
        onComplete: () => {
          setTimeout(() => {
            setMenuVisible(false);
          }, 600);
        },
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power4.in',
        onComplete: () => {
          gsap.set(overlayRef.current, { visibility: 'hidden' });
        },
      });
    }
  }, [isopen]);

  return (
    <MenuRoot $isopen={isopen} style={{ display: menuVisible ? 'block' : 'none' }}>
      <Overlay ref={overlayRef} $isopen={isopen} onClick={toggleMenu} />
      <StyledAside ref={asideRef} className="banner" $isAnimating={isAnimating}>
        <StyledAsideContent>
          <Stack width={"100%"} spacing={"100px"}>
            <Stack width={"50%"}>
              <Bento highlight={"highlight"}>
              </Bento>
            </Stack>
            <Stack width={"50%"} direction={"column"} spacing={"0px"}>
              <Title variant="colored" level={1}>
                HOME
              </Title>
              <Title variant="colored" level={1}>
                ABOUT
              </Title>
              <Title variant="colored" level={1}>
                WORK
              </Title>
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
