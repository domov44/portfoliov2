'use client';
import Hero from '@/app/components/ui/wrapper/Hero';
import FormContainer from '@/app/components/ui/wrapper/FormContainer';
import Bento from '@/app/components/ui/wrapper/Bento';
import Head from 'next/head';
import TextInput from '@/app/components/ui/form/TextInput';
import { useState } from 'react';
import Button from '@/app/components/ui/button/Button';
import { generateClient } from 'aws-amplify/api';
import { createSkill } from '@/graphql/mutations';
import UploadGallery from '@/app/components/pageElements/administrator/gallery/add/UploadGallery';
import { uploadData } from 'aws-amplify/storage';
import SelectSearchable from '@/app/components/ui/form/SelectSearchable';
import useTypesOptions from '@/app/utils/getTypes';
const client = generateClient();

function Page() {
    const [name, setName] = useState('');
    const [selectedColisionFile, setSelectedColisionFile] = useState(null);
    const [selectedLogoFile, setSelectedLogoFile] = useState(null);
    const [type, setType] = useState(null);

    const typesOptions = useTypesOptions();

    const handleColisionFile = (file) => {
        setSelectedColisionFile(file);
    };

    const handleLogoSelect = (file) => {
        setSelectedLogoFile(file);
    };

    const uploadFileToS3 = async (file) => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const key = `skill/${year}/${month}/${file.name}`;

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
        if (!name || !selectedColisionFile) {
            console.error('Veuillez remplir tous les champs requis et importer un fichier compressé');
            return;
        }

        try {
            const { key: colisionKey } = await uploadFileToS3(selectedColisionFile);

            let logoKey = null;
            if (selectedLogoFile) {
                const { key } = await uploadFileToS3(selectedLogoFile);
                logoKey = key;
            }

            await client.graphql({
                query: createSkill,
                variables: {
                    input: {
                        name: name.toLowerCase(),
                        colisionLogo: colisionKey,
                        logo: logoKey,
                        typeID: type,
                        skillTypeId: type
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
                <title>Add a skill into database</title>
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
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            variant="blue"
                        />
                        <SelectSearchable
                            options={typesOptions}
                            onSelect={(selectedOption) => setType(selectedOption.id)}
                            label="Rechercher un type"
                        />
                        <UploadGallery onFileSelect={handleColisionFile} maxSize={2 * 1048576} acceptedTypes="image/png, image/jpeg, image/jpg, image/avif, image/webp" />
                        <UploadGallery onFileSelect={handleLogoSelect} maxSize={5 * 1048576} acceptedTypes="image/svg" />
                        <Button variant="primary" onClick={handleGalleryCreation}>Submit</Button>
                    </Bento>
                </FormContainer>
            </Hero>
        </>
    );
}

export default Page;
