import { generateClient } from 'aws-amplify/api';
import { ProjectBySlug } from '@/graphql/queries';

const client = generateClient();

async function Page({ params }) {
    const { slug } = params;
    let projectName = '';

    try {
        const projectResult = await client.graphql({
            query: ProjectBySlug,
            variables: { slug },
            authMode: 'identityPool'
        });

        const projectData = projectResult.data?.ProjectBySlug;

        projectName = (projectData && projectData.items && projectData.items.length > 0)
            ? projectData.items[0].name
            : 'No project';
        
        console.log(projectName);
    } catch (error) {
        console.error('Erreur lors de la récupération du projet:', error);
        projectName = 'Erreur lors de la récupération du projet';
    }

    return (
        <h1>{projectName}</h1>
    );
}

export const dynamic = 'force-dynamic';

export default Page;
