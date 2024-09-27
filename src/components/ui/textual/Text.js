import React from "react";
import styled from "styled-components";

const TextComponent = styled.p`
  font-family: var(--text-font-cashdisplay);
  color: ${(props) =>
    props.$variant === "default"
      ? "var(--paragraph)"
      : props.$variant === "colored"
        ? "var(--main-color)"
        : props.$variant === "contrasted"
        ? "var(--color-title)"
        : props.$variant === "white"
          ? "#fff"
          : "var(--paragraph)"};
  text-align: ${props => (props.$textalign)};
  max-width: ${props => (props.$maxwidth)};
`;

const Text = ({ variant, textalign, className, id, onClick, children, maxwidth, fontfamily, ...restProps }) => {
  return (
    <TextComponent className={className} $textalign={textalign} $variant={variant} $maxwidth={maxwidth} $fontfamily={fontfamily} {...restProps}>
      {children}
    </TextComponent>
  );
};

export default Text;
