import { generateClient } from 'aws-amplify/api';
import { ProjectBySlug } from '@/graphql/queries';
import Section from '@/app/components/ui/wrapper/Section';
import Button from '@/app/components/ui/button/Button';
import { notFound } from 'next/navigation';
import MainContent from '@/app/layouts/MainContent';

const client = generateClient();

async function Page({ params }) {
    const { slug } = params;
    let project = null;

    try {
        const projectResult = await client.graphql({
            query: ProjectBySlug,
            variables: { slug },
            authMode: 'identityPool'
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
        return null;
    }

    return (
        <MainContent>
            <Section>
                <h1>{project.name}</h1>
                {project.role && <p>Role: {project.role}</p>}
                {project.context && <p>Context: {project.context}</p>}
                {project.years && <p>Years: {project.years}</p>}
                {project.description && <p>Description: {project.description}</p>}
                {project.href && <Button href={project.href}>Voir le projet</Button>}
                {project.github && <Button href={project.github}>Voir le github</Button>}
            </Section>
        </MainContent>
    );
}

export const dynamic = 'force-dynamic';

export default Page;
