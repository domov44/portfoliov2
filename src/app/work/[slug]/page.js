import { generateClient } from 'aws-amplify/api';
import { ProjectBySlug } from '@/graphql/queries';
import { notFound } from 'next/navigation';
import MainContent from '@/app/layouts/MainContent';
import SingleHero from '@/app/components/pageElements/work/single/SingleHero';
import SingleMainSection from '@/app/components/pageElements/work/single/SingleMainSection';
import SingleDoubleSection from '@/app/components/pageElements/work/single/SingleDoubleSection';
import fetchS3File from '@/app/utils/fetchS3File';

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

    return (
        <MainContent>
            <SingleHero project={project} />
            {enrichedRows.map((row, index) => (
                row.pictures.length === 1 ? (
                    <SingleMainSection key={index} image={row.pictures[0]} />
                ) : (
                    <SingleDoubleSection key={index} images={row.pictures} />
                )
            ))}
        </MainContent>
    );
}

export const dynamic = 'force-dynamic';

export default Page;
