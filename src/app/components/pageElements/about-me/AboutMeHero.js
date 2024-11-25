"use client"
import Button from '../../ui/button/Button';
import TextLink from '../../ui/textual/TextLink';
import Title from '../../ui/textual/Title';
import Hero from '../../ui/wrapper/Hero';
import Section from '../../ui/wrapper/Section';
import Stack from '../../ui/wrapper/Stack';

const AboutMeHero = () => {


    return (
        <Section >
            <Stack direction={"column"} width={"100%"} height={"calc(50vh - 80px)"} justify={"flex-end"}>
                <Stack justify={"space-between"} width={"100%"} zIndex={2} animationType={"animateFadeIn"} opacity={"0"}>
                    <Stack width={"33.3%"}>
                        <TextLink href={"https://github.com/domov44"}>@domov44</TextLink>
                    </Stack>
                    <Stack width={"33.3%"} justify={"center"}>
                        <Title level={6}>Let's work together</Title>
                    </Stack>
                    <Stack width={"33.3%"} justify={"end"}>
                        <TextLink href={"https://www.linkedin.com/in/ronan-scotet-concepteur-web/"}>@ronanscotet</TextLink>
                    </Stack>
                </Stack>
            </Stack>
        </Section>
    );
}

export default AboutMeHero;