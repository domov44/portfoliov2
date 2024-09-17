import React from 'react';
import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

const LoaderSpinnerElement = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: var(--main-color);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${rotateAnimation} 1s linear infinite;
    margin: 20px auto;
`;

export default function LoaderSpinner() {
    return (
        <LoaderSpinnerElement />
    )
}