import React, { forwardRef } from "react";
import styles from "./Title.module.css";

const Title = forwardRef(({
  data_cy,
  variant = "default",
  lineHeight,
  level = 1,
  width,
  className = "",
  fontSize,
  id,
  onClick,
  children,
  zIndex,
  textalign = "left",
  fontfamily,
  ...restProps
}, ref) => {
  const HeadingTag = `h${level}`;

  const dynamicClasses = [
    styles.title,
    styles[variant],
    styles[`align-${textalign}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inlineStyles = {
    lineHeight: lineHeight || undefined,
    width: width || undefined,
    fontSize: fontSize || undefined,
    zIndex: zIndex || undefined,
    fontFamily: fontfamily || undefined,
  };

  return (
    <HeadingTag
      className={dynamicClasses}
      style={inlineStyles}
      data-cy={data_cy}
      ref={ref}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </HeadingTag>
  );
});

export default Title;
