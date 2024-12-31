import { generateClient } from 'aws-amplify/api';
import fetchS3File from '@/app/utils/fetchS3File';
import { ProjectsByFeaturedOrder } from '@/graphql/queries';
import HomeGrid from '../HomeGrid';

const client = generateClient();

export default async function HomeGridServer() {
    let projectsVideos = [];

    try {
        const orders = [2, 1, 3, 4];
        const projectsResults = await Promise.all(
            orders.map(async (order) => {
                const result = await client.graphql({
                    query: ProjectsByFeaturedOrder,
                    authMode: 'identityPool',
                    variables: {
                        featuredOrder: order,
                    },
                });

                const project = result.data?.ProjectsByFeaturedOrder?.items[0];
                return project ? {
                    name: project.name,
                    slug: project.slug,
                    video: project.video ? await fetchS3File(project.video) : undefined,
                } : null;
            })
        );

        projectsVideos = projectsResults.filter(item => item && item.video);

    } catch (error) {
        console.error('Erreur lors de la récupération des featured projects:', error);
    }

    return <HomeGrid videos={projectsVideos} />;
}
