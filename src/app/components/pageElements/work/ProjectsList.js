import { generateClient } from 'aws-amplify/api';
import { listProjects } from "@/graphql/queries";
import Section from '../../ui/wrapper/Section';
import Button from '../../ui/button/Button';

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
        <Section>
            <h1>All Projects</h1>
            {projects.length > 0 ? (
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}><Button transition href={`/work/${project.slug}`}>{project.name}</Button></li>
                    ))}
                </ul>
            ) : (
                <p>No projects found</p>
            )}
        </Section>
    );
}

export default ProjectsList;
