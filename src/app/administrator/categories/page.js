'use client';
import { useEffect, useState } from 'react';
import Hero from '@/app/components/ui/wrapper/Hero';
import { generateClient } from 'aws-amplify/api';
import { listCategories } from '@/graphql/queries';

const client = generateClient();

function Page() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGalleries = async () => {
            try {
                const categoriesResult = await client.graphql({
                    query: listCategories,
                    authMode: 'userPool'
                });
                const categoryItems = categoriesResult.data?.listCategories?.items || [];
                setCategories(categoryItems);
            } catch (error) {
                console.error('Erreur lors de la récupération des catégories:', error);
                setError('Impossible de récupérer les catégories.');
            }
        };

        fetchGalleries();
    }, []);

    return (
        <Hero>
            <h1>All categories</h1>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <li key={category.id}>{category.name}</li>
                        ))
                    ) : (
                        <p>Aucune catégorie trouvée</p>
                    )}
                </ul>
            )}
        </Hero>
    );
}

export default Page;
