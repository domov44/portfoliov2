import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as Animate from '../../../animations/AnimationGsap';

const StackDiv = styled.div`
  gap: ${props => props.$spacing || "10px"};
  position: ${props => props.$position || "" };
  width: ${props =>
    props.$width === "100%"
      ? "100%"
      : props.$width === "classic"
        ? "auto"
        : "auto"};
  display: flex;
  flex-direction: ${props => (props.$direction === "column" ? "column" : "row")};
  align-items: ${props => (props.$align === "center" ? "center" : "")};
  justify-content: ${props => props.$justify || "start"};
  ${props => props.$separator && "border-bottom: 1px solid var(--grey-color);"}
  ${props => props.$separator && `margin-bottom: 10px;`} 
  ${props => props.$separator && `padding-bottom: 10px;`}
  padding: ${props => props.$padding || "" };
`;

function Stack({ direction, align, justify, children, width, spacing, animate, animationType, separator, position, padding}) {
  const refs = React.useRef();

  useEffect(() => {
    if (animationType) {
      switch (animationType) {
        case "fadeIn":
          Animate.animateFadeIn(refs.current);
          break;
        case "moveFromDown":
          Animate.animateMoveFromDown(refs.current);
          break;
        case "moveFromLeft":
          Animate.animateMoveFromLeft(refs.current);
          break;
        case "moveFromRight":
          Animate.animateMoveFromRight(refs.current);
          break;
        case "scale":
          Animate.animateScale(refs.current);
          break;
        default:
          break;
      }
    }
  }, [animationType]);

  return (
    <StackDiv
      $direction={direction}
      $position={position} 
      $align={align}
      $justify={justify}
      $width={width}
      $spacing={spacing}
      $animate={animate}
      $separator={separator}
      $padding={padding}
      ref={refs}
    >
      {children}
    </StackDiv>
  );
}

export default Stack;