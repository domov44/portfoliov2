import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    z-index: 99;
    position: fixed;
    background:var(--bg-color);
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(200%);
`;

export default function Transition() {
  return (
      <Container className='transition'/>
  )
}