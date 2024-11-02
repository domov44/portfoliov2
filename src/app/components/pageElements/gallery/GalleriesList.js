import { generateClient } from 'aws-amplify/api';
import { listGalleries } from "@/graphql/queries";
import Section from '../../ui/wrapper/Section';
import fetchS3File from '@/app/utils/fetchS3File';

const client = generateClient();

async function GalleriesList() {
    let galleries = [];

    try {
        const galleriesResult = await client.graphql({
            query: listGalleries,
            authMode: 'identityPool'
        });

        const galleriesData = galleriesResult.data?.listGalleries?.items || [];

        galleries = await Promise.all(
            galleriesData.map(async (gallery) => ({
                ...gallery,
                pictureUrl: await fetchS3File(gallery.picture)
            }))
        );
    } catch (error) {
        console.error('Erreur lors de la récupération des projets:', error);
    }

    return (
        <Section>
            <h1>All Galleries</h1>
            {galleries.length > 0 ? (
                <ul>
                    {galleries.map((gallery) => (
                        <li key={gallery.id}>
                            <img src={gallery.pictureUrl} alt={`${gallery.place} - ${gallery.date}`} />
                            <p>{gallery.place} {gallery.date}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No gallery found</p>
            )}
        </Section>
    );
}

export default GalleriesList;
