import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
padding: ${props => props.$fullWidth ? (props.$padding || "100px 0") : (props.$padding || "100px 30px")};
    max-width: ${props => props.$fullWidth ? "100%" : "calc((100% - 30px))"};
    gap: ${props => props.$spacing || "10px"};
    overflow: ${props => props.$overflow ? "visible" : "hidden"};
    border-radius: 10px;
    margin: ${props => props.$margin || "0 auto"};
    height: ${props => props.$height || ""};
    background: ${props => props.$highlight ? "var(--secondary-bg-color)" : ""};
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.$justify || "center"};
    width: 100%;
`;

const Section = React.forwardRef(({ children, highlight, overflow, height, justify, margin, spacing, padding, fullWidth, className }, ref) => {
    return (
        <SectionContainer 
            ref={ref}
            className={className} 
            $highlight={highlight} 
            $overflow={overflow} 
            $height={height} 
            $justify={justify} 
            $margin={margin} 
            $spacing={spacing} 
            $padding={padding}
            $fullWidth={fullWidth}
        >
            {children}
        </SectionContainer>
    );
});

export default Section;
