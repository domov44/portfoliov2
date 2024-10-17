'use client';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import Container from '../wrapper/Container';
import Text from '../textual/Text';
import DynamicHour from '@/app/utils/DynamicHour';
import Stack from '../wrapper/Stack';
import Logo from '../Logo';
import InvisibleLink from '../button/InvisibleLink';

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 4;
  padding: 40px;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  pointer-events: none;
`;

const StyledAsideButton = styled.button`
  position: relative;
  line-height: 1;
  pointer-events: fill;
  z-index: 2;
  cursor: pointer;
  background: none;
  border: none;
  font-weight: 500;
  font-size: 20px;
  color: var(--color-title);
  font-family: var(--text-font-cashdisplay);
  overflow: hidden;
  height: 30px;
  width: 80px;
`;

const ButtonTextWrapper = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  pointer-events: fill;
`;

const ButtonText = styled.span`
  position: absolute;
  left: 0;
  width: 100%;
  pointer-events: fill;
  text-align: center;
  transition: transform 0.8s ease;
`;

function Header({ isopen, toggleMenu, isAnimating }) {
  const buttonRef = useRef(null);
  const menuTextRef = useRef(null);
  const closeTextRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const menuSpan = menuTextRef.current;
    const closeSpan = closeTextRef.current;

    gsap.set(menuSpan, { yPercent: isopen === 'open' ? -200 : 0 });
    gsap.set(closeSpan, { yPercent: isopen === 'open' ? 0 : 200 });

    const tl = gsap.timeline({ paused: true });
    tl.to(menuSpan, { duration: 0.2, yPercent: -200, ease: 'power2.inOut' })
      .to(closeSpan, { duration: 0.2, yPercent: 0, ease: 'power2.inOut' }, 0);

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [isopen]);

  const handleClick = () => {
    if (isAnimating) return; // Ne rien faire si l'animation est en cours

    const tl = timelineRef.current;
    tl.play(); // Joue l'animation
    toggleMenu(); // Appelle toggleMenu pour changer l'état
  };

  return (
    <StyledHeader $isopen={isopen}>
      <Container direction="row" align="center" width="100%" justify="space-between">
        <Stack width="33.3%" align={"center"}>
          <InvisibleLink href={"/"} lineheight={"0"}>
            <Logo />
          </InvisibleLink>
        </Stack>
        <Stack width="33.3%" align={"center"} justify={"center"}>
          <StyledAsideButton
            ref={buttonRef}
            onClick={handleClick}
            className='space-0'
          >
            <ButtonTextWrapper>
              <ButtonText ref={menuTextRef}>menu</ButtonText>
              <ButtonText ref={closeTextRef}>close</ButtonText>
            </ButtonTextWrapper>
          </StyledAsideButton>
        </Stack>
        <Stack width="33.3%" align={"center"} justify={"end"}>
          <DynamicHour />
        </Stack>
      </Container>
    </StyledHeader>
  );
}

export default Header;
