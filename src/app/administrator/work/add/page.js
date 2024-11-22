'use client';
import Hero from '@/app/components/ui/wrapper/Hero';
import FormContainer from '@/app/components/ui/wrapper/FormContainer';
import Bento from '@/app/components/ui/wrapper/Bento';
import Head from 'next/head';
import TextInput from '@/app/components/ui/form/TextInput';
import { useState } from 'react';
import Button from '@/app/components/ui/button/Button';
import { generateClient } from 'aws-amplify/api';
import { createProject } from '@/graphql/mutations';
import UploadGallery from '@/app/components/pageElements/administrator/gallery/add/UploadGallery';
import { uploadData } from 'aws-amplify/storage';

const client = generateClient();

function Page() {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [github, setGithub] = useState('');
    const [role, setRole] = useState('');
    const [context, setContext] = useState('');
    const [description, setDescription] = useState('');
    const [years, setYears] = useState('');
    const [href, setHref] = useState('');
    const [selectedThumbnailFile, setSelectedThumbnailFile] = useState(null);

    const handleThumbnailSelect = (file) => {
        setSelectedThumbnailFile(file);
    };

    const uploadFileToS3 = async (file) => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const key = `works/${name}/${year}/${month}/${file.name}`;

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

    const handleSubmit = async () => {
        try {
            const { key: thumbnailKey } = await uploadFileToS3(selectedThumbnailFile);
            
            await client.graphql({
                query: createProject,
                variables: {
                    input: {
                        name: name.toLowerCase(),
                        slug: slug.toLowerCase(),
                        thumbnail: thumbnailKey,
                        github: github.toLowerCase(),
                        role: role.toLowerCase(),
                        context: context.toLowerCase(),
                        description: description,
                        years: parseInt(years),
                        href: href.toLowerCase(),
                        top4: false
                    }
                }
            });

            console.log("success");

        } catch (error) {
            console.error("error during submit", error);
        }
    };

    return (
        <>
            <Head>
                <title>Connectez-vous à votre compte Miamze</title>
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
                        <TextInput
                            type="text"
                            label="Slug"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            required
                            variant="blue"
                        />
                        <TextInput
                            type="text"
                            label="GitHub URL"
                            value={github}
                            onChange={(e) => setGithub(e.target.value)}
                            required
                            variant="blue"
                        />
                        <TextInput
                            type="text"
                            label="Role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                            variant="blue"
                        />
                        <TextInput
                            type="text"
                            label="Context"
                            value={context}
                            onChange={(e) => setContext(e.target.value)}
                            required
                            variant="blue"
                        />
                        <TextInput
                            type="text"
                            label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            variant="blue"
                        />
                        <TextInput
                            type="number"
                            label="Years"
                            value={years}
                            onChange={(e) => setYears(e.target.value)}
                            required
                            variant="blue"
                        />
                        <TextInput
                            type="text"
                            label="Link of the project"
                            value={href}
                            onChange={(e) => setHref(e.target.value)}
                            required
                            variant="blue"
                        />
                        <UploadGallery onFileSelect={handleThumbnailSelect} maxSize={2 * 1048576} acceptedTypes="image/png, image/jpeg, image/jpg, image/avif, image/webp" />
                        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                    </Bento>
                </FormContainer>
            </Hero>
        </>
    );
}

export default Page;
