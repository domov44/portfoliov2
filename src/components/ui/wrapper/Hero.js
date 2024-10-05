import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
    max-width:  ${props => props.$maxWidth || ""};
    display: flex;
    overflow: hidden;
    position: relative;
    flex-direction: column;
    justify-content: flex-end;
    min-height: calc(100vh - 80px);
    width: 100%;
    margin-top: 80px;
    gap: ${props => props.$spacing || "30px"};
    padding:  ${props => props.$padding || ""};
`;

const Hero = React.forwardRef(({ children, padding, spacing, maxWidth }, ref) => {
    return (
        <HeroContainer $padding={padding} $spacing={spacing} ref={ref} $maxWidth={maxWidth}>
            {children}
        </HeroContainer>
    );
});

export default Hero;
