import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useInstantUrlTransition } from '@/app/utils/useInstantUrlTransition';

const StyledLinkButton = styled(Link)`
  color: var(--main-color);
  position: relative;
  width: fit-content;
  text-transform: uppercase;
  font-size: 6vw;
  font-weight: 800;
  line-height: 1;

  &:hover {
    color: var(--color-title);
  }
;
`

const MegaMenuItem = ({ href, children, className, onClick, transition = false, delay = 700 }) => {
  const handleTransition = useInstantUrlTransition(delay);

  return (
    <StyledLinkButton
      href={href}
      className={className}
      onClick={event => {
        if (transition) {
          handleTransition(href, event);
        }
        if (onClick) {
          onClick();
        }
      }}
      onMouseDown={transition ? (event) => event.preventDefault() : undefined}
    >
      {children}
    </StyledLinkButton>
  );
};

export default MegaMenuItem;
