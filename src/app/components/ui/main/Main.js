// components/ui/main/Main.js

import React, { forwardRef } from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0px;
  align-items: center;
  justify-content: center;
  margin-left: ${props => (props.$variant === 'wsidebar' ? '280px' : '0px')};

  @media (max-width: 1000px) {
    margin-left: ${props => (props.$variant === 'wsidebar' ? '0px' : '0px')};
  }
`;

const Main = forwardRef(({ variant, children }, ref) => {
  return <MainContainer $variant={variant} ref={ref}>{children}</MainContainer>;
});

export default Main;
