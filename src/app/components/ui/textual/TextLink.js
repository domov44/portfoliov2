import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useInstantUrlTransition } from '@/app/utils/useInstantUrlTransition';

const StyledLinkButton = styled(Link)`
  color: var(--paragraph);
  position: relative;
  width: fit-content;
  height: fit-content;
  display: inline-block;

  &:before {
    content: '';
    width: 100%;
    height: 2px;
    border-radius: 15px;
    background: var(--main-color);
    position: absolute;
    bottom: -3px;
    transition: 0.3s ease-in-out;
  }

  &:hover:before {
    width: 0%;
  }

  &:hover {
    color: var(--color-title);
  }
;
`

const TextLink = ({ href, children, className, transition = false, delay = 5000 }) => {
    const handleTransition = useInstantUrlTransition(delay);

    return (
        <StyledLinkButton
            href={href}
            className={className}
            onClick={transition ? (event) => handleTransition(href, event) : undefined}
            onMouseDown={transition ? (event) => event.preventDefault() : undefined}
        >
            {children}
        </StyledLinkButton>
    );
};

export default TextLink;
