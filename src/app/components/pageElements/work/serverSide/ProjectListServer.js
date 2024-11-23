import { generateClient } from 'aws-amplify/api';
import { listProjects } from "@/graphql/queries";
import fetchS3File from '@/app/utils/fetchS3File';
import ProjectsList from '../ProjectsList';

const client = generateClient();

async function ProjectsListServer() {
    let projects = [];

    try {
        const projectsResult = await client.graphql({
            query: listProjects,
            authMode: 'identityPool',
        });

        projects = projectsResult.data?.listProjects?.items || [];

        projects = await Promise.all(
            projects.map(async (project) => ({
                ...project,
                thumbnailUrl: await fetchS3File(project.thumbnail),
            }))
        );
    } catch (error) {
        console.error('Erreur lors de la récupération des projets:', error);
    }

    return (
        <ProjectsList projects={projects} />
    );
}

export default ProjectsListServer;
