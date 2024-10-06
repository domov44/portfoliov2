import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Text from '../textual/Text';
import TextLink from '../textual/TextLink';

const StyledAside = styled.aside`
  background: var(--bg-color);
  border-radius: 10px;
  margin-top: 10px;
  position: relative;
  padding-top: 280px;
  width: 100%;
  border: 2px solid var(--grey-color);
  z-index: 3;

  @media (max-width: 1000px) {
    width: 80%;
  }
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
          <Text>
            Développé avec ❤ par
            <TextLink href="https://www.ronanscotet.com/">
              Ronan Scotet
            </TextLink>
          </Text>
        </StyledAsideContent>
      </StyledAside>
    </MenuRoot>
  );
}

export default MegaMenu;
