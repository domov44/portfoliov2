'use client';
import Hero from '@/app/components/ui/wrapper/Hero';
import FormContainer from '@/app/components/ui/wrapper/FormContainer';
import Bento from '@/app/components/ui/wrapper/Bento';
import Head from 'next/head';
import TextInput from '@/app/components/ui/form/TextInput';
import { useState } from 'react';
import Button from '@/app/components/ui/button/Button';
import { generateClient } from 'aws-amplify/api';
import { createGallery } from '@/graphql/mutations';
import UploadGallery from '@/app/components/pageElements/administrator/gallery/add/UploadGallery';
import { uploadData } from 'aws-amplify/storage';

const client = generateClient();

function Page() {
    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');
    const [selectedCompressedFile, setSelectedCompressedFile] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [onHome, setOnHome] = useState(true);
    const [homeBackground, setHomeBackground] = useState(false);

    const handleCompressedFileSelect = (file) => {
        setSelectedCompressedFile(file);
    };

    const handleFileSelect = (file) => {
        setSelectedFile(file);
    };

    const uploadFileToS3 = async (file) => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const key = `gallery/${year}/${month}/${file.name}`;

        try {
            await uploadData({
                path: `public/${key}`,
                data: file,
                options: {
                    contentType: file.type,
                },
            });
            return { key };
        } catch (error) {
            throw new Error("Erreur lors de l'upload du fichier");
        }
    };

    async function handleGalleryCreation() {
        if (!place || !date || !selectedCompressedFile) {
            console.error('Veuillez remplir tous les champs requis et importer un fichier compressé');
            return;
        }

        try {
            const { key: compressedKey } = await uploadFileToS3(selectedCompressedFile);

            let fullPictureKey = null;
            if (selectedFile) {
                const { key } = await uploadFileToS3(selectedFile);
                fullPictureKey = key;
            }

            await client.graphql({
                query: createGallery,
                variables: {
                    input: {
                        place: place.toLowerCase(),
                        date: date,
                        picture: compressedKey,
                        fullPicture: fullPictureKey,
                        onHome: onHome,
                        homeBackground: homeBackground
                    }
                }
            });
            console.log("success");

        } catch (error) {
            console.error("Erreur lors de la soumission", error);
        }
    }

    return (
        <>
            <Head>
                <title>Add a trip into database</title>
                <meta name="description" content="Description de la page" />
                <meta property="og:image" content="URL_de_votre_image" />
            </Head>
            <Hero>
                <FormContainer>
                    <Bento width="450px" highlight="highlight" padding="40px"
                        responsive={{
                            mobilePadding: "20px"
                        }}>
                        <TextInput
                            type="text"
                            label="Place"
                            value={place}
                            onChange={(e) => setPlace(e.target.value)}
                            required
                            variant="blue"
                        />
                        <input type='date' onChange={(e) => setDate(e.target.value)} required />
                        
                        <UploadGallery onFileSelect={handleCompressedFileSelect} maxSize={2 * 1048576} acceptedTypes="image/png, image/jpeg, image/jpg, image/avif, image/webp" />
                        
                        <UploadGallery onFileSelect={handleFileSelect} maxSize={5 * 1048576} acceptedTypes="image/png, image/jpeg, image/jpg, image/avif, image/webp" />

                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={onHome}
                                    onChange={() => setOnHome(!onHome)}
                                />
                                On Home
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={homeBackground}
                                    onChange={() => setHomeBackground(!homeBackground)}
                                />
                                Home Background
                            </label>
                        </div>

                        <Button variant="primary" onClick={handleGalleryCreation}>Submit</Button>
                    </Bento>
                </FormContainer>
            </Hero>
        </>
    );
}

export default Page;
