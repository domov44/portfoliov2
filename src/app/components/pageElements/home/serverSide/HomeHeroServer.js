import { generateClient } from 'aws-amplify/api';
import fetchS3File from '@/app/utils/fetchS3File';
import HomeHero from '../HomeHero';
import { listProjects } from '@/graphql/queries';

const client = generateClient();

export default async function HomeHeroServer() {
    let projectsThumbnails = [];

    try {
        const projectsResult = await client.graphql({
            query: listProjects,
            authMode: 'identityPool',
        });

        projectsThumbnails = projectsResult.data?.listProjects?.items || [];

        projectsThumbnails = await Promise.all(
            projectsThumbnails.map(async (project) => ({
                name: project.name,
                thumbnail: project.thumbnail ? await fetchS3File(project.thumbnail) : undefined,
            }))
        );

        projectsThumbnails = projectsThumbnails.filter(item => item.thumbnail);

        console.log(projectsThumbnails);

    } catch (error) {
        console.error('Erreur lors de la récupération des galeries:', error);
    }

    return <HomeHero images={projectsThumbnails} />;
}
