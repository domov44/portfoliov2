import { generateClient } from 'aws-amplify/api';
import { listGalleries } from "@/graphql/queries";
import fetchS3File from '@/app/utils/fetchS3File';
import HomeTravel from '../HomeTravel';

const client = generateClient();

export default async function HomeTravelServer() {
    let imageUrls = [];
    let backgroundUrl = '';

    try {
        const galleriesResult = await client.graphql({
            query: listGalleries,
            variables: {
                filter: {
                    onHome: { eq: true },
                }
            },
            authMode: 'identityPool'
        });

        const galleriesData = galleriesResult.data?.listGalleries?.items || [];

        const galleryWithBackground = galleriesData.find(gallery => gallery.homeBackground === true);

        if (galleryWithBackground) {
            const fetchedBackgroundUrl = await fetchS3File(galleryWithBackground.picture);
            backgroundUrl = fetchedBackgroundUrl.toString();
        }

        const fetchedImageUrls = await Promise.all(
            galleriesData.map(async (gallery) => {
                const url = await fetchS3File(gallery.picture);
                return url.toString();
            })
        );

        imageUrls = fetchedImageUrls.filter(url => url);

    } catch (error) {
        console.error('Erreur lors de la récupération des galeries:', error);
    }

    return <HomeTravel images={imageUrls} background={backgroundUrl} />;
}
