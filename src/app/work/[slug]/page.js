import { generateClient } from 'aws-amplify/api';
import { ProjectBySlug } from '@/graphql/queries';
import { notFound } from 'next/navigation';
import MainContent from '@/app/layouts/MainContent';
import SingleHero from '@/app/components/pageElements/work/single/SingleHero';
import Button from '@/app/components/ui/button/Button';
import SingleMainSection from '@/app/components/pageElements/work/single/SingleMainSection';
import SingleDoubleSection from '@/app/components/pageElements/work/single/SingleDoubleSection';

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
            <SingleHero project={project} />
            {/* {project.description && <p>Description: {project.description}</p>}
            {project.href && <Button href={project.href}>Voir le projet</Button>}
            {project.github && <Button href={project.github}>Voir le github</Button>} */}
            <SingleMainSection  project={project}/>
            <SingleDoubleSection project={project}/> 
        </MainContent>
    );
}

export const dynamic = 'force-dynamic';

export default Page;
