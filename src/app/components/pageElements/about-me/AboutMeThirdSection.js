"use client"
import React from 'react';
import Title from '../../ui/textual/Title';
import Stack from '../../ui/wrapper/Stack';
import Section from '../../ui/wrapper/Section';
import Container from '../../ui/wrapper/Container';
import Button from '../../ui/button/Button';
import Text from '../../ui/textual/Text';


const AboutMeThirdSection = () => {


    return (
        <Section >
            <Container direction={"row"} width={"full"} maxwidth={"xl"} align={"center"}>
                <Stack width={"40%"} justify={"center"}>
                    <Text>
                        I help you put every solid bricks of your project, and turn it into a web experience.
                    </Text>
                </Stack>
                <Stack direction={"column"} width={"60%"} spacing={"20px"} align="center">
                    <Title level={4} className={"default step-1 text_align_center w20vw"}>
                        Get in touch with me and let's talk about your project.
                    </Title>
                    <Button className={"step-1"} variant={"primary"} href="https://www.linkedin.com/in/ronan-scotet-concepteur-web/" target={"_blank"}>
                        contact
                    </Button>
                </Stack>
            </Container>
        </Section>
    );
};

export default AboutMeThirdSection;
