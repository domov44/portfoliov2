'use client';

import Title from '../components/ui/textual/Title';
import Text from '../components/ui/textual/Text';
import Hero from '../components/ui/wrapper/Hero';
import Section from '../components/ui/wrapper/Section';
import Stack from '../components/ui/wrapper/Stack';
import Button from '../components/ui/button/Button';
import IconButton from '../components/ui/button/IconButton';
import { IoMdAdd } from "react-icons/io";

const Kit = () => {

    return (
        <>
            <Hero>
                <Title level={1} className={"step-7"}>H1 with classname</Title>
                <Title level={2} className={"step-6"}>H2 with classname</Title>
                <Title level={3} className={"step-5"}>H3 with classname</Title>
                <Title level={4} className={"step-4"}>H4 with classname</Title>
                <Title level={5} className={"step-3"}>H5 with classname</Title>
                <Title level={6} className={"step-2"}>H6 with classname</Title>
            </Hero>
            <Section>
                <Title level={1}>H1 without classname</Title>
                <Title level={2}>H2 without classname</Title>
                <Title level={3}>H3 without classname</Title>
                <Title level={4}>H4 without classname</Title>
                <Title level={5}>H5 without classname</Title>
                <Title level={6}>H6 without classname</Title>
            </Section>
            <Section>
                <Stack direction="column">
                    <Title level={2} className={"step-2"}>Paragraph by default</Title>
                    <Text>Logoden biniou degemer mat, an. Mederieg kenwerzh degemer romant, gwellañ. Dit deskiñ etrezek votez, paner. Ger Pornizhan stourm boued, hag. Speredekañ warc’hoazh kas nor, ar. Envel c’helien bennak kezeg, lezirek. Roud ostaleri kuzhat vihan, muzul. Enez digant c’hof all, ugnet. Ac’hanout kaier elgez amzer, hervez . Gwir Europa e dit, eme.</Text>
                </Stack>
            </Section>
            <Section>
                <Stack direction="column">
                    <Title level={2} className={"step-2"}>Paragraph custom size</Title>
                    <Text className={"step--3"}>Logoden biniou degemer mat, an. Mederieg kenwerzh degemer romant, gwellañ. Dit deskiñ etrezek votez, paner. Ger Pornizhan stourm boued, hag. Speredekañ warc’hoazh kas nor, ar. Envel c’helien bennak kezeg, lezirek. Roud ostaleri kuzhat vihan, muzul. Enez digant c’hof all, ugnet. Ac’hanout kaier elgez amzer, hervez . Gwir Europa e dit, eme.</Text>
                </Stack>
            </Section>
            <Section>
                <Stack direction="column">
                    <Title level={2} className={"step-2"}>Buttons variant</Title>
                    <Stack flexWrap={"wrap"}>
                        <Button className={"step-2"} variant={"primary"}>Hover me</Button>
                        <Button className={"step-1"} variant={"secondary"}>Hover me</Button>
                        <Button className={"step-1"} variant={"secondary"}>Hover me</Button>
                        <IconButton className={"step-3"} variant={"action"}>Hover me</IconButton>
                        <IconButton variant={"action"}><IoMdAdd/> Hover me</IconButton>
                        <IconButton variant={"secondary-action"}>Hover me</IconButton>
                        <IconButton variant={"basique"}>Hover me</IconButton>
                        <IconButton variant={"danger"}>Hover me</IconButton>
                    </Stack>
                </Stack>
            </Section>
        </>
    )
}

export default Kit;
