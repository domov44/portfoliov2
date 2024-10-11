import React, { forwardRef } from "react";
import styled from "styled-components";

const TitleComponent = styled.h1.withConfig({
  shouldForwardProp: (prop) =>
    !['$variant', '$fontSize', '$zIndex', '$textalign', '$fontfamily'].includes(prop),
})`
  margin: 0;
  overflow: hidden;
  font-size: ${(props) => props.$fontSize || ''};
  position: relative;
  font-family: ${(props) => props.$fontfamily || 'var(--text-font-cashdisplay)'};
  text-align: ${(props) => props.$textalign || 'left'};
  line-height: 1;
  z-index: ${(props) => props.$zIndex || '1'};
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

const Title = forwardRef(({ data_cy, variant, level, className, fontSize, id, onClick, children, zIndex, textalign, fontfamily, ...restProps }, ref) => {
  const HeadingTag = `h${level || 1}`;

  return (
    <TitleComponent
      as={HeadingTag}
      className={className}
      $variant={variant}
      $level={level}
      $textalign={textalign}
      $fontfamily={fontfamily}
      ref={ref}
      $zIndex={zIndex}
      $fontSize={fontSize}
      data-cy={data_cy}
      {...restProps}
    >
      {children}
    </TitleComponent>
  );
});

export default Title;
