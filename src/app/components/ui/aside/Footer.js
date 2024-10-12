'use-client'
import styled from 'styled-components';
import Container from '../wrapper/Container';
import Section from '../wrapper/Section';
import Text from '../textual/Text';
import Stack from '../wrapper/Stack';
import Logo from '../Logo';

const StyledFooter = styled.footer`
padding: 100px 30px;
max-width: calc((100% - 30px));
border-radius: 10px;
margin: 0 auto;
background: var(--secondary-bg-color);
align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;


function Footer() {

    return (
        <StyledFooter>
            <Container>
                <Stack overflow={"hidden"} justify={"end"} width={"100%"}>
                    <Logo/>
                </Stack>
            </Container>
        </StyledFooter>
    );
}

export default Footer;
