import { generateClient } from 'aws-amplify/api';
import fetchS3File from '@/app/utils/fetchS3File';
import { listProjects } from '@/graphql/queries';
import HomeGrid from '../HomeGrid';

const client = generateClient();

export default async function HomeGridServer() {
    let projectsVideos = [];

    try {
        const projectsResult = await client.graphql({
            query: listProjects,
            authMode: 'identityPool',
            variables: {
                filter: {
                    top4: {
                        eq: true,
                    },
                },
            },
        });

        projectsVideos = projectsResult.data?.listProjects?.items || [];

        projectsVideos = await Promise.all(
            projectsVideos.map(async (project) => ({
                name: project.name,
                video: project.video ? await fetchS3File(project.video) : undefined,
            }))
        );

        projectsVideos = projectsVideos.filter(item => item.video);

    } catch (error) {
        console.error('Erreur lors de la récupération des galeries:', error);
    }

    return <HomeGrid videos={projectsVideos} />;
}
