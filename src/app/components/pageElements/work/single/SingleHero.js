"use client"
import Button from '@/app/components/ui/button/Button';
import Chip from '@/app/components/ui/textual/Chip';
import Text from '@/app/components/ui/textual/Text';
import Title from '@/app/components/ui/textual/Title';
import Section from '@/app/components/ui/wrapper/Section';
import Stack from '@/app/components/ui/wrapper/Stack';
import { PiGithubLogoFill } from 'react-icons/pi';

async function SingleHero({ project }) {

    return (
        <Section className="justify_end h95vh">
            <Stack direction="column" height="60%" width="100%" justify="space-between">
                <Stack direction="column" align="center" width="100%">
                    <Stack direction="column" width="100%" className="align_center" spacing="0px">
                        <Chip variant={"danger"}>{project.category.name}</Chip>
                        <Title level={1} className="colored font10vw text_align_center">
                            {project.name}
                        </Title>
                    </Stack>
                    {(project.href && project.href !== '' || project.github && project.github !== '') && (
                        <Stack>
                            {(project.href && project.href !== '') && (
                                <Button variant="primary" href={project.href} target="_blank">
                                    view the project
                                </Button>
                            )}
                            {(project.github && project.github !== '') && (
                                <Button variant="secondary" href={project.github} target="_blank">
                                    <PiGithubLogoFill /> look at the github
                                </Button>
                            )}
                        </Stack>
                    )}
                </Stack>
                <Stack width="100%" justify="space-between">
                    {project.role &&
                        <Stack width="33%" direction="column" spacing='0' align="center" className="uppercase">
                            <Title level={3} className={"default step--2"}>Role:</Title><Text className={"step--1"}>{project.role}</Text>
                        </Stack>}
                    {project.context &&
                        <Stack width="33%" direction="column" spacing='0' align="center" className="uppercase">
                            <Title level={3} className={"default step--2"}>Context:</Title><Text className={"step--1"}>{project.context}</Text>
                        </Stack>}
                    {project.date &&
                        <Stack width="33%" direction="column" spacing='0' align="center" className="uppercase">
                            <Title level={3} className={"default step--2"}>Date:</Title><Text className={"step--1"}>{project.date}</Text>
                        </Stack>}
                </Stack>
            </Stack>
        </Section>
    );
}

export default SingleHero;
