import { generateClient } from 'aws-amplify/api';
import { ProjectBySlug } from '@/graphqlCustom/queries';
import { notFound } from 'next/navigation';
import MainContent from '@/app/layouts/MainContent';
import SingleHero from '@/app/components/pageElements/work/single/SingleHero';
import SingleMainSection from '@/app/components/pageElements/work/single/SingleMainSection';
import SingleDoubleSection from '@/app/components/pageElements/work/single/SingleDoubleSection';
import fetchS3File from '@/app/utils/fetchS3File';
import SingleVideoSection from '@/app/components/pageElements/work/single/SingleVideoSection';
import Section from '@/app/components/ui/wrapper/Section';
import Stack from '@/app/components/ui/wrapper/Stack';
import Text from '@/app/components/ui/textual/Text';
import Title from '@/app/components/ui/textual/Title';
import SingleSkills from '@/app/components/pageElements/work/single/SingleSkills';

const client = generateClient();

async function Page({ params }) {
    const { slug } = params;
    let project = null;

    try {
        const projectResult = await client.graphql({
            query: ProjectBySlug,
            variables: { slug },
            authMode: 'identityPool',
        });

        const projectData = projectResult.data?.ProjectBySlug;

        project = (projectData && projectData.items && projectData.items.length > 0)
            ? projectData.items[0]
            : null;
    } catch (error) {
        console.error('Erreur lors de la récupération du projet:', error);
    }

    if (!project) {
        notFound();
    }

    let enrichedRows = [];
    try {
        const parsedLines = project.images ? JSON.parse(project.images) : [];
        if (Array.isArray(parsedLines) && parsedLines.length > 0) {
            enrichedRows = await Promise.all(
                parsedLines.map(async (row) => {
                    const enrichedPictures = row.pictures
                        ? await Promise.all(row.pictures.map((path) => fetchS3File(path)))
                        : [];
                    return { ...row, pictures: enrichedPictures };
                })
            );
        }
    } catch (error) {
        console.error('Erreur lors du traitement des images:', error);
    }

    let videoFile = null;
    if (project.video) {
        try {
            videoFile = await fetchS3File(project.video);
        } catch (error) {
            console.error('Erreur lors de la récupération du fichier vidéo:', error);
        }
    }

    let colisionLogos = [];
    if (project.skills && Array.isArray(project.skills.items)) {
        try {
            colisionLogos = await Promise.all(
                project.skills.items.map(async (skill) => {
                    if (skill.skill && skill.skill.colisionLogo) {
                        return await fetchS3File(skill.skill.colisionLogo);
                    }
                    return null;
                })
            );
        } catch (error) {
            console.error('Erreur lors de la récupération des colisionLogos:', error);
        }
    }

    const validColisionLogos = colisionLogos.filter((url) => url !== null);

    return (
        <MainContent>
            <SingleHero project={project} />
            {videoFile && <SingleVideoSection video={videoFile} />}
            <Section>
                <Stack direction="column" width="100%" className="align_center">
                    <Title level={3} className="step-3 text_align_center default">Description of the project</Title>
                    <Text textalign="center" maxwidth={"40vw"}>{project.description}</Text>
                </Stack>
            </Section>
            <SingleSkills images={validColisionLogos} />
            {enrichedRows.map((row, index) => {
                if (row.pictures.length === 1) {
                    return <SingleMainSection key={index} image={row.pictures[0]} />;
                } else if (row.pictures.length === 2) {
                    return <SingleDoubleSection key={index} images={row.pictures} />;
                }
                return null;
            })}
        </MainContent>
    );
}

export const dynamic = 'force-dynamic';

export default Page;
