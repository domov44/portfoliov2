import { getUrl } from 'aws-amplify/storage';

const fetchS3File = async (path) => {
    try {
        if (path) {
            const url = await getUrl({
                path: `public/${path}`,
                options: {
                    expiresIn: 3600,
                }
            });
            return url.url;
        }
    } catch (error) {
        console.error('Error fetching file from S3:', error);
        throw error;
    }
};

export default fetchS3File;