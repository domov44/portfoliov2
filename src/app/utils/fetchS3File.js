import { getUrl } from 'aws-amplify/storage';

const fetchS3File = async (path) => {
    try {
        if (path) {
            const url = await getUrl({
                path: `public/${path}`,
            });
            return url.url.origin + url.url.pathname;
        }
    } catch (error) {
        console.error('Error fetching file from S3:', error);
        throw error;
    }
};

export default fetchS3File;