import { generateClient } from 'aws-amplify/api';
import { listSkills } from '@/graphqlCustom/queries';
import fetchS3File from '@/app/utils/fetchS3File';
import MatterShapes from '../MatterShapes';

const client = generateClient();

export default async function ColisionSkillsServer() {
    let imageUrls = [];

    try {
        const skillsResult = await client.graphql({
            query: listSkills,
            variables: {
            },
            authMode: 'identityPool'
        });

        const skillsData = skillsResult.data?.listSkills?.items || [];

        const fetchedImageUrls = await Promise.all(
            skillsData.map(async (skill) => {
                const url = await fetchS3File(skill.colisionLogo);
                return url.toString();
            })
        );

        imageUrls = fetchedImageUrls.filter(url => url);

    } catch (error) {
        console.error('Erreur lors de la récupération des galeries:', error);
    }

    return <MatterShapes images={imageUrls} />;
}
