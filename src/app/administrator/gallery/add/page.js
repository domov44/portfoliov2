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
    const [selectedFile, setSelectedFile] = useState(null);
    const [onHome, setOnHome] = useState(true);
    const [homeBackground, setHomeBackground] = useState(false);

    const handleFileSelect = (file) => {
        setSelectedFile(file);
    };

    const uploadFileToS3 = async () => {
        if (!selectedFile) {
            throw new Error("Aucun fichier sélectionné");
        }

        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');

        const key = `gallery/${year}/${month}/${selectedFile.name}`;
        try {
            await uploadData({
                path: `public/${key}`,
                data: selectedFile,
                options: {
                    contentType: selectedFile.type,
                },
            });
            return { key };
        } catch (error) {
            throw new Error("Erreur lors de l'upload du fichier");
        }
    };

    async function handleGalleryCreation() {
        if (!place || !date || !selectedFile) {
            console.error('Veuillez remplir tous les champs et importer un document');
            return;
        }

        try {
            const { key } = await uploadFileToS3();

            await client.graphql({
                query: createGallery,
                variables: {
                    input: {
                        place: place.toLowerCase(),
                        date: date,
                        picture: key,
                        onHome: onHome,
                        homeBackground: homeBackground
                    }
                }
            });
            console.log("success");

        } catch (error) {
            console.error("error during submit", error);
        }
    }

    return (
        <>
            <Head>
                <title>Add a trip into database</title>
                <meta place="description" content="Description de la page" />
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
                        <input type='date' onChange={(e) => setDate(e.target.value)} />
                        <UploadGallery onFileSelect={handleFileSelect} maxSize={10 * 1048576} acceptedTypes="image/png, image/jpeg, image/jpg, image/PNG, application/pdf, text/plain, text/csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/msword, application/vnd.ms-powerpoint" />
                        
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

