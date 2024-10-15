'use client';

import React, { useEffect, useRef, forwardRef } from 'react';
import styled from 'styled-components';
import { useGsapAnimation } from '../../animation/AnimationGsap';

const StackDiv = styled.div`
  position: ${props => (props.$position === "fixed" ? "fixed" : props.$position === "absolute" ? "absolute" : props.$position === "sticky" ? "sticky" : props.$position === "relative" ? "relative" : "")};
  right: ${props => props.$right || ""};
  overflow-y: ${props => props.$overflow || ""};
  left: ${props => props.$left || ""};
  z-index: ${props => props.$zIndex || ""};
  top: ${props => props.$top || ""};
  margin: ${props => props.$margin || ""};
  bottom: ${props => props.$bottom || ""};
  gap: ${props => props.$spacing || "10px"};
  width: ${props => props.$width || "fit-content"};
  height: ${props => props.$height || ""};
  display: flex;
  padding: ${props => props.$padding || ""};
  flex-wrap: ${props => props.$flexWrap || ""};
  border-radius: ${props => props.$radius || ""};
  flex-direction: ${props => (props.$direction === "column" ? "column" : "row")};
  align-items: ${props => (props.$align === "center" ? "center" : "")};
  justify-content: ${props => props.$justify || "start"};
  opacity: ${props => props.$opacity || ""};
  ${props => props.$separator && "border-bottom: 1px solid var(--grey-color);"}
  ${props => props.$separator && `margin-bottom: 10px;`}
  ${props => props.$separator && `padding-bottom: 10px;`}
`;

// Ajout de forwardRef pour accepter une ref externe
const Stack = forwardRef(({
  className, 
  direction, 
  align, 
  opacity, 
  margin, 
  overflow, 
  justify, 
  zIndex, 
  height, 
  children, 
  width, 
  spacing, 
  position, 
  right, 
  left, 
  top, 
  bottom, 
  padding, 
  radius, 
  animate, 
  animationType, 
  separator, 
  flexWrap 
}, ref) => {
  const internalRef = useRef();
  useGsapAnimation();

  useEffect(() => {
    const animate = async () => {
      while (!window.gsapAnimations) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      if (animationType && internalRef.current) {
        const animateFunction = window.gsapAnimations[animationType];
        if (animateFunction) {
          animateFunction(internalRef.current);
        }
      }
    };

    animate();
  }, [animationType]);

  return (
    <StackDiv
      className={className}
      $direction={direction}
      $opacity={opacity}
      $align={align}
      $justify={justify}
      $width={width}
      $spacing={spacing}
      $position={position}
      $right={right}
      $left={left}
      $bottom={bottom}
      $top={top}
      $margin={margin}
      $padding={padding}
      $radius={radius}
      $animate={animate}
      $separator={separator}
      $flexWrap={flexWrap}
      ref={ref || internalRef} // Utilisation de la ref externe si elle est passée, sinon internalRef
      $height={height}
      $zIndex={zIndex}
      $overflow={overflow}
    >
      {children}
    </StackDiv>
  );
});

export default Stack;
