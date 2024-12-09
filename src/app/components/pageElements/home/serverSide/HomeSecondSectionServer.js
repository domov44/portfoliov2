import { generateClient } from 'aws-amplify/api';
import fetchS3File from '@/app/utils/fetchS3File';
import { BentoByFeaturedOrder } from '@/graphql/queries';
import HomeSecondSection from '../HomeSecondSection';
import getContentTypeS3 from '@/app/utils/getS3ContentType';

const client = generateClient();

export default async function HomeSecondSectionServer() {
    let bento = [];

    try {
        const orders = [1];
        const projectsResults = await Promise.all(
            orders.map(async (order) => {
                try {
                    const result = await client.graphql({
                        query: BentoByFeaturedOrder,
                        authMode: 'identityPool',
                        variables: {
                            featuredOrder: order,
                        },
                    });

                    const bentoData = result.data?.BentoByFeaturedOrder?.items?.[0];
                    if (bentoData) {
                        return {
                            label: bentoData.label ?? null,
                            href: bentoData.href ?? null,
                            file: bentoData.file ? await fetchS3File(bentoData.file) : undefined,
                            fileType: bentoData.file ? await getContentTypeS3(bentoData.file) : undefined,
                        };
                    }
                    return null;
                } catch (error) {
                    console.error(`Error fetching data for order ${order}:`, error);
                    return null;
                }
            })
        );

        bento = projectsResults.filter((item) => item !== null);
    } catch (error) {
        console.error('Error retrieving featured projects:', error);
    }

    return <HomeSecondSection bento={bento} />;
}
