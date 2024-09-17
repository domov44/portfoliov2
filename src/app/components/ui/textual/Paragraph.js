import React from "react";
import styled from "styled-components";

const ParagraphComponent = styled.p`
  font-family: ${(props) =>
    props.$fontfamily === "light"
      ? "var(--Paragraph-font-light)"
      : props.$fontfamily === "medium"
      ? "var(--Paragraph-font)"
      : props.$fontfamily === "semi-bold"
      ? "var(--Paragraph-font-bold)"
      : "var(--Paragraph-font-light)"};
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
  font-size: ${(props) => {
    switch (props.$size) {
      case "sm":
        return "16px";
      case "md":
        return "18px";
      case "lg":
        return "20px";
      default:
        return "18px";
    }
  }};
`;

const Paragraph = ({ variant, Paragraphalign, size, className, id, onClick, children, maxwidth, fontfamily, ...restProps }) => {
  return (
    <ParagraphComponent $Paragraphalign={Paragraphalign} $variant={variant} $size={size} $maxwidth={maxwidth} $fontfamily={fontfamily} {...restProps}>
      {children}
    </ParagraphComponent>
  );
};

export default Paragraph;