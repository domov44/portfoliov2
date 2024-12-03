import { generateClient } from 'aws-amplify/api';
import { allProjectsByDate } from "@/graphql/queries";
import fetchS3File from '@/app/utils/fetchS3File';
import ProjectsList from '../ProjectsList';

const client = generateClient();

async function ProjectsListServer() {
    let projects = [];

    try {
        const projectsResult = await client.graphql({
            query: allProjectsByDate,
            authMode: 'identityPool',
            variables: {
                globalPartitionKey: "projects",
                sortDirection: "DESC",
            }
        });

        projects = projectsResult.data?.allProjectsByDate?.items || [];

        projects = await Promise.all(
            projects.map(async (project) => ({
                ...project,
                videoUrl: await fetchS3File(project.video),
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
