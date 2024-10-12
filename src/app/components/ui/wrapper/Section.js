import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
padding: 100px 30px;
max-width: calc((100% - 30px));
border-radius: 10px;
margin: 0 auto;
background: ${props => props.$highlight ? "var(--secondary-bg-color)" : ""};
align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

function Section({ children, highlight }) {
    return (
        <SectionContainer $highlight={highlight}>
            {children}
        </SectionContainer>
    );
}

export default Section;