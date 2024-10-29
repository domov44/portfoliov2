'use client';
import { useEffect, useState } from 'react';
import Hero from '@/app/components/ui/wrapper/Hero';
import { generateClient } from 'aws-amplify/api';
import { listProjects } from '@/graphql/queries'; // Assurez-vous que la requête existe et retourne la liste des projets

const client = generateClient();

function Page() {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectsResult = await client.graphql({
                    query: listProjects,
                    authMode: 'userPool'
                });
                const projectItems = projectsResult.data?.listProjects?.items || [];
                setProjects(projectItems);
            } catch (error) {
                console.error('Erreur lors de la récupération des projets:', error);
                setError('Impossible de récupérer les projets.');
            }
        };

        fetchProjects();
    }, []);

    return (
        <Hero>
            <h1>All Projects</h1>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <li key={project.id}>{project.name}</li>
                        ))
                    ) : (
                        <p>Aucun projet trouvé</p>
                    )}
                </ul>
            )}
        </Hero>
    );
}

export default Page;
