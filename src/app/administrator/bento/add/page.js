'use client';
import Hero from '@/app/components/ui/wrapper/Hero';
import FormContainer from '@/app/components/ui/wrapper/FormContainer';
import Bento from '@/app/components/ui/wrapper/Bento';
import Head from 'next/head';
import TextInput from '@/app/components/ui/form/TextInput';
import { useState } from 'react';
import Button from '@/app/components/ui/button/Button';
import { generateClient } from 'aws-amplify/api';
import { createBento } from '@/graphql/mutations';
import UploadGallery from '@/app/components/pageElements/administrator/gallery/add/UploadGallery';
import { uploadData } from 'aws-amplify/storage';

const client = generateClient();

function Page() {
    const [label, setLabel] = useState('');
    const [href, setHref] = useState('');
    const [featuredOrder, setFeaturedOrder] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (file) => {
        setSelectedFile(file);
    };

    const uploadFileToS3 = async (file) => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const key = `bento/${year}/${month}/${file.name}`;

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

    async function handleBentoCreation() {
        if (!selectedFile) {
            console.error('Veuillez remplir tous les champs requis et importer un fichier compressé');
            return;
        }

        try {
            let pictureKey = null;
            if (selectedFile) {
                const { key } = await uploadFileToS3(selectedFile);
                pictureKey = key;
            }

            await client.graphql({
                query: createBento,
                variables: {
                    input: {
                        label: label,
                        href: href,
                        file: pictureKey,
                        featuredOrder: featuredOrder
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
                <title>Add a bento into database</title>
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
                            label="Label"
                            value={label}
                            onChange={(e) => setLabel(e.target.value)}
                            required
                            variant="blue"
                        />
                        <TextInput
                            type="text"
                            label="Href"
                            value={href}
                            onChange={(e) => setHref(e.target.value)}
                            required
                            variant="blue"
                        />
                        <TextInput
                            type="text"
                            label="Order"
                            value={featuredOrder}
                            onChange={(e) => setFeaturedOrder(e.target.value)}
                            required
                            variant="blue"
                        />
                        <UploadGallery onFileSelect={handleFileSelect} maxSize={2 * 1048576} acceptedTypes="image/png, image/jpeg, image/jpg, image/avif, image/webp" />
                        <Button variant="primary" onClick={handleBentoCreation}>Submit</Button>
                    </Bento>
                </FormContainer>
            </Hero>
        </>
    );
}

export default Page;
