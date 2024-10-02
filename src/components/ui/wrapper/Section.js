import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
padding: 100px 0px;
border-radius: 10px;
max-width: 1800px;
background: var(--secondary-bg-color);
align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

function Section({ children }) {
    return (
        <SectionContainer>
            {children}
        </SectionContainer>
    );
}

export default Section;