import { generateClient } from 'aws-amplify/api';
import { listGalleries } from "@/graphql/queries";
import Section from '../../ui/wrapper/Section';

const client = generateClient();

async function GalleriesList() {
    let galleries = [];

    try {
        const galleriesResult = await client.graphql({
            query: listGalleries,
            authMode: 'identityPool'
        });

        galleries = galleriesResult.data?.listGalleries?.items || [];
    } catch (error) {
        console.error('Erreur lors de la récupération des projets:', error);
    }

    return (
        <Section>
            <h1>All Galleries</h1>
            {galleries.length > 0 ? (
                <ul>
                    {galleries.map((gallery) => (
                        <li key={gallery.id}>{gallery.place} {gallery.date}</li>
                    ))}
                </ul>
            ) : (
                <p>No gallery found</p>
            )}
        </Section>
    );
}

export default GalleriesList;
