import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import Container from '../wrapper/Container';
import Text from '../textual/Text';
import DynamicHour from '@/utils/DynamicHour';

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 3;
  background: var(--transparent-bg-color);
  border-bottom: 2px solid var(--grey-color);
  padding: 10px 5% 10px 5%;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
`;

const StyledAsideButton = styled.button`
  background-color: var(--bg-color);
  position: relative;
  z-index: 2;
  cursor: pointer;
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
`;

const ButtonText = styled.span`
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
  transition: transform 0.4s ease;
`;

function Header({ isopen, toggleMenu }) {
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
    const tl = timelineRef.current;
    tl.play();
    toggleMenu();

    console.log(isopen)
  };

  return (
    <StyledHeader $isopen={isopen}>
      <Container direction="row" align="center" width="100%" justify="space-between" maxwidth="1100px">
        <Text fontfamily={"styled"}>Ronan</Text>
        <StyledAsideButton ref={buttonRef} onClick={handleClick}>
          <ButtonTextWrapper>
            <ButtonText ref={menuTextRef}>menu</ButtonText>
            <ButtonText ref={closeTextRef}>close</ButtonText>
          </ButtonTextWrapper>
        </StyledAsideButton>
        <DynamicHour />
      </Container>
    </StyledHeader>
  );
}

export default Header;