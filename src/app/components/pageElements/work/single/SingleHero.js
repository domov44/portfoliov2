"use client"
import Button from '@/app/components/ui/button/Button';
import Text from '@/app/components/ui/textual/Text';
import Title from '@/app/components/ui/textual/Title';
import Hero from '@/app/components/ui/wrapper/Hero';
import Section from '@/app/components/ui/wrapper/Section';
import Stack from '@/app/components/ui/wrapper/Stack';

async function SingleHero({ project }) {

    return (
        <Section className="justify_end h100vh">
            <Stack direction="column" height="60%" width="100%" justify="space-between">
                <Title level={1} fontSize={"10vw"} variant="colored" textalign="center">
                    {project.name}
                </Title>
                <Stack width="100%" justify="space-between">
                    {project.role &&
                        <Stack width="33%" direction="column" spacing='0' align="center" className="uppercase">
                            <Title level={3} className={"step--2"}>Role:</Title><Text className={"step--1"}>{project.role}</Text>
                        </Stack>}
                    {project.context &&
                        <Stack width="33%" direction="column" spacing='0' align="center" className="uppercase">
                            <Title level={3} className={"step--2"}>Context:</Title><Text className={"step--1"}>{project.context}</Text>
                        </Stack>}
                    {project.years &&
                        <Stack width="33%" direction="column" spacing='0' align="center" className="uppercase">
                            <Title level={3} className={"step--2"}>Years:</Title><Text className={"step--1"}>{project.years}</Text>
                        </Stack>}
                </Stack>
            </Stack>
        </Section>
    );
}

export const dynamic = 'force-dynamic';

export default SingleHero;
