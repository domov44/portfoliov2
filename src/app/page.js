'use client';

import Title from './components/ui/textual/Title';
import Button from './components/ui/button/Button';
import Stack from './components/ui/wrapper/Stack';
import Text from './components/ui/textual/Text';
import Section from './components/ui/wrapper/Section';
import Container from './components/ui/wrapper/Container';
import Bento from './components/ui/wrapper/Bento';
import DefaultLayout from './layouts/DefaultLayout';
import HomeHero from './components/pageElements/home/HomeHero';
import HomeGrid from './components/pageElements/home/HomeGrid';
import HomeTravel from './components/pageElements/home/HomeTravel';


const Page = () => {

    return (
        <DefaultLayout>
            <HomeHero />
            <Section highlight={true}>
                <Container direction={"row"} width={"100%"} maxwidth={"1200px"}>
                    <Stack width={"70%"} justify={"center"}>
                        <Bento highlight={"highlight"}>
                            block 1
                        </Bento>
                    </Stack>
                    <Stack direction={"column"} width={"30%"} spacing={"20px"}>
                        <Title level={2} className={"step-1"}>
                            What do I do as a devops developer & as a lead developer?
                        </Title>
                        <Stack direction={"column"}>
                            <Text>
                                I manage web applications from A to Z, throughout the devops cycle.
                            </Text>
                            <Text>
                                I automate and secure your project.
                            </Text>
                        </Stack>
                        <Button className={"step-1"} variant={"primary"} href="/about-me" transition>about me</Button>
                    </Stack>
                </Container>
            </Section>
            <HomeGrid />
            <HomeTravel/>
        </DefaultLayout>
    );
}

export default Page;