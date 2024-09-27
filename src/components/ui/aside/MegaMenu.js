import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import Text from '../textual/Text';
import TextLink from '../textual/TextLink';

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0%);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const StyledAside = styled.aside`
  background: var(--bg-color);
  padding-top: 180px;
  width: 100%;
  border: 2px solid var(--grey-color);
  position: fixed;
  z-index: 1;
  animation: ${props => (props.$isopen === 'open' ? slideIn : slideOut)} 0.4s forwards;
  animation-fill-mode: forwards;

  @media (max-width: 1000px) {
    width: 80%;
    transform: translateX(${props => (props.$isopen === 'open' ? '' : '-100%')});
    visibility: ${props => (props.$isopen === 'open' ? '' : 'hidden')};
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 4;
  display: none;

  @media (max-width: 1000px) {
    display: ${props => (props.$isopen === 'open' ? 'block' : 'none')};
  }
`;

const StyledAsideContent = styled.div`
  background: var(--bg-color);
  padding: 15px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  transition: 0.3s;
  overflow-y: auto;
  height: 100%;
`;

function MegaMenu({ isopen, toggleSidebar }) {

  return (
    <>
      <Overlay $isopen={isopen} onClick={toggleSidebar} />
      <StyledAside className="banner" $isopen={isopen}>
        <StyledAsideContent>
          <Text>
            Développé avec ❤ par
            <TextLink href="https://www.ronanscotet.com/">
              Ronan Scotet
            </TextLink>
          </Text>
        </StyledAsideContent>
      </StyledAside>
    </>
  );
}

export default MegaMenu;
