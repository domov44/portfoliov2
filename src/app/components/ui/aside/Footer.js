import styles from './Footer.module.css';
import Container from '../wrapper/Container';
import Section from '../wrapper/Section';
import Stack from '../wrapper/Stack';
import Logo from '../Logo';


function Footer() {

    return (
        <footer className={styles.footer}>
            <Section>
                <Container>
                    <Stack overflow={"hidden"} justify={"end"} width={"100%"}>
                        <Logo />
                    </Stack>
                </Container>
            </Section>
        </footer>
    );
}

export default Footer;
