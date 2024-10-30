import { generateClient } from 'aws-amplify/api';
import { listProjects } from "@/graphql/queries";

const client = generateClient();

async function ProjectsList() {
    let projects = [];

    try {
        const projectsResult = await client.graphql({
            query: listProjects,
            authMode: 'identityPool'
        });

        projects = projectsResult.data?.listProjects?.items || [];
    } catch (error) {
        console.error('Erreur lors de la récupération des projets:', error);
    }

    return (
        <>
            <h1>All Projects</h1>
            {projects.length > 0 ? (
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>{project.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No projects found</p>
            )}
        </>
    );
}

export default ProjectsList;
