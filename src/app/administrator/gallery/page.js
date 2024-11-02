'use client';
import { useEffect, useState } from 'react';
import Hero from '@/app/components/ui/wrapper/Hero';
import { generateClient } from 'aws-amplify/api';
import { listGalleries } from '@/graphql/queries'; // Assurez-vous que la requête existe et retourne la liste des projets

const client = generateClient();

function Page() {
    const [gallerys, setGalleries] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGalleries = async () => {
            try {
                const gallerysResult = await client.graphql({
                    query: listGalleries,
                    authMode: 'userPool'
                });
                const galleryItems = gallerysResult.data?.listGalleries?.items || [];
                setGalleries(galleryItems);
            } catch (error) {
                console.error('Erreur lors de la récupération des projets:', error);
                setError('Impossible de récupérer les projets.');
            }
        };

        fetchGalleries();
    }, []);

    return (
        <Hero>
            <h1>All Galleries</h1>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {gallerys.length > 0 ? (
                        gallerys.map((gallery) => (
                            <li key={gallery.id}>{gallery.place}</li>
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
