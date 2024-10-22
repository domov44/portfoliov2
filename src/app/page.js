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
import MainContent from './layouts/MainContent';
import HomeSecondSection from './components/pageElements/home/HomeSecondSection';


const Page = () => {

    return (
        <MainContent>
            <HomeHero />
            <HomeSecondSection />
            <HomeGrid />
            <HomeTravel />
            <Section>
                <Container direction={"row"} width={"100%"} maxwidth={"1200px"}>
                    <Stack width={"70%"} justify={"center"}>
                        <Bento highlight={"highlight"}>
                            block 1
                        </Bento>
                    </Stack>
                    <Stack direction={"column"} width={"30%"} spacing={"20px"}>
                        <Title level={3} className={"step-1"}>
                            Inspired by the best, I go further than just making code, pushing every project to the limit.
                        </Title>
                        <Stack direction={"column"}>
                            <Text>
                                This portfolio is the proof, including dynamic animations and vibrant effects, but also my travel stories.
                            </Text>
                        </Stack>
                        <Button className={"step-1"} variant={"primary"} href="/about-me" transition>gallery</Button>
                    </Stack>
                </Container>
            </Section>
            <Section>
                <Title level={2} fontSize="8vw" variant="colored" textalign="center">
                    LET'S DO SOMETHING AWESOME TOGETHER
                </Title>
                <Container direction={"row"} width={"100%"} maxwidth={"1200px"}>
                    <Stack width={"70%"} justify={"center"}>
                        <Bento highlight={"highlight"}>
                            block 1
                        </Bento>
                    </Stack>
                    <Stack direction={"column"} width={"30%"} spacing={"20px"}>
                        <Title level={3} className={"step-1"}>
                            I'm excited just to imagine our future collaboration.
                        </Title>
                        <Stack direction={"column"}>
                            <Text>
                                Make room for your vision and stand out from the crowd.
                            </Text>
                            <Title level={4} className={"step-0"}>
                                Hit me up and let's schedule a call.
                            </Title>
                        </Stack>
                        <Button className={"step-1"} variant={"primary"} href="/about-me" transition>contact</Button>
                    </Stack>
                </Container>
            </Section>
        </MainContent>
    );
}

export default Page;