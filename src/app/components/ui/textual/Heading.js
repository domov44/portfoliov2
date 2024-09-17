import React from "react";
import styled from "styled-components";

const HeadingComponent = styled.h1`
  margin: 0;
  font-family: ${(props) =>
    props.$fontfamily === "light"
      ? "var(--text-font-light)"
      : props.$fontfamily === "medium"
      ? "var(--text-font)"
      : props.$fontfamily === "semi-bold"
      ? "var(--text-font-bold)"
      : "var(--Heading-font)"};
  text-align: ${(props) => (props.$textalign)};
  line-height: 1;
  color: ${(props) =>
    props.$variant === "default"
      ? "var(--color-Heading)"
      : props.$variant === "colored"
      ? "var(--main-color)"
      : props.$variant === "white"
      ? "#fff"
      : props.$variant === "black"
      ? "#151b49"
      : "var(--color-Heading)"};
  font-size: ${(props) => props.$fontsize || getDefaultFontSize(props.$level)}; /* Utiliser la taille de police personnalisée ou la taille par défaut */
`;

const getDefaultFontSize = (level) => {
  switch (level) {
    case 1:
      return "30px";
    case 2:
      return "25px";
    case 3:
      return "23px";
    case 4:
      return "20px";
    case 5:
      return "19px";
    case 6:
      return "18px";
    default:
      return "16px";
  }
};

const Heading = ({ variant, level, fontSize, className, id, onClick, children, textalign, fontfamily, ...restProps }) => {
  const HeadingTag = `h${level || 1}`;

  return (
    <HeadingComponent as={HeadingTag} $variant={variant} $fontsize={fontSize} $level={level} $textalign={textalign} $fontfamily={fontfamily} {...restProps} className="Heading">
      {children}
    </HeadingComponent>
  );
};

export default Heading;