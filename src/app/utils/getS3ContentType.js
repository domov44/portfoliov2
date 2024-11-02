import { getProperties  } from 'aws-amplify/storage';

const getContentTypeS3 = async (path) => {
    try {
        if (path) {
            const file = await getProperties({
                path: `public/${path}`
            });
            return file.contentType;
        }
    } catch (error) {
        console.error('Error fetching file from S3:', error);
        throw error;
    }
};

export default getContentTypeS3;