// GalleriesList.js
import { generateClient } from 'aws-amplify/api';
import { listGalleries } from "@/graphql/queries";
import Section from '@/app/components/ui/wrapper/Section';
import fetchS3File from '@/app/utils/fetchS3File';
import GalleriesGrid from '../GalleriesGrid';

const client = generateClient();

async function GalleriesGridServer() {
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
        console.error('Erreur lors de la récupération des galeries:', error);
    }

    return (
        <Section className="align_start h100vh justify_start space-0">
            {galleries.length > 0 ? (
                <GalleriesGrid galleries={galleries} />
            ) : (
                <p>No gallery found</p>
            )}
        </Section>
    );
}

export default GalleriesGridServer;
