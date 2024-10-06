'use client';
import React, { useRef, useState, useCallback } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  width: fit-content;
  overflow: hidden;
  background: none;
  color: var(--color-title);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border: 2px solid var(--main-color);
  padding: 10px 20px;
  z-index: 1;

  span {
    z-index: 1;
    position: relative;
    transition: color 0.3s ease;
  }

  &:hover {
    span {
      color: var(--bg-color);
    }
  }
`;

const Circle = styled.div`
  position: absolute;
  background-color: var(--main-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
  transition: width 0.3s ease, height 0.3s ease;
`;

const Button = ({ children, onClick, className }) => {
  const buttonRef = useRef(null);
  const [circle, setCircle] = useState({ x: 0, y: 0, size: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setCircle({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      size: Math.max(rect.width, rect.height) * 1.5
    });
  }, []);

  const handleMouseEnter = useCallback((e) => {
    handleMouseMove(e);
  }, [handleMouseMove]);

  const handleMouseLeave = useCallback(() => {
    setCircle(prev => ({ ...prev, size: 0 }));
  }, []);

  return (
    <StyledButton
      ref={buttonRef}
      className={className}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Circle 
        style={{
          left: circle.x,
          top: circle.y,
          width: circle.size,
          height: circle.size
        }}
      />
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;