import React from "react";
import styled from "styled-components";

const TitleComponent = styled.h1`
  margin: 0;
  font-family: var(--text-font-cashdisplay);
  text-align: ${(props) => (props.$textalign)};
  line-height: 1;
  z-index: 1;
  color: ${(props) =>
    props.$variant === "default"
      ? "var(--color-title)"
      : props.$variant === "colored"
      ? "var(--main-color)"
      : props.$variant === "white"
      ? "#fff"
      : props.$variant === "black"
      ? "#151b49"
      : "var(--color-title)"};
`;



const Title = ({ variant, level, className, id, onClick, children, textalign, fontfamily, ...restProps }) => {
  const HeadingTag = `h${level || 1}`;

  return (
    <TitleComponent as={HeadingTag} className={className} $variant={variant} $level={level} $textalign={textalign} $fontfamily={fontfamily} {...restProps}>
      {children}
    </TitleComponent>
  );
};

export default Title;
