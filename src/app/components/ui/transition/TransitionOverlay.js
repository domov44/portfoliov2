import React from 'react';
import styled from "styled-components";

const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
  position: fixed;
  opacity: 0;
  visibility: hidden;
`;

export default function TransitionOverlay() {
    return (
        <Overlay className='transition-overlay' />
    )
}