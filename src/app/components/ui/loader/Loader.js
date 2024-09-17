import React from 'react';
import styled from "styled-components";
import Paragraph from '../textual/Paragraph';
import LoaderSpinner from './LoaderSpinner';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default function Loader() {
  return (
      <Container>
        <LoaderSpinner/>
        <Paragraph variant="white">Chargement...</Paragraph>
      </Container>
  )
}