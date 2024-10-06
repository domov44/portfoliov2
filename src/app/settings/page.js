'use client';

import Hero from '../components/ui/wrapper/Hero';
import Container from '../components/ui/wrapper/Container';
import ThemeSwitch from '../utils/theme/ThemeSwitch';
import Title from '../components/ui/textual/Title';
import Bento from '../components/ui/wrapper/Bento';
import Column from '../components/ui/wrapper/Column';
import Stack from '../components/ui/wrapper/Stack';
import Head from 'next/head';

export default function Appearance() {
    return (
        <Hero>
            <Head>
                <title>Modifiez l&apos;apparence de Miamze</title>
                <meta name="description" content="Description de la page" />
                <meta property="og:image" content="URL_de_votre_image" />
            </Head>
            <Title level={1}>
                Paramètres
            </Title>
            <Container direction="row" align="start" width="100%">
                <Column width="25%" gap="20px">
                </Column>
                <Column width="75%">
                    <Bento>
                        <Stack separator>
                            <Title level={3}>
                                Préférence de thème
                            </Title>
                        </Stack>
                        <Stack spacing="20px">
                            <ThemeSwitch />
                        </Stack>
                    </Bento>
                </Column>
            </Container>
        </Hero>
    );
}